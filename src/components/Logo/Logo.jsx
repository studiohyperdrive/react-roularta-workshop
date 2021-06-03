import clsx from 'clsx';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.svg';
import styles from './Logo.module.scss';

const Logo = ({ className }) => {
	return <img className={clsx(className, styles['c-logo'])} alt="logo" src={logo} />;
};

Logo.propTypes = {
	className: PropTypes.string,
};

export default Logo;
