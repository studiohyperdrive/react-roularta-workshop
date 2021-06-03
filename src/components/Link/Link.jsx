import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Link.scss';

const Link = ({ children, className, href, target }) => {
	const linkProps = target === '_blank' ? {
		target,
		rel: 'noopener noreferrer',
	} : { target };

	return <a {...linkProps} className={clsx(className, 'c-link')} href={href}>{children}</a>;
};

Link.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
	target: PropTypes.string,
};

export default Link;
