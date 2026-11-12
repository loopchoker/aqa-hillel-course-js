import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        rules: {
            "no-unused-vars": "warn",
        },
    },
    {
        ignores: ["node_modules/"],
    },
    eslintConfigPrettier,
];
