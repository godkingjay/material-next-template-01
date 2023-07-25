import { blue, grey } from "@mui/material/colors";
import { AppThemeColorPaletteType } from "./palette";
import { alpha } from "@mui/material";

export const commonColors = {
	text: {
		light: grey["900"],
		dark: grey["500"],
	},
};

const setupAppThemeColorPalette = (): AppThemeColorPaletteType => {
	return {
		colors: {},
		palette: {
			MuiListItemButton: {
				root: {
					color: commonColors.text.light,

					active: {
						backgroundColor: alpha(blue["500"], 0.2),
						color: blue["500"],
					},

					focus: {
						backgroundColor: alpha(blue["500"], 0.2),
						color: blue["500"],
					},

					hover: {
						backgroundColor: alpha(blue["500"], 0.2),
						color: blue["500"],
					},
				},
				light: {
					color: commonColors.text.light,
				},
				dark: {
					color: commonColors.text.dark,
				},
			},
		},
	};
};

type ThemeColorPaletteType = ReturnType<typeof setupAppThemeColorPalette>;

const appThemeColorPalette: ThemeColorPaletteType =
	setupAppThemeColorPalette() as unknown as ThemeColorPaletteType;

export default appThemeColorPalette;
