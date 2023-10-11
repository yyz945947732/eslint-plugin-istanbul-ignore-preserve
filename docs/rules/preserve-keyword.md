# Make sure istanbul ignore hint include a @preserve keyword (`istanbul-ignore-preserve/preserve-keyword`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

## Rule Details

This rule aims to make sure you include a `@preserve` keyword in the [instanbul ignore hint](https://github.com/istanbuljs/nyc#parsing-hints-ignoring-lines).

Examples of **incorrect** code for this rule:

```js
/* istanbul ignore next */
function test(){
  console.log('Methods that you do not want to be covered by tests');
}
```

Examples of **correct** code for this rule:

```js
/* istanbul ignore next -- @preserve */
function test(){
  console.log('Methods that you do not want to be covered by tests');
}
```
