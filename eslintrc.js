module.exports = {
  plugins: [
    'import',
    'react',
  ],
  rules: {
    'block-scoped-var': 0,
    'func-names': 0,
    'indent': [2, 2, {'SwitchCase': 1}], // 2 space indentation in switch cases
    'no-param-reassign': 0,
    'no-console': 0,
    'no-else-return': 0,
    'no-nested-ternary': 0,
    'no-undef': 2,
    'no-unused-vars': [2, {vars: 'all', args: 'none'}],
    'no-use-before-define': [2, 'nofunc'],
    'one-var': 0,
    'spaced-comment': 0,
    'import/default': 0,
    'import/export': 2,
    'import/named': 0,
    'import/no-duplicates': 2,
    'import/no-unresolved': 2,
    'react/jsx-quotes': 0,
    'react/jsx-curly-spacing': [1, 'never'],
    'react/sort-comp': 0,
    'react/no-multi-comp': 0,
  },
};
