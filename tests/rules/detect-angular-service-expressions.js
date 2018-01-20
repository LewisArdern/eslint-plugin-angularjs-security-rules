/**
 * @fileoverview Test for detect-angular-service-expressions rule
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-angular-service-expressions");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-angular-service-expressions", rule, {
  valid: [
    { code: "foo()" } // no need to look for valid as we are just doing detection 
  ],    
  invalid: [
    {
      code: "$compile(element, transclude, maxPriority);",
      errors: [
        { message: "The method $compile can be dangerous" }
      ],
    },
    {
      code: "$parse(expression);",
      errors: [
        { message: "The method $parse can be dangerous" }
      ]
    },
    {
      code: "$interpolate(text, [mustHaveExpression], [trustedContext], [allOrNothing]);",
      errors: [
        { message: "The method $interpolate can be dangerous" }
      ]
    }
  ]
}); 
