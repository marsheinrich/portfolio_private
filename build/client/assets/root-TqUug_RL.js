import{r as n,j as e}from"./jsx-runtime-CbkKSL4Y.js";import{u as D,t as F,T as Q,G as X,a as ee}from"./theme-provider-1LBmlNcZ.js";import{E as te}from"./error-2TwhLuzS.js";import{V as se}from"./visually-hidden-BLIXNM2j.js";import{B as G,I as T}from"./button-Dviae2ds.js";import{c as ne,d as ae,b as oe,m as q,a as re,n as ie,t as R}from"./heading-DPggoKAw.js";import{u as ce}from"./useScrollToHash-xlT4fBU7.js";import{u as le}from"./useWindowSize-MDlHk0QV.js";import{c as v}from"./config-DhbiIsJ8.js";import{c as me,u as J,y as he,z as ue,_ as de,L as S,A as V,B as fe,C as ge,M as W,D as Z,O as pe,S as U,b as ve}from"./components-D6X3jrEX.js";import"./decoder-text-DSNMM_Ca.js";import"./use-spring-CoWiFX0D.js";import"./image-e9_kEpBc.js";import"./useInViewport-DEmjQroc.js";import"./image-BvwpLhe9.js";/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let A="positions";function Y({getKey:t,...s}){let{isSpaMode:a}=me(),i=J(),o=he();ue({getKey:t,storageKey:A});let c=n.useMemo(()=>{if(!t)return null;let r=t(i,o);return r!==i.key?r:null},[]);if(a)return null;let m=((r,p)=>{if(!window.history.state||!window.history.state.key){let x=Math.random().toString(32).slice(2);window.history.replaceState({key:x},"")}try{let k=JSON.parse(sessionStorage.getItem(r)||"{}")[p||window.history.state.key];typeof k=="number"&&window.scrollTo(0,k)}catch(x){console.error(x),sessionStorage.removeItem(r)}}).toString();return n.createElement("script",de({},s,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(A)}, ${JSON.stringify(c)})`}}))}const xe="_monogram_1jhi1_3",_e="_highlight_1jhi1_13",O={monogram:xe,highlight:_e},je=n.forwardRef(({highlight:t,className:s,...a},i)=>{const c=`${n.useId()}monogram-clip`;return e.jsxs("svg",{"aria-hidden":!0,className:ne(O.monogram,s),width:"48",height:"29",viewBox:"0 0 48 29",ref:i,...a,children:[e.jsx("defs",{children:e.jsx("clipPath",{id:c,children:e.jsx("path",{d:"M0 0h6.5a6 6 0 0 1 5.2 3.1L19.4 17l4-9L19 0h6.5a6 6 0 0 1 5.2 3.1L39.5 19 35 29 24.5 10 16 29 0 0Zm46.7 2.8A2 2 0 0 0 45 0h-7l5.5 10 3.2-7.2Z"})})}),e.jsx("rect",{clipPath:`url(#${c})`,width:"100%",height:"100%"}),t&&e.jsx("g",{clipPath:`url(#${c})`,children:e.jsx("rect",{className:O.highlight,width:"100%",height:"100%"})})]})}),be="_toggle_h91zx_3",ke="_inner_h91zx_33",ye="_icon_h91zx_49",w={toggle:be,inner:ke,icon:ye},we=({menuOpen:t,...s})=>e.jsx(G,{iconOnly:!0,className:w.toggle,"aria-label":"Menu","aria-expanded":t,...s,children:e.jsxs("div",{className:w.inner,children:[e.jsx(T,{className:w.icon,"data-menu":!0,"data-open":t,icon:"menu"}),e.jsx(T,{className:w.icon,"data-close":!0,"data-open":t,icon:"close"})]})}),Ne="_toggle_y3n84_3",Le="_circle_y3n84_57",Se="_mask_y3n84_107",Te="_path_y3n84_143",_={toggle:Ne,circle:Le,mask:Se,path:Te},H=({isMobile:t,...s})=>{const a=n.useId(),{toggleTheme:i}=D(),o=`${a}theme-toggle-mask`;return e.jsx(G,{iconOnly:!0,className:_.toggle,"data-mobile":t,"aria-label":"Toggle theme",onClick:()=>i(),...s,children:e.jsxs("svg",{"aria-hidden":!0,className:_.svg,width:"38",height:"38",viewBox:"0 0 38 38",children:[e.jsx("defs",{children:e.jsxs("mask",{id:o,children:[e.jsx("circle",{className:_.circle,"data-mask":!0,cx:"19",cy:"19",r:"13"}),e.jsx("circle",{className:_.mask,cx:"25",cy:"14",r:"9"})]})}),e.jsx("path",{className:_.path,d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),e.jsx("circle",{className:_.circle,mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})},z=[{label:"Home",pathname:"/"},{label:"Achievements",pathname:"/projects/smart-sparrow"},{label:"Contact",pathname:"/contact"}],Ie=[{label:"Twitter",url:`https://twitter.com/${v.twitter}`,icon:"twitter"},{label:"Figma",url:`https://www.figma.com/${v.figma}`,icon:"figma"},{label:"Github",url:`https://github.com/${v.github}`,icon:"github"}],Me="_navbar_1qbli_3",$e="_logo_1qbli_53",Ce="_nav_1qbli_3",Ee="_navList_1qbli_101",qe="_navLink_1qbli_117",Re="_navIcons_1qbli_203",Ae="_navIconLink_1qbli_251",Oe="_navIcon_1qbli_203",He="_mobileNav_1qbli_293",ze="_mobileNavLink_1qbli_353",f={navbar:Me,logo:$e,nav:Ce,navList:Ee,navLink:qe,navIcons:Re,navIconLink:Ae,navIcon:Oe,mobileNav:He,mobileNavLink:ze},Be=()=>{const[t,s]=n.useState(),[a,i]=n.useState(!1),[o,c]=n.useState(),{theme:m}=D(),r=J(),p=le(),x=n.useRef(),k=p.width<=ae.mobile||p.height<=696,I=ce();n.useEffect(()=>{s(`${r.pathname}${r.hash}`)},[r]),n.useEffect(()=>{!o||r.pathname!=="/"||(s(`${r.pathname}${o}`),I(o,()=>c(null)))},[r.pathname,I,o]),n.useEffect(()=>{const l=document.querySelectorAll("[data-navbar-item]"),h=m==="dark"?"light":"dark",{innerHeight:y}=window;let j=[],b=[];const K=(d,g,u)=>!(d.bottom-u<g.top||d.top-u>g.bottom),E=()=>{for(const d of b)d.element.dataset.theme=""},N=()=>{const d=document.querySelectorAll(`[data-theme='${h}'][data-invert]`);if(!d)return;j=Array.from(d).map(u=>({element:u,top:u.offsetTop,bottom:u.offsetTop+u.offsetHeight}));const{scrollY:g}=window;E();for(const u of j)if(!(u.top-g>y||u.bottom-g<0))for(const L of b)K(u,L,g)?L.element.dataset.theme=h:L.element.dataset.theme=""};return m==="light"&&(b=Array.from(l).map(d=>{const g=d.getBoundingClientRect();return{element:d,top:g.top,bottom:g.bottom}}),document.addEventListener("scroll",N),N()),()=>{document.removeEventListener("scroll",N),E()}},[m,p,r.key]);const M=(l="")=>{const h=t!=null&&t.endsWith("/")?t==null?void 0:t.slice(0,-1):t;return l===h?"page":""},$=l=>{const h=l.currentTarget.href.split("#")[1];c(null),h&&r.pathname==="/"&&(c(`#${h}`),l.preventDefault())},C=l=>{$(l),a&&i(!1)};return e.jsxs("header",{className:f.navbar,ref:x,children:[e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:r.pathname==="/"?"/#intro":"/","data-navbar-item":!0,className:f.logo,"aria-label":`${v.name}, ${v.role}`,onClick:C,children:e.jsx(je,{highlight:!0})}),e.jsx(we,{onClick:()=>i(!a),menuOpen:a}),e.jsxs("nav",{className:f.nav,children:[e.jsx("div",{className:f.navList,children:z.map(({label:l,pathname:h})=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:h,"data-navbar-item":!0,className:f.navLink,"aria-current":M(h),onClick:$,children:l},l))}),e.jsx(B,{desktop:!0})]}),e.jsx(oe,{unmount:!0,in:a,timeout:q(R.base.durationL),children:({visible:l,nodeRef:h})=>e.jsxs("nav",{className:f.mobileNav,"data-visible":l,ref:h,children:[z.map(({label:y,pathname:j},b)=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:j,className:f.mobileNavLink,"data-visible":l,"aria-current":M(j),onClick:C,style:re({transitionDelay:ie(Number(q(R.base.durationS))+b*50)}),children:y},y)),e.jsx(B,{}),e.jsx(H,{isMobile:!0})]})}),!k&&e.jsx(H,{"data-navbar-item":!0})]})},B=({desktop:t})=>e.jsx("div",{className:f.navIcons,children:Ie.map(({label:s,url:a,icon:i})=>e.jsx("a",{"data-navbar-item":t||void 0,className:f.navIconLink,"aria-label":s,href:a,target:"_blank",rel:"noopener noreferrer",children:e.jsx(T,{className:f.navIcon,icon:i})},s))}),Pe="_progress_brpaj_3",De={progress:Pe};function Fe(){const[t,s]=n.useState(!1),[a,i]=n.useState(!1),{state:o}=V(),c=n.useRef(),m=n.useRef(0);return n.useEffect(()=>{clearTimeout(m.current),o!=="idle"?m.current=setTimeout(()=>{i(!0)},500):t&&(m.current=setTimeout(()=>{i(!1)},300))},[o,t]),n.useEffect(()=>{if(!c.current)return;const r=new AbortController;return o!=="idle"?s(!1):(Promise.all(c.current.getAnimations({subtree:!0}).map(p=>p.finished)).then(()=>{r.signal.aborted||s(!0)}),()=>{r.abort()})},[o]),e.jsx("div",{className:De.progress,"data-status":o,"data-visible":a,"data-complete":t,ref:c})}const Ge="_container_1g4r3_3",Je="_skip_1g4r3_23",P={container:Ge,skip:Je},it=()=>[{rel:"preload",href:X,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:ee,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function ct(){var c;let{canonicalUrl:t,theme:s}=fe();const a=ge(),{state:i}=V();(c=a.formData)!=null&&c.has("theme")&&(s=a.formData.get("theme"));function o(m){a.submit({theme:m||(s==="dark"?"light":"dark")},{action:"/api/set-theme",method:"post"})}return n.useEffect(()=>{console.info(`${v.ascii}
`,`Taking a peek huh? Check out the source code: ${v.repo}

`)},[]),e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:s==="dark"?"#111":"#F2F2F2"}),e.jsx("meta",{name:"color-scheme",content:s==="light"?"light dark":"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:F}}),e.jsx(W,{}),e.jsx(Z,{}),e.jsx("link",{rel:"canonical",href:t})]}),e.jsxs("body",{"data-theme":s,children:[e.jsxs(Q,{theme:s,toggleTheme:o,children:[e.jsx(Fe,{}),e.jsx(se,{showOnFocus:!0,as:"a",className:P.skip,href:"#main-content",children:"Skip to main content"}),e.jsx(Be,{}),e.jsx("main",{id:"main-content",className:P.container,tabIndex:-1,"data-loading":i==="loading",children:e.jsx(pe,{})})]}),e.jsx(Y,{}),e.jsx(U,{})]})]})}function lt(){const t=ve();return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#111"}),e.jsx("meta",{name:"color-scheme",content:"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:F}}),e.jsx(W,{}),e.jsx(Z,{})]}),e.jsxs("body",{"data-theme":"dark",children:[e.jsx(te,{error:t}),e.jsx(Y,{}),e.jsx(U,{})]})]})}export{lt as ErrorBoundary,ct as default,it as links};
