# easy-uid

[![Build Status](https://travis-ci.org/mjancarik/easy-uid.svg?branch=master)](https://travis-ci.org/mjancarik/easy-uid) [![dependencies Status](https://david-dm.org/mjancarik/easy-uid/status.svg)](https://david-dm.org/mjancarik/easy-uid)
[![Coverage Status](https://coveralls.io/repos/github/mjancarik/easy-uid/badge.svg?branch=master)](https://coveralls.io/github/mjancarik/easy-uid?branch=master)
[![NPM package version](https://img.shields.io/npm/v/easy-uid/latest.svg)](https://www.npmjs.com/package/easy-uid)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Easy uid is based on [gist](https://gist.github.com/jed/982883). It is tiny module without external dependencies. It is useful for generating uid where is no need horizontal scaling. For example: React Components, etc.

## Installation

```
npm i easy-uid --save
```

## Usage

``` javascript
import uid from 'easy-uid';

uid(); //jls30zst-fcd145e4-3277-40a9-bdbd-64195d2ad9c9
```
