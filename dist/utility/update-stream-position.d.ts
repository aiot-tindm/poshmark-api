import { DscoRequestConfig } from '../validators/auth';
/**
 * Update stream position
 *
 * @see https://api.dsco.io/api/v3/stream/{id}/{partitionId}/{position}
 *
 * @param config - Request configuration with access token
 * @param id - The stream ID
 * @param partitionId - The partition ID
 * @param position - The position to update to
 * @returns The update result
 */
export declare function updateStreamPosition(config: DscoRequestConfig, id: string, partitionId: string, position: string): Promise<unknown>;
