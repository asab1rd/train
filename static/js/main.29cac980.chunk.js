(window.webpackJsonpsearchbar=window.webpackJsonpsearchbar||[]).push([[0],{228:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},348:function(e,t,a){e.exports=a(558)},353:function(e,t,a){},557:function(e,t,a){},558:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),l=(a(353),a(32)),i=a(599),s=a(562),u=a(99),d=(a(228),a(174)),p=a.n(d),m=Object(n.createContext)({state:{},fetchPopular:function(e){},fetchFoundCities:function(e){}}),E=a(218);var f=function(e){var t=Object(n.useContext)(m),a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],s=c[1];return r.a.createElement("div",{className:"calendar"},r.a.createElement(i.a,null,r.a.createElement(E.DatesRangeInput,{disableMinute:!0,closeOnMouseLeave:!0,inline:!0,name:"date",value:o,onChange:function(a,n){var r=n.value;switch(s(r),e.nature){case"departDate":t.setDepartDate(r.slice(0,10));break;case"returnDate":t.setReturnDate(r.slice(13,23))}}})))};function v(){var e=Object(n.useContext)(m),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],d=Object(n.useState)([]),E=Object(l.a)(d,2),f=E[0],v=E[1];Object(n.useEffect)(function(){e.changeSearchedWord(c),e.fetchFoundCities(f)},[f,c]);var h=function(e){e.target.value?(o(e.target.value),console.log(c),b()):(o(""),v([]))},b=function(){p.a.get("https://api.tictactrip.eu/cities/autocomplete/?q=".concat(c)).then(function(e){v(e.data)}).catch(function(e){console.log(e)}),console.log(e.state)};return r.a.createElement(i.a,null,r.a.createElement("div",{className:"search-section city",id:"oki"},r.a.createElement(i.a.Field,null,r.a.createElement(s.a,{focus:!0,icon:"train",iconPosition:"left",className:"s-depart search-input",placeholder:"Saisissez votre gare de d\xe9part...",onChange:h,onClick:function(){return e.changeClicked("cityDepart")},value:e.state.departInput?e.state.departInput:""}),r.a.createElement(s.a,{selected:!0,icon:"train",iconPosition:"left",className:"s-arrivee search-input",placeholder:"Saisissez votre gare d'arriv\xe9e...",onChange:h,onClick:function(){return e.changeClicked("cityArrived")},value:e.state.arrivedInput?e.state.arrivedInput:""}))),r.a.createElement("div",{className:"search-section date"},r.a.createElement(i.a.Field,null,r.a.createElement(s.a,{icon:"calendar",iconPosition:"left",className:"d-depart date-input",placeholder:"Aller",type:"button",onClick:function(){return e.changeClicked("dateDepart")},value:e.state.departDate?e.state.departDate:""}),r.a.createElement(s.a,{icon:"calendar",iconPosition:"left",className:"d-arrivee date-input",placeholder:"Retour",type:"button",onClick:function(){return e.changeClicked("dateRetour")},value:e.state.returnDate?e.state.returnDate:""}))),r.a.createElement("div",{className:"search-section promotion"},r.a.createElement(i.a.Field,null,r.a.createElement(s.a,{icon:"user outline",iconPosition:"left",className:"promotion",placeholder:"Aller",type:"button",onClick:function(){return e.changeClicked("promotion")}}),r.a.createElement(u.a,{onClick:function(){return e.changeClicked("promotion")}},"+"))),r.a.createElement("div",{className:"submit"},r.a.createElement("a",{href:"#calendar",className:"add-reuct"},"Utiliser un code de r\xe9duction"),r.a.createElement(u.a,{positive:!0,type:"submit",onClick:function(){return console.log(e.state)},className:"btn-submit"},"RECHERCHER")))}a(305);function h(){return r.a.createElement("div",{className:"left-container"},r.a.createElement("div",{className:"left-title"},r.a.createElement("h3",null,"Quel est votre trajet ?")),r.a.createElement(v,null))}a(306);var b=a(600),y=a(46);function C(e){var t=Object(n.useContext)(m),a=Object(n.useState)(!0),c=Object(l.a)(a,2),o=c[0],i=c[1];Object(n.useEffect)(function(){i(""===t.state.searchedWord)},[t.state.searchedWord]);var s=function(a){console.log(a),"cityDepart"===e.nature?t.setDepartInput(a):t.setArrivedInput(a)};return r.a.createElement("div",{className:"city-container"},r.a.createElement(b.a,{className:"city-choice"},r.a.createElement(u.a.Group,{basic:!0,vertical:!0},o?t.state&&t.state.popularCities.map(function(e,t){return r.a.createElement(u.a,{key:t,onClick:function(){return s(e.local_name)}},r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Icon,{name:"map marker alternate"}),r.a.createElement(b.a.Content,null,r.a.createElement(b.a.Header,{as:"a"},e.local_name))))}):t.state&&t.state.foundCities.slice(0,7).map(function(e,t){return r.a.createElement(u.a,{key:t,onClick:function(){return s(e.local_name)}},r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Icon,{name:"map marker alternate"}),r.a.createElement(b.a.Content,null,r.a.createElement(b.a.Header,{as:"a"},e.local_name))))}))),r.a.createElement(u.a,{className:"btn-via"},r.a.createElement(y.a,{name:"map marker"}),"VIA"))}var g=a(334);var O=function(e){return r.a.createElement("div",{className:"promo-info-container"},e.infos.map(function(e,t){return r.a.createElement("div",{className:"promo-info-".concat(t),key:t},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.desc),r.a.createElement("a",{href:"https://instagram.com/artkodes"}," ",r.a.createElement(y.a,{name:e.button.icon}),e.button.title))}))};var D=function(){var e=Object(n.useState)("adult"),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(["adult"]),i=Object(l.a)(o,2),d=i[0],p=i[1],m=r.a.createElement("div",{className:"profil-select"},r.a.createElement("span",{className:"list"},r.a.createElement("select",{name:"select-items",id:"solved",onChange:function(e){c(e.target.value)}},r.a.createElement("option",{value:"adult"},"Adulte (26-59)"),r.a.createElement("option",{value:"youth"},"Jeune (0-25)"),r.a.createElement("option",{value:"senior"},"Senior (60)"))),r.a.createElement("div",{className:"promo"},"youth"===a?r.a.createElement(s.a,{action:"OK",type:"number",placeholder:"age"}):r.a.createElement(u.a,{basic:!0,color:"orange",content:"Cartes et Abonnements"})));return r.a.createElement("div",{className:"promo-add-passenger"},m,r.a.createElement("div",{className:"add-promo"},r.a.createElement(u.a,{icon:!0,onClick:function(){d[0]=a,p.apply(void 0,Object(g.a)(d).concat([d]))},className:"btn-add-promo"},r.a.createElement(y.a,{name:"user"}),r.a.createElement("span",null,"AJOUTER UN PASSAGER "))),r.a.createElement(O,{infos:[{title:"Retrouver vos passagers sauvegard\xe9s ?",desc:"Connectez-vous \xe0 votre compte pour acc\xe9der aux passagers enregistr\xe9s lors de vos pr\xe9c\xe9dentes recherches.",button:{title:"SE CONNECTER",icon:"log out"}},{title:"\xc9conomisez gr\xe2ce aux cartes de r\xe9duction",desc:"B\xe9n\xe9ficiez de r\xe9ductions sur vos voyages en train tout au long de l'ann\xe9e.",button:{title:"ACHETER UNE CARTE DE R\xc9DUCTION",icon:"address card outline"}}]}))};function N(){var e=Object(n.useContext)(m),t=r.a.createElement("div",{className:"none"}),a=Object(n.useState)(t),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)("WELCOME"),u=Object(l.a)(s,2),d=u[0],p=u[1],E=Object(n.useState)(""),v=Object(l.a)(E,2),h=v[0],b=v[1];return Object(n.useEffect)(function(){"cityDepart"===e.state.clickedInput?(i(r.a.createElement(C,{nature:"cityDepart"})),p("Choisissez une gare de d\xe9part"),b("city-depart")):"cityArrived"===e.state.clickedInput?(i(r.a.createElement(C,{nature:"cityArrived"})),p("Choisissez une gare d'arriv\xe9e"),b("city-arrived")):"dateDepart"===e.state.clickedInput?(i(r.a.createElement(f,{nature:"departDate"})),p("Choisissez la date du d\xe9part"),b("date-depart")):"dateRetour"===e.state.clickedInput?(i(r.a.createElement(f,{nature:"returnDate"})),p("Choisissez la date du retour"),b("date-retour")):"promotion"===e.state.clickedInput&&(i(r.a.createElement(D,null)),p("Choisissez vos passagers"),b("btn-promo"))},[e.state.clickedInput]),r.a.createElement("div",{className:"right-container"},r.a.createElement("div",{className:"right-pannel-arrow ".concat(h)}),r.a.createElement("div",{className:"right-title"},r.a.createElement("h3",null,d)),o)}a(557);var j=a(57);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach(function(t){Object(j.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var R=function(e,t){switch(t.type){case"FETCH_POPULAR":return k({},e,{popularCities:t.payload});case"FETCH_INPUT":return k({},e,{foundCities:t.payload});case"CLICKED_INPUT":return k({},e,{clickedInput:t.payload});case"SEARCHED_WORD":return k({},e,{searchedWord:t.payload});case"DEPART_INPUT":return k({},e,{departInput:t.payload});case"ARRIVED_INPUT":return k({},e,{arrivedInput:t.payload});case"DEPART_DATE":return k({},e,{departDate:t.payload});case"RETURN_DATE":return k({},e,{returnDate:t.payload});default:return e}},P={foundCities:[],popularCities:[],clickedInput:"",searchedWord:"",departInput:"",arrivedInput:"",departDate:"",returnDate:""};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){var e=Object(n.useReducer)(R,P),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){p.a.get("https://api.comparatrip.eu/cities/popular/7").then(function(e){o(e.data)}).catch(function(e){console.log(e)})},[]);var o=function(e){c({type:"FETCH_POPULAR",payload:e})};return r.a.createElement("div",{className:"App"},r.a.createElement(m.Provider,{value:{state:a,fetchFoundCities:function(e){c({type:"FETCH_INPUT",payload:e})},fetchPopular:o,changeClicked:function(e){c({type:"CLICKED_INPUT",payload:e})},changeSearchedWord:function(e){c({type:"SEARCHED_WORD",payload:e})},setArrivedInput:function(e){console.log(e),c({type:"ARRIVED_INPUT",payload:e})},setDepartInput:function(e){console.log(e),c({type:"DEPART_INPUT",payload:e})},setDepartDate:function(e){console.log(e),c({type:"DEPART_DATE",payload:e})},setReturnDate:function(e){console.log(e),c({type:"RETURN_DATE",payload:e})}}},r.a.createElement(h,null),r.a.createElement(N,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[348,1,2]]]);
//# sourceMappingURL=main.29cac980.chunk.js.map