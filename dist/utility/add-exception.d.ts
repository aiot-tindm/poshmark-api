import { DscoRequestConfig } from '../validators/auth';
/**
 * Add exception
 *
 * @see https://api.dsco.io/api/v3/addException
 *
 * @param config - Request configuration with access token
 * @param request - Add exception request
 * @returns Add exception response
 */
export declare function addException(config: DscoRequestConfig, request: unknown): Promise<unknown>;
