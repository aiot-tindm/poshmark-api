import { DscoRequestConfig } from '../validators/auth';
/**
 * List conversations
 *
 * @see https://api.dsco.io/api/v3/conversation/list
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns List of conversations
 */
export declare function listConversations(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
