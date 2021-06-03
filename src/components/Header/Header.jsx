import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Container } from '../Container';
import styles from './Header.module.scss';

const Header = ({ className, title }) => {
	return (
		<header className={clsx(className, styles['c-header'])}>
			<Container className="u-text-center">
				<h1 className={clsx(styles['c-header__title'])}>
					{title}
				</h1>
			</Container>
		</header>
	);
};

Header.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
};

export default Header;
