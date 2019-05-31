const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	testRegex: TEST_REGEX,
	transform: {
		'^.+\\.tsx?$': 'babel-jest'
	},
	testPathIgnorePatterns: [
		'<rootDir>/dist/',
		'<rootDir>/node_modules/',
		'<rootDir>/src/client/static/coverage/',
		'<rootDir>/src/client/static/docs/'
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	collectCoverage: true,
	coverageDirectory: 'src/client/static/coverage'
};
