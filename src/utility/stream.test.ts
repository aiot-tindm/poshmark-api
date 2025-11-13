import { stream } from './stream';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('stream', () => {
  const mockConfig: PoshmarkRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create stream successfully', async () => {
    const streamConfig = {
      objectType: 'order',
      query: {},
      description: 'Order stream',
    };

    const expectedResponse = {
      id: 'stream-123',
      objectType: 'order',
    };

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await stream(mockConfig, streamConfig);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'POST',
      path: '/stream',
      accessToken: mockConfig.access_token,
      inputCodec: expect.any(Object),
      outputCodec: expect.any(Object),
      input: streamConfig,
    });
  });
});
