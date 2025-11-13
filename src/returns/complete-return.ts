import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Complete a return
 *
 * @see https://api.dsco.io/api/v3/return/
 *
 * @param config - Request configuration with access token
 * @param returnData - The return object with completion information
 * @returns The completed return
 */
export async function completeReturn(
  config: DscoRequestConfig,
  returnData: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'PUT',
    path: '/return/',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: returnData,
  });
}
