"use strict";
/**
 * URL utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeBaseUrl = normalizeBaseUrl;
exports.buildUrl = buildUrl;
exports.buildUrlWithParams = buildUrlWithParams;
/**
 * Normalize a base URL by removing trailing slash
 */
function normalizeBaseUrl(url) {
    return url.replace(/\/$/, '');
}
/**
 * Build a full URL from base URL and path
 */
function buildUrl(baseUrl, path) {
    const normalizedBase = normalizeBaseUrl(baseUrl);
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${normalizedBase}${normalizedPath}`;
}
/**
 * Build a URL with query parameters
 */
function buildUrlWithParams(baseUrl, path, params) {
    const url = buildUrl(baseUrl, path);
    if (!params || Object.keys(params).length === 0) {
        return url;
    }
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            searchParams.append(key, String(value));
        }
    });
    const queryString = searchParams.toString();
    return queryString ? `${url}?${queryString}` : url;
}
