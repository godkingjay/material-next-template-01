import { ThemeType } from "@/mui/themes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UIStateType = {
	appTheme: ThemeType;
};

const initialState: UIStateType = {
	appTheme: "light",
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
