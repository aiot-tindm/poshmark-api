import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get pricing approval
 *
 * @see https://api.dsco.io/api/v3/pricing/approval
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Pricing approval data
 */
export async function getPricingApproval(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/pricing/approval',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
