#!/usr/bin/env node

const meow = require('meow');
const showBanner = require('node-banner');

meow(`
	Usage
	  $ abhijithvijayan
`);

(async () => {
	await showBanner('Abhijith Vijayan', 'Full Stack Open Source Engineer');
})();
