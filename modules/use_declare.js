'use strict';
/* @flow */

/**
 * declare [var|type|module|function|class] <name> {
 *  declare [...]
 * }
 */

declare module 'myFakeModule' {
  declare var name:string;
};

var fake = require('myFakeModule');

fake.noExists // <-- property `noExists`. Property not found in module `myFakeModule`
fake.name // <-- all good
