import { DscoRequestConfig } from '../validators/auth';
/**
 * Update a conversation
 *
 * @see https://api.dsco.io/api/v3/conversation
 *
 * @param config - Request configuration with access token
 * @param conversation - The conversation updates
 * @returns The updated conversation
 */
export declare function updateConversation(config: DscoRequestConfig, conversation: unknown): Promise<unknown>;
