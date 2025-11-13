import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get invoice log
 *
 * @see https://api.dsco.io/api/v3/invoice/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Invoice log data
 */
export async function getInvoiceLog(
  config: DscoRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/invoice/log',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
