/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.ts"],
	coveragePathIgnorePatterns: [
		"node_modules",
		"test-config",
		"interfaces",
		"jestGlobalMocks.ts",
		".module.ts",
		"<rootDir>/src/app/main.ts",
		".mock.ts",
	],
};
