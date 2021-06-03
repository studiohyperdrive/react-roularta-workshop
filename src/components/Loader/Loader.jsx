import PropTypes from 'prop-types';

const Loader = (isLoading) => {
	return isLoading ? <p>Loading...</p> : null;
};

Loader.propTypes = {
	isLoading: PropTypes.bool.isRequired,
};

export default Loader;
