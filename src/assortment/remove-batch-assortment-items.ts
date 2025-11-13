import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import { AsyncUpdateResponse, AsyncUpdateResponseC } from '../validators/common-validation';
import * as t from 'io-ts';

/**
 * Bulk remove items request codec (same as add)
 */
const BulkRemoveItemsRequestC = t.partial({
  dscoItemIds: t.array(t.number),
  itemKeys: t.array(
    t.intersection([
      t.type({
        itemKey: t.string,
        itemKeyType: t.string,
      }),
      t.partial({
        dscoSupplierId: t.number,
        tradingPartnerId: t.string,
      }),
    ]),
  ),
});

export type BulkRemoveItemsRequest = t.TypeOf<typeof BulkRemoveItemsRequestC>;

/**
 * Remove multiple items from an assortment asynchronously (batch/small)
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/batch/small
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Items to remove (dscoItemIds and/or itemKeys)
 * @returns Async update response with requestId
 */
export async function removeBatchAssortmentItems(
  config: PoshmarkRequestConfig,
  id: string,
  request: BulkRemoveItemsRequest[],
): Promise<AsyncUpdateResponse> {
  return publishRequest<BulkRemoveItemsRequest[], AsyncUpdateResponse>(config.baseUri, {
    method: 'DELETE',
    path: `/assortment/${id}/batch/small`,
    accessToken: config.access_token,
    inputCodec: t.array(BulkRemoveItemsRequestC),
    outputCodec: AsyncUpdateResponseC,
    input: request,
  });
}
