#!/usr/bin/env node

const showBanner = require('node-banner');
const importJsx = require('import-jsx');
const {render} = require('ink');
const React = require('react');
const meow = require('meow');

const ui = importJsx('./ui');

meow(`
	Usage
	  $ abhijithvijayan
`);

(async () => {
  await showBanner(
    'Abhijith Vijayan',
    "I build things that aren't evil.",
    'blue'
  );

  render(React.createElement(ui));
})();
