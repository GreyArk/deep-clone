# Deep-Cloning
[![Build Status](https://travis-ci.org/GreyArk/deep-cloning.svg?branch=master)](https://travis-ci.org/GreyArk/deep-cloning) [![Coverage Status](https://coveralls.io/repos/github/GreyArk/deep-cloning/badge.svg?branch=master)](https://coveralls.io/github/GreyArk/deep-cloning?branch=master) [![bitHound Overall Score](https://www.bithound.io/github/GreyArk/deep-cloning/badges/score.svg)](https://www.bithound.io/github/GreyArk/deep-cloning)

[![NPM](https://nodei.co/npm/deep-cloning.png)](https://nodei.co/npm/deep-cloning/)

A single method library for (deep) cloning any kind of data structure - like Object, Array, RegExp, Date as well as primitives.

## Usage
```javascript
// Import
const deepClone = require('deepClone');

let arr = [{ a: 0, b: 2}, { a: 3, b: 5}];

let clonedArr = deepClone(arr);

arr[0][a] = 6;
// => [{a: 6, b: 2}, { a: 3, b: 5}];

console.log(clonedArr);
// => [{a: 0, b: 2}, { a: 3, b: 5}]
```
