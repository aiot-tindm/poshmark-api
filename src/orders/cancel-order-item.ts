import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Cancel order item
 *
 * @see https://api.dsco.io/api/v3/order/item/cancel
 *
 * @param config - Request configuration with access token
 * @param request - Cancel order item request
 * @returns Cancel order item response
 */
export async function cancelOrderItem(
  config: DscoRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/order/item/cancel',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
