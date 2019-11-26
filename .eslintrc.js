module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    '@typescript-eslint/array-type': ['error', 'array'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': [2, { 'extensions': ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': ['never', { 'allow': 'literal' }],
    'semi': ['error', 'never'],
  },
  env: { browser: true, jest: true },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
