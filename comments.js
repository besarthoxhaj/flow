'use strict';
/* @flow */

var add = (a/*:number*/,b/*:number*/)/*:number*/ => a + b;
add('1',2);

/*:: type Hello = (a:number,b:number) => number */
var hello/*:Hello*/ = (a,b) => a * b;

hello('1',2);
