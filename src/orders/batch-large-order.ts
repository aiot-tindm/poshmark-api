import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch large order operations
 *
 * @see https://api.dsco.io/api/v3/order/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch order request
 * @returns Batch order response
 */
export async function batchLargeOrder(
  config: DscoRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/order/batch/large',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
