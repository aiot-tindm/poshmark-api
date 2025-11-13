import { DscoRequestConfig } from '../validators/auth';
/**
 * Allocate a marketplace payment
 *
 * @see https://api.dsco.io/api/v3/marketplace/payments/{paymentId}/allocations
 *
 * @param config - Request configuration with access token
 * @param paymentId - The payment ID
 * @param allocation - The allocation details
 * @returns The allocation result
 */
export declare function allocatePayment(config: DscoRequestConfig, paymentId: string, allocation: unknown): Promise<unknown>;
