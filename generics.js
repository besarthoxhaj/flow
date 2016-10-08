/* @flow */

/**
 * Good function have well-defined and consistent APIs, but are also reusable.
 * One of the main tools in the toolbox for creating reusable components is
 * generics, that is, being able to create a component that can work over a
 * variety of types rather than a single one.
 */

/**
 * Identity function
 */
 function identity<T>(arg:T):T {
  return arg;
 }

let output:identity<string> = identity('hello, world!');

console.log('output',output);

/**
 * The generic function arrayIdentity takes a type
 * parameter T and an argument arg which is an array
 * of T's, and returns an array of Ts.
 */
function arrayIdentity<T>(arg:T[]):T[] {
  // arg.length exists
  return arg;
}

// type of the functions themselves and how to create generic interfaces
// function identity<T>(arg:T):T {
//   return arg;
// }
//
// let myIdentity:<T>(arg:T) => T = identity;

function findMax<T>(arr:T[],compare:(a:T,b:T) => number) {
  var sorted = arr.sort(compare);
  return sorted[sorted.length - 1];
}

function getMax(a,b) {
  return a-b;
}

var data = findMax([5,1,2,3,4],getMax);

console.log('data',data);
