import { getToken } from './get-token';
import { BaseDscoConfig } from '../validators/auth';

// Mock node-fetch
jest.mock('node-fetch');

describe('getToken', () => {
  const mockConfig: BaseDscoConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client-id',
    client_secret: 'test-client-secret',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get access token successfully', async () => {
    const mockResponse = {
      access_token: 'test-access-token',
      token_type: 'Bearer',
      expires_in: 3600,
    };

    const fetch = require('node-fetch');
    fetch.mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await getToken(mockConfig);

    expect(result.access_token).toBe('test-access-token');
    expect(result.expires_at).toBeGreaterThan(Date.now() / 1000);
  });

  it('should throw AuthError on failed request', async () => {
    const fetch = require('node-fetch');
    fetch.mockResolvedValue({
      ok: false,
      status: 401,
      statusText: 'Unauthorized',
      text: async () => 'Invalid credentials',
    });

    await expect(getToken(mockConfig)).rejects.toThrow('Failed to get access token');
  });

  it('should validate config', async () => {
    const invalidConfig = {
      baseUri: 'invalid-url',
      client_id: '',
      client_secret: 'test',
    };

    await expect(getToken(invalidConfig as BaseDscoConfig)).rejects.toThrow();
  });
});
