'use strict';
/* @flow */

/**
 * Bounded Polymorphism.
 * TypeName<Param:SubType>
 */

function fooBad<T:{x:number}>(obj:T):T {
  // do somthing cheeky
  console.log(Math.abs(obj.x));
  return obj;
}


type GenericObject<T> = { foo: T };

function polyFactory(x:any):GenericObject<*> {
  return {foo:x};
}

var numberObject = polyFactory(1);
