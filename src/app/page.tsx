import { Box, Button, Paper } from "@mui/material";
import React from "react";

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
			</Box>
		</>
	);
}
