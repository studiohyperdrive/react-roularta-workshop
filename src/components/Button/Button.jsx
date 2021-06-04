import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ className, label, onClick, type = 'button', variant }) => {
	const buttonClassNames = clsx(className, styles['c-button'], {
		[styles['c-button--dark']]: variant === 'dark',
		[styles['c-button--light']]: variant === 'light',
	});

	return (
		<button className={buttonClassNames} onClick={onClick} type={type}>
			{label}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	variant: PropTypes.oneOf(['dark', 'light']),
};

export default Button;
