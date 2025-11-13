import { DscoRequestConfig } from '../validators/auth';
/**
 * Review promotion
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion/{promotionId}/reviewpromotion
 *
 * @param config - Request configuration with access token
 * @param promotionId - The promotion ID
 * @param request - Review promotion request
 * @returns Review promotion response
 */
export declare function reviewPromotion(config: DscoRequestConfig, promotionId: string, request: unknown): Promise<unknown>;
