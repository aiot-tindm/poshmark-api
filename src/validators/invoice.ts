import * as t from 'io-ts';

/**
 * Invoice validators and types
 * TypeScript types provided for better IDE support.
 */

/**
 * Invoice number
 */
export const InvoiceNumberC = t.string;
export type InvoiceNumber = t.TypeOf<typeof InvoiceNumberC>;

/**
 * TypeScript types for complex objects (no runtime validation)
 */

/**
 * Invoice line item
 */
export interface InvoiceLineItem {
  /** Line number */
  lineNumber?: number;
  /** Item identifier */
  itemKey?: string;
  /** Item ID */
  itemId?: string;
  /** SKU */
  sku?: string;
  /** Partner SKU */
  partnerSku?: string;
  /** Quantity invoiced */
  quantity?: number;
  /** Unit price */
  unitPrice?: number;
  /** Total price for this line */
  totalPrice?: number;
  /** Tax amount */
  tax?: number;
  /** Discount amount */
  discount?: number;
  /** Line item description */
  description?: string;
  [key: string]: unknown;
}

/**
 * Create Invoice Request
 * Required: invoiceId, totalAmount
 * One of dscoOrderId, poNumber, or supplierOrderNumber required to identify the order
 */
export interface CreateInvoiceRequest {
  /** Invoice ID (required) */
  invoiceId: string;
  /** Total invoice amount (required) */
  totalAmount: number;
  /** DSCO Order ID - one of dscoOrderId, poNumber, or supplierOrderNumber required */
  dscoOrderId?: string;
  /** PO Number - one of dscoOrderId, poNumber, or supplierOrderNumber required */
  poNumber?: string;
  /** Supplier Order Number - one of dscoOrderId, poNumber, or supplierOrderNumber required */
  supplierOrderNumber?: string;
  /** Invoice date (ISO-8601) */
  invoiceDate?: string;
  /** Currency code */
  currencyCode?: string;
  /** Line items subtotal */
  lineItemsSubtotal?: number;
  /** Subtotal excluding line items */
  subtotalExcludingLineItems?: number;
  /** Number of line items */
  numberOfLineItems?: number;
  /** Handling amount */
  handlingAmount?: number;
  /** Shipping amount */
  shippingAmount?: number;
  /** Tax amount */
  taxAmount?: number;
  /** Discount amount */
  discountAmount?: number;
  /** Additional charges */
  additionalCharges?: number;
  /** Line items */
  lineItems?: InvoiceLineItem[];
  /** Invoice notes */
  notes?: string;
  /** Payment terms */
  paymentTerms?: string;
  /** Due date (ISO-8601) */
  dueDate?: string;
  [key: string]: unknown;
}

/**
 * Invoice Response
 */
export interface InvoiceResponse {
  /** Success status */
  success?: boolean;
  /** Invoice ID */
  invoiceId?: string;
  /** DSCO Invoice ID */
  dscoInvoiceId?: number;
  /** Status message */
  message?: string;
  [key: string]: unknown;
}

/**
 * Invoice object
 */
export interface Invoice {
  invoiceNumber?: string;
  invoiceId?: string;
  dscoInvoiceId?: number;
  orderKey?: string;
  poNumber?: string;
  dscoOrderId?: string;
  supplierOrderNumber?: string;
  invoiceDate?: string;
  dueDate?: string;
  totalAmount?: number;
  currency?: string;
  currencyCode?: string;
  lineItemsSubtotal?: number;
  taxAmount?: number;
  shippingAmount?: number;
  handlingAmount?: number;
  discountAmount?: number;
  lineItems?: InvoiceLineItem[];
  status?: string;
  paymentTerms?: string;
  notes?: string;
  [key: string]: unknown;
}

/**
 * Invoice query parameters
 */
export interface InvoiceQuery {
  invoiceNumber?: string;
  invoiceId?: string;
  orderKey?: string;
  poNumber?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  page?: number;
  limit?: number;
  requestId?: string;
  scrollId?: string;
}
