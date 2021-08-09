import { ngRepeatExpression } from "../expressions/ng-repeat";
import { createIfShow, findHTMLAttributes } from "../helper";

export const ngRepeatFn = (j, root) => {
  const nodes = findHTMLAttributes(j, root, "ng-repeat");

  const nodesObj = [];
  const nodesValue = [];

  nodes.forEach((path) => {
    const { node, parent, parentPath } = path;
    nodesObj.push(parentPath.parentPath.parentPath);
    nodesValue.push(node.value.value);
  });

  nodes.replaceWith((path, index) => {
    const { node } = path;
    let { variable, expression } = ngRepeatExpression(j, nodesValue[index]);
    node.name.name = "key";
    node.value = j.jsxExpressionContainer(j.identifier(`${variable[0]}.id`));
    console.log(node);
    return node;
  });

  j(nodesObj).replaceWith((path, index) => {
    let { variable, expression } = ngRepeatExpression(j, nodesValue[index]);
    return createMap(j, expression, variable, path, index);
  });
};

function createMap(j, expression, args, path, index) {
  return j.jsxExpressionContainer(
    j.callExpression(
      j.memberExpression(
        j.identifier(expression[0]),
        j.identifier("map"),
        false
      ),
      [
        j.arrowFunctionExpression(
          args.map(arg => j.identifier(arg)),
          j.blockStatement([j.returnStatement(path.node)])
        ),
      ]
    )
  );
}

/*
  const parentNode = root.find(j.JSXElement, {
    type: "JSXElement",
    openingElement: {
      type: "JSXOpeningElement",
      attributes: [
        {
          type: "JSXAttribute",
          name: { type: "JSXIdentifier", name: "ng-if" }
        }
      ]
    }
  });

  const nodesObj = [];

  nodes.forEach((path) => {
    const { node, parent, parentPath } = path;
    console.log(parentPath.parentPath.parentPath.node);
    nodesObj.push(parentPath.parentPath.parentPath);
  });

  nodes.remove();
  j(nodesObj).replaceWith((path) => {
    return createJSXExpression(j, j.identifier("bomdia"), path.node);
  });
*/
