'use strict';
/* @flow */

// type F1 = (x:P1) => R1;
// type F2 = (x:P2) => R2;

function f(callback:(x:string) => ?number):number {
  return callback("hi") || 0;
}

/**
 * What kinds of functions can we pass to f?
 * Based on the subtyping rule above, then we
 * can pass a function whose parameter type
 * is a supertype of string and whose return
 * type is a subtype of ?number.
 */

function g(x:?string):number {
  return x ? x.length : 0;
}

/**
 * The body of f will only ever pass string values
 * into g, which is safe because g takes at least
 * string by taking ?string. Conversely, g will only
 * ever return number values to f, which is safe
 * because f handles at least number by handling ?number.
 */

// f(g);
