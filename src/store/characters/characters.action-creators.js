import { createAsyncThunk } from '@reduxjs/toolkit';
import { gotService } from '../../services/got';

const addIdProp = (c) => ({ ...c, id: c.url.split('/').pop() });

export const getCharacters = createAsyncThunk(
	'characters/getAll',
	async (payload, { rejectWithValue }) => {
		try {
			const response = await gotService.getCharacters();
			return response.data.map(addIdProp);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const getCharacterById = createAsyncThunk(
	'characters/getById',
	async (characterId, { rejectWithValue }) => {
		try {
			const response = await gotService.getCharacter(characterId);
			return addIdProp(response.data);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
