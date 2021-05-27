import clsx from 'clsx';
import logo from '../../assets/img/logo.svg';
import styles from './Logo.module.scss';

const Logo = ({ className }) => {
	return <img className={clsx(className, styles['c-logo'])} alt="logo" src={logo} />;
};

export default Logo;
