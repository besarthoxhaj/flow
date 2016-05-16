/* @flow */

function add (x) {
  return x * 5;
}

module.exports = add;

/*
  ERROR
  parameter `x`: /Users/besartshyti/Desktop/learn-facebook-flow/modules/one.js:4
  Missing annotation

  NOTE
  Flow is able to infer most types in your program for you,
  but there is one restriction imposed on this rule: You must
  annotate the exports of a module explicitly.
 */
