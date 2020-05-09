goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33645 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33645(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33646 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33646(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32922 = coll;
var G__32923 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32922,G__32923) : shadow.dom.lazy_native_coll_seq.call(null,G__32922,G__32923));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32935 = arguments.length;
switch (G__32935) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32937 = arguments.length;
switch (G__32937) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32939 = arguments.length;
switch (G__32939) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32941 = arguments.length;
switch (G__32941) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32975 = arguments.length;
switch (G__32975) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32985 = arguments.length;
switch (G__32985) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32991){if((e32991 instanceof Object)){
var e = e32991;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32991;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32999 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33000 = null;
var count__33001 = (0);
var i__33002 = (0);
while(true){
if((i__33002 < count__33001)){
var el = chunk__33000.cljs$core$IIndexed$_nth$arity$2(null,i__33002);
var handler_33653__$1 = ((function (seq__32999,chunk__33000,count__33001,i__33002,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32999,chunk__33000,count__33001,i__33002,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33653__$1);


var G__33654 = seq__32999;
var G__33655 = chunk__33000;
var G__33656 = count__33001;
var G__33657 = (i__33002 + (1));
seq__32999 = G__33654;
chunk__33000 = G__33655;
count__33001 = G__33656;
i__33002 = G__33657;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32999);
if(temp__5735__auto__){
var seq__32999__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32999__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32999__$1);
var G__33658 = cljs.core.chunk_rest(seq__32999__$1);
var G__33659 = c__4550__auto__;
var G__33660 = cljs.core.count(c__4550__auto__);
var G__33661 = (0);
seq__32999 = G__33658;
chunk__33000 = G__33659;
count__33001 = G__33660;
i__33002 = G__33661;
continue;
} else {
var el = cljs.core.first(seq__32999__$1);
var handler_33662__$1 = ((function (seq__32999,chunk__33000,count__33001,i__33002,el,seq__32999__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32999,chunk__33000,count__33001,i__33002,el,seq__32999__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33662__$1);


var G__33663 = cljs.core.next(seq__32999__$1);
var G__33664 = null;
var G__33665 = (0);
var G__33666 = (0);
seq__32999 = G__33663;
chunk__33000 = G__33664;
count__33001 = G__33665;
i__33002 = G__33666;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33016 = arguments.length;
switch (G__33016) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33021 = cljs.core.seq(events);
var chunk__33022 = null;
var count__33023 = (0);
var i__33024 = (0);
while(true){
if((i__33024 < count__33023)){
var vec__33031 = chunk__33022.cljs$core$IIndexed$_nth$arity$2(null,i__33024);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33031,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33668 = seq__33021;
var G__33669 = chunk__33022;
var G__33670 = count__33023;
var G__33671 = (i__33024 + (1));
seq__33021 = G__33668;
chunk__33022 = G__33669;
count__33023 = G__33670;
i__33024 = G__33671;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33021);
if(temp__5735__auto__){
var seq__33021__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33021__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33021__$1);
var G__33672 = cljs.core.chunk_rest(seq__33021__$1);
var G__33673 = c__4550__auto__;
var G__33674 = cljs.core.count(c__4550__auto__);
var G__33675 = (0);
seq__33021 = G__33672;
chunk__33022 = G__33673;
count__33023 = G__33674;
i__33024 = G__33675;
continue;
} else {
var vec__33034 = cljs.core.first(seq__33021__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33034,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33676 = cljs.core.next(seq__33021__$1);
var G__33677 = null;
var G__33678 = (0);
var G__33679 = (0);
seq__33021 = G__33676;
chunk__33022 = G__33677;
count__33023 = G__33678;
i__33024 = G__33679;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33037 = cljs.core.seq(styles);
var chunk__33038 = null;
var count__33039 = (0);
var i__33040 = (0);
while(true){
if((i__33040 < count__33039)){
var vec__33048 = chunk__33038.cljs$core$IIndexed$_nth$arity$2(null,i__33040);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33048,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33680 = seq__33037;
var G__33681 = chunk__33038;
var G__33682 = count__33039;
var G__33683 = (i__33040 + (1));
seq__33037 = G__33680;
chunk__33038 = G__33681;
count__33039 = G__33682;
i__33040 = G__33683;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33037);
if(temp__5735__auto__){
var seq__33037__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33037__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33037__$1);
var G__33684 = cljs.core.chunk_rest(seq__33037__$1);
var G__33685 = c__4550__auto__;
var G__33686 = cljs.core.count(c__4550__auto__);
var G__33687 = (0);
seq__33037 = G__33684;
chunk__33038 = G__33685;
count__33039 = G__33686;
i__33040 = G__33687;
continue;
} else {
var vec__33051 = cljs.core.first(seq__33037__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33688 = cljs.core.next(seq__33037__$1);
var G__33689 = null;
var G__33690 = (0);
var G__33691 = (0);
seq__33037 = G__33688;
chunk__33038 = G__33689;
count__33039 = G__33690;
i__33040 = G__33691;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33058_33692 = key;
var G__33058_33693__$1 = (((G__33058_33692 instanceof cljs.core.Keyword))?G__33058_33692.fqn:null);
switch (G__33058_33693__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33695 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_33695,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_33695,"aria-");
}
})())){
el.setAttribute(ks_33695,value);
} else {
(el[ks_33695] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33126){
var map__33127 = p__33126;
var map__33127__$1 = (((((!((map__33127 == null))))?(((((map__33127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33127):map__33127);
var props = map__33127__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33127__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33131 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33131,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33131,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33131,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33134 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33134,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33134;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33136 = arguments.length;
switch (G__33136) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33137){
var vec__33138 = p__33137;
var seq__33139 = cljs.core.seq(vec__33138);
var first__33140 = cljs.core.first(seq__33139);
var seq__33139__$1 = cljs.core.next(seq__33139);
var nn = first__33140;
var first__33140__$1 = cljs.core.first(seq__33139__$1);
var seq__33139__$2 = cljs.core.next(seq__33139__$1);
var np = first__33140__$1;
var nc = seq__33139__$2;
var node = vec__33138;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33141 = nn;
var G__33142 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33141,G__33142) : create_fn.call(null,G__33141,G__33142));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33143 = nn;
var G__33144 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33143,G__33144) : create_fn.call(null,G__33143,G__33144));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33145 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(1),null);
var seq__33148_33697 = cljs.core.seq(node_children);
var chunk__33149_33698 = null;
var count__33150_33699 = (0);
var i__33151_33700 = (0);
while(true){
if((i__33151_33700 < count__33150_33699)){
var child_struct_33701 = chunk__33149_33698.cljs$core$IIndexed$_nth$arity$2(null,i__33151_33700);
var children_33702 = shadow.dom.dom_node(child_struct_33701);
if(cljs.core.seq_QMARK_(children_33702)){
var seq__33251_33703 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33702));
var chunk__33254_33704 = null;
var count__33255_33705 = (0);
var i__33256_33706 = (0);
while(true){
if((i__33256_33706 < count__33255_33705)){
var child_33707 = chunk__33254_33704.cljs$core$IIndexed$_nth$arity$2(null,i__33256_33706);
if(cljs.core.truth_(child_33707)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33707);


var G__33708 = seq__33251_33703;
var G__33709 = chunk__33254_33704;
var G__33710 = count__33255_33705;
var G__33711 = (i__33256_33706 + (1));
seq__33251_33703 = G__33708;
chunk__33254_33704 = G__33709;
count__33255_33705 = G__33710;
i__33256_33706 = G__33711;
continue;
} else {
var G__33712 = seq__33251_33703;
var G__33713 = chunk__33254_33704;
var G__33714 = count__33255_33705;
var G__33715 = (i__33256_33706 + (1));
seq__33251_33703 = G__33712;
chunk__33254_33704 = G__33713;
count__33255_33705 = G__33714;
i__33256_33706 = G__33715;
continue;
}
} else {
var temp__5735__auto___33716 = cljs.core.seq(seq__33251_33703);
if(temp__5735__auto___33716){
var seq__33251_33717__$1 = temp__5735__auto___33716;
if(cljs.core.chunked_seq_QMARK_(seq__33251_33717__$1)){
var c__4550__auto___33718 = cljs.core.chunk_first(seq__33251_33717__$1);
var G__33719 = cljs.core.chunk_rest(seq__33251_33717__$1);
var G__33720 = c__4550__auto___33718;
var G__33721 = cljs.core.count(c__4550__auto___33718);
var G__33722 = (0);
seq__33251_33703 = G__33719;
chunk__33254_33704 = G__33720;
count__33255_33705 = G__33721;
i__33256_33706 = G__33722;
continue;
} else {
var child_33723 = cljs.core.first(seq__33251_33717__$1);
if(cljs.core.truth_(child_33723)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33723);


var G__33724 = cljs.core.next(seq__33251_33717__$1);
var G__33725 = null;
var G__33726 = (0);
var G__33727 = (0);
seq__33251_33703 = G__33724;
chunk__33254_33704 = G__33725;
count__33255_33705 = G__33726;
i__33256_33706 = G__33727;
continue;
} else {
var G__33728 = cljs.core.next(seq__33251_33717__$1);
var G__33729 = null;
var G__33730 = (0);
var G__33731 = (0);
seq__33251_33703 = G__33728;
chunk__33254_33704 = G__33729;
count__33255_33705 = G__33730;
i__33256_33706 = G__33731;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33702);
}


var G__33732 = seq__33148_33697;
var G__33733 = chunk__33149_33698;
var G__33734 = count__33150_33699;
var G__33735 = (i__33151_33700 + (1));
seq__33148_33697 = G__33732;
chunk__33149_33698 = G__33733;
count__33150_33699 = G__33734;
i__33151_33700 = G__33735;
continue;
} else {
var temp__5735__auto___33736 = cljs.core.seq(seq__33148_33697);
if(temp__5735__auto___33736){
var seq__33148_33737__$1 = temp__5735__auto___33736;
if(cljs.core.chunked_seq_QMARK_(seq__33148_33737__$1)){
var c__4550__auto___33738 = cljs.core.chunk_first(seq__33148_33737__$1);
var G__33739 = cljs.core.chunk_rest(seq__33148_33737__$1);
var G__33740 = c__4550__auto___33738;
var G__33741 = cljs.core.count(c__4550__auto___33738);
var G__33742 = (0);
seq__33148_33697 = G__33739;
chunk__33149_33698 = G__33740;
count__33150_33699 = G__33741;
i__33151_33700 = G__33742;
continue;
} else {
var child_struct_33743 = cljs.core.first(seq__33148_33737__$1);
var children_33744 = shadow.dom.dom_node(child_struct_33743);
if(cljs.core.seq_QMARK_(children_33744)){
var seq__33275_33745 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33744));
var chunk__33277_33746 = null;
var count__33278_33747 = (0);
var i__33279_33748 = (0);
while(true){
if((i__33279_33748 < count__33278_33747)){
var child_33749 = chunk__33277_33746.cljs$core$IIndexed$_nth$arity$2(null,i__33279_33748);
if(cljs.core.truth_(child_33749)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33749);


var G__33750 = seq__33275_33745;
var G__33751 = chunk__33277_33746;
var G__33752 = count__33278_33747;
var G__33753 = (i__33279_33748 + (1));
seq__33275_33745 = G__33750;
chunk__33277_33746 = G__33751;
count__33278_33747 = G__33752;
i__33279_33748 = G__33753;
continue;
} else {
var G__33754 = seq__33275_33745;
var G__33755 = chunk__33277_33746;
var G__33756 = count__33278_33747;
var G__33757 = (i__33279_33748 + (1));
seq__33275_33745 = G__33754;
chunk__33277_33746 = G__33755;
count__33278_33747 = G__33756;
i__33279_33748 = G__33757;
continue;
}
} else {
var temp__5735__auto___33758__$1 = cljs.core.seq(seq__33275_33745);
if(temp__5735__auto___33758__$1){
var seq__33275_33759__$1 = temp__5735__auto___33758__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33275_33759__$1)){
var c__4550__auto___33760 = cljs.core.chunk_first(seq__33275_33759__$1);
var G__33761 = cljs.core.chunk_rest(seq__33275_33759__$1);
var G__33762 = c__4550__auto___33760;
var G__33763 = cljs.core.count(c__4550__auto___33760);
var G__33764 = (0);
seq__33275_33745 = G__33761;
chunk__33277_33746 = G__33762;
count__33278_33747 = G__33763;
i__33279_33748 = G__33764;
continue;
} else {
var child_33765 = cljs.core.first(seq__33275_33759__$1);
if(cljs.core.truth_(child_33765)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33765);


var G__33766 = cljs.core.next(seq__33275_33759__$1);
var G__33767 = null;
var G__33768 = (0);
var G__33769 = (0);
seq__33275_33745 = G__33766;
chunk__33277_33746 = G__33767;
count__33278_33747 = G__33768;
i__33279_33748 = G__33769;
continue;
} else {
var G__33770 = cljs.core.next(seq__33275_33759__$1);
var G__33771 = null;
var G__33772 = (0);
var G__33773 = (0);
seq__33275_33745 = G__33770;
chunk__33277_33746 = G__33771;
count__33278_33747 = G__33772;
i__33279_33748 = G__33773;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33744);
}


var G__33774 = cljs.core.next(seq__33148_33737__$1);
var G__33775 = null;
var G__33776 = (0);
var G__33777 = (0);
seq__33148_33697 = G__33774;
chunk__33149_33698 = G__33775;
count__33150_33699 = G__33776;
i__33151_33700 = G__33777;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33332 = cljs.core.seq(node);
var chunk__33333 = null;
var count__33334 = (0);
var i__33335 = (0);
while(true){
if((i__33335 < count__33334)){
var n = chunk__33333.cljs$core$IIndexed$_nth$arity$2(null,i__33335);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33778 = seq__33332;
var G__33779 = chunk__33333;
var G__33780 = count__33334;
var G__33781 = (i__33335 + (1));
seq__33332 = G__33778;
chunk__33333 = G__33779;
count__33334 = G__33780;
i__33335 = G__33781;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33332);
if(temp__5735__auto__){
var seq__33332__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33332__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33332__$1);
var G__33782 = cljs.core.chunk_rest(seq__33332__$1);
var G__33783 = c__4550__auto__;
var G__33784 = cljs.core.count(c__4550__auto__);
var G__33785 = (0);
seq__33332 = G__33782;
chunk__33333 = G__33783;
count__33334 = G__33784;
i__33335 = G__33785;
continue;
} else {
var n = cljs.core.first(seq__33332__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33786 = cljs.core.next(seq__33332__$1);
var G__33787 = null;
var G__33788 = (0);
var G__33789 = (0);
seq__33332 = G__33786;
chunk__33333 = G__33787;
count__33334 = G__33788;
i__33335 = G__33789;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33345 = arguments.length;
switch (G__33345) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33352 = arguments.length;
switch (G__33352) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33363 = arguments.length;
switch (G__33363) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33793 = arguments.length;
var i__4731__auto___33794 = (0);
while(true){
if((i__4731__auto___33794 < len__4730__auto___33793)){
args__4736__auto__.push((arguments[i__4731__auto___33794]));

var G__33795 = (i__4731__auto___33794 + (1));
i__4731__auto___33794 = G__33795;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33381_33796 = cljs.core.seq(nodes);
var chunk__33382_33797 = null;
var count__33383_33798 = (0);
var i__33384_33799 = (0);
while(true){
if((i__33384_33799 < count__33383_33798)){
var node_33800 = chunk__33382_33797.cljs$core$IIndexed$_nth$arity$2(null,i__33384_33799);
fragment.appendChild(shadow.dom._to_dom(node_33800));


var G__33801 = seq__33381_33796;
var G__33802 = chunk__33382_33797;
var G__33803 = count__33383_33798;
var G__33804 = (i__33384_33799 + (1));
seq__33381_33796 = G__33801;
chunk__33382_33797 = G__33802;
count__33383_33798 = G__33803;
i__33384_33799 = G__33804;
continue;
} else {
var temp__5735__auto___33805 = cljs.core.seq(seq__33381_33796);
if(temp__5735__auto___33805){
var seq__33381_33806__$1 = temp__5735__auto___33805;
if(cljs.core.chunked_seq_QMARK_(seq__33381_33806__$1)){
var c__4550__auto___33807 = cljs.core.chunk_first(seq__33381_33806__$1);
var G__33808 = cljs.core.chunk_rest(seq__33381_33806__$1);
var G__33809 = c__4550__auto___33807;
var G__33810 = cljs.core.count(c__4550__auto___33807);
var G__33811 = (0);
seq__33381_33796 = G__33808;
chunk__33382_33797 = G__33809;
count__33383_33798 = G__33810;
i__33384_33799 = G__33811;
continue;
} else {
var node_33812 = cljs.core.first(seq__33381_33806__$1);
fragment.appendChild(shadow.dom._to_dom(node_33812));


var G__33813 = cljs.core.next(seq__33381_33806__$1);
var G__33814 = null;
var G__33815 = (0);
var G__33816 = (0);
seq__33381_33796 = G__33813;
chunk__33382_33797 = G__33814;
count__33383_33798 = G__33815;
i__33384_33799 = G__33816;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33375){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33375));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33391_33817 = cljs.core.seq(scripts);
var chunk__33392_33818 = null;
var count__33393_33819 = (0);
var i__33394_33820 = (0);
while(true){
if((i__33394_33820 < count__33393_33819)){
var vec__33404_33821 = chunk__33392_33818.cljs$core$IIndexed$_nth$arity$2(null,i__33394_33820);
var script_tag_33822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33404_33821,(0),null);
var script_body_33823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33404_33821,(1),null);
eval(script_body_33823);


var G__33825 = seq__33391_33817;
var G__33826 = chunk__33392_33818;
var G__33827 = count__33393_33819;
var G__33828 = (i__33394_33820 + (1));
seq__33391_33817 = G__33825;
chunk__33392_33818 = G__33826;
count__33393_33819 = G__33827;
i__33394_33820 = G__33828;
continue;
} else {
var temp__5735__auto___33830 = cljs.core.seq(seq__33391_33817);
if(temp__5735__auto___33830){
var seq__33391_33831__$1 = temp__5735__auto___33830;
if(cljs.core.chunked_seq_QMARK_(seq__33391_33831__$1)){
var c__4550__auto___33832 = cljs.core.chunk_first(seq__33391_33831__$1);
var G__33833 = cljs.core.chunk_rest(seq__33391_33831__$1);
var G__33834 = c__4550__auto___33832;
var G__33835 = cljs.core.count(c__4550__auto___33832);
var G__33836 = (0);
seq__33391_33817 = G__33833;
chunk__33392_33818 = G__33834;
count__33393_33819 = G__33835;
i__33394_33820 = G__33836;
continue;
} else {
var vec__33407_33837 = cljs.core.first(seq__33391_33831__$1);
var script_tag_33838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33407_33837,(0),null);
var script_body_33839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33407_33837,(1),null);
eval(script_body_33839);


var G__33840 = cljs.core.next(seq__33391_33831__$1);
var G__33841 = null;
var G__33842 = (0);
var G__33843 = (0);
seq__33391_33817 = G__33840;
chunk__33392_33818 = G__33841;
count__33393_33819 = G__33842;
i__33394_33820 = G__33843;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33410){
var vec__33411 = p__33410;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33415 = arguments.length;
switch (G__33415) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33436 = cljs.core.seq(style_keys);
var chunk__33437 = null;
var count__33438 = (0);
var i__33439 = (0);
while(true){
if((i__33439 < count__33438)){
var it = chunk__33437.cljs$core$IIndexed$_nth$arity$2(null,i__33439);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33845 = seq__33436;
var G__33846 = chunk__33437;
var G__33847 = count__33438;
var G__33848 = (i__33439 + (1));
seq__33436 = G__33845;
chunk__33437 = G__33846;
count__33438 = G__33847;
i__33439 = G__33848;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33436);
if(temp__5735__auto__){
var seq__33436__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33436__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33436__$1);
var G__33850 = cljs.core.chunk_rest(seq__33436__$1);
var G__33851 = c__4550__auto__;
var G__33852 = cljs.core.count(c__4550__auto__);
var G__33853 = (0);
seq__33436 = G__33850;
chunk__33437 = G__33851;
count__33438 = G__33852;
i__33439 = G__33853;
continue;
} else {
var it = cljs.core.first(seq__33436__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33854 = cljs.core.next(seq__33436__$1);
var G__33855 = null;
var G__33856 = (0);
var G__33857 = (0);
seq__33436 = G__33854;
chunk__33437 = G__33855;
count__33438 = G__33856;
i__33439 = G__33857;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k33441,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__33445 = k33441;
var G__33445__$1 = (((G__33445 instanceof cljs.core.Keyword))?G__33445.fqn:null);
switch (G__33445__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33441,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__33446){
var vec__33447 = p__33446;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33440){
var self__ = this;
var G__33440__$1 = this;
return (new cljs.core.RecordIter((0),G__33440__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33442,other33443){
var self__ = this;
var this33442__$1 = this;
return (((!((other33443 == null)))) && ((this33442__$1.constructor === other33443.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33442__$1.x,other33443.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33442__$1.y,other33443.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33442__$1.__extmap,other33443.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__33440){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__33454 = cljs.core.keyword_identical_QMARK_;
var expr__33455 = k__4382__auto__;
if(cljs.core.truth_((pred__33454.cljs$core$IFn$_invoke$arity$2 ? pred__33454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33455) : pred__33454.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33455)))){
return (new shadow.dom.Coordinate(G__33440,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33454.cljs$core$IFn$_invoke$arity$2 ? pred__33454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33455) : pred__33454.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33455)))){
return (new shadow.dom.Coordinate(self__.x,G__33440,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__33440),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__33440){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33440,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33444){
var extmap__4413__auto__ = (function (){var G__33467 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33444,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33444)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33467);
} else {
return G__33467;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33444),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33444),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k33474,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__33484 = k33474;
var G__33484__$1 = (((G__33484 instanceof cljs.core.Keyword))?G__33484.fqn:null);
switch (G__33484__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33474,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__33486){
var vec__33487 = p__33486;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33473){
var self__ = this;
var G__33473__$1 = this;
return (new cljs.core.RecordIter((0),G__33473__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33475,other33476){
var self__ = this;
var this33475__$1 = this;
return (((!((other33476 == null)))) && ((this33475__$1.constructor === other33476.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33475__$1.w,other33476.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33475__$1.h,other33476.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33475__$1.__extmap,other33476.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__33473){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__33519 = cljs.core.keyword_identical_QMARK_;
var expr__33520 = k__4382__auto__;
if(cljs.core.truth_((pred__33519.cljs$core$IFn$_invoke$arity$2 ? pred__33519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33520) : pred__33519.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33520)))){
return (new shadow.dom.Size(G__33473,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33519.cljs$core$IFn$_invoke$arity$2 ? pred__33519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33520) : pred__33519.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33520)))){
return (new shadow.dom.Size(self__.w,G__33473,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__33473),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__33473){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33473,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33480){
var extmap__4413__auto__ = (function (){var G__33529 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33480,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33480)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33529);
} else {
return G__33529;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33480),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33480),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__33864 = (i + (1));
var G__33865 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33864;
ret = G__33865;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33550){
var vec__33551 = p__33550;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33556 = arguments.length;
switch (G__33556) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33867 = ps;
var G__33868 = (i + (1));
el__$1 = G__33867;
i = G__33868;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33573 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33577_33869 = cljs.core.seq(props);
var chunk__33578_33870 = null;
var count__33579_33871 = (0);
var i__33580_33872 = (0);
while(true){
if((i__33580_33872 < count__33579_33871)){
var vec__33589_33873 = chunk__33578_33870.cljs$core$IIndexed$_nth$arity$2(null,i__33580_33872);
var k_33874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33589_33873,(0),null);
var v_33875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33589_33873,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33874);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33874),v_33875);


var G__33876 = seq__33577_33869;
var G__33877 = chunk__33578_33870;
var G__33878 = count__33579_33871;
var G__33879 = (i__33580_33872 + (1));
seq__33577_33869 = G__33876;
chunk__33578_33870 = G__33877;
count__33579_33871 = G__33878;
i__33580_33872 = G__33879;
continue;
} else {
var temp__5735__auto___33880 = cljs.core.seq(seq__33577_33869);
if(temp__5735__auto___33880){
var seq__33577_33881__$1 = temp__5735__auto___33880;
if(cljs.core.chunked_seq_QMARK_(seq__33577_33881__$1)){
var c__4550__auto___33882 = cljs.core.chunk_first(seq__33577_33881__$1);
var G__33883 = cljs.core.chunk_rest(seq__33577_33881__$1);
var G__33884 = c__4550__auto___33882;
var G__33885 = cljs.core.count(c__4550__auto___33882);
var G__33886 = (0);
seq__33577_33869 = G__33883;
chunk__33578_33870 = G__33884;
count__33579_33871 = G__33885;
i__33580_33872 = G__33886;
continue;
} else {
var vec__33592_33887 = cljs.core.first(seq__33577_33881__$1);
var k_33888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33592_33887,(0),null);
var v_33889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33592_33887,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33888);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33888),v_33889);


var G__33890 = cljs.core.next(seq__33577_33881__$1);
var G__33891 = null;
var G__33892 = (0);
var G__33893 = (0);
seq__33577_33869 = G__33890;
chunk__33578_33870 = G__33891;
count__33579_33871 = G__33892;
i__33580_33872 = G__33893;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33596 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(1),null);
var seq__33599_33894 = cljs.core.seq(node_children);
var chunk__33601_33895 = null;
var count__33602_33896 = (0);
var i__33603_33897 = (0);
while(true){
if((i__33603_33897 < count__33602_33896)){
var child_struct_33898 = chunk__33601_33895.cljs$core$IIndexed$_nth$arity$2(null,i__33603_33897);
if((!((child_struct_33898 == null)))){
if(typeof child_struct_33898 === 'string'){
var text_33899 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33899),child_struct_33898].join(''));
} else {
var children_33900 = shadow.dom.svg_node(child_struct_33898);
if(cljs.core.seq_QMARK_(children_33900)){
var seq__33617_33901 = cljs.core.seq(children_33900);
var chunk__33619_33902 = null;
var count__33620_33903 = (0);
var i__33621_33904 = (0);
while(true){
if((i__33621_33904 < count__33620_33903)){
var child_33905 = chunk__33619_33902.cljs$core$IIndexed$_nth$arity$2(null,i__33621_33904);
if(cljs.core.truth_(child_33905)){
node.appendChild(child_33905);


var G__33906 = seq__33617_33901;
var G__33907 = chunk__33619_33902;
var G__33908 = count__33620_33903;
var G__33909 = (i__33621_33904 + (1));
seq__33617_33901 = G__33906;
chunk__33619_33902 = G__33907;
count__33620_33903 = G__33908;
i__33621_33904 = G__33909;
continue;
} else {
var G__33910 = seq__33617_33901;
var G__33911 = chunk__33619_33902;
var G__33912 = count__33620_33903;
var G__33913 = (i__33621_33904 + (1));
seq__33617_33901 = G__33910;
chunk__33619_33902 = G__33911;
count__33620_33903 = G__33912;
i__33621_33904 = G__33913;
continue;
}
} else {
var temp__5735__auto___33914 = cljs.core.seq(seq__33617_33901);
if(temp__5735__auto___33914){
var seq__33617_33915__$1 = temp__5735__auto___33914;
if(cljs.core.chunked_seq_QMARK_(seq__33617_33915__$1)){
var c__4550__auto___33916 = cljs.core.chunk_first(seq__33617_33915__$1);
var G__33917 = cljs.core.chunk_rest(seq__33617_33915__$1);
var G__33918 = c__4550__auto___33916;
var G__33919 = cljs.core.count(c__4550__auto___33916);
var G__33920 = (0);
seq__33617_33901 = G__33917;
chunk__33619_33902 = G__33918;
count__33620_33903 = G__33919;
i__33621_33904 = G__33920;
continue;
} else {
var child_33921 = cljs.core.first(seq__33617_33915__$1);
if(cljs.core.truth_(child_33921)){
node.appendChild(child_33921);


var G__33922 = cljs.core.next(seq__33617_33915__$1);
var G__33923 = null;
var G__33924 = (0);
var G__33925 = (0);
seq__33617_33901 = G__33922;
chunk__33619_33902 = G__33923;
count__33620_33903 = G__33924;
i__33621_33904 = G__33925;
continue;
} else {
var G__33926 = cljs.core.next(seq__33617_33915__$1);
var G__33927 = null;
var G__33928 = (0);
var G__33929 = (0);
seq__33617_33901 = G__33926;
chunk__33619_33902 = G__33927;
count__33620_33903 = G__33928;
i__33621_33904 = G__33929;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33900);
}
}


var G__33930 = seq__33599_33894;
var G__33931 = chunk__33601_33895;
var G__33932 = count__33602_33896;
var G__33933 = (i__33603_33897 + (1));
seq__33599_33894 = G__33930;
chunk__33601_33895 = G__33931;
count__33602_33896 = G__33932;
i__33603_33897 = G__33933;
continue;
} else {
var G__33934 = seq__33599_33894;
var G__33935 = chunk__33601_33895;
var G__33936 = count__33602_33896;
var G__33937 = (i__33603_33897 + (1));
seq__33599_33894 = G__33934;
chunk__33601_33895 = G__33935;
count__33602_33896 = G__33936;
i__33603_33897 = G__33937;
continue;
}
} else {
var temp__5735__auto___33938 = cljs.core.seq(seq__33599_33894);
if(temp__5735__auto___33938){
var seq__33599_33939__$1 = temp__5735__auto___33938;
if(cljs.core.chunked_seq_QMARK_(seq__33599_33939__$1)){
var c__4550__auto___33940 = cljs.core.chunk_first(seq__33599_33939__$1);
var G__33941 = cljs.core.chunk_rest(seq__33599_33939__$1);
var G__33942 = c__4550__auto___33940;
var G__33943 = cljs.core.count(c__4550__auto___33940);
var G__33944 = (0);
seq__33599_33894 = G__33941;
chunk__33601_33895 = G__33942;
count__33602_33896 = G__33943;
i__33603_33897 = G__33944;
continue;
} else {
var child_struct_33945 = cljs.core.first(seq__33599_33939__$1);
if((!((child_struct_33945 == null)))){
if(typeof child_struct_33945 === 'string'){
var text_33946 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33946),child_struct_33945].join(''));
} else {
var children_33947 = shadow.dom.svg_node(child_struct_33945);
if(cljs.core.seq_QMARK_(children_33947)){
var seq__33623_33948 = cljs.core.seq(children_33947);
var chunk__33625_33949 = null;
var count__33626_33950 = (0);
var i__33627_33951 = (0);
while(true){
if((i__33627_33951 < count__33626_33950)){
var child_33952 = chunk__33625_33949.cljs$core$IIndexed$_nth$arity$2(null,i__33627_33951);
if(cljs.core.truth_(child_33952)){
node.appendChild(child_33952);


var G__33953 = seq__33623_33948;
var G__33954 = chunk__33625_33949;
var G__33955 = count__33626_33950;
var G__33956 = (i__33627_33951 + (1));
seq__33623_33948 = G__33953;
chunk__33625_33949 = G__33954;
count__33626_33950 = G__33955;
i__33627_33951 = G__33956;
continue;
} else {
var G__33957 = seq__33623_33948;
var G__33958 = chunk__33625_33949;
var G__33959 = count__33626_33950;
var G__33960 = (i__33627_33951 + (1));
seq__33623_33948 = G__33957;
chunk__33625_33949 = G__33958;
count__33626_33950 = G__33959;
i__33627_33951 = G__33960;
continue;
}
} else {
var temp__5735__auto___33961__$1 = cljs.core.seq(seq__33623_33948);
if(temp__5735__auto___33961__$1){
var seq__33623_33962__$1 = temp__5735__auto___33961__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33623_33962__$1)){
var c__4550__auto___33963 = cljs.core.chunk_first(seq__33623_33962__$1);
var G__33965 = cljs.core.chunk_rest(seq__33623_33962__$1);
var G__33966 = c__4550__auto___33963;
var G__33967 = cljs.core.count(c__4550__auto___33963);
var G__33968 = (0);
seq__33623_33948 = G__33965;
chunk__33625_33949 = G__33966;
count__33626_33950 = G__33967;
i__33627_33951 = G__33968;
continue;
} else {
var child_33969 = cljs.core.first(seq__33623_33962__$1);
if(cljs.core.truth_(child_33969)){
node.appendChild(child_33969);


var G__33971 = cljs.core.next(seq__33623_33962__$1);
var G__33972 = null;
var G__33973 = (0);
var G__33974 = (0);
seq__33623_33948 = G__33971;
chunk__33625_33949 = G__33972;
count__33626_33950 = G__33973;
i__33627_33951 = G__33974;
continue;
} else {
var G__33975 = cljs.core.next(seq__33623_33962__$1);
var G__33976 = null;
var G__33977 = (0);
var G__33978 = (0);
seq__33623_33948 = G__33975;
chunk__33625_33949 = G__33976;
count__33626_33950 = G__33977;
i__33627_33951 = G__33978;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33947);
}
}


var G__33979 = cljs.core.next(seq__33599_33939__$1);
var G__33980 = null;
var G__33981 = (0);
var G__33982 = (0);
seq__33599_33894 = G__33979;
chunk__33601_33895 = G__33980;
count__33602_33896 = G__33981;
i__33603_33897 = G__33982;
continue;
} else {
var G__33983 = cljs.core.next(seq__33599_33939__$1);
var G__33984 = null;
var G__33985 = (0);
var G__33986 = (0);
seq__33599_33894 = G__33983;
chunk__33601_33895 = G__33984;
count__33602_33896 = G__33985;
i__33603_33897 = G__33986;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33988 = arguments.length;
var i__4731__auto___33989 = (0);
while(true){
if((i__4731__auto___33989 < len__4730__auto___33988)){
args__4736__auto__.push((arguments[i__4731__auto___33989]));

var G__33990 = (i__4731__auto___33989 + (1));
i__4731__auto___33989 = G__33990;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33629){
var G__33630 = cljs.core.first(seq33629);
var seq33629__$1 = cljs.core.next(seq33629);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33630,seq33629__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33632 = arguments.length;
switch (G__33632) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__30811__auto___34018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30812__auto__ = (function (){var switch__30717__auto__ = (function (state_33637){
var state_val_33638 = (state_33637[(1)]);
if((state_val_33638 === (1))){
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33637__$1,(2),once_or_cleanup);
} else {
if((state_val_33638 === (2))){
var inst_33634 = (state_33637[(2)]);
var inst_33635 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33637__$1 = (function (){var statearr_33639 = state_33637;
(statearr_33639[(7)] = inst_33634);

return statearr_33639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33637__$1,inst_33635);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30718__auto__ = null;
var shadow$dom$state_machine__30718__auto____0 = (function (){
var statearr_33640 = [null,null,null,null,null,null,null,null];
(statearr_33640[(0)] = shadow$dom$state_machine__30718__auto__);

(statearr_33640[(1)] = (1));

return statearr_33640;
});
var shadow$dom$state_machine__30718__auto____1 = (function (state_33637){
while(true){
var ret_value__30719__auto__ = (function (){try{while(true){
var result__30720__auto__ = switch__30717__auto__(state_33637);
if(cljs.core.keyword_identical_QMARK_(result__30720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30720__auto__;
}
break;
}
}catch (e33641){var ex__30721__auto__ = e33641;
var statearr_33642_34019 = state_33637;
(statearr_33642_34019[(2)] = ex__30721__auto__);


if(cljs.core.seq((state_33637[(4)]))){
var statearr_33643_34020 = state_33637;
(statearr_33643_34020[(1)] = cljs.core.first((state_33637[(4)])));

} else {
throw ex__30721__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30719__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34021 = state_33637;
state_33637 = G__34021;
continue;
} else {
return ret_value__30719__auto__;
}
break;
}
});
shadow$dom$state_machine__30718__auto__ = function(state_33637){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30718__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30718__auto____1.call(this,state_33637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30718__auto____0;
shadow$dom$state_machine__30718__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30718__auto____1;
return shadow$dom$state_machine__30718__auto__;
})()
})();
var state__30813__auto__ = (function (){var statearr_33644 = f__30812__auto__();
(statearr_33644[(6)] = c__30811__auto___34018);

return statearr_33644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30813__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
