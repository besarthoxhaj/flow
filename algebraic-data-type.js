'use strict';
/* @flow */

/**
 * An algebraic data type is a type formed by combining other types.
 * - product types (tuples and records)
 * - sum types
 */

// Sum types

type StringOrNum = string | number;
type Human = Girl | Boy;
type OneOrMany = Human | Array<Human>;

const x:StringOrNum = 1;
const y:StringOrNum = 'foo';
class Girl {};
class Boy {};
const z:Human = new Girl();

// Product types

type Podium = [First|Winner,Second,Third];

class Winner {};
class First {};
class Second {};
class Third {};
class Forth {};

const xs:Podium = [new First(),new Second(),new Third(),new Forth()];
// const xs:Podium = [new Second(),new Third(),new First()];

type Extend<T,U> = (x:T,y:U) => T & U;
type Name = {name:string};
type Age = {age:number};

var name:Name = {name:'Bes'};
var age:Age = {age:25,month:11};

// todo: look at how was before
var extend:Extend<*,*> = function(x,y) {
  return Object.assign({},x,y);
};

var person = extend(name,age);
console.log('person',person);
