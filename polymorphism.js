'use strict';
/* @flow */

function fooBad<T>(obj:T):T {
  // do somthing cheeky
  console.log(Math.abs(obj.x));
  return obj;
}
