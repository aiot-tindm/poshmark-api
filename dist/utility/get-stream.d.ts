import { DscoRequestConfig } from '../validators/auth';
/**
 * Get stream by ID
 *
 * @see https://api.dsco.io/api/v3/stream/{id}
 *
 * @param config - Request configuration with access token
 * @param id - Stream ID
 * @param params - Optional query parameters
 * @returns Stream data
 */
export declare function getStream(config: DscoRequestConfig, id: string, params?: Record<string, string | number>): Promise<unknown>;
/**
 * Get stream partition position
 *
 * @see https://api.dsco.io/api/v3/stream/{id}/{partitionId}/{position}
 *
 * @param config - Request configuration with access token
 * @param id - Stream ID
 * @param partitionId - Partition ID
 * @param position - Position
 * @returns Stream partition data
 */
export declare function getStreamPartitionPosition(config: DscoRequestConfig, id: string, partitionId: string, position: string): Promise<unknown>;
/**
 * Get stream partition range
 *
 * @see https://api.dsco.io/api/v3/stream/{id}/{partitionId}/{startPosition}/{endPosition}
 *
 * @param config - Request configuration with access token
 * @param id - Stream ID
 * @param partitionId - Partition ID
 * @param startPosition - Start position
 * @param endPosition - End position
 * @returns Stream partition range data
 */
export declare function getStreamPartitionRange(config: DscoRequestConfig, id: string, partitionId: string, startPosition: string, endPosition: string): Promise<unknown>;
/**
 * Get single stream partition position
 *
 * @see https://api.dsco.io/api/v3/stream/single/{id}/{partitionId}/{position}
 *
 * @param config - Request configuration with access token
 * @param id - Stream ID
 * @param partitionId - Partition ID
 * @param position - Position
 * @returns Single stream partition data
 */
export declare function getSingleStreamPartitionPosition(config: DscoRequestConfig, id: string, partitionId: string, position: string): Promise<unknown>;
