import { Button } from '../../../../../components';

/**
 * Opdracht:
 * Maak een counter adhv de useState hook
 * Voorzie 2 knoppen:
 *  - 1 die verlaagt tot een min. 0
 *  - 1 die kan verhogen
 */

export const Counter = () => {
	let counter = 0;

	const onCounterUpdate = (countUpdate) => {
		const newCounter = counter + countUpdate;
		console.log('Counter value:', newCounter);
		counter = newCounter;
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
