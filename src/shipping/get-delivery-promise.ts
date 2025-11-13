import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get delivery promise
 *
 * @see https://api.dsco.io/api/v3/deliverypromise
 *
 * @param config - Request configuration with access token
 * @param request - Delivery promise request
 * @returns Delivery promise response
 */
export async function getDeliveryPromise(
  config: DscoRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/deliverypromise',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
