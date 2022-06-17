module.exports = {
  displayName: 'test',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  resolver: '<rootDir>/config/resolver.js',
  setupFiles:[
    '<rootDir>/config/setup.js'
  ],
  transform: {
    '^.+\\.js[x]?$': 'babel-jest',
    '^.+\\.ts[x]?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|)$': 'jest-transform-stub',
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
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
}
