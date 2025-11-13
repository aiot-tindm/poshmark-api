import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get trading partner
 *
 * @see https://api.dsco.io/api/v3/tradingpartner
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Trading partner data
 */
export async function getTradingPartner(
  config: DscoRequestConfig,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/tradingpartner',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
