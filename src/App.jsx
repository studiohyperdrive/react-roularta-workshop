import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Navigation } from './components';
import { RouteSwitch } from './router';

import styles from './App.module.scss';
import './styles/main.scss';

function App() {
	const navigationItems = [
		{ label: 'Home', to: '/' },
		{ label: 'List', to: '/list' },
	];

	return (
		<div className={styles['c-app']}>
			<Navigation brand="My App" items={navigationItems} />
			<main className="u-main">
				<RouteSwitch />
			</main>
			<Footer className="u-text-center">
				This is My App's footer
			</Footer>
		</div>
	);
}

/**
 * This Root component will be used to wrap different providers around our App
 * that will be needed globally e.g.:
 * - Router
 * - State
 * - Other 3rd party libs
 */
function Root() {
	return (
		<Router>
			<App />
		</Router>
	);
}

export default Root;
