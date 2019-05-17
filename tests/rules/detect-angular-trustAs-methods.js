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
    { code: "$sce.ParseAsHtml()" },
    { code: "this.$sce.ParseAsHtml()" } // no need to look for valid as we are just doing detection 
  ],  
  invalid: [
    {
      code: "$sce.trustAs($sce.HTML, value);",
      errors: [
        { message: "The use of $sce.trustAs can be dangerous" }
      ],
    },
    {
      code: "this.$sce.trustAs($sce.HTML, value);",
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
      code: "this.$sce.trustAs($sce.JS, value);",
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
      code: "this.$sce.trustAs($sce.RESOURCE_URL, value);",
      errors: [
        { message: "The use of $sce.trustAs can be dangerous" }
      ],
    },
    {
      code: "this.$sce.trustAs($sce.URL, value);",
      errors: [
        { message: "The use of $sce.trustAs can be dangerous" }
      ],
    },
    {
      code: "$sce.trustAs($sce.URL, value);",
      errors: [
        { message: "The use of $sce.trustAs can be dangerous" }
      ],
    }
  ]
}); 
