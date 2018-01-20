/**
 * @fileoverview Rule to detect use of angular.element
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function (context) {
    return {
      MemberExpression: function (node) {
        // TODO: Create some kind of taint analysis to identify use of after,append,html,prepend,replaceWith,wrap
        // Not as simple as angular.element().after e.g let element = angular.element(), and then use element.after() etc. 
        if (node.object.name === 'angular' && node.property.name === 'element') {
          context.report(node, "Use of angular.element can lead to XSS if after,append,html,prepend,replaceWith,wrap are used with user-input");
        };
      }
    };
  }
};
