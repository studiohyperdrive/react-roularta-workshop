import Header from './Header';

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Header title' };

export default {
	title: 'Components/Header',
	component: Header,
};
