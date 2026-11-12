import{o as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-CAfMLIKe.js";import{f as n,t as r}from"./DefaultPropsProvider-Dg0QN0zH.js";import{n as i,r as a}from"./emotion-react.browser.esm-DpO-6rx9.js";import{t as o}from"./jsx-runtime-BB9-612F.js";import{i as s,l as c,n as l,r as u,s as d,u as f}from"./createSvgIcon-DN8h6aGO.js";import{t as p}from"./useId-CC-axi8Z.js";import{t as m}from"./createSimplePaletteValueFilter-Bt9IjErz.js";var h=p,g=e(t());function _(e){return f(`MuiCircularProgress`,e)}c(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDeterminate`,`circleIndeterminate`,`circleDisableShrink`]);var v=o(),y=44,b=a`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,x=a`
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
`,S=typeof b==`string`?null:i`
        animation: ${b} 1.4s linear infinite;
      `,C=typeof x==`string`?null:i`
        animation: ${x} 1.4s ease-in-out infinite;
      `,w=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e,a={root:[`root`,n,`color${u(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,`circle${u(n)}`,i&&`circleDisableShrink`]};return d(a,_,t)},T=s(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${u(n.color)}`]]}})(l(({theme:e})=>({display:`inline-block`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`transform`)}},{props:{variant:`indeterminate`},style:S||{animation:`${b} 1.4s linear infinite`}},...Object.entries(e.palette).filter(m()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),E=s(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),D=s(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,t[`circle${u(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(l(({theme:e})=>({stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:C||{animation:`${x} 1.4s ease-in-out infinite`}}]}))),O=s(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(l(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),k=g.forwardRef(function(e,t){let i=r({props:e,name:`MuiCircularProgress`}),{className:a,color:o=`primary`,disableShrink:s=!1,enableTrackSlot:c=!1,size:l=40,style:u,thickness:d=3.6,value:f=0,variant:p=`indeterminate`,...m}=i,h={...i,color:o,disableShrink:s,size:l,thickness:d,value:f,variant:p,enableTrackSlot:c},g=w(h),_={},b={},x={};if(p===`determinate`){let e=2*Math.PI*((y-d)/2);_.strokeDasharray=e.toFixed(3),x[`aria-valuenow`]=Math.round(f),_.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,b.transform=`rotate(-90deg)`}return(0,v.jsx)(T,{className:n(g.root,a),style:{width:l,height:l,...b,...u},ownerState:h,ref:t,role:`progressbar`,...x,...m,children:(0,v.jsxs)(E,{className:g.svg,ownerState:h,viewBox:`${y/2} ${y/2} ${y} ${y}`,children:[c?(0,v.jsx)(O,{className:g.track,ownerState:h,cx:y,cy:y,r:(y-d)/2,fill:`none`,strokeWidth:d,"aria-hidden":`true`}):null,(0,v.jsx)(D,{className:g.circle,style:_,ownerState:h,cx:y,cy:y,r:(y-d)/2,fill:`none`,strokeWidth:d})]})})});export{h as n,k as t};