import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get returns page with pagination
 *
 * @see https://api.dsco.io/api/v3/return/page
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters for pagination
 * @returns Page of returns
 */
export async function getReturnPage(
  config: DscoRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/return/page',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
