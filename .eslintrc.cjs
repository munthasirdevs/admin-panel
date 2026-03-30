module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    'prettier',
    'react-refresh',
  ],
  rules: {
    /* ============================================
       PRETTIER INTEGRATION
       ============================================ */
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'lf',
      },
    ],

    /* ============================================
       REACT RULES
       ============================================ */
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-leaked-render': 'warn',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],
    'react/self-closing-comp': 'error',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
        multiline: 'last',
      },
    ],

    /* ============================================
       REACT HOOKS RULES
       ============================================ */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    /* ============================================
       TYPESCRIPT RULES
       ============================================ */
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',

    /* ============================================
       IMPORT ORDER RULES
       ============================================ */
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@admin_pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@shared/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@utils/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@types/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@constants/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@config/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',

    /* ============================================
       ACCESSIBILITY RULES
       ============================================ */
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',

    /* ============================================
       XENONOS PROJECT-SPECIFIC RULES
       ============================================ */
    // Enforce consistent component file naming
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // Require explicit return types for public APIs
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Enforce proper error handling
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // Require proper async/await handling
    'no-return-await': 'error',
    // Enforce proper Promise handling
    'prefer-promise-reject-errors': 'error',
    // Require proper type assertions
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
    ],
    // Enforce proper null checking
    'no-implicit-coercion': 'error',
    // Require proper destructuring
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: { array: true, object: true },
        AssignmentExpression: { array: false, object: false },
      },
    ],

    /* ============================================
       BEST PRACTICES
       ============================================ */
    'no-var': 'error',
    'prefer-const': 'error',
    'no-let': 'off',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'curly': ['error', 'all'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': 'error',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],

    /* ============================================
       VITEST RULES
       ============================================ */
    'no-restricted-globals': [
      'error',
      {
        name: 'describe',
        message: 'Use describe from vitest instead',
      },
      {
        name: 'it',
        message: 'Use it from vitest instead',
      },
      {
        name: 'test',
        message: 'Use test from vitest instead',
      },
      {
        name: 'expect',
        message: 'Use expect from vitest instead',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/internal-regex': '^@(components|shared|assets|hooks|utils|types|constants|config|admin_pages)/',
  },
  overrides: [
    {
      files: ['*.test.{ts,tsx}', '*.spec.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['vite.config.ts', 'vitest.config.ts', 'tailwind.config.js', 'postcss.config.js'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
