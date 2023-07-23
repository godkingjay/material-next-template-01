import { ThemeType } from "@/mui/themes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UIStateType = {
	appTheme: ThemeType;
	customization: {};
};

const initialState: UIStateType = {
	appTheme: "light",
	customization: {},
};

const uiStateSlice = createSlice({
	name: "uiState",
	initialState,
	reducers: {
		setAppTheme: (state, action: PayloadAction<UIStateType["appTheme"]>) => {
			state.appTheme = action.payload;
		},
	},
});

export const { setAppTheme } = uiStateSlice.actions;

export default uiStateSlice.reducer;
