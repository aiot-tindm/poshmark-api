import { DscoRequestConfig } from '../validators/auth';
/**
 * Create a marketplace promotion
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion
 *
 * @param config - Request configuration with access token
 * @param promotion - The promotion object to create
 * @returns The created promotion
 */
export declare function createPromotion(config: DscoRequestConfig, promotion: unknown): Promise<unknown>;
