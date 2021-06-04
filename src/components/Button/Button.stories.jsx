import Button from './Button';

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Button' };

export const Dark = Template.bind({});
Dark.args = { ...Default.args, variant: 'dark' };

export const Light = Template.bind({});
Light.args = { ...Default.args, variant: 'light' };

export default {
	title: 'Components/Button',
	component: Button,
	parameters: {
		docs: {
			description: {
				component: 'Button UI component',
			},
		},
	},
};
