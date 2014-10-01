(function (window, angular) {
  angular
    .module('language-picker', ['templates-languagePicker','ui.bootstrap'])
    .constant('langMap', window.languageMappingList)
    .directive('languagePicker', [
      '$modal',
      'langMap',
      function ($modal, langMap) {
        return {
          restrict: 'AE',
          transclude: true,
          scope: {
            supportedLanguages: '=',
            flags:'=?',
            callback: '&onLanguageChange'
          },
          replace: true,
          templateUrl: 'language-picker-button.tpl.html',
          link: function (scope, el, attrs, ctrl) {
            if (angular.isUndefined(scope.flags)){
              scope.flags = "true";
            }

            function getLangCodeWithLowDash(localeCode) {
                  var splitLocale = localeCode.split('-');
                  var localeCode = 'en_US';

                  if (splitLocale.length > 1) {
                      localeCode = (splitLocale[0].toLowerCase() + '_' + splitLocale[1].toUpperCase());
                  }
                  else {
                      localeCode = splitLocale[0].toLowerCase();
                  }

                  return localeCode;
            }

            function getCountry(localeCode) {
                  var splitLocale = localeCode.split('-');
                  if (splitLocale.length > 1) {
                      return splitLocale[1].toLowerCase();
                  }
                  return localeCode;
            }

            function createLanguageObj(locale){
                  var language = langMap[locale] || {
                    nativeName: locale,
                    englishName: locale
                  };
                  language.code = locale;
                  language.country = getCountry(locale);
                  language.asLowDashCode = function (){
                    return getLangCodeWithLowDash(locale);
                  }
                  return language;
            }

            scope.open = function() {
              $modal.open({
                templateUrl: 'language-picker-dialog.tpl.html',
                controller: function($scope, $modalInstance) {
                  $scope.close = $modalInstance.close;
                  $scope.limitMin = 4;
                  $scope.limitMax = 24;
                  $scope.flags = scope.flags;
                  $scope.languages = scope.supportedLanguages.map(function (lang) {
                      return createLanguageObj(lang);
                  });

                  $scope.onLanguageChange = function(language) {
                    scope.callback(language);
                    $modalInstance.close();
                  };
                }
              });
            };
          }
        };
      }
    ]);
}(this, this.angular));
