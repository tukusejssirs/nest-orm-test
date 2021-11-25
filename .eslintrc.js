module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
		ecmaVersion: 2018
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'plugin:@typescript-eslint/recommended'
	],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		semi: ['error', 'never'],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'no-unused-vars': 'off',
		'sort-vars': ['error', {ignoreCase: true}],
		'array-bracket-spacing': ['error', 'never'],
		'arrow-body-style': ['error', 'as-needed'],
		'for-direction': 'error',
		'no-trailing-spaces': 'error',
		'comma-dangle': ['error', 'never'],
		'wrap-regex': 'off',
		'no-extra-parens': 'error',
		'no-new-wrappers': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-tabs': ['error', {allowIndentationTabs: true}],
		indent: 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 'first',
				FunctionDeclaration: {parameters: 'first'},
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				ignoredNodes: [
				'FunctionExpression > .params[decorators.length > 0]',
				'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
				'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
				]
			}
		],
		'max-len': [
			'error',
			{
				code: 1000,	// Is there a way to allow infinitely long lines?
				// ignoreComments: true,
				// ignoreTrailingComments: true,
				// ignoreUrls: true,
				// ignoreStrings: true,
				// ignoreTemplateLiterals: true,
				// ignoreRegExpLiterals: true,
				// ignorePattern: true,
				tabWidth: 2
			}
		],
		// 'new-cap': 'error',
		'no-lonely-if': 'error',
		// 'space-in-brackets': ['error', 'never'],
		'computed-property-spacing': ['error', 'never'],
		'object-curly-spacing': ['error', 'never'],
		'array-bracket-spacing': ['error', 'never'],
		'keyword-spacing': ['error', {'before': true, 'after': true}],
		'spaced-comment': ['error', 'always'],
		'no-unreachable': 'error',
		'no-unexpected-multiline': 'error',
		'no-var': 'error'
	}
}
