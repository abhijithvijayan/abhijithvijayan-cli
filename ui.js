const open = require('open');
const { Box } = require('ink');
const React = require('react');
const SelectInput = require('ink-select-input').default;

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	} else if (item.action) {
		item.action();
	}
};

const createList = items => {
	return items.map(item => {
		return { ...item, key: item.label || item.url };
	});
};

const listItems = createList([
	{
		label: 'Website',
		url: 'https://abhijithvijayan.in',
	},
	{
		label: 'GitHub',
		url: 'https://github.com/abhijithvijayan',
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/_abhijithv',
	},
	{
		label: 'LinkedIn',
		url: 'https://linkedin.com/in/abhijith-vijayan',
	},
	{
		label: 'Blog',
		url: 'https://medium.com/@abhijithvijayan',
	},
	{
		label: 'Contact',
		url: 'https://abhijithvijayan.in/#contact',
	},
	{
		label: 'Support my open source work',
		url: 'https://www.patreon.com/abhijithvijayan',
	},
	{
		label: '---------',
	},
	{
		label: 'Quit',
		action() {
			process.exit();
		},
	},
]);

const renderBox = () => {
	return (
		<Box flexDirection="column">
			<Box marginBottom={1} />
			<SelectInput items={listItems} onSelect={handleSelect} />
		</Box>
	);
};

module.exports = renderBox;
