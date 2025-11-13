import { DscoRequestConfig } from '../validators/auth';
/**
 * Get marketplace promotion
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace promotion data
 */
export declare function getPromotion(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
