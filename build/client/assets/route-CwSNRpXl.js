const __vite__fileDeps=["assets/earth-8ITyKFxD.js","assets/jsx-runtime-CbkKSL4Y.js","assets/heading-DPggoKAw.js","assets/heading-bngNYT3q.css","assets/meta-BE8B7F0j.js","assets/config-DhbiIsJ8.js","assets/meta-CD9YXdQY.css","assets/useInViewport-DEmjQroc.js","assets/useWindowSize-MDlHk0QV.js","assets/throttle-BppN56yE.js","assets/use-spring-CoWiFX0D.js","assets/earth-9iZe34AL.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as Q,s as O,a as K,b as U}from"./spr-lesson-builder-dark-2wNVPYZi.js";import{r as t,j as e}from"./jsx-runtime-CbkKSL4Y.js";import{b as V,F as G}from"./meta-BE8B7F0j.js";import{I as j}from"./image-e9_kEpBc.js";import{V as N}from"./visually-hidden-BLIXNM2j.js";import{a as q,d as v}from"./heading-DPggoKAw.js";import{u as J,T as D}from"./theme-provider-1LBmlNcZ.js";import{P as Y,a as X,b as Z,c as u,d as x,h as W,e as f,f as S,g as b,i as ee}from"./project-C9r1PAeU.js";import"./config-DhbiIsJ8.js";import"./button-Dviae2ds.js";import"./components-D6X3jrEX.js";import"./useInViewport-DEmjQroc.js";import"./image-BvwpLhe9.js";const se="/assets/spr-background-large-nYeU3Kau.jpg",te="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFCP/EABgBAQADAQAAAAAAAAAAAAAAAAMBAgQF/9oADAMBAAIQAxAAAADJ1+YyYzk2GgjwSltH/8QAHxAAAAUFAQEAAAAAAAAAAAAAAAECAwQFERITMSFh/9oACAEBAAE/AI8S7dyCqdm19D8TT0NzNasS4DqSkiVJN70x/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMRE//aAAgBAgEBPwCxOQVtlTmKtT//xAAaEQACAgMAAAAAAAAAAAAAAAAAAQMSAgQR/9oACAEDAQE/AM5uMWzxmE1hw2QtVMjiof/Z",E="/assets/security-CUkMvPOz.jpg",re="/assets/spr-background-volcanism-placeholder-BMmyN9Lv.jpg",P="/assets/spr-background-volcanism-bmTr0iXr.jpg",B="/assets/spr-background-BYcr6wKu.jpg",C="/assets/spr-design-system-dark-Dh8EKHGy.png",ne="/assets/spr-components-dark-placeholder-CS7TACCT.png",ae="/assets/spr-design-system-dark-Dh8EKHGy.png",ie="/assets/spr-components-light-placeholder-CszPt9Ak.png",oe="/assets/spr-components-light-BDN1DcyF.png",ce="/assets/spr-design-system-dark-placeholder-BnG6UVwD.png",H="/assets/spr-design-system-dark-Dh8EKHGy.png",k="/assets/spr-design-system-dark-large-CD1SI4Uj.png",le="/assets/spr-design-system-light-placeholder-rqb9V2TD.png",_="/assets/spr-design-system-light-BcyuLqHy.png",de="/assets/spr-design-system-light-BcyuLqHy.png",he="/assets/spr-lesson-builder-light-placeholder-Dq8oUDzc.jpg",pe="/assets/spr-lesson-builder-light-UMmbA8fJ.jpg",Ae="_container_1lkfa_3",ge="_options_1lkfa_11",me="_button_1lkfa_51",ue="_indicator_1lkfa_133",y={container:Ae,options:ge,button:me,indicator:ue},L=t.createContext({}),xe=({children:r,currentIndex:i,onChange:s,label:l,...h})=>{const A=`${t.useId()}segmented-control-label`,n=t.useRef([]),[g,w]=t.useState(),$=a=>{const{length:o}=n.current,m=(i-1+o)%o,d=(i+1)%o;["ArrowLeft","ArrowUp"].includes(a.key)?(s(m),n.current[m].current.focus()):["ArrowRight","ArrowDown"].includes(a.key)&&(s(d),n.current[d].current.focus())},M=t.useCallback(a=>{n.current=[...n.current,a]},[]),F=t.useCallback(a=>{n.current=n.current.filter(o=>o!==a)},[]);return t.useEffect(()=>{var m;const a=(m=n.current[i])==null?void 0:m.current,o=new ResizeObserver(()=>{const d=a==null?void 0:a.getBoundingClientRect(),z=a==null?void 0:a.offsetLeft;w({width:d==null?void 0:d.width,left:z})});return o.observe(a),()=>{o.disconnect()}},[i]),e.jsx(L.Provider,{value:{optionRefs:n,currentIndex:i,onChange:s,registerOption:M,unRegisterOption:F},children:e.jsxs("div",{className:y.container,role:"radiogroup",tabIndex:"0","aria-labelledby":A,onKeyDown:$,...h,children:[e.jsx(N,{as:"label",id:A,children:l}),e.jsxs("div",{className:y.options,children:[!!g&&e.jsx("div",{className:y.indicator,"data-last":i===n.current.length-1,style:q(g)}),r]})]})})},I=({children:r,...i})=>{const{optionRefs:s,currentIndex:l,onChange:h,registerOption:p,unRegisterOption:A}=t.useContext(L),n=t.useRef(),g=s.current.indexOf(n),w=l===g;return t.useEffect(()=>(p(n),()=>{A(n)}),[p,A]),e.jsx("button",{className:y.button,tabIndex:w?0:-1,role:"radio","aria-checked":w,onClick:()=>h(g),ref:n,...i,children:r})},we="_video_169iy_1",je="_sidebarImages_169iy_25",fe="_sidebarImage_169iy_25",ye={video:we,sidebarImages:je,sidebarImage:fe},Se=t.lazy(()=>Q(()=>import("./earth-8ITyKFxD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(r=>({default:r.Earth}))),c=t.lazy(()=>Q(()=>import("./earth-8ITyKFxD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(r=>({default:r.EarthSection}))),R="Designing the Security System",T="I am an innovative Engineer with a unique blend of expertise in artificial intelligence and machine learning. Over the past seven years, I have honed my skills in Java, while also diving deep into the realms of AI to create intelligent, data-driven applications. ",be=["Software Developer","Backend Designer","Security Engineer","Quality Assurance"],Te=()=>V({title:R,description:T,prefix:"Projects"}),$e=()=>{const{theme:r,toggleTheme:i}=J(),s=r==="dark",l=["dark","light"],h=p=>{i(l[p])};return e.jsxs(e.Fragment,{children:[e.jsxs(Y,{children:[e.jsx(X,{opacity:s?.5:.8,src:B,srcSet:`${B} 1080w, ${se} 2160w`,placeholder:te}),e.jsx(Z,{title:R,description:T,url:"https://www.smartsparrow.com/",roles:be}),e.jsx(u,{padding:"top",children:e.jsx(x,{children:e.jsx(W,{raised:!0,srcSet:s?`${O} 1280w, ${K} 2560w`:`${pe} 1280w, ${de} 2560w`,width:1280,height:800,placeholder:s?U:he,sizes:`(max-width: ${v.mobile}px) 100vw, (max-width: ${v.tablet}px) 800px, 1000px`,alt:"The aero lesson builder app dragging an audio component into a screen about plant cells."},r)})}),e.jsx(u,{light:s,children:e.jsxs(x,{children:[e.jsx(j,{srcSet:s?`${C} 1024w, ${C} 2048w`:`${oe} 1024w, ${ae} 2048w`,width:1024,hright:800,placeholder:s?ne:ie,alt:`A set of ${r} themed components for the aero design system`,sizes:"100vw"},r),e.jsx(f,{children:e.jsxs(xe,{currentIndex:l.indexOf(r),onChange:h,children:[e.jsx(I,{children:"Dark theme"}),e.jsx(I,{children:"Light theme"})]})})]})}),e.jsx(u,{children:e.jsxs(x,{children:[e.jsx(j,{raised:!0,srcSet:s?`${H} 1280w, ${E} 2560w`:`${_} 1280w, ${k} 2560w`,width:1280,height:800,placeholder:s?ce:le,alt:"The homepage of the aero design system docs website linking to principles and components.",sizes:"100vw"},r),e.jsxs(f,{children:[e.jsx(S,{children:"Powerful Security Performance"}),e.jsx(b,{children:"Conducted thorough penetration testing, revealing 15 system vulnerabilities that were patched, improving system security by 70% Spearheaded the implementation of cloud security solutions to protect sensitive data"})]})]})}),e.jsx(D,{theme:"dark","data-invert":!0,children:e.jsx(u,{backgroundOverlayOpacity:.5,backgroundElement:e.jsx(j,{srcSet:`${E} 1280w, ${E} 2560w`,width:1280,height:900,placeholder:re,alt:"A dramatic ocean scene with lava forming a new land mass.",sizes:"100vw"}),children:e.jsxs(ee,{width:"full",children:[e.jsx(x,{width:"full",children:e.jsxs(f,{width:"s",children:[e.jsx(S,{children:"Higher Quality "}),e.jsx(b,{children:"Managed comprehensive test planning and execution for 3 consecutive high-stake projects, resulting in zero critical bugs in live environments."})]})}),e.jsx(j,{raised:!0,srcSet:s?`${H} 1280w, ${k} 2560w`:`${_} 1280w, ${k} 2560w`,width:1280,height:800,placeholder:P,alt:"The homepage of the aero design system docs website linking to principles and components.",sizes:"100vw"},r)]})})}),e.jsx(D,{theme:"dark","data-invert":!0,children:e.jsx(t.Suspense,{children:e.jsxs(Se,{className:ye.earth,hideMeshes:t.useMemo(()=>["Atmosphere","EarthPartial"],[]),position:t.useMemo(()=>[0,0,0],[]),labels:t.useMemo(()=>[{position:[.54,.19,.18],text:"Pacific ring of fire",hidden:!0},{position:[.47,-.38,.04],text:"Ruapehu",hidden:!0},{position:[.22,.44,-.35],text:"St. Helens",hidden:!0},{position:[.16,-.06,.58],text:"Krakatoa",hidden:!0},{position:[.11,.2,-.56],text:"Parícutin",hidden:!0},{position:[.52,.2,-.23],text:"Kīlauea",hidden:!0},{position:[-.24,.75,.24],text:"Mantle",delay:800,hidden:!0},{position:[-.24,.55,.24],text:"Outer core",delay:800,hidden:!0},{position:[-.24,.35,.24],text:"Inner core",delay:800,hidden:!0}],[]),scale:.6,children:[e.jsx(c,{scrim:!0,animations:["0:loop"],camera:[0,0,1.5],meshes:["Atmosphere","EarthFull"],children:e.jsx(u,{children:e.jsx(x,{children:e.jsxs(f,{center:!0,children:[e.jsx(S,{children:"My approach to development is holistic"}),e.jsx(b,{children:"The user-centric and results-driven mindset has enabled me to contribute to projects that not only leverage cutting-edge technology but also deliver tangible benefits to users and stakeholders."})]})})})}),e.jsx(c,{animations:["0:loop"],camera:[0,0,2.4],meshes:["Atmosphere","EarthFull"]}),e.jsx(c,{animations:["0:loop"],camera:[1.14,-1.39,.94],meshes:["Atmosphere","EarthFull"]}),e.jsx(c,{animations:["0:loop"],camera:[1.17,.69,-1.47],meshes:["Atmosphere","EarthFull"],labels:["Pacific ring of fire","Ruapehu","St. Helens","Krakatoa","Parícutin","Kīlauea"]}),e.jsx(c,{animations:["0:loop"],camera:[1.81,.51,.43],meshes:["Atmosphere","EarthFull"],labels:["Pacific ring of fire","Ruapehu","St. Helens","Krakatoa","Parícutin","Kīlauea"]}),e.jsx(c,{animations:["0:loop"],camera:[.37,1.02,1.84],meshes:["EarthPartial","Chunk"],labels:["Mantle","Outer core","Inner core"]}),e.jsx(c,{scrimReverse:!0,animations:["0:loop"],camera:[.37,1.02,1.84],meshes:["Atmosphere","EarthFull"]})]})})})]}),e.jsx(G,{})]})};export{$e as default,Te as meta};