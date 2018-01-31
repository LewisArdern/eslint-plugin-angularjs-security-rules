/**
 * @fileoverview Rule to detect use of the orderBy filter  
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      CallExpression: function (node) {

        //TODO: Look at identifying HTML {{ expressions for the | orderBy  }}
        //TODO: Look at picking out a function called orderByFilter
        if (node.callee.name == "$filter") {
          var args = node.arguments[0];
          if (typeof args !== undefined) {
            if (args.raw === 'orderBy' || args.value === 'orderBy') {
              context.report(node, `The method ${node.callee.name}('orderBy') can be dangerous`);
            }
          }
        }
      }
    }
  },
};
