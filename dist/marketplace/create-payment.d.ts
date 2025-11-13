import { DscoRequestConfig } from '../validators/auth';
/**
 * Create a marketplace payment
 *
 * @see https://api.dsco.io/api/v3/marketplace/payments
 *
 * @param config - Request configuration with access token
 * @param payment - The payment object to create
 * @returns The created payment
 */
export declare function createPayment(config: DscoRequestConfig, payment: unknown): Promise<unknown>;
