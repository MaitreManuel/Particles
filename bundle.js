!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n.n(r),i=n(2),a=n(3);n.n(a);const s=document.querySelector("#canvas"),l=s.getContext("2d"),c=[];for(var f=0;f<100;f++)c.push(new i.a(s));const u=new o.a;document.body.appendChild(u.dom);const d=()=>{s.width=window.innerWidth,s.height=window.innerHeight};d(),window.addEventListener("resize",d);const h=()=>{u.begin(),l.clearRect(0,0,s.width,s.height),c.forEach(t=>{t.draw(l),t.update(s)}),u.end(),requestAnimationFrame(h)};requestAnimationFrame(h)},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){var t=function(){function e(t){return o.appendChild(t.dom),t}function n(t){for(var e=0;e<o.children.length;e++)o.children[e].style.display=e===t?"block":"none";r=t}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(t){t.preventDefault(),n(++r%o.children.length)},!1);var i=(performance||Date).now(),a=i,s=0,l=e(new t.Panel("FPS","#0ff","#002")),c=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=e(new t.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:o,addPanel:e,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){s++;var t=(performance||Date).now();if(c.update(t-i,200),t>a+1e3&&(l.update(1e3*s/(t-a),100),a=t,s=0,f)){var e=performance.memory;f.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){i=this.end()},domElement:o,setMode:n}};return t.Panel=function(t,e,n){var r=1/0,o=0,i=Math.round,a=i(window.devicePixelRatio||1),s=80*a,l=48*a,c=3*a,f=2*a,u=3*a,d=15*a,h=74*a,p=30*a,m=document.createElement("canvas");m.width=s,m.height=l,m.style.cssText="width:80px;height:48px";var v=m.getContext("2d");return v.font="bold "+9*a+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=n,v.fillRect(0,0,s,l),v.fillStyle=e,v.fillText(t,c,f),v.fillRect(u,d,h,p),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(u,d,h,p),{dom:m,update:function(l,y){r=Math.min(r,l),o=Math.max(o,l),v.fillStyle=n,v.globalAlpha=1,v.fillRect(0,0,s,d),v.fillStyle=e,v.fillText(i(l)+" "+t+" ("+i(r)+"-"+i(o)+")",c,f),v.drawImage(m,u+a,d,h-a,p,u,d,h-a,p),v.fillRect(u+h-a,d,a,p),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(u+h-a,d,a,i((1-l/y)*p))}}},t})},function(t,e,n){"use strict";class r{constructor(t){this.color="#ffffff",this.w=10,this.h=10,this.x=5*Math.random()+5,this.y=5*Math.random()+5,this.speedX=Math.random()>.5?Math.random():-Math.random(),this.speedY=Math.random()>.5?Math.random():-Math.random(),this.angleX=Math.random()>.5?Math.random():-Math.random(),this.angleY=Math.random()>.5?Math.random():-Math.random()}update(t){if(this.x+=this.speedX+this.angleX,this.y+=this.speedY+this.angleY,this.x<0||this.x+this.w>t.width){const t=this.x<0?1:-1;this.angleX=2*Math.random()*t,this.speedX=-this.speedX}if(this.y<0||this.y+this.h>t.height){const t=this.y<0?1:-1;this.angleY=2*Math.random()*t,this.speedY=-this.speedY}}draw(t){t.fillStyle=this.color,t.fillRect(this.x,this.y,this.w,this.h)}}e.a=r},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(6)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(5)(void 0)).push([t.i,"body {\n    margin: 0;\n    overflow: hidden;\n}\ncanvas {\n    background-color: black;\n}\n",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o),a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# "+("sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t)))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=p[r.id];if(o){o.refs++;for(a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(f(r.parts[a],e))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(f(r.parts[a],e));p[r.id]={id:r.id,refs:1,parts:i}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),i(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),i(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function f(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var c=b++;n=y||(y=s(e)),r=u.bind(null,n,c,!1),o=u.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),r=h.bind(null,n,e),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=d.bind(null,n),o=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function u(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function h(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var p={},m=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),y=null,b=0,g=[],w=n(7);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a];(l=p[s.id]).refs--,i.push(l)}t&&r(o(t,e),e);for(a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete p[l.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);