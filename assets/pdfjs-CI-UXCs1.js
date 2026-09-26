const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pdf-k3QilhFm.js","assets/preload-helper-DO124SO7.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-DO124SO7.js";var t=null;function n(){return t||=(async()=>{let t=await e(()=>import(`./pdf-k3QilhFm.js`),__vite__mapDeps([0,1])),n=(await e(async()=>{let{default:e}=await import(`./pdf.worker.min-Bf12PTEt.js`);return{default:e}},[])).default;return t.GlobalWorkerOptions.workerSrc=n,t})(),t}async function r(e){let t=e.streamTextContent().getReader(),n=[];try{for(;;){let{done:e,value:r}=await t.read();if(e)break;for(let e of r.items)n.push((e.str||``)+(e.hasEOL?`
`:` `))}}finally{t.releaseLock()}return n.join(``).replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`)}export{n,r as t};