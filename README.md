# Angular language picker 
an unoficial fork that aims to supports angular-gettext

The following information are just unimplemented proposal!

## Demo

https://azachar.github.io/angular-language-picker/example

## Dependencies

Dependencies for this module include:

* `angular 1.2.x`
* `angular-bootstrap`

Install these with bower and make sure they are included in your page.

## Install

```bash
bower install azachar/angular-language-picker --save
```

## Usage

Add `language-picker` to your angular module:

```js
var module = angular.module('exampleApp', ['language-picker']);
```

Specify `supported-languages` attribute, which supplies a list of supported languages by code. Specify them with codes using lowdash.

```html
<language-picker supported-languages="['en_US', 'fr_CA']" on-language-change="onLanguageChange"></language-picker>
```


```js
$scope.onLanguageChange = function (lang) {
  $scope.currentLang = lang;
});
```

if you are using 'angular-gettext' use

```js
$scope.onLanguageChange = function (lang) {
  gettextCatalog.setCurrentLanguage(lang);
});
````

