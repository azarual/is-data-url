const babel = require('rollup-plugin-babel');
const pkg = require('./package');

const now = new Date();

export default {
  entry: 'src/index.js',
  targets: [
    {
      dest: 'dist/is-data-url.js',
    },
    {
      dest: 'dist/is-data-url.common.js',
      format: 'cjs',
    },
    {
      dest: 'dist/is-data-url.esm.js',
      format: 'es',
    },
  ],
  format: 'umd',
  moduleName: 'isDataURL',
  plugins: [
    babel({
      exclude: '/node_modules/**',
    }),
  ],
  banner: `/*!
 * isDataURL v${pkg.version}
 * https://github.com/fengyuanchen/${pkg.name}
 *
 * Copyright (c) ${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`,
};
