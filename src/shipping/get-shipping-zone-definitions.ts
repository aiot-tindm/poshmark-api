import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get shipping zone definitions
 *
 * @see https://api.dsco.io/api/v3/marketplace/shippingzonedefinitions
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Shipping zone definitions data
 */
export async function getShippingZoneDefinitions(
  config: DscoRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/marketplace/shippingzonedefinitions',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
