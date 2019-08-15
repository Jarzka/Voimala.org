(ns pikseli.data.photography)

(def photos
  [; Shown by default
   {:file-name "2"
    :description "Salamajärven kansallispuisto, Koirasalmen nuotiopaikka"
    :formats #{:jpg :webp}}
   {:file-name "_MG_5995-HDR"
    :description "Auringonlasku, Puurijärven ja Isonsuon kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_9486-HDR"
    :description "Päijänne hiljenee"
    :formats #{:jpg}}
   {:file-name "6"
    :description "Riisitunturin kansallispuisto, Posio"
    :formats #{:jpg}}
   {:file-name "5"
    :description "Hillosenselkä, Orilammen Maja ja Lomakeskus"
    :formats #{:jpg}}
   {:file-name "7"
    :description "Riisitunturin kansallispuisto, autiotupa"
    :formats #{:jpg :webp}}
   {:file-name "8"
    :description "Riisitunturin kansallispuisto, Posio"
    :formats #{:jpg :webp}}
   {:file-name "9"
    :description "Korouma, Posio"
    :formats #{:jpg :webp}}
   {:file-name "_MG_1302"
    :description "Täyden kuun valossa, Sonkajärvi"
    :formats #{:jpg}}

   ; "More photos"

   {:file-name "DJI_0015-HDR-Pano"
    :description "Selkä-Sarvi, Perämeren kansallispuisto"
    :formats #{:jpg :webp}}
   {:file-name "DJI_0158-HDR"
    :description "Saana"
    :formats #{:jpg}}
   {:file-name "DJI_0380-HDR"
    :description "Lemmenjoki, Lemmenjoen kansallispuisto"
    :formats #{:jpg :webp}}
   {:file-name "_MG_8003"
    :description "Lemmenjoen tunnelmissa"
    :formats #{:jpg :webp}}
   {:file-name "_MG_8238-HDR"
    :description "Metsäpolku Lemmenjoella"
    :formats #{:jpg :webp}}
   {:file-name "DJI_0500-HDR-Pano"
    :description "Utö, Suomen eteläisin vakituisesti asuttu saari (kuva otettu ilmakuvauskieltoalueelle Puolustusvoimien luvalla)."
    :formats #{:jpg :webp}}
   {:file-name "_MG_8970"
    :description "Utön majakka iltahämärässä"
    :formats #{:jpg}}
   {:file-name "_MG_8974"
    :description "Utön kansallismaisemaa"
    :formats #{:jpg}}
   {:file-name "_MG_9057"
    :description "Yössä loistaa Utön majakka"
    :formats #{:jpg :webp}}
   {:file-name "DJI_0575-HDR-Pano"
    :description "Päijänteen kansallispuiston maisemia"
    :formats #{:jpg}}
   {:file-name "DJI_0755-Pano"
    :description "Selkämeri (kuvattu Porissa)"
    :formats #{:jpg :webp}}
   {:file-name "_MG_7088-Pano-2"
    :description "Selkämeren rantaa"
    :formats #{:jpg :webp}}
   {:file-name "_MG_6628-HDR"
    :description "Juhannuksellinen auringonlasku"
    :formats #{:jpg :webp}}
   {:file-name "_MG_7373"
    :description "Auringonlasku jossain päin Torniota"
    :formats #{:jpg}}
   {:file-name "_MG_7445"
    :description "Kostea metsäpolku Torniossa"
    :formats #{:jpg :webp}}
   {:file-name "_MG_7555"
    :description "Lampaita Perämeren kansallispuistossa"
    :formats #{:jpg}}
   {:file-name "_MG_7654"
    :description "Selkä-Sarven maisemissa"
    :formats #{:jpg}}
   {:file-name "_MG_7675"
    :description "Metsäpolku Selkä-Sarvessa"
    :formats #{:jpg :webp}}
   {:file-name "_MG_7698"
    :description "Poro Pallas-Ylläksellä"
    :formats #{:jpg :webp}}
   {:file-name "_MG_8594-Pano"
    :description "Pyhä-Luoston kansallispuiston maisemia"
    :formats #{:jpg :webp}}
   {:file-name "_MG_8664-Pano"
    :description "Isokuru, Pyhä-Luoston kansallispuisto"
    :formats #{:jpg :webp}}
   {:file-name "_MG_6311-Pano-2"
    :description "Pyhä-Luoston kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_6087-Pano"
    :description "Pyhä-Luoston kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_8842-HDR"
    :description "Pyhä-Luoston suomaisemaa"
    :formats #{:jpg :webp}}
   {:file-name "4"
    :description "Pyhä-Luoston kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_8884-Pano"
    :description "Auringonlasku Turun saaristossa"
    :formats #{:jpg}}
   {:file-name "_MG_9138-HDR"
    :description "Hiljaisuus"
    :formats #{:jpg :webp}}
   {:file-name "_MG_9280"
    :description "Kelventeen metsäpolku, Päijänteen kansallispuisto"
    :formats #{:jpg :webp}}
   {:file-name "_MG_9353"
    :description "Kelventeen harjuja, Päijänteen kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_3563-HDR"
    :description "Auringonlasku, Kurjenrahkan kansallispuisto"
    :formats #{:jpg}}
   {:file-name "winter7"
    :description "Urho Kekkosen kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_1101"
    :description "Ritajärven luonnonsuojelualue, Sastamala"
    :formats #{:jpg}}
   {:file-name "IMG_7634-Pano"
    :description "Torronsuon kansallispuisto"
    :formats #{:jpg}}
   {:file-name "IMG_7548-Pano"
    :description "Torronsuon kansallispuisto"
    :formats #{:jpg}}
   {:file-name "IMG_7536-Pano"
    :description "Torronsuon kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_0302"
    :description "Salamajärven kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_0480-HDR"
    :description "Salamajärven kansallispuisto"
    :formats #{:jpg :webp}}
   {:file-name "1"
    :description "Salamajärven kansallispuisto"
    :formats #{:jpg}}
   {:file-name "IMG_5582"
    :description "Metsäpolku"
    :formats #{:jpg}}
   {:file-name "IMG_5516-Pano"
    :description "Pukalan virkistysmetsä"
    :formats #{:jpg}}
   {:file-name "_MG_6881"
    :description "Kolin kansallispuisto"
    :formats #{:jpg}}
   {:file-name "3"
    :description "Kolin kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_6977"
    :description "Pirunkirkko, Kolin kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_6766-Pano"
    :description "Repoveden kansallispuisto"
    :formats #{:jpg}}
   {:file-name "IMG_5195-Pano"
    :description "Luomajärvi, Helvetinjärven kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_2401-HDR"
    :description "Maaliskuun Auringonlasku Vuoreksessa"
    :formats #{:jpg}}
   {:file-name "IMG_4948-Pano"
    :description "Liesjärven kansallispuisto"
    :formats #{:jpg}}
   {:file-name "IMG_4720"
    :description "Iso-Melkutin, Melkuttimien reitit"
    :formats #{:jpg}}
   {:file-name "animals3"
    :description "Lokki"
    :formats #{:jpg}}
   {:file-name "_MG_7194"
    :description "Virolainen, Tampere"
    :formats #{:jpg}}
   {:file-name "_MG_4493"
    :description "Isojärven kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_1702"
    :description "Ruskea virta, Korouma"
    :formats #{:jpg}}
   {:file-name "_MG_0911-HDR"
    :description "Kivilinna, Sastamala"
    :formats #{:jpg}}
   {:file-name "_MG_2523"
    :description "Maaseudun yö, lähellä Isojärven kansallispuistoa"
    :formats #{:jpg :webp}}
   {:file-name "_MG_4295-HDR"
    :description "Öljylamppu, Kurjenrahkan kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_4856-HDR-Pano"
    :description "Auringonlasku panoraama, Lauhanvuoren kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_4919-HDR"
    :description "Auringonlasku, Lauhanvuoren kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_5781-HDR-Pano-2"
    :description "Auringonlasku lintutornista, Puurijärven ja Isonsuon kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_5841-HDR"
    :description "Koski, Puurijärven ja Isonsuon kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_6004-HDR"
    :description "Lehmät, Puurijärven ja Isonsuon kansallispuisto"
    :formats #{:jpg}}
   {:file-name "DJI_0490-HDR-Pano"
    :description "Auringonlasku ilmasta, Puurijärven ja Isonsuon kansallispuisto"
    :formats #{:jpg}}
   {:file-name "DJI_0513-HDR-Pano"
    :description "Yö laskeutuu, Puurijärven ja Isonsuon kansallispuisto"
    :formats #{:jpg}}
   {:file-name "_MG_6114-Pano"
    :description "Myrsky lähestyy, Reväslahdenkärki lähellä Tamperetta"
    :formats #{:jpg}}
   {:file-name "_MG_6479"
    :description "Iltausva"
    :formats #{:jpg}}])