import clsx from 'clsx';
import { Link } from '../Link';
import { Logo } from '../Logo';
import styles from './Navigation.module.scss';

const Navigation = ({ brand, className }) => {
	return (
		<nav className={clsx(className, styles['c-navigation'])}>
			<div className={clsx(styles['c-navigation__brand'])}>
				<Logo />
				<span>{brand}</span>
			</div>
			<div className={clsx(styles['c-navigation__items'])}>
				<Link href="https://reactjs.org">Learn React</Link>
			</div>
		</nav>
	);
};

export default Navigation;
