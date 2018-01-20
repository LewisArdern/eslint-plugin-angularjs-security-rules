/**
 * @fileoverview Test for detect-angular-trustAs-methods
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-angular-trustAs-methods");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-angular-trustAs-methods", rule, {
  valid: [
    { code: "$sce.ParseAsHtml()" } // no need to look for valid as we are just doing detection 
  ],    
  invalid: [
    {
      code: "$sce.trustAs($sce.HTML, value);",
      errors: [
        { message: "The use of $sce.trustAs can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAs($sce.CSS, value);",
      errors: [
        { message: "The use of $sce.trustAs can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAs($sce.JS, value);",
      errors: [
        { message: "The use of $sce.trustAs can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAs($sce.RESOURCE_URL, value);",
      errors: [
        { message: "The use of $sce.trustAs can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAs($sce.URL, value);",
      errors: [
        { message: "The use of $sce.trustAs can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAsHtml(value);",
      errors: [
        { message: "The use of $sce.trustAsHtml can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAsUrl(value);",
      errors: [
        { message: "The use of $sce.trustAsUrl can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAsJs(value);",
      errors: [
        { message: "The use of $sce.trustAsJs can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAsCss(value);",
      errors: [
        { message: "The use of $sce.trustAsCss can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAsResourceUrl(value);",
      errors: [
        { message: "The use of $sce.trustAsResourceUrl can be dangerous" }
      ],
    },
  ]
}); 
