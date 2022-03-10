module.exports = {
  displayName: 'test',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js[x]?$': 'babel-jest',
    '^.+\\.ts[x]?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    '/index.ts',
    '/init-redux.ts',
    '/init-env.ts',
    '/test-mock-fetch.ts',
    '/test-renderer.ts',
    '/test-run-saga.ts',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|)$': '<rootDir>/config/file-mock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
}
