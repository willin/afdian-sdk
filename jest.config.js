const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  preset: 'ts-jest',
  verbose: true,
  coverageReporters: ['text', 'lcov', 'html'],
  testMatch: ['**/test/**/*.(spec|test).[jt]s?(x)'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  testTimeout: 6e4,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
};
