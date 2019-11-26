module.exports = {
  projects: [
    {
      displayName: 'test',
      roots: ['<rootDir>/src'],
      transform: {
        '^.+\\.js[x]?$': 'babel-jest',
        '^.+\\.ts[x]?$': 'ts-jest',
      },
      coveragePathIgnorePatterns: [
        '/index.ts',
        '/init-redux.ts',
        '/init-env.ts',
        '/init-ga.ts',
      ],
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|)$': '<rootDir>/config/file-mock.js',
        '\\.(css|scss)$': 'identity-obj-proxy',
      },
      setupFilesAfterEnv: [
        '@testing-library/react/cleanup-after-each',
        '<rootDir>/config.test/setup.js'
      ]
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'lint',
      testMatch: [
        '<rootDir>/src/**/*.test.ts',
        '<rootDir>/src/**/*.test.tsx',
      ],
    },
  ]
}
