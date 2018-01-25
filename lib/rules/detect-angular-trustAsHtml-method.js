/**
 * @fileoverview Rule to detect use of explcility trusted content
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      MemberExpression: function (node) {
          if (node.object.name == "$sce" && node.property.name == "trustAsHtml") {
            context.report(node, `The use of $sce.trustAsHtml can be dangerous`);
          }
      }
    };
  }
};