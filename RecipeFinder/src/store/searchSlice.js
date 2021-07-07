import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchResult: null };

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: { setSearchResult: async (prevState, action) => {} },
});

export const { setSearchResult } = searchSlice.actions;
export default searchSlice;
