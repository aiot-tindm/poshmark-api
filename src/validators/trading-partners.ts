import * as t from 'io-ts';

/**
 * Trading Partner validators and types
 * TypeScript types provided for better IDE support.
 */

/**
 * Trading Partner ID
 */
export const TradingPartnerIdC = t.string;
export type TradingPartnerId = t.TypeOf<typeof TradingPartnerIdC>;

/**
 * TypeScript types for complex objects (no runtime validation)
 */

/**
 * Address information
 */
export interface Address {
  street?: string;
  street2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

/**
 * Contact information
 */
export interface ContactInfo {
  name?: string;
  email?: string;
  phone?: string;
  fax?: string;
  mobile?: string;
}

/**
 * Set Trading Partner Request
 */
export interface SetTradingPartnerRequest {
  /** Trading partner ID (required) */
  tradingPartnerId: string;
  /** Partner ID - unique identifier */
  partnerId?: string;
  /** Company name */
  companyName?: string;
  /** Trading partner type */
  type?: 'supplier' | 'retailer' | 'marketplace';
  /** Status */
  status?: 'active' | 'inactive' | 'pending';
  /** Contact information */
  contactInfo?: ContactInfo;
  /** Business address */
  address?: Address;
  /** Configuration settings */
  config?: Record<string, unknown>;
  /** Capabilities */
  capabilities?: string[];
  [key: string]: unknown;
}

/**
 * Trading Partner Update Response
 */
export interface TradingPartnerUpdateResponse {
  /** Success status */
  success?: boolean;
  /** Action performed */
  action?: string;
  /** Updated trading partner */
  tradingPartner?: TradingPartner;
  /** Errors if any */
  errors?: string[];
  /** Status message */
  message?: string;
  [key: string]: unknown;
}

/**
 * Trading Partner
 */
export interface TradingPartner {
  tradingPartnerId?: string;
  partnerId?: string;
  name?: string;
  companyName?: string;
  type?: string;
  status?: string;
  contactEmail?: string;
  contactInfo?: ContactInfo;
  address?: Address;
  capabilities?: string[];
  config?: Record<string, unknown>;
  createdDate?: string;
  lastModifiedDate?: string;
  [key: string]: unknown;
}

/**
 * Trading Partner Profile
 */
export interface TradingPartnerProfile {
  tradingPartnerId?: string;
  companyName?: string;
  address?: Address;
  contactInfo?: ContactInfo;
  capabilities?: string[];
  certifications?: string[];
  businessHours?: string;
  timezone?: string;
  supportedIntegrations?: string[];
  [key: string]: unknown;
}

/**
 * Holiday Date
 */
export interface HolidayDate {
  date?: string;
  description?: string;
  recurring?: boolean;
}

/**
 * Supplier Calendar
 */
export interface SupplierCalendar {
  supplierId?: string;
  tradingPartnerId?: string;
  holidays?: HolidayDate[];
  businessDays?: number[];
  timezone?: string;
  workingHours?: {
    start?: string;
    end?: string;
  };
  [key: string]: unknown;
}
