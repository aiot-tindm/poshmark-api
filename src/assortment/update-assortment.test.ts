import { updateAssortment } from './update-assortment';
import { DscoRequestConfig } from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('updateAssortment', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update assortment successfully', async () => {
    const request = {
      id: 'assortment-123',
      name: 'Updated Assortment',
    };

    const expectedResponse = { success: true };

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await updateAssortment(mockConfig, 'assortment-123', request);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'PUT',
      path: '/assortment/assortment-123',
      accessToken: mockConfig.access_token,
      inputCodec: expect.any(Object),
      outputCodec: expect.any(Object),
      input: request,
    });
  });
});
