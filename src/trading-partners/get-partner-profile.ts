import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get partner profile
 *
 * @see https://api.dsco.io/api/v3/trading-partners/profile
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Partner profile data
 */
export async function getPartnerProfile(
  config: DscoRequestConfig,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/trading-partners/profile',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
