import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import {
  UpdateInventoryRequest,
  UpdateInventoryRequestC,
  InventoryResponse,
  InventoryResponseC,
} from '../validators/inventory';

/**
 * Batch small inventory operations
 *
 * @see https://api.dsco.io/api/v3/inventory/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch inventory request
 * @returns Batch inventory response
 */
export async function batchSmallInventory(
  config: DscoRequestConfig,
  request: UpdateInventoryRequest
): Promise<InventoryResponse> {
  return publishRequest<UpdateInventoryRequest, InventoryResponse>(
    config.baseUri,
    {
      method: 'POST',
      path: '/inventory/batch/small',
      accessToken: config.access_token,
      inputCodec: UpdateInventoryRequestC,
      outputCodec: InventoryResponseC,
      input: request,
    }
  );
}
