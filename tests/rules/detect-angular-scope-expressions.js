/**
 * @fileoverview Test for detect-angular-scope-expressions rule
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-angular-scope-expressions");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-angular-scope-expressions", rule, {
  valid: [
    { code: "foo()" } // no need to look for valid as we are just doing detection 
  ],    
  invalid: [
    {
      code: "$scope.$evalAsync('result = name.' + userInput);",
      errors: [
        { message: "The method $evalAsync can be dangerous" }
      ],
    },
    {
      code: "$scope.$eval('test = name.' + userInput);",
      errors: [
        { message: "The method $eval can be dangerous" }
      ]
    },
    {
      code: "$scope.$apply('test = name.' + userInput);",
      errors: [
        { message: "The method $apply can be dangerous" }
      ]
    },
    {
      code: "$scope.$applyAsync('test = name.' + userInput);",
      errors: [
        { message: "The method $applyAsync can be dangerous" }
      ]
    },
    {
      code: "$scope.$watch(watchExpression, listener, [objectEquality]);",
      errors: [
        { message: "The method $watch can be dangerous" }
      ]
    },
    {
      code: "$scope.$watchGroup(watchExpression, listener);",
      errors: [
        { message: "The method $watchGroup can be dangerous" }
      ]
    },
    {
      code: "$scope.$watchCollection(obj, listener);",
      errors: [
        { message: "The method $watchCollection can be dangerous" }
      ]
    }
  ]
}); 
