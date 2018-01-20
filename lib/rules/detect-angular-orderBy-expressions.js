/**
 * @fileoverview Rule to detect use of the orderBy filter  
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      CallExpression: function (node) {
        const expressions = ['$filter'];

        expressions.map(expression => {
          //TODO: Look at identifying HTML {{ expressions for the | orderBy  }}
          //TODO: Look at picking out a function called orderByFilter
          if (expression.indexOf(node.callee.name) === 0 && expression.length === node.callee.name.length) {
            var args = node.arguments[0];
            if(args.raw.indexOf('orderBy') === 0 || args.value.indexOf('orderBy') === 0){
              context.report(node, `The method ${node.callee.name} can be dangerous`);
            }
          }
        })
      }
    };
  }
};
