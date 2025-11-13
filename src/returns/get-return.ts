import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get return by return key
 *
 * @see https://api.dsco.io/api/v3/return/
 *
 * @param config - Request configuration with access token
 * @param returnKey - The return key to retrieve
 * @returns Return information
 */
export async function getReturn(
  config: PoshmarkRequestConfig,
  returnKey: string,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/return/',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: { returnKey },
  });
}
