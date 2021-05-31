import { Redirect } from 'react-router';
import { Container } from '../../components';
import { ROUTE_PATHS } from '../../router';

const DetailView = ({ match }) => {
	const { detailId } = match.params;

	// When no id is present, return to ListView
	if (!detailId) {
		return <Redirect to={ROUTE_PATHS.list.overview} />;
	}

	return (
		<Container>
			<h1>Welcome to our Detail page</h1>
			<p>
				The current list id is {detailId}
			</p>
		</Container>
	);
};

export default DetailView;
