import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Link } from '../Link';
import { Logo } from '../Logo';
import styles from './Navigation.module.scss';

const Navigation = ({ brand, className, items = [] }) => {
	return (
		<nav className={clsx(className, styles['c-navigation'])}>
			<div className={clsx(styles['c-navigation__brand'])}>
				<Logo />
				<span>{brand}</span>
			</div>
			<div className={clsx(styles['c-navigation__items'])}>
				{items.map(link => (
					<NavLink
						key={link.to}
						activeClassName="c-link--active"
						className="c-link"
						exact
						to={link.to}
					>
						{link.label}
					</NavLink>
				))}
				<Link href="https://reactjs.org">Learn React</Link>
			</div>
		</nav>
	);
};

export default Navigation;
