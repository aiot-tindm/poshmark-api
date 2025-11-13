import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get warehouse page with pagination
 *
 * @see https://api.dsco.io/api/v3/warehouse/page
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters for pagination
 * @returns Page of warehouses
 */
export async function getWarehousePage(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/warehouse/page',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
