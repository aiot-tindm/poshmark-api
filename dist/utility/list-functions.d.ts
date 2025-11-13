import { DscoRequestConfig } from '../validators/auth';
/**
 * List all functions
 *
 * @see https://api.dsco.io/api/v3/function
 *
 * @param config - Request configuration with access token
 * @returns List of functions
 */
export declare function listFunctions(config: DscoRequestConfig): Promise<unknown>;
