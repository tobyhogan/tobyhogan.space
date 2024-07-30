"use strict";(self.webpackChunktobyhogan_space=self.webpackChunktobyhogan_space||[]).push([[10],{625:function(e,t,r){var a=r(7294);t.Z=function(){return a.createElement("div",{className:""},a.createElement("p",{className:"text-center my-12 font-bold"},"© tobyhogan.space 2024"))}},5811:function(e,t,r){var a=r(7294),l=r(8318),n=r(80);t.Z=function(){const{0:e,1:t}=(0,a.useState)(!1),r=(0,a.useRef)(null);var c;c=r,(0,a.useEffect)((()=>{function e(e){c.current&&!c.current.contains(e.target)&&t(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[c]);const{0:o,1:s}=(0,a.useState)(!1);(0,a.useEffect)((()=>{localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),s(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),s(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","dark"),document.body.classList.add("dark"),s(!0))}),[]);const m=a.createElement(a.Fragment,null,a.createElement("a",{href:"/",className:"underline hover:bg-grayNew-275"},"HOME"),a.createElement("a",{href:"/blog",className:"underline hover:bg-grayNew-275"},"BLOG"),a.createElement("a",{href:"/patch-notes",className:"underline hover:bg-grayNew-275"},"PATCHES"),a.createElement("a",{href:"/resources",className:"underline hover:bg-grayNew-275"},"RESOURCES"),a.createElement("a",{href:"/personal",className:"underline hover:bg-grayNew-275"},"ME"),a.createElement("a",{href:"/info",className:"underline hover:bg-grayNew-275"},"INFO"));return a.createElement("div",{className:"flex flex-row mx-auto w-fit mb-8"},a.createElement("a",{href:"/",className:"mt-5 ml-4 mr-4 text-center text-neutral-500 text-lg tracking-wider hover:underline"},"tobyhogan.space"),a.createElement("div",{className:"FullNav"},a.createElement("ul",{className:"my-auto pt-5 [&>a]:ml-5 text-md tracking-wide list-none"},m)),a.createElement("div",{className:"ToggleNav"},a.createElement("button",{onClick:()=>{t((e=>!e))}},a.createElement(n.xXU,{className:"ml-4 mt-5",size:24})),e?a.createElement("div",{ref:r,className:"border-1 border-black pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-sm"},a.createElement("ul",{className:"flex flex-col text-start ml-3 [&>a]:mb-1"},m)):null),a.createElement("button",{onClick:function(){"light"==localStorage.getItem("theme")?(localStorage.setItem("theme","dark"),document.body.classList.add("dark"),document.body.classList.remove("light"),s(!0)):"dark"==localStorage.getItem("theme")&&(localStorage.setItem("theme","light"),document.body.classList.add("light"),document.body.classList.remove("dark"),s(!1))},className:"mt-3 ml-8"},a.createElement(l.NrT,{size:22})))}},2061:function(e,t,r){r.r(t),r.d(t,{Head:function(){return c}});var a=r(7294),l=r(5811),n=r(625);t.default=()=>a.createElement("main",{className:""},a.createElement(l.Z,null),a.createElement("section",{className:"w-fit mx-auto"},a.createElement("h1",{className:"mt-10"},"Personal Page"),a.createElement("h2",{className:"mt-6"},"Interests:"),a.createElement("ul",{className:"mt-6 ml-20 [&>li]:mt-3 [&>li>h5]:mt-2"},a.createElement("li",null,a.createElement("h4",null,"Music:"),a.createElement("h5",null,"- My Projects:"),a.createElement("a",{href:"https://browser-music-viewer.vercel.app/",target:"_blank",className:"Link1 ml-4"},"- ",a.createElement("u",null,"Web App: Track Stem Mixer")),a.createElement("h5",null,"- Links:"),a.createElement("a",{href:"https://open.spotify.com/user/kjejvfmuzwmjmkdykulvb39hm/playlists",target:"_blank",className:"Link1 ml-4"},"- ",a.createElement("u",null,"My Playlists of Favourite Artists ⇒ Spotify"))),a.createElement("li",null,a.createElement("h4",null,"Language:"),a.createElement("h5",null,"- Links:"),a.createElement("a",{href:"https://www.duolingo.com/profile/tobyhogann",target:"_blank",className:"Link1 ml-4"},"- ",a.createElement("u",null,"Duolingo: @tobyhogann"))),a.createElement("li",null,a.createElement("h4",null,"Photo:"),a.createElement("a",{href:"/personal/photography",className:"Link1 ml-4"},"- ",a.createElement("u",null,"Photography Gallery"))),a.createElement("li",null,a.createElement("h4",null,"Art:")),a.createElement("li",null))),a.createElement(n.Z,null));const c=()=>a.createElement("title",null,"Personal Page")},3621:function(e,t,r){r.d(t,{w_:function(){return f}});var a=r(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(l),c=["attr","size","title"];function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>a.createElement(e.tag,i({key:t},e.attr),d(e.child))))}function f(e){return t=>a.createElement(h,s({attr:i({},e.attr)},t),d(e.child))}function h(e){var t=t=>{var r,{attr:l,size:n,title:m}=e,u=o(e,c),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),m&&a.createElement("title",null,m),e.children)};return void 0!==n?a.createElement(n.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=component---src-pages-personal-tsx-bdb0271853d16aca9d5c.js.map