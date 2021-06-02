import { useState } from 'react';
import { Button } from '../../../../../components';

/**
 * Opdracht:
 * Werk de useState counter uit met useReducer
 */

export const ReducerCounter = () => {
	const [counter, setCounter] = useState(0);

	const onCounterUpdate = (countUpdate) => {
		const newCounter = counter + countUpdate;
		setCounter(newCounter < 0 ? 0 : newCounter);
	};

	return (
		<>
			<p>
				Counter: {counter}
			</p>
			<Button label="Lager" onClick={() => onCounterUpdate(-1)} />
			<Button label="Hoger" onClick={() => onCounterUpdate(1)} />
		</>
	);
};

