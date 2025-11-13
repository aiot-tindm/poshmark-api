import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Delete a stream
 *
 * @see https://api.dsco.io/api/v3/stream/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The stream ID
 * @returns The deletion result
 */
export async function deleteStream(
  config: DscoRequestConfig,
  id: string
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'DELETE',
    path: `/stream/${id}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
  });
}
