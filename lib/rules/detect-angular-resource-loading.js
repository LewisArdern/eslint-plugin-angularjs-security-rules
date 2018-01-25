/**
 * @fileoverview Rule to detect use of $sceDelegateProvider whitelists resources
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function (context) {
    return {
      MemberExpression: function (node) {
        if (node.object.name == '$sceDelegateProvider' && node.property.name == 'resourceUrlWhitelist') {
          context.report(node, "$sceDelegateProvider whitelisting can be introduce security issues");
        };
      }
    };
  }
};
