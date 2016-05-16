/* @flow */

function foo(x) {
  return x.length;
}

var res = foo('Hello') + foo(42);

/*
  ERROR
  property `length`
  Property not found in
  Number: dynamic.js:4

  NOTE
  Dynamic code checking means that flow is able to detect 'foo(42)' will
  return 'undefined'.
 */
