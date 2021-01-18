module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 6,
	},
	extends:['plugin:vue/recommended','standard'],
  env: {
    browser: true,
  },
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// add your custom rules here
	'rules': {
        'no-new': 0,
        'no-tabs':0,
        'no-mixed-spaces-and-tabs':0,
		'semi':0,
		'one-var':0,
		'no-extra-boolean-cast':0,
		'object-curly-spacing':0,
		'promise/param-names': 0,
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'indent': 0,
		'space-before-function-paren': 0,
		'eol-last': 0,
		'vue/max-attributes-per-line':0,
		'vue/html-self-closing':0,
		'vue/html-indent':0,
		'vue/attributes-order':0,
		'vue/singleline-html-element-content-newline': 0,
    'no-new': 0,
    'no-tabs':0,
    'no-mixed-spaces-and-tabs':0,
		'semi':0,
		'one-var':0,
		'no-extra-boolean-cast':0,
		'object-curly-spacing':0,
		'promise/param-names': 0,
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'indent': 0,
		'space-before-function-paren': 0,
		'eol-last': 0,
		'vue/max-attributes-per-line':0,
		'vue/html-self-closing':0,
    'vue/html-indent':0,
    'vue/singleline-html-element-content-newline': 0,
		'vue/attributes-order': 0,
		'no-trailing-spaces': 0,
    'vue/attribute-hyphenation': 0,
    'vue/html-closing-bracket-spacing': 0,
    'prefer-promise-reject-errors': 0,
    'no-throw-literal': 0
	}
};
