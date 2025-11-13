import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Health check endpoint
 *
 * @see https://api.dsco.io/api/v3/hello
 *
 * @param config - Request configuration with access token
 * @returns Health check response
 */
export async function hello(config: DscoRequestConfig): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/hello',
    accessToken: config.access_token,
    outputCodec: t.unknown,
  });
}
