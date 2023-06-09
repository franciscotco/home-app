module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{json,appcache,ico,html,png,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};