# Angular language picker
A fork that aims to provide out-of-box solution for selecting languages.

[![Build Status](https://travis-ci.org/azachar/angular-language-picker.svg)](https://travis-ci.org/azachar/angular-language-picker) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Issue Stats](http://issuestats.com/github/azachar/angular-language-picker/badge/pr?style=flat)](http://issuestats.com/github/azachar/angular-language-picker) [![Issue Stats](http://issuestats.com/github/azachar/angular-language-picker/badge/issue?style=flat)](http://issuestats.com/github/azachar/angular-language-picker)


# Home Page with examples
http://blog.chocolatejar.eu/angular-language-picker


## Features
* Country's flag http://lipis.github.io/flag-icon-css
* Look and feel customization via templates
* Search between languages if there too many to select from
* Based on Bootstrap 3 and UI Bootstrap 0.14
* Based on https://github.com/mozilla/language-mapping-list

## Install

```bash
bower install azachar/angular-language-picker --save
```

## Development

* The branch ``master`` contains the latest development version
* The documentation is located in the branch ``gh-pages``

* To build distribution use this command
```bash
  grunt build
```
* To include the development live preview into your project use

In the angular-language-picker folder

```bash
  bower link
  grunt dev
```

In your project folder

```bash
  bower link angular-language-picker
```

## Releasing

* Update version in ``package.json``
* Run

```bash
  grunt build
```

* Commit and push to the master
* Tag a new version in the repository
* Generate changelog

```bash
  npm run changelog
```

* Commit and push to the master

## Want to help ?
Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our guidelines for [Contributing](CONTRIBUTING.md).
