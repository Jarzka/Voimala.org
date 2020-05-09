goog.provide('pikseli.api.post_api');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('pikseli.services.ajax');
goog.require('clojure.string');
pikseli.api.post_api.api_uri = "/api/";
pikseli.api.post_api.get_post = (function pikseli$api$post_api$get_post(file_name,ok,error){
return pikseli.services.ajax.GET_BANG_([pikseli.api.post_api.api_uri,"post/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (p1__27954_SHARP_){
return (ok.cljs$core$IFn$_invoke$arity$2 ? ok.cljs$core$IFn$_invoke$arity$2(file_name,p1__27954_SHARP_) : ok.call(null,file_name,p1__27954_SHARP_));
}),new cljs.core.Keyword(null,"error","error",-978969032),error], null));
});
pikseli.api.post_api.get_posts = (function pikseli$api$post_api$get_posts(file_names,ok,error){
var seq__27955 = cljs.core.seq(file_names);
var chunk__27956 = null;
var count__27957 = (0);
var i__27958 = (0);
while(true){
if((i__27958 < count__27957)){
var file_name = chunk__27956.cljs$core$IIndexed$_nth$arity$2(null,i__27958);
pikseli.api.post_api.get_post(file_name,ok,error);


var G__27966 = seq__27955;
var G__27967 = chunk__27956;
var G__27968 = count__27957;
var G__27969 = (i__27958 + (1));
seq__27955 = G__27966;
chunk__27956 = G__27967;
count__27957 = G__27968;
i__27958 = G__27969;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27955);
if(temp__5735__auto__){
var seq__27955__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27955__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27955__$1);
var G__27970 = cljs.core.chunk_rest(seq__27955__$1);
var G__27971 = c__4550__auto__;
var G__27972 = cljs.core.count(c__4550__auto__);
var G__27973 = (0);
seq__27955 = G__27970;
chunk__27956 = G__27971;
count__27957 = G__27972;
i__27958 = G__27973;
continue;
} else {
var file_name = cljs.core.first(seq__27955__$1);
pikseli.api.post_api.get_post(file_name,ok,error);


var G__27974 = cljs.core.next(seq__27955__$1);
var G__27975 = null;
var G__27976 = (0);
var G__27977 = (0);
seq__27955 = G__27974;
chunk__27956 = G__27975;
count__27957 = G__27976;
i__27958 = G__27977;
continue;
}
} else {
return null;
}
}
break;
}
});
pikseli.api.post_api.get_post_ids = (function pikseli$api$post_api$get_post_ids(ok,error){
return pikseli.services.ajax.GET_BANG_([pikseli.api.post_api.api_uri,"post-ids/1"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),ok,new cljs.core.Keyword(null,"error","error",-978969032),error], null));
});

//# sourceMappingURL=pikseli.api.post_api.js.map
