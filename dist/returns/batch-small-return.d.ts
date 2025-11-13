import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch small return operations
 *
 * @see https://api.dsco.io/api/v3/return/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch return request
 * @returns Batch return response
 */
export declare function batchSmallReturn(config: DscoRequestConfig, request: unknown): Promise<unknown>;
