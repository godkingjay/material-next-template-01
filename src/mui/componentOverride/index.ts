import { ThemeOptions } from "@mui/material";
import { UIStateType } from "@/redux/reducers/uiStateReducer";

const componentOverride = (
	customization: UIStateType["customization"]
): ThemeOptions["components"] => {
	return {};
};

export default componentOverride;
