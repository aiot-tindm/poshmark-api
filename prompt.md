# Poshmark API Library Development Prompt

## Overview
Create a TypeScript library called `poshmark-api` that follows the exact same structure and patterns as the `xp-shopee-api` library. The library should integrate with the DSCO Platform API (v3) by Rithum for poshmark marketplace operations.

## Project Structure

```
poshmark-api/
├── src/
│   ├── index.ts                          # Main export file
│   ├── auth/                             # Authentication module
│   │   ├── index.ts
│   │   ├── get-token.ts
│   │   ├── get-token.test.ts
│   │   ├── refresh-token.ts
│   │   └── refresh-token.test.ts
│   ├── assortment/                       # Assortment management
│   │   ├── index.ts
│   │   ├── create-assortment.ts
│   │   ├── create-assortment.test.ts
│   │   └── get-assortment-log.ts
│   ├── catalog/                          # Product catalog management
│   │   ├── index.ts
│   │   ├── create-catalog.ts
│   │   ├── batch-small-catalog.ts
│   │   ├── batch-large-catalog.ts
│   │   ├── get-catalog-log.ts
│   │   └── overrides/
│   │       ├── index.ts
│   │       ├── batch-small-overrides.ts
│   │       ├── batch-large-overrides.ts
│   │       └── get-overrides-log.ts
│   ├── orders/                           # Order management
│   │   ├── index.ts
│   │   ├── get-order.ts
│   │   ├── get-order-page.ts
│   │   ├── get-order-log.ts
│   │   ├── batch-small-order.ts
│   │   ├── batch-large-order.ts
│   │   ├── acknowledge-order.ts
│   │   ├── acknowledge-order-items.ts
│   │   ├── request-order-cancel.ts
│   │   ├── cancel-order-item.ts
│   │   ├── batch-cancel-items.ts
│   │   ├── single-shipment.ts
│   │   └── batch-shipment.ts
│   ├── inventory/                        # Inventory management
│   │   ├── index.ts
│   │   ├── get-inventory.ts
│   │   ├── get-inventory-log.ts
│   │   ├── get-single-item.ts
│   │   ├── batch-small-inventory.ts
│   │   ├── batch-large-inventory.ts
│   │   ├── sca-backstop.ts
│   │   └── sku-hold.ts
│   ├── pricing/                          # Pricing management
│   │   ├── index.ts
│   │   ├── get-pricing-approval.ts
│   │   ├── get-pricing-history.ts
│   │   ├── batch-pricing-approval.ts
│   │   └── get-pricing-config.ts
│   ├── marketplace/                      # Marketplace operations
│   │   ├── index.ts
│   │   ├── get-settlements.ts
│   │   ├── get-adjustments.ts
│   │   ├── get-payments.ts
│   │   ├── get-promotion.ts
│   │   ├── upload-promotion-items.ts
│   │   └── get-commissions.ts
│   ├── returns/                          # Returns management
│   │   ├── index.ts
│   │   ├── get-return.ts
│   │   ├── get-return-page.ts
│   │   ├── batch-small-return.ts
│   │   ├── batch-large-return.ts
│   │   ├── get-return-log.ts
│   │   ├── update-return.ts
│   │   └── cancel-return.ts
│   ├── warehouse/                        # Warehouse management
│   │   ├── index.ts
│   │   ├── get-warehouse-page.ts
│   │   ├── get-retailer-warehouses.ts
│   │   ├── export-retailer-warehouses.ts
│   │   └── get-warehouse-codes.ts
│   ├── shipping/                         # Shipping operations
│   │   ├── index.ts
│   │   ├── get-shipping-labels.ts
│   │   ├── batch-monitored-shipments.ts
│   │   ├── get-shipment-log.ts
│   │   ├── get-delivery-promise.ts
│   │   ├── rate-shop.ts
│   │   └── get-shipping-zone-definitions.ts
│   ├── trading-partners/                 # Trading partner management
│   │   ├── index.ts
│   │   ├── get-trading-partner.ts
│   │   ├── download-supplier-profile.ts
│   │   ├── get-partner-profile.ts
│   │   └── get-supplier-calendars.ts
│   ├── conversation/                     # Communication
│   │   ├── index.ts
│   │   ├── create-conversation.ts
│   │   ├── list-conversations.ts
│   │   ├── create-message.ts
│   │   └── list-messages.ts
│   ├── invoice/                          # Invoice management
│   │   ├── index.ts
│   │   ├── create-invoice.ts
│   │   ├── batch-small-invoice.ts
│   │   └── get-invoice-log.ts
│   ├── errors/                           # Error handling
│   │   ├── index.ts
│   │   ├── abstract-error.ts
│   │   ├── api-error.ts
│   │   ├── auth-error.ts
│   │   ├── inconsistent-data-error.ts
│   │   ├── invalid-input-error.ts
│   │   ├── malformed-api-response.ts
│   │   ├── not-found-error.ts
│   │   ├── too-many-requests-error.ts
│   │   ├── transport-error.ts
│   │   └── validation-error.ts
│   ├── request/                          # Request handling utilities
│   │   ├── create-endpoint-uri.ts
│   │   ├── create-fetch-request.ts
│   │   ├── get-api-ext-param.ts
│   │   ├── publish-api-request.ts
│   │   ├── publish-request.ts
│   │   ├── request-timestamp.ts
│   │   ├── signature.ts
│   │   └── validator.ts
│   ├── validators/                       # Input/output validation
│   │   ├── index.ts
│   │   ├── common-validation.ts
│   │   ├── auth.ts
│   │   ├── assortment.ts
│   │   ├── catalog.ts
│   │   ├── orders/
│   │   │   └── order.ts
│   │   ├── inventory.ts
│   │   ├── pricing.ts
│   │   ├── marketplace.ts
│   │   ├── returns.ts
│   │   ├── warehouse.ts
│   │   ├── shipping.ts
│   │   ├── trading-partners.ts
│   │   ├── conversation.ts
│   │   └── invoice.ts
│   └── util/                             # Utility functions
│       ├── concurrent-retry-request.ts
│       ├── object.ts
│       ├── poshmark-api-error-validate.ts
│       ├── time.ts
│       ├── url.ts
│       └── validator.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## API Endpoints to Implement

Based on the DSCO API specification, implement the following endpoints:

### Authentication
- `POST /oauth2/token` - OAuth2 token generation

### Assortment Management
- `POST /assortment` - Create assortment
- `GET /assortment/log` - Get assortment log

### Catalog Management
- `POST /catalog` - Create catalog
- `POST /catalog/batch/small` - Small batch catalog operations
- `POST /catalog/batch/large` - Large batch catalog operations
- `GET /catalog/log` - Get catalog log
- `POST /catalogattr/batch/large` - Large batch catalog attributes
- `GET /catalogattr/log` - Get catalog attributes log
- `POST /catalog/overrides/batch/small` - Small batch catalog overrides
- `POST /catalog/overrides/batch/large` - Large batch catalog overrides
- `GET /catalog/overrides/log` - Get catalog overrides log

### Order Management
- `GET /order/` - Get order
- `GET /order/page` - Get order page
- `GET /order/log` - Get order log
- `POST /order/batch/small` - Small batch order operations
- `POST /order/batch/large` - Large batch order operations
- `POST /orderupdate/batch/small` - Small batch order updates
- `POST /order/acknowledge` - Acknowledge order
- `POST /order/acknowledge/items` - Acknowledge order items
- `POST /order/request/cancel` - Request order cancellation
- `POST /order/item/cancel` - Cancel order item
- `POST /order/item/cancel/batch/small` - Batch cancel order items
- `POST /order/singleShipment` - Single shipment
- `POST /order/shipment/batch/small` - Batch shipment

### Inventory Management
- `POST /inventory` - Create/update inventory
- `GET /inventory/log` - Get inventory log
- `GET /inventory/singleItem` - Get single inventory item
- `POST /inventory/batch/small` - Small batch inventory operations
- `POST /inventory/batch/large` - Large batch inventory operations
- `POST /inventory/sca/backstop` - SCA backstop inventory
- `POST /inventory/skuHold` - SKU hold operations

### Pricing Management
- `GET /pricing/approval` - Get pricing approval
- `GET /pricing/approval/history` - Get pricing approval history
- `POST /pricing/approval/batch/large` - Large batch pricing approval
- `GET /pricing/approval/config` - Get pricing approval config

### Marketplace Operations
- `GET /marketplace/settlements` - Get marketplace settlements
- `GET /marketplace/adjustments` - Get marketplace adjustments
- `GET /marketplace/payments` - Get marketplace payments
- `GET /marketplace/promotion` - Get marketplace promotions
- `POST /marketplace/promotion/uploaditems` - Upload promotion items
- `GET /marketplace/commissions` - Get marketplace commissions
- `GET /marketplace/shippingzonedefinitions` - Get shipping zone definitions

### Returns Management
- `GET /return/` - Get return
- `GET /return/page` - Get return page
- `POST /return/batch/small` - Small batch return operations
- `POST /return/batch/large` - Large batch return operations
- `GET /return/log` - Get return log
- `POST /return/update` - Update return
- `POST /return/cancel` - Cancel return

### Warehouse Management
- `GET /warehouse/page` - Get warehouse page
- `GET /retailer-warehouses` - Get retailer warehouses
- `GET /retailer-warehouses/export` - Export retailer warehouses
- `GET /retailer-warehouses/codes` - Get retailer warehouse codes

### Shipping Operations
- `POST /shippinglabels` - Create shipping labels
- `POST /monitoredshipments/batch/small` - Batch monitored shipments
- `GET /monitoredshipments/log` - Get monitored shipments log
- `POST /deliverypromise` - Get delivery promise
- `POST /rateshop` - Rate shop

### Trading Partner Management
- `GET /tradingpartner` - Get trading partner
- `GET /trading-partners/supplier-profile-download` - Download supplier profile
- `GET /trading-partners/profile` - Get trading partner profile
- `GET /suppliercalendarsforretailer` - Get supplier calendars for retailer

### Communication
- `POST /conversation` - Create conversation
- `GET /conversation/list` - List conversations
- `POST /conversation/message` - Create message
- `GET /conversation/message/list` - List messages

### Invoice Management
- `POST /invoice` - Create invoice
- `POST /invoice/batch/small` - Small batch invoice operations
- `GET /invoice/log` - Get invoice log

### Utility Endpoints
- `GET /hello` - Health check
- `POST /addException` - Add exception
- `POST /stream` - Stream operations
- `POST /function` - Function operations
- `POST /packingslip` - Create packing slip

## Implementation Requirements

### 1. Follow Exact Same Patterns
- Use `io-ts` for all input/output validation
- Implement the same error handling structure
- Use the same request/response pattern with `publishApiRequest`
- Include comprehensive test files for each function
- Follow the exact same TypeScript patterns and naming conventions

### 2. Configuration Structure
```typescript
// Base configuration for DSCO API
export const BasePoshmarkConfigC = t.type({
  baseUri: BaseUriC, // https://api.dsco.io/api/v3
  client_id: NonEmptyStringC,
  client_secret: NonEmptyStringC,
});

export const PoshmarkRequestConfigC = t.intersection([
  BasePoshmarkConfigC,
  t.type({
    access_token: NonEmptyStringC,
  }),
]);
```

### 3. Authentication Flow
- Implement OAuth2 token flow similar to Shopee's get-token
- Handle token refresh mechanisms
- Store and manage authentication state

### 4. Request Handling
- Adapt the signature and request publishing logic for DSCO API requirements
- Implement proper error handling for DSCO-specific error responses
- Use the same concurrent retry request utility

### 5. Validation
- Create comprehensive validators for all DSCO API request/response schemas
- Use the same validation patterns as xp-shopee-api
- Implement proper type safety throughout

### 6. Testing
- Include unit tests for all functions following the same pattern
- Mock DSCO API responses
- Test error scenarios and edge cases

### 7. Documentation
- Include JSDoc comments with API documentation links
- Provide usage examples
- Document all configuration options

## Key Differences from Shopee API
1. **Base URL**: `https://api.dsco.io/api/v3` instead of Shopee's URLs
2. **Authentication**: OAuth2 flow instead of Shopee's partner key system
3. **Request Signing**: Different signature mechanism (if any)
4. **Error Response Format**: Adapt to DSCO's error response structure
5. **API Structure**: Different endpoint organization and parameters

## Export Structure (src/index.ts)
```typescript
export * from './auth';
export * from './assortment';
export * from './catalog';
export * from './orders';
export * from './inventory';
export * from './pricing';
export * from './marketplace';
export * from './returns';
export * from './warehouse';
export * from './shipping';
export * from './trading-partners';
export * from './conversation';
export * from './invoice';
export * from './errors';
export * from './util/concurrent-retry-request';
export * from './util/object';
export * from './util/time';
export * from './validators';
export * from './util/validator';
```

## Additional Notes
- Maintain the same level of type safety and validation
- Use the same utility functions where applicable
- Keep the same project structure and naming conventions
- Ensure all functions return properly typed promises
- Implement the same error handling and retry mechanisms