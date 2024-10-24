import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {   
     ignores: ["apps/**/dist/", "apps/**/node_modules/","apps/**/public/", "packages/**/node_modules/", "packages/**/dist/", "packages/**/public/", ], 
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "react/react-in-jsx-scope": "off"
    }
  }
];
