goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('stylefy.impl.dom');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('stylefy.impl.hashing');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('clojure.set');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null)], 0));
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__38268){
var map__38269 = p__38268;
var map__38269__$1 = (((((!((map__38269 == null))))?(((((map__38269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38269):map__38269);
var style = map__38269__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38269__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38269__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
stylefy.impl.dom.save_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null));

var seq__38271 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__38272 = null;
var count__38273 = (0);
var i__38274 = (0);
while(true){
if((i__38274 < count__38273)){
var sub_style = chunk__38272.cljs$core$IIndexed$_nth$arity$2(null,i__38274);
var G__38277_38318 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1(G__38277_38318) : stylefy.impl.styles.create_style_BANG_.call(null,G__38277_38318));


var G__38319 = seq__38271;
var G__38320 = chunk__38272;
var G__38321 = count__38273;
var G__38322 = (i__38274 + (1));
seq__38271 = G__38319;
chunk__38272 = G__38320;
count__38273 = G__38321;
i__38274 = G__38322;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38271);
if(temp__5735__auto__){
var seq__38271__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38271__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38271__$1);
var G__38323 = cljs.core.chunk_rest(seq__38271__$1);
var G__38324 = c__4550__auto__;
var G__38325 = cljs.core.count(c__4550__auto__);
var G__38326 = (0);
seq__38271 = G__38323;
chunk__38272 = G__38324;
count__38273 = G__38325;
i__38274 = G__38326;
continue;
} else {
var sub_style = cljs.core.first(seq__38271__$1);
var G__38278_38327 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1(G__38278_38327) : stylefy.impl.styles.create_style_BANG_.call(null,G__38278_38327));


var G__38328 = cljs.core.next(seq__38271__$1);
var G__38329 = null;
var G__38330 = (0);
var G__38331 = (0);
seq__38271 = G__38328;
chunk__38272 = G__38329;
count__38273 = G__38330;
i__38274 = G__38331;
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
 * Given a style, hash and options, returns HTML attributes for a Hiccup component,
 * or nil if there are not any attributes.
 */
stylefy.impl.styles.prepare_style_return_value = (function stylefy$impl$styles$prepare_style_return_value(style,style_hash,options){
var with_classes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options));
var html_attributes = stylefy.impl.utils.filter_css_props(options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
var final_class = clojure.string.trim((((html_attributes_class == null))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((typeof html_attributes_class === 'string')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_attributes_class], null),with_classes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null)], 0))):((cljs.core.vector_QMARK_(html_attributes_class))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(html_attributes_class,with_classes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null)], 0))):null))));
var final_html_attributes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes,(((!(cljs.core.empty_QMARK_(final_class))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),final_class], null):null)], 0));
if((((html_attributes_class == null)) || (typeof html_attributes_class === 'string') || (cljs.core.vector_QMARK_(html_attributes_class)))){
} else {
throw (new Error(["Assert failed: ",["Unsupported :class type (should be nil, string or vector). Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes_class], 0))].join(''),"\n","(or (nil? html-attributes-class) (string? html-attributes-class) (vector? html-attributes-class))"].join('')));
}

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

if((!(cljs.core.empty_QMARK_(final_html_attributes)))){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value(style,style_hash,options);
if(((cljs.core.empty_QMARK_(style)) || (stylefy.impl.dom.style_in_dom_QMARK_(style_hash)))){
return return_map;
} else {
var contains_media_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_feature_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_manual_mode_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(style) == null)));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style);
var mode_names = ((cljs.core.map_QMARK_(modes))?cljs.core.set(cljs.core.keys(modes)):((cljs.core.vector_QMARK_(modes))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,modes)):cljs.core.PersistentHashSet.EMPTY
));
var contains_modes_not_excluded_QMARK_ = (!(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,excluded_modes),mode_names))));
var inline_style = stylefy.impl.conversion.garden_units__GT_css(stylefy.impl.utils.filter_css_props(style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_manual_mode_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], 0))], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null)], 0));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options){
var with_classes_options = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options);
var with_classes_style = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
if((((with_classes_options == null)) || (((cljs.core.vector_QMARK_(with_classes_options)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,with_classes_options)))))){
} else {
throw (new Error(["Assert failed: ",["with-classes argument inside options map must be a vector of strings, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([with_classes_options], 0))].join(''),"\n","(or (nil? with-classes-options) (and (vector? with-classes-options) (every? string? with-classes-options)))"].join('')));
}

if((((with_classes_style == null)) || (((cljs.core.vector_QMARK_(with_classes_style)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,with_classes_style)))))){
} else {
throw (new Error(["Assert failed: ",["with-classes argument inside style map must be a vector of strings, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([with_classes_style], 0))].join(''),"\n","(or (nil? with-classes-style) (and (vector? with-classes-style) (every? string? with-classes-style)))"].join('')));
}

stylefy.impl.dom.check_stylefy_initialisation();

var style_with_global_vendors = ((cljs.core.empty_QMARK_(style))?null:stylefy.impl.styles.add_global_vendors(style));
var style_hash = stylefy.impl.hashing.hash_style(style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash(style_hash);
if((((!(cljs.core.empty_QMARK_(style_with_global_vendors)))) && ((!((style_hash == null)))) && (cljs.core.not(already_created)))){
stylefy.impl.styles.create_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style_with_global_vendors,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null));
} else {
}

return stylefy.impl.styles.style_return_value(style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options){
var resolved_sub_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_(resolved_sub_style,options);
} else {
return console.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_style], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38332 = arguments.length;
var i__4731__auto___38335 = (0);
while(true){
if((i__4731__auto___38335 < len__4730__auto___38332)){
args__4736__auto__.push((arguments[i__4731__auto___38335]));

var G__38336 = (i__4731__auto___38335 + (1));
i__4731__auto___38335 = G__38336;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38290_SHARP_,p2__38291_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38290_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__38291_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
}));

(stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq38292){
var G__38293 = cljs.core.first(seq38292);
var seq38292__$1 = cljs.core.next(seq38292);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38293,seq38292__$1);
}));

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(var_args){
var G__38295 = arguments.length;
switch (G__38295) {
case 1:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),true], null));
}));

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,p__38296){
var map__38297 = p__38296;
var map__38297__$1 = (((((!((map__38297 == null))))?(((((map__38297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38297):map__38297);
var options = map__38297__$1;
var request_dom_update_after_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510));
var styles_38340__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles);
var seq__38299_38341 = cljs.core.seq(styles_38340__$1);
var chunk__38300_38342 = null;
var count__38301_38343 = (0);
var i__38302_38344 = (0);
while(true){
if((i__38302_38344 < count__38301_38343)){
var style_38345 = chunk__38300_38342.cljs$core$IIndexed$_nth$arity$2(null,i__38302_38344);
stylefy.impl.styles.use_style_BANG_(style_38345,cljs.core.PersistentArrayMap.EMPTY);

var temp__5735__auto___38346 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_38345));
if(cljs.core.truth_(temp__5735__auto___38346)){
var sub_styles_38347 = temp__5735__auto___38346;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_38347,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__38348 = seq__38299_38341;
var G__38349 = chunk__38300_38342;
var G__38350 = count__38301_38343;
var G__38351 = (i__38302_38344 + (1));
seq__38299_38341 = G__38348;
chunk__38300_38342 = G__38349;
count__38301_38343 = G__38350;
i__38302_38344 = G__38351;
continue;
} else {
var temp__5735__auto___38352 = cljs.core.seq(seq__38299_38341);
if(temp__5735__auto___38352){
var seq__38299_38353__$1 = temp__5735__auto___38352;
if(cljs.core.chunked_seq_QMARK_(seq__38299_38353__$1)){
var c__4550__auto___38354 = cljs.core.chunk_first(seq__38299_38353__$1);
var G__38355 = cljs.core.chunk_rest(seq__38299_38353__$1);
var G__38356 = c__4550__auto___38354;
var G__38357 = cljs.core.count(c__4550__auto___38354);
var G__38358 = (0);
seq__38299_38341 = G__38355;
chunk__38300_38342 = G__38356;
count__38301_38343 = G__38357;
i__38302_38344 = G__38358;
continue;
} else {
var style_38359 = cljs.core.first(seq__38299_38353__$1);
stylefy.impl.styles.use_style_BANG_(style_38359,cljs.core.PersistentArrayMap.EMPTY);

var temp__5735__auto___38360__$1 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_38359));
if(cljs.core.truth_(temp__5735__auto___38360__$1)){
var sub_styles_38361 = temp__5735__auto___38360__$1;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_38361,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__38362 = cljs.core.next(seq__38299_38353__$1);
var G__38363 = null;
var G__38364 = (0);
var G__38365 = (0);
seq__38299_38341 = G__38362;
chunk__38300_38342 = G__38363;
count__38301_38343 = G__38364;
i__38302_38344 = G__38365;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(request_dom_update_after_done_QMARK_)){
return stylefy.impl.dom.update_dom_if_requested();
} else {
return null;
}
}));

(stylefy.impl.styles.prepare_styles.cljs$lang$maxFixedArity = 2);

stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_(stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});

//# sourceMappingURL=stylefy.impl.styles.js.map
