import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 * Opdracht:
 * Maak een custom hook waarin we onze data fetch logica kunnen zetten
 */

const fetchGotCharacters = async () => {
	const response = await axios.get('https://www.anapioficeandfire.com/api/characters');
	return response?.data;
};

export const CustomDataFetch = () => {
	const [data, setData] = useState();

	useEffect(() => {
		fetchGotCharacters().then((characters) => {
			setData(characters);
		});
	}, []);

	return (
		<div>
			{data?.length ? (
				<ul>
					{data.map((character, index) => (
						<li key={index}>{character.name || character.aliases.join(',')}</li>
					))}
				</ul>
			) : (
				<p>Geen data beschikbaar</p>
			)}
		</div>
	);
};
