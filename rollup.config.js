const babel = require('rollup-plugin-babel');
const createBanner = require('create-banner');
const pkg = require('./package');

const name = 'isDataURL';

export default {
  input: 'src/index.js',
  output: [
    {
      name,
      banner: createBanner({
        data: {
          name,
          year: '2017-present',
        },
      }),
      file: `dist/${pkg.name}.js`,
      format: 'umd',
    },
    {
      name,
      banner: createBanner({
        data: {
          name,
          year: '2017-present',
        },
        template: 'inline',
      }),
      file: `dist/${pkg.name}.min.js`,
      format: 'umd',
    },
    {
      file: `dist/${pkg.name}.common.js`,
      format: 'cjs',
    },
    {
      file: `dist/${pkg.name}.esm.js`,
      format: 'esm',
    },
  ],
  plugins: [
    babel(),
  ],
};
