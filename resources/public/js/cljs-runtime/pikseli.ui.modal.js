goog.provide('pikseli.ui.modal');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('reagent.core');
pikseli.ui.modal.jquery = $;
pikseli.ui.modal.modal_contents = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
pikseli.ui.modal.modal_lg = (function pikseli$ui$modal$modal_lg(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog.modal-lg.modal-dialog-centered","div.modal-dialog.modal-lg.modal-dialog-centered",-345910712),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"95% !important"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0px 0px 25px 3px rgba(0,0,0,0.75)"], null)),(cljs.core.truth_(cljs.core.deref(pikseli.ui.modal.modal_contents))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(pikseli.ui.modal.modal_contents)], null):null)], null)], null)], null);
});
pikseli.ui.modal.show_contents_BANG_ = (function pikseli$ui$modal$show_contents_BANG_(contents){
cljs.core.reset_BANG_(pikseli.ui.modal.modal_contents,contents);

return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic((pikseli.ui.modal.jquery.cljs$core$IFn$_invoke$arity$1 ? pikseli.ui.modal.jquery.cljs$core$IFn$_invoke$arity$1(".modal") : pikseli.ui.modal.jquery.call(null,".modal")),"modal",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["show"], 0));
});
pikseli.ui.modal.hide_BANG_ = (function pikseli$ui$modal$hide_BANG_(){
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic((pikseli.ui.modal.jquery.cljs$core$IFn$_invoke$arity$1 ? pikseli.ui.modal.jquery.cljs$core$IFn$_invoke$arity$1(".modal") : pikseli.ui.modal.jquery.call(null,".modal")),"modal",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hide"], 0));

return cljs.core.reset_BANG_(pikseli.ui.modal.modal_contents,null);
});

//# sourceMappingURL=pikseli.ui.modal.js.map
