/*!
 * isDataURL v1.0.1
 * https://github.com/fengyuanchen/is-data-url
 *
 * Copyright 2017-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-05-20T07:40:23.870Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.isDataURL = factory());
}(this, (function () { 'use strict';

  // Spec: https://tools.ietf.org/html/rfc2397
  var REGEXP_DATA_URL = /^data:(?:.+?\/.+?)?(?:;.+?=.+?)*(?:;base64)?,.*$/;

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

  return isDataURL;

})));
