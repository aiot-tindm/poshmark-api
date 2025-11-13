/**
 * Object utility functions
 */

/**
 * Deep clone an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T;
  }

  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item)) as unknown as T;
  }

  if (obj instanceof Object) {
    const clonedObj: Record<string, unknown> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj as T;
  }

  return obj;
}

/**
 * Remove undefined values from an object
 */
export function removeUndefined<T extends Record<string, unknown>>(
  obj: T
): Partial<T> {
  const result: Record<string, unknown> = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined) {
      result[key] = value;
    }
  });
  return result as Partial<T>;
}

/**
 * Check if an object is empty
 */
export function isEmpty(obj: Record<string, unknown>): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * Pick specific keys from an object
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result: Partial<T> = {};
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result as Pick<T, K>;
}

/**
 * Omit specific keys from an object
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result: Partial<T> = {...obj};
  keys.forEach((key) => {
    delete result[key];
  });
  return result as Omit<T, K>;
}
