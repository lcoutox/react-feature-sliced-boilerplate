module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ignorePatterns: ['**/.storybook/main.ts', '**/.storybook/preview.ts'],
  },
  
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'storybook/webpack-decorators': 'off', // Adicionado para corrigir o aviso
  },
};
