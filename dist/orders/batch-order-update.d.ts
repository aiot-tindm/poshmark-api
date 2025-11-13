import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch order updates (small)
 *
 * @see https://api.dsco.io/api/v3/orderupdate/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch order update request
 * @returns Batch order update response
 */
export declare function batchOrderUpdate(config: DscoRequestConfig, request: unknown): Promise<unknown>;
