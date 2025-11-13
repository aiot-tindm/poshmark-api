import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

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
export async function updateFunction(
  config: PoshmarkRequestConfig,
  functionId: string,
  functionData: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'PUT',
    path: `/function/${functionId}`,
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: functionData,
  });
}
