// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

export default {
  testEnvironment: 'jest-environment-node',
  transform: {},
  modulePathIgnorePatterns: ["<rootDir>/__tests__/checks/*","<rootDir>/__tests__/helper/*" ]
};