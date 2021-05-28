import { useReducer } from 'react';
import { Button } from '../../../../components';

function reducer(state, action) {
	switch (action.type) {
	case 'INCREASE':
		return state + 1;
	case 'DECREASE':
		const newState = state - 1;
		return newState < 0 ? 0 : newState;
	default:
		return state;
	}
}

export const ReducerCounter = () => {
	const [counter, dispatch] = useReducer(reducer, 0);

	return (
		<>
			<p>
				Counter: {counter}
			</p>
			<Button label="Lager" onClick={() => dispatch({ type: 'DECREASE' })} />
			<Button label="Hoger" onClick={() => dispatch({ type: 'INCREASE' })} />
		</>
	);
};
