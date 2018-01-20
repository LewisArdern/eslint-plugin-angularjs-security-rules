/**
 * @fileoverview Test for detect-third-party-angular-translate
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-third-party-angular-translate");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-third-party-angular-translate", rule, {
  valid: [
    { code: "foo()" } // no need to look for valid as we are just doing detection 
  ],    
  invalid: [
    {
      code: "$translateSanitization.useStrategy();",
      errors: [
        { message: "If the $translateSanitization.useStrategy is set to null or blank this can be dangerous" }
      ],
    },
    {
      code: "$translateProvider.translations('de', {GREETING: 'Hallo <b>{{name}}</b>'});",
      errors: [
        { message: "The use of $translateProvider can be dangerous" }
      ],
    }
  ]
}); 
