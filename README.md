# AngularJS Security Rules For ESLint

These rules are to supplement the security issues documented in my talks at [OWASP London](https://www.slideshare.net/LewisArdern/owasp-london-so-you-thought-you-were-safe-using-angularjs-think-again) and [FluentConf](https://www.slideshare.net/LewisArdern/so-you-thought-you-were-safe-using-angularjs-think-again) around AngularJS Security.

They are currently used as points of interest that would need to be investigate further, but in the upcoming releases they will be a lot more useful when developers write code.

# Usage

These rules can be used by downloading the [Config](https://github.com/LewisArdern/eslint-config-angular-security) which includes the installation settings.

## Rules

The current ruleset supports only Angular 1.x issues, and can be noisy, but they are a work in progress. 

Current rules are:
* detect-angular-element-methods
* detect-angular-open-redirect
* detect-angular-orderBy-expressions
* detect-angular-resource-loading
* detect-angular-sce-disabled
* detect-angular-scope-expressions
* detect-angular-service-expressions
* detect-angular-trustAs-methods
* detect-angular-trustAsCss-method
* detect-angular-trustAsHtml-method
* detect-angular-sce-disabled
* detect-angular-trustAsJs-method
* detect-angular-trustAsResourceUrl-method
* detect-angular-trustAsUrl-method
* detect-third-party-angular-translate

TODO:
* Each rule needs better detection, and possibly taint analysis
* Add more rules related to Angular 1.0 - 5 in mind.
* Add Angular 2/4 security issues such as [bypassSecurityTrustHtml](https://angular.io/api/platform-browser/DomSanitizer#bypassSecurityTrustHtml) 

If you feel anything is missing or would like to see additional rules added, feel free to write an [issue](https://github.com/LewisArdern/eslint-plugin-angularjs-security-rules/issues)