import { DscoRequestConfig } from '../validators/auth';
/**
 * Download supplier profile
 *
 * @see https://api.dsco.io/api/v3/trading-partners/supplier-profile-download
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters
 * @returns Supplier profile download data
 */
export declare function downloadSupplierProfile(config: DscoRequestConfig, params: Record<string, string | number>): Promise<unknown>;
