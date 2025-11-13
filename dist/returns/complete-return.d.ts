import { DscoRequestConfig } from '../validators/auth';
/**
 * Complete a return
 *
 * @see https://api.dsco.io/api/v3/return/
 *
 * @param config - Request configuration with access token
 * @param returnData - The return object with completion information
 * @returns The completed return
 */
export declare function completeReturn(config: DscoRequestConfig, returnData: unknown): Promise<unknown>;
