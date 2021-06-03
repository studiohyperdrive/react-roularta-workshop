import Container from './Container';

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = { children: <div>I'm wrapped</div> };

export default {
	title: 'Components/Container',
	component: Container,
};
