import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Acknowledge order items
 *
 * @see https://api.dsco.io/api/v3/order/acknowledge/items
 *
 * @param config - Request configuration with access token
 * @param request - Acknowledge order items request
 * @returns Acknowledge order items response
 */
export async function acknowledgeOrderItems(
  config: DscoRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/order/acknowledge/items',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
