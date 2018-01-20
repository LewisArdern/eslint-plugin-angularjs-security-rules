/**
 * @fileoverview Rule to detect use of dangerous AngularJS expressions 
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      MemberExpression: function (node) {
        // These methods are called via $scope or $rootScope most of the time, so they will be a MemberExpression.
        // TODO: Only time it might not be picked up is in custom directives, but need to test. 
        const expressions = ['$eval', '$evalAsync', '$apply', '$applyAsync', '$watch', '$watchGroup', '$watchCollection'];

        expressions.map(expression => {
          if (expression.indexOf(node.property.name) === 0 && expression.length === node.property.name.length) {
            context.report(node, `The method ${node.property.name} can be dangerous`);
          }
        })
      }
    };
  }
};
