/* @flow */

function foo(x:string,y:number):string {
  return x.length * y;
}

foo('Hello',42);

/*
  ERROR
  number
  This type is incompatible with the expected return type of
  string: annotations.js:3

  NOTE
  The annotation says the function will return a string.
  While it returns a number.
  That's an error
 */
