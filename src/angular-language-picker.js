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
            callback: '&onLanguageChange'
          },
          replace: true,
          templateUrl: 'lang-picker-button.html',
          link: function (scope, el, attrs, ctrl) {

            function getLangCodeWithLowDash(str) {
                  var splitLocale = str.split('-');
                  var localeCode = 'en_US';

                  if (splitLocale.length > 1) {
                      localeCode = (splitLocale[0].toLowerCase() + '_' + splitLocale[1].toUpperCase());
                  }
                  else {
                      localeCode = splitLocale[0].toLowerCase();
                  }

                  return localeCode;
            }

            function createInfo(lang){
                  var langInfo = langMap[lang] || {
                    nativeName: lang,
                    englishName: lang
                  };
                  langInfo.lang = lang;
                  langInfo.code = getLangCodeWithLowDash(lang);
                  return langInfo;
            }

            scope.open = function() {
              $modal.open({
                templateUrl: 'lang-picker.html',
                controller: function($scope, $modalInstance) {
                  $scope.close = $modalInstance.close;
                  $scope.limit = 24;
                  $scope.supportedLanguages = scope.supportedLanguages;
                  $scope.langInfo = scope.supportedLanguages.map(function (lang) {
                      return createInfo(lang);
                  });

                  $scope.onLanguageChange = function(langInfo) {
                    scope.callback(langInfo);
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
