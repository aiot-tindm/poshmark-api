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

/**
 * Pricing Approval Item
 */
export interface PricingApprovalItem {
  /** Item identifier */
  itemKey?: string;
  /** Item ID */
  itemId?: string;
  /** SKU */
  sku?: string;
  /** Partner SKU */
  partnerSku?: string;
  /** Requested price */
  requestedPrice?: number;
  /** Current price */
  currentPrice?: number;
  /** Price change percentage */
  priceChangePercent?: number;
  /** Justification for price change */
  justification?: string;
  [key: string]: unknown;
}

/**
 * Pricing Approval Batch Request
 */
export interface PricingApprovalBatchRequest {
  /** Array of pricing approvals */
  approvals: Array<{
    itemKey?: string;
    approvalId?: string;
    action: 'approve' | 'reject';
    rejectionReason?: string;
  }>;
  /** Batch ID */
  batchId?: string;
  [key: string]: unknown;
}

/**
 * Pricing Approval
 */
export interface PricingApproval {
  approvalId?: string;
  itemKey?: string;
  requestedPrice?: number;
  currentPrice?: number;
  status?: string;
  requestDate?: string;
  approvedDate?: string;
  rejectedDate?: string;
  rejectionReason?: string;
  [key: string]: unknown;
}

/**
 * Pricing History Query
 */
export interface PricingHistoryQuery {
  /** Partner ID */
  partnerId?: string;
  /** Start date (ISO-8601) */
  startDate?: string;
  /** End date (ISO-8601) */
  endDate?: string;
  /** Item keys to filter */
  itemKeys?: string[];
  /** Page number */
  page?: number;
  /** Page size */
  limit?: number;
  [key: string]: unknown;
}

/**
 * Pricing History
 */
export interface PricingHistory {
  itemKey?: string;
  itemId?: string;
  sku?: string;
  priceChanges?: PriceChange[];
  currentPrice?: number;
  [key: string]: unknown;
}

/**
 * Price Change
 */
export interface PriceChange {
  oldPrice?: number;
  newPrice?: number;
  changeDate?: string;
  reason?: string;
  changedBy?: string;
  approvalId?: string;
  [key: string]: unknown;
}

/**
 * Pricing Config
 */
export interface PricingConfig {
  minPrice?: number;
  maxPrice?: number;
  autoApprove?: boolean;
  approvalThreshold?: number;
  priceFloor?: number;
  priceCeiling?: number;
  requiresApproval?: boolean;
  [key: string]: unknown;
}
