import { createContext } from 'react';

// Always include all values that are expected by consumers
export const ThemeContext = createContext({
	theme: 'dark',
	toggleTheme: () => {},
});
