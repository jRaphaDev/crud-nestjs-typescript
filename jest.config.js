module.exports = {
  "collectCoverage": true,
  "roots": [ "<rootDir>/src" ],
  "coverageReporters": [ "json", "lcov", "text" ],
  "transform": { "^.+\\.tsx?$": "ts-jest" },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec|e2e-spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [ "ts", "tsx", "js", "jsx", "json", "node" ]
}