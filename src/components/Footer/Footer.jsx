import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Container } from '../Container';
import styles from './Footer.module.scss';

const Footer = ({ children, className }) => {
	return (
		<footer className={clsx(className, styles['c-footer'])}>
			<Container>
				{children}
			</Container>
		</footer>
	);
};

Footer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Footer;
