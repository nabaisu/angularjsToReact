import { createClass, createConstructor, createFunction, createMethod } from "./helper";

export const wrapClassFn = (j, root) => {
  root.find(j.Program).replaceWith((path) => {
    const { node } = path;
    const bodyStart = node.body[0].expression;
    let wrapInClassAndRender = createClass(j, "DefaultClass", "React.Component", [
      createConstructor(j),
      createMethod(j, "render", createFunction(j, null, null, bodyStart, true)),
    ]);
    return wrapInClassAndRender;
  });
};