import{r as l,j as s}from"./jsx-runtime-CbkKSL4Y.js";import{c as w,b as $,L as k}from"./heading-DPggoKAw.js";import{L as y}from"./components-D6X3jrEX.js";const E="_icon_nm21j_3",I={icon:E},T="/assets/icons-BpnV3eny.svg",_=l.forwardRef(({icon:t,className:a,size:n,...e},r)=>s.jsx("svg",{"aria-hidden":!0,ref:r,className:w(I.icon,a),width:n||24,height:n||24,...e,children:s.jsx("use",{href:`${T}#${t}`})})),V="_button_4jwwg_3",h="_text_4jwwg_263",q="_loader_4jwwg_289",z="_icon_4jwwg_315",o={button:V,text:h,loader:q,icon:z};function b(t){return t==null?void 0:t.includes("://")}const J=l.forwardRef(({href:t,...a},n)=>b(t)||!t?s.jsx(p,{href:t,ref:n,...a}):s.jsx(p,{unstable_viewTransition:!0,as:y,prefetch:"intent",to:t,ref:n,...a})),p=l.forwardRef(({className:t,as:a,secondary:n,loading:e,loadingText:r="loading",icon:i,iconEnd:u,iconHoverShift:x,iconOnly:c,children:m,rel:g,target:f,href:d,disabled:N,...v},L)=>{const j=b(d),B=a||(d?"a":"button");return s.jsxs(B,{className:w(o.button,t),"data-loading":e,"data-icon-only":c,"data-secondary":n,"data-icon":i,href:d,rel:g||j?"noopener noreferrer":void 0,target:f||j?"_blank":void 0,disabled:N,ref:L,...v,children:[!!i&&s.jsx(_,{className:o.icon,"data-start":!c,"data-shift":x,icon:i}),!!m&&s.jsx("span",{className:o.text,children:m}),!!u&&s.jsx(_,{className:o.icon,"data-end":!c,"data-shift":x,icon:u}),s.jsx($,{unmount:!0,in:e,children:({visible:C,nodeRef:R})=>s.jsx(k,{ref:R,className:o.loader,size:32,text:r,"data-visible":C})})]})});export{J as B,_ as I};
