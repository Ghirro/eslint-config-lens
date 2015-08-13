module.exports = {
  plugins: [
    'react',
    'require-path-exists',
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
    'react/jsx-curly-spacing': [1, 'never'],
    'react/sort-comp': 0,
    'react/no-multi-comp': 0,
    'require-path-exists/exists': 2,
    'require-path-exists/notEmpty': 0,
    'require-path-exists/tooManyArguments': 2,
  },
};
