/**
 * @fileoverview Test for detect-angular-resource-loading rule
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-angular-resource-loading");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-angular-resource-loading", rule, {
  valid: [
    { code: "$scope.$foo()" }
  ],
  invalid: [
    {
      code: "$sceDelegateProvider.resourceUrlWhitelist([ '**' ]);",
      errors: [
        { message: "$sceDelegateProvider whitelisting can be introduce security issues" }
      ]
    },
  ]
}); 
