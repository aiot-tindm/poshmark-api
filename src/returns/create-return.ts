import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create a single return
 *
 * @see https://api.dsco.io/api/v3/return/
 *
 * @param config - Request configuration with access token
 * @param returnData - The return object to create
 * @returns The created return
 */
export async function createReturn(
  config: PoshmarkRequestConfig,
  returnData: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/return/',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: returnData,
  });
}
