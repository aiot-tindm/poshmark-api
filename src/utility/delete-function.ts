import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Delete a function
 *
 * @see https://api.dsco.io/api/v3/function/{functionId}
 *
 * @param config - Request configuration with access token
 * @param functionId - The function ID
 * @returns The deletion result
 */
export async function deleteFunction(
  config: DscoRequestConfig,
  functionId: string
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'DELETE',
    path: `/function/${functionId}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
  });
}
