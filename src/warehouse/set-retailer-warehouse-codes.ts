import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Set retailer warehouse codes
 *
 * @see https://api.dsco.io/api/v3/retailer-warehouses/codes
 *
 * @param config - Request configuration with access token
 * @param codes - The warehouse codes to set
 * @returns The warehouse codes result
 */
export async function setRetailerWarehouseCodes(
  config: PoshmarkRequestConfig,
  codes: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/retailer-warehouses/codes',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: codes,
  });
}
