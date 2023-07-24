import { ThemeOptions, createTheme } from "@mui/material";
import { UIStateType } from "@/redux/reducers/uiStateReducer";
import componentOverride from "./componentOverride";

export type ThemeType = "light" | "dark";

const defaultTheme: ThemeOptions = {};

const darkTheme: ThemeOptions = {};

const AppThemes: Record<ThemeType, ThemeOptions> = {
	light: defaultTheme,
	dark: darkTheme,
};

const setupTheme = (uiState: UIStateType) => {
	const theme = createTheme({
		...AppThemes[uiState.appTheme],
		components: componentOverride(uiState.customization),
	});

	return theme;
};

export { AppThemes, setupTheme };
