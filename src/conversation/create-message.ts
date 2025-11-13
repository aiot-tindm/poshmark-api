import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create a message in a conversation
 *
 * @see https://api.dsco.io/api/v3/conversation/message
 *
 * @param config - Request configuration with access token
 * @param request - Create message request
 * @returns Created message
 */
export async function createMessage(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/conversation/message',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
