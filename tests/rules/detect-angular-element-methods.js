/**
 * @fileoverview Test for detect-angular-element-methods rule
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-angular-element-methods");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-angular-element-methods", rule, {
  valid: [
    { code: "foo()" } // no need to look for valid as we are just doing detection 
  ],    
  invalid: [
    {
      code: "angular.element()",
      errors: [
        { message: "Use of angular.element can lead to XSS if after,append,html,prepend,replaceWith,wrap are used with user-input" }
      ],
    }
  ]
}); 
