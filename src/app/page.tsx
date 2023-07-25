import {
	Box,
	Button,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Paper,
} from "@mui/material";
import { GoHome } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import React from "react";
import { grey } from "@mui/material/colors";

export default function Home() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
					p: 4,
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<Button variant="contained">Button</Button>
					<Button variant="outlined">Button</Button>
					<Button variant="text">Button</Button>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<Paper variant="elevation">
						<Box
							sx={{
								p: 8,
							}}
						></Box>
					</Paper>
					<Paper variant="outlined">
						<Box
							sx={{
								p: 8,
							}}
						></Box>
					</Paper>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<Paper>
						<List
							sx={{
								px: 1,
							}}
						>
							<ListItemButton>
								<ListItemIcon>
									<GoHome />
								</ListItemIcon>
								<ListItemText>Item Button 1</ListItemText>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<HiOutlineUser />
								</ListItemIcon>
								<ListItemText>Item Button 2</ListItemText>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<IoSettingsOutline />
								</ListItemIcon>
								<ListItemText>Item Button 3</ListItemText>
							</ListItemButton>
						</List>
					</Paper>
					<Paper
						sx={{
							overflow: "hidden",
						}}
					>
						<List
							sx={{
								px: 1,
								backgroundColor: grey["900"],
							}}
						>
							<ListItemButton>
								<ListItemIcon>
									<GoHome />
								</ListItemIcon>
								<ListItemText>Item Button 1</ListItemText>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<HiOutlineUser />
								</ListItemIcon>
								<ListItemText>Item Button 2</ListItemText>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<IoSettingsOutline />
								</ListItemIcon>
								<ListItemText>Item Button 3</ListItemText>
							</ListItemButton>
						</List>
					</Paper>
				</Box>
			</Box>
		</>
	);
}
