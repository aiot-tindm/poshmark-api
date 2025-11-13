import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get warehouse codes
 *
 * @see https://api.dsco.io/api/v3/retailer-warehouses/codes
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Warehouse codes data
 */
export async function getWarehouseCodes(
  config: DscoRequestConfig,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/retailer-warehouses/codes',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
