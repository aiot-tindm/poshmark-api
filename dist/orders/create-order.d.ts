import { DscoRequestConfig } from '../validators/auth';
/**
 * Create a single order
 *
 * @see https://api.dsco.io/api/v3/order/
 *
 * @param config - Request configuration with access token
 * @param order - The order object to create
 * @returns The created order
 */
export declare function createOrder(config: DscoRequestConfig, order: unknown): Promise<unknown>;
