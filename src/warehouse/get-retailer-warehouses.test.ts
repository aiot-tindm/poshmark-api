import { getRetailerWarehouses } from './get-retailer-warehouses';
import { DscoRequestConfig } from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('getRetailerWarehouses', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get retailer warehouses successfully', async () => {
    const expectedResponse = { warehouses: [] };

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await getRetailerWarehouses(mockConfig);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'GET',
      path: '/retailer-warehouses',
      accessToken: mockConfig.access_token,
      outputCodec: expect.any(Object),
    });
  });
});
