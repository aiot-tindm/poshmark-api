import { DscoRequestConfig } from '../validators/auth';
/**
 * Get function by function ID
 *
 * @see https://api.dsco.io/api/v3/function/{functionId}
 *
 * @param config - Request configuration with access token
 * @param functionId - Function ID
 * @param params - Optional query parameters
 * @returns Function data
 */
export declare function getFunction(config: DscoRequestConfig, functionId: string, params?: Record<string, string | number>): Promise<unknown>;
