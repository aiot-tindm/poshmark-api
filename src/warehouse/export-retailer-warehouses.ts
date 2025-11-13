import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Export retailer warehouses
 *
 * @see https://api.dsco.io/api/v3/retailer-warehouses/export
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Retailer warehouses export data
 */
export async function exportRetailerWarehouses(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/retailer-warehouses/export',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
