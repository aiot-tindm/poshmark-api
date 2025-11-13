import { DscoRequestConfig } from '../validators/auth';
/**
 * Update a function
 *
 * @see https://api.dsco.io/api/v3/function/{functionId}
 *
 * @param config - Request configuration with access token
 * @param functionId - The function ID
 * @param functionData - The function updates
 * @returns The updated function
 */
export declare function updateFunction(config: DscoRequestConfig, functionId: string, functionData: unknown): Promise<unknown>;
