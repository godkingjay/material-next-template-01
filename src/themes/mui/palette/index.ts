import { blue, grey } from "@mui/material/colors";
import { AppThemeColorPaletteType } from "./palette";
import { alpha } from "@mui/material";

const setupAppThemeColorPalette = (): AppThemeColorPaletteType => {
	return {
		colors: {},
		palette: {
			MuiListItemButton: {
				root: {
					color: grey["900"],

					active: {
						backgroundColor: alpha(blue["100"], 0.4),
						color: blue["700"],
					},

					focus: {
						backgroundColor: alpha(blue["100"], 0.4),
						color: blue["700"],
					},

					hover: {
						backgroundColor: alpha(blue["100"], 0.4),
						color: blue["700"],
					},
				},
			},
		},
	};
};

type ThemeColorPaletteType = ReturnType<typeof setupAppThemeColorPalette>;

const appThemeColorPalette: ThemeColorPaletteType =
	setupAppThemeColorPalette() as unknown as ThemeColorPaletteType;

export default appThemeColorPalette;
