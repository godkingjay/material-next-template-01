import { ThemeOptions } from "@mui/material";
import { UIStateType } from "@/redux/reducers/uiStateReducer";

import appThemeColorPalette from "../palette";
import { grey, red } from "@mui/material/colors";

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
		MuiInputBase: {
			styleOverrides: {
				input: {
					color: grey["800"],

					"&::placeholder": {
						fontSize: "0.875rem",
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					fontWeight: 500,
					padding: "15.5px 14px",
					borderRadius: uiState.customization.borderRadius + "px",
					"&.MuiInputBase-inputSizeSmall": {
						padding: "10px 14px",
						"&.MuiInputBase-inputAdornedStart": {
							paddingLeft: 0,
						},
					},
				},
				inputAdornedStart: {
					paddingLeft: 4,
				},
				multiline: {
					padding: 1,
				},
				notchedOutline: {
					borderRadius: uiState.customization.borderRadius + "px",
				},
			},
		},
	};
};

export default componentOverride;
