import * as t from 'io-ts';
/**
 * Common validation codecs used across the API
 */
/**
 * Non-empty string codec
 */
export declare const NonEmptyStringC: t.RefinementC<t.StringC, string>;
/**
 * Positive number codec
 */
export declare const PositiveNumberC: t.RefinementC<t.NumberC, number>;
/**
 * Non-negative number codec
 */
export declare const NonNegativeNumberC: t.RefinementC<t.NumberC, number>;
/**
 * Base URI codec
 */
export declare const BaseUriC: t.RefinementC<t.StringC, string>;
/**
 * Timestamp codec (Unix timestamp in seconds)
 */
export declare const TimestampC: t.RefinementC<t.NumberC, number>;
/**
 * ISO Date string codec
 */
export declare const IsoDateStringC: t.RefinementC<t.StringC, string>;
/**
 * Pagination codec
 */
export declare const PaginationC: t.PartialC<{
    page: t.RefinementC<t.NumberC, number>;
    limit: t.RefinementC<t.NumberC, number>;
    offset: t.RefinementC<t.NumberC, number>;
}>;
export type Pagination = t.TypeOf<typeof PaginationC>;
/**
 * Sort order codec
 */
export declare const SortOrderC: t.UnionC<[t.LiteralC<"asc">, t.LiteralC<"desc">]>;
export type SortOrder = t.TypeOf<typeof SortOrderC>;
/**
 * Date range codec
 */
export declare const DateRangeC: t.PartialC<{
    startDate: t.RefinementC<t.StringC, string>;
    endDate: t.RefinementC<t.StringC, string>;
}>;
export type DateRange = t.TypeOf<typeof DateRangeC>;
/**
 * Success/Fail response codec
 */
export declare const SuccessFailResponseC: t.TypeC<{
    success: t.BooleanC;
}>;
export type SuccessFailResponse = t.TypeOf<typeof SuccessFailResponseC>;
/**
 * ID parameter codec
 */
export declare const IdParamC: t.UnionC<[t.StringC, t.NumberC]>;
export type IdParam = t.TypeOf<typeof IdParamC>;
/**
 * Async update response codec
 */
export declare const AsyncUpdateResponseC: t.TypeC<{
    status: t.UnionC<[t.LiteralC<"success">, t.LiteralC<"failure">, t.LiteralC<"pending">]>;
    requestId: t.StringC;
    eventDate: t.StringC;
}>;
export type AsyncUpdateResponse = t.TypeOf<typeof AsyncUpdateResponseC>;
/**
 * Generic message response
 */
export declare const MessageResponseC: t.TypeC<{
    message: t.StringC;
}>;
export type MessageResponse = t.TypeOf<typeof MessageResponseC>;
/**
 * Generic ID response
 */
export declare const IdResponseC: t.TypeC<{
    id: t.StringC;
}>;
export type IdResponse = t.TypeOf<typeof IdResponseC>;
