import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Set trading partner configuration
 *
 * @see https://api.dsco.io/api/v3/tradingpartner
 *
 * @param config - Request configuration with access token
 * @param tradingPartner - The trading partner configuration
 * @returns The trading partner result
 */
export async function setTradingPartner(
  config: PoshmarkRequestConfig,
  tradingPartner: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/tradingpartner',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: tradingPartner,
  });
}
