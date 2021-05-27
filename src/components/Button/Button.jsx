import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ className, label, type = 'button' }) => {
	return (
		<button className={clsx(className, styles['c-button'])} type={type}>
			{label}
		</button>
	);
};

export default Button;
