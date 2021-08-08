import { findHTMLAttributes, parseNgModel } from "../helper";

export const ngModelFn = (j, root) => {
  findHTMLAttributes(j, root, 'ng-model').replaceWith(path => {
    const {node} = path;
    parseNgModel(node)
    return node
  })
};