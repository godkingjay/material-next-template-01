import { uiConfig } from "@/themes/config/uiConfig";
import { Theme, styled } from "@mui/material";

type PageViewRootProps = {
	theme: Theme;
	open: boolean;
};

const PageViewRoot = styled("main", {
	shouldForwardProp: (prop) => prop !== "open",
})<PageViewRootProps>(({ theme, open }) => ({
	borderBottomLeftRadius: 0,
	borderBottomRightRadius: 0,
	width: "100%",
	transition: theme.transitions.create(
		"margin",
		open
			? {
					easing: theme.transitions.easing.easeOut,
					duration: theme.transitions.duration.enteringScreen,
			  }
			: {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
			  }
	),
	[theme.breakpoints.up("md")]: {
		marginLeft: open ? 0 : -uiConfig.sideBar.width,
	},
}));

export default PageViewRoot;
