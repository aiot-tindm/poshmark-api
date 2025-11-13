import { DscoRequestConfig } from '../validators/auth';
/**
 * Set retailer warehouse codes
 *
 * @see https://api.dsco.io/api/v3/retailer-warehouses/codes
 *
 * @param config - Request configuration with access token
 * @param codes - The warehouse codes to set
 * @returns The warehouse codes result
 */
export declare function setRetailerWarehouseCodes(config: DscoRequestConfig, codes: unknown): Promise<unknown>;
