import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch large return operations
 *
 * @see https://api.dsco.io/api/v3/return/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch return request
 * @returns Batch return response
 */
export async function batchLargeReturn(
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/return/batch/large',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
