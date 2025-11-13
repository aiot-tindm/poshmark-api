import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get marketplace promotion
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace promotion data
 */
export async function getPromotion(
  config: DscoRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/marketplace/promotion',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
