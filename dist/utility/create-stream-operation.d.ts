import { DscoRequestConfig } from '../validators/auth';
/**
 * Create a stream operation (sync, setpartitionowner, repartition)
 *
 * @see https://api.dsco.io/api/v3/stream/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The stream ID
 * @param operation - The operation to perform on the stream
 * @returns The operation result
 */
export declare function createStreamOperation(config: DscoRequestConfig, id: string, operation: unknown): Promise<unknown>;
