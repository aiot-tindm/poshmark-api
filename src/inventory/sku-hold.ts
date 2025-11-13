import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import { SkuHoldRequest, SkuHoldRequestC, SkuHoldResponse, SkuHoldResponseC } from '../validators/inventory';

/**
 * SKU hold operations
 *
 * @see https://api.dsco.io/api/v3/inventory/skuHold
 *
 * @param config - Request configuration with access token
 * @param request - SKU hold request
 * @returns SKU hold response
 */
export async function skuHold(
  config: PoshmarkRequestConfig,
  request: SkuHoldRequest,
): Promise<SkuHoldResponse> {
  return publishRequest<SkuHoldRequest, SkuHoldResponse>(config.baseUri, {
    method: 'POST',
    path: '/inventory/skuHold',
    accessToken: config.access_token,
    inputCodec: SkuHoldRequestC,
    outputCodec: SkuHoldResponseC,
    input: request,
  });
}
