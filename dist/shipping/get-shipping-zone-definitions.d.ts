import { DscoRequestConfig } from '../validators/auth';
/**
 * Get shipping zone definitions
 *
 * @see https://api.dsco.io/api/v3/marketplace/shippingzonedefinitions
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Shipping zone definitions data
 */
export declare function getShippingZoneDefinitions(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
