import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch order updates (small)
 *
 * @see https://api.dsco.io/api/v3/orderupdate/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch order update request
 * @returns Batch order update response
 */
export async function batchOrderUpdate(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/orderupdate/batch/small',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
