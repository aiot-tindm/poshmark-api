import { DscoRequestConfig } from '../validators/auth';
/**
 * Create a new conversation
 *
 * @see https://api.dsco.io/api/v3/conversation
 *
 * @param config - Request configuration with access token
 * @param request - Conversation creation request
 * @returns Created conversation
 */
export declare function createConversation(config: DscoRequestConfig, request: unknown): Promise<unknown>;
