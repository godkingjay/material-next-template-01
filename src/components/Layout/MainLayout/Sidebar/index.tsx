"use client";

import { useAppTheme } from "@/themes/mui/hooks";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { uiConfig } from "@/themes/config/uiConfig";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleSidebarOpen } from "@/redux/reducers/uiStateReducer";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = (props) => {
	const theme = useAppTheme();
	const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

	const { sidebarOpen } = useAppSelector((state) => state.uiState.navigation);

	const dispatch = useAppDispatch();

	const handleSidebarOpen = () => {
		dispatch(toggleSidebarOpen());
	};

	React.useEffect(() => {
		if (matchUpMd && !sidebarOpen) {
			handleSidebarOpen();
		}
	}, [matchUpMd]);

	return (
		<>
			<Box
				component="nav"
				sx={{
					flexShrink: { md: 0 },
					width: matchUpMd ? uiConfig.sideBar.width : "auto",
				}}
				aria-label="mailbox folders"
			>
				<Drawer
					variant={matchUpMd ? "persistent" : "temporary"}
					anchor="left"
					open={sidebarOpen}
					onClose={handleSidebarOpen}
					sx={{
						"& .MuiDrawer-paper": {
							width: uiConfig.sideBar.width,
							backgroundColor: grey["100"],
							borderRight: "none",
							borderRadius: 0,
							[theme.breakpoints.up("md")]: {
								top: uiConfig.navigationBar.height,
								zIndex: 1,
							},
						},
					}}
					ModalProps={{ keepMounted: true }}
					color="inherit"
				>
					<p>Sidebar</p>
				</Drawer>
			</Box>
		</>
	);
};

export default Sidebar;
