import { DscoRequestConfig } from '../validators/auth';
/**
 * Delete a stream
 *
 * @see https://api.dsco.io/api/v3/stream/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The stream ID
 * @returns The deletion result
 */
export declare function deleteStream(config: DscoRequestConfig, id: string): Promise<unknown>;
