import { RequestInit, Response } from 'node-fetch';
/**
 * Create and execute a fetch request with error handling
 */
export declare function createFetchRequest(url: string, options: RequestInit): Promise<Response>;
