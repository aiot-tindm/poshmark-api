import { DscoRequestConfig } from '../validators/auth';
/**
 * Stream operations
 *
 * @see https://api.dsco.io/api/v3/stream
 *
 * @param config - Request configuration with access token
 * @param request - Stream request
 * @returns Stream response
 */
export declare function stream(config: DscoRequestConfig, request: unknown): Promise<unknown>;
