/* @flow */

function foo(x, y = false) {}

function bar(z, ...w) {}

foo(0);

bar('h', 'e', 'l', 'l', 'o');
bar('h', 2, 3);

// foo (z:number, y?: boolean):void
// bar (z:string, ...w: Array<number|string>):void
