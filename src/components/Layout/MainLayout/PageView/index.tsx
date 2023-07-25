"use client";

import React from "react";
import PageViewRoot from "./PageViewRoot";
import { useAppTheme } from "@/themes/mui/hooks";
import { useAppSelector } from "@/redux/hooks";

type PageViewProps = {
	children: React.ReactNode;
};

const PageView: React.FC<PageViewProps> = (props) => {
	const { children } = props;

	const theme = useAppTheme();

	const { sidebarOpen } = useAppSelector((state) => state.uiState.navigation);

	return (
		<>
			<PageViewRoot
				theme={theme}
				open={sidebarOpen}
			>
				{children}
			</PageViewRoot>
		</>
	);
};

export default PageView;
