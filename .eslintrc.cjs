module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'import',
    'prettier',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'eol-last': 1,
    'linebreak-style': [2, 'unix'],
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'object-curly-spacing': [1, 'always'],
    'no-duplicate-imports': 1,
  },
}
