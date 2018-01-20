/**
 * @fileoverview Test for detect-angular-sce-disabled rule
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-angular-sce-disabled");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-angular-sce-disabled", rule, {
  valid: [
    { code: "$sceProvider.enabled(true)" }
  ],    
  invalid: [
    {
      code: "$sceProvider.enabled(false)",
      errors: [
        { message: "$sceProvider is set to false" }
      ]
    },
  ]
}); 
