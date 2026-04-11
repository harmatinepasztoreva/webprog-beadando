import React, { useState } from "react";
import SutemenyTable from "/src/tables/SutemenyTable";
import EditSutemenyForm from "/src/forms/EditSutemenyForm";
import AddSutemenyForm from "/src/forms/AddSutemenyForm";
import "./React.css";

const App = () => {
  const usersData = [
  {	id:	1	, sutiNev:	"	Süni	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	2	, sutiNev:	"	Gesztenyealagút	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	3	, sutiNev:	"	Sajtos pogácsa	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	4	, sutiNev:	"	Diós-mákos	"	, sutiTipus:	"	bejgli	"	, dijazott:	"	Nem	"	},
 {	id:	5	, sutiNev:	"	Sajttorta (málnás)	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	6	, sutiNev:	"	Citrom	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	7	, sutiNev:	"	Eszterházy	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	8	, sutiNev:	"	Rákóczi-túrós	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	9	, sutiNev:	"	Meggyes kocka	"	, sutiTipus:	"	tejszínes sütemény	"	, dijazott:	"	Nem	"	},
 {	id:	10	, sutiNev:	"	Legényfogó	"	, sutiTipus:	"	torta	"	, dijazott:	"	Igen	"	},
 {	id:	11	, sutiNev:	"	Alpesi karamell	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	12	, sutiNev:	"	Kókuszcsók	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	13	, sutiNev:	"	Habos mákos	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	14	, sutiNev:	"	Szilvás	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	15	, sutiNev:	"	Juhtúrós párna	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	16	, sutiNev:	"	Mákos guba	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	17	, sutiNev:	"	Néró	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	18	, sutiNev:	"	Sacher	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	19	, sutiNev:	"	Citrom	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	20	, sutiNev:	"	Ribizlihabos-almás réteges	"	, sutiTipus:	"	különleges torta	"	, dijazott:	"	Igen	"	},
 {	id:	21	, sutiNev:	"	Három kívánság	"	, sutiTipus:	"	torta	"	, dijazott:	"	Igen	"	},
 {	id:	22	, sutiNev:	"	Dobos	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	23	, sutiNev:	"	Epres mascarpone	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	24	, sutiNev:	"	Csokoládémousse	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	25	, sutiNev:	"	Oroszkrém	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	26	, sutiNev:	"	Medvetalp	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	27	, sutiNev:	"	Trüffel	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	28	, sutiNev:	"	Tejszínes gyümölcsös (meggy)	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	29	, sutiNev:	"	Mákos-szilvalekváros	"	, sutiTipus:	"	bejgli	"	, dijazott:	"	Nem	"	},
 {	id:	30	, sutiNev:	"	Ribizlihabos-﻿almá﻿s réteges tortaszelet	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	31	, sutiNev:	"	Marcipános vágott	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	32	, sutiNev:	"	Indiáner	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	33	, sutiNev:	"	Meggyes	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	34	, sutiNev:	"	Mákos	"	, sutiTipus:	"	bejgli	"	, dijazott:	"	Nem	"	},
 {	id:	35	, sutiNev:	"	Sós karamella	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	36	, sutiNev:	"	Legényfogó	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	37	, sutiNev:	"	Rigó Jancsi	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	38	, sutiNev:	"	Tejszínes gyümölcsös (erdei gyümölcs)	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	39	, sutiNev:	"	Ez+Az (csokoládé és gesztenye)	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	40	, sutiNev:	"	Málnás mascarpone	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	41	, sutiNev:	"	Dobos	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	42	, sutiNev:	"	Ferrero	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	43	, sutiNev:	"	Vegyes házi pite falatok	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	44	, sutiNev:	"	Ökörszem	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	45	, sutiNev:	"	Danubius kocka	"	, sutiTipus:	"	tejszínes sütemény	"	, dijazott:	"	Nem	"	},
 {	id:	46	, sutiNev:	"	Sajtkrémmel töltött fánkocska	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	47	, sutiNev:	"	Túrókrém gyümölccsel díszítve	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	48	, sutiNev:	"	Almás	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	49	, sutiNev:	"	Mignon	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	50	, sutiNev:	"	Csokoládémousse fényes csokoládéval	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	51	, sutiNev:	"	Vágott sós (sós omlós)	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	52	, sutiNev:	"	Nagyi sós	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	53	, sutiNev:	"	Vegyes sós	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	54	, sutiNev:	"	Somlói	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	55	, sutiNev:	"	Tiramisu	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	56	, sutiNev:	"	Hegyvidék	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	57	, sutiNev:	"	Szedres csokoládé	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	58	, sutiNev:	"	Pogácsák vegyesen	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	59	, sutiNev:	"	Lúdláb	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	60	, sutiNev:	"	Sacher	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	61	, sutiNev:	"	Eszterházy	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	62	, sutiNev:	"	Zalavári gesztenye	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	63	, sutiNev:	"	Gesztenyegolyó	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	64	, sutiNev:	"	Pisztáciás-málnás mascarpone	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	65	, sutiNev:	"	Habos mákos	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	66	, sutiNev:	"	Franciakrémes	"	, sutiTipus:	"	krémes	"	, dijazott:	"	Nem	"	},
 {	id:	67	, sutiNev:	"	Gesztenye kocka	"	, sutiTipus:	"	tejszínes sütemény	"	, dijazott:	"	Nem	"	},
 {	id:	68	, sutiNev:	"	Pisztáciás-málnás mascarpone	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	69	, sutiNev:	"	Málnás kocka	"	, sutiTipus:	"	tejszínes sütemény	"	, dijazott:	"	Nem	"	},
 {	id:	70	, sutiNev:	"	Sajttorta (málnás)	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	71	, sutiNev:	"	Túrókrém gyümölccsel	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	72	, sutiNev:	"	Csokis kaland	"	, sutiTipus:	"	különleges torta	"	, dijazott:	"	Igen	"	},
 {	id:	73	, sutiNev:	"	Somlói	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	74	, sutiNev:	"	Palermo	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	75	, sutiNev:	"	Szilvalekváros	"	, sutiTipus:	"	bejgli	"	, dijazott:	"	Nem	"	},
 {	id:	76	, sutiNev:	"	Ünnepi diótorta grillázzsal	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	77	, sutiNev:	"	Oroszkrém	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	78	, sutiNev:	"	Mini zserbó	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	79	, sutiNev:	"	Sajtos masni	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	80	, sutiNev:	"	Zserbó	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	81	, sutiNev:	"	Tejszínes gyümölcsös (málna)	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	82	, sutiNev:	"	Marcipános csokoládé	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	83	, sutiNev:	"	Csokis kaland	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	84	, sutiNev:	"	Marcipán tekercs	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	85	, sutiNev:	"	Képviselőfánk	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	86	, sutiNev:	"	Epres omlett	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	87	, sutiNev:	"	Mini linzer	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	88	, sutiNev:	"	Linzerkarika	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	89	, sutiNev:	"	Szedres csokoládé	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	90	, sutiNev:	"	Narancsív	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	91	, sutiNev:	"	Gesztenyepüré	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	92	, sutiNev:	"	Palermo	"	, sutiTipus:	"	tejszínes sütemény	"	, dijazott:	"	Nem	"	},
 {	id:	93	, sutiNev:	"	Csokis néró	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	94	, sutiNev:	"	Flódni	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	95	, sutiNev:	"	Mézeskalács	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	96	, sutiNev:	"	Olívás pogácsa	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	97	, sutiNev:	"	Florentin	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	98	, sutiNev:	"	Tiramisu	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	99	, sutiNev:	"	Zoli kedvence (vágott édes tea)	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	100	, sutiNev:	"	Erdei gyümölcs kocka	"	, sutiTipus:	"	tejszínes sütemény	"	, dijazott:	"	Nem	"	},
 {	id:	101	, sutiNev:	"	Rákóczi-túrós	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	102	, sutiNev:	"	Mézeskrémes	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	103	, sutiNev:	"	Trüffel	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	104	, sutiNev:	"	Szilvás papucs	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	105	, sutiNev:	"	Zalavári gesztenye	"	, sutiTipus:	"	torta	"	, dijazott:	"	Igen	"	},
 {	id:	106	, sutiNev:	"	Danubius	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	107	, sutiNev:	"	Alpesi karamell	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	108	, sutiNev:	"	Puncs	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	109	, sutiNev:	"	Gesztenye szív	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	110	, sutiNev:	"	Ez+Az (csokoládé és gesztenye)	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	111	, sutiNev:	"	Tökmagos félhold	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	112	, sutiNev:	"	Burgonyás pogácsa	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	113	, sutiNev:	"	Somlói galuska	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	114	, sutiNev:	"	Puncs	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	115	, sutiNev:	"	Lekváros vágott	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	116	, sutiNev:	"	Oreo	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	117	, sutiNev:	"	Vintage	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	118	, sutiNev:	"	Rigó Jancsi	"	, sutiTipus:	"	tejszínes sütemény	"	, dijazott:	"	Nem	"	},
 {	id:	119	, sutiNev:	"	Feketeerdő	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	120	, sutiNev:	"	Kókuszos vágott	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	121	, sutiNev:	"	Feketeerdő	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	122	, sutiNev:	"	Moscauer	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	123	, sutiNev:	"	Diós	"	, sutiTipus:	"	bejgli	"	, dijazott:	"	Nem	"	},
 {	id:	124	, sutiNev:	"	Rákóczi-túrós	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	125	, sutiNev:	"	Három kívánság	"	, sutiTipus:	"	különleges torta	"	, dijazott:	"	Nem	"	},
 {	id:	126	, sutiNev:	"	Gesztenyés-karamellás	"	, sutiTipus:	"	bejgli	"	, dijazott:	"	Nem	"	},
 {	id:	127	, sutiNev:	"	Gesztenyés szív	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	128	, sutiNev:	"	Ropi	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	129	, sutiNev:	"	Paleolit étcsokoládé	"	, sutiTipus:	"	különleges torta	"	, dijazott:	"	Nem	"	},
 {	id:	130	, sutiNev:	"	Túrós	"	, sutiTipus:	"	pite	"	, dijazott:	"	Nem	"	},
 {	id:	131	, sutiNev:	"	Ischler	"	, sutiTipus:	"	vegyes	"	, dijazott:	"	Nem	"	},
 {	id:	132	, sutiNev:	"	Lúdláb	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	133	, sutiNev:	"	Csokoládémousse	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	134	, sutiNev:	"	Dió	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},
 {	id:	135	, sutiNev:	"	Krémes	"	, sutiTipus:	"	krémes	"	, dijazott:	"	Nem	"	},
 {	id:	136	, sutiNev:	"	Mini ischler	"	, sutiTipus:	"	édes teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	137	, sutiNev:	"	Paleolit étcsokoládé	"	, sutiTipus:	"	tortaszelet	"	, dijazott:	"	Nem	"	},
 {	id:	138	, sutiNev:	"	Tejfölös túrós hajtogatott	"	, sutiTipus:	"	sós teasütemény	"	, dijazott:	"	Nem	"	},
 {	id:	139	, sutiNev:	"	Mákos guba	"	, sutiTipus:	"	torta	"	, dijazott:	"	Nem	"	},

  ];

const initialFormState = {
    id: null,
    sutiNev: "",
    sutiTipus: "",
    dijazott: "Igen",
  };

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };
  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      sutiNev: user.sutiNev,
      sutiTipus: user.sutiTipus,
      dijazott: user.dijazott,
    });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div>
       <div>
        <div>
          <div>
              
              {!editing ? (
                <AddSutemenyForm
                  addUser={addUser}
                />
              ):(
                <EditSutemenyForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  updateUser={updateUser}
                />
              )}
          </div>
        </div>
        <div className="suti-table">
         
          <SutemenyTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};
export default App;
