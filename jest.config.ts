export default {
  displayName: 'test',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  resolver: '<rootDir>/config/resolver.cjs',
  setupFiles: ['<rootDir>/config/setup.cjs'],
  setupFilesAfterEnv: ['<rootDir>/config/matchers.ts'],
  transform: {
    '^.+\\.[tj]s[x]?$': [
      'ts-jest',
      {
        useESM: true,
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta',
              options: { metaObjectReplacement: { env: { PROD: false, DEV: false } } },
            },
          ],
        },
      },
    ],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|)$':
      '<rootDir>/config/file-transform.cjs',
  },
  coveragePathIgnorePatterns: [
    '/index.ts',
    '/init-redux.ts',
    '/init-env.ts',
    '/src/assets/*',
    '/src/infrastructure/builders/*',
    '/src/infrastructure/redux-helpers/*',
    '/src/infrastructure/test-helpers/*',
    '/src/infrastructure/fetch.ts',
    '/src/infrastructure/firebase.ts',
    '/node_modules',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
  },
}
