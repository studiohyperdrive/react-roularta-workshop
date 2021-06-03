import { MemoryRouter } from 'react-router';
import Navigation from './Navigation';

const MOCK_NAVIGATION_ITEMS = [
	{ label: 'Home', to: '' },
	{ label: 'Contact', to: '' },
	{ label: 'About', to: '' },
];

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = { brand: 'React', items: MOCK_NAVIGATION_ITEMS };

export default {
	title: 'Components/Navigation',
	component: Navigation,
	decorators: [
		(story) => (
			// React router components need to wrapped inside one of the routers
			// otherwise it will throw an error
			<MemoryRouter>{story()}</MemoryRouter>
		),
	],
};
