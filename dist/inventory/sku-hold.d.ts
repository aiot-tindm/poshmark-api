import { DscoRequestConfig } from '../validators/auth';
import { SkuHoldRequest, SkuHoldResponse } from '../validators/inventory';
/**
 * SKU hold operations
 *
 * @see https://api.dsco.io/api/v3/inventory/skuHold
 *
 * @param config - Request configuration with access token
 * @param request - SKU hold request
 * @returns SKU hold response
 */
export declare function skuHold(config: DscoRequestConfig, request: SkuHoldRequest): Promise<SkuHoldResponse>;
