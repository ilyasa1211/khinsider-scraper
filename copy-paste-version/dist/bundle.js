(()=>{"use strict";var t={156:(t,e,n)=>{n(927).A.main()},927:(t,e,n)=>{n.d(e,{A:()=>c});var o=n(643),i=n(455),r=n(864);class c{static main(){return t=this,e=void 0,c=function*(){const t=[],e=r.A.showOptions(),n=yield o.A.getDownloadPageUrls();for(let o=0;o<n.length;o++){const r=yield i.A.getDownloadUrl(n[o],e);t.push(r)}r.A.showResult(t)},new((n=void 0)||(n=Promise))((function(o,i){function r(t){try{u(c.next(t))}catch(t){i(t)}}function a(t){try{u(c.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}u((c=c.apply(t,e||[])).next())}));var t,e,n,c}}},643:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(864);class i{static getDownloadPageUrls(){return t=this,e=void 0,i=function*(){const t=[],e=(yield o.A.htmlFetch(window.location.href)).querySelectorAll("#songlist > tbody > tr");return Array.from(e).slice(1,-1).forEach((function(e){const n=e.querySelector("td:nth-child(3) > a");t.push(n.href)})),t},new((n=void 0)||(n=Promise))((function(o,r){function c(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}u((i=i.apply(t,e||[])).next())}));var t,e,n,i}}},455:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(864);class i{static getDownloadUrl(t,e){return n=this,i=void 0,c=function*(){const n=yield o.A.htmlFetch(t),i=`#pageContent > p:nth-child(${e.number}) > a`;return n.querySelector(i).getAttribute("href")},new((r=void 0)||(r=Promise))((function(t,e){function o(t){try{u(c.next(t))}catch(t){e(t)}}function a(t){try{u(c.throw(t))}catch(t){e(t)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(o,a)}u((c=c.apply(n,i||[])).next())}));var n,i,r,c}}},613:()=>{},864:(t,e,n)=>{n.d(e,{A:()=>i});var o=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function c(t){try{u(o.next(t))}catch(t){r(t)}}function a(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}u((o=o.apply(t,e||[])).next())}))};class i{static showOptions(){let t={number:10,type:"flac"};return"1"==prompt("Choose:\n1. MP3\n2. FLAC")&&(t={number:9,type:"mp3"}),console.log(`GETTING LINKS FOR ${t.type}`),t}static showResult(t){Array.from(document.body.children).forEach((t=>t.remove()));const e=document.createElement("pre"),n=document.createElement("input"),i=document.createElement("p");i.textContent="Copied!",i.setAttribute("id","copy-message"),i.style.visibility="hidden",e.textContent=t.join("\n"),n.setAttribute("type","button"),n.setAttribute("id","copy-button"),n.setAttribute("value","Copy to clipboard"),n.onclick=function(t){return o(this,void 0,void 0,(function*(){navigator.clipboard.writeText(e.textContent),i.style.visibility="visible",setTimeout((()=>{i.style.visibility="hidden"}),2e3)}))},document.body.appendChild(e),document.body.appendChild(n),document.body.appendChild(i)}static htmlFetch(t){return o(this,void 0,void 0,(function*(){const e=yield fetch(t),n=yield e.text();return(new DOMParser).parseFromString(n,"text/html")}))}}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(156),n(927),n(643),n(455),n(613),n(864)})();