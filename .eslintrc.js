module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["react-app", "prettier"],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 90,
        bracketSpacing: false,
        trailingComma: "es5",
      },
    ],
  },
};
