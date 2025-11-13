import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch small invoice operations
 *
 * @see https://api.dsco.io/api/v3/invoice/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch invoice request
 * @returns Batch invoice response
 */
export async function batchSmallInvoice(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/invoice/batch/small',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
