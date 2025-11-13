import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch large catalog attributes
 *
 * @see https://api.dsco.io/api/v3/catalogattr/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch catalog attributes request
 * @returns Batch catalog attributes response
 */
export declare function batchLargeCatalogAttributes(config: DscoRequestConfig, request: unknown): Promise<unknown>;
