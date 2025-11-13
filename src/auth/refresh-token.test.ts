import {refreshToken} from './refresh-token';
import {getToken} from './get-token';
import {BaseDscoConfig, StoredToken} from '../validators/auth';

jest.mock('./get-token');

describe('refreshToken', () => {
  const mockConfig: BaseDscoConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client-id',
    client_secret: 'test-client-secret',
  };

  const mockGetToken = getToken as jest.MockedFunction<typeof getToken>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return current token if still valid', async () => {
    const currentToken: StoredToken = {
      access_token: 'current-token',
      expires_at: Math.floor(Date.now() / 1000) + 3600, // Expires in 1 hour
    };

    const result = await refreshToken(mockConfig, currentToken);

    expect(result).toBe(currentToken);
    expect(mockGetToken).not.toHaveBeenCalled();
  });

  it('should get new token if current token is expired', async () => {
    const expiredToken: StoredToken = {
      access_token: 'expired-token',
      expires_at: Math.floor(Date.now() / 1000) - 100, // Expired 100 seconds ago
    };

    const newToken: StoredToken = {
      access_token: 'new-token',
      expires_at: Math.floor(Date.now() / 1000) + 3600,
    };

    mockGetToken.mockResolvedValue(newToken);

    const result = await refreshToken(mockConfig, expiredToken);

    expect(result).toBe(newToken);
    expect(mockGetToken).toHaveBeenCalledWith(mockConfig);
  });

  it('should get new token if no current token provided', async () => {
    const newToken: StoredToken = {
      access_token: 'new-token',
      expires_at: Math.floor(Date.now() / 1000) + 3600,
    };

    mockGetToken.mockResolvedValue(newToken);

    const result = await refreshToken(mockConfig);

    expect(result).toBe(newToken);
    expect(mockGetToken).toHaveBeenCalledWith(mockConfig);
  });

  it('should respect buffer time', async () => {
    const tokenExpiringSoon: StoredToken = {
      access_token: 'expiring-soon',
      expires_at: Math.floor(Date.now() / 1000) + 30, // Expires in 30 seconds
    };

    const newToken: StoredToken = {
      access_token: 'new-token',
      expires_at: Math.floor(Date.now() / 1000) + 3600,
    };

    mockGetToken.mockResolvedValue(newToken);

    // With default buffer of 60 seconds, should refresh
    const result = await refreshToken(mockConfig, tokenExpiringSoon);

    expect(result).toBe(newToken);
    expect(mockGetToken).toHaveBeenCalledWith(mockConfig);
  });
});
