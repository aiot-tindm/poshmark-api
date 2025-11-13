import { DscoRequestConfig } from '../validators/auth';
/**
 * Health check endpoint
 *
 * @see https://api.dsco.io/api/v3/hello
 *
 * @param config - Request configuration with access token
 * @returns Health check response
 */
export declare function hello(config: DscoRequestConfig): Promise<unknown>;
