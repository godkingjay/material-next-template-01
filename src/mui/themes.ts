import { ThemeOptions, createTheme } from "@mui/material";
import ComponentOverride from "./componentOverride";

export type ThemeType = "light" | "dark";

const lightTheme: ThemeOptions = {};

const darkTheme: ThemeOptions = {};

const AppThemes: Record<ThemeType, ThemeOptions> = {
	light: lightTheme,
	dark: darkTheme,
};

const setupTheme = (type: ThemeType) => {
	const theme = createTheme({
		...AppThemes[type],
		components: ComponentOverride,
	});

	return theme;
};

export { AppThemes, setupTheme };
