import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch cancel order items
 *
 * @see https://api.dsco.io/api/v3/order/item/cancel/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch cancel items request
 * @returns Batch cancel items response
 */
export async function batchCancelItems(
  config: DscoRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/order/item/cancel/batch/small',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
