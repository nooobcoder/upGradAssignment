import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchResult: null };

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchResult: (prevState, { payload }) => {
			return {
				...prevState,
				searchResult: payload,
			};
		},
	},
});

export const { setSearchResult } = searchSlice.actions;
export default searchSlice;
