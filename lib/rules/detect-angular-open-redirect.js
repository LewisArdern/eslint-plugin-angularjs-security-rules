/**
 * @fileoverview Rule to detect use of $window.location.href
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function (context) {
    return {
      MemberExpression: function (node) {
        if (node.object.name === '$window' && node.property.name === 'location' && node.parent.property.name === 'href') {
          context.report(node, "Use of $window.location.href can lead to open-redirect");
        };
      }
    };
  }
};
