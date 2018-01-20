/**
 * @fileoverview Rule to detect use of $sceDelegateProvider whitelists resources
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function (context) {
    return {
      CallExpression: function (node) {
        if (node.callee.object.name === '$sceDelegateProvider' && node.callee.property.name === 'resourceUrlWhitelist') {
          context.report(node, "$sceDelegateProvider whitelisting can be introduce security issues");
        };
      }
    };
  }
};
