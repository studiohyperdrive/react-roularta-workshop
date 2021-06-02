import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Header } from '../../components';
import { counterSelector, decrement, increment, reset } from '../../store/counter';

const HomeView = () => {
	const counter = useSelector(counterSelector);
	const dispatch = useDispatch();

	return (
		<>
			<Header title={<p>Edit <code>src/App.js</code> and save to reload.</p>} />
			<Container>
				<h1>Welcome to our Home page</h1>
				<p>Store counter: {counter}</p>
				<div>
					<Button label="Verlaag" onClick={() => dispatch(decrement())} />
					<Button label="Verhoog" onClick={() => dispatch(increment())} />
					<Button label="Reset" onClick={() => dispatch(reset())} />
				</div>
			</Container>
		</>
	);
};

export default HomeView;
