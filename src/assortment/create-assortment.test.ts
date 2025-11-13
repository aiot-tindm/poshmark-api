import { createAssortment } from './create-assortment';
import { DscoRequestConfig } from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('createAssortment', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create assortment successfully', async () => {
    const request = {
      name: 'Test Assortment',
    };

    const expectedResponse = {
      id: 'assortment-123',
      name: 'Test Assortment',
    };

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await createAssortment(mockConfig, request);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'POST',
      path: '/assortment',
      accessToken: mockConfig.access_token,
      inputCodec: expect.any(Object),
      outputCodec: expect.any(Object),
      input: request,
    });
  });
});
