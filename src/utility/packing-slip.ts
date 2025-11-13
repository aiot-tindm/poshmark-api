import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create packing slip
 *
 * @see https://api.dsco.io/api/v3/packingslip
 *
 * @param config - Request configuration with access token
 * @param request - Packing slip request
 * @returns Packing slip response
 */
export async function createPackingSlip(
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/packingslip',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
