# Deep-Clone

A single method library for cloning any kind of data structure in JavaScript.

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
