import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * List messages in a conversation
 *
 * @see https://api.dsco.io/api/v3/conversation/message/list
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters
 * @returns List of messages
 */
export async function listMessages(
  config: DscoRequestConfig,
  params: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/conversation/message/list',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
