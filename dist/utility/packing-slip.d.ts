import { DscoRequestConfig } from '../validators/auth';
/**
 * Create packing slip
 *
 * @see https://api.dsco.io/api/v3/packingslip
 *
 * @param config - Request configuration with access token
 * @param request - Packing slip request
 * @returns Packing slip response
 */
export declare function createPackingSlip(config: DscoRequestConfig, request: unknown): Promise<unknown>;
