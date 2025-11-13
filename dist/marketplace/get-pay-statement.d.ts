import { DscoRequestConfig } from '../validators/auth';
/**
 * Get pay statement by statement ID
 *
 * @see https://api.dsco.io/api/v3/marketplace/pay-statement/{statementId}
 *
 * @param config - Request configuration with access token
 * @param statementId - The statement ID
 * @param params - Optional query parameters
 * @returns Pay statement data
 */
export declare function getPayStatement(config: DscoRequestConfig, statementId: string, params?: Record<string, string | number>): Promise<unknown>;
