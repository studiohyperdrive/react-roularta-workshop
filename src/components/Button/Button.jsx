import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ className, label, onClick, type = 'button' }) => {
	return (
		<button className={clsx(className, styles['c-button'])} onClick={onClick} type={type}>
			{label}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
