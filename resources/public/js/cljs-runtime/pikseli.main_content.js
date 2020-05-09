goog.provide('pikseli.main_content');
goog.require('cljs.core');
goog.require('pikseli.views.welcome');
goog.require('pikseli.views.writing');
goog.require('pikseli.views.photography');
goog.require('pikseli.views.misc');
goog.require('pikseli.views.contact');
goog.require('pikseli.views.software');
goog.require('pikseli.views.music');
goog.require('pikseli.views.filming');
pikseli.main_content.content = (function pikseli$main_content$content(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.welcome.welcome], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.photography.photography], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.filming.filming], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.writing.writing], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.software.software], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.music.music], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.misc.misc], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pikseli.views.contact.contact], null)], null);
});

//# sourceMappingURL=pikseli.main_content.js.map
