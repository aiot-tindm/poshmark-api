import { DscoRequestConfig } from '../validators/auth';
/**
 * Get pricing approval history
 *
 * @see https://api.dsco.io/api/v3/pricing/approval/history
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Pricing approval history data
 */
export declare function getPricingHistory(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
