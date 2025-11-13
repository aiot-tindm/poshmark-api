/**
 * URL utility functions
 */

/**
 * Normalize a base URL by removing trailing slash
 */
export function normalizeBaseUrl(url: string): string {
  return url.replace(/\/$/, '');
}

/**
 * Build a full URL from base URL and path
 */
export function buildUrl(baseUrl: string, path: string): string {
  const normalizedBase = normalizeBaseUrl(baseUrl);
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

/**
 * Build a URL with query parameters
 */
export function buildUrlWithParams(
  baseUrl: string,
  path: string,
  params?: Record<string, string | number | boolean | undefined>
): string {
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
