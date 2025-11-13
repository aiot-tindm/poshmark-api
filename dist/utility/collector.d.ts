import { DscoRequestConfig } from '../validators/auth';
/**
 * Execute collector function
 *
 * @see https://api.dsco.io/api/v3/collector/{objectType}/{functionId}
 *
 * @param config - Request configuration with access token
 * @param objectType - Object type
 * @param functionId - Function ID
 * @param request - Collector request
 * @returns Collector response
 */
export declare function executeCollector(config: DscoRequestConfig, objectType: string, functionId: string, request: unknown): Promise<unknown>;
