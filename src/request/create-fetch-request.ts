import fetch, {RequestInit, Response} from 'node-fetch';
import {TransportError} from '../errors';

/**
 * Create and execute a fetch request with error handling
 */
export async function createFetchRequest(
  url: string,
  options: RequestInit
): Promise<Response> {
  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    throw new TransportError(
      `Network request failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      error instanceof Error ? error : undefined
    );
  }
}
