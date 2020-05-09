goog.provide('pikseli.page_settings');
goog.require('cljs.core');
goog.require('clojure.string');
pikseli.page_settings.page_titles = new cljs.core.PersistentArrayMap(null, 2, ["/","Pikseli.org - Portfolio of Jari Hanhela","/blog/","Kotona ikimets\u00E4ss\u00E4 -retkiblogi"], null);
pikseli.page_settings.page_title = (function pikseli$page_settings$page_title(uri){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pikseli.page_settings.page_titles,uri);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pikseli.page_settings.page_titles,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"/"].join(''));
}
});
pikseli.page_settings.blog_post_title = (function pikseli$page_settings$blog_post_title(title){
return [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," - "].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pikseli.page_settings.page_title("/blog"))].join('');
});
pikseli.page_settings.blog_logo_url = "/images/logo_blog.png";

//# sourceMappingURL=pikseli.page_settings.js.map
