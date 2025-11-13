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
  Order,
  OrderItem,
  OrderQuery,
  OrderKey,
  AcknowledgeOrderRequest,
  CancelOrderRequest,
  SingleShipmentRequest,
} from 'dsco-api';

// Example usage
const order: Order = {
  orderKey: 'ORD-123',
  retailerOrderId: 'R-456',
  orderDate: '2024-01-15',
  items: [
    {
      lineNumber: 1,
      itemKey: 'SKU-789',
      quantity: 2,
      unitPrice: 29.99,
    },
  ],
};
```

#### Returns

```typescript
import {
  Return,
  ReturnItem,
  ReturnQuery,
  ReturnKey,
  ReturnStatus,
} from 'dsco-api';

// Example usage
const returnRequest: Return = {
  returnKey: 'RET-123',
  orderKey: 'ORD-123',
  returnDate: '2024-01-20',
  status: 'pending',
  items: [
    {
      lineNumber: 1,
      itemKey: 'SKU-789',
      quantity: 1,
      reason: 'defective',
    },
  ],
};
```

#### Marketplace

```typescript
import {
  Payment,
  Settlement,
  Adjustment,
  Promotion,
  Commission,
  PaymentId,
  PromotionId,
} from 'dsco-api';
```

#### Shipping

```typescript
import {
  ShippingLabel,
  MonitoredShipment,
  DeliveryPromise,
  RateShopOption,
  TrackingNumber,
  CarrierCode,
} from 'dsco-api';
```

#### Pricing

```typescript
import {
  PricingApproval,
  PricingHistory,
  PriceChange,
  PricingConfig,
  ApprovalStatus,
} from 'dsco-api';
```

#### Invoice

```typescript
import {
  Invoice,
  InvoiceLineItem,
  InvoiceQuery,
  InvoiceNumber,
} from 'dsco-api';
```

#### Conversation

```typescript
import {
  Conversation,
  Message,
  ConversationId,
  MessageId,
} from 'dsco-api';
```

#### Trading Partners

```typescript
import {
  TradingPartner,
  TradingPartnerProfile,
  SupplierCalendar,
  TradingPartnerId,
  Address,
  ContactInfo,
} from 'dsco-api';
```

#### Warehouse

```typescript
import {
  Warehouse,
  RetailerWarehouse,
  WarehouseCodes,
  WarehouseCodeMapping,
  WarehouseId,
  WarehouseCode,
} from 'dsco-api';
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
