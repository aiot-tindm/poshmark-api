import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create shipping labels
 *
 * @see https://api.dsco.io/api/v3/shippinglabels
 *
 * @param config - Request configuration with access token
 * @param request - Shipping labels request
 * @returns Shipping labels response
 */
export async function getShippingLabels(
  config: DscoRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/shippinglabels',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
