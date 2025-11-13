import { DscoRequestConfig } from '../validators/auth';
/**
 * Get partner profile
 *
 * @see https://api.dsco.io/api/v3/trading-partners/profile
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Partner profile data
 */
export declare function getPartnerProfile(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
