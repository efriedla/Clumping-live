const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pdf-BL06AM2N.js","assets/preload-helper-DxX97azj.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-DxX97azj.js";var t=null;function n(){return t||=(async()=>{let t=await e(()=>import(`./pdf-BL06AM2N.js`),__vite__mapDeps([0,1])),n=(await e(async()=>{let{default:e}=await import(`./pdf.worker.min-Th-_6tCG.js`);return{default:e}},[])).default;return t.GlobalWorkerOptions.workerSrc=n,t})(),t}async function r(e){let t=e.streamTextContent().getReader(),n=[];try{for(;;){let{done:e,value:r}=await t.read();if(e)break;for(let e of r.items)n.push((e.str||``)+(e.hasEOL?`
`:` `))}}finally{t.releaseLock()}return n.join(``).replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`)}export{n,r as t};