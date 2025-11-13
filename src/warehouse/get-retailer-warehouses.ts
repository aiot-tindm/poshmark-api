import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get retailer warehouses
 *
 * @see https://api.dsco.io/api/v3/retailer-warehouses
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Retailer warehouses data
 */
export async function getRetailerWarehouses(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/retailer-warehouses',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
