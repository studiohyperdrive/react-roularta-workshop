import { createSlice } from '@reduxjs/toolkit';
import { getCharacterById, getCharacters } from './characters.action-creators';

const charactersSlice = createSlice({
	name: 'characters',
	initialState: {
		loadingAll: false,
		loadingOne: false,
		entities: [],
		error: null,
	},
	extraReducers: {
		// Get all
		[getCharacters.pending]: (state) => {
			state.loadingAll = true;
		},
		[getCharacters.fulfilled]: (state, action) => {
			state.loadingAll = false;
			state.entities = action.payload;
		},
		[getCharacters.rejected]: (state, action) => {
			state.loadingAll = false;
			state.error = action.payload;
		},
		// Get one
		[getCharacterById.pending]: (state) => {
			state.loadingOne = true;
		},
		[getCharacterById.fulfilled]: (state, action) => {
			state.loadingOne = false;
			state.entities.push(action.payload);
		},
		[getCharacterById.rejected]: (state, action) => {
			state.loadingOne = false;
			state.error = action.payload;
		},
	},
});

export default charactersSlice.reducer;
