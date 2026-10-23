import{o as e}from"./chunk-zsgVPwQN.js";import{t}from"./react-CpO0XFEz.js";import{L as n,R as r,i,t as a,y as o}from"./DefaultPropsProvider-Dbfrtkyi.js";import{t as s}from"./jsx-runtime-shnjTBMD.js";import{a as c,i as l,n as u,o as d,r as f}from"./createSvgIcon-rVvGjUJ8.js";import{t as p}from"./useId-DPq9PnxX.js";import{t as m}from"./createSimplePaletteValueFilter-MxTKO41W.js";var h=p;function g(e){return d(`MuiCircularProgress`,e)}c(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDeterminate`,`circleIndeterminate`,`circleDisableShrink`]);var _=e(t()),v=s(),y=44,b=r`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,x=r`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,S=typeof b==`string`?null:n`
        animation: ${b} 1.4s linear infinite;
      `,C=typeof x==`string`?null:n`
        animation: ${x} 1.4s ease-in-out infinite;
      `,w=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e;return l({root:[`root`,n,`color${f(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,`circle${f(n)}`,i&&`circleDisableShrink`]},g,t)},T=i(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${f(n.color)}`]]}})(u(({theme:e})=>({display:`inline-block`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`transform`)}},{props:{variant:`indeterminate`},style:S||{animation:`${b} 1.4s linear infinite`}},...Object.entries(e.palette).filter(m()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),E=i(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),D=i(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,t[`circle${f(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(u(({theme:e})=>({stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:C||{animation:`${x} 1.4s ease-in-out infinite`}}]}))),O=i(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(u(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),k=_.forwardRef(function(e,t){let n=a({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:s=!1,enableTrackSlot:c=!1,size:l=40,style:u,thickness:d=3.6,value:f=0,variant:p=`indeterminate`,...m}=n,h={...n,color:i,disableShrink:s,size:l,thickness:d,value:f,variant:p,enableTrackSlot:c},g=w(h),_={},b={},x={};if(p===`determinate`){let e=2*Math.PI*((y-d)/2);_.strokeDasharray=e.toFixed(3),x[`aria-valuenow`]=Math.round(f),_.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,b.transform=`rotate(-90deg)`}return(0,v.jsx)(T,{className:o(g.root,r),style:{width:l,height:l,...b,...u},ownerState:h,ref:t,role:`progressbar`,...x,...m,children:(0,v.jsxs)(E,{className:g.svg,ownerState:h,viewBox:`${y/2} ${y/2} ${y} ${y}`,children:[c?(0,v.jsx)(O,{className:g.track,ownerState:h,cx:y,cy:y,r:(y-d)/2,fill:`none`,strokeWidth:d,"aria-hidden":`true`}):null,(0,v.jsx)(D,{className:g.circle,style:_,ownerState:h,cx:y,cy:y,r:(y-d)/2,fill:`none`,strokeWidth:d})]})})});export{h as n,k as t};