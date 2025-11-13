/**
 * Object utility functions
 */
/**
 * Deep clone an object
 */
export declare function deepClone<T>(obj: T): T;
/**
 * Remove undefined values from an object
 */
export declare function removeUndefined<T extends Record<string, unknown>>(obj: T): Partial<T>;
/**
 * Check if an object is empty
 */
export declare function isEmpty(obj: Record<string, unknown>): boolean;
/**
 * Pick specific keys from an object
 */
export declare function pick<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
/**
 * Omit specific keys from an object
 */
export declare function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
