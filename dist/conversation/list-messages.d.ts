import { DscoRequestConfig } from '../validators/auth';
/**
 * List messages in a conversation
 *
 * @see https://api.dsco.io/api/v3/conversation/message/list
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters
 * @returns List of messages
 */
export declare function listMessages(config: DscoRequestConfig, params: Record<string, string | number>): Promise<unknown>;
