/**
 * @fileoverview Test for detect-angular-trustAs-methods
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-angular-trustAsResourceUrl-method");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-angular-trustAsResourceUrl-method", rule, {
  valid: [
    { code: "$sce.ParseAsHtml()" } // no need to look for valid as we are just doing detection 
  ],    
  invalid: [
    {
      code: "$sce.trustAsResourceUrl(value);",
      errors: [
        { message: "The use of $sce.trustAsResourceUrl can be dangerous" }
      ],
    }
  ]
}); 
