// Spec: https://tools.ietf.org/html/rfc2397
const REGEXP_DATA_URL = /^data:(.+?\/.+?)?(;.+?=.+?)*(;base64)?,.*$/;

/**
 * Check if the given value is a Data URL.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given is a Data URL, else `false`.
 * @example
 * isDataURL('data:text/plain;base64,SGVsbG8sIFdvcmxkIQo=')
 * // => true
 * @example
 * isDataURL('data:foo')
 * // => false
 */
export default function isDataURL(value) {
  return REGEXP_DATA_URL.test(value);
}
