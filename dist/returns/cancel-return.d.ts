import { DscoRequestConfig } from '../validators/auth';
/**
 * Cancel return
 *
 * @see https://api.dsco.io/api/v3/return/cancel
 *
 * @param config - Request configuration with access token
 * @param request - Cancel return request
 * @returns Cancel return response
 */
export declare function cancelReturn(config: DscoRequestConfig, request: unknown): Promise<unknown>;
