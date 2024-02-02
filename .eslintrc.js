/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next', 'next/core-web-vitals', 'prettier'],
  plugins: ['eslint-plugin-import-access', 'strict-dependencies', 'import'],
  rules: {
    'jsx-a11y/alt-text': 'off',
    '@next/next/no-img-element': 'off',
    'no-empty': 'error',
    'no-useless-escape': 'off',
    'no-lonely-if': 'error',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-unsafe-optional-chaining': 'off',
    curly: ['error', 'all'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'sort-imports': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: '~/**', group: 'internal', position: 'before' },
          { pattern: '&/**', group: 'internal', position: 'before' },
          { pattern: './**.scss', group: 'index', position: 'before' },
        ],
      },
    ],
    'strict-dependencies/strict-dependencies': [
      'error',
      [
        {
          module: '~/core',
          allowReferenceFrom: ['src/app', 'src/core', 'src/layouts', 'src/parts'],
        },
        {
          module: '~/src/components',
          allowReferenceFrom: ['src/components', 'src/parts', 'src/core', 'src/layouts'],
        },
        {
          module: '~/domains',
          allowReferenceFrom: ['src/domains', 'src/requests', 'src/layouts', 'src/parts', 'src/hooks', 'src/core'],
        },
        { module: '~/layouts', allowReferenceFrom: ['src/app', 'src/core', 'src/layouts'] },
        {
          module: '~/hooks',
          allowReferenceFrom: ['src/parts', 'src/hooks', 'src/core', 'src/layouts'],
        },
        {
          module: '~/recoil',
          allowReferenceFrom: ['src/parts', 'src/hooks', 'src/core'],
        },
        {
          module: '~/requests',
          allowReferenceFrom: ['src/core', 'src/parts', 'src/requests', 'src/hooks', 'src/recoil'],
        },
        { module: '~/types', allowReferenceFrom: [] },
      ],
      {
        resolveRelativeImport: true,
      },
    ],
    'import-access/jsdoc': ['error'],
    'react/jsx-key': 'error',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['react-cookie', 'history', 'react-use', 'react-helmet', 'styled-components', 'axios', 'dayjs'],
            message: "modulesの直importは禁止です。'~/libs/*' 配下のmoduleをimportしてください。",
          },
          {
            group: ['../../*'],
            message: "2階層以上の相対パスの場合'~','&'のパスに変更してください。",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/eslint-recommended'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: '.',
      },
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              '{}': false,
            },
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },
    {
      files: ['src/libs/**/*'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
    {
      files: ['src/core/**/*'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['react-cookie', 'history', 'react-use', 'react-helmet', 'styled-components', 'axios', 'dayjs'],
                message: "modulesの直importは禁止です。'~/libs/*' 配下のmoduleをimportしてください。",
              },
              {
                group: ['../../*'],
                message: "2階層以上の相対パスの場合'~','&'のパスに変更してください。",
              },
              {
                group: ['~/core/'],
                message: "coreディレクトリ配下では、'~/core/' ではなく '&/' を利用してください。",
              },
            ],
          },
        ],
      },
    },
    {
      files: ['**/__mocks__/**/*', '**/__storybook__/**/*'],
      rules: {
        'strict-dependencies/strict-dependencies': 'off',
        'import-access/jsdoc': 'off',
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['react-cookie', 'history', 'react-use', 'react-helmet', 'styled-components', 'axios', 'dayjs'],
                message: "modulesの直importは禁止です。'~/libs/*' 配下のmoduleをimportしてください。",
              },
            ],
          },
        ],
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
};
