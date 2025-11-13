import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get shipment log (monitored shipments)
 *
 * @see https://api.dsco.io/api/v3/monitoredshipments/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Shipment log data
 */
export async function getShipmentLog(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/monitoredshipments/log',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
