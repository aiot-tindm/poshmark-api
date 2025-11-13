import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch monitored shipments
 *
 * @see https://api.dsco.io/api/v3/monitoredshipments/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch monitored shipments request
 * @returns Batch monitored shipments response
 */
export async function batchMonitoredShipments(
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/monitoredshipments/batch/small',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
