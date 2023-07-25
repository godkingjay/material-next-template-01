import { ThemeType } from "@/themes/theme";
import { BaseColorType } from "./types/base";
import { ButtonColorType } from "./types/button";

export type AppColorsType = Record<string, React.CSSProperties["color"]>;

export type AppComponentPaletteType =
	| React.CSSProperties["color"]
	| AppColorsType
	| BaseColorType
	| ButtonColorType;

export type AppPaletteType = {
	[key: string]: Record<ThemeType, AppComponentPaletteType>;
};

export type AppThemeColorPaletteType = {
	colors?: AppColorsType;
	palette?: AppPaletteType;
};
