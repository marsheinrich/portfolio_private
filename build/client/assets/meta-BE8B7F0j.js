import{j as r,r as m}from"./jsx-runtime-CbkKSL4Y.js";import{c as p,T as g}from"./heading-DPggoKAw.js";import{c as l}from"./config-DhbiIsJ8.js";const y="_footer_fqda3_3",f="_link_fqda3_31",d="_date_fqda3_39",i={footer:y,link:f,date:d},b=({className:t})=>r.jsx("footer",{className:p(i.footer,t),children:r.jsx(g,{size:"s",align:"center",children:r.jsx("span",{className:i.date,children:`© ${new Date().getFullYear()} ${l.name}.`})})}),_="_section_1278e_3",w={section:_},k=m.forwardRef(({as:t="div",children:e,className:s,...n},o)=>r.jsx(t,{className:p(w.section,s),ref:o,...n,children:e})),{name:a,url:c,twitter:x}=l,u=`${c}/social-image.png`;function q({title:t,description:e,prefix:s=a,ogImage:n=u}){const o=[s,t].filter(Boolean).join(" | ");return[{title:o},{name:"description",content:e},{name:"author",content:a},{property:"og:image",content:n},{property:"og:image:alt",content:"Banner for the site"},{property:"og:image:width",content:"1280"},{property:"og:image:height",content:"800"},{property:"og:title",content:o},{property:"og:site_name",content:a},{property:"og:type",content:"website"},{property:"og:url",content:c},{property:"og:description",content:e},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:description",content:e},{property:"twitter:title",content:o},{property:"twitter:site",content:c},{property:"twitter:creator",content:x},{property:"twitter:image",content:n}]}export{b as F,k as S,q as b};