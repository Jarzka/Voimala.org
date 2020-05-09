goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35061 = arguments.length;
var i__4731__auto___35062 = (0);
while(true){
if((i__4731__auto___35062 < len__4730__auto___35061)){
args__4736__auto__.push((arguments[i__4731__auto___35062]));

var G__35063 = (i__4731__auto___35062 + (1));
i__4731__auto___35062 = G__35063;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34872){
var G__34873 = cljs.core.first(seq34872);
var seq34872__$1 = cljs.core.next(seq34872);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34873,seq34872__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34882 = cljs.core.seq(sources);
var chunk__34883 = null;
var count__34884 = (0);
var i__34885 = (0);
while(true){
if((i__34885 < count__34884)){
var map__34892 = chunk__34883.cljs$core$IIndexed$_nth$arity$2(null,i__34885);
var map__34892__$1 = (((((!((map__34892 == null))))?(((((map__34892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34892):map__34892);
var src = map__34892__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34894){var e_35137 = e34894;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35137);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35137.message)].join('')));
}

var G__35138 = seq__34882;
var G__35139 = chunk__34883;
var G__35140 = count__34884;
var G__35141 = (i__34885 + (1));
seq__34882 = G__35138;
chunk__34883 = G__35139;
count__34884 = G__35140;
i__34885 = G__35141;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34882);
if(temp__5735__auto__){
var seq__34882__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34882__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34882__$1);
var G__35142 = cljs.core.chunk_rest(seq__34882__$1);
var G__35143 = c__4550__auto__;
var G__35144 = cljs.core.count(c__4550__auto__);
var G__35145 = (0);
seq__34882 = G__35142;
chunk__34883 = G__35143;
count__34884 = G__35144;
i__34885 = G__35145;
continue;
} else {
var map__34895 = cljs.core.first(seq__34882__$1);
var map__34895__$1 = (((((!((map__34895 == null))))?(((((map__34895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34895):map__34895);
var src = map__34895__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34897){var e_35149 = e34897;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35149);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35149.message)].join('')));
}

var G__35151 = cljs.core.next(seq__34882__$1);
var G__35152 = null;
var G__35153 = (0);
var G__35154 = (0);
seq__34882 = G__35151;
chunk__34883 = G__35152;
count__34884 = G__35153;
i__34885 = G__35154;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34900 = cljs.core.seq(js_requires);
var chunk__34901 = null;
var count__34902 = (0);
var i__34903 = (0);
while(true){
if((i__34903 < count__34902)){
var js_ns = chunk__34901.cljs$core$IIndexed$_nth$arity$2(null,i__34903);
var require_str_35158 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35158);


var G__35159 = seq__34900;
var G__35160 = chunk__34901;
var G__35161 = count__34902;
var G__35162 = (i__34903 + (1));
seq__34900 = G__35159;
chunk__34901 = G__35160;
count__34902 = G__35161;
i__34903 = G__35162;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34900);
if(temp__5735__auto__){
var seq__34900__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34900__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34900__$1);
var G__35163 = cljs.core.chunk_rest(seq__34900__$1);
var G__35164 = c__4550__auto__;
var G__35165 = cljs.core.count(c__4550__auto__);
var G__35166 = (0);
seq__34900 = G__35163;
chunk__34901 = G__35164;
count__34902 = G__35165;
i__34903 = G__35166;
continue;
} else {
var js_ns = cljs.core.first(seq__34900__$1);
var require_str_35167 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35167);


var G__35170 = cljs.core.next(seq__34900__$1);
var G__35171 = null;
var G__35172 = (0);
var G__35173 = (0);
seq__34900 = G__35170;
chunk__34901 = G__35171;
count__34902 = G__35172;
i__34903 = G__35173;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34904 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34904) : callback.call(null,G__34904));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34909){
var map__34910 = p__34909;
var map__34910__$1 = (((((!((map__34910 == null))))?(((((map__34910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34910):map__34910);
var msg = map__34910__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34910__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34910__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34912(s__34913){
return (new cljs.core.LazySeq(null,(function (){
var s__34913__$1 = s__34913;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34913__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34919 = cljs.core.first(xs__6292__auto__);
var map__34919__$1 = (((((!((map__34919 == null))))?(((((map__34919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34919):map__34919);
var src = map__34919__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34919__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__34913__$1,map__34919,map__34919__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34910,map__34910__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34912_$_iter__34914(s__34915){
return (new cljs.core.LazySeq(null,((function (s__34913__$1,map__34919,map__34919__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34910,map__34910__$1,msg,info,reload_info){
return (function (){
var s__34915__$1 = s__34915;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34915__$1);
if(temp__5735__auto____$1){
var s__34915__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34915__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34915__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34917 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34916 = (0);
while(true){
if((i__34916 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__34916);
cljs.core.chunk_append(b__34917,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35191 = (i__34916 + (1));
i__34916 = G__35191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34917),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34912_$_iter__34914(cljs.core.chunk_rest(s__34915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34917),null);
}
} else {
var warning = cljs.core.first(s__34915__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34912_$_iter__34914(cljs.core.rest(s__34915__$2)));
}
} else {
return null;
}
break;
}
});})(s__34913__$1,map__34919,map__34919__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34910,map__34910__$1,msg,info,reload_info))
,null,null));
});})(s__34913__$1,map__34919,map__34919__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34910,map__34910__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34912(cljs.core.rest(s__34913__$1)));
} else {
var G__35193 = cljs.core.rest(s__34913__$1);
s__34913__$1 = G__35193;
continue;
}
} else {
var G__35194 = cljs.core.rest(s__34913__$1);
s__34913__$1 = G__35194;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__34923_35195 = cljs.core.seq(warnings);
var chunk__34924_35196 = null;
var count__34925_35197 = (0);
var i__34926_35198 = (0);
while(true){
if((i__34926_35198 < count__34925_35197)){
var map__34932_35199 = chunk__34924_35196.cljs$core$IIndexed$_nth$arity$2(null,i__34926_35198);
var map__34932_35200__$1 = (((((!((map__34932_35199 == null))))?(((((map__34932_35199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34932_35199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34932_35199):map__34932_35199);
var w_35201 = map__34932_35200__$1;
var msg_35202__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34932_35200__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34932_35200__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34932_35200__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34932_35200__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35205)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35203),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35204),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35202__$1)].join(''));


var G__35208 = seq__34923_35195;
var G__35209 = chunk__34924_35196;
var G__35210 = count__34925_35197;
var G__35211 = (i__34926_35198 + (1));
seq__34923_35195 = G__35208;
chunk__34924_35196 = G__35209;
count__34925_35197 = G__35210;
i__34926_35198 = G__35211;
continue;
} else {
var temp__5735__auto___35212 = cljs.core.seq(seq__34923_35195);
if(temp__5735__auto___35212){
var seq__34923_35213__$1 = temp__5735__auto___35212;
if(cljs.core.chunked_seq_QMARK_(seq__34923_35213__$1)){
var c__4550__auto___35214 = cljs.core.chunk_first(seq__34923_35213__$1);
var G__35215 = cljs.core.chunk_rest(seq__34923_35213__$1);
var G__35216 = c__4550__auto___35214;
var G__35217 = cljs.core.count(c__4550__auto___35214);
var G__35218 = (0);
seq__34923_35195 = G__35215;
chunk__34924_35196 = G__35216;
count__34925_35197 = G__35217;
i__34926_35198 = G__35218;
continue;
} else {
var map__34934_35219 = cljs.core.first(seq__34923_35213__$1);
var map__34934_35220__$1 = (((((!((map__34934_35219 == null))))?(((((map__34934_35219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34934_35219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34934_35219):map__34934_35219);
var w_35221 = map__34934_35220__$1;
var msg_35222__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934_35220__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934_35220__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934_35220__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934_35220__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35225)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35223),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35224),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35222__$1)].join(''));


var G__35226 = cljs.core.next(seq__34923_35213__$1);
var G__35227 = null;
var G__35228 = (0);
var G__35229 = (0);
seq__34923_35195 = G__35226;
chunk__34924_35196 = G__35227;
count__34925_35197 = G__35228;
i__34926_35198 = G__35229;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34908_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34908_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34936){
var map__34937 = p__34936;
var map__34937__$1 = (((((!((map__34937 == null))))?(((((map__34937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34937):map__34937);
var msg = map__34937__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34937__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34941 = cljs.core.seq(updates);
var chunk__34943 = null;
var count__34944 = (0);
var i__34945 = (0);
while(true){
if((i__34945 < count__34944)){
var path = chunk__34943.cljs$core$IIndexed$_nth$arity$2(null,i__34945);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34971_35234 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34974_35235 = null;
var count__34975_35236 = (0);
var i__34976_35237 = (0);
while(true){
if((i__34976_35237 < count__34975_35236)){
var node_35238 = chunk__34974_35235.cljs$core$IIndexed$_nth$arity$2(null,i__34976_35237);
var path_match_35239 = shadow.cljs.devtools.client.browser.match_paths(node_35238.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35239)){
var new_link_35240 = (function (){var G__34981 = node_35238.cloneNode(true);
G__34981.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35239),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34981;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35239], 0));

goog.dom.insertSiblingAfter(new_link_35240,node_35238);

goog.dom.removeNode(node_35238);


var G__35241 = seq__34971_35234;
var G__35242 = chunk__34974_35235;
var G__35243 = count__34975_35236;
var G__35244 = (i__34976_35237 + (1));
seq__34971_35234 = G__35241;
chunk__34974_35235 = G__35242;
count__34975_35236 = G__35243;
i__34976_35237 = G__35244;
continue;
} else {
var G__35245 = seq__34971_35234;
var G__35246 = chunk__34974_35235;
var G__35247 = count__34975_35236;
var G__35248 = (i__34976_35237 + (1));
seq__34971_35234 = G__35245;
chunk__34974_35235 = G__35246;
count__34975_35236 = G__35247;
i__34976_35237 = G__35248;
continue;
}
} else {
var temp__5735__auto___35249 = cljs.core.seq(seq__34971_35234);
if(temp__5735__auto___35249){
var seq__34971_35250__$1 = temp__5735__auto___35249;
if(cljs.core.chunked_seq_QMARK_(seq__34971_35250__$1)){
var c__4550__auto___35251 = cljs.core.chunk_first(seq__34971_35250__$1);
var G__35252 = cljs.core.chunk_rest(seq__34971_35250__$1);
var G__35253 = c__4550__auto___35251;
var G__35254 = cljs.core.count(c__4550__auto___35251);
var G__35255 = (0);
seq__34971_35234 = G__35252;
chunk__34974_35235 = G__35253;
count__34975_35236 = G__35254;
i__34976_35237 = G__35255;
continue;
} else {
var node_35256 = cljs.core.first(seq__34971_35250__$1);
var path_match_35257 = shadow.cljs.devtools.client.browser.match_paths(node_35256.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35257)){
var new_link_35258 = (function (){var G__34982 = node_35256.cloneNode(true);
G__34982.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35257),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34982;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35257], 0));

goog.dom.insertSiblingAfter(new_link_35258,node_35256);

goog.dom.removeNode(node_35256);


var G__35264 = cljs.core.next(seq__34971_35250__$1);
var G__35265 = null;
var G__35266 = (0);
var G__35267 = (0);
seq__34971_35234 = G__35264;
chunk__34974_35235 = G__35265;
count__34975_35236 = G__35266;
i__34976_35237 = G__35267;
continue;
} else {
var G__35268 = cljs.core.next(seq__34971_35250__$1);
var G__35269 = null;
var G__35270 = (0);
var G__35271 = (0);
seq__34971_35234 = G__35268;
chunk__34974_35235 = G__35269;
count__34975_35236 = G__35270;
i__34976_35237 = G__35271;
continue;
}
}
} else {
}
}
break;
}


var G__35272 = seq__34941;
var G__35273 = chunk__34943;
var G__35274 = count__34944;
var G__35275 = (i__34945 + (1));
seq__34941 = G__35272;
chunk__34943 = G__35273;
count__34944 = G__35274;
i__34945 = G__35275;
continue;
} else {
var G__35276 = seq__34941;
var G__35277 = chunk__34943;
var G__35278 = count__34944;
var G__35279 = (i__34945 + (1));
seq__34941 = G__35276;
chunk__34943 = G__35277;
count__34944 = G__35278;
i__34945 = G__35279;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34941);
if(temp__5735__auto__){
var seq__34941__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34941__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34941__$1);
var G__35284 = cljs.core.chunk_rest(seq__34941__$1);
var G__35285 = c__4550__auto__;
var G__35286 = cljs.core.count(c__4550__auto__);
var G__35287 = (0);
seq__34941 = G__35284;
chunk__34943 = G__35285;
count__34944 = G__35286;
i__34945 = G__35287;
continue;
} else {
var path = cljs.core.first(seq__34941__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34983_35288 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34986_35289 = null;
var count__34987_35290 = (0);
var i__34988_35291 = (0);
while(true){
if((i__34988_35291 < count__34987_35290)){
var node_35294 = chunk__34986_35289.cljs$core$IIndexed$_nth$arity$2(null,i__34988_35291);
var path_match_35296 = shadow.cljs.devtools.client.browser.match_paths(node_35294.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35296)){
var new_link_35299 = (function (){var G__34994 = node_35294.cloneNode(true);
G__34994.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35296),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34994;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35296], 0));

goog.dom.insertSiblingAfter(new_link_35299,node_35294);

goog.dom.removeNode(node_35294);


var G__35302 = seq__34983_35288;
var G__35303 = chunk__34986_35289;
var G__35304 = count__34987_35290;
var G__35305 = (i__34988_35291 + (1));
seq__34983_35288 = G__35302;
chunk__34986_35289 = G__35303;
count__34987_35290 = G__35304;
i__34988_35291 = G__35305;
continue;
} else {
var G__35306 = seq__34983_35288;
var G__35307 = chunk__34986_35289;
var G__35308 = count__34987_35290;
var G__35309 = (i__34988_35291 + (1));
seq__34983_35288 = G__35306;
chunk__34986_35289 = G__35307;
count__34987_35290 = G__35308;
i__34988_35291 = G__35309;
continue;
}
} else {
var temp__5735__auto___35313__$1 = cljs.core.seq(seq__34983_35288);
if(temp__5735__auto___35313__$1){
var seq__34983_35314__$1 = temp__5735__auto___35313__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34983_35314__$1)){
var c__4550__auto___35317 = cljs.core.chunk_first(seq__34983_35314__$1);
var G__35318 = cljs.core.chunk_rest(seq__34983_35314__$1);
var G__35319 = c__4550__auto___35317;
var G__35320 = cljs.core.count(c__4550__auto___35317);
var G__35321 = (0);
seq__34983_35288 = G__35318;
chunk__34986_35289 = G__35319;
count__34987_35290 = G__35320;
i__34988_35291 = G__35321;
continue;
} else {
var node_35323 = cljs.core.first(seq__34983_35314__$1);
var path_match_35324 = shadow.cljs.devtools.client.browser.match_paths(node_35323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35324)){
var new_link_35325 = (function (){var G__34997 = node_35323.cloneNode(true);
G__34997.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35324),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34997;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35324], 0));

goog.dom.insertSiblingAfter(new_link_35325,node_35323);

goog.dom.removeNode(node_35323);


var G__35326 = cljs.core.next(seq__34983_35314__$1);
var G__35327 = null;
var G__35328 = (0);
var G__35329 = (0);
seq__34983_35288 = G__35326;
chunk__34986_35289 = G__35327;
count__34987_35290 = G__35328;
i__34988_35291 = G__35329;
continue;
} else {
var G__35330 = cljs.core.next(seq__34983_35314__$1);
var G__35331 = null;
var G__35332 = (0);
var G__35333 = (0);
seq__34983_35288 = G__35330;
chunk__34986_35289 = G__35331;
count__34987_35290 = G__35332;
i__34988_35291 = G__35333;
continue;
}
}
} else {
}
}
break;
}


var G__35334 = cljs.core.next(seq__34941__$1);
var G__35335 = null;
var G__35336 = (0);
var G__35337 = (0);
seq__34941 = G__35334;
chunk__34943 = G__35335;
count__34944 = G__35336;
i__34945 = G__35337;
continue;
} else {
var G__35338 = cljs.core.next(seq__34941__$1);
var G__35339 = null;
var G__35340 = (0);
var G__35341 = (0);
seq__34941 = G__35338;
chunk__34943 = G__35339;
count__34944 = G__35340;
i__34945 = G__35341;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35008){
var map__35009 = p__35008;
var map__35009__$1 = (((((!((map__35009 == null))))?(((((map__35009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35009):map__35009);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35009__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35009__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35015,done){
var map__35016 = p__35015;
var map__35016__$1 = (((((!((map__35016 == null))))?(((((map__35016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35016):map__35016);
var msg = map__35016__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35016__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35016__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35016__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35018){
var map__35019 = p__35018;
var map__35019__$1 = (((((!((map__35019 == null))))?(((((map__35019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35019):map__35019);
var src = map__35019__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35019__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35021){var e = e35021;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35022,done){
var map__35023 = p__35022;
var map__35023__$1 = (((((!((map__35023 == null))))?(((((map__35023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35023):map__35023);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35023__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35025){
var map__35026 = p__35025;
var map__35026__$1 = (((((!((map__35026 == null))))?(((((map__35026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35026):map__35026);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35026__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35026__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35028,done){
var map__35029 = p__35028;
var map__35029__$1 = (((((!((map__35029 == null))))?(((((map__35029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35029):map__35029);
var msg = map__35029__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35029__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35031_35365 = type;
var G__35031_35366__$1 = (((G__35031_35365 instanceof cljs.core.Keyword))?G__35031_35365.fqn:null);
switch (G__35031_35366__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__35046 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35046.cljs$core$IFn$_invoke$arity$1 ? fexpr__35046.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__35046.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4120__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35053){var e = e35053;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35393 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35393)){
var s_35394 = temp__5735__auto___35393;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35394.onclose = (function (e){
return null;
}));

s_35394.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4109__auto__ = goog.global.document;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4109__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
