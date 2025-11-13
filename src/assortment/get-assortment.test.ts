import { getAssortment } from './get-assortment';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('getAssortment', () => {
  const mockConfig: PoshmarkRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get assortment by id successfully', async () => {
    const expectedResponse = {
      id: 'assortment-123',
      name: 'Test Assortment',
    };

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await getAssortment(mockConfig, 'assortment-123');

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'GET',
      path: '/assortment/assortment-123',
      accessToken: mockConfig.access_token,
      outputCodec: expect.any(Object),
    });
  });
});
