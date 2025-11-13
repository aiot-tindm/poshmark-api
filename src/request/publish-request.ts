import { publishApiRequest, ApiRequestOptions } from './publish-api-request';
import { validate } from '../util/validator';
import * as t from 'io-ts';

export interface PublishRequestOptions<TInput, TOutput> extends Omit<ApiRequestOptions, 'body'> {
  inputCodec?: t.Type<TInput>;
  outputCodec: t.Type<TOutput>;
  input?: TInput;
}

/**
 * Publish a request with input/output validation
 */
export async function publishRequest<TInput = unknown, TOutput = unknown>(
  baseUri: string,
  options: PublishRequestOptions<TInput, TOutput>,
): Promise<TOutput> {
  const { inputCodec, outputCodec, input, ...apiOptions } = options;

  // Validate input if codec provided
  let validatedInput: TInput | undefined;
  if (inputCodec && input !== undefined) {
    validatedInput = validate(inputCodec, input, 'Input validation failed');
  }

  // Make API request
  const response = await publishApiRequest<unknown>(baseUri, {
    ...apiOptions,
    body: validatedInput || input,
  });

  // Validate output
  const validatedOutput = validate(outputCodec, response, 'Output validation failed');

  return validatedOutput;
}
