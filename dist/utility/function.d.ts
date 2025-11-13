import { DscoRequestConfig } from '../validators/auth';
/**
 * Function operations
 *
 * @see https://api.dsco.io/api/v3/function
 *
 * @param config - Request configuration with access token
 * @param request - Function request
 * @returns Function response
 */
export declare function executeFunction(config: DscoRequestConfig, request: unknown): Promise<unknown>;
