module.exports = {
  testRegex: ".*(/test/.*|(\\.|/)test)\\.ts$",
  // testRegex: "(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  // testRegex: "__tests__/parseAndPrint-test.ts$",
  // "testMatch": [__dirname + "packages/*/test/*-test.js"],
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
  coveragePathIgnorePatterns: ["dist"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  preset: 'ts-jest',
//   transform999: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
};
