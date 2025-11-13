import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create an invoice
 *
 * @see https://api.dsco.io/api/v3/invoice
 *
 * @param config - Request configuration with access token
 * @param request - Invoice creation request
 * @returns Created invoice
 */
export async function createInvoice(
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/invoice',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
