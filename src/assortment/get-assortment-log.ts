import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get assortment log
 *
 * @see https://api.dsco.io/api/v3/assortment/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Assortment log data
 */
export async function getAssortmentLog(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/assortment/log',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
