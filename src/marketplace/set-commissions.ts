import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Set marketplace commissions
 *
 * @see https://api.dsco.io/api/v3/marketplace/commissions
 *
 * @param config - Request configuration with access token
 * @param commissions - The commission settings
 * @returns The commission configuration
 */
export async function setCommissions(
  config: DscoRequestConfig,
  commissions: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/marketplace/commissions',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: commissions,
  });
}
