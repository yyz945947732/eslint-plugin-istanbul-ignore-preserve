"use strict";

const rule = require("../../../lib/rules/preserve-keyword");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("preserve-keyword", rule, {
  valid: [
    {
      code: "/* istanbul ignore if -- @preserve */",
    },
    {
      code: "/* istanbul ignore else -- @preserve */",
    },
    {
      code: "/* istanbul ignore next -- @preserve */",
    },
    {
      code: "/* istanbul ignore file -- @preserve */",
    },
    {
      code: "// istanbul ignore file -- @preserve",
    },
    {
      code: "/* istanbul ignore if: lazy to tests -- @preserve */",
    },
  ],
  invalid: [
    {
      code: "/* istanbul ignore if */",
      errors: [{ messageId: "noPreserveKeyword" }],
      output: "/* istanbul ignore if -- @preserve */",
    },
    {
      code: "/* istanbul ignore else */",
      errors: [{ messageId: "noPreserveKeyword" }],
      output: "/* istanbul ignore else -- @preserve */",
    },
    {
      code: "/* istanbul ignore next */",
      errors: [{ messageId: "noPreserveKeyword" }],
      output: "/* istanbul ignore next -- @preserve */",
    },
    {
      code: "/* istanbul ignore file */",
      errors: [{ messageId: "noPreserveKeyword" }],
      output: "/* istanbul ignore file -- @preserve */",
    },
    {
      code: "// istanbul ignore file",
      errors: [{ messageId: "noPreserveKeyword" }],
      output: "/* istanbul ignore file -- @preserve */",
    },
    {
      code: "/* istanbul ignore if: lazy to tests */",
      errors: [{ messageId: "noPreserveKeyword" }],
      output: "/* istanbul ignore if: lazy to tests -- @preserve */",
    },
  ],
});
