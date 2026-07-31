// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['build/**', '.docusaurus/**', 'node_modules/**', 'static/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // babel.config.js e simili sono CommonJS eseguiti da Node.
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {module: 'writable', require: 'readonly', __dirname: 'readonly'},
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ...react.configs.flat.recommended,
    settings: {react: {version: 'detect'}},
    rules: {
      ...react.configs.flat.recommended.rules,
      // Docusaurus/MDX inject React automatically: no need to import it in scope.
      'react/react-in-jsx-scope': 'off',
    },
  },
  // Disables stylistic rules that would fight with Prettier.
  prettier,
);
