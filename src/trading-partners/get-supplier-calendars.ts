import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get supplier calendars for retailer
 *
 * @see https://api.dsco.io/api/v3/suppliercalendarsforretailer
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Supplier calendars data
 */
export async function getSupplierCalendars(
  config: DscoRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/suppliercalendarsforretailer',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
