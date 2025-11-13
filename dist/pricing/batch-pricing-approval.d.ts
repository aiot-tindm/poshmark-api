import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch pricing approval (large)
 *
 * @see https://api.dsco.io/api/v3/pricing/approval/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch pricing approval request
 * @returns Batch pricing approval response
 */
export declare function batchPricingApproval(config: DscoRequestConfig, request: unknown): Promise<unknown>;
