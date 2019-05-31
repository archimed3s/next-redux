const moduleResolver = [
	'module-resolver', {
		alias: {
			assets: './src/client/assets',
			common: './src/client/common',
			blocks: './src/client/components/blocks',
			elements: './src/client/components/elements'
		}
	}
];

module.exports = {
	env: {
		production: {
			presets: [
				'next/babel',
				'@zeit/next-typescript/babel'
			],
			plugins: [[
				'styled-components', {
					displayName: false,
					pure: true
				}],
				moduleResolver
			]
		},
		development: {
			presets: [
				'next/babel',
				'@zeit/next-typescript/babel'
			],
			plugins: [[
				'styled-components', {
					minify: false
				}],
				moduleResolver
			]
		}
	}
};
