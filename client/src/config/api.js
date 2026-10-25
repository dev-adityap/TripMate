/**
 * Central API configuration.
 *
 * The API base URL is read from VITE_API_URL so the deployed build can point at
 * a real backend. It falls back to http://localhost:5000 for local development.
 */
const RAW_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_BASE = RAW_BASE.replace(/\/+$/, '');

export const apiUrl = (path) => `${API_BASE}${path.startsWith('/') ? path : `/${path}`}`;

export async function apiFetch(path, options = {}) {
  const response = await fetch(apiUrl(path), {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });

  let body = null;
  const text = await response.text();
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
  }

  if (!response.ok) {
    const message = (body && body.error) || (body && body.message) || `Request failed (${response.status})`;
    const error = new Error(message);
    error.status = response.status;
    error.body = body;
    throw error;
  }

  return body;
}
