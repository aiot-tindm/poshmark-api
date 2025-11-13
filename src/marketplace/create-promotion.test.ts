import {createPromotion} from './create-promotion';
import {DscoRequestConfig} from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('createPromotion', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call createPromotion successfully', async () => {
    const request = {test: 'data'};
    const expectedResponse = {success: true};

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await createPromotion(mockConfig, request);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalled();
  });
});
