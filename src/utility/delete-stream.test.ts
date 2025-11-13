import {deleteStream} from './delete-stream';
import {DscoRequestConfig} from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('deleteStream', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call deleteStream successfully', async () => {
    const expectedResponse = {success: true};

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await deleteStream(mockConfig, 'test-id');

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalled();
  });
});
