goog.provide('pikseli.services.router');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('pikseli.router');
goog.require('reagent.core');
goog.require('pikseli.page_settings');
goog.require('pikseli.services.dom');
pikseli.services.router.read_host = (function pikseli$services$router$read_host(){
return window.location.host;
});
pikseli.services.router.read_uri = (function pikseli$services$router$read_uri(){
return window.location.pathname;
});
pikseli.services.router.uri = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(pikseli.services.router.read_uri());
pikseli.services.router.uri_is_blog_QMARK_ = (function pikseli$services$router$uri_is_blog_QMARK_(){
return pikseli.router.uri_is_blog_QMARK_(pikseli.services.router.read_host(),pikseli.services.router.read_uri());
});
pikseli.services.router.update_title_BANG_ = (function pikseli$services$router$update_title_BANG_(){
return pikseli.services.dom.set_title(pikseli.page_settings.page_title(pikseli.services.router.read_uri()));
});
pikseli.services.router.update_uri_BANG_ = (function pikseli$services$router$update_uri_BANG_(new_uri){
cljs.core.reset_BANG_(pikseli.services.router.uri,new_uri);

return pikseli.services.router.update_title_BANG_();
});
window.addEventListener("popstate",(function (){
return pikseli.services.router.update_uri_BANG_(pikseli.services.router.read_uri());
}));

//# sourceMappingURL=pikseli.services.router.js.map
