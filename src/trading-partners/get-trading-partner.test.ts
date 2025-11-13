import {getTradingPartner} from './get-trading-partner';
import {DscoRequestConfig} from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('getTradingPartner', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get trading partner successfully', async () => {
    const query = {tradingPartnerId: 'partner-123'};
    const expectedResponse = {partner: {}};

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await getTradingPartner(mockConfig, query);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'GET',
      path: '/tradingpartner',
      accessToken: mockConfig.access_token,
      outputCodec: expect.any(Object),
      queryParams: query,
    });
  });
});
