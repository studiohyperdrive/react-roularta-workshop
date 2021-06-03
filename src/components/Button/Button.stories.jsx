import Button from './Button';

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Button' };

export default {
	title: 'Components/Button',
	component: Button,
};
