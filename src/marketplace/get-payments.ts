import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get marketplace payments
 *
 * @see https://api.dsco.io/api/v3/marketplace/payments
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace payments data
 */
export async function getPayments(
  config: DscoRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/marketplace/payments',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
