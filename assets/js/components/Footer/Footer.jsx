import clsx from 'clsx';
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

export default Footer;
