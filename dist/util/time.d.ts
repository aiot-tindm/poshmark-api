/**
 * Time utility functions
 */
/**
 * Get current Unix timestamp in seconds
 */
export declare function getCurrentTimestamp(): number;
/**
 * Get current Unix timestamp in milliseconds
 */
export declare function getCurrentTimestampMs(): number;
/**
 * Convert seconds to milliseconds
 */
export declare function secondsToMs(seconds: number): number;
/**
 * Convert milliseconds to seconds
 */
export declare function msToSeconds(ms: number): number;
/**
 * Sleep for a specified number of milliseconds
 */
export declare function sleep(ms: number): Promise<void>;
/**
 * Check if a timestamp has expired
 */
export declare function isExpired(expiresAt: number, bufferSeconds?: number): boolean;
