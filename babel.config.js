module.exports = {
	env: {
		test: {
			presets: [[
				'next/babel', {
					'preset-env': {
						modules: 'commonjs'
					}
				}],
				'@zeit/next-typescript/babel'
			],
			plugins: [['styled-components'], [
				'module-resolver', {
					alias: {
						assets: './src/client/assets',
						common: './src/client/common',
						blocks: './src/client/components/blocks',
						elements: './src/client/components/elements'
					}
				}
			]]
		}
	}
};
