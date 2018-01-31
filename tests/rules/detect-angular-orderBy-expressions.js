/**
 * @fileoverview Test for detect-angular-sce-disabled rule
 * @author Lewis Ardern
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/detect-angular-orderBy-expressions");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("detect-angular-orderBy-expressions", rule, {
  valid: [
    { code: "$filter('filter')(array, expression, comparator, anyPropertyKey)" } // no need to look for valid as we are just doing detection 
  ],    
  invalid: [
    {
      code: "$filter('orderBy')(collection, expression, reverse, comparator)",
      errors: [
        { message: "The method $filter('orderBy') can be dangerous" }
      ],
    }
  ]
}); 
