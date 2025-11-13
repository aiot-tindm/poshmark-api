import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create a stream operation (sync, setpartitionowner, repartition)
 *
 * @see https://api.dsco.io/api/v3/stream/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The stream ID
 * @param operation - The operation to perform on the stream
 * @returns The operation result
 */
export async function createStreamOperation(
  config: DscoRequestConfig,
  id: string,
  operation: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: `/stream/${id}`,
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: operation,
  });
}
