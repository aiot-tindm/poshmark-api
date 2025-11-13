import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get return log
 *
 * @see https://api.dsco.io/api/v3/return/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Return log data
 */
export async function getReturnLog(
  config: DscoRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/return/log',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
