import { Link as RouterLink } from 'react-router-dom';
import { Button, Container } from '../../components';

const ListView = () => {
	return (
		<Container>
			<h1>Welcome to our List page</h1>
			<ul>
				<li><RouterLink to="/list/1">List item: 1</RouterLink></li>
				<li><RouterLink to="/list/2">List item: 2</RouterLink></li>
				<li><RouterLink to="/list/3">List item: 3</RouterLink></li>
			</ul>
			<RouterLink to="/">
				<Button label="Go back home" />
			</RouterLink>
		</Container>
	);
};

export default ListView;
