import { DscoRequestConfig } from '../validators/auth';
/**
 * Update a stream
 *
 * @see https://api.dsco.io/api/v3/stream/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The stream ID
 * @param streamData - The stream updates
 * @returns The updated stream
 */
export declare function updateStream(config: DscoRequestConfig, id: string, streamData: unknown): Promise<unknown>;
