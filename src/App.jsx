import { Button, Container, Footer, Header, Navigation } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';
import './styles/main.scss';

function App() {
	return (
		<div className={styles['c-app']}>
			<Navigation brand="My app" />
			<Header title={<p>Edit <code>src/App.js</code> and save to reload.</p>} />
			<main className="u-main">
				<Container className="u-text-center">
					<Button label="Click me" />
				</Container>
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
