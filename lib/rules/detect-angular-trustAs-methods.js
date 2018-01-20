/**
 * @fileoverview Rule to detect use of explcility trusted content
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      "CallExpression": function (node) {
        const expressions = ['trustAs', 'trustAsHtml', 'trustAsUrl','trustAsJs','trustAsCss','trustAsResourceUrl'];
        expressions.map(expression => {  
          console.log(expression)            
          if ((expression.indexOf(node.callee.name) == 0) && (expression.length == node.callee.name.length) || ((node.callee.property) && (node.callee.property.name == expression))) {
            context.report(node, `The use of $sce.${node.callee.property.name} can be dangerous`);
          }
        })
      }
    };
  }
};