import clsx from 'clsx';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
	return <div className={clsx(className, 'u-container')}>{children}</div>;
};

Container.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Container;
