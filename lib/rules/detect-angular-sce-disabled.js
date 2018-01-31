/**
 * @fileoverview Rule to detect use of $sceProvider set to false  
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function (context) {
    return {
      // TODO: Identify best way to identify variable declariation for $sceProvider to make this rule smarter.
      // it will miss var x = $sceDelegateProvider;  x.enabled(false);
      // Could just look for the use of $sceProvider in the meantime, but for now rule serves a purpose.
      MemberExpression: function (node) {
        if (node.object.name === '$sceProvider' && node.property.name === 'enabled') {
          var args = node.parent.arguments[0];
          if (typeof args !== undefined) {
            if (args.value === false || args.raw === false) {
              context.report(node, "$sceProvider is set to false");
            }
          }
        };
      }
    };
  }
};
