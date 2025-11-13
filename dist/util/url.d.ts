/**
 * URL utility functions
 */
/**
 * Normalize a base URL by removing trailing slash
 */
export declare function normalizeBaseUrl(url: string): string;
/**
 * Build a full URL from base URL and path
 */
export declare function buildUrl(baseUrl: string, path: string): string;
/**
 * Build a URL with query parameters
 */
export declare function buildUrlWithParams(baseUrl: string, path: string, params?: Record<string, string | number | boolean | undefined>): string;
