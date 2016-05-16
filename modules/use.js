/* @flow */

import type { userId, user } from './types.js';

var anotherUser:user = {
  id:'8475',
  lastName:'Bes'
};

/*
  ERROR
  property `name`
  Property not found in
  object literal: modules/use.js:5

  ERROR
  string
  This type is incompatible with
  number: modules/types.js:6

  NOTE
 */
