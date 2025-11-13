import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch large catalog attributes
 *
 * @see https://api.dsco.io/api/v3/catalogattr/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch catalog attributes request
 * @returns Batch catalog attributes response
 */
export async function batchLargeCatalogAttributes(
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/catalogattr/batch/large',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
