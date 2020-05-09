goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4120__auto__ = elem.textContent;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__36228 = arguments.length;
switch (G__36228) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__36234 = arguments.length;
switch (G__36234) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__36243 = arguments.length;
switch (G__36243) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__36237_SHARP_){
return (!((p1__36237_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37065 = arguments.length;
var i__4731__auto___37066 = (0);
while(true){
if((i__4731__auto___37066 < len__4730__auto___37065)){
args__4736__auto__.push((arguments[i__4731__auto___37066]));

var G__37067 = (i__4731__auto___37066 + (1));
i__4731__auto___37066 = G__37067;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__36287_37068 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36288_37069 = null;
var count__36289_37070 = (0);
var i__36290_37071 = (0);
while(true){
if((i__36290_37071 < count__36289_37070)){
var vec__36302_37072 = chunk__36288_37069.cljs$core$IIndexed$_nth$arity$2(null,i__36290_37071);
var k_37073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36302_37072,(0),null);
var v_37074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36302_37072,(1),null);
style.setProperty(dommy.utils.as_str(k_37073),v_37074);


var G__37075 = seq__36287_37068;
var G__37076 = chunk__36288_37069;
var G__37077 = count__36289_37070;
var G__37078 = (i__36290_37071 + (1));
seq__36287_37068 = G__37075;
chunk__36288_37069 = G__37076;
count__36289_37070 = G__37077;
i__36290_37071 = G__37078;
continue;
} else {
var temp__5735__auto___37079 = cljs.core.seq(seq__36287_37068);
if(temp__5735__auto___37079){
var seq__36287_37080__$1 = temp__5735__auto___37079;
if(cljs.core.chunked_seq_QMARK_(seq__36287_37080__$1)){
var c__4550__auto___37081 = cljs.core.chunk_first(seq__36287_37080__$1);
var G__37082 = cljs.core.chunk_rest(seq__36287_37080__$1);
var G__37083 = c__4550__auto___37081;
var G__37084 = cljs.core.count(c__4550__auto___37081);
var G__37085 = (0);
seq__36287_37068 = G__37082;
chunk__36288_37069 = G__37083;
count__36289_37070 = G__37084;
i__36290_37071 = G__37085;
continue;
} else {
var vec__36307_37086 = cljs.core.first(seq__36287_37080__$1);
var k_37087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36307_37086,(0),null);
var v_37088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36307_37086,(1),null);
style.setProperty(dommy.utils.as_str(k_37087),v_37088);


var G__37089 = cljs.core.next(seq__36287_37080__$1);
var G__37090 = null;
var G__37091 = (0);
var G__37092 = (0);
seq__36287_37068 = G__37089;
chunk__36288_37069 = G__37090;
count__36289_37070 = G__37091;
i__36290_37071 = G__37092;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq36285){
var G__36286 = cljs.core.first(seq36285);
var seq36285__$1 = cljs.core.next(seq36285);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36286,seq36285__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37093 = arguments.length;
var i__4731__auto___37094 = (0);
while(true){
if((i__4731__auto___37094 < len__4730__auto___37093)){
args__4736__auto__.push((arguments[i__4731__auto___37094]));

var G__37095 = (i__4731__auto___37094 + (1));
i__4731__auto___37094 = G__37095;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__36321_37096 = cljs.core.seq(keywords);
var chunk__36322_37097 = null;
var count__36323_37098 = (0);
var i__36324_37099 = (0);
while(true){
if((i__36324_37099 < count__36323_37098)){
var kw_37100 = chunk__36322_37097.cljs$core$IIndexed$_nth$arity$2(null,i__36324_37099);
style.removeProperty(dommy.utils.as_str(kw_37100));


var G__37101 = seq__36321_37096;
var G__37102 = chunk__36322_37097;
var G__37103 = count__36323_37098;
var G__37104 = (i__36324_37099 + (1));
seq__36321_37096 = G__37101;
chunk__36322_37097 = G__37102;
count__36323_37098 = G__37103;
i__36324_37099 = G__37104;
continue;
} else {
var temp__5735__auto___37105 = cljs.core.seq(seq__36321_37096);
if(temp__5735__auto___37105){
var seq__36321_37106__$1 = temp__5735__auto___37105;
if(cljs.core.chunked_seq_QMARK_(seq__36321_37106__$1)){
var c__4550__auto___37107 = cljs.core.chunk_first(seq__36321_37106__$1);
var G__37108 = cljs.core.chunk_rest(seq__36321_37106__$1);
var G__37109 = c__4550__auto___37107;
var G__37110 = cljs.core.count(c__4550__auto___37107);
var G__37111 = (0);
seq__36321_37096 = G__37108;
chunk__36322_37097 = G__37109;
count__36323_37098 = G__37110;
i__36324_37099 = G__37111;
continue;
} else {
var kw_37112 = cljs.core.first(seq__36321_37106__$1);
style.removeProperty(dommy.utils.as_str(kw_37112));


var G__37113 = cljs.core.next(seq__36321_37106__$1);
var G__37114 = null;
var G__37115 = (0);
var G__37116 = (0);
seq__36321_37096 = G__37113;
chunk__36322_37097 = G__37114;
count__36323_37098 = G__37115;
i__36324_37099 = G__37116;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq36315){
var G__36316 = cljs.core.first(seq36315);
var seq36315__$1 = cljs.core.next(seq36315);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36316,seq36315__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37117 = arguments.length;
var i__4731__auto___37118 = (0);
while(true){
if((i__4731__auto___37118 < len__4730__auto___37117)){
args__4736__auto__.push((arguments[i__4731__auto___37118]));

var G__37119 = (i__4731__auto___37118 + (1));
i__4731__auto___37118 = G__37119;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36330_37120 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__36331_37121 = null;
var count__36332_37122 = (0);
var i__36333_37123 = (0);
while(true){
if((i__36333_37123 < count__36332_37122)){
var vec__36340_37124 = chunk__36331_37121.cljs$core$IIndexed$_nth$arity$2(null,i__36333_37123);
var k_37125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36340_37124,(0),null);
var v_37126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36340_37124,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37125,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37126),"px"].join('')], 0));


var G__37127 = seq__36330_37120;
var G__37128 = chunk__36331_37121;
var G__37129 = count__36332_37122;
var G__37130 = (i__36333_37123 + (1));
seq__36330_37120 = G__37127;
chunk__36331_37121 = G__37128;
count__36332_37122 = G__37129;
i__36333_37123 = G__37130;
continue;
} else {
var temp__5735__auto___37131 = cljs.core.seq(seq__36330_37120);
if(temp__5735__auto___37131){
var seq__36330_37132__$1 = temp__5735__auto___37131;
if(cljs.core.chunked_seq_QMARK_(seq__36330_37132__$1)){
var c__4550__auto___37133 = cljs.core.chunk_first(seq__36330_37132__$1);
var G__37134 = cljs.core.chunk_rest(seq__36330_37132__$1);
var G__37135 = c__4550__auto___37133;
var G__37136 = cljs.core.count(c__4550__auto___37133);
var G__37137 = (0);
seq__36330_37120 = G__37134;
chunk__36331_37121 = G__37135;
count__36332_37122 = G__37136;
i__36333_37123 = G__37137;
continue;
} else {
var vec__36343_37138 = cljs.core.first(seq__36330_37132__$1);
var k_37139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36343_37138,(0),null);
var v_37140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36343_37138,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37139,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37140),"px"].join('')], 0));


var G__37141 = cljs.core.next(seq__36330_37132__$1);
var G__37142 = null;
var G__37143 = (0);
var G__37144 = (0);
seq__36330_37120 = G__37141;
chunk__36331_37121 = G__37142;
count__36332_37122 = G__37143;
i__36333_37123 = G__37144;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq36328){
var G__36329 = cljs.core.first(seq36328);
var seq36328__$1 = cljs.core.next(seq36328);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36329,seq36328__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__36351 = arguments.length;
switch (G__36351) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37146 = arguments.length;
var i__4731__auto___37147 = (0);
while(true){
if((i__4731__auto___37147 < len__4730__auto___37146)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37147]));

var G__37148 = (i__4731__auto___37147 + (1));
i__4731__auto___37147 = G__37148;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__36352 = elem;
(G__36352[k__$1] = v);

return G__36352;
} else {
var G__36353 = elem;
G__36353.setAttribute(k__$1,v);

return G__36353;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__36354_37149 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__36355_37150 = null;
var count__36356_37151 = (0);
var i__36357_37152 = (0);
while(true){
if((i__36357_37152 < count__36356_37151)){
var vec__36364_37153 = chunk__36355_37150.cljs$core$IIndexed$_nth$arity$2(null,i__36357_37152);
var k_37154__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36364_37153,(0),null);
var v_37155__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36364_37153,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37154__$1,v_37155__$1);


var G__37156 = seq__36354_37149;
var G__37157 = chunk__36355_37150;
var G__37158 = count__36356_37151;
var G__37159 = (i__36357_37152 + (1));
seq__36354_37149 = G__37156;
chunk__36355_37150 = G__37157;
count__36356_37151 = G__37158;
i__36357_37152 = G__37159;
continue;
} else {
var temp__5735__auto___37160 = cljs.core.seq(seq__36354_37149);
if(temp__5735__auto___37160){
var seq__36354_37161__$1 = temp__5735__auto___37160;
if(cljs.core.chunked_seq_QMARK_(seq__36354_37161__$1)){
var c__4550__auto___37162 = cljs.core.chunk_first(seq__36354_37161__$1);
var G__37163 = cljs.core.chunk_rest(seq__36354_37161__$1);
var G__37164 = c__4550__auto___37162;
var G__37165 = cljs.core.count(c__4550__auto___37162);
var G__37166 = (0);
seq__36354_37149 = G__37163;
chunk__36355_37150 = G__37164;
count__36356_37151 = G__37165;
i__36357_37152 = G__37166;
continue;
} else {
var vec__36368_37167 = cljs.core.first(seq__36354_37161__$1);
var k_37168__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36368_37167,(0),null);
var v_37169__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36368_37167,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_37168__$1,v_37169__$1);


var G__37170 = cljs.core.next(seq__36354_37161__$1);
var G__37171 = null;
var G__37172 = (0);
var G__37173 = (0);
seq__36354_37149 = G__37170;
chunk__36355_37150 = G__37171;
count__36356_37151 = G__37172;
i__36357_37152 = G__37173;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq36347){
var G__36348 = cljs.core.first(seq36347);
var seq36347__$1 = cljs.core.next(seq36347);
var G__36349 = cljs.core.first(seq36347__$1);
var seq36347__$2 = cljs.core.next(seq36347__$1);
var G__36350 = cljs.core.first(seq36347__$2);
var seq36347__$3 = cljs.core.next(seq36347__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36348,G__36349,G__36350,seq36347__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__36380 = arguments.length;
switch (G__36380) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37175 = arguments.length;
var i__4731__auto___37176 = (0);
while(true){
if((i__4731__auto___37176 < len__4730__auto___37175)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37176]));

var G__37177 = (i__4731__auto___37176 + (1));
i__4731__auto___37176 = G__37177;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_37178__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__36387 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__36387.cljs$core$IFn$_invoke$arity$1 ? fexpr__36387.cljs$core$IFn$_invoke$arity$1(k_37178__$1) : fexpr__36387.call(null,k_37178__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_37178__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__36388_37179 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__36389_37180 = null;
var count__36390_37181 = (0);
var i__36391_37182 = (0);
while(true){
if((i__36391_37182 < count__36390_37181)){
var k_37183__$1 = chunk__36389_37180.cljs$core$IIndexed$_nth$arity$2(null,i__36391_37182);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37183__$1);


var G__37184 = seq__36388_37179;
var G__37185 = chunk__36389_37180;
var G__37186 = count__36390_37181;
var G__37187 = (i__36391_37182 + (1));
seq__36388_37179 = G__37184;
chunk__36389_37180 = G__37185;
count__36390_37181 = G__37186;
i__36391_37182 = G__37187;
continue;
} else {
var temp__5735__auto___37188 = cljs.core.seq(seq__36388_37179);
if(temp__5735__auto___37188){
var seq__36388_37189__$1 = temp__5735__auto___37188;
if(cljs.core.chunked_seq_QMARK_(seq__36388_37189__$1)){
var c__4550__auto___37190 = cljs.core.chunk_first(seq__36388_37189__$1);
var G__37191 = cljs.core.chunk_rest(seq__36388_37189__$1);
var G__37192 = c__4550__auto___37190;
var G__37193 = cljs.core.count(c__4550__auto___37190);
var G__37194 = (0);
seq__36388_37179 = G__37191;
chunk__36389_37180 = G__37192;
count__36390_37181 = G__37193;
i__36391_37182 = G__37194;
continue;
} else {
var k_37195__$1 = cljs.core.first(seq__36388_37189__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_37195__$1);


var G__37196 = cljs.core.next(seq__36388_37189__$1);
var G__37197 = null;
var G__37198 = (0);
var G__37199 = (0);
seq__36388_37179 = G__37196;
chunk__36389_37180 = G__37197;
count__36390_37181 = G__37198;
i__36391_37182 = G__37199;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq36377){
var G__36378 = cljs.core.first(seq36377);
var seq36377__$1 = cljs.core.next(seq36377);
var G__36379 = cljs.core.first(seq36377__$1);
var seq36377__$2 = cljs.core.next(seq36377__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36378,G__36379,seq36377__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__36414 = arguments.length;
switch (G__36414) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__36426 = arguments.length;
switch (G__36426) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37202 = arguments.length;
var i__4731__auto___37203 = (0);
while(true){
if((i__4731__auto___37203 < len__4730__auto___37202)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37203]));

var G__37204 = (i__4731__auto___37203 + (1));
i__4731__auto___37203 = G__37204;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___37205 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37205)){
var class_list_37206 = temp__5733__auto___37205;
var seq__36441_37207 = cljs.core.seq(classes__$1);
var chunk__36442_37208 = null;
var count__36443_37209 = (0);
var i__36444_37210 = (0);
while(true){
if((i__36444_37210 < count__36443_37209)){
var c_37211 = chunk__36442_37208.cljs$core$IIndexed$_nth$arity$2(null,i__36444_37210);
class_list_37206.add(c_37211);


var G__37212 = seq__36441_37207;
var G__37213 = chunk__36442_37208;
var G__37214 = count__36443_37209;
var G__37215 = (i__36444_37210 + (1));
seq__36441_37207 = G__37212;
chunk__36442_37208 = G__37213;
count__36443_37209 = G__37214;
i__36444_37210 = G__37215;
continue;
} else {
var temp__5735__auto___37216 = cljs.core.seq(seq__36441_37207);
if(temp__5735__auto___37216){
var seq__36441_37217__$1 = temp__5735__auto___37216;
if(cljs.core.chunked_seq_QMARK_(seq__36441_37217__$1)){
var c__4550__auto___37218 = cljs.core.chunk_first(seq__36441_37217__$1);
var G__37219 = cljs.core.chunk_rest(seq__36441_37217__$1);
var G__37220 = c__4550__auto___37218;
var G__37221 = cljs.core.count(c__4550__auto___37218);
var G__37222 = (0);
seq__36441_37207 = G__37219;
chunk__36442_37208 = G__37220;
count__36443_37209 = G__37221;
i__36444_37210 = G__37222;
continue;
} else {
var c_37223 = cljs.core.first(seq__36441_37217__$1);
class_list_37206.add(c_37223);


var G__37224 = cljs.core.next(seq__36441_37217__$1);
var G__37225 = null;
var G__37226 = (0);
var G__37227 = (0);
seq__36441_37207 = G__37224;
chunk__36442_37208 = G__37225;
count__36443_37209 = G__37226;
i__36444_37210 = G__37227;
continue;
}
} else {
}
}
break;
}
} else {
var seq__36449_37228 = cljs.core.seq(classes__$1);
var chunk__36450_37229 = null;
var count__36451_37230 = (0);
var i__36452_37231 = (0);
while(true){
if((i__36452_37231 < count__36451_37230)){
var c_37232 = chunk__36450_37229.cljs$core$IIndexed$_nth$arity$2(null,i__36452_37231);
var class_name_37233 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37233,c_37232))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37233 === ""))?c_37232:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37233)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37232)].join('')));
}


var G__37234 = seq__36449_37228;
var G__37235 = chunk__36450_37229;
var G__37236 = count__36451_37230;
var G__37237 = (i__36452_37231 + (1));
seq__36449_37228 = G__37234;
chunk__36450_37229 = G__37235;
count__36451_37230 = G__37236;
i__36452_37231 = G__37237;
continue;
} else {
var temp__5735__auto___37238 = cljs.core.seq(seq__36449_37228);
if(temp__5735__auto___37238){
var seq__36449_37239__$1 = temp__5735__auto___37238;
if(cljs.core.chunked_seq_QMARK_(seq__36449_37239__$1)){
var c__4550__auto___37240 = cljs.core.chunk_first(seq__36449_37239__$1);
var G__37241 = cljs.core.chunk_rest(seq__36449_37239__$1);
var G__37242 = c__4550__auto___37240;
var G__37243 = cljs.core.count(c__4550__auto___37240);
var G__37244 = (0);
seq__36449_37228 = G__37241;
chunk__36450_37229 = G__37242;
count__36451_37230 = G__37243;
i__36452_37231 = G__37244;
continue;
} else {
var c_37245 = cljs.core.first(seq__36449_37239__$1);
var class_name_37246 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_37246,c_37245))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_37246 === ""))?c_37245:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37246)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_37245)].join('')));
}


var G__37247 = cljs.core.next(seq__36449_37239__$1);
var G__37248 = null;
var G__37249 = (0);
var G__37250 = (0);
seq__36449_37228 = G__37247;
chunk__36450_37229 = G__37248;
count__36451_37230 = G__37249;
i__36452_37231 = G__37250;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__36467_37251 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__36468_37252 = null;
var count__36469_37253 = (0);
var i__36470_37254 = (0);
while(true){
if((i__36470_37254 < count__36469_37253)){
var c_37255 = chunk__36468_37252.cljs$core$IIndexed$_nth$arity$2(null,i__36470_37254);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37255);


var G__37256 = seq__36467_37251;
var G__37257 = chunk__36468_37252;
var G__37258 = count__36469_37253;
var G__37259 = (i__36470_37254 + (1));
seq__36467_37251 = G__37256;
chunk__36468_37252 = G__37257;
count__36469_37253 = G__37258;
i__36470_37254 = G__37259;
continue;
} else {
var temp__5735__auto___37260 = cljs.core.seq(seq__36467_37251);
if(temp__5735__auto___37260){
var seq__36467_37261__$1 = temp__5735__auto___37260;
if(cljs.core.chunked_seq_QMARK_(seq__36467_37261__$1)){
var c__4550__auto___37262 = cljs.core.chunk_first(seq__36467_37261__$1);
var G__37263 = cljs.core.chunk_rest(seq__36467_37261__$1);
var G__37264 = c__4550__auto___37262;
var G__37265 = cljs.core.count(c__4550__auto___37262);
var G__37266 = (0);
seq__36467_37251 = G__37263;
chunk__36468_37252 = G__37264;
count__36469_37253 = G__37265;
i__36470_37254 = G__37266;
continue;
} else {
var c_37267 = cljs.core.first(seq__36467_37261__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_37267);


var G__37268 = cljs.core.next(seq__36467_37261__$1);
var G__37269 = null;
var G__37270 = (0);
var G__37271 = (0);
seq__36467_37251 = G__37268;
chunk__36468_37252 = G__37269;
count__36469_37253 = G__37270;
i__36470_37254 = G__37271;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq36423){
var G__36424 = cljs.core.first(seq36423);
var seq36423__$1 = cljs.core.next(seq36423);
var G__36425 = cljs.core.first(seq36423__$1);
var seq36423__$2 = cljs.core.next(seq36423__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36424,G__36425,seq36423__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__36475 = arguments.length;
switch (G__36475) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37273 = arguments.length;
var i__4731__auto___37274 = (0);
while(true){
if((i__4731__auto___37274 < len__4730__auto___37273)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37274]));

var G__37275 = (i__4731__auto___37274 + (1));
i__4731__auto___37274 = G__37275;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37276 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37276)){
var class_list_37277 = temp__5733__auto___37276;
class_list_37277.remove(c__$1);
} else {
var class_name_37278 = dommy.core.class$(elem);
var new_class_name_37279 = dommy.utils.remove_class_str(class_name_37278,c__$1);
if((class_name_37278 === new_class_name_37279)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_37279);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__36476 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__36477 = null;
var count__36478 = (0);
var i__36479 = (0);
while(true){
if((i__36479 < count__36478)){
var c = chunk__36477.cljs$core$IIndexed$_nth$arity$2(null,i__36479);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37280 = seq__36476;
var G__37281 = chunk__36477;
var G__37282 = count__36478;
var G__37283 = (i__36479 + (1));
seq__36476 = G__37280;
chunk__36477 = G__37281;
count__36478 = G__37282;
i__36479 = G__37283;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36476);
if(temp__5735__auto__){
var seq__36476__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36476__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36476__$1);
var G__37284 = cljs.core.chunk_rest(seq__36476__$1);
var G__37285 = c__4550__auto__;
var G__37286 = cljs.core.count(c__4550__auto__);
var G__37287 = (0);
seq__36476 = G__37284;
chunk__36477 = G__37285;
count__36478 = G__37286;
i__36479 = G__37287;
continue;
} else {
var c = cljs.core.first(seq__36476__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__37288 = cljs.core.next(seq__36476__$1);
var G__37289 = null;
var G__37290 = (0);
var G__37291 = (0);
seq__36476 = G__37288;
chunk__36477 = G__37289;
count__36478 = G__37290;
i__36479 = G__37291;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq36472){
var G__36473 = cljs.core.first(seq36472);
var seq36472__$1 = cljs.core.next(seq36472);
var G__36474 = cljs.core.first(seq36472__$1);
var seq36472__$2 = cljs.core.next(seq36472__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36473,G__36474,seq36472__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__36503 = arguments.length;
switch (G__36503) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___37293 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___37293)){
var class_list_37294 = temp__5733__auto___37293;
class_list_37294.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__36505 = arguments.length;
switch (G__36505) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__36511 = arguments.length;
switch (G__36511) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__36534 = arguments.length;
switch (G__36534) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37300 = arguments.length;
var i__4731__auto___37301 = (0);
while(true){
if((i__4731__auto___37301 < len__4730__auto___37300)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37301]));

var G__37302 = (i__4731__auto___37301 + (1));
i__4731__auto___37301 = G__37302;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36537 = parent;
G__36537.appendChild(child);

return G__36537;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36538_37304 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36539_37305 = null;
var count__36540_37306 = (0);
var i__36541_37307 = (0);
while(true){
if((i__36541_37307 < count__36540_37306)){
var c_37309 = chunk__36539_37305.cljs$core$IIndexed$_nth$arity$2(null,i__36541_37307);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37309);


var G__37310 = seq__36538_37304;
var G__37311 = chunk__36539_37305;
var G__37312 = count__36540_37306;
var G__37313 = (i__36541_37307 + (1));
seq__36538_37304 = G__37310;
chunk__36539_37305 = G__37311;
count__36540_37306 = G__37312;
i__36541_37307 = G__37313;
continue;
} else {
var temp__5735__auto___37314 = cljs.core.seq(seq__36538_37304);
if(temp__5735__auto___37314){
var seq__36538_37315__$1 = temp__5735__auto___37314;
if(cljs.core.chunked_seq_QMARK_(seq__36538_37315__$1)){
var c__4550__auto___37316 = cljs.core.chunk_first(seq__36538_37315__$1);
var G__37317 = cljs.core.chunk_rest(seq__36538_37315__$1);
var G__37318 = c__4550__auto___37316;
var G__37319 = cljs.core.count(c__4550__auto___37316);
var G__37320 = (0);
seq__36538_37304 = G__37317;
chunk__36539_37305 = G__37318;
count__36540_37306 = G__37319;
i__36541_37307 = G__37320;
continue;
} else {
var c_37321 = cljs.core.first(seq__36538_37315__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37321);


var G__37322 = cljs.core.next(seq__36538_37315__$1);
var G__37323 = null;
var G__37324 = (0);
var G__37325 = (0);
seq__36538_37304 = G__37322;
chunk__36539_37305 = G__37323;
count__36540_37306 = G__37324;
i__36541_37307 = G__37325;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq36529){
var G__36530 = cljs.core.first(seq36529);
var seq36529__$1 = cljs.core.next(seq36529);
var G__36531 = cljs.core.first(seq36529__$1);
var seq36529__$2 = cljs.core.next(seq36529__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36530,G__36531,seq36529__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__36574 = arguments.length;
switch (G__36574) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37327 = arguments.length;
var i__4731__auto___37328 = (0);
while(true){
if((i__4731__auto___37328 < len__4730__auto___37327)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37328]));

var G__37329 = (i__4731__auto___37328 + (1));
i__4731__auto___37328 = G__37329;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__36583 = parent;
G__36583.insertBefore(child,parent.firstChild);

return G__36583;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__36586_37334 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__36587_37335 = null;
var count__36588_37336 = (0);
var i__36589_37337 = (0);
while(true){
if((i__36589_37337 < count__36588_37336)){
var c_37338 = chunk__36587_37335.cljs$core$IIndexed$_nth$arity$2(null,i__36589_37337);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37338);


var G__37339 = seq__36586_37334;
var G__37340 = chunk__36587_37335;
var G__37341 = count__36588_37336;
var G__37342 = (i__36589_37337 + (1));
seq__36586_37334 = G__37339;
chunk__36587_37335 = G__37340;
count__36588_37336 = G__37341;
i__36589_37337 = G__37342;
continue;
} else {
var temp__5735__auto___37343 = cljs.core.seq(seq__36586_37334);
if(temp__5735__auto___37343){
var seq__36586_37344__$1 = temp__5735__auto___37343;
if(cljs.core.chunked_seq_QMARK_(seq__36586_37344__$1)){
var c__4550__auto___37345 = cljs.core.chunk_first(seq__36586_37344__$1);
var G__37346 = cljs.core.chunk_rest(seq__36586_37344__$1);
var G__37347 = c__4550__auto___37345;
var G__37348 = cljs.core.count(c__4550__auto___37345);
var G__37349 = (0);
seq__36586_37334 = G__37346;
chunk__36587_37335 = G__37347;
count__36588_37336 = G__37348;
i__36589_37337 = G__37349;
continue;
} else {
var c_37350 = cljs.core.first(seq__36586_37344__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_37350);


var G__37351 = cljs.core.next(seq__36586_37344__$1);
var G__37352 = null;
var G__37353 = (0);
var G__37354 = (0);
seq__36586_37334 = G__37351;
chunk__36587_37335 = G__37352;
count__36588_37336 = G__37353;
i__36589_37337 = G__37354;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq36565){
var G__36567 = cljs.core.first(seq36565);
var seq36565__$1 = cljs.core.next(seq36565);
var G__36568 = cljs.core.first(seq36565__$1);
var seq36565__$2 = cljs.core.next(seq36565__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36567,G__36568,seq36565__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___37355 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___37355)){
var next_37356 = temp__5733__auto___37355;
dommy.core.insert_before_BANG_(elem,next_37356);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__36630 = arguments.length;
switch (G__36630) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__36639 = p;
G__36639.removeChild(elem);

return G__36639;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36641){
var vec__36642 = p__36641;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36642,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4120__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4109__auto__ = related_target;
if(cljs.core.truth_(and__4109__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4109__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4109__auto__ = selected_target;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4109__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4120__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37358 = arguments.length;
var i__4731__auto___37359 = (0);
while(true){
if((i__4731__auto___37359 < len__4730__auto___37358)){
args__4736__auto__.push((arguments[i__4731__auto___37359]));

var G__37360 = (i__4731__auto___37359 + (1));
i__4731__auto___37359 = G__37360;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq36654){
var G__36655 = cljs.core.first(seq36654);
var seq36654__$1 = cljs.core.next(seq36654);
var G__36656 = cljs.core.first(seq36654__$1);
var seq36654__$2 = cljs.core.next(seq36654__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36655,G__36656,seq36654__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37365 = arguments.length;
var i__4731__auto___37366 = (0);
while(true){
if((i__4731__auto___37366 < len__4730__auto___37365)){
args__4736__auto__.push((arguments[i__4731__auto___37366]));

var G__37367 = (i__4731__auto___37366 + (1));
i__4731__auto___37366 = G__37367;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36666_37369 = dommy.core.elem_and_selector(elem_sel);
var elem_37370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36666_37369,(0),null);
var selector_37371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36666_37369,(1),null);
var seq__36669_37372 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36676_37373 = null;
var count__36677_37374 = (0);
var i__36678_37375 = (0);
while(true){
if((i__36678_37375 < count__36677_37374)){
var vec__36778_37376 = chunk__36676_37373.cljs$core$IIndexed$_nth$arity$2(null,i__36678_37375);
var orig_type_37377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36778_37376,(0),null);
var f_37378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36778_37376,(1),null);
var seq__36679_37379 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37377,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37377,cljs.core.identity])));
var chunk__36681_37380 = null;
var count__36682_37381 = (0);
var i__36683_37382 = (0);
while(true){
if((i__36683_37382 < count__36682_37381)){
var vec__36802_37383 = chunk__36681_37380.cljs$core$IIndexed$_nth$arity$2(null,i__36683_37382);
var actual_type_37384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36802_37383,(0),null);
var factory_37385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36802_37383,(1),null);
var canonical_f_37386 = (function (){var G__36806 = (factory_37385.cljs$core$IFn$_invoke$arity$1 ? factory_37385.cljs$core$IFn$_invoke$arity$1(f_37378) : factory_37385.call(null,f_37378));
var fexpr__36805 = (cljs.core.truth_(selector_37371)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37370,selector_37371):cljs.core.identity);
return (fexpr__36805.cljs$core$IFn$_invoke$arity$1 ? fexpr__36805.cljs$core$IFn$_invoke$arity$1(G__36806) : fexpr__36805.call(null,G__36806));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37370,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37371,actual_type_37384,f_37378], null),canonical_f_37386], 0));

if(cljs.core.truth_(elem_37370.addEventListener)){
elem_37370.addEventListener(cljs.core.name(actual_type_37384),canonical_f_37386);
} else {
elem_37370.attachEvent(cljs.core.name(actual_type_37384),canonical_f_37386);
}


var G__37387 = seq__36679_37379;
var G__37388 = chunk__36681_37380;
var G__37389 = count__36682_37381;
var G__37390 = (i__36683_37382 + (1));
seq__36679_37379 = G__37387;
chunk__36681_37380 = G__37388;
count__36682_37381 = G__37389;
i__36683_37382 = G__37390;
continue;
} else {
var temp__5735__auto___37391 = cljs.core.seq(seq__36679_37379);
if(temp__5735__auto___37391){
var seq__36679_37393__$1 = temp__5735__auto___37391;
if(cljs.core.chunked_seq_QMARK_(seq__36679_37393__$1)){
var c__4550__auto___37394 = cljs.core.chunk_first(seq__36679_37393__$1);
var G__37395 = cljs.core.chunk_rest(seq__36679_37393__$1);
var G__37396 = c__4550__auto___37394;
var G__37397 = cljs.core.count(c__4550__auto___37394);
var G__37398 = (0);
seq__36679_37379 = G__37395;
chunk__36681_37380 = G__37396;
count__36682_37381 = G__37397;
i__36683_37382 = G__37398;
continue;
} else {
var vec__36814_37402 = cljs.core.first(seq__36679_37393__$1);
var actual_type_37403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36814_37402,(0),null);
var factory_37404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36814_37402,(1),null);
var canonical_f_37409 = (function (){var G__36819 = (factory_37404.cljs$core$IFn$_invoke$arity$1 ? factory_37404.cljs$core$IFn$_invoke$arity$1(f_37378) : factory_37404.call(null,f_37378));
var fexpr__36818 = (cljs.core.truth_(selector_37371)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37370,selector_37371):cljs.core.identity);
return (fexpr__36818.cljs$core$IFn$_invoke$arity$1 ? fexpr__36818.cljs$core$IFn$_invoke$arity$1(G__36819) : fexpr__36818.call(null,G__36819));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37370,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37371,actual_type_37403,f_37378], null),canonical_f_37409], 0));

if(cljs.core.truth_(elem_37370.addEventListener)){
elem_37370.addEventListener(cljs.core.name(actual_type_37403),canonical_f_37409);
} else {
elem_37370.attachEvent(cljs.core.name(actual_type_37403),canonical_f_37409);
}


var G__37410 = cljs.core.next(seq__36679_37393__$1);
var G__37411 = null;
var G__37412 = (0);
var G__37413 = (0);
seq__36679_37379 = G__37410;
chunk__36681_37380 = G__37411;
count__36682_37381 = G__37412;
i__36683_37382 = G__37413;
continue;
}
} else {
}
}
break;
}

var G__37414 = seq__36669_37372;
var G__37415 = chunk__36676_37373;
var G__37416 = count__36677_37374;
var G__37417 = (i__36678_37375 + (1));
seq__36669_37372 = G__37414;
chunk__36676_37373 = G__37415;
count__36677_37374 = G__37416;
i__36678_37375 = G__37417;
continue;
} else {
var temp__5735__auto___37418 = cljs.core.seq(seq__36669_37372);
if(temp__5735__auto___37418){
var seq__36669_37419__$1 = temp__5735__auto___37418;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37419__$1)){
var c__4550__auto___37420 = cljs.core.chunk_first(seq__36669_37419__$1);
var G__37421 = cljs.core.chunk_rest(seq__36669_37419__$1);
var G__37422 = c__4550__auto___37420;
var G__37423 = cljs.core.count(c__4550__auto___37420);
var G__37424 = (0);
seq__36669_37372 = G__37421;
chunk__36676_37373 = G__37422;
count__36677_37374 = G__37423;
i__36678_37375 = G__37424;
continue;
} else {
var vec__36827_37425 = cljs.core.first(seq__36669_37419__$1);
var orig_type_37426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36827_37425,(0),null);
var f_37427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36827_37425,(1),null);
var seq__36670_37428 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37426,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37426,cljs.core.identity])));
var chunk__36672_37429 = null;
var count__36673_37430 = (0);
var i__36674_37431 = (0);
while(true){
if((i__36674_37431 < count__36673_37430)){
var vec__36841_37432 = chunk__36672_37429.cljs$core$IIndexed$_nth$arity$2(null,i__36674_37431);
var actual_type_37433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36841_37432,(0),null);
var factory_37434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36841_37432,(1),null);
var canonical_f_37435 = (function (){var G__36845 = (factory_37434.cljs$core$IFn$_invoke$arity$1 ? factory_37434.cljs$core$IFn$_invoke$arity$1(f_37427) : factory_37434.call(null,f_37427));
var fexpr__36844 = (cljs.core.truth_(selector_37371)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37370,selector_37371):cljs.core.identity);
return (fexpr__36844.cljs$core$IFn$_invoke$arity$1 ? fexpr__36844.cljs$core$IFn$_invoke$arity$1(G__36845) : fexpr__36844.call(null,G__36845));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37370,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37371,actual_type_37433,f_37427], null),canonical_f_37435], 0));

if(cljs.core.truth_(elem_37370.addEventListener)){
elem_37370.addEventListener(cljs.core.name(actual_type_37433),canonical_f_37435);
} else {
elem_37370.attachEvent(cljs.core.name(actual_type_37433),canonical_f_37435);
}


var G__37436 = seq__36670_37428;
var G__37437 = chunk__36672_37429;
var G__37438 = count__36673_37430;
var G__37439 = (i__36674_37431 + (1));
seq__36670_37428 = G__37436;
chunk__36672_37429 = G__37437;
count__36673_37430 = G__37438;
i__36674_37431 = G__37439;
continue;
} else {
var temp__5735__auto___37443__$1 = cljs.core.seq(seq__36670_37428);
if(temp__5735__auto___37443__$1){
var seq__36670_37444__$1 = temp__5735__auto___37443__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36670_37444__$1)){
var c__4550__auto___37445 = cljs.core.chunk_first(seq__36670_37444__$1);
var G__37446 = cljs.core.chunk_rest(seq__36670_37444__$1);
var G__37447 = c__4550__auto___37445;
var G__37448 = cljs.core.count(c__4550__auto___37445);
var G__37449 = (0);
seq__36670_37428 = G__37446;
chunk__36672_37429 = G__37447;
count__36673_37430 = G__37448;
i__36674_37431 = G__37449;
continue;
} else {
var vec__36846_37450 = cljs.core.first(seq__36670_37444__$1);
var actual_type_37451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37450,(0),null);
var factory_37452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36846_37450,(1),null);
var canonical_f_37453 = (function (){var G__36850 = (factory_37452.cljs$core$IFn$_invoke$arity$1 ? factory_37452.cljs$core$IFn$_invoke$arity$1(f_37427) : factory_37452.call(null,f_37427));
var fexpr__36849 = (cljs.core.truth_(selector_37371)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_37370,selector_37371):cljs.core.identity);
return (fexpr__36849.cljs$core$IFn$_invoke$arity$1 ? fexpr__36849.cljs$core$IFn$_invoke$arity$1(G__36850) : fexpr__36849.call(null,G__36850));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37370,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37371,actual_type_37451,f_37427], null),canonical_f_37453], 0));

if(cljs.core.truth_(elem_37370.addEventListener)){
elem_37370.addEventListener(cljs.core.name(actual_type_37451),canonical_f_37453);
} else {
elem_37370.attachEvent(cljs.core.name(actual_type_37451),canonical_f_37453);
}


var G__37454 = cljs.core.next(seq__36670_37444__$1);
var G__37455 = null;
var G__37456 = (0);
var G__37457 = (0);
seq__36670_37428 = G__37454;
chunk__36672_37429 = G__37455;
count__36673_37430 = G__37456;
i__36674_37431 = G__37457;
continue;
}
} else {
}
}
break;
}

var G__37458 = cljs.core.next(seq__36669_37419__$1);
var G__37459 = null;
var G__37460 = (0);
var G__37461 = (0);
seq__36669_37372 = G__37458;
chunk__36676_37373 = G__37459;
count__36677_37374 = G__37460;
i__36678_37375 = G__37461;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq36664){
var G__36665 = cljs.core.first(seq36664);
var seq36664__$1 = cljs.core.next(seq36664);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36665,seq36664__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37462 = arguments.length;
var i__4731__auto___37463 = (0);
while(true){
if((i__4731__auto___37463 < len__4730__auto___37462)){
args__4736__auto__.push((arguments[i__4731__auto___37463]));

var G__37464 = (i__4731__auto___37463 + (1));
i__4731__auto___37463 = G__37464;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36857_37465 = dommy.core.elem_and_selector(elem_sel);
var elem_37466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36857_37465,(0),null);
var selector_37467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36857_37465,(1),null);
var seq__36860_37468 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36867_37469 = null;
var count__36868_37470 = (0);
var i__36869_37471 = (0);
while(true){
if((i__36869_37471 < count__36868_37470)){
var vec__36933_37472 = chunk__36867_37469.cljs$core$IIndexed$_nth$arity$2(null,i__36869_37471);
var orig_type_37473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36933_37472,(0),null);
var f_37474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36933_37472,(1),null);
var seq__36870_37475 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37473,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37473,cljs.core.identity])));
var chunk__36872_37476 = null;
var count__36873_37477 = (0);
var i__36874_37478 = (0);
while(true){
if((i__36874_37478 < count__36873_37477)){
var vec__36952_37479 = chunk__36872_37476.cljs$core$IIndexed$_nth$arity$2(null,i__36874_37478);
var actual_type_37480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952_37479,(0),null);
var __37481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36952_37479,(1),null);
var keys_37482 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37467,actual_type_37480,f_37474], null);
var canonical_f_37483 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37466),keys_37482);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37466,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37482], 0));

if(cljs.core.truth_(elem_37466.removeEventListener)){
elem_37466.removeEventListener(cljs.core.name(actual_type_37480),canonical_f_37483);
} else {
elem_37466.detachEvent(cljs.core.name(actual_type_37480),canonical_f_37483);
}


var G__37484 = seq__36870_37475;
var G__37485 = chunk__36872_37476;
var G__37486 = count__36873_37477;
var G__37487 = (i__36874_37478 + (1));
seq__36870_37475 = G__37484;
chunk__36872_37476 = G__37485;
count__36873_37477 = G__37486;
i__36874_37478 = G__37487;
continue;
} else {
var temp__5735__auto___37488 = cljs.core.seq(seq__36870_37475);
if(temp__5735__auto___37488){
var seq__36870_37489__$1 = temp__5735__auto___37488;
if(cljs.core.chunked_seq_QMARK_(seq__36870_37489__$1)){
var c__4550__auto___37490 = cljs.core.chunk_first(seq__36870_37489__$1);
var G__37491 = cljs.core.chunk_rest(seq__36870_37489__$1);
var G__37492 = c__4550__auto___37490;
var G__37493 = cljs.core.count(c__4550__auto___37490);
var G__37494 = (0);
seq__36870_37475 = G__37491;
chunk__36872_37476 = G__37492;
count__36873_37477 = G__37493;
i__36874_37478 = G__37494;
continue;
} else {
var vec__36955_37495 = cljs.core.first(seq__36870_37489__$1);
var actual_type_37496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955_37495,(0),null);
var __37497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955_37495,(1),null);
var keys_37498 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37467,actual_type_37496,f_37474], null);
var canonical_f_37499 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37466),keys_37498);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37466,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37498], 0));

if(cljs.core.truth_(elem_37466.removeEventListener)){
elem_37466.removeEventListener(cljs.core.name(actual_type_37496),canonical_f_37499);
} else {
elem_37466.detachEvent(cljs.core.name(actual_type_37496),canonical_f_37499);
}


var G__37500 = cljs.core.next(seq__36870_37489__$1);
var G__37501 = null;
var G__37502 = (0);
var G__37503 = (0);
seq__36870_37475 = G__37500;
chunk__36872_37476 = G__37501;
count__36873_37477 = G__37502;
i__36874_37478 = G__37503;
continue;
}
} else {
}
}
break;
}

var G__37504 = seq__36860_37468;
var G__37505 = chunk__36867_37469;
var G__37506 = count__36868_37470;
var G__37507 = (i__36869_37471 + (1));
seq__36860_37468 = G__37504;
chunk__36867_37469 = G__37505;
count__36868_37470 = G__37506;
i__36869_37471 = G__37507;
continue;
} else {
var temp__5735__auto___37508 = cljs.core.seq(seq__36860_37468);
if(temp__5735__auto___37508){
var seq__36860_37509__$1 = temp__5735__auto___37508;
if(cljs.core.chunked_seq_QMARK_(seq__36860_37509__$1)){
var c__4550__auto___37510 = cljs.core.chunk_first(seq__36860_37509__$1);
var G__37511 = cljs.core.chunk_rest(seq__36860_37509__$1);
var G__37512 = c__4550__auto___37510;
var G__37513 = cljs.core.count(c__4550__auto___37510);
var G__37514 = (0);
seq__36860_37468 = G__37511;
chunk__36867_37469 = G__37512;
count__36868_37470 = G__37513;
i__36869_37471 = G__37514;
continue;
} else {
var vec__36958_37515 = cljs.core.first(seq__36860_37509__$1);
var orig_type_37516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958_37515,(0),null);
var f_37517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958_37515,(1),null);
var seq__36861_37518 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_37516,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_37516,cljs.core.identity])));
var chunk__36863_37519 = null;
var count__36864_37520 = (0);
var i__36865_37521 = (0);
while(true){
if((i__36865_37521 < count__36864_37520)){
var vec__36969_37522 = chunk__36863_37519.cljs$core$IIndexed$_nth$arity$2(null,i__36865_37521);
var actual_type_37523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36969_37522,(0),null);
var __37524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36969_37522,(1),null);
var keys_37525 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37467,actual_type_37523,f_37517], null);
var canonical_f_37526 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37466),keys_37525);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37466,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37525], 0));

if(cljs.core.truth_(elem_37466.removeEventListener)){
elem_37466.removeEventListener(cljs.core.name(actual_type_37523),canonical_f_37526);
} else {
elem_37466.detachEvent(cljs.core.name(actual_type_37523),canonical_f_37526);
}


var G__37527 = seq__36861_37518;
var G__37528 = chunk__36863_37519;
var G__37529 = count__36864_37520;
var G__37530 = (i__36865_37521 + (1));
seq__36861_37518 = G__37527;
chunk__36863_37519 = G__37528;
count__36864_37520 = G__37529;
i__36865_37521 = G__37530;
continue;
} else {
var temp__5735__auto___37531__$1 = cljs.core.seq(seq__36861_37518);
if(temp__5735__auto___37531__$1){
var seq__36861_37532__$1 = temp__5735__auto___37531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36861_37532__$1)){
var c__4550__auto___37533 = cljs.core.chunk_first(seq__36861_37532__$1);
var G__37534 = cljs.core.chunk_rest(seq__36861_37532__$1);
var G__37535 = c__4550__auto___37533;
var G__37536 = cljs.core.count(c__4550__auto___37533);
var G__37537 = (0);
seq__36861_37518 = G__37534;
chunk__36863_37519 = G__37535;
count__36864_37520 = G__37536;
i__36865_37521 = G__37537;
continue;
} else {
var vec__36972_37538 = cljs.core.first(seq__36861_37532__$1);
var actual_type_37539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972_37538,(0),null);
var __37540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972_37538,(1),null);
var keys_37541 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37467,actual_type_37539,f_37517], null);
var canonical_f_37542 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_37466),keys_37541);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_37466,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_37541], 0));

if(cljs.core.truth_(elem_37466.removeEventListener)){
elem_37466.removeEventListener(cljs.core.name(actual_type_37539),canonical_f_37542);
} else {
elem_37466.detachEvent(cljs.core.name(actual_type_37539),canonical_f_37542);
}


var G__37543 = cljs.core.next(seq__36861_37532__$1);
var G__37544 = null;
var G__37545 = (0);
var G__37546 = (0);
seq__36861_37518 = G__37543;
chunk__36863_37519 = G__37544;
count__36864_37520 = G__37545;
i__36865_37521 = G__37546;
continue;
}
} else {
}
}
break;
}

var G__37547 = cljs.core.next(seq__36860_37509__$1);
var G__37548 = null;
var G__37549 = (0);
var G__37550 = (0);
seq__36860_37468 = G__37547;
chunk__36867_37469 = G__37548;
count__36868_37470 = G__37549;
i__36869_37471 = G__37550;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq36851){
var G__36852 = cljs.core.first(seq36851);
var seq36851__$1 = cljs.core.next(seq36851);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36852,seq36851__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37555 = arguments.length;
var i__4731__auto___37556 = (0);
while(true){
if((i__4731__auto___37556 < len__4730__auto___37555)){
args__4736__auto__.push((arguments[i__4731__auto___37556]));

var G__37557 = (i__4731__auto___37556 + (1));
i__4731__auto___37556 = G__37557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__36986_37558 = dommy.core.elem_and_selector(elem_sel);
var elem_37559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36986_37558,(0),null);
var selector_37560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36986_37558,(1),null);
var seq__36989_37561 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__36990_37562 = null;
var count__36991_37563 = (0);
var i__36992_37564 = (0);
while(true){
if((i__36992_37564 < count__36991_37563)){
var vec__37009_37565 = chunk__36990_37562.cljs$core$IIndexed$_nth$arity$2(null,i__36992_37564);
var type_37566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009_37565,(0),null);
var f_37567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009_37565,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37566,((function (seq__36989_37561,chunk__36990_37562,count__36991_37563,i__36992_37564,vec__37009_37565,type_37566,f_37567,vec__36986_37558,elem_37559,selector_37560){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37566,dommy$core$this_fn], 0));

return (f_37567.cljs$core$IFn$_invoke$arity$1 ? f_37567.cljs$core$IFn$_invoke$arity$1(e) : f_37567.call(null,e));
});})(seq__36989_37561,chunk__36990_37562,count__36991_37563,i__36992_37564,vec__37009_37565,type_37566,f_37567,vec__36986_37558,elem_37559,selector_37560))
], 0));


var G__37575 = seq__36989_37561;
var G__37576 = chunk__36990_37562;
var G__37577 = count__36991_37563;
var G__37578 = (i__36992_37564 + (1));
seq__36989_37561 = G__37575;
chunk__36990_37562 = G__37576;
count__36991_37563 = G__37577;
i__36992_37564 = G__37578;
continue;
} else {
var temp__5735__auto___37579 = cljs.core.seq(seq__36989_37561);
if(temp__5735__auto___37579){
var seq__36989_37580__$1 = temp__5735__auto___37579;
if(cljs.core.chunked_seq_QMARK_(seq__36989_37580__$1)){
var c__4550__auto___37581 = cljs.core.chunk_first(seq__36989_37580__$1);
var G__37582 = cljs.core.chunk_rest(seq__36989_37580__$1);
var G__37583 = c__4550__auto___37581;
var G__37584 = cljs.core.count(c__4550__auto___37581);
var G__37585 = (0);
seq__36989_37561 = G__37582;
chunk__36990_37562 = G__37583;
count__36991_37563 = G__37584;
i__36992_37564 = G__37585;
continue;
} else {
var vec__37015_37586 = cljs.core.first(seq__36989_37580__$1);
var type_37587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37015_37586,(0),null);
var f_37588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37015_37586,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37587,((function (seq__36989_37561,chunk__36990_37562,count__36991_37563,i__36992_37564,vec__37015_37586,type_37587,f_37588,seq__36989_37580__$1,temp__5735__auto___37579,vec__36986_37558,elem_37559,selector_37560){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_37587,dommy$core$this_fn], 0));

return (f_37588.cljs$core$IFn$_invoke$arity$1 ? f_37588.cljs$core$IFn$_invoke$arity$1(e) : f_37588.call(null,e));
});})(seq__36989_37561,chunk__36990_37562,count__36991_37563,i__36992_37564,vec__37015_37586,type_37587,f_37588,seq__36989_37580__$1,temp__5735__auto___37579,vec__36986_37558,elem_37559,selector_37560))
], 0));


var G__37589 = cljs.core.next(seq__36989_37580__$1);
var G__37590 = null;
var G__37591 = (0);
var G__37592 = (0);
seq__36989_37561 = G__37589;
chunk__36990_37562 = G__37590;
count__36991_37563 = G__37591;
i__36992_37564 = G__37592;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq36975){
var G__36976 = cljs.core.first(seq36975);
var seq36975__$1 = cljs.core.next(seq36975);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36976,seq36975__$1);
}));


//# sourceMappingURL=dommy.core.js.map
