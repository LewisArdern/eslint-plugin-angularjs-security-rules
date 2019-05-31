/**
 * @fileoverview Rule to detect use of explcility trusted content
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      "CallExpression[callee.property.name=trustAsHtml][callee.object.name=$sce]": function (node) {
        if (node.arguments[0] && node.arguments[0].type === 'Literal') {
          return;
        } else {
          context.report(node, `The use of $sce.trustAsHtml can be dangerous`);
        }
      },
      "CallExpression[callee.property.name=trustAsHtml] MemberExpression[property.name=$sce]": function (node) {
        var args = node.parent.parent.arguments;
        if (args && args[0].type === 'Literal') {
          return;
        } else {
          context.report(node, `The use of $sce.trustAsHtml can be dangerous`);
        }
      }
    };
  }
};