import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: { file: 'dist/index.js', format: 'cjs' },
  plugins: [
    copy({
      targets: [{ src: 'src/index.d.ts', dest: 'dist' }],
    }),
  ],
};
