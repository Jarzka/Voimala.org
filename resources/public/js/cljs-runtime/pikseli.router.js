goog.provide('pikseli.router');
goog.require('cljs.core');
goog.require('clojure.string');
pikseli.router.domain = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["pikseli",null,"pikselidev",null], null), null);
pikseli.router.uri_parts = (function pikseli$router$uri_parts(uri){
return cljs.core.vec(cljs.core.rest(clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
pikseli.router.uri_points_to_blog_QMARK_ = (function pikseli$router$uri_points_to_blog_QMARK_(uri){
var uri_first_part = cljs.core.first(pikseli.router.uri_parts(uri));
return cljs.core.boolean$(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uri_first_part,"blog"));
});
pikseli.router.subdomain_points_to_blog_QMARK_ = (function pikseli$router$subdomain_points_to_blog_QMARK_(host){
var host_splitted = clojure.string.split.cljs$core$IFn$_invoke$arity$2(host,/\./);
var subdomain = (cljs.core.truth_((function (){var G__28038 = cljs.core.second(host_splitted);
return (pikseli.router.domain.cljs$core$IFn$_invoke$arity$1 ? pikseli.router.domain.cljs$core$IFn$_invoke$arity$1(G__28038) : pikseli.router.domain.call(null,G__28038));
})())?cljs.core.first(host_splitted):null);
var blog_subdomains = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["xn--metsss-euac",null,"blog",null,"metsassa",null,"mets\u00E4ss\u00E4",null], null), null);
return cljs.core.boolean$((cljs.core.truth_(subdomain)?(blog_subdomains.cljs$core$IFn$_invoke$arity$1 ? blog_subdomains.cljs$core$IFn$_invoke$arity$1(subdomain) : blog_subdomains.call(null,subdomain)):null));
});
pikseli.router.uri_is_blog_QMARK_ = (function pikseli$router$uri_is_blog_QMARK_(host,uri){
return ((pikseli.router.subdomain_points_to_blog_QMARK_(host)) || (pikseli.router.uri_points_to_blog_QMARK_(uri)));
});
/**
 * Parses blog post id from URL, or returns nil if post id was not found
 */
pikseli.router.blog_post_id = (function pikseli$router$blog_post_id(uri){
if(pikseli.router.uri_points_to_blog_QMARK_(uri)){
return cljs.core.second(pikseli.router.uri_parts(uri));
} else {
return null;
}
});

//# sourceMappingURL=pikseli.router.js.map
