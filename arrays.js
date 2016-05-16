/* @flow */

function total(numbers:Array<number>) {
  return 'world';
}

total([1,2,3,'Hello']);

/*
  ERROR
  string
  This type is incompatible with
  number: arrays.js:3
  See also: function call: arrays.js:11

  NOTE
  Flow supports annotating functions on arrays
 */
