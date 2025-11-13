import * as t from 'io-ts';
/**
 * DSCO API error response codec
 */
export declare const DscoApiErrorC: t.PartialC<{
    error: t.StringC;
    error_description: t.StringC;
    message: t.StringC;
    status: t.UnionC<[t.NumberC, t.StringC]>;
    statusCode: t.NumberC;
    code: t.StringC;
    details: t.UnknownC;
}>;
export type DscoApiError = t.TypeOf<typeof DscoApiErrorC>;
/**
 * Check if response is an error response
 */
export declare function isDscoApiError(data: unknown): data is DscoApiError;
/**
 * Extract error message from DSCO API error response
 */
export declare function extractErrorMessage(error: unknown): string;
