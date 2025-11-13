import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch large order operations
 *
 * @see https://api.dsco.io/api/v3/order/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch order request
 * @returns Batch order response
 */
export declare function batchLargeOrder(config: DscoRequestConfig, request: unknown): Promise<unknown>;
