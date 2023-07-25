const setupAppThemeColorPalette = () => {
	const colorPalette = {};

	return colorPalette;
};

type ThemeColorPaletteType = ReturnType<typeof setupAppThemeColorPalette>;

const AppThemeColorPalette: ThemeColorPaletteType =
	setupAppThemeColorPalette() as unknown as ThemeColorPaletteType;

export default AppThemeColorPalette;
