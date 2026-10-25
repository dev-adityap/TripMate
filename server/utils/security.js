// Shared security helpers for the TripMate API.
// Keeps password hashing, request validation and rate limiting dependency-free
// (Node built-ins only) so the server has no extra supply-chain surface.

import crypto from 'crypto';

// ---------------------------------------------------------------------------
// Password hashing (scrypt, Node built-in)
// ---------------------------------------------------------------------------
const HASH_PREFIX = 'scrypt$';

export function hashPassword(plainPassword) {
  const salt = crypto.randomBytes(16).toString('hex');
  const derived = crypto.scryptSync(String(plainPassword), salt, 64).toString('hex');
  return `${HASH_PREFIX}${salt}$${derived}`;
}

export function verifyPassword(plainPassword, stored) {
  if (typeof stored !== 'string' || stored.length === 0) return false;

  // Legacy accounts were stored as plaintext. Accept them once and let the
  // caller re-hash on successful login.
  if (!stored.startsWith(HASH_PREFIX)) {
    return stored === String(plainPassword);
  }

  const [, salt, expected] = stored.split('$');
  if (!salt || !expected) return false;

  const derived = crypto.scryptSync(String(plainPassword), salt, 64);
  const expectedBuf = Buffer.from(expected, 'hex');
  if (expectedBuf.length !== derived.length) return false;

  return crypto.timingSafeEqual(derived, expectedBuf);
}

export function isHashedPassword(stored) {
  return typeof stored === 'string' && stored.startsWith(HASH_PREFIX);
}

// ---------------------------------------------------------------------------
// Input validation (also blocks NoSQL operator injection such as { $ne: null })
// ---------------------------------------------------------------------------
export function isPlainString(value) {
  return typeof value === 'string';
}

export function sanitizeString(value, { maxLength = 500, field = 'field' } = {}) {
  if (!isPlainString(value)) {
    const err = new Error(`Invalid ${field}`);
    err.status = 400;
    throw err;
  }
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    const err = new Error(`${field} is required`);
    err.status = 400;
    throw err;
  }
  if (trimmed.length > maxLength) {
    const err = new Error(`${field} must be ${maxLength} characters or fewer`);
    err.status = 400;
    throw err;
  }
  return trimmed;
}

export function sanitizeEmail(value, { field = 'email' } = {}) {
  const email = sanitizeString(value, { maxLength: 254, field });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    const err = new Error('Please provide a valid email address');
    err.status = 400;
    throw err;
  }
  return email.toLowerCase();
}

// ---------------------------------------------------------------------------
// Fixed-window rate limiter (in-memory, per IP + bucket key)
// ---------------------------------------------------------------------------
const buckets = new Map();

export function rateLimit({ windowMs = 60_000, max = 30, key = 'default' } = {}) {
  return (req, res, next) => {
    const ip = req.ip || req.socket?.remoteAddress || 'unknown';
    const bucketKey = `${key}:${ip}`;
    const now = Date.now();
    const entry = buckets.get(bucketKey);

    if (!entry || now > entry.resetAt) {
      buckets.set(bucketKey, { count: 1, resetAt: now + windowMs });
      return next();
    }

    entry.count += 1;
    if (entry.count > max) {
      const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
      res.set('Retry-After', String(retryAfter));
      return res.status(429).json({ error: 'Too many requests. Please try again shortly.' });
    }
    return next();
  };
}

// Basic sweep so the map cannot grow unbounded.
const sweep = setInterval(() => {
  const now = Date.now();
  for (const [k, v] of buckets.entries()) {
    if (now > v.resetAt) buckets.delete(k);
  }
}, 10 * 60_000);
if (typeof sweep.unref === 'function') sweep.unref();
