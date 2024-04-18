function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Root-BLivGUvc.js","assets/colors-Cv6p-LpM.js","assets/App-B5SbfHFy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="modulepreload",b=function(n){return"/"+n},h={},g=function(r,i,u){let e=Promise.resolve();if(i&&i.length>0){const t=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),f=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(i.map(s=>{if(s=b(s),s in h)return;h[s]=!0;const c=s.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!u)for(let a=t.length-1;a>=0;a--){const d=t[a];if(d.href===s&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":y,c||(l.as="script",l.crossOrigin=""),l.href=s,f&&l.setAttribute("nonce",f),document.head.appendChild(l),c)return new Promise((a,d)=>{l.addEventListener("load",a),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return e.then(()=>r()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},v="Kelly Justin Wilson",w="kjwilsondfl@gmail.com",_="https://github.com/Arkangel17/portfolio",L={app:{crash:{title:"Oooops... Sorry, I guess, something went wrong. You can:",options:{email:`contact with author by this email - ${w}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"Something went wrong during image loading :("},404:"Hey man? What are you looking for?"},O={options:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3},maxSnack:3},R={delay:300,minimumLoading:700},S="https://giphy.com/embed/xTiN0L7EW5trfOvEk0";function m(){return Math.floor(Math.random()*256)}function E(){const n=m(),r=m(),i=m();return[`rgb(${n}, ${r}, ${i})`,`rgb(${255-n}, ${255-r}, ${255-i})`]}function $(){const[n,r]=E(),i=["font-size: 20px",`color: ${n}`,`border: 1px solid ${r}`,`background-color: ${r}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${v} ===`,i)}Promise.all([g(()=>import("./Root-BLivGUvc.js"),__vite__mapDeps([0,1])),g(()=>import("./App-B5SbfHFy.js").then(n=>n.A),__vite__mapDeps([2,1]))]).then(([{default:n},{default:r}])=>{n(r)});$();export{g as _,w as e,S as g,R as l,L as m,O as n,_ as r,v as t};