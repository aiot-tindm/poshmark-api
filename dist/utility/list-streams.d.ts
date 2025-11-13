import { DscoRequestConfig } from '../validators/auth';
/**
 * List all streams
 *
 * @see https://api.dsco.io/api/v3/stream
 *
 * @param config - Request configuration with access token
 * @returns List of streams
 */
export declare function listStreams(config: DscoRequestConfig): Promise<unknown>;
