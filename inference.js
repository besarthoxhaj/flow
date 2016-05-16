/* @flow */

function foo(x) {
  return x*10;
}

foo('Hello, world!');


/*
  ERROR
  string
  This type is incompatible with
  number: inference.js:4
  See also: function call: inference.js:7

  NOTE
  Even without annotations flow can infer types.
*/
