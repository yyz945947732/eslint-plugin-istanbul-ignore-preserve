# eslint-plugin-istanbul-ignore-preserve

ESLint plugin to make sure ignore hint include a `@preserve` keyword. This is useful when your project is using istanbul and esbuild together.

## Why use

If your project source codes are transpiled using [esbuild](https://esbuild.github.io/), which strips all comments from the source codes ([esbuild#516](https://github.com/evanw/esbuild/issues/516)). So the following ignore hint will not work.

```js
/* istanbul ignore if */
if (condition) {
```

For istanbul coverage you need include a `@preserve` keyword in the ignore hint to make this work. Comments which are considered as legal comments are preserved.

```js
/* istanbul ignore if -- @preserve */
if (condition) {
```

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-istanbul-ignore-preserve`:

```sh
npm install eslint-plugin-istanbul-ignore-preserve --save-dev
```

## Usage

On your `.eslintrc.json` file extend the plugin's recommended configuration:

```json
{
  "extends": ["plugin:istanbul-ignore-preserve/recommended"]
}
```

If you want to use your own configuration, you can do so by adding the plugin to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["istanbul-ignore-preserve"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "istanbul-ignore-preserve/preserve-keyword": "warn"
  }
}
```

## Rules

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                               | Description                                                 | 🔧  |
| :------------------------------------------------- | :---------------------------------------------------------- | :-- |
| [preserve-keyword](docs/rules/preserve-keyword.md) | Make sure istanbul ignore hint include a @preserve keyword. | 🔧  |

## LICENSE

[MIT](https://github.com/yyz945947732/eslint-plugin-istanbul-ignore-preserve/blob/master/LICENSE)
