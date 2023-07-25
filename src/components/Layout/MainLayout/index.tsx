import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import NavigationBar from "./NavigationBar";
import PageView from "./PageView";

type MainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = (props) => {
	const { children } = props;

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					flex: 1,
					height: "100vh",
					minHeight: "100vh",
					position: "relative",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<NavigationBar />

					<Box display="flex">
						<Sidebar />

						<PageView>{children}</PageView>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default MainLayout;
