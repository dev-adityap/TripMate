/**
 * Safe localStorage helpers.
 *
 * Reading JSON straight out of localStorage throws when a value is corrupted
 * (for example by an older schema or a manual edit), which would unmount the
 * whole page. These helpers never throw.
 */

export function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null || raw === undefined) return fallback;
    const parsed = JSON.parse(raw);
    return parsed === null || parsed === undefined ? fallback : parsed;
  } catch {
    return fallback;
  }
}

export function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeKey(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}
