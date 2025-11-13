import { DscoRequestConfig } from '../validators/auth';
import { Assortment } from '../validators/assortment';
/**
 * Get a single assortment by ID
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @returns Assortment data
 */
export declare function getAssortment(config: DscoRequestConfig, id: string): Promise<Assortment>;
