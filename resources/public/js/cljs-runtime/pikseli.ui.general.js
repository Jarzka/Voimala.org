goog.provide('pikseli.ui.general');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('pikseli.styles.global');
pikseli.ui.general.with_unique_keys = (function pikseli$ui$general$with_unique_keys(content){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,element){
return element;
}),content);
});
pikseli.ui.general.social_media_link = (function pikseli$ui$general$social_media_link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27871 = arguments.length;
var i__4731__auto___27872 = (0);
while(true){
if((i__4731__auto___27872 < len__4730__auto___27871)){
args__4736__auto__.push((arguments[i__4731__auto___27872]));

var G__27873 = (i__4731__auto___27872 + (1));
i__4731__auto___27872 = G__27873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pikseli.ui.general.social_media_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(pikseli.ui.general.social_media_link.cljs$core$IFn$_invoke$arity$variadic = (function (p__27855,content){
var map__27856 = p__27855;
var map__27856__$1 = (((((!((map__27856 == null))))?(((((map__27856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27856):map__27856);
var options = map__27856__$1;
var some_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword(null,"some-type","some-type",-473486896));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pikseli.styles.global.a_some,pikseli.styles.global.a_some_before(some_type)], 0)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"some-type","some-type",-473486896))),content], null);
}));

(pikseli.ui.general.social_media_link.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pikseli.ui.general.social_media_link.cljs$lang$applyTo = (function (seq27853){
var G__27854 = cljs.core.first(seq27853);
var seq27853__$1 = cljs.core.next(seq27853);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27854,seq27853__$1);
}));

pikseli.ui.general.button_link = (function pikseli$ui$general$button_link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27874 = arguments.length;
var i__4731__auto___27875 = (0);
while(true){
if((i__4731__auto___27875 < len__4730__auto___27874)){
args__4736__auto__.push((arguments[i__4731__auto___27875]));

var G__27876 = (i__4731__auto___27875 + (1));
i__4731__auto___27875 = G__27876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pikseli.ui.general.button_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(pikseli.ui.general.button_link.cljs$core$IFn$_invoke$arity$variadic = (function (p__27860,content){
var map__27861 = p__27860;
var map__27861__$1 = (((((!((map__27861 == null))))?(((((map__27861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27861):map__27861);
var options = map__27861__$1;
var button_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27861__$1,new cljs.core.Keyword(null,"button-icon","button-icon",496278820));
var extra_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27861__$1,new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pikseli.styles.global.a_button,extra_styles], 0)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"button-icon","button-icon",496278820),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933)], 0))),content], null);
}));

(pikseli.ui.general.button_link.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pikseli.ui.general.button_link.cljs$lang$applyTo = (function (seq27858){
var G__27859 = cljs.core.first(seq27858);
var seq27858__$1 = cljs.core.next(seq27858);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27859,seq27858__$1);
}));

pikseli.ui.general.button = (function pikseli$ui$general$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27877 = arguments.length;
var i__4731__auto___27878 = (0);
while(true){
if((i__4731__auto___27878 < len__4730__auto___27877)){
args__4736__auto__.push((arguments[i__4731__auto___27878]));

var G__27879 = (i__4731__auto___27878 + (1));
i__4731__auto___27878 = G__27879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pikseli.ui.general.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(pikseli.ui.general.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__27865,content){
var map__27866 = p__27865;
var map__27866__$1 = (((((!((map__27866 == null))))?(((((map__27866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27866):map__27866);
var options = map__27866__$1;
var button_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27866__$1,new cljs.core.Keyword(null,"button-icon","button-icon",496278820));
var extra_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27866__$1,new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pikseli.styles.global.a_button,extra_styles], 0)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"button-icon","button-icon",496278820),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933)], 0))),content], null);
}));

(pikseli.ui.general.button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pikseli.ui.general.button.cljs$lang$applyTo = (function (seq27863){
var G__27864 = cljs.core.first(seq27863);
var seq27863__$1 = cljs.core.next(seq27863);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27864,seq27863__$1);
}));

pikseli.ui.general.blockquote = (function pikseli$ui$general$blockquote(text,person){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\""].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(person)].join('')], null)], null);
});
pikseli.ui.general.loader_dark = (function pikseli$ui$general$loader_dark(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.5rem"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/loading_dark.gif"], null))], null);
});
pikseli.ui.general.loader_light = (function pikseli$ui$general$loader_light(p__27868){
var map__27869 = p__27868;
var map__27869__$1 = (((((!((map__27869 == null))))?(((((map__27869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27869):map__27869);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27869__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"32px",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1rem",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/loading_light.gif"], null))], null),(cljs.core.truth_(text)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pikseli.styles.global.text_center,pikseli.styles.global.text_smaller], 0))),text], null):null)], null);
});

//# sourceMappingURL=pikseli.ui.general.js.map
