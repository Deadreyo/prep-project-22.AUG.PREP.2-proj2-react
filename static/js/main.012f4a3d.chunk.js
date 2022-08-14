(this["webpackJsonpprep-template"]=this["webpackJsonpprep-template"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),r=n.n(s),i=n(2),o=(n(14),n.p+"static/media/mlh-prep.270f6887.png"),u=n(0);function l(e){var t=e.error;return Object(u.jsxs)("div",{children:["Error: ",t.message]})}n(16);function d(e){var t=e.isLoaded,n=e.results;return Object(u.jsxs)("div",{className:"Results",children:[!t&&Object(u.jsx)("h2",{children:"Loading..."}),console.log(n),t&&n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:n.weather[0].main}),Object(u.jsxs)("p",{children:["Feels like ",n.main.feels_like,"\xb0C"]}),Object(u.jsx)("i",{children:Object(u.jsxs)("p",{children:[n.name,", ",n.sys.country]})})]})]})}var j=n(4),p=n(6),b=n.n(p),f=n(9),m=n(3),h=n.n(m),g=(n(26),{maxWidth:"800px",margin:"0 auto",color:"#2b2929",marginTop:"5px"});function O(e){var t=e.city,n=e.changeCity,c=a.a.useState({lat:null,lng:null}),s=Object(i.a)(c,2),r=(s[0],s[1]),o=function(){var e=Object(f.a)(b.a.mark((function e(t){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.geocodeByAddress)(t);case 2:return c=e.sent,e.next=5,Object(m.getLatLng)(c[0]);case 5:a=e.sent,n(t),r(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsx)(h.a,{value:t,onChange:n,onSelect:o,children:function(e){var t=e.getInputProps,n=e.suggestions,c=e.getSuggestionItemProps,a=e.loading;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",Object(j.a)({className:"search-input"},t({placeholder:"Type city"}))),Object(u.jsxs)("div",{style:g,children:[a?Object(u.jsx)("div",{children:"...loading"}):null,n.map((function(e){var t={backgroundColor:e.active?"#86c9e3":"#fff"};return Object(u.jsx)("div",Object(j.a)(Object(j.a)({},c(e,{style:t})),{},{children:e.description}))}))]})]})}})})}n(27);var x=n.p+"static/media/cap.474e6898.png",v=n.p+"static/media/gloves.45497ed2.png",w=n.p+"static/media/jacket.58fadea5.png",y=n.p+"static/media/raincoat.376a8ef2.png",S=n.p+"static/media/scarf.fbb31feb.png",k=n.p+"static/media/sunglasses.6c5f1538.png",L=n.p+"static/media/suncream.d8793979.png",N=n.p+"static/media/umbrella.df170598.png",C=n.p+"static/media/water_proof_boots.a48e94f8.png",I=n.p+"static/media/watch.f0a65ecb.png",E=n.p+"static/media/goggles.faf692a2.png",M=n.p+"static/media/flashlight.6563cb05.png",z=n.p+"static/media/mask.e0e07086.png",F=function(e){var t=e.weatherKind,n=function(e){switch(e){case"Rain":return[y,C,N];case"Snow":return[k,v,w,S];case"Clear":return[k,x,L];case"Clouds":return[x,I];case"Tornado":return[E,M];case"Drizzle":return[y,N,C];case"Thunderstorm":return[y,M,C];case"Squall":case"Ash":case"Dust":case"Sand":case"Fog":case"Haze":case"Smoke":case"Mist":return[I,E,z];default:return}};return Object(u.jsx)("div",{className:"items-container",children:void 0!==n(t)&&n(t).map((function(e,t){return Object(u.jsx)("div",{className:"items-card",children:Object(u.jsx)("img",{src:e,alt:"required item"})},t)}))})};function R(e){var t=e.getUserLocation;return Object(u.jsx)("button",{onClick:t,className:"get-user-loc-btn",children:"Get My Location"})}var T=n(7),J=n.n(T);n(28);function P(e){var t=e.setIsLoaded,n=e.setResults,a=e.setError,s=Object(c.useRef)(null),r=Object(c.useRef)(null),o=Object(c.useState)(-70.9),l=Object(i.a)(o,2),d=l[0],j=(l[1],Object(c.useState)(42.35)),p=Object(i.a)(j,2),b=p[0],f=(p[1],Object(c.useState)(9)),m=Object(i.a)(f,2),h=m[0];m[1];return Object(c.useEffect)((function(){r.current||(r.current=new J.a.Map({container:s.current,style:"mapbox://styles/mapbox/streets-v11",center:[d,b],zoom:h}),r.current.on("click",(function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.lngLat.lat,"&lon=").concat(e.lngLat.lng,"&units=metric&appid=").concat("192ee27e9e33ab104f4138ddd5ee752f")).then((function(e){return e.json()})).then((function(e){200!==e.cod?t(!1):(t(!0),n(e))}),(function(e){t(!0),a(e)}))})))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{ref:s,className:"map-container"})})}function U(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),j=r[0],p=r[1],b=Object(c.useState)("New York City"),f=Object(i.a)(b,2),m=f[0],h=f[1],g=Object(c.useState)(null),x=Object(i.a)(g,2),v=x[0],w=x[1],y=Object(c.useState)(""),S=Object(i.a)(y,2),k=S[0],L=S[1];return Object(c.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(m,"&units=metric&appid=").concat("192ee27e9e33ab104f4138ddd5ee752f")).then((function(e){return e.json()})).then((function(e){200!==e.cod?p(!1):(p(!0),w(e),L(e.weather[0].main))}),(function(e){p(!0),a(e)}))}),[m]),n?Object(u.jsx)(l,{error:n}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:j&&v?k:void 0,children:[Object(u.jsx)("img",{className:"logo",src:o,alt:"MLH Prep Logo"}),Object(u.jsx)("h2",{children:"Enter a city below \ud83d\udc47"}),Object(u.jsx)(O,{city:m,changeCity:h}),Object(u.jsx)(R,{getUserLocation:function(){p(!1),new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,c=t.coords.longitude;e({lat:n,lon:c})}),n)})).then((function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.lat,"&lon=").concat(e.lon,"&units=metric&appid=").concat("192ee27e9e33ab104f4138ddd5ee752f")).then((function(e){return e.json()})).then((function(e){p(!0),h(e.name),w(e)}),(function(e){p(!0),a(e)}))}))}}),Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)(d,{isLoaded:j,results:v}),j&&v&&Object(u.jsx)(F,{weatherKind:v.weather[0].main})]}),Object(u.jsx)(P,{setIsLoaded:p,setResults:w,setError:a})]})})}J.a.accessToken="pk.eyJ1Ijoicm95Z2JldiIsImEiOiJjbDFjYzF2ajUwMHgzM2NwcXBzdWVxM3ZvIn0.2k8N-UN2Y7ZdT5vwml9QAw";n(29),n(30);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(U,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.012f4a3d.chunk.js.map