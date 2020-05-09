goog.provide('pikseli.utils');
goog.require('cljs.core');
goog.require('reagent.core');
pikseli.utils.width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(window.innerWidth);
pikseli.utils.listen_window_size = (function pikseli$utils$listen_window_size(){
return window.addEventListener("resize",(function (){
return cljs.core.reset_BANG_(pikseli.utils.width,window.innerWidth);
}));
});
pikseli.utils.listen_window_size();

//# sourceMappingURL=pikseli.utils.js.map
