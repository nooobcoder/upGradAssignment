import { configureStore, createSlice } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

const appSlice = createSlice({
	name: "app",
	initialState: { loading: false },
	reducers: {
		setLoading: (prevState, { payload }) => {
			return {
				...prevState,
				loading: payload,
			};
		},
	},
});

const store = configureStore({
	reducer: { app: appSlice.reducer, search: searchSlice.reducer },
});

export const { setLoading } = appSlice.actions;

export default store;
