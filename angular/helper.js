import { initialHTMLElements } from "../helper/htmlTags";

export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const state = {};

  findHTMLAttributes(j, root).replaceWith((path) => {
    const { node } = path;
    switch (node.name.name) {
      case "ng-click":
        parseNgClick(node);
        break;
      case "class":
        nameClassName(node);
        break;
      case "ng-model":
        parseNgModel(node);
        break;
      default:
        console.log(node.name.name);
        break;
    }
    return node;
  });

  findHTMLElements(root).replaceWith((path) => {
    const { node } = path;
    const tagName = node.openingElement.name.name;
    if (!initialHTMLElements.includes(tagName)) {
      console.log("directive alert:", tagName);
    }
    return node;
  });

  root.find(j.Program).replaceWith((path) => {
    const { node } = path;
    const bodyStart = node.body[0].expression;
    let wrapInClassAndRender = createClass("Ola", "React.Component", [
      createConstructor(),
      createMethod("render", createFunction(null, null, bodyStart, true)),
    ]);
    return wrapInClassAndRender;
  });

  return root.toSource();
}

export function createFunction(j, name, params, body, shouldReturn) {
  return j.functionExpression(
    name ? name : null,
    params ? params : [],
    shouldReturn
      ? j.blockStatement([j.returnStatement(body)])
      : j.blockStatement(body)
  );
}
export function createClass(j, name, superClass, body = []) {
  return j.classDeclaration(
    j.identifier(name),
    j.classBody(body),
    superClass ? j.identifier(superClass) : null
  );
}

export function createMethod(j, name, fn) {
  return j.methodDefinition("method", j.identifier(name), fn);
}

export function createConstructor(j) {
  return j.methodDefinition(
    "constructor",
    j.identifier("constructor"),
    propsConstructorFn(j)
  );
}

export function propsConstructorFn(j) {
  return j.functionExpression(
    null,
    [j.identifier("props")],
    j.blockStatement([
      j.expressionStatement(
        j.callExpression(j.super(), [j.identifier("props")])
      ),
      j.expressionStatement(
        j.assignmentExpression(
          "=",
          j.memberExpression(j.thisExpression(), j.identifier("state")),
          j.objectExpression([])
        )
      ),
    ])
  );
}

export function findHTMLAttributes(j, el, attr) {
  return el.find(j.JSXAttribute, {
    type: "JSXAttribute",
    name: { type: "JSXIdentifier", ...(attr && { name: attr }) },
  });
}

export function findHTMLElements(el, attr) {
  return el.find(j.JSXElement, {
    type: "JSXElement",
    openingElement: {
      name: { type: "JSXIdentifier" }, //, ...(attr && { name: attr }) },
    },
  });
}

export function parseNgClick(node) {
  node.name.name = `onClick`;
  node.value.type = "JSXExpressionContainer";
  node.value.expression = {
    type: "Identifier",
    name: parseAngularExpression(node.value.value),
  };
}

export function parseNgModel(node) {
  node.name.name = `value`;
  node.value.type = "JSXExpressionContainer";
  node.value.expression = {
    type: "Identifier",
    name: `this.state.${node.value.value}`,
  };
  addToState(node.value.value);
}

export function nameClassName(node) {
  node.name.name = `className`;
}

export function addToState(val) {
  //state = {...state, val}
}

export function parseAngularExpression(expr) {
  return expr.endsWith(";") ? expr.slice(0, -1) : expr;
}

export function createIfShow(j, left, right) {
  return j.jsxExpressionContainer(j.logicalExpression("&&", left, right));
}