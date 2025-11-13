import { DscoRequestConfig } from '../validators/auth';
/**
 * Get pricing approval configuration
 *
 * @see https://api.dsco.io/api/v3/pricing/approval/config
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Pricing approval config data
 */
export declare function getPricingConfig(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
