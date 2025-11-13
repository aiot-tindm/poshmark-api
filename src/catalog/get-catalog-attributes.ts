import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get catalog attributes for an account
 *
 * @see https://api.dsco.io/api/v3/catalogattr/catalog/{accountId}
 *
 * @param config - Request configuration with access token
 * @param accountId - The account ID
 * @param params - Optional query parameters
 * @returns Catalog attributes
 */
export async function getCatalogAttributes(
  config: DscoRequestConfig,
  accountId: string,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/catalogattr/catalog/${accountId}`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
