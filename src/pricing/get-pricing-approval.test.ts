import { getPricingApproval } from './get-pricing-approval';
import { DscoRequestConfig } from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('getPricingApproval', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get pricing approvals successfully', async () => {
    const query = { status: 'pending' };
    const expectedResponse = { approvals: [] };

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await getPricingApproval(mockConfig, query);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'GET',
      path: '/pricing/approval',
      accessToken: mockConfig.access_token,
      outputCodec: expect.any(Object),
      queryParams: query,
    });
  });
});
