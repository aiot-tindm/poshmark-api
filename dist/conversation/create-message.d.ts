import { DscoRequestConfig } from '../validators/auth';
/**
 * Create a message in a conversation
 *
 * @see https://api.dsco.io/api/v3/conversation/message
 *
 * @param config - Request configuration with access token
 * @param request - Create message request
 * @returns Created message
 */
export declare function createMessage(config: DscoRequestConfig, request: unknown): Promise<unknown>;
