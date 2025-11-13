/* eslint-disable node/no-unpublished-import */
const { 
  // Authentication
  authenticate,
  
  // API modules
  getAssortmentItems,
  getCatalogItems,
  getOrders,
  getInventory,
  getPricing,
  getMarketplaceSettings,
  getReturns,
  getWarehouses,
  getShippingMethods,
  getTradingPartners,
  getConversations,
  getInvoices,
  
  // Utilities
  concurrentRetryRequest,
  deepClone,
  getCurrentTimestamp,
  validate,
  normalizeBaseUrl,
  buildUrl
} = require('../dist');

// DSCO API Configuration
const baseConfig = {
  baseUrl: 'https://api.dsco.io/v3',
  apiKey: 'your-api-key-here',
  clientId: 'your-client-id-here',
  clientSecret: 'your-client-secret-here'
};

(async () => {
  try {
    console.log('🚀 Starting DSCO API Examples...\n');

    // Example 1: Authentication
    console.log('1. Authenticating with DSCO API...');
    const authResult = await authenticate(baseConfig);
    console.log('✅ Authentication successful:', authResult ? 'Token received' : 'Failed');

    // Example 2: Get Catalog Items
    console.log('\n2. Fetching catalog items...');
    const catalogItems = await getCatalogItems(baseConfig, {
      limit: 10,
      offset: 0
    });
    console.log(`✅ Retrieved ${catalogItems?.data?.length || 0} catalog items`);

    // Example 3: Get Orders
    console.log('\n3. Fetching recent orders...');
    const orders = await getOrders(baseConfig, {
      status: 'pending',
      limit: 5
    });
    console.log(`✅ Retrieved ${orders?.data?.length || 0} orders`);

    // Example 4: Get Inventory
    console.log('\n4. Checking inventory levels...');
    const inventory = await getInventory(baseConfig, {
      sku: 'EXAMPLE-SKU-001'
    });
    console.log('✅ Inventory check completed');

    // Example 5: Get Trading Partners
    console.log('\n5. Fetching trading partners...');
    const partners = await getTradingPartners(baseConfig);
    console.log(`✅ Retrieved ${partners?.data?.length || 0} trading partners`);

    // Example 6: Utility Functions Demo
    console.log('\n6. Demonstrating utility functions...');
    
    // URL building
    const apiUrl = buildUrl(baseConfig.baseUrl, '/catalog/items', { limit: 10 });
    console.log('✅ Built URL:', apiUrl);
    
    // Timestamp
    const timestamp = getCurrentTimestamp();
    console.log('✅ Current timestamp:', timestamp);
    
    // Deep clone
    const clonedConfig = deepClone(baseConfig);
    console.log('✅ Config cloned successfully');

    console.log('\n🎉 All examples completed successfully!');

  } catch (error) {
    console.error('❌ Error running examples:');
    console.error('Error Code:', error.code || 'UNKNOWN');
    console.error('Error Message:', error.message);
    console.error('Stack Trace:', error.stack);
    
    // DSCO API specific error handling
    if (error.response) {
      console.error('API Response Status:', error.response.status);
      console.error('API Response Data:', JSON.stringify(error.response.data, null, 2));
    }
  }
})().catch(console.error);

// Example configurations for different environments
const exampleConfigs = {
  production: {
    baseUrl: 'https://api.dsco.io/v3',
    apiKey: 'prod-api-key',
    clientId: 'prod-client-id',
    clientSecret: 'prod-client-secret'
  },
  
  staging: {
    baseUrl: 'https://api-staging.dsco.io/v3',
    apiKey: 'staging-api-key',
    clientId: 'staging-client-id',
    clientSecret: 'staging-client-secret'
  },
  
  sandbox: {
    baseUrl: 'https://api-sandbox.dsco.io/v3',
    apiKey: 'sandbox-api-key',
    clientId: 'sandbox-client-id',
    clientSecret: 'sandbox-client-secret'
  }
};

// Export for use in other example files
module.exports = {
  baseConfig,
  exampleConfigs
};