import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get pay statement by statement ID
 *
 * @see https://api.dsco.io/api/v3/marketplace/pay-statement/{statementId}
 *
 * @param config - Request configuration with access token
 * @param statementId - The statement ID
 * @param params - Optional query parameters
 * @returns Pay statement data
 */
export async function getPayStatement(
  config: DscoRequestConfig,
  statementId: string,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/marketplace/pay-statement/${statementId}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
