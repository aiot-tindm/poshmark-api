import { DscoRequestConfig } from '../validators/auth';
/**
 * Get catalog attributes for an account
 *
 * @see https://api.dsco.io/api/v3/catalogattr/catalog/{accountId}
 *
 * @param config - Request configuration with access token
 * @param accountId - The account ID
 * @param params - Optional query parameters
 * @returns Catalog attributes
 */
export declare function getCatalogAttributes(config: DscoRequestConfig, accountId: string, params?: Record<string, string | number>): Promise<unknown>;
