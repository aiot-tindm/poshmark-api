import { DscoRequestConfig } from '../validators/auth';
/**
 * Get return log
 *
 * @see https://api.dsco.io/api/v3/return/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Return log data
 */
export declare function getReturnLog(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
