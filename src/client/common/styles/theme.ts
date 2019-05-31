const theme = {
	main: {},
	secondary: {}
};

function checkForDuplicatesInColorsObject(obj: object, key: string) {
	if (Object.prototype.hasOwnProperty.call(obj, key)) {
		throw new Error(`Theme Color Property ${key} is already exist!`);
	}
}

export function setColors(mainThemeColors: object, secondatyThemeColors: object) {
	Object.keys(mainThemeColors).forEach((key) => {
		checkForDuplicatesInColorsObject(theme.main, key);
	});

	theme.main = {
		...theme.main,
		...mainThemeColors
	};

	theme.secondary = {
		...theme.secondary,
		...secondatyThemeColors
	};
}

export default theme;
