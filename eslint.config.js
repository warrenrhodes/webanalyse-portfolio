import js from "@eslint/js";
import ts from "typescript-eslint";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...tailwind.configs["flat/recommended"],
];
