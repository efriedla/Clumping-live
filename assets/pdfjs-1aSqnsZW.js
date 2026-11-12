import{Mr as e}from"./index-c_wzkLRs.js";var t=null;function n(){return t||=(async()=>{let t=await e(()=>import(`./pdf-D6J7PVQ0.js`),[]),n=(await e(async()=>{let{default:e}=await import(`./pdf.worker.min-BIlpT4gT.js`);return{default:e}},[])).default;return t.GlobalWorkerOptions.workerSrc=n,t})(),t}async function r(e){let t=e.streamTextContent().getReader(),n=[];try{for(;;){let{done:e,value:r}=await t.read();if(e)break;for(let e of r.items)n.push((e.str||``)+(e.hasEOL?`
`:` `))}}finally{t.releaseLock()}return n.join(``).replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`)}export{n,r as t};