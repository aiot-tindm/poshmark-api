import {acknowledgeOrderItems} from './acknowledge-order-items';
import {DscoRequestConfig} from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('acknowledgeOrderItems', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call acknowledgeOrderItems successfully', async () => {
    const request = {test: 'data'};
    const expectedResponse = {success: true};

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await acknowledgeOrderItems(mockConfig, request);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalled();
  });
});
