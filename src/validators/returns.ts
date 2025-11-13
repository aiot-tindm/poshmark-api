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

export interface Return {
  returnKey?: string;
  dscoReturnId?: number;
  orderKey?: string;
  returnDate?: string;
  status?: string;
  items?: ReturnItem[];
  [key: string]: unknown;
}

export interface ReturnItem {
  lineNumber?: number;
  itemKey?: string;
  quantity?: number;
  reason?: string;
  condition?: string;
  [key: string]: unknown;
}

export interface ReturnQuery {
  returnKey?: string;
  orderKey?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  page?: number;
  limit?: number;
}
