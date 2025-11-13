import { DscoRequestConfig } from '../validators/auth';
/**
 * Delete a function
 *
 * @see https://api.dsco.io/api/v3/function/{functionId}
 *
 * @param config - Request configuration with access token
 * @param functionId - The function ID
 * @returns The deletion result
 */
export declare function deleteFunction(config: DscoRequestConfig, functionId: string): Promise<unknown>;
