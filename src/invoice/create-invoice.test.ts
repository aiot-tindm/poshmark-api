import { createInvoice } from './create-invoice';
import { DscoRequestConfig } from '../validators/auth';
import * as publishRequestModule from '../request/publish-request';

jest.mock('../request/publish-request');

describe('createInvoice', () => {
  const mockConfig: DscoRequestConfig = {
    baseUri: 'https://api.dsco.io/api/v3',
    client_id: 'test-client',
    client_secret: 'test-secret',
    access_token: 'test-token',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create invoice successfully', async () => {
    const invoice = {
      invoiceNumber: 'INV-001',
      orderKey: 'order-123',
    };

    const expectedResponse = { success: true };

    const mockPublishRequest = jest
      .spyOn(publishRequestModule, 'publishRequest')
      .mockResolvedValue(expectedResponse);

    const result = await createInvoice(mockConfig, invoice);

    expect(result).toEqual(expectedResponse);
    expect(mockPublishRequest).toHaveBeenCalledWith(mockConfig.baseUri, {
      method: 'POST',
      path: '/invoice',
      accessToken: mockConfig.access_token,
      inputCodec: expect.any(Object),
      outputCodec: expect.any(Object),
      input: invoice,
    });
  });
});
