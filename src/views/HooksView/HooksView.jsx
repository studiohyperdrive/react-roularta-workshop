import { Container } from '../../components';
import { Counter, DataFetch, FocusInput, ReducerCounter, ThemeSwitcher } from './components';

const HooksView = () => {
	return (
		<Container>
			<h2>Basic Hooks</h2>
			<h2>1. useState counter</h2>
			<Counter />
			<h2>2. useEffect data fetching</h2>
			<DataFetch />
			<h2>3. useContext theme switch</h2>
			<ThemeSwitcher />
			<h2>Additional hooks</h2>
			<h2>4. useReducer counter</h2>
			<ReducerCounter />
			<h2>5. useRef input focus</h2>
			<FocusInput />
		</Container>
	);
};

export default HooksView;
