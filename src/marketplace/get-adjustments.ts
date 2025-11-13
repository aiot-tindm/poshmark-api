import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get marketplace adjustments
 *
 * @see https://api.dsco.io/api/v3/marketplace/adjustments
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace adjustments data
 */
export async function getAdjustments(
  config: DscoRequestConfig,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/marketplace/adjustments',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
