import clsx from 'clsx';
import './Link.scss';

const Link = ({ children, className, href, target }) => {
	const externalLinkProps = target === '_blank' ? {
		target: '_blank',
		rel: 'noopener noreferrer',
	} : {};

	return <a {...externalLinkProps} className={clsx(className, 'c-link')} href={href}>{children}</a>;
};

export default Link;
