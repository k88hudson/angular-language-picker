# Angular language picker 
an unoficial fork that aims to supports angular-gettext

The following information are just unimplemented proposal!

## Demo

https://github.com/azachar/angular-language-picker/example/index.html

## Install

```bash
bower install azachar/angular-language-picker --save
```
 
## Usage

Ensure that your `index.html` contains 

```html
<script src="bower_components/angular-language-picker/dist/angular-language-picker.js"></script>
<div ng-include='"bower_components/angular-language-picker/dist/angular-language-picker-template.html"'></div>
```

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

### Customization

You can customize language picker template by defining your template, simply copy and paste the template `bower_components/angular-language-picker/dist/angular-language-picker-template.html` into your project and refere it in the index.html.

