const SelectInput = require('ink-select-input').default;
const React = require('react');
const open = require('open');
const {Box} = require('ink');

const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  } else if (item.action) {
    item.action();
  }
};

const createList = (items) => {
  return items.map((item) => {
    return {...item, key: item.label || item.url};
  });
};

const listItems = createList([
  {
    label: 'Website 🏠',
    url: 'https://abhijithvijayan.in',
  },
  {
    label: 'Code 💻',
    url: 'https://github.com/abhijithvijayan',
  },
  {
    label: 'Tweets ⚡',
    url: 'https://twitter.com/_abhijithv',
  },
  {
    label: 'Writings 📝',
    url: 'https://medium.com/@abhijithvijayan',
  },
  {
    label: 'Hire 💼',
    url: 'https://linkedin.com/in/iamabhijithvijayan',
  },
  {
    label: 'Contact 📩',
    url: 'mailto:email@abhijithvijayan.in',
  },
  {
    label: 'Support my open source work 💌',
    url: 'https://abhijithvijayan.in/donate',
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
    <>
      <Box flexDirection="column">
        <Box marginBottom={1} />
        <SelectInput items={listItems} onSelect={handleSelect} />
      </Box>
    </>
  );
};

module.exports = renderBox;
