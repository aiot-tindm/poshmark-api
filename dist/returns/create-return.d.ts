import { DscoRequestConfig } from '../validators/auth';
/**
 * Create a single return
 *
 * @see https://api.dsco.io/api/v3/return/
 *
 * @param config - Request configuration with access token
 * @param returnData - The return object to create
 * @returns The created return
 */
export declare function createReturn(config: DscoRequestConfig, returnData: unknown): Promise<unknown>;
