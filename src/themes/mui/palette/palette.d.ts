import { ThemeType } from "@/themes/theme";
import { BaseColorType } from "./types/base";
import { ButtonColorType } from "./types/button";

export type AppColorsType = Record<string, React.CSSProperties["color"]>;

export type AppThemeColorPaletteType = {
	colors: AppColorsType;
	palette: {
		MuiListItemButton: {
			root: ButtonColorType;
			light: ButtonColorType;
			dark: ButtonColorType;
		};
	};
};
