import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get catalog log
 *
 * @see https://api.dsco.io/api/v3/catalog/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Catalog log data
 */
export async function getCatalogLog(
  config: DscoRequestConfig,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/catalog/log',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
