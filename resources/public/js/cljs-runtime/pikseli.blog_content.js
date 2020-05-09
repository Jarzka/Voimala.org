goog.provide('pikseli.blog_content');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('pikseli.components.app_link');
goog.require('pikseli.api.post_api');
goog.require('pikseli.services.blog');
goog.require('pikseli.services.dom');
goog.require('pikseli.styles.views.blog');
goog.require('pikseli.page_settings');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_time.format');
goog.require('cljs_time.coerce');
goog.require('pikseli.styles.layout');
goog.require('pikseli.router');
goog.require('pikseli.services.router');
goog.require('pikseli.styles.global');
goog.require('pikseli.ui.general');
pikseli.blog_content.blog_date_out_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("d.M.yyyy");
pikseli.blog_content.blog_loader = (function pikseli$blog_content$blog_loader(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.ui.general.loader_light,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Odota hetki..."], null)], null);
});
pikseli.blog_content.single_full_blog_post = (function pikseli$blog_content$single_full_blog_post(post_id){
var post_html = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var set_contents_BANG_ = (function (post){
var metadata = new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(post);
if(cljs.core.truth_(pikseli.router.blog_post_id(pikseli.services.router.read_uri()))){
pikseli.services.dom.set_title(pikseli.page_settings.blog_post_title(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(metadata)));

pikseli.services.dom.set_meta_tags(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"type","type",1174270348),"article",new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pikseli.services.router.read_host()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pikseli.services.router.read_uri())].join(''),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"keywords","keywords",1526959054),new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(metadata)], null));
} else {
}

return cljs.core.reset_BANG_(post_html,new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(post));
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var post = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pikseli.services.blog.loaded_posts),post_id);
if(cljs.core.truth_(post)){
return set_contents_BANG_(post);
} else {
return pikseli.api.post_api.get_post(post_id,(function (file_name,contents){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pikseli.services.blog.loaded_posts,cljs.core.assoc,file_name,contents);

return set_contents_BANG_(contents);
}),null);
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if(cljs.core.truth_(pikseli.router.blog_post_id(pikseli.services.router.read_uri()))){
return null;
} else {
return pikseli.services.dom.clear_meta_tags();
}
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var post = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pikseli.services.blog.loaded_posts),post_id);
var metadata = new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(post);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),(cljs.core.truth_(post)?(cljs.core.truth_(pikseli.router.blog_post_id(pikseli.services.router.read_uri()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(metadata)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.components.app_link.app_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),["/blog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pikseli.styles.global.link),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(metadata)], null)], null)):null),(cljs.core.truth_(post)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pikseli.styles.views.blog.author_and_date),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(metadata))?new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(metadata):null))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(metadata))?cljs_time.format.unparse(pikseli.blog_content.blog_date_out_formatter,cljs_time.coerce.from_date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(metadata))):null))].join('')], null):null),(cljs.core.truth_(post)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.blog_content.blog_loader], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(pikseli.styles.views.blog.blog_post,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.deref(post_html)], null)], null))], null)], null);
})], null));
});
pikseli.blog_content.post_list = (function pikseli$blog_content$post_list(posts){
var post_ids = cljs.core.vec(cljs.core.reverse(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(posts))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,post_id){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.blog_content.single_full_blog_post,post_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
}),post_ids)], null);
});
pikseli.blog_content.blog_home = (function pikseli$blog_content$blog_home(){
var post_file_names = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var error_QMARK_ = false;
var handle_error = (function (error){
console.error("Error: ",error);

return cljs.core.reset_BANG_(error_QMARK_,true);
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
pikseli.services.dom.set_title(pikseli.page_settings.page_title("/blog"));

return pikseli.api.post_api.get_post_ids((function (ids){
cljs.core.reset_BANG_(post_file_names,ids);

return pikseli.api.post_api.get_posts(ids,(function (file_name,contents){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pikseli.services.blog.loaded_posts,cljs.core.assoc,file_name,contents);
}),handle_error);
}),handle_error);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var all_files_loaded_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.keys(cljs.core.deref(pikseli.services.blog.loaded_posts))),cljs.core.count(cljs.core.deref(post_file_names)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((error_QMARK_)?"Virhe":((all_files_loaded_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.blog_content.post_list,cljs.core.deref(pikseli.services.blog.loaded_posts)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.blog_content.blog_loader], null)
))], null);
})], null));
});
pikseli.blog_content.content = (function pikseli$blog_content$content(){
var blog_post_id = pikseli.router.blog_post_id(cljs.core.deref(pikseli.services.router.uri));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pikseli.styles.views.blog.blog_content),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pikseli.styles.views.blog.header),(cljs.core.truth_(blog_post_id)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.components.app_link.app_link,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),pikseli.styles.views.blog.back,new cljs.core.Keyword(null,"uri","uri",-774711847),"/blog"], null),"< Etusivu"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(pikseli.styles.views.blog.back,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://pikseli.org"], null)),"< Pikseli.org"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(pikseli.styles.layout.site_header,new cljs.core.Keyword(null,"logo-and-description","logo-and-description",17396930)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.components.app_link.app_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/blog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3(pikseli.styles.layout.site_header,new cljs.core.Keyword(null,"logo-blog","logo-blog",-108402269),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alt","alt",-3214426),"Kotona ikimets\u00E4ss\u00E4",new cljs.core.Keyword(null,"src","src",-1651076051),pikseli.page_settings.blog_logo_url], null))], null)], null)], null)], null)], null),(cljs.core.truth_(blog_post_id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.blog_content.single_full_blog_post,blog_post_id], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.blog_content.blog_home], null))], null);
});

//# sourceMappingURL=pikseli.blog_content.js.map
