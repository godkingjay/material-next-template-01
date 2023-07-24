import { ThemeType } from "../themes";

type AppColorsType = Record<string, string>;
type AppPaletteType = {
	[key: string]: Record<ThemeType, string>;
};

type AppThemeColorPaletteType = {
	colors?: AppColorsType;
	palette?: AppPaletteType;
};

const AppThemeColorPalette: AppThemeColorPaletteType = {};

export default AppThemeColorPalette;
