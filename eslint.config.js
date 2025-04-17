import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{cjs,js,jsx,ts,tsx}'],
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
      import: importPlugin,
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
      ...jsxA11y.flatConfigs.recommended.rules,
      ...prettierConfig.rules,
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      yoda: 'error',
    },
  },
])
