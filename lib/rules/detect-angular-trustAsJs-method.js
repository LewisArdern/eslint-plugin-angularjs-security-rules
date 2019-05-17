/**
 * @fileoverview Rule to detect use of explcility trusted content
 * @author Lewis Ardern
*/

"use strict";

module.exports = {

  create: function (context) {
    return {
      MemberExpression: function (node) {
          if (node.object.name == "$sce" && node.property.name == "trustAsJs") {
            context.report(node, `The use of $sce.trustAsJs can be dangerous`);
          }
      },
      "MemberExpression[property.name='trustAsJs'] MemberExpression[property.name='$sce'] ThisExpression": function (node) {
          context.report(node, `The use of $sce.trustAsJs can be dangerous`);
      }
    };
  }
};