import { DscoRequestConfig } from '../validators/auth';
/**
 * Get marketplace commissions
 *
 * @see https://api.dsco.io/api/v3/marketplace/commissions
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace commissions data
 */
export declare function getCommissions(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
