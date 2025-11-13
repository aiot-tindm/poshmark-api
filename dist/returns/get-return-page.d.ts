import { DscoRequestConfig } from '../validators/auth';
/**
 * Get returns page with pagination
 *
 * @see https://api.dsco.io/api/v3/return/page
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters for pagination
 * @returns Page of returns
 */
export declare function getReturnPage(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
