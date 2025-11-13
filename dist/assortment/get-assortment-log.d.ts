import { DscoRequestConfig } from '../validators/auth';
/**
 * Get assortment log
 *
 * @see https://api.dsco.io/api/v3/assortment/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Assortment log data
 */
export declare function getAssortmentLog(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
