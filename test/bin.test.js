'use strict';
/* @flow */

var util = require('util');
var test = require('tape');
var flow = require('../bin/flow.js');

test('bin', t => {
  var code = `/* @flow */ var c = 'hello';function add(a:number,b:number) {return a + b;};add(c,c);`;
  var res = flow.checkContent('_',code);
  console.log(
    'util.inspect(res,{showHidden:true,depth:null})',
    util.inspect(res,{showHidden:true,depth:null})
  );
  var output = '/* @flow */ var c = \'hello\';function add(a:number,b:number) {return a + b;};add(c,c);'.split('').filter((elm,idx) => {
    if(idx >= 76 && idx <= 84) {
      return true;
    } else {
      return false;
    }
  }).join('');
  console.log('output',output);
  t.end();
});
