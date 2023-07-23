import { ThemeOptions } from "@mui/material";
import { UIStateType } from "@/redux/reducers/uiStateReducer";
import { red } from "@mui/material/colors";

const componentOverride = (
	customization: UIStateType["customization"]
): ThemeOptions["components"] => {
	return {};
};

export default componentOverride;
