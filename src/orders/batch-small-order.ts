import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch small order operations
 *
 * @see https://api.dsco.io/api/v3/order/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch order request
 * @returns Batch order response
 */
export async function batchSmallOrder(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/order/batch/small',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
