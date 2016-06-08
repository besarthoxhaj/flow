/* @flow */
// boolean
(true:boolean);
(false:boolean);
('foo':boolean);
// number
(3.14:number);
(42:number);
(NaN:number);
(parseFloat('not a number'):number); // hint: NaN
// string
('foo':string);
('bar':string);
// null
(null:null);
(null:void);
// void
(undefined:void);
(undefined:null);
// optional properites and parameters T|void
function optional_fun(foo?: string) {
  (foo: string|void);
}
optional_fun('foo');
optional_fun(undefined);
optional_fun();
optional_fun(null);

type optional_obj = {foo?:string};
({foo:'foo'}:optional_obj);
({foo:undefined}:optional_obj);
({}:optional_obj);
({foo:null}:optional_obj);
// optional params
function default_fun(foo:string='default foo') {
  (foo:string);
}
default_fun("foo");
default_fun(undefined);
default_fun();
// maybe types
function maybe_fun(foo:?string) {
  (foo: string|void|null);
}
maybe_fun('foo');
maybe_fun(undefined);
maybe_fun();
maybe_fun(null);
// any
function takes_any(x: any):void {}
takes_any(0);
takes_any('');
takes_any({foo:'bar'});

declare var unsafe:any;
(unsafe:number);
(unsafe:string);
(unsafe:{foo:string});
// mixed
(/a/:RegExp)
