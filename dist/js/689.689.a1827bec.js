(self["webpackChunkweather_test"]=self["webpackChunkweather_test"]||[]).push([[689],{1517:(e,t,r)=>{"use strict";r.d(t,{w:()=>c});r(5212),r(1539),r(4553),r(561);var n=r(4870),o=(0,n.iH)(localStorage.getItem("weather-units")||"Metric"),a=(0,n.iH)([]),u=(0,n.iH)(null),l=(0,n.Fl)((function(){return a.value.some((function(e){var t;return e.Key===(null===(t=u.value)||void 0===t?void 0:t.Key)}))})),i=(0,n.iH)({}),s=(0,n.iH)({});function c(){function e(e){var t=a.value.findIndex((function(t){return t.Key===e.Key}));t>=0?a.value.splice(t,1):a.value.unshift(e)}function t(){o.value="Metric"===o.value?"Imperial":"Metric",localStorage.setItem("weather-units",o.value)}function r(e,t){i.value[e]=t}function c(e,t){s.value[e]=t}return{units:(0,n.Fl)((function(){return o.value})),conditionsHash:(0,n.Fl)((function(){return i.value})),isCurrentsFavorite:(0,n.Fl)((function(){return l.value})),forecastsHash:(0,n.Fl)((function(){return s.value})),toggleUnits:t,favorites:a,currentPlace:u,saveCondition:r,saveForecast:c,toggleFavorite:e}}},8689:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var n=r(3396),o=r(4870),a=r(7139),u=r(5405),l=r(9249),i=(0,n._)("p",{class:"uppercase text-[9px] leading-none font-bold text-gray-400 text-right"},"Theme",-1);const s=(0,n.aZ)({setup:function(e){var t=(0,l.v)(),r=t.turnDark,s=t.turnLight,c=t.turnSystemTheme,f=[{label:"System",action:c},{label:"Dark",action:r},{label:"Light",action:s}],p=(0,o.iH)(0),d=(0,o.Fl)((function(){return f[p.value]}));function v(){p.value=(p.value+1)%f.length,d.value.action()}return function(e,t){return(0,n.wg)(),(0,n.iD)("div",{class:"relative w-[70px] h-6 cursor-pointer select-none",onClick:v},[i,(0,n.Wm)(u.uT,{name:"absolute-fade"},{default:(0,n.w5)((function(){return[((0,n.wg)(),(0,n.iD)("p",{key:p.value,class:"text-right w-full uppercase text-xs font-bold"},(0,a.zw)((0,o.SU)(d).label),1))]})),_:1})])}}}),c=s,f=c;var p=r(1517),d=(0,n._)("p",{class:"uppercase text-[9px] leading-none font-bold text-gray-400 text-right"},"Units",-1);const v=(0,n.aZ)({setup:function(e){var t=(0,p.w)(),r=t.units,l=t.toggleUnits;return function(e,t){return(0,n.wg)(),(0,n.iD)("div",{class:"relative w-[70px] h-6 cursor-pointer select-none",onClick:t[0]||(t[0]=function(){return(0,o.SU)(l)&&(0,o.SU)(l).apply(void 0,arguments)})},[d,(0,n.Wm)(u.uT,{name:"absolute-fade"},{default:(0,n.w5)((function(){return[((0,n.wg)(),(0,n.iD)("p",{key:(0,o.SU)(r),class:"text-right w-full uppercase text-xs font-bold"},(0,a.zw)((0,o.SU)(r)),1))]})),_:1})])}}}),x=v,g=x;var h=function(e){return(0,n.dD)("data-v-f77dbf64"),e=e(),(0,n.Cn)(),e},m={class:"flex flex-col min-h-full overflow-hidden dark:text-white"},y={class:"p-4 border-b border-blue-900/20 dark:bg-gray-700 capitalize flex items-center"},w={class:"w-32 mr-10"},b=h((function(){return(0,n._)("img",{class:"filter hue-rotate-180 invert dark:hue-rotate-0 dark:invert-0",src:"https://www.accuweather.com/images/logos/accuweather.svg",alt:"Logo"},null,-1)})),_={class:"ml-auto space-x-6 mr-10"},k=(0,n.Uk)("Home"),S=h((function(){return(0,n._)("span",null,"Favorites",-1)})),U={key:0,class:"rounded-full py-1 px-[6px] text-[9px] leading-none font-bold absolute left-[100%] -top-0.5 ml-1 bg-gray-600 text-white dark:text-gray-900 dark:bg-gray-200"},M={class:"flex-grow p-4 dark:bg-gray-800"},F={class:"p-4 dark:bg-gray-900 bg-gray-800 text-white flex items-center"},I=h((function(){return(0,n._)("span",{class:"font-light text-xs"},"@obuhhh, 2022",-1)}));const D=(0,n.aZ)({setup:function(e){var t=(0,p.w)(),r=t.favorites;return function(e,t){var u=(0,n.up)("router-link"),l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("header",y,[(0,n._)("div",w,[(0,n.Wm)(u,{to:{name:e.$routeNames.home}},{default:(0,n.w5)((function(){return[b]})),_:1},8,["to"])]),(0,n._)("div",_,[(0,n.Wm)(u,{class:"router-link",to:{name:e.$routeNames.home}},{default:(0,n.w5)((function(){return[k]})),_:1},8,["to"]),(0,n.Wm)(u,{class:"router-link relative",to:{name:e.$routeNames.favorites}},{default:(0,n.w5)((function(){return[S,(0,o.SU)(r).length?((0,n.wg)(),(0,n.iD)("span",U,(0,a.zw)((0,o.SU)(r).length),1)):(0,n.kq)("",!0)]})),_:1},8,["to"])])]),(0,n._)("div",M,[(0,n.Wm)(l)]),(0,n._)("footer",F,[I,(0,n.Wm)(g,{class:"ml-auto"}),(0,n.Wm)(f,{class:"ml-12"})])])}}});var H=r(89);const A=(0,H.Z)(D,[["__scopeId","data-v-f77dbf64"]]),C=A},9933:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.exports=t,e.exports.__esModule=!0,e.exports["default"]=e.exports},8419:(e,t,r)=>{function n(e){if(Array.isArray(e))return e}r(9753),e.exports=n,e.exports.__esModule=!0,e.exports["default"]=e.exports},4548:(e,t,r)=>{r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(9753);var n=r(7486);function o(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,u=e},f:function(){try{l||null==r["return"]||r["return"]()}finally{if(i)throw u}}}}e.exports=o,e.exports.__esModule=!0,e.exports["default"]=e.exports},6066:(e,t,r)=>{function n(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done);u=!0)if(a.push(n.value),t&&a.length===t)break}catch(i){l=!0,o=i}finally{try{u||null==r["return"]||r["return"]()}finally{if(l)throw o}}return a}}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),e.exports=n,e.exports.__esModule=!0,e.exports["default"]=e.exports},8826:e=>{function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.exports=t,e.exports.__esModule=!0,e.exports["default"]=e.exports},2:(e,t,r)=>{var n=r(8419),o=r(6066),a=r(7486),u=r(8826);function l(e,t){return n(e)||o(e,t)||a(e,t)||u()}e.exports=l,e.exports.__esModule=!0,e.exports["default"]=e.exports},7486:(e,t,r)=>{r(7042),r(1539),r(8309),r(1038),r(8783),r(4916),r(7601);var n=r(9933);function o(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}e.exports=o,e.exports.__esModule=!0,e.exports["default"]=e.exports},89:(e,t,r)=>{"use strict";var n=r(2)["default"],o=r(4548)["default"];r(9070),t.Z=function(e,t){var r,a=e.__vccOpts||e,u=o(t);try{for(u.s();!(r=u.n()).done;){var l=n(r.value,2),i=l[0],s=l[1];a[i]=s}}catch(c){u.e(c)}finally{u.f()}return a}}}]);
//# sourceMappingURL=689.689.a1827bec.js.map