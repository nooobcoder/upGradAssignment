import { createSlice } from "@reduxjs/toolkit";

const initialState = { meals: null };

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchResult: (prevState, { payload }) => {
			return {
				...prevState,
				meals: payload,
			};
		},
	},
});

export const { setSearchResult } = searchSlice.actions;
export default searchSlice;
