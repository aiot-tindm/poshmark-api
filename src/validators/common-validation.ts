import * as t from 'io-ts';

/**
 * Common validation codecs used across the API
 */

/**
 * Non-empty string codec
 */
export const NonEmptyStringC = t.refinement(
  t.string,
  (s): s is string => s.length > 0,
  'NonEmptyString'
);

/**
 * Positive number codec
 */
export const PositiveNumberC = t.refinement(
  t.number,
  (n): n is number => n > 0,
  'PositiveNumber'
);

/**
 * Non-negative number codec
 */
export const NonNegativeNumberC = t.refinement(
  t.number,
  (n): n is number => n >= 0,
  'NonNegativeNumber'
);

/**
 * Base URI codec
 */
export const BaseUriC = t.refinement(
  t.string,
  (s): s is string => s.startsWith('http://') || s.startsWith('https://'),
  'BaseUri'
);

/**
 * Timestamp codec (Unix timestamp in seconds)
 */
export const TimestampC = t.refinement(
  t.number,
  (n): n is number => n > 0,
  'Timestamp'
);

/**
 * ISO Date string codec
 */
export const IsoDateStringC = t.refinement(
  t.string,
  (s): s is string => !isNaN(Date.parse(s)),
  'IsoDateString'
);

/**
 * Pagination codec
 */
export const PaginationC = t.partial({
  page: PositiveNumberC,
  limit: PositiveNumberC,
  offset: NonNegativeNumberC,
});

export type Pagination = t.TypeOf<typeof PaginationC>;

/**
 * Sort order codec
 */
export const SortOrderC = t.union([t.literal('asc'), t.literal('desc')]);

export type SortOrder = t.TypeOf<typeof SortOrderC>;

/**
 * Date range codec
 */
export const DateRangeC = t.partial({
  startDate: IsoDateStringC,
  endDate: IsoDateStringC,
});

export type DateRange = t.TypeOf<typeof DateRangeC>;

/**
 * Success/Fail response codec
 */
export const SuccessFailResponseC = t.type({
  success: t.boolean,
});

export type SuccessFailResponse = t.TypeOf<typeof SuccessFailResponseC>;

/**
 * ID parameter codec
 */
export const IdParamC = t.union([t.string, t.number]);

export type IdParam = t.TypeOf<typeof IdParamC>;

/**
 * Async update response codec
 */
export const AsyncUpdateResponseC = t.type({
  status: t.union([
    t.literal('success'),
    t.literal('failure'),
    t.literal('pending'),
  ]),
  requestId: t.string,
  eventDate: t.string,
});

export type AsyncUpdateResponse = t.TypeOf<typeof AsyncUpdateResponseC>;

/**
 * Generic message response
 */
export const MessageResponseC = t.type({
  message: t.string,
});

export type MessageResponse = t.TypeOf<typeof MessageResponseC>;

/**
 * Generic ID response
 */
export const IdResponseC = t.type({
  id: t.string,
});

export type IdResponse = t.TypeOf<typeof IdResponseC>;
