goog.provide('pikseli.services.ajax');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
pikseli.services.ajax.http_get = (function pikseli$services$ajax$http_get(url){
return cljs_http.client.get(url);
});
pikseli.services.ajax.GET_BANG_ = (function pikseli$services$ajax$GET_BANG_(url,p__27873){
var map__27874 = p__27873;
var map__27874__$1 = (((((!((map__27874 == null))))?(((((map__27874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27874):map__27874);
var options = map__27874__$1;
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27874__$1,new cljs.core.Keyword(null,"ok","ok",967785236));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27874__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var c__26428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26429__auto__ = (function (){var switch__26405__auto__ = (function (state_27915){
var state_val_27916 = (state_27915[(1)]);
if((state_val_27916 === (7))){
var state_27915__$1 = state_27915;
var statearr_27917_27944 = state_27915__$1;
(statearr_27917_27944[(2)] = false);

(statearr_27917_27944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (1))){
var inst_27877 = pikseli.services.ajax.http_get(url);
var state_27915__$1 = state_27915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27915__$1,(2),inst_27877);
} else {
if((state_val_27916 === (4))){
var state_27915__$1 = state_27915;
var statearr_27918_27945 = state_27915__$1;
(statearr_27918_27945[(2)] = false);

(statearr_27918_27945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (15))){
var inst_27902 = (state_27915[(7)]);
var inst_27908 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_27902) : error.call(null,inst_27902));
var state_27915__$1 = state_27915;
var statearr_27919_27946 = state_27915__$1;
(statearr_27919_27946[(2)] = inst_27908);

(statearr_27919_27946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (13))){
var state_27915__$1 = state_27915;
if(cljs.core.truth_(error)){
var statearr_27920_27947 = state_27915__$1;
(statearr_27920_27947[(1)] = (15));

} else {
var statearr_27921_27948 = state_27915__$1;
(statearr_27921_27948[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (6))){
var state_27915__$1 = state_27915;
var statearr_27922_27949 = state_27915__$1;
(statearr_27922_27949[(2)] = true);

(statearr_27922_27949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (17))){
var inst_27911 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
var statearr_27923_27950 = state_27915__$1;
(statearr_27923_27950[(2)] = inst_27911);

(statearr_27923_27950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (3))){
var inst_27879 = (state_27915[(8)]);
var inst_27884 = inst_27879.cljs$lang$protocol_mask$partition0$;
var inst_27885 = (inst_27884 & (64));
var inst_27886 = inst_27879.cljs$core$ISeq$;
var inst_27887 = (cljs.core.PROTOCOL_SENTINEL === inst_27886);
var inst_27888 = ((inst_27885) || (inst_27887));
var state_27915__$1 = state_27915;
if(cljs.core.truth_(inst_27888)){
var statearr_27924_27951 = state_27915__$1;
(statearr_27924_27951[(1)] = (6));

} else {
var statearr_27925_27952 = state_27915__$1;
(statearr_27925_27952[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (12))){
var inst_27902 = (state_27915[(7)]);
var inst_27905 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_27902) : ok.call(null,inst_27902));
var state_27915__$1 = state_27915;
var statearr_27926_27953 = state_27915__$1;
(statearr_27926_27953[(2)] = inst_27905);

(statearr_27926_27953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (2))){
var inst_27879 = (state_27915[(8)]);
var inst_27879__$1 = (state_27915[(2)]);
var inst_27881 = (inst_27879__$1 == null);
var inst_27882 = cljs.core.not(inst_27881);
var state_27915__$1 = (function (){var statearr_27927 = state_27915;
(statearr_27927[(8)] = inst_27879__$1);

return statearr_27927;
})();
if(inst_27882){
var statearr_27928_27959 = state_27915__$1;
(statearr_27928_27959[(1)] = (3));

} else {
var statearr_27929_27960 = state_27915__$1;
(statearr_27929_27960[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (11))){
var inst_27900 = (state_27915[(2)]);
var inst_27901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27900,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27900,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_27903 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27901,(200));
var state_27915__$1 = (function (){var statearr_27930 = state_27915;
(statearr_27930[(7)] = inst_27902);

return statearr_27930;
})();
if(inst_27903){
var statearr_27931_27961 = state_27915__$1;
(statearr_27931_27961[(1)] = (12));

} else {
var statearr_27932_27962 = state_27915__$1;
(statearr_27932_27962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (9))){
var inst_27879 = (state_27915[(8)]);
var inst_27897 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_27879);
var state_27915__$1 = state_27915;
var statearr_27933_27963 = state_27915__$1;
(statearr_27933_27963[(2)] = inst_27897);

(statearr_27933_27963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (5))){
var inst_27895 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
if(cljs.core.truth_(inst_27895)){
var statearr_27934_27964 = state_27915__$1;
(statearr_27934_27964[(1)] = (9));

} else {
var statearr_27935_27965 = state_27915__$1;
(statearr_27935_27965[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (14))){
var inst_27913 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27915__$1,inst_27913);
} else {
if((state_val_27916 === (16))){
var state_27915__$1 = state_27915;
var statearr_27936_27978 = state_27915__$1;
(statearr_27936_27978[(2)] = null);

(statearr_27936_27978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (10))){
var inst_27879 = (state_27915[(8)]);
var state_27915__$1 = state_27915;
var statearr_27937_27979 = state_27915__$1;
(statearr_27937_27979[(2)] = inst_27879);

(statearr_27937_27979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (8))){
var inst_27892 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
var statearr_27938_27980 = state_27915__$1;
(statearr_27938_27980[(2)] = inst_27892);

(statearr_27938_27980[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto__ = null;
var pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto____0 = (function (){
var statearr_27939 = [null,null,null,null,null,null,null,null,null];
(statearr_27939[(0)] = pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto__);

(statearr_27939[(1)] = (1));

return statearr_27939;
});
var pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto____1 = (function (state_27915){
while(true){
var ret_value__26407__auto__ = (function (){try{while(true){
var result__26408__auto__ = switch__26405__auto__(state_27915);
if(cljs.core.keyword_identical_QMARK_(result__26408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26408__auto__;
}
break;
}
}catch (e27940){var ex__26409__auto__ = e27940;
var statearr_27941_27981 = state_27915;
(statearr_27941_27981[(2)] = ex__26409__auto__);


if(cljs.core.seq((state_27915[(4)]))){
var statearr_27942_27982 = state_27915;
(statearr_27942_27982[(1)] = cljs.core.first((state_27915[(4)])));

} else {
throw ex__26409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27983 = state_27915;
state_27915 = G__27983;
continue;
} else {
return ret_value__26407__auto__;
}
break;
}
});
pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto__ = function(state_27915){
switch(arguments.length){
case 0:
return pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto____0.call(this);
case 1:
return pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto____1.call(this,state_27915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto__.cljs$core$IFn$_invoke$arity$0 = pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto____0;
pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto__.cljs$core$IFn$_invoke$arity$1 = pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto____1;
return pikseli$services$ajax$GET_BANG__$_state_machine__26406__auto__;
})()
})();
var state__26430__auto__ = (function (){var statearr_27943 = f__26429__auto__();
(statearr_27943[(6)] = c__26428__auto__);

return statearr_27943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26430__auto__);
}));

return c__26428__auto__;
});

//# sourceMappingURL=pikseli.services.ajax.js.map
