import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get inventory
 *
 * @see https://api.dsco.io/api/v3/inventory
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Inventory data
 */
export async function getInventory(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/inventory',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
