import { ThemeOptions, createTheme } from "@mui/material";
import { UIStateType } from "@/redux/reducers/uiStateReducer";
import componentOverride from "./componentOverride";
import { ThemeType } from "@/themes/theme";

const defaultTheme = (uiState: UIStateType): ThemeOptions => {
	return {};
};

const darkTheme = (uiState: UIStateType): ThemeOptions => {
	return {};
};

const appThemes = (uiState: UIStateType): Record<ThemeType, ThemeOptions> => {
	return {
		light: defaultTheme(uiState),
		dark: darkTheme(uiState),
	};
};

const setupTheme = (uiState: UIStateType) => {
	const theme = createTheme({
		...appThemes(uiState)[uiState.appTheme],
		components: componentOverride(uiState),
	});

	return theme;
};

export { appThemes, setupTheme };
