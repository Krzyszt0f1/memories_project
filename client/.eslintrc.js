module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'simple-import-sort'
  ],
  rules: {
    'sort-imports': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error'
  }
}
