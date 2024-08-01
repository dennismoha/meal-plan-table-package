import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/main.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourceMap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourceMap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.app.json' }),
      terser(),
    ],
  },

  {
    input: 'dist/esm/types/main.d.ts',
    output: [{ file: 'dist/main.d.ts', format: 'esm' }],
    plugins: [dts.default()],
  },
];
