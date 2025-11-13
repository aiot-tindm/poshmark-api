import {getShippingLabels} from './get-shipping-labels';
import {DscoRequestConfig} from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('getShippingLabels', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get shipping labels successfully', async () => {
    const request = {orderId: 'order-123'};
    const expectedResponse = {label: 'base64-encoded-label'};

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await getShippingLabels(mockConfig, request);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'POST',
      path: '/shippinglabels',
      accessToken: mockConfig.access_token,
      inputCodec: expect.any(Object),
      outputCodec: expect.any(Object),
      input: request,
    });
  });
});
