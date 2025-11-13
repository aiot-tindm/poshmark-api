import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get inventory log
 *
 * @see https://api.dsco.io/api/v3/inventory/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Inventory log data
 */
export async function getInventoryLog(
  config: DscoRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/inventory/log',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
