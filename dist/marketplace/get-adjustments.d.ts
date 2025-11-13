import { DscoRequestConfig } from '../validators/auth';
/**
 * Get marketplace adjustments
 *
 * @see https://api.dsco.io/api/v3/marketplace/adjustments
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace adjustments data
 */
export declare function getAdjustments(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
