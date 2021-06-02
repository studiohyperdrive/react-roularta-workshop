import clsx from 'clsx';

const Container = ({ children, className }) => {
	return <div className={clsx(className, 'u-container')}>{children}</div>;
};

export default Container;
