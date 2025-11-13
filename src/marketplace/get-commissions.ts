import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get marketplace commissions
 *
 * @see https://api.dsco.io/api/v3/marketplace/commissions
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace commissions data
 */
export async function getCommissions(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/marketplace/commissions',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
