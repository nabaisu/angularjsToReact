// example of a ng-repeat expression is the following:
// ng-repeat="item in items"
// ng-repeat="(val, i) in myObj"
// ng-repeat="(name, age) in {'adam':10, 'amalie':12}"

import { createIfShow, findHTMLAttributes } from "../helper";

export const ngRepeatExpression = (j, source) => {
  const res = { variable: "", expression: "" };
  const root = j(source)

  let vars;
  const node = root
    .find(j.BinaryExpression, { type: "BinaryExpression", operator: "in" })
    .get().node;

  const { left, right } = node;
  switch (left.type) {
    case "Identifier":
      res.variable = [left.name];
      break;
    case "SequenceExpression":
      vars = [];
      left.expressions.map((item) => {
        vars.push(item.name);
      });
      res.variable = vars;
      break;
    default:
      res.variable = [];
      break;
  }

  switch (right.type) {
    case "Identifier":
      res.expression = [right.name];
      break;
    case "ObjectExpression":
      vars = {};
      right.properties.map((prop) => {
        vars[prop.key.value] = prop.value.value;
      });
      res.expression = vars;
      break;
    case "ArrayExpression":
      vars = [];
      right.expressions.map((item) => {
        vars.push(item.value);
      });
      res.expression = vars;
      break;
    default:
      res.expression = [];
      break;
  }

  return res;
};
