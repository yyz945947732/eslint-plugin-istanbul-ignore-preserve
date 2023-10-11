# eslint-plugin-istanbul-ignore-preserve

If your project source codes are transpiled using [esbuild](https://esbuild.github.io/), which strips all comments from the source codes ([esbuild#516](https://github.com/evanw/esbuild/issues/516)). So the following ignore hint will not work.

```js
/* istanbul ignore if */
if (condition) {
```

For istanbul coverage you need include a `@preserve` keyword in the ignore hint to make it work. Comments which are considered as legal comments are preserved.

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

Add `eslint-istanbul-ignore-preserve` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "istanbul-ignore-preserve"
    ]
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

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                               | Description                                                 | 🔧    |
| :------------------------------------------------- | :---------------------------------------------------------- | :--- |
| [preserve-keyword](docs/rules/preserve-keyword.md) | Make sure istanbul ignore hint include a @preserve keyword. | 🔧    |