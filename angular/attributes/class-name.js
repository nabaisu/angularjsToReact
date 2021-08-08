import { findHTMLAttributes, nameClassName } from "../helper";

export const classNameFn = (j, root) => {
  findHTMLAttributes(j, root, 'class').replaceWith(path => {
    const {node} = path;
    nameClassName(node)
    return node
  })
};