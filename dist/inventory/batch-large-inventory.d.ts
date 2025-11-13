import { DscoRequestConfig } from '../validators/auth';
import { UpdateInventoryRequest, InventoryResponse } from '../validators/inventory';
/**
 * Batch large inventory operations
 *
 * @see https://api.dsco.io/api/v3/inventory/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch inventory request
 * @returns Batch inventory response
 */
export declare function batchLargeInventory(config: DscoRequestConfig, request: UpdateInventoryRequest): Promise<InventoryResponse>;
