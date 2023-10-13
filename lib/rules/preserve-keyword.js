const MESSAGE_ID = "noPreserveKeyword";

const TARGET_HINTS = [
  "istanbul ignore if",
  "istanbul ignore else",
  "istanbul ignore next",
  "istanbul ignore file",
];

const PRESERVE_KEY = "-- @preserve";

function isContainIllegalHint(str) {
  const lowerCaseString = str.toLowerCase().trim();
  return TARGET_HINTS.some(
    (hint) =>
      lowerCaseString.startsWith(hint) &&
      !lowerCaseString.endsWith(PRESERVE_KEY)
  );
}

function fixFn(fixer, comment) {
  const content = comment.value.trim();
  return fixer.replaceText(comment, `/* ${content} ${PRESERVE_KEY} */`);
}

module.exports = {
  meta: {
    type: "suggestion",
    fixable: "code",
    hasSuggestions: true,
    docs: {
      description:
        "Make sure istanbul ignore hint include a @preserve keyword.",
    },
    messages: {
      noPreserveKeyword: "Please add `-- @preserve` after ignore hint.",
    },
    schema: [],
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    const comments = sourceCode.getAllComments();

    comments.forEach((comment) => {
      if (isContainIllegalHint(comment.value)) {
        context.report({
          loc: comment.loc,
          messageId: MESSAGE_ID,
          fix: (fixer) => fixFn(fixer, comment),
          suggest: [
            {
              messageId: MESSAGE_ID,
              fix: (fixer) => fixFn(fixer, comment),
            },
          ],
        });
      }
    });

    return {};
  },
};
