import { ThemeOptions } from "@mui/material";

export type ThemeType = "light" | "dark";

const lightTheme: ThemeOptions = {};

const darkTheme: ThemeOptions = {};

const AppThemes: Record<ThemeType, ThemeOptions> = {
	light: lightTheme,
	dark: darkTheme,
};

export { AppThemes };
