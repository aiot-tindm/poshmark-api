# DSCO Integration Guide for Poshmark

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Prerequisites](#prerequisites)
4. [Authentication](#authentication)
5. [Flow 1: Item Sync](#flow-1-item-sync-supplier--dsco--poshmark)
6. [Flow 2: Order Process](#flow-2-order-process-poshmark--dsco--supplier)
7. [Flow 3: Shipment Process](#flow-3-shipment-process-supplier--dsco--poshmark)
8. [API Reference](#api-reference)
9. [Error Handling](#error-handling)
10. [Best Practices](#best-practices)

## Overview

This guide describes the complete integration between your supplier system, the DSCO platform, and Poshmark marketplace. The integration consists of three main flows:

1. **Item Sync**: Synchronize your product catalog and inventory to Poshmark
2. **Order Process**: Receive and process customer orders from Poshmark
3. **Shipment Process**: Send shipment tracking information back to Poshmark

## Architecture

```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│              │         │              │         │              │
│  Your System │ ◄─────► │     DSCO     │ ◄─────► │   Poshmark   │
│  (Supplier)  │         │   Platform   │         │ (Marketplace)│
│              │         │              │         │              │
└──────────────┘         └──────────────┘         └──────────────┘
```

- **Your System**: Your backend system that manages inventory, orders, and fulfillment
- **DSCO Platform**: Middleware that handles integration, validation, and synchronization
- **Poshmark**: The marketplace where your products are sold to customers

### Key Components

- **Base API URL**: `https://api.dsco.io/api/v3`
- **Authentication**: OAuth2 Client Credentials flow
- **Data Format**: JSON
- **API Style**: RESTful with async operations

## Prerequisites

Before you begin, ensure you have:

1. **DSCO Account Credentials**:
   - Client ID
   - Client Secret
   - Base URI (typically `https://api.dsco.io/api/v3`)

2. **Product Data**:
   - SKUs
   - Product titles and descriptions
   - Images (publicly accessible URLs)
   - Pricing information
   - Category mappings

3. **Technical Requirements**:
   - HTTPS-capable server
   - Ability to poll APIs every 5-10 seconds (for order stream)
   - Webhook handling capability (optional)

## Authentication

### OAuth2 Token Flow

All API requests require an OAuth2 access token obtained via client credentials flow.

**Endpoint**: `POST /oauth2/token`

**Request**:
```typescript
import {authenticateClient} from 'dsco-api';

const config = {
  baseUri: 'https://api.dsco.io/api/v3',
  client_id: 'your-client-id',
  client_secret: 'your-client-secret',
};

const requestConfig = await authenticateClient(config);
// requestConfig now includes access_token
```

**Response**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

**Token Management**:
- Tokens expire after 1 hour (3600 seconds)
- Request a new token before expiration
- Store token securely
- Reuse token across requests until expiration

---

## Flow 1: Item Sync (Supplier → DSCO → Poshmark)

This flow synchronizes your product catalog and inventory levels to Poshmark.

### Overview

```
Your System → [Authenticate] → [Update Catalog] → DSCO → Poshmark
                                      ↓
                                [Check Status]
                                      ↓
                              [Update Inventory]
```

### Step-by-Step Process

#### Step 1: Authenticate

Obtain an access token using OAuth2 (see [Authentication](#authentication)).

#### Step 2: Prepare Catalog Data

Structure your product data according to the catalog schema:

```typescript
import {batchLargeCatalog} from 'dsco-api';

const catalogRequest = {
  items: [
    {
      supplierSku: 'SKU-12345',
      title: 'Premium Cotton T-Shirt',
      description: 'High-quality 100% cotton t-shirt',
      brand: 'YourBrand',
      color: 'Navy Blue',
      size: 'Large',
      categoryPath: 'Apparel||Tops||T-Shirts',
      images: [
        'https://yourcdn.com/images/tshirt-front.jpg',
        'https://yourcdn.com/images/tshirt-back.jpg'
      ],
      retailPrice: 29.99,
      cost: 15.00,
      upc: '123456789012',
      extendedAttributes: {
        material: '100% Cotton',
        care: 'Machine wash cold',
        origin: 'USA'
      }
    }
    // ... more items
  ]
};
```

**Required Fields**:
- `supplierSku`: Unique identifier for the product
- `title`: Product title (max 200 characters)
- `categoryPath`: Category hierarchy separated by `||`

**Important Notes**:
- Images must be publicly accessible HTTPS URLs
- Use Large Batch endpoint for >100 items
- Category path format: `"Category||Subcategory||Item"`

#### Step 3: Update Catalog

Send catalog data to DSCO:

**Endpoint**: `POST /catalog/batch/large`

```typescript
const response = await batchLargeCatalog(requestConfig, catalogRequest);
console.log('Change Log ID:', response.changeLogId);
```

**Response**:
```json
{
  "changeLogId": "abc123xyz789"
}
```

The operation is asynchronous. DSCO returns a `changeLogId` that you use to check the status.

#### Step 4: Check Catalog Status

Wait 2-5 seconds, then poll for the status:

**Endpoint**: `GET /catalog/log?changeLogId={changeLogId}`

```typescript
import {getCatalogLog} from 'dsco-api';

// Wait before checking
await new Promise(resolve => setTimeout(resolve, 3000));

const logResponse = await getCatalogLog(requestConfig, {
  changeLogId: 'abc123xyz789'
});

console.log('Success:', logResponse.successCount);
console.log('Errors:', logResponse.errorCount);

if (logResponse.errors && logResponse.errors.length > 0) {
  logResponse.errors.forEach(error => {
    console.error('Error:', error.message, 'SKU:', error.supplierSku);
  });
}
```

**Response**:
```json
{
  "changeLogId": "abc123xyz789",
  "status": "completed",
  "successCount": 95,
  "errorCount": 5,
  "errors": [
    {
      "supplierSku": "SKU-99999",
      "message": "Invalid category path",
      "field": "categoryPath"
    }
  ]
}
```

#### Step 5: Update Inventory

After catalog is successfully updated, send inventory levels:

**Endpoint**: `POST /inventory/batch/large`

```typescript
import {batchLargeInventory} from 'dsco-api';

const inventoryRequest = {
  items: [
    {
      supplierSku: 'SKU-12345',
      quantityAvailable: 100,
      warehouseCode: 'WH-01'
    },
    {
      supplierSku: 'SKU-67890',
      quantityAvailable: 50,
      warehouseCode: 'WH-01'
    }
  ]
};

const invResponse = await batchLargeInventory(requestConfig, inventoryRequest);
console.log('Inventory update:', invResponse);
```

**Important**:
- Catalog items MUST exist before updating inventory
- Setting `quantityAvailable: 0` will delist the product
- DSCO automatically syncs to Poshmark

#### Step 6: DSCO Syncs to Poshmark

DSCO automatically:
1. Validates the data
2. Checks compliance with Poshmark requirements
3. Syncs approved items to Poshmark
4. Products become visible to Poshmark buyers

### Update and Delete Operations

#### Update Existing Products

Use the same catalog and inventory endpoints with updated data:

```typescript
// Update price, description, or other attributes
const updateRequest = {
  items: [
    {
      supplierSku: 'SKU-12345',
      retailPrice: 24.99,  // New price
      description: 'Updated description'
    }
  ]
};

await batchLargeCatalog(requestConfig, updateRequest);
```

#### Delete Products (Delist)

Set inventory to 0 to delist from Poshmark:

```typescript
const delistRequest = {
  items: [
    {
      supplierSku: 'SKU-12345',
      quantityAvailable: 0
    }
  ]
};

await batchLargeInventory(requestConfig, delistRequest);
```

---

## Flow 2: Order Process (Poshmark → DSCO → Supplier)

This flow allows you to receive orders from Poshmark via DSCO's streaming API.

### Overview

```
Poshmark Order → DSCO → [Your System Polls Stream] → Process Order → Acknowledge
```

### Step-by-Step Process

#### Step 1: Create Stream (One-Time Setup)

Create a stream to receive order events. This is done once and reused forever.

**Endpoint**: `POST /stream`

```typescript
import {stream} from 'dsco-api';

const streamRequest = {
  objectType: 'order',
  description: 'Poshmark order stream'
};

const streamResponse = await stream(requestConfig, streamRequest);
const streamId = streamResponse.streamId;

// Store streamId permanently for future use
console.log('Stream ID:', streamId);
```

**Response**:
```json
{
  "streamId": "stream-abc123",
  "objectType": "order",
  "partitions": [
    {"partitionId": "0", "position": "0"}
  ]
}
```

**Important**:
- Create the stream once during initial setup
- Store the `streamId` in your configuration
- The stream persists indefinitely

#### Step 2: Poll for Orders (Continuous Loop)

Poll the stream every 5-10 seconds to get new orders:

**Endpoint**: `GET /stream/{streamId}/{partitionId}/{position}`

```typescript
import {getStreamPartitionPosition} from 'dsco-api';

let currentPosition = '0';
const partitionId = '0';

// Run this in a continuous loop
setInterval(async () => {
  try {
    const events = await getStreamPartitionPosition(
      requestConfig,
      streamId,
      partitionId,
      currentPosition
    );

    if (events && events.length > 0) {
      for (const event of events) {
        await processOrder(event.payload);

        // Update position to mark as read
        currentPosition = event.position;
      }
    }
  } catch (error) {
    console.error('Error polling stream:', error);
  }
}, 10000); // Poll every 10 seconds
```

**Event Structure**:
```json
[
  {
    "position": "123",
    "partitionId": "0",
    "timestamp": "2025-11-14T10:00:00Z",
    "payload": {
      "orderId": "12345",
      "orderNumber": "PO-2025-001",
      "orderDate": "2025-11-14T09:30:00Z",
      "lineItems": [
        {
          "lineItemId": "item-001",
          "supplierSku": "SKU-12345",
          "quantity": 2,
          "unitPrice": 29.99,
          "total": 59.98
        }
      ],
      "shippingAddress": {
        "name": "John Doe",
        "address": ["123 Main St", "Apt 4B"],
        "city": "New York",
        "region": "NY",
        "postal": "10001",
        "country": "US",
        "phone": "+1-555-0100",
        "email": "john@example.com"
      },
      "orderType": "marketplace",
      "total": 59.98
    }
  }
]
```

#### Step 3: Process Order

When you receive an order event, process it in your system:

```typescript
async function processOrder(order) {
  // 1. Validate inventory availability
  const hasInventory = await checkInventory(order.lineItems);

  if (!hasInventory) {
    // Handle out of stock
    await cancelOrderItems(order.orderId, order.lineItems);
    return;
  }

  // 2. Create internal order in your system
  const internalOrder = await createInternalOrder(order);

  // 3. Allocate stock
  await allocateStock(order.lineItems);

  // 4. Generate pick list
  await generatePickList(internalOrder);

  console.log('Order processed:', order.orderNumber);
}
```

#### Step 4: Acknowledge Order

Confirm to DSCO that you received the order:

**Endpoint**: `POST /order/acknowledge`

```typescript
import {acknowledgeOrder} from 'dsco-api';

const ackRequest = {
  orderIds: [order.orderId]
};

await acknowledgeOrder(requestConfig, ackRequest);
```

**Important**:
- Acknowledge all orders, even if you can't fulfill them
- Acknowledgment must happen within 24 hours
- Use cancellation API for items you can't fulfill

#### Step 5: Update Stream Position

Mark events as processed by updating the stream cursor:

**Endpoint**: `PUT /stream/{streamId}/{partitionId}/{position}`

```typescript
import {updateStreamPosition} from 'dsco-api';

await updateStreamPosition(
  requestConfig,
  streamId,
  partitionId,
  currentPosition  // Latest event position
);
```

**Important**:
- Update position after successfully processing events
- This prevents reprocessing the same events
- Position is per-partition

### Stream Best Practices

1. **Polling Frequency**: 5-10 seconds is optimal
2. **Error Handling**: Don't update position if processing fails
3. **Persistence**: Store the last processed position in your database
4. **Replay**: If needed, you can replay events from any position
5. **Retention**: Stream events are kept for 90 days

---

## Flow 3: Shipment Process (Supplier → DSCO → Poshmark)

This flow sends shipment tracking information to Poshmark when you fulfill orders.

### Overview

```
Fulfill Order → Create Shipment → DSCO → Poshmark → Customer Notification
```

### Step-by-Step Process

#### Step 1: Fulfill Order

In your system:
1. Pick items from inventory
2. Pack the order
3. Generate shipping label
4. Get tracking number from carrier

#### Step 2: Create Shipment

Send shipment details to DSCO:

**Endpoint**: `POST /order/singleShipment`

```typescript
import {singleShipment} from 'dsco-api';

const shipmentRequest = {
  orderId: '12345',
  trackingNumber: '1Z999AA10123456784',
  carrier: 'UPS',
  shipDate: '2025-11-14T14:30:00Z',
  lineItems: [
    {
      lineItemId: 'item-001',
      quantity: 2
    }
  ]
};

const shipmentResponse = await singleShipment(requestConfig, shipmentRequest);
console.log('Shipment created:', shipmentResponse);
```

**Supported Carriers**:
- USPS
- UPS
- FedEx
- DHL
- OnTrac
- LaserShip

**Response**:
```json
{
  "shipmentId": "ship-abc123",
  "status": "success",
  "trackingUrl": "https://wwwapps.ups.com/tracking/..."
}
```

#### Step 3: DSCO Processing

DSCO automatically:
1. Validates shipment data
2. Updates order status to "shipped"
3. Marks line items as fulfilled

#### Step 4: Sync to Poshmark

DSCO sends tracking information to Poshmark:
1. Updates order status
2. Provides tracking number
3. Triggers customer notification

#### Step 5: Customer Notification

Poshmark automatically:
1. Sends tracking email to customer
2. Updates order page with tracking info
3. Provides delivery tracking

### Batch Shipments

For multiple shipments, use the batch endpoint:

**Endpoint**: `POST /order/shipment/batch/small`

```typescript
import {batchShipment} from 'dsco-api';

const batchRequest = {
  shipments: [
    {
      orderId: '12345',
      trackingNumber: '1Z999AA10123456784',
      carrier: 'UPS',
      shipDate: '2025-11-14T14:30:00Z',
      lineItems: [{lineItemId: 'item-001', quantity: 2}]
    },
    {
      orderId: '12346',
      trackingNumber: '1Z999AA10123456785',
      carrier: 'USPS',
      shipDate: '2025-11-14T14:35:00Z',
      lineItems: [{lineItemId: 'item-002', quantity: 1}]
    }
  ]
};

const batchResponse = await batchShipment(requestConfig, batchRequest);
```

**Limits**:
- Small batch: Up to 5MB payload
- Can send multiple orders at once

### Partial Shipments

If you can't ship all items at once:

```typescript
// First shipment - 2 of 5 items
const partialShipment1 = {
  orderId: '12345',
  trackingNumber: '1Z999AA10123456784',
  carrier: 'UPS',
  lineItems: [
    {lineItemId: 'item-001', quantity: 2}  // Only 2 items
  ]
};

await singleShipment(requestConfig, partialShipment1);

// Later - remaining 3 items
const partialShipment2 = {
  orderId: '12345',  // Same order ID
  trackingNumber: '1Z999AA10123456790',  // Different tracking
  carrier: 'UPS',
  lineItems: [
    {lineItemId: 'item-001', quantity: 3}  // Remaining 3 items
  ]
};

await singleShipment(requestConfig, partialShipment2);
```

### Cancellation Flow

If you can't fulfill an order:

**Endpoint**: `POST /order/item/cancel`

```typescript
import {cancelOrderItem} from 'dsco-api';

const cancelRequest = {
  orderId: '12345',
  lineItemId: 'item-001',
  quantity: 2,
  reason: 'OUT_OF_STOCK',
  notes: 'Unexpected inventory shortage'
};

await cancelOrderItem(requestConfig, cancelRequest);
```

**Cancellation Reasons**:
- `OUT_OF_STOCK`: Inventory not available
- `CUSTOMER_REQUEST`: Customer requested cancellation
- `DAMAGED`: Item damaged and can't be shipped
- `OTHER`: Other reason (provide notes)

**Important**:
- Cancel as soon as you know you can't fulfill
- Cancellations should happen within 24 hours
- Provide clear reason for better customer experience

---

## API Reference

### Base Configuration

All API calls use the base URI and require authentication:

```typescript
import {authenticateClient} from 'dsco-api';

const config = {
  baseUri: 'https://api.dsco.io/api/v3',
  client_id: 'your-client-id',
  client_secret: 'your-client-secret',
};

const requestConfig = await authenticateClient(config);
```

### Catalog APIs

| Function | Endpoint | Method | Description |
|----------|----------|--------|-------------|
| `batchLargeCatalog` | `/catalog/batch/large` | POST | Update catalog in batches (>100 items) |
| `batchSmallCatalog` | `/catalog/batch/small` | POST | Update catalog in batches (<100 items) |
| `getCatalogLog` | `/catalog/log` | GET | Check catalog update status |
| `createCatalog` | `/catalog` | POST | Create single catalog item |
| `getCatalogById` | `/catalog` | GET | Get catalog item by ID |

### Inventory APIs

| Function | Endpoint | Method | Description |
|----------|----------|--------|-------------|
| `batchLargeInventory` | `/inventory/batch/large` | POST | Update inventory in batches (>100 items) |
| `batchSmallInventory` | `/inventory/batch/small` | POST | Update inventory in batches (<100 items) |
| `getInventoryLog` | `/inventory/log` | GET | Check inventory update status |
| `getInventory` | `/inventory` | GET | Get inventory levels |

### Order APIs

| Function | Endpoint | Method | Description |
|----------|----------|--------|-------------|
| `acknowledgeOrder` | `/order/acknowledge` | POST | Acknowledge order receipt |
| `createOrder` | `/order/` | POST | Create single order |
| `getOrder` | `/order/` | GET | Get order details |
| `getOrderLog` | `/order/log` | GET | Get order history |
| `cancelOrderItem` | `/order/item/cancel` | POST | Cancel order line items |

### Shipment APIs

| Function | Endpoint | Method | Description |
|----------|----------|--------|-------------|
| `singleShipment` | `/order/singleShipment` | POST | Create single shipment |
| `batchShipment` | `/order/shipment/batch/small` | POST | Create batch shipments |

### Stream APIs

| Function | Endpoint | Method | Description |
|----------|----------|--------|-------------|
| `stream` | `/stream` | POST | Create new stream |
| `getStream` | `/stream/{id}` | GET | Get stream details |
| `getStreamPartitionPosition` | `/stream/{id}/{partitionId}/{position}` | GET | Get events from position |
| `updateStreamPosition` | `/stream/{id}/{partitionId}/{position}` | PUT | Update stream cursor |
| `deleteStream` | `/stream/{id}` | DELETE | Delete stream |

---

## Error Handling

### Common HTTP Status Codes

| Code | Meaning | Action |
|------|---------|--------|
| 200 | Success | Continue normally |
| 400 | Bad Request | Check request payload |
| 401 | Unauthorized | Refresh access token |
| 403 | Forbidden | Check API permissions |
| 404 | Not Found | Verify resource ID |
| 429 | Rate Limited | Implement backoff retry |
| 500 | Server Error | Retry with exponential backoff |

### Error Response Format

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Missing required field: supplierSku",
    "details": {
      "field": "supplierSku",
      "line": 5
    }
  }
}
```

### Retry Strategy

Implement exponential backoff for transient errors:

```typescript
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  let lastError: Error;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      // Don't retry client errors (4xx)
      if (error.status >= 400 && error.status < 500 && error.status !== 429) {
        throw error;
      }

      // Exponential backoff: 1s, 2s, 4s
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}

// Usage
const response = await retryWithBackoff(() =>
  batchLargeCatalog(requestConfig, catalogRequest)
);
```

### Common Errors and Solutions

#### Catalog Errors

**Error**: "Invalid category path"
- **Solution**: Use format `"Category||Subcategory||Item"`
- **Example**: `"Apparel||Tops||T-Shirts"`

**Error**: "Image URL not accessible"
- **Solution**: Ensure images are publicly accessible via HTTPS
- **Check**: Verify URL in browser before sending

**Error**: "Duplicate supplierSku"
- **Solution**: Each SKU must be unique; use update instead of create

#### Inventory Errors

**Error**: "Catalog item not found"
- **Solution**: Create catalog item before updating inventory
- **Order**: Always catalog first, then inventory

**Error**: "Invalid warehouse code"
- **Solution**: Use valid warehouse codes from your DSCO setup

#### Order Errors

**Error**: "Stream not found"
- **Solution**: Create stream first using `POST /stream`
- **Storage**: Store and reuse streamId

**Error**: "Invalid stream position"
- **Solution**: Use position from latest event or start from "0"

#### Shipment Errors

**Error**: "Order not found"
- **Solution**: Verify orderId matches order from stream
- **Check**: Ensure order was acknowledged first

**Error**: "Invalid carrier code"
- **Solution**: Use supported carriers: USPS, UPS, FedEx, DHL, OnTrac, LaserShip

**Error**: "Tracking number format invalid"
- **Solution**: Verify tracking number format matches carrier requirements

---

## Best Practices

### 1. Token Management

```typescript
class TokenManager {
  private token: string | null = null;
  private expiresAt: number = 0;

  async getToken(config: BaseDscoConfig): Promise<string> {
    // Refresh if expired or expiring in <5 minutes
    if (!this.token || Date.now() >= this.expiresAt - 300000) {
      const response = await authenticateClient(config);
      this.token = response.access_token;
      this.expiresAt = Date.now() + 3600000; // 1 hour
    }
    return this.token;
  }
}
```

### 2. Batch Operations

- Use large batch endpoints for >100 items
- Split very large batches (>1000 items) into multiple requests
- Process in parallel when possible
- Always check changelog status

```typescript
async function uploadCatalogInBatches(items: CatalogItem[]) {
  const batchSize = 500;

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);

    const response = await batchLargeCatalog(requestConfig, {items: batch});

    // Wait and check status
    await new Promise(resolve => setTimeout(resolve, 3000));
    const status = await getCatalogLog(requestConfig, {
      changeLogId: response.changeLogId
    });

    if (status.errorCount > 0) {
      console.error(`Batch ${i}-${i+batchSize} has errors:`, status.errors);
    }
  }
}
```

### 3. Stream Processing

- Poll every 5-10 seconds (not more frequently)
- Process events in order
- Update position only after successful processing
- Store position in database for recovery

```typescript
class OrderStreamProcessor {
  private lastPosition: string = '0';

  async start() {
    setInterval(() => this.pollAndProcess(), 10000);
  }

  private async pollAndProcess() {
    try {
      const events = await getStreamPartitionPosition(
        requestConfig,
        streamId,
        '0',
        this.lastPosition
      );

      for (const event of events) {
        await this.processEvent(event);
        this.lastPosition = event.position;
        await this.savePosition(this.lastPosition);
      }

      if (events.length > 0) {
        await updateStreamPosition(
          requestConfig,
          streamId,
          '0',
          this.lastPosition
        );
      }
    } catch (error) {
      console.error('Stream processing error:', error);
      // Don't update position on error
    }
  }

  private async savePosition(position: string) {
    // Save to database for recovery
    await db.updateConfig('stream_position', position);
  }
}
```

### 4. Inventory Synchronization

- Send inventory updates regularly (every 15-30 minutes)
- Send immediate updates after order fulfillment
- Set quantity to 0 for out-of-stock items
- Validate inventory before shipment

```typescript
async function syncInventory() {
  const inventory = await getInventoryFromWarehouse();

  const inventoryRequest = {
    items: inventory.map(item => ({
      supplierSku: item.sku,
      quantityAvailable: item.onHand - item.allocated,
      warehouseCode: item.warehouse
    }))
  };

  await batchLargeInventory(requestConfig, inventoryRequest);
}

// Run every 15 minutes
setInterval(syncInventory, 15 * 60 * 1000);
```

### 5. Shipment Tracking

- Send shipments within 24-48 hours of order
- Include all required fields
- Support partial shipments
- Send tracking updates immediately

```typescript
async function fulfillAndShip(orderId: string) {
  // Fulfill order
  const fulfillment = await fulfillOrder(orderId);

  // Generate shipping label
  const label = await generateShippingLabel(fulfillment);

  // Immediately send to DSCO
  await singleShipment(requestConfig, {
    orderId: orderId,
    trackingNumber: label.trackingNumber,
    carrier: label.carrier,
    shipDate: new Date().toISOString(),
    lineItems: fulfillment.items.map(item => ({
      lineItemId: item.lineItemId,
      quantity: item.quantity
    }))
  });
}
```

### 6. Error Monitoring

Implement comprehensive logging and alerting:

```typescript
class ApiMonitor {
  async logApiCall(
    endpoint: string,
    request: any,
    response: any,
    error?: Error
  ) {
    await db.logApiCall({
      timestamp: new Date(),
      endpoint,
      request: JSON.stringify(request),
      response: JSON.stringify(response),
      error: error?.message,
      success: !error
    });

    if (error) {
      await this.sendAlert(endpoint, error);
    }
  }

  private async sendAlert(endpoint: string, error: Error) {
    // Send to monitoring system (e.g., Slack, PagerDuty)
    console.error(`API Error on ${endpoint}:`, error);
  }
}
```

### 7. Testing

Test each flow in a sandbox environment before production:

```typescript
// Test catalog sync
async function testCatalogSync() {
  const testItem = {
    items: [{
      supplierSku: 'TEST-SKU-001',
      title: 'Test Product',
      categoryPath: 'Test||Category',
      retailPrice: 9.99
    }]
  };

  const response = await batchLargeCatalog(requestConfig, testItem);
  console.log('Test catalog response:', response);

  await new Promise(resolve => setTimeout(resolve, 3000));

  const status = await getCatalogLog(requestConfig, {
    changeLogId: response.changeLogId
  });

  console.log('Test catalog status:', status);
}
```

---

## Integration Checklist

### Initial Setup
- [ ] Obtain DSCO credentials (client_id, client_secret)
- [ ] Configure OAuth2 authentication
- [ ] Create order stream
- [ ] Store stream ID in configuration
- [ ] Set up token refresh mechanism

### Catalog Integration
- [ ] Map product categories to DSCO format
- [ ] Ensure images are publicly accessible
- [ ] Implement catalog batch upload
- [ ] Implement changelog status checking
- [ ] Handle catalog errors gracefully

### Inventory Integration
- [ ] Implement inventory sync (every 15-30 minutes)
- [ ] Handle inventory log checking
- [ ] Implement immediate updates after fulfillment
- [ ] Test out-of-stock delisting

### Order Integration
- [ ] Implement stream polling (every 5-10 seconds)
- [ ] Implement order processing logic
- [ ] Implement order acknowledgment
- [ ] Implement stream position updates
- [ ] Store position for recovery
- [ ] Test order cancellation flow

### Shipment Integration
- [ ] Implement shipment creation
- [ ] Support all carrier codes
- [ ] Test partial shipments
- [ ] Test cancellations
- [ ] Implement tracking updates

### Production Readiness
- [ ] Implement error handling and retries
- [ ] Set up logging and monitoring
- [ ] Implement alerting for failures
- [ ] Test end-to-end flows
- [ ] Document runbooks for operations
- [ ] Train support team

---

## Support and Resources

- **DSCO API Documentation**: https://api.dsco.io/docs
- **Support Email**: support@dsco.io
- **API Status**: https://status.dsco.io

## Changelog

### Version 1.0 (2025-11-14)
- Initial documentation created
- Corrected API endpoints based on actual implementation
- Added comprehensive code examples
- Added error handling patterns
- Added best practices

---

*This documentation is maintained as part of the dsco-api TypeScript library.*
