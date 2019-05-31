module.exports = {
	processors: ['stylelint-processor-styled-components'],
	extends: [
		'stylelint-config-recommended',
		'stylelint-config-styled-components'
	],
	ignoreFiles: [
		'dist/**/*',
		'node_modules/**/*',
		'src/client/static/coverage/**/*',
		'src/client/static/docs/**/*'
	]
};
