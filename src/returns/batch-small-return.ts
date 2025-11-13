import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch small return operations
 *
 * @see https://api.dsco.io/api/v3/return/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch return request
 * @returns Batch return response
 */
export async function batchSmallReturn(
  config: DscoRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/return/batch/small',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
