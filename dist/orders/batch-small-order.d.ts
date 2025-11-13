import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch small order operations
 *
 * @see https://api.dsco.io/api/v3/order/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch order request
 * @returns Batch order response
 */
export declare function batchSmallOrder(config: DscoRequestConfig, request: unknown): Promise<unknown>;
