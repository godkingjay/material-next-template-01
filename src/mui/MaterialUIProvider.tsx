"use client";

import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useAppSelector } from "../redux/hooks";
import { setupTheme } from "./themes";

type MaterialUIProviderProps = {
	children: React.ReactNode;
};

const MaterialUIProvider: React.FC<MaterialUIProviderProps> = (props) => {
	const { appTheme } = useAppSelector((state) => state.uiState);

	return (
		<>
			<Box
				component="main"
				sx={{
					height: "100vh",
					minHeight: "100vh",
					position: "relative",
				}}
			>
				<ThemeProvider theme={setupTheme(appTheme)}>
					<CssBaseline />
					{props.children}
				</ThemeProvider>
			</Box>
		</>
	);
};

export default MaterialUIProvider;
