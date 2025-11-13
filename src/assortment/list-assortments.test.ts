import { listAssortments } from './list-assortments';
import { DscoRequestConfig } from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('listAssortments', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should list all assortments successfully', async () => {
    const expectedResponse = [
      { id: 'assortment-1', name: 'Assortment 1' },
      { id: 'assortment-2', name: 'Assortment 2' },
    ];

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await listAssortments(mockConfig);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'GET',
      path: '/assortment',
      accessToken: mockConfig.access_token,
      outputCodec: expect.any(Object),
    });
  });
});
