import { findHTMLAttributes, parseNgModel } from "../helper";

export const ngClassFn = (j, root) => {
  findHTMLAttributes(j, root, "ng-class").replaceWith((path) => {
    const { node } = path;
    const b = [
      j.conditionalExpression(
        j.identifier("ola"),
        j.literal("highlight-column"),
        j.literal("null")
      ),
    ];
    const c = [j.templateElement({ cooked: null, raw: " " }, true)];
    const a = j.jsxAttribute(
      j.jsxIdentifier("class"),
      j.jsxExpressionContainer(
        j.templateLiteral(
          [j.templateElement({ cooked: null, raw: "first " }, false), ...c],
          [
            j.conditionalExpression(
              j.identifier("ola"),
              j.literal("highlight-column"),
              j.literal("null")
            ),
            ...b,
          ]
        )
      )
    );
    return a;
  });
};
