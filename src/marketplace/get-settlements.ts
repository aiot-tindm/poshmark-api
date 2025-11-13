import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get marketplace settlements
 *
 * @see https://api.dsco.io/api/v3/marketplace/settlements
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace settlements data
 */
export async function getSettlements(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/marketplace/settlements',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
