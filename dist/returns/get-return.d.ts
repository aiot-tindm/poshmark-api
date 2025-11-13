import { DscoRequestConfig } from '../validators/auth';
/**
 * Get return by return key
 *
 * @see https://api.dsco.io/api/v3/return/
 *
 * @param config - Request configuration with access token
 * @param returnKey - The return key to retrieve
 * @returns Return information
 */
export declare function getReturn(config: DscoRequestConfig, returnKey: string): Promise<unknown>;
