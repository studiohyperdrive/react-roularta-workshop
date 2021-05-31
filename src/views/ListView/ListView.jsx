import { useEffect, useState } from 'react';
import { generatePath, Link as RouterLink } from 'react-router-dom';
import { Button, Container, Loader } from '../../components';
import { ROUTE_PATHS } from '../../router';
import { gotService } from '../../services/got';

const ListView = () => {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		gotService.getCharacters()
			.then((response) => {
				if (response?.data?.length) {
					setCharacters(response.data);
				}
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<Container>
			<h1>Welcome to our List page</h1>
			{isLoading ? <Loader isLoading={isLoading} /> : (
				<ul>
					{characters.map((character) => {
						// Get detail id based on url property,
						// normally an id would be present as a separate property
						const detailId = character.url.split('/').pop();
						// generatePath will fill in our dynamic route params based on the given
						// values in the second argument. The property name must match the param.
						const detailPath = generatePath(ROUTE_PATHS.list.detail, { detailId });

						return (
							<li key={character.url}>
								<RouterLink to={detailPath}>
									{character.name || character.aliases[0]}
								</RouterLink>
							</li>
						);
					})}
				</ul>
			)}
			<RouterLink to={ROUTE_PATHS.home}>
				<Button label="Go back home" />
			</RouterLink>
		</Container>
	);
};

export default ListView;
