import { Button, Container, Footer, Header, Navigation } from './components';

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

export default App;
