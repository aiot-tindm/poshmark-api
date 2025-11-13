import { DscoRequestConfig } from '../validators/auth';
/**
 * Get pricing approval
 *
 * @see https://api.dsco.io/api/v3/pricing/approval
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Pricing approval data
 */
export declare function getPricingApproval(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
