/**
 * @fileoverview Rule to detect use of $translateProvider or translateSanitization which can lead to XSS
 * @author Lewis Ardern
*/

"use strict";

module.exports = {
  create: function(context) {
    return { 
      MemberExpression: function(node) {           
        if (node.object.name == '$translateProvider' && node.property.name == 'translations') {
            context.report(node, "The use of $translateProvider can be dangerous");      
        };
        if (node.object.name == '$translateSanitization' && node.property.name == 'useStrategy') {
          context.report(node, "If the $translateSanitization.useStrategy is set to null or blank this can be dangerous");      
      };
      }
    };
  }
};
