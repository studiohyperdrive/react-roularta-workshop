import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Navigation } from './components';
import { ThemeContext } from './context/ThemeContext';
import { RouteSwitch } from './router';

import styles from './App.module.scss';
import './styles/main.scss';
import clsx from 'clsx';

function App({ theme }) {
	const navigationItems = [
		{ label: 'Home', to: '/' },
		{ label: 'Hooks', to: '/hooks' },
		{ label: 'List', to: '/list' },
	];

	return (
		<div className={clsx(styles['c-app'], {
			'light-theme': theme === 'light',
		})}>
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
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<Router>
				<App theme={theme} />
			</Router>
		</ThemeContext.Provider>
	);
}

export default Root;
