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

export interface TradingPartner {
  tradingPartnerId?: string;
  name?: string;
  type?: string;
  status?: string;
  contactEmail?: string;
  [key: string]: unknown;
}

export interface TradingPartnerProfile {
  tradingPartnerId?: string;
  companyName?: string;
  address?: Address;
  contactInfo?: ContactInfo;
  capabilities?: string[];
  [key: string]: unknown;
}

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  fax?: string;
}

export interface SupplierCalendar {
  supplierId?: string;
  holidays?: HolidayDate[];
  businessDays?: number[];
  [key: string]: unknown;
}

export interface HolidayDate {
  date?: string;
  description?: string;
}
