# easy-uid

[![Build Status](https://travis-ci.org/mjancarik/easy-uid.svg?branch=master)](https://travis-ci.org/mjancarik/easy-uid)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/easy-uid)
[![Coverage Status](https://coveralls.io/repos/github/mjancarik/easy-uid/badge.svg?branch=master)](https://coveralls.io/github/mjancarik/easy-uid?branch=master)
[![NPM package version](https://img.shields.io/npm/v/easy-uid/latest.svg)](https://www.npmjs.com/package/easy-uid)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Easy uid is the smallest random URL-friendly uid generator based on `Math.random` for browser and node without external dependencies. It is useful for generating uid where is no need horizontal scaling and cryptographically security. For example: React Components key, element ids, etc.

## Installation

```
npm i easy-uid --save
```

## Usage

``` javascript
import uid from 'easy-uid';

uid(); //1cdcjhb913ov1a
```
