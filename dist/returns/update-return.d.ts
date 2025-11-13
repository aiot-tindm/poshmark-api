import { DscoRequestConfig } from '../validators/auth';
/**
 * Update return
 *
 * @see https://api.dsco.io/api/v3/return/update
 *
 * @param config - Request configuration with access token
 * @param request - Update return request
 * @returns Update return response
 */
export declare function updateReturn(config: DscoRequestConfig, request: unknown): Promise<unknown>;
