goog.provide('pikseli.components.app_link');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('pikseli.page_settings');
goog.require('pikseli.services.router');
pikseli.components.app_link.app_link = (function pikseli$components$app_link$app_link(p__27850,text){
var map__27851 = p__27850;
var map__27851__$1 = (((((!((map__27851 == null))))?(((((map__27851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27851):map__27851);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27851__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27851__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var navigate_in_app_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27851__$1,new cljs.core.Keyword(null,"navigate-in-app?","navigate-in-app?",527471799));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(navigate_in_app_QMARK_ === false){
return null;
} else {
event.preventDefault();

event.stopPropagation();

history.pushState(({}),pikseli.page_settings.page_title(uri),uri);

return pikseli.services.router.update_uri_BANG_(uri);
}
})], null)),text], null);
});

//# sourceMappingURL=pikseli.components.app_link.js.map
