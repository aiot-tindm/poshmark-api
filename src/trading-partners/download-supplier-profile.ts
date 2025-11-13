import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Download supplier profile
 *
 * @see https://api.dsco.io/api/v3/trading-partners/supplier-profile-download
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters
 * @returns Supplier profile download data
 */
export async function downloadSupplierProfile(
  config: PoshmarkRequestConfig,
  params: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/trading-partners/supplier-profile-download',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
