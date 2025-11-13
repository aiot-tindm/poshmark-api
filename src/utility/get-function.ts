import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get function by function ID
 *
 * @see https://api.dsco.io/api/v3/function/{functionId}
 *
 * @param config - Request configuration with access token
 * @param functionId - Function ID
 * @param params - Optional query parameters
 * @returns Function data
 */
export async function getFunction(
  config: DscoRequestConfig,
  functionId: string,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/function/${functionId}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
