import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Update a conversation
 *
 * @see https://api.dsco.io/api/v3/conversation
 *
 * @param config - Request configuration with access token
 * @param conversation - The conversation updates
 * @returns The updated conversation
 */
export async function updateConversation(
  config: PoshmarkRequestConfig,
  conversation: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'PUT',
    path: '/conversation',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: conversation,
  });
}
