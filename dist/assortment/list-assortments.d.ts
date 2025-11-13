import { DscoRequestConfig } from '../validators/auth';
/**
 * List all assortments
 *
 * @see https://api.dsco.io/api/v3/assortment
 *
 * @param config - Request configuration with access token
 * @returns Array of assortments
 */
export declare function listAssortments(config: DscoRequestConfig): Promise<unknown[]>;
