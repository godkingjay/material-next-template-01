"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAppSelector } from "../redux/hooks";
import { AppThemes } from "./themes";

type MaterialUIProviderProps = {
	children: React.ReactNode;
};

const MaterialUIProvider: React.FC<MaterialUIProviderProps> = (props) => {
	const { appTheme } = useAppSelector((state) => state.uiState);

	return (
		<>
			<main
				style={{
					height: "100vh",
					minHeight: "100vh",
					position: "relative",
				}}
			>
				<ThemeProvider theme={AppThemes[appTheme]}>
					<CssBaseline />
					{props.children}
				</ThemeProvider>
			</main>
		</>
	);
};

export default MaterialUIProvider;
