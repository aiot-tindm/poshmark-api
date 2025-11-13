import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

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
export async function getStream(
  config: DscoRequestConfig,
  id: string,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/stream/${id}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}

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
export async function getStreamPartitionPosition(
  config: DscoRequestConfig,
  id: string,
  partitionId: string,
  position: string
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/stream/${id}/${partitionId}/${position}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
  });
}

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
export async function getStreamPartitionRange(
  config: DscoRequestConfig,
  id: string,
  partitionId: string,
  startPosition: string,
  endPosition: string
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/stream/${id}/${partitionId}/${startPosition}/${endPosition}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
  });
}

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
export async function getSingleStreamPartitionPosition(
  config: DscoRequestConfig,
  id: string,
  partitionId: string,
  position: string
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/stream/single/${id}/${partitionId}/${position}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
  });
}
