/**
 * @fileoverview Test for detect-angular-open-redirect rule
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-angular-open-redirect");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-angular-open-redirect", rule, {
  valid: [
    { code: "$location.location.location = test" }
  ],    
  invalid: [
    {
      code: "$window.location.href = userInput",
      errors: [
        { message: "Use of $window.location.href can lead to open-redirect" }
      ]
    },
  ]
}); 
