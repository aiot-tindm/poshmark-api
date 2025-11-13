import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch add/remove items to/from an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/batch/small
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Batch items request
 * @returns Batch response
 */
export async function batchAssortmentItems(
  config: DscoRequestConfig,
  id: string,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: `/assortment/${id}/batch/small`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
