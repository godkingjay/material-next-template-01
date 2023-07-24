import { ThemeOptions } from "@mui/material";
import { UIStateType } from "@/redux/reducers/uiStateReducer";

const componentOverride = (
	customization: UIStateType["customization"]
): ThemeOptions["components"] => {
	return {
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 500,
					boxShadow: "none",
					borderRadius: customization.borderRadius + "px",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: customization.borderRadius + "px",
				},
			},
		},
	};
};

export default componentOverride;
