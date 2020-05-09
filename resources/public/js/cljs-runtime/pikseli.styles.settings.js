goog.provide('pikseli.styles.settings');
goog.require('cljs.core');
goog.require('pikseli.services.router');
pikseli.styles.settings.light_mode = ((pikseli.services.router.uri_is_blog_QMARK_())?new cljs.core.Keyword(null,"light","light",1918998747):new cljs.core.Keyword(null,"dark","dark",1818973999));
pikseli.styles.settings.dark_mode_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pikseli.styles.settings.light_mode,new cljs.core.Keyword(null,"dark","dark",1818973999));

//# sourceMappingURL=pikseli.styles.settings.js.map
