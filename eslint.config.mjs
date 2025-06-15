import myPlugin from "@ota-meshi/eslint-plugin";
import tseslint from "typescript-eslint";
// import tseslint from "typescript-eslint";
export default [
  ...myPlugin.config({
    node: true,
    ts: true,
    packageJson: true,
    json: true,
    yaml: true,
    md: true,
    prettier: true,
  }),
  {
    rules: {
      complexity: "off",
      "func-style": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.mts"],
    rules: {
      "@typescript-eslint/switch-exhaustiveness-check": [
        "error",
        {
          allowDefaultCaseForExhaustiveSwitch: false,
          considerDefaultExhaustiveForUnions: true,
          requireDefaultForNonUnion: true,
        },
      ],
      "default-case": "off",
    },
  },
  {
    files: ["**/*.md", "*.md"].flatMap((pattern) => [
      `${pattern}/*.js`,
      `${pattern}/*.mjs`,
    ]),
    rules: {
      "n/no-missing-import": "off",
    },
  },
  ...tseslint.config({
    files: ["**/*.md/*.ts", "*.md/*.ts"],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  }),
  ...tseslint.config({
    files: ["tests/fixtures/**/*.{js,ts}"],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      "jsdoc/require-jsdoc": "off",
      "no-undef": "off",
      "no-lone-blocks": "off",
      "no-unused-vars": "off",
      "no-shadow": "off",
      yoda: "off",
      "no-empty": "off",
      "no-self-compare": "off",
      radix: "off",
      "no-implicit-coercion": "off",
      "no-void": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  }),
  {
    files: ["tests/**/*.ts"],
    rules: {
      "@typescript-eslint/no-misused-promises": "off",
      "require-atomic-updates": "off",
    },
  },
  {
    files: ["tests/fixtures/**/*.*"],
    rules: {
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/prefer-function-type": "off",
      "@typescript-eslint/array-type": "off",
      "no-empty-function": "off",
      "no-var": "off",
      "no-redeclare": "off",
      "no-use-before-define": "off",
      "prefer-template": "off",
      "no-useless-concat": "off",
      "n/no-unsupported-features/es-syntax": "off",
      "prefer-const": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-empty-function": "off",
    },
  },
  {
    ignores: [
      ".nyc_output/",
      "coverage/",
      "node_modules/",
      "lib/",
      "!.github/",
      "!.vscode/",
      "!.devcontainer/",
      "!docs/.vitepress/",
      "docs/.vitepress/cache/",
      "docs/.vitepress/build-system/shim/",
      "docs/.vitepress/dist/",
    ],
  },
];
