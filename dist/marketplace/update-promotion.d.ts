import { DscoRequestConfig } from '../validators/auth';
/**
 * Update a marketplace promotion
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion/{promotionId}
 *
 * @param config - Request configuration with access token
 * @param promotionId - The promotion ID
 * @param promotion - The promotion updates
 * @returns The updated promotion
 */
export declare function updatePromotion(config: DscoRequestConfig, promotionId: string, promotion: unknown): Promise<unknown>;
