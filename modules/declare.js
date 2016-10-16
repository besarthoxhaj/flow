'use strict';
/* @flow */

declare namespace Bes {
  interface Static {
    add(a:number,b:number):number;
    add(a:number):(b:number) => number;
  }
}
