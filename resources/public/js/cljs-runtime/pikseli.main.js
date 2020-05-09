goog.provide('pikseli.main');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('pikseli.blog_content');
goog.require('pikseli.main_content');
goog.require('pikseli.services.router');
goog.require('pikseli.styles.global');
goog.require('pikseli.styles.layout');
goog.require('pikseli.views.welcome');
goog.require('pikseli.views.writing');
goog.require('pikseli.views.photography');
goog.require('pikseli.views.misc');
goog.require('pikseli.views.contact');
goog.require('pikseli.views.software');
goog.require('pikseli.views.music');
goog.require('pikseli.views.filming');
goog.require('pikseli.ui.modal');
goog.require('reagent.core');
goog.require('pikseli.ui.general');
pikseli.main.site_footer = (function pikseli$main$site_footer(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pikseli.styles.layout.site_footer),"Copyright \u00A9 Jari Hanhela",new cljs.core.Keyword(null,"p","p",151049309),"Powered by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://clojurescript.org"], null),"ClojureScript"], null),". ","Source code available ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Jarzka/pikseli.org"], null),"here"], null),"."], null);
});
pikseli.main.content = (function pikseli$main$content(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((pikseli.services.router.uri_is_blog_QMARK_())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.blog_content.content], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.main_content.content], null))], null);
});
pikseli.main.site_body = (function pikseli$main$site_body(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.ui.modal.modal_lg], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pikseli.styles.layout.page_content),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.main.content], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.main.site_footer], null)], null)], null);
});
pikseli.main.main_content = (function pikseli$main$main_content(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.main.site_body], null);
});
pikseli.main.init = (function pikseli$main$init(){
return pikseli.styles.global.init_styles();
});
pikseli.main.start = (function pikseli$main$start(){
pikseli.main.init();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(pikseli.main.main_content,document.getElementById("app"));
});
goog.exportSymbol('pikseli.main.start', pikseli.main.start);

//# sourceMappingURL=pikseli.main.js.map
