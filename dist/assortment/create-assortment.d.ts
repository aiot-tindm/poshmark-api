import { DscoRequestConfig } from '../validators/auth';
import { CreateAssortmentRequest, CreateAssortmentResponse } from '../validators/assortment';
/**
 * Create a new assortment
 *
 * @see https://api.dsco.io/api/v3/assortment
 *
 * @param config - Request configuration with access token
 * @param request - Assortment creation request
 * @returns Created assortment with ID
 */
export declare function createAssortment(config: DscoRequestConfig, request: CreateAssortmentRequest): Promise<CreateAssortmentResponse>;
