import { useContext } from 'react';
import { Button } from '../../../../components';
import { ThemeContext } from '../../../../context/ThemeContext';

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div>
			<p>Theme is now {theme}</p>
			<Button label="Toggle theme" onClick={toggleTheme} />
		</div>
	);
};
