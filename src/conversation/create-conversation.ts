import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create a new conversation
 *
 * @see https://api.dsco.io/api/v3/conversation
 *
 * @param config - Request configuration with access token
 * @param request - Conversation creation request
 * @returns Created conversation
 */
export async function createConversation(
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/conversation',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
