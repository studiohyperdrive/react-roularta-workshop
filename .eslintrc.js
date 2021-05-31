module.exports = {
	// Extend from default CRA eslint config
	extends: [
		'react-app',
		'react-app/jest',
	],
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		indent: ['warn', 'tab'],
		quotes: ['warn', 'single'],
		semi: ['error', 'always'],

		'react/self-closing-comp': 'warn',
	},
};
