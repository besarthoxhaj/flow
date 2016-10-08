/* @flow */

class MyClass {
  foo: string;
  constructor(foo:string) {
    this.foo = foo;
  }
  bar():string {
    return this.foo;
  }
}

var myInstance:MyClass = new MyClass('foo');
(myInstance.foo:string);
(myInstance.bar():string);

/**
 * Example of a class declaration
 *
 */
// class Person {
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }
//   describe() {
//     return {
//       name:this.name,
//       age:this.age
//     };
//   }
// }

/**
 * sub classing with extends
 *
 */
// class Hero extends Person {
//   fly() {
//     console.log('My name is ' + this.name + ' and I can fly! ');
//   }
// }

/**
 * super class calls with super
 */
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   speak() {
//     console.log(this.name + ' makes a noise.');
//   }
// }
//
// class Lion extends Cat {
//   speak() {
//     super.speak();
//     console.log(this.name + ' roars.');
//   }
// }

/**
 * Mix-ins
 * Abstract subclasses or mix-ins are templates for classes.
 * An ECMAScript class can only have a single superclass, so multiple
 * inheritance from tooling classes, for example, is not possible.
 * The functionality must be provided by the superclass.
 */
