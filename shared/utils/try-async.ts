type TryResult<E, T> = { data: T | null; error: E | null };
type TryTuple<E, T> = [T | null, E | null];

interface TryOptions {
  tuple?: boolean;
  finally?: () => void | Promise<void>;
}

// Overloads with reversed generics (E first, T second)
export function tryAsync<E = Error, T = unknown>(
  fn: () => Promise<T>,
  options?: { tuple?: false; finally?: () => void | Promise<void> }
): Promise<TryResult<E, T>>;

export function tryAsync<E = Error, T = unknown>(
  fn: () => Promise<T>,
  options: { tuple: true; finally?: () => void | Promise<void> }
): Promise<TryTuple<E, T>>;

export function tryAsync<E = Error, T = unknown>(
  fn: () => T,
  options?: { tuple?: false; finally?: () => void | Promise<void> }
): TryResult<E, T>;

export function tryAsync<E = Error, T = unknown>(
  fn: () => T,
  options: { tuple: true; finally?: () => void | Promise<void> }
): TryTuple<E, T>;

// Implementation
/**
 * A utility function that wraps try-catch logic and returns results in a consistent format
 * Supports both synchronous and asynchronous functions
 * Can return results as objects or tuples
 *
 * @param {Function} fn - The function to execute
 * @param {Object} options - Configuration options
 * @param {boolean} options.tuple - Return as tuple [data, error] instead of object
 * @param {Function} options.finally - Function to execute in finally block
 * @returns {Object|Array|Promise} Result in specified format
 */
export function tryAsync<E = Error, T = unknown>(
  fn: () => T | Promise<T>,
  options: TryOptions = {}
): unknown {
  try {
    const result = fn();
    if (result instanceof Promise) {
      return result
        .then((data) =>
          options.tuple
            ? ([data, null] as TryTuple<E, T>)
            : ({ data, error: null } as TryResult<E, T>)
        )
        .catch((error: E) =>
          options.tuple
            ? ([null, error] as TryTuple<E, T>)
            : ({ data: null, error } as TryResult<E, T>)
        )
        .finally(() => options.finally?.());
    }
    // sync
    const out = options.tuple
      ? ([result, null] as TryTuple<E, T>)
      : ({ data: result, error: null } as TryResult<E, T>);
    options.finally?.();
    return out;
  } catch (error) {
    const out = options.tuple
      ? ([null, error as E] as TryTuple<E, T>)
      : ({ data: null, error: error as E } as TryResult<E, T>);
    options.finally?.();
    return out;
  }
}
