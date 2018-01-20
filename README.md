# AngularJS Security Rules For ESLint

These rules are to supplement the security issues documented in my talks at [OWASP London](https://www.slideshare.net/LewisArdern/owasp-london-so-you-thought-you-were-safe-using-angularjs-think-again) and [FluentConf](https://www.slideshare.net/LewisArdern/so-you-thought-you-were-safe-using-angularjs-think-again) around AngularJS Security.

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
* detect-third-party-angular-translate

TODO:
* Each rule needs better detection, and possibly taint analysis
* Add more rules related to Angular 1.0 - 5 in mind.
* Add Angular 2/4 security issues such as [bypassSecurityTrustHtml](https://angular.io/api/platform-browser/DomSanitizer#bypassSecurityTrustHtml) 

If you feel anything is missing or would like to see additional rules added, feel free to write an [issue](https://github.com/LewisArdern/eslint-plugin-angularjs-security-rules/issues)