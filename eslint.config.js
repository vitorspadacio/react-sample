import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tsParser from '@typescript-eslint/parser'
import tseslint from '@typescript-eslint/eslint-plugin'
import { defineConfig } from 'eslint/config'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
      prettier: prettierPlugin,
      react: react,
    },
    rules: {
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': ['error'],
      'block-scoped-var': 'error',
      'default-case': ['error', { commentPattern: '^no default$' }],
      'default-case-last': 'error',
      'import/first': 'error',
      'import/named': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-as-default': 'error',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'no-alert': 'warn',
      'no-param-reassign': ['error'],
      'no-redeclare': 'error',
      'no-return-await': 'error',
      'no-throw-literal': 'error',
      'no-useless-catch': 'error',
      'prettier/prettier': ['error'],
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
      'react/react-in-jsx-scope': 'off',
      'sort-imports': ['error'],
      ...jsxA11y.flatConfigs.recommended.rules,
      ...prettierConfig.rules,
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      yoda: 'error',
    },
  },
])
