import { DscoRequestConfig } from '../validators/auth';
/**
 * Set marketplace commissions
 *
 * @see https://api.dsco.io/api/v3/marketplace/commissions
 *
 * @param config - Request configuration with access token
 * @param commissions - The commission settings
 * @returns The commission configuration
 */
export declare function setCommissions(config: DscoRequestConfig, commissions: unknown): Promise<unknown>;
