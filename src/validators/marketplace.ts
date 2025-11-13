import * as t from 'io-ts';

/**
 * Marketplace validators and types
 * TypeScript types provided for better IDE support.
 */

/**
 * Payment ID
 */
export const PaymentIdC = t.string;
export type PaymentId = t.TypeOf<typeof PaymentIdC>;

/**
 * Promotion ID
 */
export const PromotionIdC = t.string;
export type PromotionId = t.TypeOf<typeof PromotionIdC>;

/**
 * TypeScript types for complex objects (no runtime validation)
 */

export interface Payment {
  paymentId?: string;
  amount?: number;
  currency?: string;
  paymentDate?: string;
  status?: string;
  [key: string]: unknown;
}

export interface Settlement {
  settlementId?: string;
  amount?: number;
  currency?: string;
  settlementDate?: string;
  [key: string]: unknown;
}

export interface Adjustment {
  adjustmentId?: string;
  type?: string;
  amount?: number;
  reason?: string;
  [key: string]: unknown;
}

export interface Promotion {
  promotionId?: string;
  name?: string;
  startDate?: string;
  endDate?: string;
  discountType?: string;
  discountValue?: number;
  status?: string;
  [key: string]: unknown;
}

export interface Commission {
  commissionId?: string;
  rate?: number;
  type?: string;
  [key: string]: unknown;
}
