"use client";

import { useAppDispatch } from "@/redux/hooks";
import { toggleSidebarOpen } from "@/redux/reducers/uiStateReducer";
import { uiConfig } from "@/themes/config/uiConfig";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

type NavigationBarProps = {};

const NavigationBar: React.FC<NavigationBarProps> = (props) => {
	const dispatch = useAppDispatch();

	const handleSidebarOpen = () => {
		dispatch(toggleSidebarOpen());
	};

	return (
		<>
			<AppBar
				position="sticky"
				sx={{
					top: 0,
					height: uiConfig.navigationBar.height,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<Toolbar sx={{ flex: 1 }}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={handleSidebarOpen}
					>
						<AiOutlineMenu size={20} />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Header
					</Typography>
					<Button color="inherit">Button</Button>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default NavigationBar;
