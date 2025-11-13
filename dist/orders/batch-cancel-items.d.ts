import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch cancel order items
 *
 * @see https://api.dsco.io/api/v3/order/item/cancel/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch cancel items request
 * @returns Batch cancel items response
 */
export declare function batchCancelItems(config: DscoRequestConfig, request: unknown): Promise<unknown>;
