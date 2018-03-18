# is-data-url

[![Build Status](https://travis-ci.org/fengyuanchen/is-data-url.svg)](https://travis-ci.org/fengyuanchen/is-data-url) [![Downloads](https://img.shields.io/npm/dm/is-data-url.svg)](https://www.npmjs.com/package/is-data-url) [![Version](https://img.shields.io/npm/v/is-data-url.svg)](https://www.npmjs.com/package/is-data-url)

> Check if the given value is a [Data URL](https://tools.ietf.org/html/rfc2397).

## Main

```txt
dist/
├── is-data-url.js        (UMD)
├── is-data-url.min.js    (UMD, compressed)
├── is-data-url.common.js (CommonJS, default)
└── is-data-url.esm.js    (ES Module)
```

## Install

```sh
npm install --save is-data-url
```

## Usage

```js
import isDataURL from 'is-data-url';

isDataURL('data:text/plain;base64,SGVsbG8sIFdvcmxkIQo=');
// => true

isDataURL('data:foo');
// => false
```

## License

[MIT](http://opensource.org/licenses/MIT) © [Chen Fengyuan](http://chenfengyuan.com)
