import { DscoRequestConfig } from '../validators/auth';
/**
 * Get payment allocations for a specific payment
 *
 * @see https://api.dsco.io/api/v3/marketplace/payments/{paymentId}/allocations
 *
 * @param config - Request configuration with access token
 * @param paymentId - The payment ID
 * @param params - Optional query parameters
 * @returns Payment allocations data
 */
export declare function getPaymentAllocations(config: DscoRequestConfig, paymentId: string, params?: Record<string, string | number>): Promise<unknown>;
