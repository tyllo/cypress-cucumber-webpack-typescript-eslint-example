module.exports = {
  root: true,
  env: {
    jest: true,
    mocha: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    '@spacetabs/eslint-config-spacetab-io',
    'airbnb-base',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './cypress'],
        ],
        extensions: [
          '.js',
          '.vue',
          '.json',
          '.ts',
          '.d.ts',
        ]
      }
    },
  },
  globals: {
    Cypress: true,
    cy: 'readonly',
    assert: 'readonly',
  },
  rules: {
    'no-console': 1,
    'no-debugger': 1,
    'sort-imports': 'off',
    'no-void': 0,
    'max-len': ['error', {
      'code': 120,
      'ignoreComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'no-param-reassign': ['error', {
      'props': true,
      'ignorePropertyModificationsFor': [
        'state',
        'acc',
        'e'
      ]
    }],

    'import/first': 0,
    'import/order': [0, {
      'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
      'newlines-between': 'never'
    }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-unresolved': 2,
    'import/no-cycle': 2,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': ['error', {
      js: 'never',
      json: 'always',
      ts: 'never',
      'd.ts': 'never',
    }],
    'simple-import-sort/sort': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false
    }],
    camelcase: 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/no-extra-parens': 'off',
  }
};
