import { DscoRequestConfig } from '../validators/auth';
/**
 * Get supplier calendars for retailer
 *
 * @see https://api.dsco.io/api/v3/suppliercalendarsforretailer
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Supplier calendars data
 */
export declare function getSupplierCalendars(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
