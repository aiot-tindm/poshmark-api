import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get single inventory item
 *
 * @see https://api.dsco.io/api/v3/inventory/singleItem
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters (itemKey, etc.)
 * @returns Single inventory item data
 */
export async function getSingleItem(
  config: DscoRequestConfig,
  params: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/inventory/singleItem',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
