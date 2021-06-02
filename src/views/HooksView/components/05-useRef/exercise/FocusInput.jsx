import { Button } from '../../../../../components';

/**
 * Opdracht:
 * Zet programmatorisch focus op een input veld met useRef
 */

export const FocusInput = () => {
	const onFocusInput = () => {
		// Focus on the input field
	};

	return (
		<div>
			<input type="text" />
			<Button label="Focus input" onClick={onFocusInput} />
		</div>
	);
};
