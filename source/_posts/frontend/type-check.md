---
title: javascript type check
tag: type check
cover: /images/type-check.png
categories:
  - FRONTEND
---
In this article, How to Check the Type of a Variable or Object in JavaScript? In JavaScript, the typeof operator is used to determine the typeof an object or variable. JavaScript, on the other hand, is a dynamically typed (or weakly typed) language. This indicates that a variable can have any type of value. The type of the value assigned to a variable determines the type of the variable.

## Check Undefined
```javascript
const variable = undefined;

typeof variable; // 'undefined'
// or
Object.prototype.toString.call(variable); // '[object Undefined]'
```
## Check Null
```javascript
const empty = null;

empty === null; // true
// or
Object.prototype.toString.call(empty); // '[object Null]'
```

## Check Array
```javascript
const arr = [];

arr instanceof Array; // true
// or
Array.isArray(arr); // true
// or
Object.prototype.toString.call(arr); // '[object Array]'
```

## Check Map
```javascript
const map = new Map();

Object.prototype.toString.call(map); // '[object Map]'
```

## Check Boolean
```javascript
const bool = true;

Object.prototype.toString.call(bool); // '[object Boolean]'
```

## Check Number
```javascript
const num = 1;

Object.prototype.toString.call(num); // '[object Number]'
```

## Check String
```javascript
const str = 'str';

Object.prototype.toString.call(str); // '[object String]'
```

## Check Symbol
```javascript
const sym = Symbol('sym');

Object.prototype.toString.call(sym); // '[object Symbol]'
```

## Check Object
```javascript
const obj = {};

Object.prototype.toString.call(obj); // '[object Object]'
```

## Check Function
```javascript
function fn () {};
// or
const fn = () => {};
// or
const fn = function () {};

Object.prototype.toString.call(fn); // '[object Function]'
// or
typeof fn; // 'function'
```

## Check Error
```javascript
const err = new Error();

Object.prototype.toString.call(err); // '[object Error]'
```

## Check RegExp
```javascript
const reg = new RegExp();

Object.prototype.toString.call(reg); // '[object RegExp]'
```

## Check Math
```javascript
Object.prototype.toString.call(Math); // '[object Math]'
```

## Check Document
```javascript
const doc = new Document();

Object.prototype.toString.call(doc); // '[object Document]'
```

## Check Window
```javascript
Object.prototype.toString.call(window); // '[object Window]'
```
