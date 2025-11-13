import { DscoRequestConfig } from '../validators/auth';
/**
 * Create marketplace adjustments
 *
 * @see https://api.dsco.io/api/v3/marketplace/adjustments
 *
 * @param config - Request configuration with access token
 * @param adjustments - The adjustments to create
 * @returns The created adjustments
 */
export declare function createAdjustments(config: DscoRequestConfig, adjustments: unknown): Promise<unknown>;
