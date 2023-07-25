import { ThemeOptions, createTheme } from "@mui/material";
import { UIStateType } from "@/redux/reducers/uiStateReducer";
import componentOverride from "./componentOverride";
import { ThemeType } from "@/themes/theme";
import { blue, green, orange, purple, red } from "@mui/material/colors";

const defaultTheme = (uiState: UIStateType): ThemeOptions => {
	return {
		palette: {
			primary: {
				main: blue["500"],
				light: blue["300"],
				dark: blue["700"],
			},
			secondary: {
				main: purple["500"],
				light: purple["300"],
				dark: purple["700"],
			},
			success: {
				main: green["500"],
				light: green["300"],
				dark: green["700"],
				contrastText: "#fff",
			},
			warning: {
				main: orange["500"],
				light: orange["300"],
				dark: orange["700"],
				contrastText: "#fff",
			},
			error: {
				main: red["500"],
				light: red["300"],
				dark: red["700"],
			},
		},
	};
};

const lightTheme = (uiState: UIStateType): ThemeOptions => {
	return {
		...defaultTheme(uiState),
	};
};

const darkTheme = (uiState: UIStateType): ThemeOptions => {
	return {
		...defaultTheme(uiState),
	};
};

const appThemes = (uiState: UIStateType): Record<ThemeType, ThemeOptions> => {
	return {
		light: lightTheme(uiState),
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
