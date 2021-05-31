import axios from 'axios';

class GotService {
	_baseUrl = 'https://www.anapioficeandfire.com/api';

	constructor() {
		this._httpClient = axios.create({ baseURL: this._baseUrl });
	}

	getCharacters(filters) {
		return this._httpClient.get('/characters');
	}

	getCharacter(characterId) {
		return this._httpClient.get(`/characters/${characterId}`);
	}
}

export const gotService = new GotService();
