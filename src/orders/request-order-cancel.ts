import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Request order cancellation
 *
 * @see https://api.dsco.io/api/v3/order/request/cancel
 *
 * @param config - Request configuration with access token
 * @param request - Request order cancel request
 * @returns Request order cancel response
 */
export async function requestOrderCancel(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/order/request/cancel',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
