/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';

/**
 * Opdracht:
 * Fetch data met useEffect tijdens mount (lifecycle) en geef deze dataweer op de pagina
 * dmv een map
 */

// Use this function for fetching data (or use you own)
const fetchGotCharacters = async () => {
	const response = await axios.get('https://www.anapioficeandfire.com/api/characters');
	return response?.data;
};

export const DataFetch = () => {
	// state will be necessary to update our UI
	const [data, setData] = useState();

	return (
		<div>
			{/* Show data here */}
		</div>
	);
};
