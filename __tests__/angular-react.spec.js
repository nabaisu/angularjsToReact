import { classNameFn } from "../angular/attributes/class-name";
import { ngClickFn } from "../angular/ng-stuff/ng-click";
import { transform } from "./helper/testUtil";
import { inputClassName, outputClassName } from "./checks/class-name";
import { inputNgClick, outputNgClick } from "./checks/ng-click";
import { inputNgModel, outputNgModel } from "./checks/ng-model";
import { ngModelFn } from "../angular/ng-stuff/ng-model";
import { inputNgIf, outputNgIf } from "./checks/ng-if";
import { ngIfFn } from "../angular/ng-stuff/ng-if";
import { inputWrapClass, outputWrapClass } from "./checks/wrap-in-class";
import { wrapClassFn } from "../angular/wrap-class";
import { inputNgClass, outputNgClass } from "./checks/ng-class";
import { ngClassFn } from "../angular/ng-stuff/ng-class";

describe("Angular to React", () => {
  describe("Angular Element Attributes", () => {
    it("class to className", () => {
      const output = transform(inputClassName, classNameFn);
      expect(output.trim()).toEqual(outputClassName.trim());
    });

    it("ng-click to onClick", () => {
      const output = transform(inputNgClick, ngClickFn);
      expect(output.trim()).toEqual(outputNgClick.trim());
    });

    it("ng-model to value", () => {
      const output = transform(inputNgModel, ngModelFn);
      expect(output.trim()).toEqual(outputNgModel.trim());
    });

    it("ng-if to react", () => {
      const output = transform(inputNgIf, ngIfFn);
      expect(output.trim()).toEqual(outputNgIf.trim());
    });
    
    it("ng-class", () => {
      const output = transform(inputNgClass, ngClassFn)
      expect(output.trim()).toEqual(outputNgClass.trim())
    });      //+ 784
    
    it.todo("ng-show");       //+ 1314
    it.todo("ng-hide");       //+ 411
    it.todo("ng-disabled");   //+ 320
    it.todo("ng-repeat");     //+ 318
    it.todo("ng-value");      //+ 294
    it.todo("ng-include");    //+ 288
    it.todo("ng-bind");       //+ 207
    it.todo("ng-required");   //+ 136
    it.todo("ng-bind-html");  //+ 152
    it.todo("ng-controller"); //+ 110
    it.todo("ng-change");     //+ 101
    it.todo("ng-href");       //+ 93
    it.todo("ng-blur");       //+ 92
    it.todo("ng-options");    //+ 82
    it.todo("ng-focus");      //+ 73
    it.todo("ng-transclude"); //+ 42
    it.todo("ng-keyup");      //+ 23
    it.todo("ng-keydown");    //+ 13
    
    
    it.todo("ng-false");    //+ 3
    it.todo("ng-true");     //+ 3
    it.todo("ng-init");     //+ 72
    it.todo("ng-dropdown-multiselect"); //+ 9
    it.todo("ng-switch-when"); //+ 89

    it.todo("ng-checked"); //+ 10
    it.todo("ng-app"); // this is important!
    it.todo("ng-enter");      //+ -
    it.todo("ng-file");       //+ ?
    it.todo("ng-grid");       //+ 10
    it.todo("ng-pattern");    //+ 7
    it.todo("ng-attr-id");  
  });

  describe('Class', () => {
    it('wraps to class and add constructor', () => {
      const output = transform(inputWrapClass, wrapClassFn);
      expect(output.trim()).toEqual(outputWrapClass.trim());
    })
  })
});
