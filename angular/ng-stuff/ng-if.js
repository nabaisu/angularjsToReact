import { createIfShow, findHTMLAttributes } from "../helper";

export const ngIfFn = (j, root) => {
  const nodes = findHTMLAttributes(j, root, "ng-if");

  const nodesObj = [];
  const nodesValue = [];

  nodes.forEach((path) => {
    const { node, parent, parentPath } = path;
    nodesObj.push(parentPath.parentPath.parentPath);
    nodesValue.push(node.value.value);
  });

  nodes.remove();

  j(nodesObj).replaceWith((path, index) => {
    return createIfShow(j, j.identifier(nodesValue[index]), path.node);
  });
};

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