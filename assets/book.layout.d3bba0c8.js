import{t as b,v as x,c as d,d as _,n as m,o as c,x as w,w as s,q as v,y as u,z as y,A as C,f as g,j as e,l as a,B as P,k as o}from"./vendor.a972abbb.js";import{u as S}from"./_default.page.client.ts.10146dad.js";b();z();x();let k=!1;function z(){p(),R(p),B(()=>k)}function p(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function R(l){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&l()})}function B(l){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&l()})}function N(){const l=S();return{origin:d(()=>{var t;return((t=l.urlParsedServer)==null?void 0:t.origin)||l.urlParsed.origin}),pathname:d(()=>{var r;const t=((r=l.urlParsedServer)==null?void 0:r.pathname)||l.urlParsed.pathname;return t!=="/"&&t.endsWith("/")?t.slice(0,t.length-1):t}),search:d(()=>{var t;return((t=l.urlParsedServer)==null?void 0:t.search)||l.urlParsed.search}),hash:d(()=>l.urlParsed.hash)}}const i=_({props:{href:null,activeClass:null},setup(l){const{pathname:t}=N();return(r,f)=>{const h=m("a-router");return c(),w(h,{href:l.href,class:u({[l.activeClass||"text-blue-700"]:y(t)==l.href})},{default:s(()=>[v(r.$slots,"default")]),_:3},8,["href","class"])}}}),j={class:"absolute inset-0 grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]"},V={class:"flex justify-center"},A=o(" VPage "),E=e("hr",{class:"mt-4"},null,-1),I={class:"mt-6 overflow-hidden"},L={class:"space-y-4"},q=o(" Introduction "),D=o(" Installation "),U={class:"ml-4 mt-2 space-y-1"},W=o(" Requirements "),$=o(" Install "),F=o(" Run development server "),H=o(" Getting Started "),O={class:"ml-4 mt-2 space-y-1"},G=o(" Start from an example "),M=o(" Write a new page "),T=o(" Customize design "),J=o(" Publish website "),K=e("div",{class:"font-semibold"},"Advanced",-1),Q={class:"ml-4 mt-2 space-y-1"},X=o(" Architecture "),Y=o(" Router "),Z=o(" Organize a large website "),ee=o(" SEO "),te=o(" Data fetching "),se=e("a",{class:"h-6",href:"https://github.com/lem0nle/vpage",target:"_blank",rel:"noopener"},[e("svg",{class:"h-6 text-gray-400 fill-current","aria-hidden":"true",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})])],-1),le={class:"col-start-2 overflow-scroll"},ae={class:"prose mx-auto p-6"},oe=e("footer",{class:"h-16"},null,-1),re=_({setup(l){const t=C(!0),r=()=>t.value=!t.value;return(f,h)=>{const n=m("a-router");return c(),g("article",j,[e("div",{class:u(["row-span-2 overflow-hidden",{"md:w-0":!t.value,"w-0 md:w-64":t.value}])},[e("aside",{class:u(["fixed inset-0 md:w-64 overflow-scroll bg-gray-50 z-10 p-6 transition ease-in-out transform",{"md:-translate-x-64":!t.value,"hidden md:block md:translate-x-0":t.value}])},[e("div",V,[a(n,{href:"/",class:"text-lg font-serif font-bold"},{default:s(()=>[A]),_:1}),t.value?P("",!0):(c(),g("button",{key:0,class:"md:hidden absolute top-5 left-6 text-2xl text-gray-400 hover:text-gray-300 focus:outline-none",onClick:r}," \xD7 "))]),E,e("nav",I,[e("ul",L,[e("li",null,[a(i,{class:"font-semibold",href:"/docs"},{default:s(()=>[q]),_:1})]),e("li",null,[a(i,{class:"font-semibold",href:"/docs/installation"},{default:s(()=>[D]),_:1}),e("ul",U,[e("li",null,[a(n,{href:"/docs/installation#requirements"},{default:s(()=>[W]),_:1})]),e("li",null,[a(n,{href:"/docs/installation#install"},{default:s(()=>[$]),_:1})]),e("li",null,[a(n,{href:"/docs/installation#run-development-server"},{default:s(()=>[F]),_:1})])])]),e("li",null,[a(i,{class:"font-semibold",href:"/docs/getting-started"},{default:s(()=>[H]),_:1}),e("ul",O,[e("li",null,[a(n,{href:"/docs/getting-started#start-from-an-example"},{default:s(()=>[G]),_:1})]),e("li",null,[a(n,{href:"/docs/getting-started#write-a-new-page"},{default:s(()=>[M]),_:1})]),e("li",null,[a(n,{href:"/docs/getting-started#customize-design"},{default:s(()=>[T]),_:1})]),e("li",null,[a(n,{href:"/docs/getting-started#publish-website"},{default:s(()=>[J]),_:1})])])]),e("li",null,[K,e("ul",Q,[e("li",null,[a(i,{href:"/docs/advanced/architecture","active-class":"text-blue-700 font-medium"},{default:s(()=>[X]),_:1})]),e("li",null,[a(i,{href:"/docs/advanced/router","active-class":"text-blue-700 font-medium"},{default:s(()=>[Y]),_:1})]),e("li",null,[a(i,{href:"/docs/advanced/organize","active-class":"text-blue-700 font-medium"},{default:s(()=>[Z]),_:1})]),e("li",null,[a(i,{href:"/docs/advanced/seo","active-class":"text-blue-700 font-medium"},{default:s(()=>[ee]),_:1})]),e("li",null,[a(i,{href:"/docs/advanced/data","active-class":"text-blue-700 font-medium"},{default:s(()=>[te]),_:1})])])])])])],2)],2),e("header",{class:"col-start-2 px-6 py-4 flex items-center justify-between"},[e("button",{class:"-ml-2.5 text-2xl font-medium text-gray-400 px-3 py-1 rounded hover:bg-gray-100 focus:outline-none",onClick:r}," \u2261 "),se]),e("main",le,[e("article",ae,[v(f.$slots,"default")]),oe])])}}});export{re as default};
