# dsco-api

TypeScript library for integrating with the DSCO Platform API (v3) by Rithum .

## Features

- **Full TypeScript Support** - Complete type safety with io-ts runtime validation
- **OAuth2 Authentication** - Automatic token management and refresh
- **Comprehensive API Coverage** - Support for all major DSCO API endpoints
- **Error Handling** - Robust error handling with custom error types
- **Retry Logic** - Automatic retry with exponential backoff for transient failures
- **Rate Limiting** - Built-in handling for rate limit responses
- **Well Tested** - Comprehensive test coverage

## Installation

```bash
npm install dsco-api
```

## Quick Start

```typescript
import { getToken, createAssortment, getOrder } from 'dsco-api';

// 1. Get OAuth2 access token
const config = {
  baseUri: 'https://api.dsco.io/api/v3',
  client_id: 'your-client-id',
  client_secret: 'your-client-secret',
};

const tokenInfo = await getToken(config);

// 2. Create request configuration with access token
const requestConfig = {
  ...config,
  access_token: tokenInfo.access_token,
};

// 3. Make API calls
const assortment = await createAssortment(requestConfig, {
  name: 'Summer Collection',
});

const order = await getOrder(requestConfig, 'order-123');
```

## Authentication

### Getting an Access Token

```typescript
import { getToken, BaseDscoConfig } from 'dsco-api';

const config: BaseDscoConfig = {
  baseUri: 'https://api.dsco.io/api/v3',
  client_id: 'your-client-id',
  client_secret: 'your-client-secret',
};

const tokenInfo = await getToken(config);
// Returns: { access_token: string, expires_at: number }
```

### Token Refresh

```typescript
import { refreshToken } from 'dsco-api';

// Automatically refreshes if expired or about to expire (within 60 seconds)
const tokenInfo = await refreshToken(config, currentToken);
```

## API Modules

### Assortment Management

```typescript
import { createAssortment, getAssortmentLog } from 'dsco-api';

// Create assortment
const assortment = await createAssortment(requestConfig, {
  name: 'My Assortment',
});

// Get assortment log
const log = await getAssortmentLog(requestConfig, { page: 1, limit: 50 });
```

### Catalog Management

```typescript
import {
  createCatalog,
  batchSmallCatalog,
  batchLargeCatalog,
  getCatalogLog,
} from 'dsco-api';

// Create catalog entries
await createCatalog(requestConfig, {
  items: [
    {
      itemKey: 'SKU-123',
      itemKeyType: 'SKU',
      title: 'Product Title',
      description: 'Product Description',
      price: 29.99,
    },
  ],
});

// Batch operations for larger catalogs
await batchLargeCatalog(requestConfig, { items: [...] });
```

### Order Management

```typescript
import {
  getOrder,
  getOrderPage,
  acknowledgeOrder,
  singleShipment,
  batchShipment,
} from 'dsco-api';

// Get single order
const order = await getOrder(requestConfig, 'order-key-123');

// Get paginated orders
const orders = await getOrderPage(requestConfig, { page: 1, limit: 100 });

// Acknowledge order
await acknowledgeOrder(requestConfig, { orderKey: 'order-key-123' });

// Create shipment
await singleShipment(requestConfig, {
  orderKey: 'order-key-123',
  trackingNumber: 'TRACK-123',
  carrier: 'UPS',
});
```

### Inventory Management

```typescript
import {
  getInventory,
  batchSmallInventory,
  batchLargeInventory,
  getInventoryLog,
} from 'dsco-api';

// Update inventory
await batchSmallInventory(requestConfig, {
  items: [
    {
      itemKey: 'SKU-123',
      quantity: 100,
    },
  ],
});

// Get inventory log
const log = await getInventoryLog(requestConfig);
```

### Other Modules

The library also includes support for:

- **Pricing** - Pricing approval and configuration
- **Marketplace** - Settlements, adjustments, payments, commissions
- **Returns** - Return management and processing
- **Warehouse** - Warehouse management
- **Shipping** - Shipping labels and tracking
- **Trading Partners** - Trading partner management
- **Conversation** - Communication between retailers and suppliers
- **Invoice** - Invoice creation and management

## Error Handling

The library provides comprehensive error handling with custom error types:

```typescript
import {
  ApiError,
  AuthError,
  NotFoundError,
  TooManyRequestsError,
  ValidationError,
  TransportError,
} from 'dsco-api';

try {
  const order = await getOrder(requestConfig, 'invalid-order-key');
} catch (error) {
  if (error instanceof NotFoundError) {
    console.error('Order not found:', error.message);
  } else if (error instanceof AuthError) {
    console.error('Authentication failed:', error.message);
    // Refresh token and retry
  } else if (error instanceof TooManyRequestsError) {
    console.error('Rate limited, retry after:', error.retryAfter);
  } else if (error instanceof ValidationError) {
    console.error('Validation failed:', error.errors);
  } else if (error instanceof TransportError) {
    console.error('Network error:', error.message);
  } else if (error instanceof ApiError) {
    console.error('API error:', error.statusCode, error.message);
  }
}
```

## Retry Logic

The library includes automatic retry logic with exponential backoff:

```typescript
import { concurrentRetryRequest } from 'dsco-api';

const result = await concurrentRetryRequest(
  async () => {
    return await someApiCall();
  },
  {
    maxRetries: 3,
    initialDelayMs: 1000,
    maxDelayMs: 10000,
    backoffMultiplier: 2,
    retryableStatusCodes: [408, 429, 500, 502, 503, 504],
  }
);
```

## Type Safety

All API requests and responses are fully typed using io-ts for runtime validation:

```typescript
import { CreateAssortmentRequest, CreateAssortmentResponse } from 'dsco-api';

const request: CreateAssortmentRequest = {
  name: 'My Assortment',
};

const response: CreateAssortmentResponse = await createAssortment(
  requestConfig,
  request
);
// response is typed as: { id: string, name: string }
```

## Configuration

### Environment Variables

You can configure the library using environment variables:

```bash
DSCO_BASE_URI=https://api.dsco.io/api/v3
DSCO_CLIENT_ID=your-client-id
DSCO_CLIENT_SECRET=your-client-secret
```

### Staging Environment

For testing, use the staging environment:

```typescript
const config = {
  baseUri: 'https://staging-api.dsco.io/api/v3',
  client_id: 'your-staging-client-id',
  client_secret: 'your-staging-client-secret',
};
```

## API Documentation

For detailed API documentation, see:
- [DSCO Platform API Documentation](https://api.dsco.io/api/v3)
- [Rithum Knowledge Base](https://knowledge.rithum.com/s/)

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format
```

## License

MIT

## Support

For issues and questions:
- GitHub Issues: [Create an issue](https://github.com/your-repo/dsco-api/issues)
- DSCO Support: [Contact Support](https://knowledge.rithum.com/s/contactsupport)

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.
