/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    camelcase: "error",
    "@typescript-eslint/naming-convention": [
      "error",
      // {
      //   selector: "variable",
      //   format: ["camelCase", "UPPER_CASE"],
      //   leadingUnderscore: "allow",
      //   modifiers: ["exported"],
      // },
      // {
      //   selector: "variable",
      //   format: ["UPPER_CASE"],
      //   leadingUnderscore: "forbid",
      //   modifiers: ["global"],
      // },
      // {
      //   selector: "function",
      //   format: ["camelCase"],
      //   leadingUnderscore: "forbid",
      //   modifiers: ["exported"],
      // },
      // {
      //   selector: ["typeMethod"],
      //   format: ["camelCase"],
      //   leadingUnderscore: "forbid",
      //   modifiers: ["exported"],
      // },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      {
        selector: "class",
        format: ["PascalCase"],
      },
    ],
  },
};
