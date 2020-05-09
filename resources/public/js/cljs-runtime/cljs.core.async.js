goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30924 = arguments.length;
switch (G__30924) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30925 = (function (f,blockable,meta30926){
this.f = f;
this.blockable = blockable;
this.meta30926 = meta30926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30927,meta30926__$1){
var self__ = this;
var _30927__$1 = this;
return (new cljs.core.async.t_cljs$core$async30925(self__.f,self__.blockable,meta30926__$1));
}));

(cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30927){
var self__ = this;
var _30927__$1 = this;
return self__.meta30926;
}));

(cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30926","meta30926",1893693204,null)], null);
}));

(cljs.core.async.t_cljs$core$async30925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30925");

(cljs.core.async.t_cljs$core$async30925.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async30925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30925.
 */
cljs.core.async.__GT_t_cljs$core$async30925 = (function cljs$core$async$__GT_t_cljs$core$async30925(f__$1,blockable__$1,meta30926){
return (new cljs.core.async.t_cljs$core$async30925(f__$1,blockable__$1,meta30926));
});

}

return (new cljs.core.async.t_cljs$core$async30925(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30931 = arguments.length;
switch (G__30931) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30933 = arguments.length;
switch (G__30933) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30973 = arguments.length;
switch (G__30973) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32815 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32815) : fn1.call(null,val_32815));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32815) : fn1.call(null,val_32815));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30988 = arguments.length;
switch (G__30988) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___32817 = n;
var x_32818 = (0);
while(true){
if((x_32818 < n__4607__auto___32817)){
(a[x_32818] = x_32818);

var G__32819 = (x_32818 + (1));
x_32818 = G__32819;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30989 = (function (flag,meta30990){
this.flag = flag;
this.meta30990 = meta30990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30991,meta30990__$1){
var self__ = this;
var _30991__$1 = this;
return (new cljs.core.async.t_cljs$core$async30989(self__.flag,meta30990__$1));
}));

(cljs.core.async.t_cljs$core$async30989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30991){
var self__ = this;
var _30991__$1 = this;
return self__.meta30990;
}));

(cljs.core.async.t_cljs$core$async30989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30990","meta30990",124511713,null)], null);
}));

(cljs.core.async.t_cljs$core$async30989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30989");

(cljs.core.async.t_cljs$core$async30989.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async30989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30989.
 */
cljs.core.async.__GT_t_cljs$core$async30989 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30989(flag__$1,meta30990){
return (new cljs.core.async.t_cljs$core$async30989(flag__$1,meta30990));
});

}

return (new cljs.core.async.t_cljs$core$async30989(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30992 = (function (flag,cb,meta30993){
this.flag = flag;
this.cb = cb;
this.meta30993 = meta30993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30994,meta30993__$1){
var self__ = this;
var _30994__$1 = this;
return (new cljs.core.async.t_cljs$core$async30992(self__.flag,self__.cb,meta30993__$1));
}));

(cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30994){
var self__ = this;
var _30994__$1 = this;
return self__.meta30993;
}));

(cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30993","meta30993",640975888,null)], null);
}));

(cljs.core.async.t_cljs$core$async30992.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30992");

(cljs.core.async.t_cljs$core$async30992.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async30992");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30992.
 */
cljs.core.async.__GT_t_cljs$core$async30992 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30992(flag__$1,cb__$1,meta30993){
return (new cljs.core.async.t_cljs$core$async30992(flag__$1,cb__$1,meta30993));
});

}

return (new cljs.core.async.t_cljs$core$async30992(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31001_SHARP_){
var G__31007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31001_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31007) : fret.call(null,G__31007));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31002_SHARP_){
var G__31008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31002_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31008) : fret.call(null,G__31008));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32820 = (i + (1));
i = G__32820;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32821 = arguments.length;
var i__4731__auto___32822 = (0);
while(true){
if((i__4731__auto___32822 < len__4730__auto___32821)){
args__4736__auto__.push((arguments[i__4731__auto___32822]));

var G__32823 = (i__4731__auto___32822 + (1));
i__4731__auto___32822 = G__32823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31015){
var map__31016 = p__31015;
var map__31016__$1 = (((((!((map__31016 == null))))?(((((map__31016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31016):map__31016);
var opts = map__31016__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31013){
var G__31014 = cljs.core.first(seq31013);
var seq31013__$1 = cljs.core.next(seq31013);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31014,seq31013__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31032 = arguments.length;
switch (G__31032) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30811__auto___32825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_31066){
var state_val_31067 = (state_31066[(1)]);
if((state_val_31067 === (7))){
var inst_31062 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
var statearr_31068_32826 = state_31066__$1;
(statearr_31068_32826[(2)] = inst_31062);

(statearr_31068_32826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (1))){
var state_31066__$1 = state_31066;
var statearr_31069_32827 = state_31066__$1;
(statearr_31069_32827[(2)] = null);

(statearr_31069_32827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (4))){
var inst_31045 = (state_31066[(7)]);
var inst_31045__$1 = (state_31066[(2)]);
var inst_31046 = (inst_31045__$1 == null);
var state_31066__$1 = (function (){var statearr_31070 = state_31066;
(statearr_31070[(7)] = inst_31045__$1);

return statearr_31070;
})();
if(cljs.core.truth_(inst_31046)){
var statearr_31071_32828 = state_31066__$1;
(statearr_31071_32828[(1)] = (5));

} else {
var statearr_31072_32829 = state_31066__$1;
(statearr_31072_32829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (13))){
var state_31066__$1 = state_31066;
var statearr_31073_32830 = state_31066__$1;
(statearr_31073_32830[(2)] = null);

(statearr_31073_32830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (6))){
var inst_31045 = (state_31066[(7)]);
var state_31066__$1 = state_31066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31066__$1,(11),to,inst_31045);
} else {
if((state_val_31067 === (3))){
var inst_31064 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31066__$1,inst_31064);
} else {
if((state_val_31067 === (12))){
var state_31066__$1 = state_31066;
var statearr_31078_32831 = state_31066__$1;
(statearr_31078_32831[(2)] = null);

(statearr_31078_32831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (2))){
var state_31066__$1 = state_31066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31066__$1,(4),from);
} else {
if((state_val_31067 === (11))){
var inst_31055 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
if(cljs.core.truth_(inst_31055)){
var statearr_31079_32832 = state_31066__$1;
(statearr_31079_32832[(1)] = (12));

} else {
var statearr_31080_32833 = state_31066__$1;
(statearr_31080_32833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (9))){
var state_31066__$1 = state_31066;
var statearr_31081_32834 = state_31066__$1;
(statearr_31081_32834[(2)] = null);

(statearr_31081_32834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (5))){
var state_31066__$1 = state_31066;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31082_32835 = state_31066__$1;
(statearr_31082_32835[(1)] = (8));

} else {
var statearr_31083_32836 = state_31066__$1;
(statearr_31083_32836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (14))){
var inst_31060 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
var statearr_31084_32837 = state_31066__$1;
(statearr_31084_32837[(2)] = inst_31060);

(statearr_31084_32837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (10))){
var inst_31052 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
var statearr_31085_32838 = state_31066__$1;
(statearr_31085_32838[(2)] = inst_31052);

(statearr_31085_32838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (8))){
var inst_31049 = cljs.core.async.close_BANG_(to);
var state_31066__$1 = state_31066;
var statearr_31086_32839 = state_31066__$1;
(statearr_31086_32839[(2)] = inst_31049);

(statearr_31086_32839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_31087 = [null,null,null,null,null,null,null,null];
(statearr_31087[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_31087[(1)] = (1));

return statearr_31087;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_31066){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31066);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31088){var ex__30721__auto__ = e31088;
var statearr_31089_32840 = state_31066;
(statearr_31089_32840[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31066[(4)]))){
var statearr_31091_32841 = state_31066;
(statearr_31091_32841[(1)] = cljs.core.first((state_31066[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32842 = state_31066;
state_31066 = G__32842;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_31066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_31066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_31094 = f__30812__auto__();
(statearr_31094[(6)] = c__30811__auto___32825);

return statearr_31094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__31098){
var vec__31099 = p__31098;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31099,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31099,(1),null);
var job = vec__31099;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30811__auto___32843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_31107){
var state_val_31108 = (state_31107[(1)]);
if((state_val_31108 === (1))){
var state_31107__$1 = state_31107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31107__$1,(2),res,v);
} else {
if((state_val_31108 === (2))){
var inst_31104 = (state_31107[(2)]);
var inst_31105 = cljs.core.async.close_BANG_(res);
var state_31107__$1 = (function (){var statearr_31109 = state_31107;
(statearr_31109[(7)] = inst_31104);

return statearr_31109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31107__$1,inst_31105);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0 = (function (){
var statearr_31110 = [null,null,null,null,null,null,null,null];
(statearr_31110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__);

(statearr_31110[(1)] = (1));

return statearr_31110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1 = (function (state_31107){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31107);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31111){var ex__30721__auto__ = e31111;
var statearr_31112_32844 = state_31107;
(statearr_31112_32844[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31107[(4)]))){
var statearr_31113_32845 = state_31107;
(statearr_31113_32845[(1)] = cljs.core.first((state_31107[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32846 = state_31107;
state_31107 = G__32846;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = function(state_31107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1.call(this,state_31107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_31114 = f__30812__auto__();
(statearr_31114[(6)] = c__30811__auto___32843);

return statearr_31114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31116){
var vec__31117 = p__31116;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31117,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31117,(1),null);
var job = vec__31117;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___32847 = n;
var __32848 = (0);
while(true){
if((__32848 < n__4607__auto___32847)){
var G__31120_32849 = type;
var G__31120_32850__$1 = (((G__31120_32849 instanceof cljs.core.Keyword))?G__31120_32849.fqn:null);
switch (G__31120_32850__$1) {
case "compute":
var c__30811__auto___32852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32848,c__30811__auto___32852,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async){
return (function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = ((function (__32848,c__30811__auto___32852,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async){
return (function (state_31133){
var state_val_31134 = (state_31133[(1)]);
if((state_val_31134 === (1))){
var state_31133__$1 = state_31133;
var statearr_31135_32853 = state_31133__$1;
(statearr_31135_32853[(2)] = null);

(statearr_31135_32853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (2))){
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31133__$1,(4),jobs);
} else {
if((state_val_31134 === (3))){
var inst_31131 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31133__$1,inst_31131);
} else {
if((state_val_31134 === (4))){
var inst_31123 = (state_31133[(2)]);
var inst_31124 = process(inst_31123);
var state_31133__$1 = state_31133;
if(cljs.core.truth_(inst_31124)){
var statearr_31136_32854 = state_31133__$1;
(statearr_31136_32854[(1)] = (5));

} else {
var statearr_31137_32855 = state_31133__$1;
(statearr_31137_32855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (5))){
var state_31133__$1 = state_31133;
var statearr_31138_32856 = state_31133__$1;
(statearr_31138_32856[(2)] = null);

(statearr_31138_32856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (6))){
var state_31133__$1 = state_31133;
var statearr_31211_32857 = state_31133__$1;
(statearr_31211_32857[(2)] = null);

(statearr_31211_32857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (7))){
var inst_31129 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31212_32858 = state_31133__$1;
(statearr_31212_32858[(2)] = inst_31129);

(statearr_31212_32858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32848,c__30811__auto___32852,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async))
;
return ((function (__32848,switch__30717__auto__,c__30811__auto___32852,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0 = (function (){
var statearr_31213 = [null,null,null,null,null,null,null];
(statearr_31213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__);

(statearr_31213[(1)] = (1));

return statearr_31213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1 = (function (state_31133){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31133);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31214){var ex__30721__auto__ = e31214;
var statearr_31215_32859 = state_31133;
(statearr_31215_32859[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31133[(4)]))){
var statearr_31216_32860 = state_31133;
(statearr_31216_32860[(1)] = cljs.core.first((state_31133[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32861 = state_31133;
state_31133 = G__32861;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = function(state_31133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1.call(this,state_31133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__;
})()
;})(__32848,switch__30717__auto__,c__30811__auto___32852,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async))
})();
var state__30813__auto__ = (function (){var statearr_31217 = f__30812__auto__();
(statearr_31217[(6)] = c__30811__auto___32852);

return statearr_31217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
});})(__32848,c__30811__auto___32852,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async))
);


break;
case "async":
var c__30811__auto___32862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32848,c__30811__auto___32862,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async){
return (function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = ((function (__32848,c__30811__auto___32862,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async){
return (function (state_31230){
var state_val_31231 = (state_31230[(1)]);
if((state_val_31231 === (1))){
var state_31230__$1 = state_31230;
var statearr_31232_32863 = state_31230__$1;
(statearr_31232_32863[(2)] = null);

(statearr_31232_32863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (2))){
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31230__$1,(4),jobs);
} else {
if((state_val_31231 === (3))){
var inst_31228 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31230__$1,inst_31228);
} else {
if((state_val_31231 === (4))){
var inst_31220 = (state_31230[(2)]);
var inst_31221 = async(inst_31220);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31221)){
var statearr_31233_32864 = state_31230__$1;
(statearr_31233_32864[(1)] = (5));

} else {
var statearr_31234_32865 = state_31230__$1;
(statearr_31234_32865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (5))){
var state_31230__$1 = state_31230;
var statearr_31235_32866 = state_31230__$1;
(statearr_31235_32866[(2)] = null);

(statearr_31235_32866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (6))){
var state_31230__$1 = state_31230;
var statearr_31236_32867 = state_31230__$1;
(statearr_31236_32867[(2)] = null);

(statearr_31236_32867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (7))){
var inst_31226 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31237_32868 = state_31230__$1;
(statearr_31237_32868[(2)] = inst_31226);

(statearr_31237_32868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32848,c__30811__auto___32862,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async))
;
return ((function (__32848,switch__30717__auto__,c__30811__auto___32862,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0 = (function (){
var statearr_31238 = [null,null,null,null,null,null,null];
(statearr_31238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__);

(statearr_31238[(1)] = (1));

return statearr_31238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1 = (function (state_31230){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31230);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31239){var ex__30721__auto__ = e31239;
var statearr_31240_32869 = state_31230;
(statearr_31240_32869[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31230[(4)]))){
var statearr_31241_32870 = state_31230;
(statearr_31241_32870[(1)] = cljs.core.first((state_31230[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32871 = state_31230;
state_31230 = G__32871;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = function(state_31230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1.call(this,state_31230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__;
})()
;})(__32848,switch__30717__auto__,c__30811__auto___32862,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async))
})();
var state__30813__auto__ = (function (){var statearr_31242 = f__30812__auto__();
(statearr_31242[(6)] = c__30811__auto___32862);

return statearr_31242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
});})(__32848,c__30811__auto___32862,G__31120_32849,G__31120_32850__$1,n__4607__auto___32847,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31120_32850__$1)].join('')));

}

var G__32872 = (__32848 + (1));
__32848 = G__32872;
continue;
} else {
}
break;
}

var c__30811__auto___32873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_31264){
var state_val_31265 = (state_31264[(1)]);
if((state_val_31265 === (7))){
var inst_31260 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31266_32874 = state_31264__$1;
(statearr_31266_32874[(2)] = inst_31260);

(statearr_31266_32874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (1))){
var state_31264__$1 = state_31264;
var statearr_31267_32875 = state_31264__$1;
(statearr_31267_32875[(2)] = null);

(statearr_31267_32875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (4))){
var inst_31245 = (state_31264[(7)]);
var inst_31245__$1 = (state_31264[(2)]);
var inst_31246 = (inst_31245__$1 == null);
var state_31264__$1 = (function (){var statearr_31268 = state_31264;
(statearr_31268[(7)] = inst_31245__$1);

return statearr_31268;
})();
if(cljs.core.truth_(inst_31246)){
var statearr_31269_32881 = state_31264__$1;
(statearr_31269_32881[(1)] = (5));

} else {
var statearr_31270_32882 = state_31264__$1;
(statearr_31270_32882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (6))){
var inst_31245 = (state_31264[(7)]);
var inst_31250 = (state_31264[(8)]);
var inst_31250__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31252 = [inst_31245,inst_31250__$1];
var inst_31253 = (new cljs.core.PersistentVector(null,2,(5),inst_31251,inst_31252,null));
var state_31264__$1 = (function (){var statearr_31271 = state_31264;
(statearr_31271[(8)] = inst_31250__$1);

return statearr_31271;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31264__$1,(8),jobs,inst_31253);
} else {
if((state_val_31265 === (3))){
var inst_31262 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31264__$1,inst_31262);
} else {
if((state_val_31265 === (2))){
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31264__$1,(4),from);
} else {
if((state_val_31265 === (9))){
var inst_31257 = (state_31264[(2)]);
var state_31264__$1 = (function (){var statearr_31272 = state_31264;
(statearr_31272[(9)] = inst_31257);

return statearr_31272;
})();
var statearr_31273_32887 = state_31264__$1;
(statearr_31273_32887[(2)] = null);

(statearr_31273_32887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (5))){
var inst_31248 = cljs.core.async.close_BANG_(jobs);
var state_31264__$1 = state_31264;
var statearr_31274_32889 = state_31264__$1;
(statearr_31274_32889[(2)] = inst_31248);

(statearr_31274_32889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (8))){
var inst_31250 = (state_31264[(8)]);
var inst_31255 = (state_31264[(2)]);
var state_31264__$1 = (function (){var statearr_31275 = state_31264;
(statearr_31275[(10)] = inst_31255);

return statearr_31275;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31264__$1,(9),results,inst_31250);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0 = (function (){
var statearr_31276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31276[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__);

(statearr_31276[(1)] = (1));

return statearr_31276;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1 = (function (state_31264){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31264);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31277){var ex__30721__auto__ = e31277;
var statearr_31278_32890 = state_31264;
(statearr_31278_32890[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31264[(4)]))){
var statearr_31279_32891 = state_31264;
(statearr_31279_32891[(1)] = cljs.core.first((state_31264[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32892 = state_31264;
state_31264 = G__32892;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = function(state_31264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1.call(this,state_31264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_31280 = f__30812__auto__();
(statearr_31280[(6)] = c__30811__auto___32873);

return statearr_31280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


var c__30811__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_31318){
var state_val_31319 = (state_31318[(1)]);
if((state_val_31319 === (7))){
var inst_31314 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31320_32896 = state_31318__$1;
(statearr_31320_32896[(2)] = inst_31314);

(statearr_31320_32896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (20))){
var state_31318__$1 = state_31318;
var statearr_31321_32899 = state_31318__$1;
(statearr_31321_32899[(2)] = null);

(statearr_31321_32899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (1))){
var state_31318__$1 = state_31318;
var statearr_31322_32900 = state_31318__$1;
(statearr_31322_32900[(2)] = null);

(statearr_31322_32900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (4))){
var inst_31283 = (state_31318[(7)]);
var inst_31283__$1 = (state_31318[(2)]);
var inst_31284 = (inst_31283__$1 == null);
var state_31318__$1 = (function (){var statearr_31323 = state_31318;
(statearr_31323[(7)] = inst_31283__$1);

return statearr_31323;
})();
if(cljs.core.truth_(inst_31284)){
var statearr_31324_32903 = state_31318__$1;
(statearr_31324_32903[(1)] = (5));

} else {
var statearr_31325_32906 = state_31318__$1;
(statearr_31325_32906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (15))){
var inst_31296 = (state_31318[(8)]);
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31318__$1,(18),to,inst_31296);
} else {
if((state_val_31319 === (21))){
var inst_31309 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31326_32907 = state_31318__$1;
(statearr_31326_32907[(2)] = inst_31309);

(statearr_31326_32907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (13))){
var inst_31311 = (state_31318[(2)]);
var state_31318__$1 = (function (){var statearr_31327 = state_31318;
(statearr_31327[(9)] = inst_31311);

return statearr_31327;
})();
var statearr_31328_32908 = state_31318__$1;
(statearr_31328_32908[(2)] = null);

(statearr_31328_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (6))){
var inst_31283 = (state_31318[(7)]);
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31318__$1,(11),inst_31283);
} else {
if((state_val_31319 === (17))){
var inst_31304 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
if(cljs.core.truth_(inst_31304)){
var statearr_31329_32909 = state_31318__$1;
(statearr_31329_32909[(1)] = (19));

} else {
var statearr_31330_32910 = state_31318__$1;
(statearr_31330_32910[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (3))){
var inst_31316 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31318__$1,inst_31316);
} else {
if((state_val_31319 === (12))){
var inst_31293 = (state_31318[(10)]);
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31318__$1,(14),inst_31293);
} else {
if((state_val_31319 === (2))){
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31318__$1,(4),results);
} else {
if((state_val_31319 === (19))){
var state_31318__$1 = state_31318;
var statearr_31341_32911 = state_31318__$1;
(statearr_31341_32911[(2)] = null);

(statearr_31341_32911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (11))){
var inst_31293 = (state_31318[(2)]);
var state_31318__$1 = (function (){var statearr_31342 = state_31318;
(statearr_31342[(10)] = inst_31293);

return statearr_31342;
})();
var statearr_31343_32912 = state_31318__$1;
(statearr_31343_32912[(2)] = null);

(statearr_31343_32912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (9))){
var state_31318__$1 = state_31318;
var statearr_31344_32913 = state_31318__$1;
(statearr_31344_32913[(2)] = null);

(statearr_31344_32913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (5))){
var state_31318__$1 = state_31318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31348_32914 = state_31318__$1;
(statearr_31348_32914[(1)] = (8));

} else {
var statearr_31349_32915 = state_31318__$1;
(statearr_31349_32915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (14))){
var inst_31296 = (state_31318[(8)]);
var inst_31296__$1 = (state_31318[(2)]);
var inst_31297 = (inst_31296__$1 == null);
var inst_31298 = cljs.core.not(inst_31297);
var state_31318__$1 = (function (){var statearr_31350 = state_31318;
(statearr_31350[(8)] = inst_31296__$1);

return statearr_31350;
})();
if(inst_31298){
var statearr_31351_32916 = state_31318__$1;
(statearr_31351_32916[(1)] = (15));

} else {
var statearr_31352_32917 = state_31318__$1;
(statearr_31352_32917[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (16))){
var state_31318__$1 = state_31318;
var statearr_31353_32918 = state_31318__$1;
(statearr_31353_32918[(2)] = false);

(statearr_31353_32918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (10))){
var inst_31290 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31354_32919 = state_31318__$1;
(statearr_31354_32919[(2)] = inst_31290);

(statearr_31354_32919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (18))){
var inst_31301 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31355_32920 = state_31318__$1;
(statearr_31355_32920[(2)] = inst_31301);

(statearr_31355_32920[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (8))){
var inst_31287 = cljs.core.async.close_BANG_(to);
var state_31318__$1 = state_31318;
var statearr_31373_32921 = state_31318__$1;
(statearr_31373_32921[(2)] = inst_31287);

(statearr_31373_32921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0 = (function (){
var statearr_31374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__);

(statearr_31374[(1)] = (1));

return statearr_31374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1 = (function (state_31318){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31318);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31375){var ex__30721__auto__ = e31375;
var statearr_31376_32942 = state_31318;
(statearr_31376_32942[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31318[(4)]))){
var statearr_31377_32943 = state_31318;
(statearr_31377_32943[(1)] = cljs.core.first((state_31318[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32944 = state_31318;
state_31318 = G__32944;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__ = function(state_31318){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1.call(this,state_31318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30718__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_31378 = f__30812__auto__();
(statearr_31378[(6)] = c__30811__auto__);

return statearr_31378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));

return c__30811__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31380 = arguments.length;
switch (G__31380) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31386 = arguments.length;
switch (G__31386) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31388 = arguments.length;
switch (G__31388) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30811__auto___32951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_31414){
var state_val_31415 = (state_31414[(1)]);
if((state_val_31415 === (7))){
var inst_31410 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31416_32952 = state_31414__$1;
(statearr_31416_32952[(2)] = inst_31410);

(statearr_31416_32952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (1))){
var state_31414__$1 = state_31414;
var statearr_31417_32953 = state_31414__$1;
(statearr_31417_32953[(2)] = null);

(statearr_31417_32953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (4))){
var inst_31391 = (state_31414[(7)]);
var inst_31391__$1 = (state_31414[(2)]);
var inst_31392 = (inst_31391__$1 == null);
var state_31414__$1 = (function (){var statearr_31418 = state_31414;
(statearr_31418[(7)] = inst_31391__$1);

return statearr_31418;
})();
if(cljs.core.truth_(inst_31392)){
var statearr_31419_32954 = state_31414__$1;
(statearr_31419_32954[(1)] = (5));

} else {
var statearr_31420_32955 = state_31414__$1;
(statearr_31420_32955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (13))){
var state_31414__$1 = state_31414;
var statearr_31421_32956 = state_31414__$1;
(statearr_31421_32956[(2)] = null);

(statearr_31421_32956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (6))){
var inst_31391 = (state_31414[(7)]);
var inst_31397 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31391) : p.call(null,inst_31391));
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31397)){
var statearr_31422_32957 = state_31414__$1;
(statearr_31422_32957[(1)] = (9));

} else {
var statearr_31423_32958 = state_31414__$1;
(statearr_31423_32958[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (3))){
var inst_31412 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31414__$1,inst_31412);
} else {
if((state_val_31415 === (12))){
var state_31414__$1 = state_31414;
var statearr_31424_32960 = state_31414__$1;
(statearr_31424_32960[(2)] = null);

(statearr_31424_32960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (2))){
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31414__$1,(4),ch);
} else {
if((state_val_31415 === (11))){
var inst_31391 = (state_31414[(7)]);
var inst_31401 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31414__$1,(8),inst_31401,inst_31391);
} else {
if((state_val_31415 === (9))){
var state_31414__$1 = state_31414;
var statearr_31425_32963 = state_31414__$1;
(statearr_31425_32963[(2)] = tc);

(statearr_31425_32963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (5))){
var inst_31394 = cljs.core.async.close_BANG_(tc);
var inst_31395 = cljs.core.async.close_BANG_(fc);
var state_31414__$1 = (function (){var statearr_31426 = state_31414;
(statearr_31426[(8)] = inst_31394);

return statearr_31426;
})();
var statearr_31427_32964 = state_31414__$1;
(statearr_31427_32964[(2)] = inst_31395);

(statearr_31427_32964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (14))){
var inst_31408 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31428_32965 = state_31414__$1;
(statearr_31428_32965[(2)] = inst_31408);

(statearr_31428_32965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (10))){
var state_31414__$1 = state_31414;
var statearr_31429_32966 = state_31414__$1;
(statearr_31429_32966[(2)] = fc);

(statearr_31429_32966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (8))){
var inst_31403 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31403)){
var statearr_31430_32967 = state_31414__$1;
(statearr_31430_32967[(1)] = (12));

} else {
var statearr_31431_32968 = state_31414__$1;
(statearr_31431_32968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_31432 = [null,null,null,null,null,null,null,null,null];
(statearr_31432[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_31432[(1)] = (1));

return statearr_31432;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_31414){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31414);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31433){var ex__30721__auto__ = e31433;
var statearr_31434_32969 = state_31414;
(statearr_31434_32969[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31414[(4)]))){
var statearr_31435_32970 = state_31414;
(statearr_31435_32970[(1)] = cljs.core.first((state_31414[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32971 = state_31414;
state_31414 = G__32971;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_31414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_31414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_31436 = f__30812__auto__();
(statearr_31436[(6)] = c__30811__auto___32951);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30811__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_31461){
var state_val_31462 = (state_31461[(1)]);
if((state_val_31462 === (7))){
var inst_31457 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31467_32973 = state_31461__$1;
(statearr_31467_32973[(2)] = inst_31457);

(statearr_31467_32973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (1))){
var inst_31437 = init;
var inst_31438 = inst_31437;
var state_31461__$1 = (function (){var statearr_31468 = state_31461;
(statearr_31468[(7)] = inst_31438);

return statearr_31468;
})();
var statearr_31469_32974 = state_31461__$1;
(statearr_31469_32974[(2)] = null);

(statearr_31469_32974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (4))){
var inst_31441 = (state_31461[(8)]);
var inst_31441__$1 = (state_31461[(2)]);
var inst_31442 = (inst_31441__$1 == null);
var state_31461__$1 = (function (){var statearr_31473 = state_31461;
(statearr_31473[(8)] = inst_31441__$1);

return statearr_31473;
})();
if(cljs.core.truth_(inst_31442)){
var statearr_31474_32976 = state_31461__$1;
(statearr_31474_32976[(1)] = (5));

} else {
var statearr_31475_32977 = state_31461__$1;
(statearr_31475_32977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (6))){
var inst_31446 = (state_31461[(9)]);
var inst_31441 = (state_31461[(8)]);
var inst_31438 = (state_31461[(7)]);
var inst_31446__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31438,inst_31441) : f.call(null,inst_31438,inst_31441));
var inst_31448 = cljs.core.reduced_QMARK_(inst_31446__$1);
var state_31461__$1 = (function (){var statearr_31476 = state_31461;
(statearr_31476[(9)] = inst_31446__$1);

return statearr_31476;
})();
if(inst_31448){
var statearr_31477_32978 = state_31461__$1;
(statearr_31477_32978[(1)] = (8));

} else {
var statearr_31478_32979 = state_31461__$1;
(statearr_31478_32979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (3))){
var inst_31459 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31461__$1,inst_31459);
} else {
if((state_val_31462 === (2))){
var state_31461__$1 = state_31461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31461__$1,(4),ch);
} else {
if((state_val_31462 === (9))){
var inst_31446 = (state_31461[(9)]);
var inst_31438 = inst_31446;
var state_31461__$1 = (function (){var statearr_31479 = state_31461;
(statearr_31479[(7)] = inst_31438);

return statearr_31479;
})();
var statearr_31480_32980 = state_31461__$1;
(statearr_31480_32980[(2)] = null);

(statearr_31480_32980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (5))){
var inst_31438 = (state_31461[(7)]);
var state_31461__$1 = state_31461;
var statearr_31481_32981 = state_31461__$1;
(statearr_31481_32981[(2)] = inst_31438);

(statearr_31481_32981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (10))){
var inst_31455 = (state_31461[(2)]);
var state_31461__$1 = state_31461;
var statearr_31482_32982 = state_31461__$1;
(statearr_31482_32982[(2)] = inst_31455);

(statearr_31482_32982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31462 === (8))){
var inst_31446 = (state_31461[(9)]);
var inst_31450 = cljs.core.deref(inst_31446);
var state_31461__$1 = state_31461;
var statearr_31483_32983 = state_31461__$1;
(statearr_31483_32983[(2)] = inst_31450);

(statearr_31483_32983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30718__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30718__auto____0 = (function (){
var statearr_31484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31484[(0)] = cljs$core$async$reduce_$_state_machine__30718__auto__);

(statearr_31484[(1)] = (1));

return statearr_31484;
});
var cljs$core$async$reduce_$_state_machine__30718__auto____1 = (function (state_31461){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31461);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31485){var ex__30721__auto__ = e31485;
var statearr_31486_32986 = state_31461;
(statearr_31486_32986[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31461[(4)]))){
var statearr_31487_32987 = state_31461;
(statearr_31487_32987[(1)] = cljs.core.first((state_31461[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32988 = state_31461;
state_31461 = G__32988;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30718__auto__ = function(state_31461){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30718__auto____1.call(this,state_31461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30718__auto____0;
cljs$core$async$reduce_$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30718__auto____1;
return cljs$core$async$reduce_$_state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_31488 = f__30812__auto__();
(statearr_31488[(6)] = c__30811__auto__);

return statearr_31488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));

return c__30811__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30811__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_31494){
var state_val_31495 = (state_31494[(1)]);
if((state_val_31495 === (1))){
var inst_31489 = cljs.core.async.reduce(f__$1,init,ch);
var state_31494__$1 = state_31494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31494__$1,(2),inst_31489);
} else {
if((state_val_31495 === (2))){
var inst_31491 = (state_31494[(2)]);
var inst_31492 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31491) : f__$1.call(null,inst_31491));
var state_31494__$1 = state_31494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31494__$1,inst_31492);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30718__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30718__auto____0 = (function (){
var statearr_31496 = [null,null,null,null,null,null,null];
(statearr_31496[(0)] = cljs$core$async$transduce_$_state_machine__30718__auto__);

(statearr_31496[(1)] = (1));

return statearr_31496;
});
var cljs$core$async$transduce_$_state_machine__30718__auto____1 = (function (state_31494){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31494);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31497){var ex__30721__auto__ = e31497;
var statearr_31498_32989 = state_31494;
(statearr_31498_32989[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31494[(4)]))){
var statearr_31499_32990 = state_31494;
(statearr_31499_32990[(1)] = cljs.core.first((state_31494[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32992 = state_31494;
state_31494 = G__32992;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30718__auto__ = function(state_31494){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30718__auto____1.call(this,state_31494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30718__auto____0;
cljs$core$async$transduce_$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30718__auto____1;
return cljs$core$async$transduce_$_state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_31500 = f__30812__auto__();
(statearr_31500[(6)] = c__30811__auto__);

return statearr_31500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));

return c__30811__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31502 = arguments.length;
switch (G__31502) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30811__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_31527){
var state_val_31528 = (state_31527[(1)]);
if((state_val_31528 === (7))){
var inst_31509 = (state_31527[(2)]);
var state_31527__$1 = state_31527;
var statearr_31529_32994 = state_31527__$1;
(statearr_31529_32994[(2)] = inst_31509);

(statearr_31529_32994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (1))){
var inst_31503 = cljs.core.seq(coll);
var inst_31504 = inst_31503;
var state_31527__$1 = (function (){var statearr_31530 = state_31527;
(statearr_31530[(7)] = inst_31504);

return statearr_31530;
})();
var statearr_31531_32995 = state_31527__$1;
(statearr_31531_32995[(2)] = null);

(statearr_31531_32995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (4))){
var inst_31504 = (state_31527[(7)]);
var inst_31507 = cljs.core.first(inst_31504);
var state_31527__$1 = state_31527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31527__$1,(7),ch,inst_31507);
} else {
if((state_val_31528 === (13))){
var inst_31521 = (state_31527[(2)]);
var state_31527__$1 = state_31527;
var statearr_31532_32996 = state_31527__$1;
(statearr_31532_32996[(2)] = inst_31521);

(statearr_31532_32996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (6))){
var inst_31512 = (state_31527[(2)]);
var state_31527__$1 = state_31527;
if(cljs.core.truth_(inst_31512)){
var statearr_31533_32997 = state_31527__$1;
(statearr_31533_32997[(1)] = (8));

} else {
var statearr_31534_32998 = state_31527__$1;
(statearr_31534_32998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (3))){
var inst_31525 = (state_31527[(2)]);
var state_31527__$1 = state_31527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31527__$1,inst_31525);
} else {
if((state_val_31528 === (12))){
var state_31527__$1 = state_31527;
var statearr_31535_33003 = state_31527__$1;
(statearr_31535_33003[(2)] = null);

(statearr_31535_33003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (2))){
var inst_31504 = (state_31527[(7)]);
var state_31527__$1 = state_31527;
if(cljs.core.truth_(inst_31504)){
var statearr_31536_33004 = state_31527__$1;
(statearr_31536_33004[(1)] = (4));

} else {
var statearr_31537_33005 = state_31527__$1;
(statearr_31537_33005[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (11))){
var inst_31518 = cljs.core.async.close_BANG_(ch);
var state_31527__$1 = state_31527;
var statearr_31538_33006 = state_31527__$1;
(statearr_31538_33006[(2)] = inst_31518);

(statearr_31538_33006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (9))){
var state_31527__$1 = state_31527;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31539_33007 = state_31527__$1;
(statearr_31539_33007[(1)] = (11));

} else {
var statearr_31540_33008 = state_31527__$1;
(statearr_31540_33008[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (5))){
var inst_31504 = (state_31527[(7)]);
var state_31527__$1 = state_31527;
var statearr_31541_33009 = state_31527__$1;
(statearr_31541_33009[(2)] = inst_31504);

(statearr_31541_33009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (10))){
var inst_31523 = (state_31527[(2)]);
var state_31527__$1 = state_31527;
var statearr_31542_33010 = state_31527__$1;
(statearr_31542_33010[(2)] = inst_31523);

(statearr_31542_33010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31528 === (8))){
var inst_31504 = (state_31527[(7)]);
var inst_31514 = cljs.core.next(inst_31504);
var inst_31504__$1 = inst_31514;
var state_31527__$1 = (function (){var statearr_31543 = state_31527;
(statearr_31543[(7)] = inst_31504__$1);

return statearr_31543;
})();
var statearr_31544_33011 = state_31527__$1;
(statearr_31544_33011[(2)] = null);

(statearr_31544_33011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_31545 = [null,null,null,null,null,null,null,null];
(statearr_31545[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_31545[(1)] = (1));

return statearr_31545;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_31527){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31527);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31546){var ex__30721__auto__ = e31546;
var statearr_31547_33012 = state_31527;
(statearr_31547_33012[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31527[(4)]))){
var statearr_31548_33013 = state_31527;
(statearr_31548_33013[(1)] = cljs.core.first((state_31527[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33014 = state_31527;
state_31527 = G__33014;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_31527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_31527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_31549 = f__30812__auto__();
(statearr_31549[(6)] = c__30811__auto__);

return statearr_31549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));

return c__30811__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33017 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33017(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33018 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33018(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33019 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33019(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33020 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33020(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31550 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31550 = (function (ch,cs,meta31551){
this.ch = ch;
this.cs = cs;
this.meta31551 = meta31551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31552,meta31551__$1){
var self__ = this;
var _31552__$1 = this;
return (new cljs.core.async.t_cljs$core$async31550(self__.ch,self__.cs,meta31551__$1));
}));

(cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31552){
var self__ = this;
var _31552__$1 = this;
return self__.meta31551;
}));

(cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31550.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31551","meta31551",-630925085,null)], null);
}));

(cljs.core.async.t_cljs$core$async31550.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31550");

(cljs.core.async.t_cljs$core$async31550.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async31550");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31550.
 */
cljs.core.async.__GT_t_cljs$core$async31550 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31550(ch__$1,cs__$1,meta31551){
return (new cljs.core.async.t_cljs$core$async31550(ch__$1,cs__$1,meta31551));
});

}

return (new cljs.core.async.t_cljs$core$async31550(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30811__auto___33055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_31688){
var state_val_31689 = (state_31688[(1)]);
if((state_val_31689 === (7))){
var inst_31684 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31690_33056 = state_31688__$1;
(statearr_31690_33056[(2)] = inst_31684);

(statearr_31690_33056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (20))){
var inst_31589 = (state_31688[(7)]);
var inst_31601 = cljs.core.first(inst_31589);
var inst_31602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31601,(0),null);
var inst_31603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31601,(1),null);
var state_31688__$1 = (function (){var statearr_31691 = state_31688;
(statearr_31691[(8)] = inst_31602);

return statearr_31691;
})();
if(cljs.core.truth_(inst_31603)){
var statearr_31692_33059 = state_31688__$1;
(statearr_31692_33059[(1)] = (22));

} else {
var statearr_31693_33060 = state_31688__$1;
(statearr_31693_33060[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (27))){
var inst_31631 = (state_31688[(9)]);
var inst_31638 = (state_31688[(10)]);
var inst_31633 = (state_31688[(11)]);
var inst_31558 = (state_31688[(12)]);
var inst_31638__$1 = cljs.core._nth(inst_31631,inst_31633);
var inst_31639 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31638__$1,inst_31558,done);
var state_31688__$1 = (function (){var statearr_31694 = state_31688;
(statearr_31694[(10)] = inst_31638__$1);

return statearr_31694;
})();
if(cljs.core.truth_(inst_31639)){
var statearr_31695_33061 = state_31688__$1;
(statearr_31695_33061[(1)] = (30));

} else {
var statearr_31696_33062 = state_31688__$1;
(statearr_31696_33062[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (1))){
var state_31688__$1 = state_31688;
var statearr_31697_33063 = state_31688__$1;
(statearr_31697_33063[(2)] = null);

(statearr_31697_33063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (24))){
var inst_31589 = (state_31688[(7)]);
var inst_31608 = (state_31688[(2)]);
var inst_31609 = cljs.core.next(inst_31589);
var inst_31567 = inst_31609;
var inst_31568 = null;
var inst_31569 = (0);
var inst_31570 = (0);
var state_31688__$1 = (function (){var statearr_31698 = state_31688;
(statearr_31698[(13)] = inst_31567);

(statearr_31698[(14)] = inst_31570);

(statearr_31698[(15)] = inst_31569);

(statearr_31698[(16)] = inst_31568);

(statearr_31698[(17)] = inst_31608);

return statearr_31698;
})();
var statearr_31699_33064 = state_31688__$1;
(statearr_31699_33064[(2)] = null);

(statearr_31699_33064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (39))){
var state_31688__$1 = state_31688;
var statearr_31703_33065 = state_31688__$1;
(statearr_31703_33065[(2)] = null);

(statearr_31703_33065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (4))){
var inst_31558 = (state_31688[(12)]);
var inst_31558__$1 = (state_31688[(2)]);
var inst_31559 = (inst_31558__$1 == null);
var state_31688__$1 = (function (){var statearr_31704 = state_31688;
(statearr_31704[(12)] = inst_31558__$1);

return statearr_31704;
})();
if(cljs.core.truth_(inst_31559)){
var statearr_31705_33066 = state_31688__$1;
(statearr_31705_33066[(1)] = (5));

} else {
var statearr_31706_33067 = state_31688__$1;
(statearr_31706_33067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (15))){
var inst_31567 = (state_31688[(13)]);
var inst_31570 = (state_31688[(14)]);
var inst_31569 = (state_31688[(15)]);
var inst_31568 = (state_31688[(16)]);
var inst_31585 = (state_31688[(2)]);
var inst_31586 = (inst_31570 + (1));
var tmp31700 = inst_31567;
var tmp31701 = inst_31569;
var tmp31702 = inst_31568;
var inst_31567__$1 = tmp31700;
var inst_31568__$1 = tmp31702;
var inst_31569__$1 = tmp31701;
var inst_31570__$1 = inst_31586;
var state_31688__$1 = (function (){var statearr_31707 = state_31688;
(statearr_31707[(13)] = inst_31567__$1);

(statearr_31707[(14)] = inst_31570__$1);

(statearr_31707[(15)] = inst_31569__$1);

(statearr_31707[(16)] = inst_31568__$1);

(statearr_31707[(18)] = inst_31585);

return statearr_31707;
})();
var statearr_31708_33068 = state_31688__$1;
(statearr_31708_33068[(2)] = null);

(statearr_31708_33068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (21))){
var inst_31612 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31712_33069 = state_31688__$1;
(statearr_31712_33069[(2)] = inst_31612);

(statearr_31712_33069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (31))){
var inst_31638 = (state_31688[(10)]);
var inst_31642 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31638);
var state_31688__$1 = state_31688;
var statearr_31713_33070 = state_31688__$1;
(statearr_31713_33070[(2)] = inst_31642);

(statearr_31713_33070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (32))){
var inst_31632 = (state_31688[(19)]);
var inst_31631 = (state_31688[(9)]);
var inst_31633 = (state_31688[(11)]);
var inst_31630 = (state_31688[(20)]);
var inst_31644 = (state_31688[(2)]);
var inst_31645 = (inst_31633 + (1));
var tmp31709 = inst_31632;
var tmp31710 = inst_31631;
var tmp31711 = inst_31630;
var inst_31630__$1 = tmp31711;
var inst_31631__$1 = tmp31710;
var inst_31632__$1 = tmp31709;
var inst_31633__$1 = inst_31645;
var state_31688__$1 = (function (){var statearr_31714 = state_31688;
(statearr_31714[(19)] = inst_31632__$1);

(statearr_31714[(9)] = inst_31631__$1);

(statearr_31714[(21)] = inst_31644);

(statearr_31714[(11)] = inst_31633__$1);

(statearr_31714[(20)] = inst_31630__$1);

return statearr_31714;
})();
var statearr_31715_33072 = state_31688__$1;
(statearr_31715_33072[(2)] = null);

(statearr_31715_33072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (40))){
var inst_31657 = (state_31688[(22)]);
var inst_31661 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31657);
var state_31688__$1 = state_31688;
var statearr_31716_33073 = state_31688__$1;
(statearr_31716_33073[(2)] = inst_31661);

(statearr_31716_33073[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (33))){
var inst_31648 = (state_31688[(23)]);
var inst_31650 = cljs.core.chunked_seq_QMARK_(inst_31648);
var state_31688__$1 = state_31688;
if(inst_31650){
var statearr_31723_33074 = state_31688__$1;
(statearr_31723_33074[(1)] = (36));

} else {
var statearr_31724_33075 = state_31688__$1;
(statearr_31724_33075[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (13))){
var inst_31579 = (state_31688[(24)]);
var inst_31582 = cljs.core.async.close_BANG_(inst_31579);
var state_31688__$1 = state_31688;
var statearr_31727_33076 = state_31688__$1;
(statearr_31727_33076[(2)] = inst_31582);

(statearr_31727_33076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (22))){
var inst_31602 = (state_31688[(8)]);
var inst_31605 = cljs.core.async.close_BANG_(inst_31602);
var state_31688__$1 = state_31688;
var statearr_31728_33077 = state_31688__$1;
(statearr_31728_33077[(2)] = inst_31605);

(statearr_31728_33077[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (36))){
var inst_31648 = (state_31688[(23)]);
var inst_31652 = cljs.core.chunk_first(inst_31648);
var inst_31653 = cljs.core.chunk_rest(inst_31648);
var inst_31654 = cljs.core.count(inst_31652);
var inst_31630 = inst_31653;
var inst_31631 = inst_31652;
var inst_31632 = inst_31654;
var inst_31633 = (0);
var state_31688__$1 = (function (){var statearr_31733 = state_31688;
(statearr_31733[(19)] = inst_31632);

(statearr_31733[(9)] = inst_31631);

(statearr_31733[(11)] = inst_31633);

(statearr_31733[(20)] = inst_31630);

return statearr_31733;
})();
var statearr_31736_33078 = state_31688__$1;
(statearr_31736_33078[(2)] = null);

(statearr_31736_33078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (41))){
var inst_31648 = (state_31688[(23)]);
var inst_31663 = (state_31688[(2)]);
var inst_31664 = cljs.core.next(inst_31648);
var inst_31630 = inst_31664;
var inst_31631 = null;
var inst_31632 = (0);
var inst_31633 = (0);
var state_31688__$1 = (function (){var statearr_31739 = state_31688;
(statearr_31739[(19)] = inst_31632);

(statearr_31739[(9)] = inst_31631);

(statearr_31739[(25)] = inst_31663);

(statearr_31739[(11)] = inst_31633);

(statearr_31739[(20)] = inst_31630);

return statearr_31739;
})();
var statearr_31740_33079 = state_31688__$1;
(statearr_31740_33079[(2)] = null);

(statearr_31740_33079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (43))){
var state_31688__$1 = state_31688;
var statearr_31743_33080 = state_31688__$1;
(statearr_31743_33080[(2)] = null);

(statearr_31743_33080[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (29))){
var inst_31672 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31745_33081 = state_31688__$1;
(statearr_31745_33081[(2)] = inst_31672);

(statearr_31745_33081[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (44))){
var inst_31681 = (state_31688[(2)]);
var state_31688__$1 = (function (){var statearr_31746 = state_31688;
(statearr_31746[(26)] = inst_31681);

return statearr_31746;
})();
var statearr_31747_33082 = state_31688__$1;
(statearr_31747_33082[(2)] = null);

(statearr_31747_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (6))){
var inst_31622 = (state_31688[(27)]);
var inst_31621 = cljs.core.deref(cs);
var inst_31622__$1 = cljs.core.keys(inst_31621);
var inst_31623 = cljs.core.count(inst_31622__$1);
var inst_31624 = cljs.core.reset_BANG_(dctr,inst_31623);
var inst_31629 = cljs.core.seq(inst_31622__$1);
var inst_31630 = inst_31629;
var inst_31631 = null;
var inst_31632 = (0);
var inst_31633 = (0);
var state_31688__$1 = (function (){var statearr_31748 = state_31688;
(statearr_31748[(19)] = inst_31632);

(statearr_31748[(9)] = inst_31631);

(statearr_31748[(27)] = inst_31622__$1);

(statearr_31748[(28)] = inst_31624);

(statearr_31748[(11)] = inst_31633);

(statearr_31748[(20)] = inst_31630);

return statearr_31748;
})();
var statearr_31749_33083 = state_31688__$1;
(statearr_31749_33083[(2)] = null);

(statearr_31749_33083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (28))){
var inst_31648 = (state_31688[(23)]);
var inst_31630 = (state_31688[(20)]);
var inst_31648__$1 = cljs.core.seq(inst_31630);
var state_31688__$1 = (function (){var statearr_31756 = state_31688;
(statearr_31756[(23)] = inst_31648__$1);

return statearr_31756;
})();
if(inst_31648__$1){
var statearr_31757_33084 = state_31688__$1;
(statearr_31757_33084[(1)] = (33));

} else {
var statearr_31762_33085 = state_31688__$1;
(statearr_31762_33085[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (25))){
var inst_31632 = (state_31688[(19)]);
var inst_31633 = (state_31688[(11)]);
var inst_31635 = (inst_31633 < inst_31632);
var inst_31636 = inst_31635;
var state_31688__$1 = state_31688;
if(cljs.core.truth_(inst_31636)){
var statearr_31763_33086 = state_31688__$1;
(statearr_31763_33086[(1)] = (27));

} else {
var statearr_31764_33087 = state_31688__$1;
(statearr_31764_33087[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (34))){
var state_31688__$1 = state_31688;
var statearr_31765_33088 = state_31688__$1;
(statearr_31765_33088[(2)] = null);

(statearr_31765_33088[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (17))){
var state_31688__$1 = state_31688;
var statearr_31768_33089 = state_31688__$1;
(statearr_31768_33089[(2)] = null);

(statearr_31768_33089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (3))){
var inst_31686 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31688__$1,inst_31686);
} else {
if((state_val_31689 === (12))){
var inst_31617 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31770_33090 = state_31688__$1;
(statearr_31770_33090[(2)] = inst_31617);

(statearr_31770_33090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (2))){
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31688__$1,(4),ch);
} else {
if((state_val_31689 === (23))){
var state_31688__$1 = state_31688;
var statearr_31773_33091 = state_31688__$1;
(statearr_31773_33091[(2)] = null);

(statearr_31773_33091[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (35))){
var inst_31670 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31774_33092 = state_31688__$1;
(statearr_31774_33092[(2)] = inst_31670);

(statearr_31774_33092[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (19))){
var inst_31589 = (state_31688[(7)]);
var inst_31593 = cljs.core.chunk_first(inst_31589);
var inst_31594 = cljs.core.chunk_rest(inst_31589);
var inst_31595 = cljs.core.count(inst_31593);
var inst_31567 = inst_31594;
var inst_31568 = inst_31593;
var inst_31569 = inst_31595;
var inst_31570 = (0);
var state_31688__$1 = (function (){var statearr_31782 = state_31688;
(statearr_31782[(13)] = inst_31567);

(statearr_31782[(14)] = inst_31570);

(statearr_31782[(15)] = inst_31569);

(statearr_31782[(16)] = inst_31568);

return statearr_31782;
})();
var statearr_31783_33093 = state_31688__$1;
(statearr_31783_33093[(2)] = null);

(statearr_31783_33093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (11))){
var inst_31567 = (state_31688[(13)]);
var inst_31589 = (state_31688[(7)]);
var inst_31589__$1 = cljs.core.seq(inst_31567);
var state_31688__$1 = (function (){var statearr_31789 = state_31688;
(statearr_31789[(7)] = inst_31589__$1);

return statearr_31789;
})();
if(inst_31589__$1){
var statearr_31791_33094 = state_31688__$1;
(statearr_31791_33094[(1)] = (16));

} else {
var statearr_31793_33095 = state_31688__$1;
(statearr_31793_33095[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (9))){
var inst_31619 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31795_33096 = state_31688__$1;
(statearr_31795_33096[(2)] = inst_31619);

(statearr_31795_33096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (5))){
var inst_31565 = cljs.core.deref(cs);
var inst_31566 = cljs.core.seq(inst_31565);
var inst_31567 = inst_31566;
var inst_31568 = null;
var inst_31569 = (0);
var inst_31570 = (0);
var state_31688__$1 = (function (){var statearr_31799 = state_31688;
(statearr_31799[(13)] = inst_31567);

(statearr_31799[(14)] = inst_31570);

(statearr_31799[(15)] = inst_31569);

(statearr_31799[(16)] = inst_31568);

return statearr_31799;
})();
var statearr_31804_33097 = state_31688__$1;
(statearr_31804_33097[(2)] = null);

(statearr_31804_33097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (14))){
var state_31688__$1 = state_31688;
var statearr_31809_33098 = state_31688__$1;
(statearr_31809_33098[(2)] = null);

(statearr_31809_33098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (45))){
var inst_31678 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31810_33099 = state_31688__$1;
(statearr_31810_33099[(2)] = inst_31678);

(statearr_31810_33099[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (26))){
var inst_31622 = (state_31688[(27)]);
var inst_31674 = (state_31688[(2)]);
var inst_31675 = cljs.core.seq(inst_31622);
var state_31688__$1 = (function (){var statearr_31815 = state_31688;
(statearr_31815[(29)] = inst_31674);

return statearr_31815;
})();
if(inst_31675){
var statearr_31816_33100 = state_31688__$1;
(statearr_31816_33100[(1)] = (42));

} else {
var statearr_31817_33101 = state_31688__$1;
(statearr_31817_33101[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (16))){
var inst_31589 = (state_31688[(7)]);
var inst_31591 = cljs.core.chunked_seq_QMARK_(inst_31589);
var state_31688__$1 = state_31688;
if(inst_31591){
var statearr_31818_33102 = state_31688__$1;
(statearr_31818_33102[(1)] = (19));

} else {
var statearr_31819_33103 = state_31688__$1;
(statearr_31819_33103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (38))){
var inst_31667 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31820_33104 = state_31688__$1;
(statearr_31820_33104[(2)] = inst_31667);

(statearr_31820_33104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (30))){
var state_31688__$1 = state_31688;
var statearr_31821_33105 = state_31688__$1;
(statearr_31821_33105[(2)] = null);

(statearr_31821_33105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (10))){
var inst_31570 = (state_31688[(14)]);
var inst_31568 = (state_31688[(16)]);
var inst_31578 = cljs.core._nth(inst_31568,inst_31570);
var inst_31579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31578,(0),null);
var inst_31580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31578,(1),null);
var state_31688__$1 = (function (){var statearr_31825 = state_31688;
(statearr_31825[(24)] = inst_31579);

return statearr_31825;
})();
if(cljs.core.truth_(inst_31580)){
var statearr_31826_33106 = state_31688__$1;
(statearr_31826_33106[(1)] = (13));

} else {
var statearr_31827_33107 = state_31688__$1;
(statearr_31827_33107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (18))){
var inst_31615 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31828_33108 = state_31688__$1;
(statearr_31828_33108[(2)] = inst_31615);

(statearr_31828_33108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (42))){
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31688__$1,(45),dchan);
} else {
if((state_val_31689 === (37))){
var inst_31657 = (state_31688[(22)]);
var inst_31648 = (state_31688[(23)]);
var inst_31558 = (state_31688[(12)]);
var inst_31657__$1 = cljs.core.first(inst_31648);
var inst_31658 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31657__$1,inst_31558,done);
var state_31688__$1 = (function (){var statearr_31830 = state_31688;
(statearr_31830[(22)] = inst_31657__$1);

return statearr_31830;
})();
if(cljs.core.truth_(inst_31658)){
var statearr_31831_33109 = state_31688__$1;
(statearr_31831_33109[(1)] = (39));

} else {
var statearr_31834_33110 = state_31688__$1;
(statearr_31834_33110[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (8))){
var inst_31570 = (state_31688[(14)]);
var inst_31569 = (state_31688[(15)]);
var inst_31572 = (inst_31570 < inst_31569);
var inst_31573 = inst_31572;
var state_31688__$1 = state_31688;
if(cljs.core.truth_(inst_31573)){
var statearr_31835_33111 = state_31688__$1;
(statearr_31835_33111[(1)] = (10));

} else {
var statearr_31836_33112 = state_31688__$1;
(statearr_31836_33112[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30718__auto__ = null;
var cljs$core$async$mult_$_state_machine__30718__auto____0 = (function (){
var statearr_31840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31840[(0)] = cljs$core$async$mult_$_state_machine__30718__auto__);

(statearr_31840[(1)] = (1));

return statearr_31840;
});
var cljs$core$async$mult_$_state_machine__30718__auto____1 = (function (state_31688){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_31688);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e31841){var ex__30721__auto__ = e31841;
var statearr_31843_33113 = state_31688;
(statearr_31843_33113[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_31688[(4)]))){
var statearr_31845_33114 = state_31688;
(statearr_31845_33114[(1)] = cljs.core.first((state_31688[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33115 = state_31688;
state_31688 = G__33115;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30718__auto__ = function(state_31688){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30718__auto____1.call(this,state_31688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30718__auto____0;
cljs$core$async$mult_$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30718__auto____1;
return cljs$core$async$mult_$_state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_31847 = f__30812__auto__();
(statearr_31847[(6)] = c__30811__auto___33055);

return statearr_31847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31853 = arguments.length;
switch (G__31853) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33117 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33117(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33118 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33118(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33119 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33119(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33120 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33120(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33121 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33121(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33122 = arguments.length;
var i__4731__auto___33123 = (0);
while(true){
if((i__4731__auto___33123 < len__4730__auto___33122)){
args__4736__auto__.push((arguments[i__4731__auto___33123]));

var G__33124 = (i__4731__auto___33123 + (1));
i__4731__auto___33123 = G__33124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31884){
var map__31885 = p__31884;
var map__31885__$1 = (((((!((map__31885 == null))))?(((((map__31885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31885):map__31885);
var opts = map__31885__$1;
var statearr_31890_33125 = state;
(statearr_31890_33125[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31892_33128 = state;
(statearr_31892_33128[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31895_33130 = state;
(statearr_31895_33130[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31873){
var G__31875 = cljs.core.first(seq31873);
var seq31873__$1 = cljs.core.next(seq31873);
var G__31876 = cljs.core.first(seq31873__$1);
var seq31873__$2 = cljs.core.next(seq31873__$1);
var G__31877 = cljs.core.first(seq31873__$2);
var seq31873__$3 = cljs.core.next(seq31873__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31875,G__31876,G__31877,seq31873__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31944 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31945){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31945 = meta31945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31946,meta31945__$1){
var self__ = this;
var _31946__$1 = this;
return (new cljs.core.async.t_cljs$core$async31944(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31945__$1));
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31946){
var self__ = this;
var _31946__$1 = this;
return self__.meta31945;
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31944.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31945","meta31945",1777524873,null)], null);
}));

(cljs.core.async.t_cljs$core$async31944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31944");

(cljs.core.async.t_cljs$core$async31944.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async31944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31944.
 */
cljs.core.async.__GT_t_cljs$core$async31944 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31944(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31945){
return (new cljs.core.async.t_cljs$core$async31944(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31945));
});

}

return (new cljs.core.async.t_cljs$core$async31944(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30811__auto___33166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32077){
var state_val_32078 = (state_32077[(1)]);
if((state_val_32078 === (7))){
var inst_31991 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32079_33168 = state_32077__$1;
(statearr_32079_33168[(2)] = inst_31991);

(statearr_32079_33168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (20))){
var inst_32004 = (state_32077[(7)]);
var state_32077__$1 = state_32077;
var statearr_32080_33171 = state_32077__$1;
(statearr_32080_33171[(2)] = inst_32004);

(statearr_32080_33171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (27))){
var state_32077__$1 = state_32077;
var statearr_32081_33173 = state_32077__$1;
(statearr_32081_33173[(2)] = null);

(statearr_32081_33173[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (1))){
var inst_31978 = (state_32077[(8)]);
var inst_31978__$1 = calc_state();
var inst_31980 = (inst_31978__$1 == null);
var inst_31981 = cljs.core.not(inst_31980);
var state_32077__$1 = (function (){var statearr_32082 = state_32077;
(statearr_32082[(8)] = inst_31978__$1);

return statearr_32082;
})();
if(inst_31981){
var statearr_32083_33174 = state_32077__$1;
(statearr_32083_33174[(1)] = (2));

} else {
var statearr_32084_33175 = state_32077__$1;
(statearr_32084_33175[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (24))){
var inst_32051 = (state_32077[(9)]);
var inst_32028 = (state_32077[(10)]);
var inst_32037 = (state_32077[(11)]);
var inst_32051__$1 = (inst_32028.cljs$core$IFn$_invoke$arity$1 ? inst_32028.cljs$core$IFn$_invoke$arity$1(inst_32037) : inst_32028.call(null,inst_32037));
var state_32077__$1 = (function (){var statearr_32086 = state_32077;
(statearr_32086[(9)] = inst_32051__$1);

return statearr_32086;
})();
if(cljs.core.truth_(inst_32051__$1)){
var statearr_32087_33177 = state_32077__$1;
(statearr_32087_33177[(1)] = (29));

} else {
var statearr_32088_33178 = state_32077__$1;
(statearr_32088_33178[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (4))){
var inst_31994 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_31994)){
var statearr_32089_33179 = state_32077__$1;
(statearr_32089_33179[(1)] = (8));

} else {
var statearr_32090_33180 = state_32077__$1;
(statearr_32090_33180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (15))){
var inst_32022 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_32022)){
var statearr_32091_33181 = state_32077__$1;
(statearr_32091_33181[(1)] = (19));

} else {
var statearr_32092_33182 = state_32077__$1;
(statearr_32092_33182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (21))){
var inst_32027 = (state_32077[(12)]);
var inst_32027__$1 = (state_32077[(2)]);
var inst_32028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32027__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32027__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32027__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32077__$1 = (function (){var statearr_32093 = state_32077;
(statearr_32093[(12)] = inst_32027__$1);

(statearr_32093[(10)] = inst_32028);

(statearr_32093[(13)] = inst_32029);

return statearr_32093;
})();
return cljs.core.async.ioc_alts_BANG_(state_32077__$1,(22),inst_32030);
} else {
if((state_val_32078 === (31))){
var inst_32059 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_32059)){
var statearr_32094_33183 = state_32077__$1;
(statearr_32094_33183[(1)] = (32));

} else {
var statearr_32095_33184 = state_32077__$1;
(statearr_32095_33184[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (32))){
var inst_32036 = (state_32077[(14)]);
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32077__$1,(35),out,inst_32036);
} else {
if((state_val_32078 === (33))){
var inst_32027 = (state_32077[(12)]);
var inst_32004 = inst_32027;
var state_32077__$1 = (function (){var statearr_32096 = state_32077;
(statearr_32096[(7)] = inst_32004);

return statearr_32096;
})();
var statearr_32097_33185 = state_32077__$1;
(statearr_32097_33185[(2)] = null);

(statearr_32097_33185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (13))){
var inst_32004 = (state_32077[(7)]);
var inst_32011 = inst_32004.cljs$lang$protocol_mask$partition0$;
var inst_32012 = (inst_32011 & (64));
var inst_32013 = inst_32004.cljs$core$ISeq$;
var inst_32014 = (cljs.core.PROTOCOL_SENTINEL === inst_32013);
var inst_32015 = ((inst_32012) || (inst_32014));
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_32015)){
var statearr_32098_33186 = state_32077__$1;
(statearr_32098_33186[(1)] = (16));

} else {
var statearr_32099_33187 = state_32077__$1;
(statearr_32099_33187[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (22))){
var inst_32036 = (state_32077[(14)]);
var inst_32037 = (state_32077[(11)]);
var inst_32035 = (state_32077[(2)]);
var inst_32036__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32035,(0),null);
var inst_32037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32035,(1),null);
var inst_32038 = (inst_32036__$1 == null);
var inst_32039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32037__$1,change);
var inst_32040 = ((inst_32038) || (inst_32039));
var state_32077__$1 = (function (){var statearr_32100 = state_32077;
(statearr_32100[(14)] = inst_32036__$1);

(statearr_32100[(11)] = inst_32037__$1);

return statearr_32100;
})();
if(cljs.core.truth_(inst_32040)){
var statearr_32101_33188 = state_32077__$1;
(statearr_32101_33188[(1)] = (23));

} else {
var statearr_32102_33189 = state_32077__$1;
(statearr_32102_33189[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (36))){
var inst_32027 = (state_32077[(12)]);
var inst_32004 = inst_32027;
var state_32077__$1 = (function (){var statearr_32103 = state_32077;
(statearr_32103[(7)] = inst_32004);

return statearr_32103;
})();
var statearr_32104_33190 = state_32077__$1;
(statearr_32104_33190[(2)] = null);

(statearr_32104_33190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (29))){
var inst_32051 = (state_32077[(9)]);
var state_32077__$1 = state_32077;
var statearr_32105_33191 = state_32077__$1;
(statearr_32105_33191[(2)] = inst_32051);

(statearr_32105_33191[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (6))){
var state_32077__$1 = state_32077;
var statearr_32106_33192 = state_32077__$1;
(statearr_32106_33192[(2)] = false);

(statearr_32106_33192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (28))){
var inst_32047 = (state_32077[(2)]);
var inst_32048 = calc_state();
var inst_32004 = inst_32048;
var state_32077__$1 = (function (){var statearr_32107 = state_32077;
(statearr_32107[(7)] = inst_32004);

(statearr_32107[(15)] = inst_32047);

return statearr_32107;
})();
var statearr_32108_33193 = state_32077__$1;
(statearr_32108_33193[(2)] = null);

(statearr_32108_33193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (25))){
var inst_32073 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32109_33194 = state_32077__$1;
(statearr_32109_33194[(2)] = inst_32073);

(statearr_32109_33194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (34))){
var inst_32071 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32110_33197 = state_32077__$1;
(statearr_32110_33197[(2)] = inst_32071);

(statearr_32110_33197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (17))){
var state_32077__$1 = state_32077;
var statearr_32111_33199 = state_32077__$1;
(statearr_32111_33199[(2)] = false);

(statearr_32111_33199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (3))){
var state_32077__$1 = state_32077;
var statearr_32112_33200 = state_32077__$1;
(statearr_32112_33200[(2)] = false);

(statearr_32112_33200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (12))){
var inst_32075 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32077__$1,inst_32075);
} else {
if((state_val_32078 === (2))){
var inst_31978 = (state_32077[(8)]);
var inst_31983 = inst_31978.cljs$lang$protocol_mask$partition0$;
var inst_31984 = (inst_31983 & (64));
var inst_31985 = inst_31978.cljs$core$ISeq$;
var inst_31986 = (cljs.core.PROTOCOL_SENTINEL === inst_31985);
var inst_31987 = ((inst_31984) || (inst_31986));
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_31987)){
var statearr_32113_33205 = state_32077__$1;
(statearr_32113_33205[(1)] = (5));

} else {
var statearr_32114_33207 = state_32077__$1;
(statearr_32114_33207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (23))){
var inst_32036 = (state_32077[(14)]);
var inst_32042 = (inst_32036 == null);
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_32042)){
var statearr_32115_33210 = state_32077__$1;
(statearr_32115_33210[(1)] = (26));

} else {
var statearr_32116_33211 = state_32077__$1;
(statearr_32116_33211[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (35))){
var inst_32062 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_32062)){
var statearr_32117_33212 = state_32077__$1;
(statearr_32117_33212[(1)] = (36));

} else {
var statearr_32118_33214 = state_32077__$1;
(statearr_32118_33214[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (19))){
var inst_32004 = (state_32077[(7)]);
var inst_32024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32004);
var state_32077__$1 = state_32077;
var statearr_32119_33216 = state_32077__$1;
(statearr_32119_33216[(2)] = inst_32024);

(statearr_32119_33216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (11))){
var inst_32004 = (state_32077[(7)]);
var inst_32008 = (inst_32004 == null);
var inst_32009 = cljs.core.not(inst_32008);
var state_32077__$1 = state_32077;
if(inst_32009){
var statearr_32120_33217 = state_32077__$1;
(statearr_32120_33217[(1)] = (13));

} else {
var statearr_32121_33218 = state_32077__$1;
(statearr_32121_33218[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (9))){
var inst_31978 = (state_32077[(8)]);
var state_32077__$1 = state_32077;
var statearr_32122_33219 = state_32077__$1;
(statearr_32122_33219[(2)] = inst_31978);

(statearr_32122_33219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (5))){
var state_32077__$1 = state_32077;
var statearr_32123_33220 = state_32077__$1;
(statearr_32123_33220[(2)] = true);

(statearr_32123_33220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (14))){
var state_32077__$1 = state_32077;
var statearr_32137_33221 = state_32077__$1;
(statearr_32137_33221[(2)] = false);

(statearr_32137_33221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (26))){
var inst_32037 = (state_32077[(11)]);
var inst_32044 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32037);
var state_32077__$1 = state_32077;
var statearr_32138_33222 = state_32077__$1;
(statearr_32138_33222[(2)] = inst_32044);

(statearr_32138_33222[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (16))){
var state_32077__$1 = state_32077;
var statearr_32139_33223 = state_32077__$1;
(statearr_32139_33223[(2)] = true);

(statearr_32139_33223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (38))){
var inst_32067 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32140_33224 = state_32077__$1;
(statearr_32140_33224[(2)] = inst_32067);

(statearr_32140_33224[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (30))){
var inst_32028 = (state_32077[(10)]);
var inst_32037 = (state_32077[(11)]);
var inst_32029 = (state_32077[(13)]);
var inst_32054 = cljs.core.empty_QMARK_(inst_32028);
var inst_32055 = (inst_32029.cljs$core$IFn$_invoke$arity$1 ? inst_32029.cljs$core$IFn$_invoke$arity$1(inst_32037) : inst_32029.call(null,inst_32037));
var inst_32056 = cljs.core.not(inst_32055);
var inst_32057 = ((inst_32054) && (inst_32056));
var state_32077__$1 = state_32077;
var statearr_32141_33229 = state_32077__$1;
(statearr_32141_33229[(2)] = inst_32057);

(statearr_32141_33229[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (10))){
var inst_31978 = (state_32077[(8)]);
var inst_31999 = (state_32077[(2)]);
var inst_32000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31999,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31999,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31999,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32004 = inst_31978;
var state_32077__$1 = (function (){var statearr_32142 = state_32077;
(statearr_32142[(16)] = inst_32000);

(statearr_32142[(17)] = inst_32003);

(statearr_32142[(7)] = inst_32004);

(statearr_32142[(18)] = inst_32002);

return statearr_32142;
})();
var statearr_32143_33235 = state_32077__$1;
(statearr_32143_33235[(2)] = null);

(statearr_32143_33235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (18))){
var inst_32019 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32144_33240 = state_32077__$1;
(statearr_32144_33240[(2)] = inst_32019);

(statearr_32144_33240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (37))){
var state_32077__$1 = state_32077;
var statearr_32145_33241 = state_32077__$1;
(statearr_32145_33241[(2)] = null);

(statearr_32145_33241[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (8))){
var inst_31978 = (state_32077[(8)]);
var inst_31996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31978);
var state_32077__$1 = state_32077;
var statearr_32146_33243 = state_32077__$1;
(statearr_32146_33243[(2)] = inst_31996);

(statearr_32146_33243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30718__auto__ = null;
var cljs$core$async$mix_$_state_machine__30718__auto____0 = (function (){
var statearr_32147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32147[(0)] = cljs$core$async$mix_$_state_machine__30718__auto__);

(statearr_32147[(1)] = (1));

return statearr_32147;
});
var cljs$core$async$mix_$_state_machine__30718__auto____1 = (function (state_32077){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32077);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32148){var ex__30721__auto__ = e32148;
var statearr_32149_33246 = state_32077;
(statearr_32149_33246[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32077[(4)]))){
var statearr_32150_33247 = state_32077;
(statearr_32150_33247[(1)] = cljs.core.first((state_32077[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33250 = state_32077;
state_32077 = G__33250;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30718__auto__ = function(state_32077){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30718__auto____1.call(this,state_32077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30718__auto____0;
cljs$core$async$mix_$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30718__auto____1;
return cljs$core$async$mix_$_state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32151 = f__30812__auto__();
(statearr_32151[(6)] = c__30811__auto___33166);

return statearr_32151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33262 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33262(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33266 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33266(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33272 = (function() {
var G__33273 = null;
var G__33273__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33273__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33273 = function(p,v){
switch(arguments.length){
case 1:
return G__33273__1.call(this,p);
case 2:
return G__33273__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33273.cljs$core$IFn$_invoke$arity$1 = G__33273__1;
G__33273.cljs$core$IFn$_invoke$arity$2 = G__33273__2;
return G__33273;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32153 = arguments.length;
switch (G__32153) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33272(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33272(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32156 = arguments.length;
switch (G__32156) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32154_SHARP_){
if(cljs.core.truth_((p1__32154_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32154_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32154_SHARP_.call(null,topic)))){
return p1__32154_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32154_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32157 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32158){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32158 = meta32158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32159,meta32158__$1){
var self__ = this;
var _32159__$1 = this;
return (new cljs.core.async.t_cljs$core$async32157(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32158__$1));
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32159){
var self__ = this;
var _32159__$1 = this;
return self__.meta32158;
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32157.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32158","meta32158",373017174,null)], null);
}));

(cljs.core.async.t_cljs$core$async32157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32157");

(cljs.core.async.t_cljs$core$async32157.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32157.
 */
cljs.core.async.__GT_t_cljs$core$async32157 = (function cljs$core$async$__GT_t_cljs$core$async32157(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32158){
return (new cljs.core.async.t_cljs$core$async32157(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32158));
});

}

return (new cljs.core.async.t_cljs$core$async32157(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30811__auto___33298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32231){
var state_val_32232 = (state_32231[(1)]);
if((state_val_32232 === (7))){
var inst_32227 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32233_33299 = state_32231__$1;
(statearr_32233_33299[(2)] = inst_32227);

(statearr_32233_33299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (20))){
var state_32231__$1 = state_32231;
var statearr_32234_33300 = state_32231__$1;
(statearr_32234_33300[(2)] = null);

(statearr_32234_33300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (1))){
var state_32231__$1 = state_32231;
var statearr_32235_33301 = state_32231__$1;
(statearr_32235_33301[(2)] = null);

(statearr_32235_33301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (24))){
var inst_32210 = (state_32231[(7)]);
var inst_32219 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32210);
var state_32231__$1 = state_32231;
var statearr_32236_33302 = state_32231__$1;
(statearr_32236_33302[(2)] = inst_32219);

(statearr_32236_33302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (4))){
var inst_32162 = (state_32231[(8)]);
var inst_32162__$1 = (state_32231[(2)]);
var inst_32163 = (inst_32162__$1 == null);
var state_32231__$1 = (function (){var statearr_32237 = state_32231;
(statearr_32237[(8)] = inst_32162__$1);

return statearr_32237;
})();
if(cljs.core.truth_(inst_32163)){
var statearr_32238_33303 = state_32231__$1;
(statearr_32238_33303[(1)] = (5));

} else {
var statearr_32239_33304 = state_32231__$1;
(statearr_32239_33304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (15))){
var inst_32204 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32240_33305 = state_32231__$1;
(statearr_32240_33305[(2)] = inst_32204);

(statearr_32240_33305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (21))){
var inst_32224 = (state_32231[(2)]);
var state_32231__$1 = (function (){var statearr_32241 = state_32231;
(statearr_32241[(9)] = inst_32224);

return statearr_32241;
})();
var statearr_32242_33306 = state_32231__$1;
(statearr_32242_33306[(2)] = null);

(statearr_32242_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (13))){
var inst_32186 = (state_32231[(10)]);
var inst_32188 = cljs.core.chunked_seq_QMARK_(inst_32186);
var state_32231__$1 = state_32231;
if(inst_32188){
var statearr_32243_33307 = state_32231__$1;
(statearr_32243_33307[(1)] = (16));

} else {
var statearr_32244_33308 = state_32231__$1;
(statearr_32244_33308[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (22))){
var inst_32216 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
if(cljs.core.truth_(inst_32216)){
var statearr_32245_33309 = state_32231__$1;
(statearr_32245_33309[(1)] = (23));

} else {
var statearr_32246_33310 = state_32231__$1;
(statearr_32246_33310[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (6))){
var inst_32212 = (state_32231[(11)]);
var inst_32210 = (state_32231[(7)]);
var inst_32162 = (state_32231[(8)]);
var inst_32210__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32162) : topic_fn.call(null,inst_32162));
var inst_32211 = cljs.core.deref(mults);
var inst_32212__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32211,inst_32210__$1);
var state_32231__$1 = (function (){var statearr_32247 = state_32231;
(statearr_32247[(11)] = inst_32212__$1);

(statearr_32247[(7)] = inst_32210__$1);

return statearr_32247;
})();
if(cljs.core.truth_(inst_32212__$1)){
var statearr_32248_33311 = state_32231__$1;
(statearr_32248_33311[(1)] = (19));

} else {
var statearr_32249_33312 = state_32231__$1;
(statearr_32249_33312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (25))){
var inst_32221 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32250_33313 = state_32231__$1;
(statearr_32250_33313[(2)] = inst_32221);

(statearr_32250_33313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (17))){
var inst_32186 = (state_32231[(10)]);
var inst_32195 = cljs.core.first(inst_32186);
var inst_32196 = cljs.core.async.muxch_STAR_(inst_32195);
var inst_32197 = cljs.core.async.close_BANG_(inst_32196);
var inst_32198 = cljs.core.next(inst_32186);
var inst_32172 = inst_32198;
var inst_32173 = null;
var inst_32174 = (0);
var inst_32175 = (0);
var state_32231__$1 = (function (){var statearr_32251 = state_32231;
(statearr_32251[(12)] = inst_32175);

(statearr_32251[(13)] = inst_32173);

(statearr_32251[(14)] = inst_32197);

(statearr_32251[(15)] = inst_32174);

(statearr_32251[(16)] = inst_32172);

return statearr_32251;
})();
var statearr_32252_33318 = state_32231__$1;
(statearr_32252_33318[(2)] = null);

(statearr_32252_33318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (3))){
var inst_32229 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32231__$1,inst_32229);
} else {
if((state_val_32232 === (12))){
var inst_32206 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32253_33319 = state_32231__$1;
(statearr_32253_33319[(2)] = inst_32206);

(statearr_32253_33319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (2))){
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32231__$1,(4),ch);
} else {
if((state_val_32232 === (23))){
var state_32231__$1 = state_32231;
var statearr_32254_33320 = state_32231__$1;
(statearr_32254_33320[(2)] = null);

(statearr_32254_33320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (19))){
var inst_32212 = (state_32231[(11)]);
var inst_32162 = (state_32231[(8)]);
var inst_32214 = cljs.core.async.muxch_STAR_(inst_32212);
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32231__$1,(22),inst_32214,inst_32162);
} else {
if((state_val_32232 === (11))){
var inst_32186 = (state_32231[(10)]);
var inst_32172 = (state_32231[(16)]);
var inst_32186__$1 = cljs.core.seq(inst_32172);
var state_32231__$1 = (function (){var statearr_32255 = state_32231;
(statearr_32255[(10)] = inst_32186__$1);

return statearr_32255;
})();
if(inst_32186__$1){
var statearr_32256_33323 = state_32231__$1;
(statearr_32256_33323[(1)] = (13));

} else {
var statearr_32257_33324 = state_32231__$1;
(statearr_32257_33324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (9))){
var inst_32208 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32258_33325 = state_32231__$1;
(statearr_32258_33325[(2)] = inst_32208);

(statearr_32258_33325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (5))){
var inst_32169 = cljs.core.deref(mults);
var inst_32170 = cljs.core.vals(inst_32169);
var inst_32171 = cljs.core.seq(inst_32170);
var inst_32172 = inst_32171;
var inst_32173 = null;
var inst_32174 = (0);
var inst_32175 = (0);
var state_32231__$1 = (function (){var statearr_32259 = state_32231;
(statearr_32259[(12)] = inst_32175);

(statearr_32259[(13)] = inst_32173);

(statearr_32259[(15)] = inst_32174);

(statearr_32259[(16)] = inst_32172);

return statearr_32259;
})();
var statearr_32260_33327 = state_32231__$1;
(statearr_32260_33327[(2)] = null);

(statearr_32260_33327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (14))){
var state_32231__$1 = state_32231;
var statearr_32264_33328 = state_32231__$1;
(statearr_32264_33328[(2)] = null);

(statearr_32264_33328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (16))){
var inst_32186 = (state_32231[(10)]);
var inst_32190 = cljs.core.chunk_first(inst_32186);
var inst_32191 = cljs.core.chunk_rest(inst_32186);
var inst_32192 = cljs.core.count(inst_32190);
var inst_32172 = inst_32191;
var inst_32173 = inst_32190;
var inst_32174 = inst_32192;
var inst_32175 = (0);
var state_32231__$1 = (function (){var statearr_32265 = state_32231;
(statearr_32265[(12)] = inst_32175);

(statearr_32265[(13)] = inst_32173);

(statearr_32265[(15)] = inst_32174);

(statearr_32265[(16)] = inst_32172);

return statearr_32265;
})();
var statearr_32266_33329 = state_32231__$1;
(statearr_32266_33329[(2)] = null);

(statearr_32266_33329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (10))){
var inst_32175 = (state_32231[(12)]);
var inst_32173 = (state_32231[(13)]);
var inst_32174 = (state_32231[(15)]);
var inst_32172 = (state_32231[(16)]);
var inst_32180 = cljs.core._nth(inst_32173,inst_32175);
var inst_32181 = cljs.core.async.muxch_STAR_(inst_32180);
var inst_32182 = cljs.core.async.close_BANG_(inst_32181);
var inst_32183 = (inst_32175 + (1));
var tmp32261 = inst_32173;
var tmp32262 = inst_32174;
var tmp32263 = inst_32172;
var inst_32172__$1 = tmp32263;
var inst_32173__$1 = tmp32261;
var inst_32174__$1 = tmp32262;
var inst_32175__$1 = inst_32183;
var state_32231__$1 = (function (){var statearr_32267 = state_32231;
(statearr_32267[(12)] = inst_32175__$1);

(statearr_32267[(13)] = inst_32173__$1);

(statearr_32267[(17)] = inst_32182);

(statearr_32267[(15)] = inst_32174__$1);

(statearr_32267[(16)] = inst_32172__$1);

return statearr_32267;
})();
var statearr_32268_33331 = state_32231__$1;
(statearr_32268_33331[(2)] = null);

(statearr_32268_33331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (18))){
var inst_32201 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32269_33336 = state_32231__$1;
(statearr_32269_33336[(2)] = inst_32201);

(statearr_32269_33336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32232 === (8))){
var inst_32175 = (state_32231[(12)]);
var inst_32174 = (state_32231[(15)]);
var inst_32177 = (inst_32175 < inst_32174);
var inst_32178 = inst_32177;
var state_32231__$1 = state_32231;
if(cljs.core.truth_(inst_32178)){
var statearr_32270_33337 = state_32231__$1;
(statearr_32270_33337[(1)] = (10));

} else {
var statearr_32271_33338 = state_32231__$1;
(statearr_32271_33338[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_32272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32272[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_32272[(1)] = (1));

return statearr_32272;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_32231){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32231);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32273){var ex__30721__auto__ = e32273;
var statearr_32274_33339 = state_32231;
(statearr_32274_33339[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32231[(4)]))){
var statearr_32275_33340 = state_32231;
(statearr_32275_33340[(1)] = cljs.core.first((state_32231[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33341 = state_32231;
state_32231 = G__33341;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_32231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_32231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32276 = f__30812__auto__();
(statearr_32276[(6)] = c__30811__auto___33298);

return statearr_32276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32278 = arguments.length;
switch (G__32278) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32280 = arguments.length;
switch (G__32280) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32282 = arguments.length;
switch (G__32282) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30811__auto___33347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32325){
var state_val_32326 = (state_32325[(1)]);
if((state_val_32326 === (7))){
var state_32325__$1 = state_32325;
var statearr_32327_33349 = state_32325__$1;
(statearr_32327_33349[(2)] = null);

(statearr_32327_33349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (1))){
var state_32325__$1 = state_32325;
var statearr_32328_33350 = state_32325__$1;
(statearr_32328_33350[(2)] = null);

(statearr_32328_33350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (4))){
var inst_32286 = (state_32325[(7)]);
var inst_32285 = (state_32325[(8)]);
var inst_32288 = (inst_32286 < inst_32285);
var state_32325__$1 = state_32325;
if(cljs.core.truth_(inst_32288)){
var statearr_32329_33351 = state_32325__$1;
(statearr_32329_33351[(1)] = (6));

} else {
var statearr_32330_33353 = state_32325__$1;
(statearr_32330_33353[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (15))){
var inst_32311 = (state_32325[(9)]);
var inst_32316 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32311);
var state_32325__$1 = state_32325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32325__$1,(17),out,inst_32316);
} else {
if((state_val_32326 === (13))){
var inst_32311 = (state_32325[(9)]);
var inst_32311__$1 = (state_32325[(2)]);
var inst_32312 = cljs.core.some(cljs.core.nil_QMARK_,inst_32311__$1);
var state_32325__$1 = (function (){var statearr_32331 = state_32325;
(statearr_32331[(9)] = inst_32311__$1);

return statearr_32331;
})();
if(cljs.core.truth_(inst_32312)){
var statearr_32332_33354 = state_32325__$1;
(statearr_32332_33354[(1)] = (14));

} else {
var statearr_32333_33355 = state_32325__$1;
(statearr_32333_33355[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (6))){
var state_32325__$1 = state_32325;
var statearr_32334_33356 = state_32325__$1;
(statearr_32334_33356[(2)] = null);

(statearr_32334_33356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (17))){
var inst_32318 = (state_32325[(2)]);
var state_32325__$1 = (function (){var statearr_32336 = state_32325;
(statearr_32336[(10)] = inst_32318);

return statearr_32336;
})();
var statearr_32337_33357 = state_32325__$1;
(statearr_32337_33357[(2)] = null);

(statearr_32337_33357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (3))){
var inst_32323 = (state_32325[(2)]);
var state_32325__$1 = state_32325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32325__$1,inst_32323);
} else {
if((state_val_32326 === (12))){
var _ = (function (){var statearr_32338 = state_32325;
(statearr_32338[(4)] = cljs.core.rest((state_32325[(4)])));

return statearr_32338;
})();
var state_32325__$1 = state_32325;
var ex32335 = (state_32325__$1[(2)]);
var statearr_32339_33358 = state_32325__$1;
(statearr_32339_33358[(5)] = ex32335);


if((ex32335 instanceof Object)){
var statearr_32340_33359 = state_32325__$1;
(statearr_32340_33359[(1)] = (11));

(statearr_32340_33359[(5)] = null);

} else {
throw ex32335;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (2))){
var inst_32284 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32285 = cnt;
var inst_32286 = (0);
var state_32325__$1 = (function (){var statearr_32341 = state_32325;
(statearr_32341[(11)] = inst_32284);

(statearr_32341[(7)] = inst_32286);

(statearr_32341[(8)] = inst_32285);

return statearr_32341;
})();
var statearr_32342_33360 = state_32325__$1;
(statearr_32342_33360[(2)] = null);

(statearr_32342_33360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (11))){
var inst_32290 = (state_32325[(2)]);
var inst_32291 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32325__$1 = (function (){var statearr_32343 = state_32325;
(statearr_32343[(12)] = inst_32290);

return statearr_32343;
})();
var statearr_32344_33361 = state_32325__$1;
(statearr_32344_33361[(2)] = inst_32291);

(statearr_32344_33361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (9))){
var inst_32286 = (state_32325[(7)]);
var _ = (function (){var statearr_32345 = state_32325;
(statearr_32345[(4)] = cljs.core.cons((12),(state_32325[(4)])));

return statearr_32345;
})();
var inst_32297 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32286) : chs__$1.call(null,inst_32286));
var inst_32298 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32286) : done.call(null,inst_32286));
var inst_32299 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32297,inst_32298);
var ___$1 = (function (){var statearr_32346 = state_32325;
(statearr_32346[(4)] = cljs.core.rest((state_32325[(4)])));

return statearr_32346;
})();
var state_32325__$1 = state_32325;
var statearr_32347_33364 = state_32325__$1;
(statearr_32347_33364[(2)] = inst_32299);

(statearr_32347_33364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (5))){
var inst_32309 = (state_32325[(2)]);
var state_32325__$1 = (function (){var statearr_32348 = state_32325;
(statearr_32348[(13)] = inst_32309);

return statearr_32348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32325__$1,(13),dchan);
} else {
if((state_val_32326 === (14))){
var inst_32314 = cljs.core.async.close_BANG_(out);
var state_32325__$1 = state_32325;
var statearr_32349_33365 = state_32325__$1;
(statearr_32349_33365[(2)] = inst_32314);

(statearr_32349_33365[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (16))){
var inst_32321 = (state_32325[(2)]);
var state_32325__$1 = state_32325;
var statearr_32350_33366 = state_32325__$1;
(statearr_32350_33366[(2)] = inst_32321);

(statearr_32350_33366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (10))){
var inst_32286 = (state_32325[(7)]);
var inst_32302 = (state_32325[(2)]);
var inst_32303 = (inst_32286 + (1));
var inst_32286__$1 = inst_32303;
var state_32325__$1 = (function (){var statearr_32351 = state_32325;
(statearr_32351[(7)] = inst_32286__$1);

(statearr_32351[(14)] = inst_32302);

return statearr_32351;
})();
var statearr_32352_33367 = state_32325__$1;
(statearr_32352_33367[(2)] = null);

(statearr_32352_33367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32326 === (8))){
var inst_32307 = (state_32325[(2)]);
var state_32325__$1 = state_32325;
var statearr_32353_33368 = state_32325__$1;
(statearr_32353_33368[(2)] = inst_32307);

(statearr_32353_33368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_32354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32354[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_32354[(1)] = (1));

return statearr_32354;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_32325){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32325);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32355){var ex__30721__auto__ = e32355;
var statearr_32356_33369 = state_32325;
(statearr_32356_33369[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32325[(4)]))){
var statearr_32357_33370 = state_32325;
(statearr_32357_33370[(1)] = cljs.core.first((state_32325[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33371 = state_32325;
state_32325 = G__33371;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_32325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_32325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32358 = f__30812__auto__();
(statearr_32358[(6)] = c__30811__auto___33347);

return statearr_32358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32361 = arguments.length;
switch (G__32361) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30811__auto___33373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32393){
var state_val_32394 = (state_32393[(1)]);
if((state_val_32394 === (7))){
var inst_32373 = (state_32393[(7)]);
var inst_32372 = (state_32393[(8)]);
var inst_32372__$1 = (state_32393[(2)]);
var inst_32373__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32372__$1,(0),null);
var inst_32374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32372__$1,(1),null);
var inst_32375 = (inst_32373__$1 == null);
var state_32393__$1 = (function (){var statearr_32395 = state_32393;
(statearr_32395[(9)] = inst_32374);

(statearr_32395[(7)] = inst_32373__$1);

(statearr_32395[(8)] = inst_32372__$1);

return statearr_32395;
})();
if(cljs.core.truth_(inst_32375)){
var statearr_32396_33374 = state_32393__$1;
(statearr_32396_33374[(1)] = (8));

} else {
var statearr_32397_33376 = state_32393__$1;
(statearr_32397_33376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (1))){
var inst_32362 = cljs.core.vec(chs);
var inst_32363 = inst_32362;
var state_32393__$1 = (function (){var statearr_32398 = state_32393;
(statearr_32398[(10)] = inst_32363);

return statearr_32398;
})();
var statearr_32399_33377 = state_32393__$1;
(statearr_32399_33377[(2)] = null);

(statearr_32399_33377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (4))){
var inst_32363 = (state_32393[(10)]);
var state_32393__$1 = state_32393;
return cljs.core.async.ioc_alts_BANG_(state_32393__$1,(7),inst_32363);
} else {
if((state_val_32394 === (6))){
var inst_32389 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32400_33378 = state_32393__$1;
(statearr_32400_33378[(2)] = inst_32389);

(statearr_32400_33378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (3))){
var inst_32391 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32393__$1,inst_32391);
} else {
if((state_val_32394 === (2))){
var inst_32363 = (state_32393[(10)]);
var inst_32365 = cljs.core.count(inst_32363);
var inst_32366 = (inst_32365 > (0));
var state_32393__$1 = state_32393;
if(cljs.core.truth_(inst_32366)){
var statearr_32402_33379 = state_32393__$1;
(statearr_32402_33379[(1)] = (4));

} else {
var statearr_32403_33380 = state_32393__$1;
(statearr_32403_33380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (11))){
var inst_32363 = (state_32393[(10)]);
var inst_32382 = (state_32393[(2)]);
var tmp32401 = inst_32363;
var inst_32363__$1 = tmp32401;
var state_32393__$1 = (function (){var statearr_32404 = state_32393;
(statearr_32404[(11)] = inst_32382);

(statearr_32404[(10)] = inst_32363__$1);

return statearr_32404;
})();
var statearr_32405_33385 = state_32393__$1;
(statearr_32405_33385[(2)] = null);

(statearr_32405_33385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (9))){
var inst_32373 = (state_32393[(7)]);
var state_32393__$1 = state_32393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32393__$1,(11),out,inst_32373);
} else {
if((state_val_32394 === (5))){
var inst_32387 = cljs.core.async.close_BANG_(out);
var state_32393__$1 = state_32393;
var statearr_32406_33386 = state_32393__$1;
(statearr_32406_33386[(2)] = inst_32387);

(statearr_32406_33386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (10))){
var inst_32385 = (state_32393[(2)]);
var state_32393__$1 = state_32393;
var statearr_32407_33416 = state_32393__$1;
(statearr_32407_33416[(2)] = inst_32385);

(statearr_32407_33416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32394 === (8))){
var inst_32374 = (state_32393[(9)]);
var inst_32373 = (state_32393[(7)]);
var inst_32363 = (state_32393[(10)]);
var inst_32372 = (state_32393[(8)]);
var inst_32377 = (function (){var cs = inst_32363;
var vec__32368 = inst_32372;
var v = inst_32373;
var c = inst_32374;
return (function (p1__32359_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32359_SHARP_);
});
})();
var inst_32378 = cljs.core.filterv(inst_32377,inst_32363);
var inst_32363__$1 = inst_32378;
var state_32393__$1 = (function (){var statearr_32408 = state_32393;
(statearr_32408[(10)] = inst_32363__$1);

return statearr_32408;
})();
var statearr_32409_33417 = state_32393__$1;
(statearr_32409_33417[(2)] = null);

(statearr_32409_33417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_32410 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32410[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_32410[(1)] = (1));

return statearr_32410;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_32393){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32393);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32411){var ex__30721__auto__ = e32411;
var statearr_32412_33418 = state_32393;
(statearr_32412_33418[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32393[(4)]))){
var statearr_32413_33419 = state_32393;
(statearr_32413_33419[(1)] = cljs.core.first((state_32393[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33420 = state_32393;
state_32393 = G__33420;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_32393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_32393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32414 = f__30812__auto__();
(statearr_32414[(6)] = c__30811__auto___33373);

return statearr_32414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32416 = arguments.length;
switch (G__32416) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30811__auto___33422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32440){
var state_val_32441 = (state_32440[(1)]);
if((state_val_32441 === (7))){
var inst_32422 = (state_32440[(7)]);
var inst_32422__$1 = (state_32440[(2)]);
var inst_32423 = (inst_32422__$1 == null);
var inst_32424 = cljs.core.not(inst_32423);
var state_32440__$1 = (function (){var statearr_32442 = state_32440;
(statearr_32442[(7)] = inst_32422__$1);

return statearr_32442;
})();
if(inst_32424){
var statearr_32443_33423 = state_32440__$1;
(statearr_32443_33423[(1)] = (8));

} else {
var statearr_32444_33424 = state_32440__$1;
(statearr_32444_33424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (1))){
var inst_32417 = (0);
var state_32440__$1 = (function (){var statearr_32445 = state_32440;
(statearr_32445[(8)] = inst_32417);

return statearr_32445;
})();
var statearr_32446_33425 = state_32440__$1;
(statearr_32446_33425[(2)] = null);

(statearr_32446_33425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (4))){
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32440__$1,(7),ch);
} else {
if((state_val_32441 === (6))){
var inst_32435 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32447_33426 = state_32440__$1;
(statearr_32447_33426[(2)] = inst_32435);

(statearr_32447_33426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (3))){
var inst_32437 = (state_32440[(2)]);
var inst_32438 = cljs.core.async.close_BANG_(out);
var state_32440__$1 = (function (){var statearr_32448 = state_32440;
(statearr_32448[(9)] = inst_32437);

return statearr_32448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32440__$1,inst_32438);
} else {
if((state_val_32441 === (2))){
var inst_32417 = (state_32440[(8)]);
var inst_32419 = (inst_32417 < n);
var state_32440__$1 = state_32440;
if(cljs.core.truth_(inst_32419)){
var statearr_32449_33427 = state_32440__$1;
(statearr_32449_33427[(1)] = (4));

} else {
var statearr_32450_33428 = state_32440__$1;
(statearr_32450_33428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (11))){
var inst_32417 = (state_32440[(8)]);
var inst_32427 = (state_32440[(2)]);
var inst_32428 = (inst_32417 + (1));
var inst_32417__$1 = inst_32428;
var state_32440__$1 = (function (){var statearr_32451 = state_32440;
(statearr_32451[(8)] = inst_32417__$1);

(statearr_32451[(10)] = inst_32427);

return statearr_32451;
})();
var statearr_32452_33429 = state_32440__$1;
(statearr_32452_33429[(2)] = null);

(statearr_32452_33429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (9))){
var state_32440__$1 = state_32440;
var statearr_32453_33430 = state_32440__$1;
(statearr_32453_33430[(2)] = null);

(statearr_32453_33430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (5))){
var state_32440__$1 = state_32440;
var statearr_32454_33431 = state_32440__$1;
(statearr_32454_33431[(2)] = null);

(statearr_32454_33431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (10))){
var inst_32432 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32455_33432 = state_32440__$1;
(statearr_32455_33432[(2)] = inst_32432);

(statearr_32455_33432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (8))){
var inst_32422 = (state_32440[(7)]);
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32440__$1,(11),out,inst_32422);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_32456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32456[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_32456[(1)] = (1));

return statearr_32456;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_32440){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32440);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32457){var ex__30721__auto__ = e32457;
var statearr_32458_33433 = state_32440;
(statearr_32458_33433[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32440[(4)]))){
var statearr_32459_33434 = state_32440;
(statearr_32459_33434[(1)] = cljs.core.first((state_32440[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33435 = state_32440;
state_32440 = G__33435;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_32440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_32440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32460 = f__30812__auto__();
(statearr_32460[(6)] = c__30811__auto___33422);

return statearr_32460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32462 = (function (f,ch,meta32463){
this.f = f;
this.ch = ch;
this.meta32463 = meta32463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32464,meta32463__$1){
var self__ = this;
var _32464__$1 = this;
return (new cljs.core.async.t_cljs$core$async32462(self__.f,self__.ch,meta32463__$1));
}));

(cljs.core.async.t_cljs$core$async32462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32464){
var self__ = this;
var _32464__$1 = this;
return self__.meta32463;
}));

(cljs.core.async.t_cljs$core$async32462.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32462.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32462.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32465 = (function (f,ch,meta32463,_,fn1,meta32466){
this.f = f;
this.ch = ch;
this.meta32463 = meta32463;
this._ = _;
this.fn1 = fn1;
this.meta32466 = meta32466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32467,meta32466__$1){
var self__ = this;
var _32467__$1 = this;
return (new cljs.core.async.t_cljs$core$async32465(self__.f,self__.ch,self__.meta32463,self__._,self__.fn1,meta32466__$1));
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32467){
var self__ = this;
var _32467__$1 = this;
return self__.meta32466;
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32461_SHARP_){
var G__32468 = (((p1__32461_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32461_SHARP_) : self__.f.call(null,p1__32461_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32468) : f1.call(null,G__32468));
});
}));

(cljs.core.async.t_cljs$core$async32465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32463","meta32463",-1276963568,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32462","cljs.core.async/t_cljs$core$async32462",1752869329,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32466","meta32466",2015955036,null)], null);
}));

(cljs.core.async.t_cljs$core$async32465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32465");

(cljs.core.async.t_cljs$core$async32465.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32465.
 */
cljs.core.async.__GT_t_cljs$core$async32465 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32465(f__$1,ch__$1,meta32463__$1,___$2,fn1__$1,meta32466){
return (new cljs.core.async.t_cljs$core$async32465(f__$1,ch__$1,meta32463__$1,___$2,fn1__$1,meta32466));
});

}

return (new cljs.core.async.t_cljs$core$async32465(self__.f,self__.ch,self__.meta32463,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32469 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32469) : self__.f.call(null,G__32469));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32462.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32463","meta32463",-1276963568,null)], null);
}));

(cljs.core.async.t_cljs$core$async32462.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32462");

(cljs.core.async.t_cljs$core$async32462.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32462");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32462.
 */
cljs.core.async.__GT_t_cljs$core$async32462 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32462(f__$1,ch__$1,meta32463){
return (new cljs.core.async.t_cljs$core$async32462(f__$1,ch__$1,meta32463));
});

}

return (new cljs.core.async.t_cljs$core$async32462(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32470 = (function (f,ch,meta32471){
this.f = f;
this.ch = ch;
this.meta32471 = meta32471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32472,meta32471__$1){
var self__ = this;
var _32472__$1 = this;
return (new cljs.core.async.t_cljs$core$async32470(self__.f,self__.ch,meta32471__$1));
}));

(cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32472){
var self__ = this;
var _32472__$1 = this;
return self__.meta32471;
}));

(cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32471","meta32471",-1881864238,null)], null);
}));

(cljs.core.async.t_cljs$core$async32470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32470");

(cljs.core.async.t_cljs$core$async32470.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32470.
 */
cljs.core.async.__GT_t_cljs$core$async32470 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32470(f__$1,ch__$1,meta32471){
return (new cljs.core.async.t_cljs$core$async32470(f__$1,ch__$1,meta32471));
});

}

return (new cljs.core.async.t_cljs$core$async32470(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32473 = (function (p,ch,meta32474){
this.p = p;
this.ch = ch;
this.meta32474 = meta32474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32475,meta32474__$1){
var self__ = this;
var _32475__$1 = this;
return (new cljs.core.async.t_cljs$core$async32473(self__.p,self__.ch,meta32474__$1));
}));

(cljs.core.async.t_cljs$core$async32473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32475){
var self__ = this;
var _32475__$1 = this;
return self__.meta32474;
}));

(cljs.core.async.t_cljs$core$async32473.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32473.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32473.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32474","meta32474",-1337988126,null)], null);
}));

(cljs.core.async.t_cljs$core$async32473.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32473");

(cljs.core.async.t_cljs$core$async32473.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32473");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32473.
 */
cljs.core.async.__GT_t_cljs$core$async32473 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32473(p__$1,ch__$1,meta32474){
return (new cljs.core.async.t_cljs$core$async32473(p__$1,ch__$1,meta32474));
});

}

return (new cljs.core.async.t_cljs$core$async32473(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32477 = arguments.length;
switch (G__32477) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30811__auto___33451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32498){
var state_val_32499 = (state_32498[(1)]);
if((state_val_32499 === (7))){
var inst_32494 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
var statearr_32500_33452 = state_32498__$1;
(statearr_32500_33452[(2)] = inst_32494);

(statearr_32500_33452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (1))){
var state_32498__$1 = state_32498;
var statearr_32501_33453 = state_32498__$1;
(statearr_32501_33453[(2)] = null);

(statearr_32501_33453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (4))){
var inst_32480 = (state_32498[(7)]);
var inst_32480__$1 = (state_32498[(2)]);
var inst_32481 = (inst_32480__$1 == null);
var state_32498__$1 = (function (){var statearr_32502 = state_32498;
(statearr_32502[(7)] = inst_32480__$1);

return statearr_32502;
})();
if(cljs.core.truth_(inst_32481)){
var statearr_32503_33457 = state_32498__$1;
(statearr_32503_33457[(1)] = (5));

} else {
var statearr_32504_33458 = state_32498__$1;
(statearr_32504_33458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (6))){
var inst_32480 = (state_32498[(7)]);
var inst_32485 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32480) : p.call(null,inst_32480));
var state_32498__$1 = state_32498;
if(cljs.core.truth_(inst_32485)){
var statearr_32505_33459 = state_32498__$1;
(statearr_32505_33459[(1)] = (8));

} else {
var statearr_32506_33460 = state_32498__$1;
(statearr_32506_33460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (3))){
var inst_32496 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32498__$1,inst_32496);
} else {
if((state_val_32499 === (2))){
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32498__$1,(4),ch);
} else {
if((state_val_32499 === (11))){
var inst_32488 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
var statearr_32507_33461 = state_32498__$1;
(statearr_32507_33461[(2)] = inst_32488);

(statearr_32507_33461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (9))){
var state_32498__$1 = state_32498;
var statearr_32508_33462 = state_32498__$1;
(statearr_32508_33462[(2)] = null);

(statearr_32508_33462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (5))){
var inst_32483 = cljs.core.async.close_BANG_(out);
var state_32498__$1 = state_32498;
var statearr_32509_33463 = state_32498__$1;
(statearr_32509_33463[(2)] = inst_32483);

(statearr_32509_33463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (10))){
var inst_32491 = (state_32498[(2)]);
var state_32498__$1 = (function (){var statearr_32510 = state_32498;
(statearr_32510[(8)] = inst_32491);

return statearr_32510;
})();
var statearr_32511_33464 = state_32498__$1;
(statearr_32511_33464[(2)] = null);

(statearr_32511_33464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (8))){
var inst_32480 = (state_32498[(7)]);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32498__$1,(11),out,inst_32480);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_32512 = [null,null,null,null,null,null,null,null,null];
(statearr_32512[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_32512[(1)] = (1));

return statearr_32512;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_32498){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32498);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32513){var ex__30721__auto__ = e32513;
var statearr_32514_33465 = state_32498;
(statearr_32514_33465[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32498[(4)]))){
var statearr_32515_33466 = state_32498;
(statearr_32515_33466[(1)] = cljs.core.first((state_32498[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33468 = state_32498;
state_32498 = G__33468;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_32498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_32498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32516 = f__30812__auto__();
(statearr_32516[(6)] = c__30811__auto___33451);

return statearr_32516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32518 = arguments.length;
switch (G__32518) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30811__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32580){
var state_val_32581 = (state_32580[(1)]);
if((state_val_32581 === (7))){
var inst_32576 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32582_33470 = state_32580__$1;
(statearr_32582_33470[(2)] = inst_32576);

(statearr_32582_33470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (20))){
var inst_32546 = (state_32580[(7)]);
var inst_32557 = (state_32580[(2)]);
var inst_32558 = cljs.core.next(inst_32546);
var inst_32532 = inst_32558;
var inst_32533 = null;
var inst_32534 = (0);
var inst_32535 = (0);
var state_32580__$1 = (function (){var statearr_32583 = state_32580;
(statearr_32583[(8)] = inst_32557);

(statearr_32583[(9)] = inst_32534);

(statearr_32583[(10)] = inst_32533);

(statearr_32583[(11)] = inst_32532);

(statearr_32583[(12)] = inst_32535);

return statearr_32583;
})();
var statearr_32584_33471 = state_32580__$1;
(statearr_32584_33471[(2)] = null);

(statearr_32584_33471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (1))){
var state_32580__$1 = state_32580;
var statearr_32585_33472 = state_32580__$1;
(statearr_32585_33472[(2)] = null);

(statearr_32585_33472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (4))){
var inst_32521 = (state_32580[(13)]);
var inst_32521__$1 = (state_32580[(2)]);
var inst_32522 = (inst_32521__$1 == null);
var state_32580__$1 = (function (){var statearr_32586 = state_32580;
(statearr_32586[(13)] = inst_32521__$1);

return statearr_32586;
})();
if(cljs.core.truth_(inst_32522)){
var statearr_32587_33477 = state_32580__$1;
(statearr_32587_33477[(1)] = (5));

} else {
var statearr_32588_33478 = state_32580__$1;
(statearr_32588_33478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (15))){
var state_32580__$1 = state_32580;
var statearr_32592_33479 = state_32580__$1;
(statearr_32592_33479[(2)] = null);

(statearr_32592_33479[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (21))){
var state_32580__$1 = state_32580;
var statearr_32593_33481 = state_32580__$1;
(statearr_32593_33481[(2)] = null);

(statearr_32593_33481[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (13))){
var inst_32534 = (state_32580[(9)]);
var inst_32533 = (state_32580[(10)]);
var inst_32532 = (state_32580[(11)]);
var inst_32535 = (state_32580[(12)]);
var inst_32542 = (state_32580[(2)]);
var inst_32543 = (inst_32535 + (1));
var tmp32589 = inst_32534;
var tmp32590 = inst_32533;
var tmp32591 = inst_32532;
var inst_32532__$1 = tmp32591;
var inst_32533__$1 = tmp32590;
var inst_32534__$1 = tmp32589;
var inst_32535__$1 = inst_32543;
var state_32580__$1 = (function (){var statearr_32594 = state_32580;
(statearr_32594[(9)] = inst_32534__$1);

(statearr_32594[(10)] = inst_32533__$1);

(statearr_32594[(14)] = inst_32542);

(statearr_32594[(11)] = inst_32532__$1);

(statearr_32594[(12)] = inst_32535__$1);

return statearr_32594;
})();
var statearr_32595_33482 = state_32580__$1;
(statearr_32595_33482[(2)] = null);

(statearr_32595_33482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (22))){
var state_32580__$1 = state_32580;
var statearr_32596_33483 = state_32580__$1;
(statearr_32596_33483[(2)] = null);

(statearr_32596_33483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (6))){
var inst_32521 = (state_32580[(13)]);
var inst_32530 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32521) : f.call(null,inst_32521));
var inst_32531 = cljs.core.seq(inst_32530);
var inst_32532 = inst_32531;
var inst_32533 = null;
var inst_32534 = (0);
var inst_32535 = (0);
var state_32580__$1 = (function (){var statearr_32597 = state_32580;
(statearr_32597[(9)] = inst_32534);

(statearr_32597[(10)] = inst_32533);

(statearr_32597[(11)] = inst_32532);

(statearr_32597[(12)] = inst_32535);

return statearr_32597;
})();
var statearr_32598_33485 = state_32580__$1;
(statearr_32598_33485[(2)] = null);

(statearr_32598_33485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (17))){
var inst_32546 = (state_32580[(7)]);
var inst_32550 = cljs.core.chunk_first(inst_32546);
var inst_32551 = cljs.core.chunk_rest(inst_32546);
var inst_32552 = cljs.core.count(inst_32550);
var inst_32532 = inst_32551;
var inst_32533 = inst_32550;
var inst_32534 = inst_32552;
var inst_32535 = (0);
var state_32580__$1 = (function (){var statearr_32599 = state_32580;
(statearr_32599[(9)] = inst_32534);

(statearr_32599[(10)] = inst_32533);

(statearr_32599[(11)] = inst_32532);

(statearr_32599[(12)] = inst_32535);

return statearr_32599;
})();
var statearr_32600_33490 = state_32580__$1;
(statearr_32600_33490[(2)] = null);

(statearr_32600_33490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (3))){
var inst_32578 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32580__$1,inst_32578);
} else {
if((state_val_32581 === (12))){
var inst_32566 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32601_33491 = state_32580__$1;
(statearr_32601_33491[(2)] = inst_32566);

(statearr_32601_33491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (2))){
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32580__$1,(4),in$);
} else {
if((state_val_32581 === (23))){
var inst_32574 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32602_33492 = state_32580__$1;
(statearr_32602_33492[(2)] = inst_32574);

(statearr_32602_33492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (19))){
var inst_32561 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32603_33493 = state_32580__$1;
(statearr_32603_33493[(2)] = inst_32561);

(statearr_32603_33493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (11))){
var inst_32546 = (state_32580[(7)]);
var inst_32532 = (state_32580[(11)]);
var inst_32546__$1 = cljs.core.seq(inst_32532);
var state_32580__$1 = (function (){var statearr_32604 = state_32580;
(statearr_32604[(7)] = inst_32546__$1);

return statearr_32604;
})();
if(inst_32546__$1){
var statearr_32605_33494 = state_32580__$1;
(statearr_32605_33494[(1)] = (14));

} else {
var statearr_32606_33495 = state_32580__$1;
(statearr_32606_33495[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (9))){
var inst_32568 = (state_32580[(2)]);
var inst_32569 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32580__$1 = (function (){var statearr_32607 = state_32580;
(statearr_32607[(15)] = inst_32568);

return statearr_32607;
})();
if(cljs.core.truth_(inst_32569)){
var statearr_32608_33496 = state_32580__$1;
(statearr_32608_33496[(1)] = (21));

} else {
var statearr_32609_33497 = state_32580__$1;
(statearr_32609_33497[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (5))){
var inst_32524 = cljs.core.async.close_BANG_(out);
var state_32580__$1 = state_32580;
var statearr_32610_33498 = state_32580__$1;
(statearr_32610_33498[(2)] = inst_32524);

(statearr_32610_33498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (14))){
var inst_32546 = (state_32580[(7)]);
var inst_32548 = cljs.core.chunked_seq_QMARK_(inst_32546);
var state_32580__$1 = state_32580;
if(inst_32548){
var statearr_32611_33499 = state_32580__$1;
(statearr_32611_33499[(1)] = (17));

} else {
var statearr_32612_33500 = state_32580__$1;
(statearr_32612_33500[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (16))){
var inst_32564 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32613_33501 = state_32580__$1;
(statearr_32613_33501[(2)] = inst_32564);

(statearr_32613_33501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32581 === (10))){
var inst_32533 = (state_32580[(10)]);
var inst_32535 = (state_32580[(12)]);
var inst_32540 = cljs.core._nth(inst_32533,inst_32535);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32580__$1,(13),out,inst_32540);
} else {
if((state_val_32581 === (18))){
var inst_32546 = (state_32580[(7)]);
var inst_32555 = cljs.core.first(inst_32546);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32580__$1,(20),out,inst_32555);
} else {
if((state_val_32581 === (8))){
var inst_32534 = (state_32580[(9)]);
var inst_32535 = (state_32580[(12)]);
var inst_32537 = (inst_32535 < inst_32534);
var inst_32538 = inst_32537;
var state_32580__$1 = state_32580;
if(cljs.core.truth_(inst_32538)){
var statearr_32614_33502 = state_32580__$1;
(statearr_32614_33502[(1)] = (10));

} else {
var statearr_32615_33503 = state_32580__$1;
(statearr_32615_33503[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30718__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30718__auto____0 = (function (){
var statearr_32616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32616[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30718__auto__);

(statearr_32616[(1)] = (1));

return statearr_32616;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30718__auto____1 = (function (state_32580){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32580);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32617){var ex__30721__auto__ = e32617;
var statearr_32618_33504 = state_32580;
(statearr_32618_33504[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32580[(4)]))){
var statearr_32619_33505 = state_32580;
(statearr_32619_33505[(1)] = cljs.core.first((state_32580[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33506 = state_32580;
state_32580 = G__33506;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30718__auto__ = function(state_32580){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30718__auto____1.call(this,state_32580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30718__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30718__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32620 = f__30812__auto__();
(statearr_32620[(6)] = c__30811__auto__);

return statearr_32620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));

return c__30811__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32622 = arguments.length;
switch (G__32622) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32624 = arguments.length;
switch (G__32624) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32626 = arguments.length;
switch (G__32626) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30811__auto___33510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32650){
var state_val_32651 = (state_32650[(1)]);
if((state_val_32651 === (7))){
var inst_32645 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
var statearr_32652_33511 = state_32650__$1;
(statearr_32652_33511[(2)] = inst_32645);

(statearr_32652_33511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (1))){
var inst_32627 = null;
var state_32650__$1 = (function (){var statearr_32653 = state_32650;
(statearr_32653[(7)] = inst_32627);

return statearr_32653;
})();
var statearr_32654_33512 = state_32650__$1;
(statearr_32654_33512[(2)] = null);

(statearr_32654_33512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (4))){
var inst_32630 = (state_32650[(8)]);
var inst_32630__$1 = (state_32650[(2)]);
var inst_32631 = (inst_32630__$1 == null);
var inst_32632 = cljs.core.not(inst_32631);
var state_32650__$1 = (function (){var statearr_32655 = state_32650;
(statearr_32655[(8)] = inst_32630__$1);

return statearr_32655;
})();
if(inst_32632){
var statearr_32656_33513 = state_32650__$1;
(statearr_32656_33513[(1)] = (5));

} else {
var statearr_32657_33514 = state_32650__$1;
(statearr_32657_33514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (6))){
var state_32650__$1 = state_32650;
var statearr_32658_33515 = state_32650__$1;
(statearr_32658_33515[(2)] = null);

(statearr_32658_33515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (3))){
var inst_32647 = (state_32650[(2)]);
var inst_32648 = cljs.core.async.close_BANG_(out);
var state_32650__$1 = (function (){var statearr_32659 = state_32650;
(statearr_32659[(9)] = inst_32647);

return statearr_32659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32650__$1,inst_32648);
} else {
if((state_val_32651 === (2))){
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32650__$1,(4),ch);
} else {
if((state_val_32651 === (11))){
var inst_32630 = (state_32650[(8)]);
var inst_32639 = (state_32650[(2)]);
var inst_32627 = inst_32630;
var state_32650__$1 = (function (){var statearr_32660 = state_32650;
(statearr_32660[(7)] = inst_32627);

(statearr_32660[(10)] = inst_32639);

return statearr_32660;
})();
var statearr_32661_33516 = state_32650__$1;
(statearr_32661_33516[(2)] = null);

(statearr_32661_33516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (9))){
var inst_32630 = (state_32650[(8)]);
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32650__$1,(11),out,inst_32630);
} else {
if((state_val_32651 === (5))){
var inst_32627 = (state_32650[(7)]);
var inst_32630 = (state_32650[(8)]);
var inst_32634 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32630,inst_32627);
var state_32650__$1 = state_32650;
if(inst_32634){
var statearr_32663_33517 = state_32650__$1;
(statearr_32663_33517[(1)] = (8));

} else {
var statearr_32664_33518 = state_32650__$1;
(statearr_32664_33518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (10))){
var inst_32642 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
var statearr_32665_33522 = state_32650__$1;
(statearr_32665_33522[(2)] = inst_32642);

(statearr_32665_33522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (8))){
var inst_32627 = (state_32650[(7)]);
var tmp32662 = inst_32627;
var inst_32627__$1 = tmp32662;
var state_32650__$1 = (function (){var statearr_32666 = state_32650;
(statearr_32666[(7)] = inst_32627__$1);

return statearr_32666;
})();
var statearr_32667_33523 = state_32650__$1;
(statearr_32667_33523[(2)] = null);

(statearr_32667_33523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_32668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32668[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_32668[(1)] = (1));

return statearr_32668;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_32650){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32650);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32669){var ex__30721__auto__ = e32669;
var statearr_32670_33524 = state_32650;
(statearr_32670_33524[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32650[(4)]))){
var statearr_32671_33525 = state_32650;
(statearr_32671_33525[(1)] = cljs.core.first((state_32650[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33526 = state_32650;
state_32650 = G__33526;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_32650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_32650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32672 = f__30812__auto__();
(statearr_32672[(6)] = c__30811__auto___33510);

return statearr_32672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32674 = arguments.length;
switch (G__32674) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30811__auto___33528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32712){
var state_val_32713 = (state_32712[(1)]);
if((state_val_32713 === (7))){
var inst_32708 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32714_33530 = state_32712__$1;
(statearr_32714_33530[(2)] = inst_32708);

(statearr_32714_33530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (1))){
var inst_32675 = (new Array(n));
var inst_32676 = inst_32675;
var inst_32677 = (0);
var state_32712__$1 = (function (){var statearr_32715 = state_32712;
(statearr_32715[(7)] = inst_32676);

(statearr_32715[(8)] = inst_32677);

return statearr_32715;
})();
var statearr_32716_33531 = state_32712__$1;
(statearr_32716_33531[(2)] = null);

(statearr_32716_33531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (4))){
var inst_32680 = (state_32712[(9)]);
var inst_32680__$1 = (state_32712[(2)]);
var inst_32681 = (inst_32680__$1 == null);
var inst_32682 = cljs.core.not(inst_32681);
var state_32712__$1 = (function (){var statearr_32717 = state_32712;
(statearr_32717[(9)] = inst_32680__$1);

return statearr_32717;
})();
if(inst_32682){
var statearr_32718_33532 = state_32712__$1;
(statearr_32718_33532[(1)] = (5));

} else {
var statearr_32719_33533 = state_32712__$1;
(statearr_32719_33533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (15))){
var inst_32702 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32720_33534 = state_32712__$1;
(statearr_32720_33534[(2)] = inst_32702);

(statearr_32720_33534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (13))){
var state_32712__$1 = state_32712;
var statearr_32721_33535 = state_32712__$1;
(statearr_32721_33535[(2)] = null);

(statearr_32721_33535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (6))){
var inst_32677 = (state_32712[(8)]);
var inst_32698 = (inst_32677 > (0));
var state_32712__$1 = state_32712;
if(cljs.core.truth_(inst_32698)){
var statearr_32722_33536 = state_32712__$1;
(statearr_32722_33536[(1)] = (12));

} else {
var statearr_32723_33537 = state_32712__$1;
(statearr_32723_33537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (3))){
var inst_32710 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32712__$1,inst_32710);
} else {
if((state_val_32713 === (12))){
var inst_32676 = (state_32712[(7)]);
var inst_32700 = cljs.core.vec(inst_32676);
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32712__$1,(15),out,inst_32700);
} else {
if((state_val_32713 === (2))){
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32712__$1,(4),ch);
} else {
if((state_val_32713 === (11))){
var inst_32692 = (state_32712[(2)]);
var inst_32693 = (new Array(n));
var inst_32676 = inst_32693;
var inst_32677 = (0);
var state_32712__$1 = (function (){var statearr_32724 = state_32712;
(statearr_32724[(10)] = inst_32692);

(statearr_32724[(7)] = inst_32676);

(statearr_32724[(8)] = inst_32677);

return statearr_32724;
})();
var statearr_32725_33538 = state_32712__$1;
(statearr_32725_33538[(2)] = null);

(statearr_32725_33538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (9))){
var inst_32676 = (state_32712[(7)]);
var inst_32690 = cljs.core.vec(inst_32676);
var state_32712__$1 = state_32712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32712__$1,(11),out,inst_32690);
} else {
if((state_val_32713 === (5))){
var inst_32680 = (state_32712[(9)]);
var inst_32676 = (state_32712[(7)]);
var inst_32685 = (state_32712[(11)]);
var inst_32677 = (state_32712[(8)]);
var inst_32684 = (inst_32676[inst_32677] = inst_32680);
var inst_32685__$1 = (inst_32677 + (1));
var inst_32686 = (inst_32685__$1 < n);
var state_32712__$1 = (function (){var statearr_32726 = state_32712;
(statearr_32726[(12)] = inst_32684);

(statearr_32726[(11)] = inst_32685__$1);

return statearr_32726;
})();
if(cljs.core.truth_(inst_32686)){
var statearr_32727_33539 = state_32712__$1;
(statearr_32727_33539[(1)] = (8));

} else {
var statearr_32728_33540 = state_32712__$1;
(statearr_32728_33540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (14))){
var inst_32705 = (state_32712[(2)]);
var inst_32706 = cljs.core.async.close_BANG_(out);
var state_32712__$1 = (function (){var statearr_32730 = state_32712;
(statearr_32730[(13)] = inst_32705);

return statearr_32730;
})();
var statearr_32731_33541 = state_32712__$1;
(statearr_32731_33541[(2)] = inst_32706);

(statearr_32731_33541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (10))){
var inst_32696 = (state_32712[(2)]);
var state_32712__$1 = state_32712;
var statearr_32732_33542 = state_32712__$1;
(statearr_32732_33542[(2)] = inst_32696);

(statearr_32732_33542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32713 === (8))){
var inst_32676 = (state_32712[(7)]);
var inst_32685 = (state_32712[(11)]);
var tmp32729 = inst_32676;
var inst_32676__$1 = tmp32729;
var inst_32677 = inst_32685;
var state_32712__$1 = (function (){var statearr_32733 = state_32712;
(statearr_32733[(7)] = inst_32676__$1);

(statearr_32733[(8)] = inst_32677);

return statearr_32733;
})();
var statearr_32734_33543 = state_32712__$1;
(statearr_32734_33543[(2)] = null);

(statearr_32734_33543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_32735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32735[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_32735[(1)] = (1));

return statearr_32735;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_32712){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32712);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32736){var ex__30721__auto__ = e32736;
var statearr_32737_33548 = state_32712;
(statearr_32737_33548[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32712[(4)]))){
var statearr_32738_33549 = state_32712;
(statearr_32738_33549[(1)] = cljs.core.first((state_32712[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33554 = state_32712;
state_32712 = G__33554;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_32712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_32712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32739 = f__30812__auto__();
(statearr_32739[(6)] = c__30811__auto___33528);

return statearr_32739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32741 = arguments.length;
switch (G__32741) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30811__auto___33558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_32783){
var state_val_32784 = (state_32783[(1)]);
if((state_val_32784 === (7))){
var inst_32779 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32785_33559 = state_32783__$1;
(statearr_32785_33559[(2)] = inst_32779);

(statearr_32785_33559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (1))){
var inst_32742 = [];
var inst_32743 = inst_32742;
var inst_32744 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32783__$1 = (function (){var statearr_32786 = state_32783;
(statearr_32786[(7)] = inst_32743);

(statearr_32786[(8)] = inst_32744);

return statearr_32786;
})();
var statearr_32787_33560 = state_32783__$1;
(statearr_32787_33560[(2)] = null);

(statearr_32787_33560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (4))){
var inst_32747 = (state_32783[(9)]);
var inst_32747__$1 = (state_32783[(2)]);
var inst_32748 = (inst_32747__$1 == null);
var inst_32749 = cljs.core.not(inst_32748);
var state_32783__$1 = (function (){var statearr_32788 = state_32783;
(statearr_32788[(9)] = inst_32747__$1);

return statearr_32788;
})();
if(inst_32749){
var statearr_32789_33561 = state_32783__$1;
(statearr_32789_33561[(1)] = (5));

} else {
var statearr_32790_33562 = state_32783__$1;
(statearr_32790_33562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (15))){
var inst_32773 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32791_33563 = state_32783__$1;
(statearr_32791_33563[(2)] = inst_32773);

(statearr_32791_33563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (13))){
var state_32783__$1 = state_32783;
var statearr_32792_33564 = state_32783__$1;
(statearr_32792_33564[(2)] = null);

(statearr_32792_33564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (6))){
var inst_32743 = (state_32783[(7)]);
var inst_32768 = inst_32743.length;
var inst_32769 = (inst_32768 > (0));
var state_32783__$1 = state_32783;
if(cljs.core.truth_(inst_32769)){
var statearr_32793_33565 = state_32783__$1;
(statearr_32793_33565[(1)] = (12));

} else {
var statearr_32794_33566 = state_32783__$1;
(statearr_32794_33566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (3))){
var inst_32781 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32783__$1,inst_32781);
} else {
if((state_val_32784 === (12))){
var inst_32743 = (state_32783[(7)]);
var inst_32771 = cljs.core.vec(inst_32743);
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32783__$1,(15),out,inst_32771);
} else {
if((state_val_32784 === (2))){
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32783__$1,(4),ch);
} else {
if((state_val_32784 === (11))){
var inst_32751 = (state_32783[(10)]);
var inst_32747 = (state_32783[(9)]);
var inst_32761 = (state_32783[(2)]);
var inst_32762 = [];
var inst_32763 = inst_32762.push(inst_32747);
var inst_32743 = inst_32762;
var inst_32744 = inst_32751;
var state_32783__$1 = (function (){var statearr_32795 = state_32783;
(statearr_32795[(11)] = inst_32761);

(statearr_32795[(12)] = inst_32763);

(statearr_32795[(7)] = inst_32743);

(statearr_32795[(8)] = inst_32744);

return statearr_32795;
})();
var statearr_32796_33567 = state_32783__$1;
(statearr_32796_33567[(2)] = null);

(statearr_32796_33567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (9))){
var inst_32743 = (state_32783[(7)]);
var inst_32759 = cljs.core.vec(inst_32743);
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32783__$1,(11),out,inst_32759);
} else {
if((state_val_32784 === (5))){
var inst_32751 = (state_32783[(10)]);
var inst_32747 = (state_32783[(9)]);
var inst_32744 = (state_32783[(8)]);
var inst_32751__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32747) : f.call(null,inst_32747));
var inst_32752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32751__$1,inst_32744);
var inst_32753 = cljs.core.keyword_identical_QMARK_(inst_32744,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32754 = ((inst_32752) || (inst_32753));
var state_32783__$1 = (function (){var statearr_32797 = state_32783;
(statearr_32797[(10)] = inst_32751__$1);

return statearr_32797;
})();
if(cljs.core.truth_(inst_32754)){
var statearr_32798_33568 = state_32783__$1;
(statearr_32798_33568[(1)] = (8));

} else {
var statearr_32799_33569 = state_32783__$1;
(statearr_32799_33569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (14))){
var inst_32776 = (state_32783[(2)]);
var inst_32777 = cljs.core.async.close_BANG_(out);
var state_32783__$1 = (function (){var statearr_32801 = state_32783;
(statearr_32801[(13)] = inst_32776);

return statearr_32801;
})();
var statearr_32802_33570 = state_32783__$1;
(statearr_32802_33570[(2)] = inst_32777);

(statearr_32802_33570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (10))){
var inst_32766 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32803_33571 = state_32783__$1;
(statearr_32803_33571[(2)] = inst_32766);

(statearr_32803_33571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (8))){
var inst_32751 = (state_32783[(10)]);
var inst_32743 = (state_32783[(7)]);
var inst_32747 = (state_32783[(9)]);
var inst_32756 = inst_32743.push(inst_32747);
var tmp32800 = inst_32743;
var inst_32743__$1 = tmp32800;
var inst_32744 = inst_32751;
var state_32783__$1 = (function (){var statearr_32804 = state_32783;
(statearr_32804[(14)] = inst_32756);

(statearr_32804[(7)] = inst_32743__$1);

(statearr_32804[(8)] = inst_32744);

return statearr_32804;
})();
var statearr_32805_33572 = state_32783__$1;
(statearr_32805_33572[(2)] = null);

(statearr_32805_33572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30718__auto__ = null;
var cljs$core$async$state_machine__30718__auto____0 = (function (){
var statearr_32806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32806[(0)] = cljs$core$async$state_machine__30718__auto__);

(statearr_32806[(1)] = (1));

return statearr_32806;
});
var cljs$core$async$state_machine__30718__auto____1 = (function (state_32783){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_32783);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e32807){var ex__30721__auto__ = e32807;
var statearr_32808_33576 = state_32783;
(statearr_32808_33576[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_32783[(4)]))){
var statearr_32809_33581 = state_32783;
(statearr_32809_33581[(1)] = cljs.core.first((state_32783[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33582 = state_32783;
state_32783 = G__33582;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
cljs$core$async$state_machine__30718__auto__ = function(state_32783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30718__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30718__auto____1.call(this,state_32783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30718__auto____0;
cljs$core$async$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30718__auto____1;
return cljs$core$async$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_32810 = f__30812__auto__();
(statearr_32810[(6)] = c__30811__auto___33558);

return statearr_32810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
