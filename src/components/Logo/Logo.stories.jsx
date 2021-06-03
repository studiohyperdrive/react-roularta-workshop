import Logo from './Logo';

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});

export default {
	title: 'Components/Logo',
	component: Logo,
};
