var m=Object.defineProperty;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var l=(t,o,e)=>o in t?m(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,c=(t,o)=>{for(var e in o||(o={}))f.call(o,e)&&l(t,e,o[e]);if(s)for(var e of s(o))p.call(o,e)&&l(t,e,o[e]);return t};import{_ as n,d as _,o as y,c as d,r as v,u as w,s as h,a as b,b as $,e as k,f as E,h as P,i as u}from"./vendor.5f546c64.js";function g(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function q(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function M(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function R(t){switch(t){case"../../examples/personal/layouts/home.layout.vue":return n(()=>import("./home.layout.804f363f.js"),["assets/home.layout.804f363f.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.5f546c64.js"]);case"../../examples/project/layouts/home.layout.vue":return n(()=>import("./home.layout.6eb55efc.js"),["assets/home.layout.6eb55efc.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.5f546c64.js"]);default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function I(t){switch(t){case"../../src/layouts/home.layout.vue":return n(()=>import("./home.layout.0018751b.js"),["assets/home.layout.0018751b.js","assets/plugin-vue_export-helper.5a098b48.js","assets/vendor.5f546c64.js"]);default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}function D(t){switch(t){default:return new Promise(function(o,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+t)))})}}async function T(t,o){const e=o.split("/");switch(e.splice(0,1),e.splice(-2,2),e.length){case 0:return(await D(`../../layouts/${t}.layout.vue`)).default;case 1:return(await I(`../../${e[0]}/layouts/${t}.layout.vue`)).default;case 2:return(await R(`../../${e[0]}/${e[1]}/layouts/${t}.layout.vue`)).default;case 3:return(await M(`../../${e[0]}/${e[1]}/${e[2]}/layouts/${t}.layout.vue`)).default;case 4:return(await q(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/layouts/${t}.layout.vue`)).default;case 5:return(await g(`../../${e[0]}/${e[1]}/${e[2]}/${e[3]}/${e[4]}/layouts/${t}.layout.vue`)).default;default:throw new Error("cannot assign layout to page with depth more than 5")}}const A=["href"],U=_({props:{href:null},setup(t){const o="/vpage/";return(e,a)=>(y(),d("a",{href:w(o)+t.href.slice(1)},[v(e.$slots,"default")],8,A))}});async function V(t){const o=h(t),e=b(()=>c({title:"VPage"},o.pageExports.frontmatter)),a=$(e.value.layout?await T(e.value.layout,o._pageId):void 0),r=k({setup(){return P(e),()=>a.value?u(a.value,{},{default:()=>u(o.Page,o.pageProps)}):u(o.Page,o.pageProps)}}),i=E();return r.use(i),r.component("a-router",U),{app:r,head:i,context:o,frontmatter:e,layout:a}}export{V as c,T as r};