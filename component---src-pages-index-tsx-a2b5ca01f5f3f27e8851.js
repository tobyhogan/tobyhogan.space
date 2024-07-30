"use strict";(self.webpackChunktobyhogan_space=self.webpackChunktobyhogan_space||[]).push([[691],{625:function(e,t,r){var a=r(7294);t.Z=function(){return a.createElement("div",{className:""},a.createElement("p",{className:"text-center my-12 font-bold"},"© tobyhogan.space 2024"))}},5811:function(e,t,r){var a=r(7294),n=r(8318),l=r(80);t.Z=function(){const{0:e,1:t}=(0,a.useState)(!1),r=(0,a.useRef)(null);var c;c=r,(0,a.useEffect)((()=>{function e(e){c.current&&!c.current.contains(e.target)&&t(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[c]);const{0:o,1:s}=(0,a.useState)(!1);(0,a.useEffect)((()=>{localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),s(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),s(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","dark"),document.body.classList.add("dark"),s(!0))}),[]);const i=a.createElement(a.Fragment,null,a.createElement("a",{href:"/",className:"underline hover:bg-grayNew-275"},"HOME"),a.createElement("a",{href:"/blog",className:"underline hover:bg-grayNew-275"},"BLOG"),a.createElement("a",{href:"/patch-notes",className:"underline hover:bg-grayNew-275"},"PATCHES"),a.createElement("a",{href:"/resources",className:"underline hover:bg-grayNew-275"},"RESOURCES"),a.createElement("a",{href:"/personal",className:"underline hover:bg-grayNew-275"},"ME"),a.createElement("a",{href:"/info",className:"underline hover:bg-grayNew-275"},"INFO"));return a.createElement("div",{className:"flex flex-row mx-auto w-fit mb-8"},a.createElement("a",{href:"/",className:"mt-5 ml-4 mr-4 text-center text-neutral-500 text-lg tracking-wider hover:underline"},"tobyhogan.space"),a.createElement("div",{className:"FullNav"},a.createElement("ul",{className:"my-auto pt-5 [&>a]:ml-5 text-md tracking-wide list-none"},i)),a.createElement("div",{className:"ToggleNav"},a.createElement("button",{onClick:()=>{t((e=>!e))}},a.createElement(l.xXU,{className:"ml-4 mt-5",size:24})),e?a.createElement("div",{ref:r,className:"border-1 border-black pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-sm"},a.createElement("ul",{className:"flex flex-col text-start ml-3 [&>a]:mb-1"},i)):null),a.createElement("button",{onClick:function(){"light"==localStorage.getItem("theme")?(localStorage.setItem("theme","dark"),document.body.classList.add("dark"),document.body.classList.remove("light"),s(!0)):"dark"==localStorage.getItem("theme")&&(localStorage.setItem("theme","light"),document.body.classList.add("light"),document.body.classList.remove("dark"),s(!1))},className:"mt-3 ml-8"},a.createElement(n.NrT,{size:22})))}},1163:function(e,t,r){r.r(t),r.d(t,{Head:function(){return m},default:function(){return i}});var a=r(7294),n=r.p+"static/habitazen-ba6fd94a16482b69da1dcf08ecd84dec.png",l=r(5811),c=r(625);const o={margin:"auto",justifyContent:"space-between"},s={backgroundColor:"#f1e9e9",border:"2px solid gray",borderRadius:"8px",width:"28%",margin:"1%",textAlign:"center",display:"flex",flexDirection:"column"};var i=()=>a.createElement("main",{className:""},a.createElement(l.Z,null),a.createElement("div",{className:"px-8 mx-auto w-fit"},a.createElement("h1",{className:"mb-3"},"Toby: Indie Dev"),a.createElement("p",{className:"w-64 text-center text-md"},"Hey I'm Toby, a UK based software developer; making some stuff people hopefully find useful :)"),a.createElement("p",{className:"text-center my-5 text-lg"},"Some of my projects: ")),a.createElement("div",{className:"mx-auto rounded-md w-fit"},a.createElement("div",{style:o,className:"WidgetsRow"},a.createElement("div",{style:s,className:"ProjectWidget"},a.createElement("a",{href:"https://tobyhogan.github.io/habit-tracker-landing-page/",target:"_blank"},a.createElement("h5",{className:"mt-2 underline"},"Habitazen"),a.createElement("img",{src:n,className:"Image1"}),a.createElement("p",{className:"mb-3"},"A flexible habit tracker."))),a.createElement("div",{style:s,className:"ProjectWidget"},a.createElement("p",null,"To be added...")),a.createElement("div",{style:s,className:"ProjectWidget"},a.createElement("p",null,"To be added..."))),a.createElement("div",null),a.createElement("div",null)),a.createElement(c.Z,null));const m=()=>a.createElement("title",null,"Home Page")},3621:function(e,t,r){r.d(t,{w_:function(){return f}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),c=["attr","size","title"];function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>a.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function f(e){return t=>a.createElement(b,s({attr:m({},e.attr)},t),d(e.child))}function b(e){var t=t=>{var r,{attr:n,size:l,title:i}=e,u=o(e,c),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a2b5ca01f5f3f27e8851.js.map