import { DscoRequestConfig } from '../validators/auth';
import { UpdateInventoryRequest, InventoryResponse } from '../validators/inventory';
/**
 * Batch small inventory operations
 *
 * @see https://api.dsco.io/api/v3/inventory/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch inventory request
 * @returns Batch inventory response
 */
export declare function batchSmallInventory(config: DscoRequestConfig, request: UpdateInventoryRequest): Promise<InventoryResponse>;
