module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: ["eslint:recommended", "airbnb", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"semi": 0,
	},
}
