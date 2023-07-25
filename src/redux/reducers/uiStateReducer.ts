import { ThemeType } from "@/themes/theme";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UIStateType = {
	appTheme: ThemeType;
	navigation: {
		sidebarOpen: boolean;
	};
	customization: {
		borderRadius: number;
	};
};

const initialState: UIStateType = {
	appTheme: "light",
	navigation: {
		sidebarOpen: false,
	},
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
		setSidebarOpen: (
			state,
			action: PayloadAction<UIStateType["navigation"]["sidebarOpen"]>
		) => {
			state.navigation.sidebarOpen = action.payload;
		},
		toggleSidebarOpen: (state) => {
			state.navigation.sidebarOpen = !state.navigation.sidebarOpen;
		},
	},
});

export const {
	setAppTheme,
	setBorderRadius,
	setSidebarOpen,
	toggleSidebarOpen,
} = uiStateSlice.actions;

export default uiStateSlice.reducer;
