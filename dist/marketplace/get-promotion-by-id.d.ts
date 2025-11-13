import { DscoRequestConfig } from '../validators/auth';
/**
 * Get promotion by promotion ID
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion/{promotionId}
 *
 * @param config - Request configuration with access token
 * @param promotionId - The promotion ID
 * @param params - Optional query parameters
 * @returns Promotion data
 */
export declare function getPromotionById(config: DscoRequestConfig, promotionId: string, params?: Record<string, string | number>): Promise<unknown>;
