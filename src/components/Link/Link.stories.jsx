import Link from './Link';

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Learn React', href: 'https://reactjs.org' };

export const External = Template.bind({});
External.args = { ...Default.args, target: '_blank' };

export default {
	title: 'Components/Link',
	component: Link,
};
