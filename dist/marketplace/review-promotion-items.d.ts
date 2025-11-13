import { DscoRequestConfig } from '../validators/auth';
/**
 * Review promotion items
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion/{promotionId}/reviewitems
 *
 * @param config - Request configuration with access token
 * @param promotionId - The promotion ID
 * @param params - Optional query parameters
 * @returns Review promotion items data
 */
export declare function reviewPromotionItems(config: DscoRequestConfig, promotionId: string, params?: Record<string, string | number>): Promise<unknown>;
