/**
 * Time utility functions
 */

/**
 * Get current Unix timestamp in seconds
 */
export function getCurrentTimestamp(): number {
  return Math.floor(Date.now() / 1000);
}

/**
 * Get current Unix timestamp in milliseconds
 */
export function getCurrentTimestampMs(): number {
  return Date.now();
}

/**
 * Convert seconds to milliseconds
 */
export function secondsToMs(seconds: number): number {
  return seconds * 1000;
}

/**
 * Convert milliseconds to seconds
 */
export function msToSeconds(ms: number): number {
  return Math.floor(ms / 1000);
}

/**
 * Sleep for a specified number of milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if a timestamp has expired
 */
export function isExpired(expiresAt: number, bufferSeconds = 60): boolean {
  const now = getCurrentTimestamp();
  return now >= expiresAt - bufferSeconds;
}
