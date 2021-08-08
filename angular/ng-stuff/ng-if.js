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