import { ThemeType } from "@/mui/themes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UIStateType = {
	appTheme: ThemeType;
	customization: {
		borderRadius: number;
	};
};

const initialState: UIStateType = {
	appTheme: "light",
	customization: {
		borderRadius: 8,
	},
};

const uiStateSlice = createSlice({
	name: "uiState",
	initialState,
	reducers: {
		setAppTheme: (state, action: PayloadAction<UIStateType["appTheme"]>) => {
			state.appTheme = action.payload;
		},
		setBorderRadius: (
			state,
			action: PayloadAction<UIStateType["customization"]["borderRadius"]>
		) => {
			state.customization.borderRadius = action.payload;
		},
	},
});

export const { setAppTheme, setBorderRadius } = uiStateSlice.actions;

export default uiStateSlice.reducer;
