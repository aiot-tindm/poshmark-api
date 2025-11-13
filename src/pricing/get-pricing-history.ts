import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get pricing approval history
 *
 * @see https://api.dsco.io/api/v3/pricing/approval/history
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Pricing approval history data
 */
export async function getPricingHistory(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/pricing/approval/history',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
