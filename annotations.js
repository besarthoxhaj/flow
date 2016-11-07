/* @flow */

function foo<Bes>(x:Array<Bes>,y:number):number {
  return x.length * y;
}

var a = foo(['2'],42);

type GenericObject<T> = { foo: T };

function polyFactory(x):GenericObject<*> {
  return {foo:x};
}

var numberObject = polyFactory(1);

function decide(x):number|string {
  if(x < 5) {
    return 'string';
  } else {
    return 1;
  }
}

var mat = decide(10);

/*
  ERROR
  number
  This type is incompatible with the expected return type of
  string: annotations.js:3

  NOTE
  The annotation says the function will return a string.
  While it returns a number.
  That's an error
 */

 var o: ?string = null;

type Compose<A,B,C> = (
  x:((a:B) => C),
  y:((b:A) => B)
) => ((z:A) => C);

const compose = function<A,B,C>(f:((a:B) => C),g:((b:A) => B)) {
  return function(x:A):C {
    return f(g(x));
  }
}

var addOne = (x:number):number => x + 1;
var timesTwo = (y:number):number => y * 2;
// var addExclamation = (x:number):string => '!' + x;
var result = compose(addOne,timesTwo);
// console.log('res',res);

// const composeNary = (...args) => args.reduce(compose);
// console.log(composeNary(addExclamation, String, addOne)(5))
