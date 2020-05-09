goog.provide('pikseli.services.dom');
goog.require('cljs.core');
pikseli.services.dom.add_meta_tag = (function pikseli$services$dom$add_meta_tag(tag_name,contents){
var meta = document.createElement("meta");
(meta.name = tag_name);

(meta.content = contents);

return (document.getElementsByTagName("head")[(0)]).appendChild(meta);
});
pikseli.services.dom.add_meta_og_tag = (function pikseli$services$dom$add_meta_og_tag(tag_name,contents){
var meta = document.createElement("meta");
meta.setAttribute("property",tag_name);

(meta.content = contents);

return (document.getElementsByTagName("head")[(0)]).appendChild(meta);
});
pikseli.services.dom.clear_meta_tags = (function pikseli$services$dom$clear_meta_tags(){
var meta_tags = document.querySelectorAll("meta[name='author'],\n           meta[name='keywords'],\n           meta[property='og:url'],\n           meta[property='og:type'],\n           meta[property='og:title'],\n           meta[property='og:description'],\n           meta[property='og:image']");
var seq__27850 = cljs.core.seq(meta_tags);
var chunk__27851 = null;
var count__27852 = (0);
var i__27853 = (0);
while(true){
if((i__27853 < count__27852)){
var element = chunk__27851.cljs$core$IIndexed$_nth$arity$2(null,i__27853);
element.remove();


var G__27858 = seq__27850;
var G__27859 = chunk__27851;
var G__27860 = count__27852;
var G__27861 = (i__27853 + (1));
seq__27850 = G__27858;
chunk__27851 = G__27859;
count__27852 = G__27860;
i__27853 = G__27861;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27850);
if(temp__5735__auto__){
var seq__27850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27850__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27850__$1);
var G__27862 = cljs.core.chunk_rest(seq__27850__$1);
var G__27863 = c__4550__auto__;
var G__27864 = cljs.core.count(c__4550__auto__);
var G__27865 = (0);
seq__27850 = G__27862;
chunk__27851 = G__27863;
count__27852 = G__27864;
i__27853 = G__27865;
continue;
} else {
var element = cljs.core.first(seq__27850__$1);
element.remove();


var G__27866 = cljs.core.next(seq__27850__$1);
var G__27867 = null;
var G__27868 = (0);
var G__27869 = (0);
seq__27850 = G__27866;
chunk__27851 = G__27867;
count__27852 = G__27868;
i__27853 = G__27869;
continue;
}
} else {
return null;
}
}
break;
}
});
pikseli.services.dom.set_meta_tags = (function pikseli$services$dom$set_meta_tags(p__27855){
var map__27856 = p__27855;
var map__27856__$1 = (((((!((map__27856 == null))))?(((((map__27856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27856):map__27856);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var keywords = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword(null,"keywords","keywords",1526959054));
pikseli.services.dom.clear_meta_tags();

if(cljs.core.truth_(author)){
pikseli.services.dom.add_meta_tag("author",author);
} else {
}

if(cljs.core.truth_(cljs.core.keyword)){
pikseli.services.dom.add_meta_tag("keywords",keywords);
} else {
}

if(cljs.core.truth_(uri)){
pikseli.services.dom.add_meta_og_tag("og:url",uri);
} else {
}

if(cljs.core.truth_(type)){
pikseli.services.dom.add_meta_og_tag("og:type",type);
} else {
}

if(cljs.core.truth_(title)){
pikseli.services.dom.add_meta_og_tag("og:title",title);
} else {
}

if(cljs.core.truth_(description)){
pikseli.services.dom.add_meta_og_tag("og:description",description);
} else {
}

if(cljs.core.truth_(image)){
return pikseli.services.dom.add_meta_og_tag("og:image",image);
} else {
return null;
}
});
pikseli.services.dom.set_title = (function pikseli$services$dom$set_title(text){
return (document.title = text);
});

//# sourceMappingURL=pikseli.services.dom.js.map
