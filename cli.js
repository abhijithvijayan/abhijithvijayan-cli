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
	await showBanner('Abhijith Vijayan', "I build things that aren't evil.", 'blue');

	render(React.createElement(ui));
})();
