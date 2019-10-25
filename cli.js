#!/usr/bin/env node

const meow = require('meow');
const showBanner = require('node-banner');
const importJsx = require('import-jsx');
const React = require('react');
const { render } = require('ink');

const ui = importJsx('./ui');

meow(`
	Usage
	  $ abhijithvijayan
`);

(async () => {
	await showBanner('Abhijith Vijayan', 'Full Stack Open Source Engineer', 'blue');

	render(React.createElement(ui));
})();
