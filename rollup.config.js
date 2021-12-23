import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const env = process.env.NODE_ENV;

function createBuild(fileName) {
  const config = {
    input: `src/${fileName}.js`,
    plugins: [
      babel({
        exclude: 'node_modules/**',
        externalHelpers: true,
      }),
      nodeResolve({
        preferBuiltins: true,
      }),
      commonjs(),
      terser(),
    ],
    output: {
      format: env,
      dir: env,
      exports: 'auto',
    },
  };

  return config;
}

export default [createBuild('index')];
