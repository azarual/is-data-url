/*!
 * isDataURL v1.0.0
 * https://github.com/fengyuanchen/is-data-url
 *
 * Copyright (c) 2017 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2017-07-25T11:06:01.664Z
 */

// Spec: https://tools.ietf.org/html/rfc2397
var REGEXP_DATA_URL = /^data:(.+?\/.+?)?(;.+?=.+?)*(;base64)?,.*$/;

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
function isDataURL(value) {
  return REGEXP_DATA_URL.test(value);
}

export default isDataURL;
