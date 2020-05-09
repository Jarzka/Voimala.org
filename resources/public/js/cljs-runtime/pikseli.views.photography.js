goog.provide('pikseli.views.photography');
goog.require('cljs.core');
goog.require('stylefy.core');
goog.require('reagent.core');
goog.require('pikseli.styles.views.photography');
goog.require('pikseli.styles.global');
goog.require('pikseli.data.photography');
goog.require('pikseli.ui.general');
goog.require('pikseli.ui.modal');
pikseli.views.photography.selected_photo_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
pikseli.views.photography.next_index = (function pikseli$views$photography$next_index(index){
var max_possible_index = (cljs.core.count(pikseli.data.photography.photos) - (1));
var next_index = (index + (1));
var next_index_fixed = (((next_index > max_possible_index))?max_possible_index:next_index);
return next_index_fixed;
});
pikseli.views.photography.previous_index = (function pikseli$views$photography$previous_index(index){
var next_index = (index - (1));
var next_index_fixed = (((next_index < (0)))?(0):next_index);
return next_index_fixed;
});
pikseli.views.photography.set_next_index_BANG_ = (function pikseli$views$photography$set_next_index_BANG_(){
var next_index = pikseli.views.photography.next_index(cljs.core.deref(pikseli.views.photography.selected_photo_index));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_index,cljs.core.deref(pikseli.views.photography.selected_photo_index))){
cljs.core.reset_BANG_(pikseli.views.photography.selected_photo_index,next_index);

return true;
} else {
return false;
}
});
pikseli.views.photography.set_previous_index_BANG_ = (function pikseli$views$photography$set_previous_index_BANG_(){
var next_index = pikseli.views.photography.previous_index(cljs.core.deref(pikseli.views.photography.selected_photo_index));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_index,cljs.core.deref(pikseli.views.photography.selected_photo_index))){
cljs.core.reset_BANG_(pikseli.views.photography.selected_photo_index,next_index);

return true;
} else {
return false;
}
});
pikseli.views.photography.picture = (function pikseli$views$photography$picture(p__27880){
var map__27881 = p__27880;
var map__27881__$1 = (((((!((map__27881 == null))))?(((((map__27881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27881):map__27881);
var picture_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27881__$1,new cljs.core.Keyword(null,"picture-attributes","picture-attributes",1074987714));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27881__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var image_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27881__$1,new cljs.core.Keyword(null,"image-index","image-index",-307949816));
var show_image_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27881__$1,new cljs.core.Keyword(null,"show-image!","show-image!",1072674304));
var map__27883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pikseli.data.photography.photos,image_index);
var map__27883__$1 = (((((!((map__27883 == null))))?(((((map__27883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27883):map__27883);
var photo = map__27883__$1;
var file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var webp_url = ["/images/photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".webp"].join('');
var jpeg_url = ["/images/photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".jpg"].join('');
var webp_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"webp","webp",1501869900).cljs$core$IFn$_invoke$arity$1(formats));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"picture","picture",-921943404),picture_attributes,((webp_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"image/webp",new cljs.core.Keyword(null,"alt","alt",-3214426),description,new cljs.core.Keyword(null,"srcSet","srcSet",-1378415466),webp_url], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"image/jpeg",new cljs.core.Keyword(null,"alt","alt",-3214426),description,new cljs.core.Keyword(null,"srcSet","srcSet",-1378415466),jpeg_url], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt","alt",-3214426),description,new cljs.core.Keyword(null,"src","src",-1651076051),jpeg_url,new cljs.core.Keyword(null,"onLoad","onLoad",-1227893830),show_image_BANG_], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),image_index], null))], null);
});
pikseli.views.photography.photo_in_modal = (function pikseli$views$photography$photo_in_modal(){
var first_image_loaded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var current_image_loaded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var show_image_BANG_ = (function (){
cljs.core.reset_BANG_(first_image_loaded_QMARK_,true);

return cljs.core.reset_BANG_(current_image_loaded_QMARK_,true);
});
return (function (){
var previous_index_value = pikseli.views.photography.previous_index(cljs.core.deref(pikseli.views.photography.selected_photo_index));
var current_index_value = cljs.core.deref(pikseli.views.photography.selected_photo_index);
var next_index_value = pikseli.views.photography.next_index(cljs.core.deref(pikseli.views.photography.selected_photo_index));
var map__27885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pikseli.data.photography.photos,current_index_value);
var map__27885__$1 = (((((!((map__27885 == null))))?(((((map__27885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27885):map__27885);
var photo = map__27885__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27885__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var previous = (function (event){
event.preventDefault();

if(cljs.core.truth_(cljs.core.deref(current_image_loaded_QMARK_))){
if(pikseli.views.photography.set_previous_index_BANG_()){
return cljs.core.reset_BANG_(current_image_loaded_QMARK_,false);
} else {
return null;
}
} else {
return null;
}
});
var next = (function (event){
event.preventDefault();

if(cljs.core.truth_(cljs.core.deref(current_image_loaded_QMARK_))){
if(pikseli.views.photography.set_next_index_BANG_()){
return cljs.core.reset_BANG_(current_image_loaded_QMARK_,false);
} else {
return null;
}
} else {
return null;
}
});
var close = (function (event){
event.preventDefault();

return pikseli.ui.modal.hide_BANG_();
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)),(cljs.core.truth_(cljs.core.deref(current_image_loaded_QMARK_))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(first_image_loaded_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"4rem"], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%) translateY(-80%)"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.ui.general.loader_dark], null)], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(first_image_loaded_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.photography.picture,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image-index","image-index",-307949816),previous_index_value,new cljs.core.Keyword(null,"picture-attributes","picture-attributes",1074987714),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pikseli.styles.views.photography.buffer_photo),new cljs.core.Keyword(null,"style","style",-496642736),pikseli.styles.views.photography.buffer_photo], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.photography.picture,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"picture-attributes","picture-attributes",1074987714),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(pikseli.styles.global.clickable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onLoad","onLoad",-1227893830),show_image_BANG_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),next], null)),new cljs.core.Keyword(null,"image-index","image-index",-307949816),current_index_value,new cljs.core.Keyword(null,"show-image!","show-image!",1072674304),show_image_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),pikseli.styles.views.photography.photo_in_modal], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.photography.picture,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image-index","image-index",-307949816),next_index_value,new cljs.core.Keyword(null,"picture-attributes","picture-attributes",1074987714),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pikseli.styles.views.photography.buffer_photo),new cljs.core.Keyword(null,"style","style",-496642736),pikseli.styles.views.photography.buffer_photo], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pikseli.styles.views.photography.photo_text),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(current_image_loaded_QMARK_))?description:"Loading...")], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),previous], null),"<"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1rem",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem"], null))," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),next], null),">"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1rem",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1rem"], null))," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),close], null),"Close"], null)], null)], null)], null);
});
});
pikseli.views.photography.view_photo_in_modal = (function pikseli$views$photography$view_photo_in_modal(index){
pikseli.ui.modal.hide_BANG_();

var c__26428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26429__auto__ = (function (){var switch__26405__auto__ = (function (state_27890){
var state_val_27891 = (state_27890[(1)]);
if((state_val_27891 === (1))){
var inst_27887 = cljs.core.reset_BANG_(pikseli.views.photography.selected_photo_index,index);
var inst_27888 = pikseli.ui.modal.show_contents_BANG_(pikseli.views.photography.photo_in_modal);
var state_27890__$1 = (function (){var statearr_27892 = state_27890;
(statearr_27892[(7)] = inst_27887);

return statearr_27892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27890__$1,inst_27888);
} else {
return null;
}
});
return (function() {
var pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto__ = null;
var pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto____0 = (function (){
var statearr_27893 = [null,null,null,null,null,null,null,null];
(statearr_27893[(0)] = pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto__);

(statearr_27893[(1)] = (1));

return statearr_27893;
});
var pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto____1 = (function (state_27890){
while(true){
var ret_value__26407__auto__ = (function (){try{while(true){
var result__26408__auto__ = switch__26405__auto__(state_27890);
if(cljs.core.keyword_identical_QMARK_(result__26408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26408__auto__;
}
break;
}
}catch (e27894){var ex__26409__auto__ = e27894;
var statearr_27895_27901 = state_27890;
(statearr_27895_27901[(2)] = ex__26409__auto__);


if(cljs.core.seq((state_27890[(4)]))){
var statearr_27896_27902 = state_27890;
(statearr_27896_27902[(1)] = cljs.core.first((state_27890[(4)])));

} else {
throw ex__26409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27903 = state_27890;
state_27890 = G__27903;
continue;
} else {
return ret_value__26407__auto__;
}
break;
}
});
pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto__ = function(state_27890){
switch(arguments.length){
case 0:
return pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto____0.call(this);
case 1:
return pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto____1.call(this,state_27890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto__.cljs$core$IFn$_invoke$arity$0 = pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto____0;
pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto__.cljs$core$IFn$_invoke$arity$1 = pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto____1;
return pikseli$views$photography$view_photo_in_modal_$_state_machine__26406__auto__;
})()
})();
var state__26430__auto__ = (function (){var statearr_27897 = f__26429__auto__();
(statearr_27897[(6)] = c__26428__auto__);

return statearr_27897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26430__auto__);
}));

return c__26428__auto__;
});
pikseli.views.photography.photo_thumb = (function pikseli$views$photography$photo_thumb(p__27898,index){
var map__27899 = p__27898;
var map__27899__$1 = (((((!((map__27899 == null))))?(((((map__27899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27899):map__27899);
var photo = map__27899__$1;
var file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27899__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27899__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27899__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var jpeg_url = ["/images/photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".jpg"].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),jpeg_url,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
event.preventDefault();

return pikseli.views.photography.view_photo_in_modal(index);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(pikseli.styles.views.photography.photo,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),["/images/photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"_thumb.jpg"].join(''),new cljs.core.Keyword(null,"title","title",636505583),description,new cljs.core.Keyword(null,"alt","alt",-3214426),description], null))], null)], null);
});
pikseli.views.photography.photography = (function pikseli$views$photography$photography(){
var show_more_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var row_class = "col-12 col-md-6 col-lg-4";
var show_n_photos_by_default = (9);
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"photography"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Photography"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.ui.general.blockquote,"A photograph has picked up a fact of life, and that fact will live forever.","Raghu Rain"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,photo_data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),row_class], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.photography.photo_thumb,photo_data,index], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(show_n_photos_by_default,pikseli.data.photography.photos))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.deref(show_more_QMARK_))?null:pikseli.styles.global.hidden),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,photo_data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),row_class], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.photography.photo_thumb,photo_data,(index + show_n_photos_by_default)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(pikseli.data.photography.photos,show_n_photos_by_default))], null),(cljs.core.truth_(cljs.core.deref(show_more_QMARK_))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.ui.general.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(show_more_QMARK_,true);
})], null),"Show more photos"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I mostly photograph the natural beauty of Finland. Please notice that all my photos are copyrighted and you are not allowed to use them without permission."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Follow me on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.instagram.com/jari_hanhela"], null),"Instagram"], null)," if you want to see my new photos first."], null)], null);
});
});

//# sourceMappingURL=pikseli.views.photography.js.map
