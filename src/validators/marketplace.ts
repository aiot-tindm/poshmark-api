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

/**
 * Statement Allocation
 * Associates payment amounts with specific orders and line items
 * Required: amount
 */
export interface StatementAllocation {
  /** Allocation amount (required) */
  amount: number;
  /** Suborder ID - one of suborderId, poNumber, or settlementId required */
  suborderId?: number;
  /** PO Number - one of suborderId, poNumber, or settlementId required */
  poNumber?: string;
  /** Settlement ID - one of suborderId, poNumber, or settlementId required */
  settlementId?: string;
  /** Item ID - one of lineNumber, itemId, partnerSku, or settlementId required */
  itemId?: number;
  /** Partner SKU - one of lineNumber, itemId, partnerSku, or settlementId required */
  partnerSku?: string;
  /** Line number - one of lineNumber, itemId, partnerSku, or settlementId required */
  lineNumber?: number;
  /** Allocation type */
  allocationType?: string;
  /** Reason for allocation */
  reason?: string;
  /** Reference number */
  referenceNumber?: string;
  [key: string]: unknown;
}

/**
 * Create Payment Request
 * Required: paymentDate, transactionId, allocations
 */
export interface CreatePaymentRequest {
  /** Payment date (ISO-8601 format, required) */
  paymentDate: string;
  /** Unique transaction identifier (required) */
  transactionId: string;
  /** Array of allocations (required) */
  allocations: StatementAllocation[];
  /** Date transaction was recorded (ISO-8601) */
  entryDate?: string;
  /** Payment method */
  paymentMethod?: string;
  /** Payment notes */
  notes?: string;
  /** Currency code */
  currency?: string;
  /** Bank reference */
  bankReference?: string;
  [key: string]: unknown;
}

/**
 * Payment Response
 */
export interface PaymentResponse {
  /** Success status */
  success?: boolean;
  /** Payment ID */
  paymentId?: string;
  /** Status message */
  message?: string;
  [key: string]: unknown;
}

/**
 * Payment object
 */
export interface Payment {
  paymentId?: string;
  transactionId?: string;
  amount?: number;
  currency?: string;
  paymentDate?: string;
  entryDate?: string;
  paymentMethod?: string;
  status?: string;
  allocations?: StatementAllocation[];
  [key: string]: unknown;
}

/**
 * Settlement object
 */
export interface Settlement {
  settlementId?: string;
  amount?: number;
  currency?: string;
  settlementDate?: string;
  status?: string;
  orderId?: string;
  poNumber?: string;
  [key: string]: unknown;
}

/**
 * Adjustment for marketplace transactions
 */
export interface AdjustmentItem {
  /** Order identifier */
  orderId?: string;
  /** PO Number */
  poNumber?: string;
  /** Suborder ID */
  suborderId?: number;
  /** Item ID */
  itemId?: number;
  /** SKU */
  sku?: string;
  /** Partner SKU */
  partnerSku?: string;
  /** Line number */
  lineNumber?: number;
  /** Adjustment amount */
  amount?: number;
  /** Adjustment type */
  adjustmentType?: string;
  /** Reason for adjustment */
  reason?: string;
  [key: string]: unknown;
}

/**
 * Create Adjustments Request
 */
export interface CreateAdjustmentsRequest {
  /** Array of adjustments */
  adjustments: AdjustmentItem[];
  /** Adjustment date (ISO-8601) */
  adjustmentDate?: string;
  /** Reference number */
  referenceNumber?: string;
  /** Notes */
  notes?: string;
  [key: string]: unknown;
}

/**
 * Adjustment object
 */
export interface Adjustment {
  adjustmentId?: string;
  type?: string;
  amount?: number;
  reason?: string;
  adjustmentDate?: string;
  orderId?: string;
  poNumber?: string;
  [key: string]: unknown;
}

/**
 * Promotion Retailer Assignment
 */
export interface PromotionRetailer {
  /** Retailer ID or trading partner ID */
  retailerId?: string;
  /** Trading partner ID */
  tradingPartnerId?: string;
  [key: string]: unknown;
}

/**
 * Create/Update Promotion Request
 */
export interface CreatePromotionRequest {
  /** Promotion name (required) */
  name: string;
  /** Retailers who can use this promotion (required) */
  retailers: PromotionRetailer[];
  /** Promotion type */
  promotionType?: string;
  /** Discount type (percentage, fixed, etc.) */
  discountType?: string;
  /** Discount value */
  discountValue?: number;
  /** Start date (ISO-8601) */
  startDate?: string;
  /** End date (ISO-8601) */
  endDate?: string;
  /** Promotion description */
  description?: string;
  /** Terms and conditions */
  terms?: string;
  /** Status */
  status?: string;
  [key: string]: unknown;
}

/**
 * Promotion object
 */
export interface Promotion {
  promotionId?: string;
  name?: string;
  promotionType?: string;
  startDate?: string;
  endDate?: string;
  discountType?: string;
  discountValue?: number;
  status?: string;
  description?: string;
  retailers?: PromotionRetailer[];
  [key: string]: unknown;
}

/**
 * Commission object
 */
export interface Commission {
  commissionId?: string;
  rate?: number;
  type?: string;
  tradingPartnerId?: string;
  effectiveDate?: string;
  [key: string]: unknown;
}

/**
 * Set Commissions Request
 */
export interface SetCommissionsRequest {
  /** Trading partner ID */
  tradingPartnerId?: string;
  /** Commission rate */
  rate?: number;
  /** Commission type */
  type?: string;
  /** Effective date (ISO-8601) */
  effectiveDate?: string;
  [key: string]: unknown;
}
