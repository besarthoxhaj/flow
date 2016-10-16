'use strict';
/* flow */

type Result = {status:string,errorCode?:number};
// type Result = Done | Error;
// type Done = {status:'done'};
// type Error = {status:'error',errorCode:number};
function getErrorCode(result:Result):number {
  switch (result.status) {
    case 'error':
      return result.errorCode;
    default:
      return 0;
  }
}
