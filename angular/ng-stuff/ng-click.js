import { findHTMLAttributes, parseNgClick } from "../helper";

export const ngClickFn = (j, root) => {
  findHTMLAttributes(j, root, 'ng-click').replaceWith(path => {
    const {node} = path;
    parseNgClick(node)
    return node
  })
};