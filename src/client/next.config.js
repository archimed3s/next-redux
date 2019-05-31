const withTypescript = require('@zeit/next-typescript');
const withFonts = require('next-fonts');
const optimizedImages = require('next-optimized-images');

module.exports = withTypescript(withFonts(optimizedImages({
	distDir: '../../dist',
	webpack(config, {}) {
		config.module.rules.push({
			test: /\.[jt]sx?$/,
			use: [{
				loader: 'stylelint-custom-processor-loader',
				options: {
					isServer: false
				}
			}, {
				loader: 'tslint-loader',
				options: {
					isServer: false
				}
			}],
			exclude: /node_modules/
		});
		return config;
	}
})));
