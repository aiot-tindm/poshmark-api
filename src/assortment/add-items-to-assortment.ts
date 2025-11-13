import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import { SuccessFailResponse, SuccessFailResponseC } from '../validators/common-validation';
import * as t from 'io-ts';

/**
 * Bulk add items request codec
 */
const BulkAddItemsRequestC = t.partial({
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

export type BulkAddItemsRequest = t.TypeOf<typeof BulkAddItemsRequestC>;

/**
 * Add multiple items to an assortment (up to 100 itemKeys or 1,000 dscoItemIds)
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/items
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Items to add (dscoItemIds and/or itemKeys)
 * @returns Success response
 */
export async function addItemsToAssortment(
  config: PoshmarkRequestConfig,
  id: string,
  request: BulkAddItemsRequest,
): Promise<SuccessFailResponse> {
  return publishRequest<BulkAddItemsRequest, SuccessFailResponse>(config.baseUri, {
    method: 'POST',
    path: `/assortment/${id}/items`,
    accessToken: config.access_token,
    inputCodec: BulkAddItemsRequestC,
    outputCodec: SuccessFailResponseC,
    input: request,
  });
}
