import {buildUrl} from '../util/url';

/**
 * Create a full endpoint URI from base URL and path
 */
export function createEndpointUri(baseUri: string, path: string): string {
  return buildUrl(baseUri, path);
}
