'use strict';
/* @flow */

// type AddType = (a:number,b:number) => number;
// var addFunction:AddType = (a,b) => a+b;
// var result = addFunction(1,1);
// var mutate = result + 'no';
// var putIn = addFunction(mutate,1); // <-- error!

// ---------------------------------------------------------------

type Calc = (a:number,b:number) => number;
type ApplyCalculation = (a:Calc,b:Array<number>) => number;

// ---------------------------------------------------------------

type Iteration<Input,Output> = (a:Input) => Output;

type Map<Input,Output> = (a:Iteration<Input,Output>,b:Array<Input>) => Array<Output>;

var iterateAround = (a) => a.length;

iterateAround('hello');

// var mapAround:Map = () => {};

// type Map<T,R> = (fn:(x:T) => R, Array<T>) => Array<T>
