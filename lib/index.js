"use strict";

const requireIndex = require("requireindex");

module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      plugins: ["istanbul-ignore-preserve"],
      rules: {
        "istanbul-ignore-preserve/preserve-keyword": "warn",
      },
    },
  },
};
