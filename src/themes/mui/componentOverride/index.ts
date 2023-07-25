import { ThemeOptions } from "@mui/material";
import { UIStateType } from "@/redux/reducers/uiStateReducer";

import appThemeColorPalette from "../palette";

const componentOverride = (uiState: UIStateType): ThemeOptions["components"] => {
	const { appTheme } = uiState;

	return {
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 500,
					boxShadow: "none",
					borderRadius: uiState.customization.borderRadius + "px",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: uiState.customization.borderRadius + "px",
					overflow: "hidden",
				},
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					borderRadius: uiState.customization.borderRadius + "px",
					fontSize: "18px",
					paddingBlock: "8px",
					paddingInline: "20px",
					color: appThemeColorPalette.palette.MuiListItemButton[appTheme].color,

					"&:focus": {
						backgroundColor:
							appThemeColorPalette.palette.MuiListItemButton["root"].focus
								?.backgroundColor,
						color:
							appThemeColorPalette.palette.MuiListItemButton["root"].focus
								?.color,
					},

					"&:hover": {
						backgroundColor:
							appThemeColorPalette.palette.MuiListItemButton["root"].hover
								?.backgroundColor,
						color:
							appThemeColorPalette.palette.MuiListItemButton["root"].hover
								?.color,
					},

					"& .Mui-selected": {
						backgroundColor:
							appThemeColorPalette.palette.MuiListItemButton["root"].active
								?.backgroundColor,
						color:
							appThemeColorPalette.palette.MuiListItemButton["root"].active
								?.color,
					},

					"& .MuiListItemIcon-root": {
						minWidth: "40px",
						color: "inherit",
					},

					"& .MuiTypography-root": {
						fontSize: "0.875rem",
						color: "inherit",
					},
				},
			},
		},
	};
};

export default componentOverride;
