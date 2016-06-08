/* @flow */

/**
 * Function type of the form:
 * (P1: T1, .., Pn: Tn) => U
 */
type funSum = (a:string,b:number) => number;

function doMagic (fun:funSum,num1,num2) {
  return fun(num1,num2);
}

function hello (a,b):void {
  return undefined;
}

doMagic(hello,2,3);

// <X> (x:X) => X
// function foo<X>(x:X):X {
//   return x;
// }
//
// function bar <Y>(x:X):number {
//
// }
//
// var x: number = foo(0);
// var y: number = foo('');


/*
  A function type is of the form (P1: T1, .., Pn: Tn) => U

*/
