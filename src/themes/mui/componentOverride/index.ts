import { ThemeOptions } from "@mui/material";
import { UIStateType } from "@/redux/reducers/uiStateReducer";

import AppThemeColorPalette from "../palette";

const componentOverride = (uiState: UIStateType): ThemeOptions["components"] => {
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
