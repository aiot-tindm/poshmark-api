import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * List conversations
 *
 * @see https://api.dsco.io/api/v3/conversation/list
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns List of conversations
 */
export async function listConversations(
  config: DscoRequestConfig,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/conversation/list',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
