import * as t from 'io-ts';

/**
 * Return validators and types
 * Note: Full return objects use t.unknown due to complexity.
 * TypeScript types provided for better IDE support.
 */

/**
 * Return key identifier
 */
export const ReturnKeyC = t.string;
export type ReturnKey = t.TypeOf<typeof ReturnKeyC>;

/**
 * Return status
 */
export const ReturnStatusC = t.union([
  t.literal('pending'),
  t.literal('approved'),
  t.literal('rejected'),
  t.literal('completed'),
  t.literal('cancelled'),
]);

export type ReturnStatus = t.TypeOf<typeof ReturnStatusC>;

/**
 * TypeScript types for complex objects (no runtime validation)
 */

/**
 * Return line item for create operations
 * Required: quantity, reasonCode
 * One of the item identifiers (itemId, sku, partnerSku, upc, ean, mpn) must be provided
 */
export interface ReturnLineItemCreate {
  /** Quantity of the item being returned (required) */
  quantity: number;
  /** Reason code for the return (required) */
  reasonCode: string;
  /** DSCO's unique ID for the item */
  itemId?: string;
  /** SKU identifier */
  sku?: string;
  /** Partner SKU identifier */
  partnerSku?: string;
  /** UPC identifier (6 or 12 digits) */
  upc?: string;
  /** EAN identifier (8 or 13 digits) */
  ean?: string;
  /** MPN identifier */
  mpn?: string;
  /** ISBN identifier (10 or 13 digits) */
  isbn?: string;
  /** Line number - required if order has multiple line numbers with same item */
  lineNumber?: number;
  /** Return reason description */
  reason?: string;
  /** Condition of returned item */
  condition?: string;
  /** Notes about the return */
  notes?: string;
  /** Refund amount */
  refundAmount?: number;
  /** Restocking fee */
  restockingFee?: number;
  [key: string]: unknown;
}

/**
 * Create Return Request
 * Required: returnNumber, lineItems
 * Either poNumber or dscoOrderId must be provided to identify the order
 */
export interface CreateReturnRequest {
  /** Return number identifier (required) */
  returnNumber: string;
  /** Return line items (required) */
  lineItems: ReturnLineItemCreate[];
  /** PO Number of the order (one of poNumber or dscoOrderId required) */
  poNumber?: string;
  /** DSCO Order ID (one of poNumber or dscoOrderId required) */
  dscoOrderId?: number;
  /** Return date (ISO-8601) */
  returnDate?: string;
  /** Return type */
  returnType?: string;
  /** Return reason */
  returnReason?: string;
  /** Customer notes */
  customerNotes?: string;
  /** Return shipping carrier */
  returnCarrier?: string;
  /** Return tracking number */
  returnTrackingNumber?: string;
  /** Total refund amount */
  totalRefund?: number;
  /** Currency code */
  currency?: string;
  [key: string]: unknown;
}

/**
 * Complete Return Request
 * Either dscoReturnId or returnNumber must be provided
 */
export interface CompleteReturnRequest {
  /** DSCO Return ID (one of dscoReturnId or returnNumber required) */
  dscoReturnId?: number;
  /** Return number (one of dscoReturnId or returnNumber required) */
  returnNumber?: string;
  /** Completion date (ISO-8601) */
  completionDate?: string;
  /** Completion notes */
  notes?: string;
  /** Items being completed */
  lineItems?: Array<{
    lineNumber?: number;
    itemId?: string;
    sku?: string;
    quantity?: number;
    condition?: string;
    restockable?: boolean;
  }>;
  [key: string]: unknown;
}

/**
 * Return Response
 */
export interface ReturnResponse {
  /** Success status */
  success?: boolean;
  /** Return key */
  returnKey?: string;
  /** DSCO Return ID */
  dscoReturnId?: number;
  /** Return number */
  returnNumber?: string;
  /** Status message */
  message?: string;
  /** Return object */
  return?: Return;
  [key: string]: unknown;
}

/**
 * Return query/response object
 */
export interface Return {
  returnKey?: string;
  dscoReturnId?: number;
  returnNumber?: string;
  orderKey?: string;
  poNumber?: string;
  returnDate?: string;
  completionDate?: string;
  status?: string;
  items?: ReturnItem[];
  totalRefund?: number;
  currency?: string;
  [key: string]: unknown;
}

/**
 * Return item for responses
 */
export interface ReturnItem {
  lineNumber?: number;
  itemKey?: string;
  itemId?: string;
  sku?: string;
  quantity?: number;
  reason?: string;
  reasonCode?: string;
  condition?: string;
  refundAmount?: number;
  restockingFee?: number;
  restockable?: boolean;
  [key: string]: unknown;
}

/**
 * Return query parameters
 */
export interface ReturnQuery {
  returnKey?: string;
  orderKey?: string;
  poNumber?: string;
  returnNumber?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  page?: number;
  limit?: number;
}
