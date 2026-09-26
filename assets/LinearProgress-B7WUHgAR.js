import{c as e,n as t,t as n}from"./jsx-runtime-DKe-klnU.js";import{L as r,R as i,i as a,t as o,y as s}from"./DefaultPropsProvider-BnbMY7wC.js";import{a as c,i as l,n as u,o as d,r as f}from"./createSvgIcon-wd-5TenK.js";import{n as p}from"./RtlProvider-04Giallq.js";import{t as m}from"./createSimplePaletteValueFilter-B7om3Q5R.js";function h(e){return d(`MuiLinearProgress`,e)}c(`MuiLinearProgress`,[`root`,`colorPrimary`,`colorSecondary`,`determinate`,`indeterminate`,`buffer`,`query`,`dashed`,`dashedColorPrimary`,`dashedColorSecondary`,`bar`,`bar1`,`bar2`,`barColorPrimary`,`barColorSecondary`,`bar1Indeterminate`,`bar1Determinate`,`bar1Buffer`,`bar2Indeterminate`,`bar2Buffer`]);var g=e(t()),_=n(),v=4,y=i`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,b=typeof y==`string`?null:r`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `,x=i`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,S=typeof x==`string`?null:r`
        animation: ${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `,C=i`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,w=typeof C==`string`?null:r`
        animation: ${C} 3s infinite linear;
      `,T=e=>{let{classes:t,variant:n,color:r}=e;return l({root:[`root`,`color${f(r)}`,n],dashed:[`dashed`,`dashedColor${f(r)}`],bar1:[`bar`,`bar1`,`barColor${f(r)}`,(n===`indeterminate`||n===`query`)&&`bar1Indeterminate`,n===`determinate`&&`bar1Determinate`,n===`buffer`&&`bar1Buffer`],bar2:[`bar`,`bar2`,n!==`buffer`&&`barColor${f(r)}`,n===`buffer`&&`color${f(r)}`,(n===`indeterminate`||n===`query`)&&`bar2Indeterminate`,n===`buffer`&&`bar2Buffer`]},h,t)},E=(e,t)=>e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:e.palette.mode===`light`?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.5),D=a(`span`,{name:`MuiLinearProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`color${f(n.color)}`],t[n.variant]]}})(u(({theme:e})=>({position:`relative`,overflow:`hidden`,display:`block`,height:4,zIndex:0,"@media print":{colorAdjust:`exact`},variants:[...Object.entries(e.palette).filter(m()).map(([t])=>({props:{color:t},style:{backgroundColor:E(e,t)}})),{props:({ownerState:e})=>e.color===`inherit`&&e.variant!==`buffer`,style:{"&::before":{content:`""`,position:`absolute`,left:0,top:0,right:0,bottom:0,backgroundColor:`currentColor`,opacity:.3}}},{props:{variant:`buffer`},style:{backgroundColor:`transparent`}},{props:{variant:`query`},style:{transform:`rotate(180deg)`}}]}))),O=a(`span`,{name:`MuiLinearProgress`,slot:`Dashed`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.dashed,t[`dashedColor${f(n.color)}`]]}})(u(({theme:e})=>({position:`absolute`,marginTop:0,height:`100%`,width:`100%`,backgroundSize:`10px 10px`,backgroundPosition:`0 -23px`,variants:[{props:{color:`inherit`},style:{opacity:.3,backgroundImage:`radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`}},...Object.entries(e.palette).filter(m()).map(([t])=>{let n=E(e,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`}}})]})),w||{animation:`${C} 3s infinite linear`}),k=a(`span`,{name:`MuiLinearProgress`,slot:`Bar1`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.bar,t.bar1,t[`barColor${f(n.color)}`],(n.variant===`indeterminate`||n.variant===`query`)&&t.bar1Indeterminate,n.variant===`determinate`&&t.bar1Determinate,n.variant===`buffer`&&t.bar1Buffer]}})(u(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[{props:{color:`inherit`},style:{backgroundColor:`currentColor`}},...Object.entries(e.palette).filter(m()).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main}})),{props:{variant:`determinate`},style:{transition:`transform .${v}s linear`}},{props:{variant:`buffer`},style:{zIndex:1,transition:`transform .${v}s linear`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:b||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),A=a(`span`,{name:`MuiLinearProgress`,slot:`Bar2`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.bar,t.bar2,t[`barColor${f(n.color)}`],(n.variant===`indeterminate`||n.variant===`query`)&&t.bar2Indeterminate,n.variant===`buffer`&&t.bar2Buffer]}})(u(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[...Object.entries(e.palette).filter(m()).map(([t])=>({props:{color:t},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[t].main}})),{props:({ownerState:e})=>e.variant!==`buffer`&&e.color!==`inherit`,style:{backgroundColor:`var(--LinearProgressBar2-barColor, currentColor)`}},{props:({ownerState:e})=>e.variant!==`buffer`&&e.color===`inherit`,style:{backgroundColor:`currentColor`}},{props:{color:`inherit`},style:{opacity:.3}},...Object.entries(e.palette).filter(m()).map(([t])=>({props:{color:t,variant:`buffer`},style:{backgroundColor:E(e,t),transition:`transform .${v}s linear`}})),{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:S||{animation:`${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),j=g.forwardRef(function(e,t){let n=o({props:e,name:`MuiLinearProgress`}),{className:r,color:i=`primary`,value:a,valueBuffer:c,variant:l=`indeterminate`,...u}=n,d={...n,color:i,variant:l},f=T(d),m=p(),h={},g={bar1:{},bar2:{}};if((l===`determinate`||l===`buffer`)&&a!==void 0){h[`aria-valuenow`]=Math.round(a),h[`aria-valuemin`]=0,h[`aria-valuemax`]=100;let e=a-100;m&&(e=-e),g.bar1.transform=`translateX(${e}%)`}if(l===`buffer`&&c!==void 0){let e=(c||0)-100;m&&(e=-e),g.bar2.transform=`translateX(${e}%)`}return(0,_.jsxs)(D,{className:s(f.root,r),ownerState:d,role:`progressbar`,...h,ref:t,...u,children:[l===`buffer`?(0,_.jsx)(O,{className:f.dashed,ownerState:d}):null,(0,_.jsx)(k,{className:f.bar1,ownerState:d,style:g.bar1}),l===`determinate`?null:(0,_.jsx)(A,{className:f.bar2,ownerState:d,style:g.bar2})]})});export{j as t};