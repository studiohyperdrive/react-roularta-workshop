import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, Container, Loader } from '../../components';
import { ROUTE_PATHS } from '../../router';
import {
	characterByIdSelector,
	charactersErrorSelector,
	characterLoadingSelector,
	getCharacterById,
} from '../../store/characters';
import styles from './DetailView.module.scss';

const DetailView = ({ history, match }) => {
	const { detailId } = match.params;

	const character = useSelector((state) => characterByIdSelector(state, detailId));
	const isLoading = useSelector(characterLoadingSelector);
	const error = useSelector(charactersErrorSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!character) {
			dispatch(getCharacterById(detailId));
		}
	}, [character, detailId, dispatch]); // We want to run this effect when detailId gets updated

	// When no id is present, redirect to ListView
	if (!detailId) {
		return <Redirect to={ROUTE_PATHS.list.overview} />;
	}

	// The two render functions below could also be separate components
	// but for easy access we added them here.
	const renderError = () => {
		return (
			<>
				<p>Something went wrong</p>
				<Button
					label="Go back to overview"
					onClick={() => history.push(ROUTE_PATHS.list.overview)}
				/>
			</>
		);
	};

	// Loop over all character properties and show them in a definition list
	const renderCharacterData = () => {
		if (!character) {
			return <p>No character data found</p>;
		}

		return (
			<dl>
				{Object.keys(character).map((key) => (
					<Fragment key={key}>
						<dt>{key}:</dt>
						<dd>{character[key] ? JSON.stringify(character[key], null, 2) : 'N/A'}</dd>
					</Fragment>
				))}
			</dl>
		);
	};

	return (
		<Container className={styles['v-detail']}>
			<h1>Welcome to our Detail page</h1>
			<p>
				The current list id is {detailId}
			</p>
			{isLoading
				? <Loader isLoading={isLoading} />
				: error
					? renderError()
					: renderCharacterData()}
		</Container>
	);
};

export default DetailView;
