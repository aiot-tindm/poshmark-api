# Type System Documentation

## Overview

The `dsco-api` library provides comprehensive TypeScript types for all API requests and responses. The type system is designed to balance type safety with runtime performance.

## Type Strategy

### Runtime Validation vs TypeScript Types

The library uses a hybrid approach:

1. **Simple types** (strings, numbers, booleans) - Full io-ts runtime validation
2. **Common types** (pagination, success/fail responses) - Full io-ts runtime validation
3. **Complex domain objects** (Orders, Invoices, etc.) - TypeScript types only, `t.unknown` at runtime

This approach provides:
- **Type safety** during development with full IDE autocomplete
- **Performance** by skipping expensive runtime validation of large complex objects
- **Flexibility** as the DSCO API evolves

## Available Types

### Common Types

All common types are exported from the main package:

```typescript
import {
  // Response types
  SuccessFailResponse,
  AsyncUpdateResponse,
  MessageResponse,
  IdResponse,

  // Request types
  Pagination,
  DateRange,
  SortOrder,

  // Primitives
  NonEmptyStringC,
  PositiveNumberC,
  IdParam,
} from 'dsco-api';
```

### Module-Specific Types

#### Orders

```typescript
import {
  // Response/Query types
  Order,
  OrderItem,
  OrderQuery,

  // Request types
  CreateOrderRequest,
  UpdateOrderRequest,
  OrderLineItem,
  OrderShipping,
  AcknowledgeOrderRequest,
  CancelOrderRequest,
  SingleShipmentRequest,

  // Identifiers
  OrderKey,
} from 'dsco-api';

// Example: Create Order
const createOrderRequest: CreateOrderRequest = {
  poNumber: 'PO-123456',  // Required
  lineItems: [            // Required
    {
      quantity: 2,        // Required
      sku: 'SKU-789',
      title: 'Product Name',
      consumerPrice: 29.99,
    },
  ],
  shipping: {             // Required
    name: 'John Doe',
    address: ['123 Main St'],
    city: 'Seattle',      // Required
    region: 'WA',         // Required
    postal: '98101',      // Required
    country: 'US',
    email: 'john@example.com',
  },
  dscoTradingPartnerId: 'TP-001',
  orderDate: '2024-01-15T10:00:00Z',
  total: 59.98,
};

// Example: Query Orders
const query: OrderQuery = {
  poNumber: 'PO-123456',
  startDate: '2024-01-01',
  endDate: '2024-01-31',
  status: 'pending',
};
```

#### Returns

```typescript
import {
  // Response/Query types
  Return,
  ReturnItem,
  ReturnQuery,
  ReturnResponse,

  // Request types
  CreateReturnRequest,
  CompleteReturnRequest,
  ReturnLineItemCreate,

  // Enums/Constants
  ReturnStatus,
  ReturnKey,
} from 'dsco-api';

// Example: Create Return
const createReturnRequest: CreateReturnRequest = {
  returnNumber: 'RET-123456',  // Required
  lineItems: [                 // Required
    {
      quantity: 1,             // Required
      reasonCode: 'DEFECTIVE', // Required
      sku: 'SKU-789',
      reason: 'Item was damaged',
      condition: 'defective',
      refundAmount: 29.99,
    },
  ],
  poNumber: 'PO-123456',       // One of poNumber or dscoOrderId required
  returnDate: '2024-01-20T10:00:00Z',
  totalRefund: 29.99,
};

// Example: Complete Return
const completeReturnRequest: CompleteReturnRequest = {
  dscoReturnId: 12345,
  completionDate: '2024-01-25T10:00:00Z',
  notes: 'Return processed successfully',
  lineItems: [
    {
      lineNumber: 1,
      quantity: 1,
      condition: 'defective',
      restockable: false,
    },
  ],
};
```

#### Marketplace (Payments, Settlements, Adjustments, Promotions)

```typescript
import {
  // Payment types
  CreatePaymentRequest,
  PaymentResponse,
  Payment,
  StatementAllocation,

  // Adjustment types
  CreateAdjustmentsRequest,
  AdjustmentItem,
  Adjustment,

  // Promotion types
  CreatePromotionRequest,
  PromotionRetailer,
  Promotion,

  // Settlement & Commission types
  Settlement,
  Commission,
  SetCommissionsRequest,

  // Identifiers
  PaymentId,
  PromotionId,
} from 'dsco-api';

// Example: Create Payment
const createPaymentRequest: CreatePaymentRequest = {
  paymentDate: '2024-01-20T10:00:00Z',  // Required
  transactionId: 'TXN-123456',          // Required
  allocations: [                         // Required
    {
      amount: 59.98,                     // Required
      poNumber: 'PO-123456',
      allocationType: 'payment',
    },
  ],
  currency: 'USD',
};

// Example: Create Promotion
const createPromotionRequest: CreatePromotionRequest = {
  name: 'Summer Sale 2024',              // Required
  retailers: [                           // Required
    { tradingPartnerId: 'TP-001' },
    { tradingPartnerId: 'TP-002' },
  ],
  discountType: 'percentage',
  discountValue: 20,
  startDate: '2024-06-01T00:00:00Z',
  endDate: '2024-08-31T23:59:59Z',
};
```

#### Shipping & Delivery

```typescript
import {
  // Shipment types
  CreateShipmentRequest,
  Shipment,
  ShipmentLineItem,

  // Shipping label types
  CreateShippingLabelsRequest,
  ShippingLabel,

  // Monitored shipment types
  CreateMonitoredShipmentRequest,
  MonitoredShipment,

  // Delivery promise types
  DetermineDeliveryPromiseRequest,
  DeliveryPromise,

  // Rate shopping types
  RateShopRequest,
  RateShopOption,

  // Identifiers
  TrackingNumber,
  CarrierCode,
} from 'dsco-api';

// Example: Create Shipment
const createShipmentRequest: CreateShipmentRequest = {
  poNumber: 'PO-123456',
  shipments: [                           // Required
    {
      trackingNumber: 'TRACK-123',
      carrier: 'UPS',
      shipDate: '2024-01-18T10:00:00Z',
      lineItems: [
        {
          lineNumber: 1,
          quantity: 2,
          sku: 'SKU-789',
        },
      ],
    },
  ],
};
```

#### Pricing & Approvals

```typescript
import {
  // Approval types
  PricingApprovalBatchRequest,
  PricingApprovalItem,
  PricingApproval,

  // History types
  PricingHistoryQuery,
  PricingHistory,
  PriceChange,

  // Config types
  PricingConfig,

  // Enums
  ApprovalStatus,
} from 'dsco-api';

// Example: Pricing Approval Batch
const approvalBatch: PricingApprovalBatchRequest = {
  approvals: [
    {
      itemKey: 'SKU-789',
      approvalId: 'APR-001',
      action: 'approve',
    },
    {
      itemKey: 'SKU-790',
      approvalId: 'APR-002',
      action: 'reject',
      rejectionReason: 'Price too low',
    },
  ],
};
```

#### Invoice

```typescript
import {
  // Request types
  CreateInvoiceRequest,
  InvoiceResponse,

  // Response types
  Invoice,
  InvoiceLineItem,
  InvoiceQuery,

  // Identifiers
  InvoiceNumber,
} from 'dsco-api';

// Example: Create Invoice
const createInvoiceRequest: CreateInvoiceRequest = {
  invoiceId: 'INV-123456',               // Required
  totalAmount: 59.98,                    // Required
  poNumber: 'PO-123456',                 // One of poNumber, dscoOrderId, supplierOrderNumber required
  invoiceDate: '2024-01-20T10:00:00Z',
  currencyCode: 'USD',
  lineItems: [
    {
      lineNumber: 1,
      sku: 'SKU-789',
      quantity: 2,
      unitPrice: 29.99,
      totalPrice: 59.98,
    },
  ],
};
```

#### Conversation

```typescript
import {
  // Request types
  CreateConversationRequest,
  UpdateConversationRequest,
  AddConversationMessageRequest,

  // Response types
  Conversation,
  Message,
  ConversationQuery,

  // Identifiers
  ConversationId,
  MessageId,
} from 'dsco-api';

// Example: Create Conversation
const createConversationRequest: CreateConversationRequest = {
  subject: 'Order Inquiry',
  tradingPartnerId: 'TP-001',
  poNumber: 'PO-123456',
  initialMessage: 'When will this order ship?',
  priority: 'normal',
};

// Example: Update Conversation
const updateConversationRequest: UpdateConversationRequest = {
  conversationId: 'CONV-123',
  status: 'resolved',
  assignedTo: 'user-456',
};
```

#### Trading Partners

```typescript
import {
  // Request types
  SetTradingPartnerRequest,
  TradingPartnerUpdateResponse,

  // Response types
  TradingPartner,
  TradingPartnerProfile,
  SupplierCalendar,

  // Supporting types
  Address,
  ContactInfo,
  HolidayDate,

  // Identifiers
  TradingPartnerId,
} from 'dsco-api';

// Example: Set Trading Partner
const setTradingPartnerRequest: SetTradingPartnerRequest = {
  tradingPartnerId: 'TP-001',            // Required
  companyName: 'ACME Corporation',
  type: 'supplier',
  status: 'active',
  contactInfo: {
    name: 'John Doe',
    email: 'john@acme.com',
    phone: '+1-555-0100',
  },
  address: {
    street: '123 Main St',
    city: 'Seattle',
    state: 'WA',
    postalCode: '98101',
    country: 'US',
  },
};
```

#### Warehouse

```typescript
import {
  // Request types
  SetRetailerWarehouseCodesRequest,
  RetailerWarehouseCode,
  SetWarehouseCodesResponse,

  // Response types
  Warehouse,
  RetailerWarehouse,
  WarehouseCodes,
  WarehouseCodeMapping,
  WarehouseAddress,

  // Identifiers
  WarehouseId,
  WarehouseCode,
} from 'dsco-api';

// Example: Set Retailer Warehouse Codes
const setWarehouseCodesRequest: SetRetailerWarehouseCodesRequest = {
  warehouseCodes: [                      // Required
    {
      warehouseCode: 'WH-001',           // Required
      warehouseName: 'Main Warehouse',   // Required
      tradingPartnerId: 'TP-001',
      isDefault: true,
      status: 'active',
    },
  ],
};
```

#### Catalog & Inventory

```typescript
import {
  Assortment,
  AssortmentItem,
  CatalogItem,
  CatalogQuery,
  InventoryItem,
  InventoryQuery,
} from 'dsco-api';
```

## Usage Examples

### Using Types with API Functions

```typescript
import { createOrder, Order, DscoRequestConfig } from 'dsco-api';

const config: DscoRequestConfig = {
  baseUri: 'https://api.dsco.io/api/v3',
  client_id: 'your-client-id',
  client_secret: 'your-client-secret',
  access_token: 'your-access-token',
};

// TypeScript will validate the order structure
const newOrder: Order = {
  orderKey: 'ORD-123',
  retailerOrderId: 'R-456',
  orderDate: new Date().toISOString(),
  items: [],
};

// Full type safety
const createdOrder: Order = await createOrder(config, newOrder);
```

### Extending Types

All types use index signatures `[key: string]: unknown` to allow for additional fields:

```typescript
const order: Order = {
  orderKey: 'ORD-123',
  // ... standard fields

  // Custom fields are allowed
  customField: 'custom value',
  metadata: { foo: 'bar' },
};
```

### Query Parameters

```typescript
import { getOrderPage, OrderQuery, Pagination } from 'dsco-api';

const query: OrderQuery & Pagination = {
  status: 'pending',
  startDate: '2024-01-01',
  endDate: '2024-01-31',
  page: 1,
  limit: 100,
};

const orders = await getOrderPage(config, query);
```

## Runtime Validation

### When Runtime Validation Occurs

Runtime validation is applied to:
- **Authentication tokens** - Ensures valid OAuth2 responses
- **Simple request parameters** - Query params, IDs, etc.
- **Common response types** - Success/fail, async updates, etc.

### When Runtime Validation is Skipped

Runtime validation is skipped for:
- **Complex domain objects** - Orders, Invoices, Returns, etc.
- **Large batch operations** - To optimize performance
- **Flexible API responses** - Where structure may vary

These still have **TypeScript types** for development-time type safety.

## Best Practices

### 1. Always Import Types

```typescript
// Good - explicit types
import { Order, createOrder } from 'dsco-api';
const order: Order = { ... };

// Avoid - implicit any
const order = { ... }; // TypeScript can't help you
```

### 2. Use Type Guards for Response Validation

```typescript
import { Order } from 'dsco-api';

function isValidOrder(obj: unknown): obj is Order {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'orderKey' in obj
  );
}

const response = await createOrder(config, order);
if (isValidOrder(response)) {
  // TypeScript knows this is an Order
  console.log(response.orderKey);
}
```

### 3. Leverage Index Signatures

```typescript
// All types support additional fields
const order: Order = {
  orderKey: 'ORD-123',
  ...standardFields,
  ...customFields, // Totally valid
};
```

### 4. Use Partial Types for Updates

```typescript
const orderUpdate: Partial<Order> = {
  status: 'shipped',
  shipDate: new Date().toISOString(),
};
```

## Type Safety Levels

| Level | Description | Example |
|-------|-------------|---------|
| **Full** | io-ts runtime validation + TypeScript | `DscoRequestConfig`, `SuccessFailResponse` |
| **TypeScript Only** | TypeScript types, `t.unknown` at runtime | `Order`, `Invoice`, `Return` |
| **Flexible** | `unknown` type, manual validation needed | Legacy endpoints |

## Migration Guide

If you have existing code without types:

```typescript
// Before
async function createOrder(config: any, order: any): Promise<any> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/order/',
    input: order,
  });
}

// After
import { DscoRequestConfig, Order } from 'dsco-api';

async function createOrder(
  config: DscoRequestConfig,
  order: Order
): Promise<Order> {
  return publishRequest<Order, Order>(config.baseUri, {
    method: 'POST',
    path: '/order/',
    input: order,
  });
}
```

## Contributing

When adding new types:

1. Add TypeScript interfaces to the appropriate validator file
2. Export from `src/validators/index.ts`
3. Document in this file
4. Add examples to README.md

## References

- [io-ts Documentation](https://github.com/gcanti/io-ts)
- [DSCO Platform API Docs](https://api.dsco.io/api/v3)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
