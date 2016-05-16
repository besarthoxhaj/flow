/* @flow */

function length(x) {
  return x.length;
}

var total = length("Hello") + length(null);

/*
  ERROR
  property `length`
  Property cannot be accessed on possibly null value
  null: null.js:4
  See also: function call: null.js:7

  NOTE
  'null.length' does not exists
*/
