!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MoonPhaseWidget=e():t.MoonPhaseWidget=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";const o=window.localStorage||{},i={ip:"104.131.241.248",city:"Gramercy Park",region:"New York",country:"US",loc:"40.7402,-73.9996",org:"AS14061 DigitalOcean, LLC",postal:"10011",timezone:"America/New_York",readme:"https://ipinfo.io/missingauth"};e.a=async function(){let t=function(){const t="localStorageTest";try{return o.setItem(t,t),o.removeItem(t),!0}catch(t){return!1}}(),e=t&&JSON.parse(o.getItem("mph-widget-geodata"));if(e)return e;try{const t=await fetch("https://ipinfo.io/json");t.ok&&(e=await t.json())}catch(t){console.warn(t)}e=e||i;const[n,r]=e.loc.split(",");return Object.assign(e,{latitude:parseFloat(n),longitude:parseFloat(r)}),t&&o.setItem("mph-widget-geodata",JSON.stringify(e)),e}},function(t,e,n){"use strict";e.a=function(t,e){return`\n<div class="mph-widget">\n    <div class="mph-row">\n        <div class="current-date">${t.dateFmt}</div>\n    </div>\n    <div class="mph-row">\n        <div class="current-place">${e.city}, ${e.country}</div>\n    </div>\n    <div class="mph-row">\n        <div class="moon-phase-ico">\n            <img src="${t.phaseIco}" />\n        </div>\n    </div>\n    <div class="mph-row">\n        <div class="phase-name">${t.phase}</div>\n    </div>\n    <div class="mph-row">\n        <div class="zodiac-name">Moon in <strong>${t.zodiac}</strong></div>\n    </div>\n    <div class="mph-row">\n        <div>Set: </div>\n        <div class="moon-time">${t.set}</div>\n    </div>\n    <div class="mph-row">\n        <div>Rise: </div>\n        <div class="moon-time">${t.rise}</div>\n    </div>\n    <div class="mph-row mph-link">\n        <a href="${t.link}" target="_blank">${t.linkLabel}</a>\n    </div>\n</div>\n    `}},function(t,e,n){"use strict";var o=n(0),i=n(1);e.a=class{constructor(t="moon-phase-widget",e=o.a,n=i.a){this.containerId=t,this.el=document.getElementById(t),this.getGeoDataFn=e,this.renderFn=n,this.mount().catch(t=>console.log(t))}async mount(){const t=await this.getGeoDataFn(),e=await this.getMoonPhaseData(t.latitude,t.longitude);this.el.innerHTML=this.renderFn(e,t)}async getMoonPhaseData(t,e){const n=await fetch("https://moonorganizer.com/api/public/moon-phase",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({latitude:t,longitude:e,date:new Date})});return await n.json()}}},,,function(t,e,n){"use strict";n.r(e);var o=n(2);n.d(e,"MoonPhaseWidget",(function(){return o.a}));var i=n(0);n.d(e,"getGeoData",(function(){return i.a}));var r=n(1);n.d(e,"renderWidgetHtml",(function(){return r.a}))}])}));