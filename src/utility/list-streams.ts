import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * List all streams
 *
 * @see https://api.dsco.io/api/v3/stream
 *
 * @param config - Request configuration with access token
 * @returns List of streams
 */
export async function listStreams(config: DscoRequestConfig): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/stream',
    accessToken: config.access_token,
    outputCodec: t.unknown,
  });
}
