parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FOZT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.capitalize=exports.randomElement=exports.random=void 0;var r=function(r,e){return Math.floor(Math.random()*e)+r};exports.random=r;var e=function(r){return r[Math.floor(Math.random()*r.length)]};exports.randomElement=e;var t=function(r){return r.charAt(0).toUpperCase()+r.slice(1)};exports.capitalize=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";var n=require("./utils"),e=[".",",","\n",";",":","--"],t=200,r=80;fetch("https://raw.githubusercontent.com/Rafi993/poem-generator/gh-pages/ngrams.json")).then(function(n){return n.json()}).then(function(i){var o=Object.keys(i).filter(function(n){return![].concat(e,["an","the"]).includes(n)}),c=o[(0,n.random)(0,o.length)];document.getElementById("title").innerHTML=c;for(var a="",l="",u=0;u<t;u++){var d=i[c];d&&(0===u&&(l+=(0,n.capitalize)(c)),(c=(0,n.randomElement)(d))&&(e.includes(c)?l+=c:l=l+" "+c,l.length>r&&(a+=l+"<br/>",l="")))}a+=l,document.getElementById("poem").innerHTML=a});
},{"./utils":"FOZT"}]},{},["Focm"], null)
//# sourceMappingURL=/sonnet-generator.1239110b.js.map