import { useRef } from 'react';
import { Button } from '../../../../components';

export const FocusInput = () => {
	const inputRef = useRef();

	const onFocusInput = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input ref={inputRef} type="text" />
			<Button label="Focus input" onClick={onFocusInput} />
		</div>
	);
};
