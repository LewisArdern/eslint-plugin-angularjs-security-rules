/**
 * @fileoverview Rule to detect use of explcility trusted content
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      "CallExpression[callee.property.name=trustAs][callee.object.name=$sce]": function (node) {
        if (node.arguments[1] && node.arguments[1].type === 'Literal') {
          return;
        } else {
          context.report(node, `The use of $sce.trustAs can be dangerous`);
        }
      },
      "CallExpression[callee.property.name=trustAs] MemberExpression[property.name=$sce]": function (node) {
        var args = node.parent.parent.arguments;
        if (args && args[1].type === 'Literal') {
          return;
        } else {
          context.report(node, `The use of $sce.trustAs can be dangerous`);
        }
      }
    };
  }
};