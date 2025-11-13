import {deleteAssortment} from './delete-assortment';
import {DscoRequestConfig} from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('deleteAssortment', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should delete assortment successfully', async () => {
    const expectedResponse = {success: true};

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await deleteAssortment(mockConfig, 'assortment-123');

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'DELETE',
      path: '/assortment/assortment-123',
      accessToken: mockConfig.access_token,
      outputCodec: expect.any(Object),
    });
  });
});
