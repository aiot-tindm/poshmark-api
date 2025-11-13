import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Execute collector function
 *
 * @see https://api.dsco.io/api/v3/collector/{objectType}/{functionId}
 *
 * @param config - Request configuration with access token
 * @param objectType - Object type
 * @param functionId - Function ID
 * @param request - Collector request
 * @returns Collector response
 */
export async function executeCollector(
  config: DscoRequestConfig,
  objectType: string,
  functionId: string,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: `/collector/${objectType}/${functionId}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
