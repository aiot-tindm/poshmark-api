import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import {
  SuccessFailResponse,
  SuccessFailResponseC,
} from '../validators/common-validation';
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
    ])
  ),
});

export type BulkRemoveItemsRequest = t.TypeOf<typeof BulkRemoveItemsRequestC>;

/**
 * Remove multiple items from an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/items
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Items to remove (dscoItemIds and/or itemKeys)
 * @returns Success response
 */
export async function removeItemsFromAssortment(
  config: DscoRequestConfig,
  id: string,
  request: BulkRemoveItemsRequest
): Promise<SuccessFailResponse> {
  return publishRequest<BulkRemoveItemsRequest, SuccessFailResponse>(
    config.baseUri,
    {
      method: 'DELETE',
      path: `/assortment/${id}/items`,
      accessToken: config.access_token,
      inputCodec: BulkRemoveItemsRequestC,
      outputCodec: SuccessFailResponseC,
      input: request,
    }
  );
}
