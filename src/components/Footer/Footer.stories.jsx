import Footer from './Footer';

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = { children: <div>Footer content</div> };

export default {
	title: 'Components/Footer',
	component: Footer,
};
