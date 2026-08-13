import{c as e,n as t,t as n}from"./jsx-runtime-DKe-klnU.js";import{C as r,S as i,U as a,W as o,h as s,n as c,o as l,r as u,s as d,w as f}from"./createSvgIcon-DMw24i9W.js";import{n as p}from"./Box-BkXhZg-r.js";var m=e(t()),h=0;function g(e){let[t,n]=m.useState(e),r=e||t;return m.useEffect(()=>{t??(h+=1,n(`mui-${h}`))},[t]),r}var _={...m}.useId;function v(e){if(_!==void 0){let t=_();return e??t}return g(e)}var y=v;function b(e){return r(`MuiCircularProgress`,e)}i(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDeterminate`,`circleIndeterminate`,`circleDisableShrink`]);var x=n(),S=44,C=o`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,w=o`
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
`,T=typeof C==`string`?null:a`
        animation: ${C} 1.4s linear infinite;
      `,E=typeof w==`string`?null:a`
        animation: ${w} 1.4s ease-in-out infinite;
      `,D=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e;return s({root:[`root`,n,`color${l(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,`circle${l(n)}`,i&&`circleDisableShrink`]},b,t)},O=d(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${l(n.color)}`]]}})(u(({theme:e})=>({display:`inline-block`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`transform`)}},{props:{variant:`indeterminate`},style:T||{animation:`${C} 1.4s linear infinite`}},...Object.entries(e.palette).filter(p()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),k=d(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),A=d(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,t[`circle${l(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(u(({theme:e})=>({stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:E||{animation:`${w} 1.4s ease-in-out infinite`}}]}))),j=d(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(u(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),M=m.forwardRef(function(e,t){let n=c({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:a=!1,enableTrackSlot:o=!1,size:s=40,style:l,thickness:u=3.6,value:d=0,variant:p=`indeterminate`,...m}=n,h={...n,color:i,disableShrink:a,size:s,thickness:u,value:d,variant:p,enableTrackSlot:o},g=D(h),_={},v={},y={};if(p===`determinate`){let e=2*Math.PI*((S-u)/2);_.strokeDasharray=e.toFixed(3),y[`aria-valuenow`]=Math.round(d),_.strokeDashoffset=`${((100-d)/100*e).toFixed(3)}px`,v.transform=`rotate(-90deg)`}return(0,x.jsx)(O,{className:f(g.root,r),style:{width:s,height:s,...v,...l},ownerState:h,ref:t,role:`progressbar`,...y,...m,children:(0,x.jsxs)(k,{className:g.svg,ownerState:h,viewBox:`${S/2} ${S/2} ${S} ${S}`,children:[o?(0,x.jsx)(j,{className:g.track,ownerState:h,cx:S,cy:S,r:(S-u)/2,fill:`none`,strokeWidth:u,"aria-hidden":`true`}):null,(0,x.jsx)(A,{className:g.circle,style:_,ownerState:h,cx:S,cy:S,r:(S-u)/2,fill:`none`,strokeWidth:u})]})})});export{y as n,v as r,M as t};