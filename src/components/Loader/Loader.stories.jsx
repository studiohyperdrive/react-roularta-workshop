import Loader from './Loader';

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = { isLoading: true };

export default {
	title: 'Components/Loader',
	component: Loader,
};
