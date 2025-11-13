import { ApiRequestOptions } from './publish-api-request';
import * as t from 'io-ts';
export interface PublishRequestOptions<TInput, TOutput> extends Omit<ApiRequestOptions, 'body'> {
    inputCodec?: t.Type<TInput>;
    outputCodec: t.Type<TOutput>;
    input?: TInput;
}
/**
 * Publish a request with input/output validation
 */
export declare function publishRequest<TInput = unknown, TOutput = unknown>(baseUri: string, options: PublishRequestOptions<TInput, TOutput>): Promise<TOutput>;
