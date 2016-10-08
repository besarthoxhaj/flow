'use strict';

// function identity<T>(arg:T):T {
//  return arg;
// }
//
// let output = identity('hello, world!');
//
// function sum(a:number,b:number):number {
//   return a+b;
// }
//
// sum(output,1); // => error

// =======================================================

type SumFun = (a:number,b:number) => number;

const sum:SumFun = (c,d) => {
  return c+d;
}

sum('hello','world'); // => error

// =======================================================
