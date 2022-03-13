module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    'eslint:recommended',
],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 8,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
