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

export interface Invoice {
  invoiceNumber?: string;
  dscoInvoiceId?: number;
  orderKey?: string;
  invoiceDate?: string;
  totalAmount?: number;
  currency?: string;
  lineItems?: InvoiceLineItem[];
  [key: string]: unknown;
}

export interface InvoiceLineItem {
  lineNumber?: number;
  itemKey?: string;
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
  [key: string]: unknown;
}

export interface InvoiceQuery {
  invoiceNumber?: string;
  orderKey?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}
