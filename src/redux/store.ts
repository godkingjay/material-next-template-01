import { configureStore } from "@reduxjs/toolkit";
import uiStateReducer from "./reducers/uiStateReducer";

const store = configureStore({
	reducer: {
		uiState: uiStateReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
