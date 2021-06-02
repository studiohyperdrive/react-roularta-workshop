import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './characters';
import { counterReducer } from './counter';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		characters: charactersReducer,
	},
});
