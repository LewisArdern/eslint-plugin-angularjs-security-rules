/**
 * @fileoverview Rule to detect use of explcility trusted content
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      CallExpression: function (node) {
        const expressions = ['trustAs', 'trustAsHtml', 'trustAsUrl','trustAsJs','trustAsCss','trustAsResourceUrl'];

        expressions.map(expression => {              
          if (node.callee.object.name === "$sce" && expression.indexOf(node.callee.property.name) === 0 && expression.length === node.callee.property.name.length) {
            context.report(node, `The use of $sce.${node.callee.property.name} can be dangerous`);
          }
        })
      }
    };
  }
};
