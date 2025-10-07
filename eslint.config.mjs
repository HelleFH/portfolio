import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["dist", "build", "node_modules"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      tailwindcss: tailwind,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
    },

    settings: {
      react: { version: "detect" },
      tailwindcss: { config: "tailwind.config.js" },
    },
  },
];
