import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Stream operations
 *
 * @see https://api.dsco.io/api/v3/stream
 *
 * @param config - Request configuration with access token
 * @param request - Stream request
 * @returns Stream response
 */
export async function stream(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/stream',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
