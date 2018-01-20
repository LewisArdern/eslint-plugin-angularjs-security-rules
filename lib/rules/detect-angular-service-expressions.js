/**
 * @fileoverview Rule to detect use of dangerous AngularJS expressions 
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      CallExpression: function (node) {
        const expressions = ['$compile', '$parse', '$interpolate'];

        expressions.map(expression => {
          if (expression.indexOf(node.callee.name) === 0 && expression.length === node.callee.name.length) {
            context.report(node, `The method ${node.callee.name} can be dangerous`);
          }
        })
      }
    };
  }
};
