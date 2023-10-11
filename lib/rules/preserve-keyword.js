const MESSAGE_ID = "noPreserveKeyword";

const TARGET_HINTS = [
  "istanbul ignore if",
  "istanbul ignore else",
  "istanbul ignore next",
  "istanbul ignore file",
];

function isContainIllegalHint(str) {
  const lowerCaseString = str.toLowerCase().trim();
  return TARGET_HINTS.includes(lowerCaseString);
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
      if (comment.type !== "Block") return;

      if (isContainIllegalHint(comment.value)) {
        context.report({
          loc: comment.loc,
          messageId: MESSAGE_ID,
          fix: (fixer) =>
            fixer.replaceText(comment, `/*${comment.value}-- @preserve */`),
          suggest: [
            {
              messageId: MESSAGE_ID,
              fix: (fixer) =>
                fixer.replaceText(comment, `/*${comment.value}-- @preserve */`),
            },
          ],
        });
      }
    });

    return {};
  },
};
