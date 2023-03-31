module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
		// 'import/resolver': {
		// 	alias: {
		// 		map: [
		// 		],
		// 		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
		// 	},
		// },
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
		'prettier',
	],
	rules: {
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreMemberSort: false,
				ignoreDeclarationSort: true,
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: [
					'builtin',
					'external',
					'internal',
					'index',
					'object',
					'parent',
					'sibling',
				],
				pathGroups: [
					{
						pattern: '~*/**',
						group: 'internal',
					},

					{
						pattern: '~*',
						group: 'internal',
					},
				],
			},
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
	},
};
