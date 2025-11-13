import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch large return operations
 *
 * @see https://api.dsco.io/api/v3/return/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch return request
 * @returns Batch return response
 */
export declare function batchLargeReturn(config: DscoRequestConfig, request: unknown): Promise<unknown>;
