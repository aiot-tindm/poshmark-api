import * as t from 'io-ts';

/**
 * Pricing validators and types
 * TypeScript types provided for better IDE support.
 */

/**
 * Approval status
 */
export const ApprovalStatusC = t.union([
  t.literal('pending'),
  t.literal('approved'),
  t.literal('rejected'),
]);

export type ApprovalStatus = t.TypeOf<typeof ApprovalStatusC>;

/**
 * TypeScript types for complex objects (no runtime validation)
 */

export interface PricingApproval {
  approvalId?: string;
  itemKey?: string;
  requestedPrice?: number;
  currentPrice?: number;
  status?: string;
  requestDate?: string;
  [key: string]: unknown;
}

export interface PricingHistory {
  itemKey?: string;
  priceChanges?: PriceChange[];
  [key: string]: unknown;
}

export interface PriceChange {
  oldPrice?: number;
  newPrice?: number;
  changeDate?: string;
  reason?: string;
  [key: string]: unknown;
}

export interface PricingConfig {
  minPrice?: number;
  maxPrice?: number;
  autoApprove?: boolean;
  approvalThreshold?: number;
  [key: string]: unknown;
}
