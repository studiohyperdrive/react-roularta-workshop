import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ className, label, onClick, type = 'button' }) => {
	return (
		<button className={clsx(className, styles['c-button'])} onClick={onClick} type={type}>
			{label}
		</button>
	);
};

export default Button;
