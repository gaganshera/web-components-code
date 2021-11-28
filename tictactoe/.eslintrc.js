module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "off",
    "no-unsafe-finally": "off",
    "no-redeclare": "off",
    "no-unused-labels": "off",
    "no-undef": "off",
    "no-prototype-builtins": "off",
    "no-useless-escape": "off",
    "no-empty": "off",
  },
};
