import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get invoice by ID
 *
 * @see https://api.dsco.io/api/v3/invoice
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters including invoice ID
 * @returns Invoice data
 */
export async function getInvoiceById(
  config: DscoRequestConfig,
  params: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/invoice',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
