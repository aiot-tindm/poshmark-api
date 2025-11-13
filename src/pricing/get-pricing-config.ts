import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get pricing approval configuration
 *
 * @see https://api.dsco.io/api/v3/pricing/approval/config
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Pricing approval config data
 */
export async function getPricingConfig(
  config: DscoRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/pricing/approval/config',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
