module.exports = {
	extends: ["./.eslintrc.js", "plugin:react/recommended", "prettier/react"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react"],
	rules: {
		// Importing react is no longer required from React 17
		"react/react-in-jsx-scope": 0,
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx"],
			},
		],
	},
};
