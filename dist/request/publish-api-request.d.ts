export interface ApiRequestOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    accessToken?: string;
    body?: unknown;
    headers?: Record<string, string>;
    queryParams?: Record<string, string | number | boolean | undefined>;
}
/**
 * Publish an API request to the DSCO API
 */
export declare function publishApiRequest<T>(baseUri: string, options: ApiRequestOptions): Promise<T>;
