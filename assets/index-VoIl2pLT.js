import{a as C,_ as se,b as yt,j as P,x as ve,y as Ne,R as Se,e as xt,z as vt,C as ne}from"./colors-Cv6p-LpM.js";import{g as wt,a as Et,s as Pt,u as jt,b as Tt,e as Mt,c as Ot,d as St,B as Ae,T as At}from"./App-CT6JekW5.js";import{R as Ct,P as Nt,E as Dt,V as W,Q as Ue,a as ge,O as ye,S as Ve,b as G,M as ie,T as ae,u as J,c as Rt,d as kt,L as Lt,e as It,B as _t,f as zt,C as et,g as tt,h as $t,i as Wt,A as Gt,j as Yt,k as Bt}from"./Avatar-CKd9292f.js";import"./index-HqYwnkMN.js";const Ft=C.createContext(),Ke=Ft;function Ht(n){return wt("MuiGrid",n)}const Ut=[0,1,2,3,4,5,6,7,8,9,10],Vt=["column-reverse","column","row-reverse","row"],Kt=["nowrap","wrap-reverse","wrap"],fe=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],he=Et("MuiGrid",["root","container","item","zeroMinWidth",...Ut.map(n=>`spacing-xs-${n}`),...Vt.map(n=>`direction-xs-${n}`),...Kt.map(n=>`wrap-xs-${n}`),...fe.map(n=>`grid-xs-${n}`),...fe.map(n=>`grid-sm-${n}`),...fe.map(n=>`grid-md-${n}`),...fe.map(n=>`grid-lg-${n}`),...fe.map(n=>`grid-xl-${n}`)]),Zt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function ce(n){const r=parseFloat(n);return`${r}${String(n).replace(String(r),"")||"px"}`}function Xt({theme:n,ownerState:r}){let a;return n.breakpoints.keys.reduce((e,o)=>{let l={};if(r[o]&&(a=r[o]),!a)return e;if(a===!0)l={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(a==="auto")l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const p=ve({values:r.columns,breakpoints:n.breakpoints.values}),c=typeof p=="object"?p[o]:p;if(c==null)return e;const u=`${Math.round(a/c*1e8)/1e6}%`;let m={};if(r.container&&r.item&&r.columnSpacing!==0){const i=n.spacing(r.columnSpacing);if(i!=="0px"){const h=`calc(${u} + ${ce(i)})`;m={flexBasis:h,maxWidth:h}}}l=se({flexBasis:u,flexGrow:0,maxWidth:u},m)}return n.breakpoints.values[o]===0?Object.assign(e,l):e[n.breakpoints.up(o)]=l,e},{})}function qt({theme:n,ownerState:r}){const a=ve({values:r.direction,breakpoints:n.breakpoints.values});return Ne({theme:n},a,e=>{const o={flexDirection:e};return e.indexOf("column")===0&&(o[`& > .${he.item}`]={maxWidth:"none"}),o})}function nt({breakpoints:n,values:r}){let a="";Object.keys(r).forEach(o=>{a===""&&r[o]!==0&&(a=o)});const e=Object.keys(n).sort((o,l)=>n[o]-n[l]);return e.slice(0,e.indexOf(a))}function Qt({theme:n,ownerState:r}){const{container:a,rowSpacing:e}=r;let o={};if(a&&e!==0){const l=ve({values:e,breakpoints:n.breakpoints.values});let p;typeof l=="object"&&(p=nt({breakpoints:n.breakpoints.values,values:l})),o=Ne({theme:n},l,(c,u)=>{var m;const i=n.spacing(c);return i!=="0px"?{marginTop:`-${ce(i)}`,[`& > .${he.item}`]:{paddingTop:ce(i)}}:(m=p)!=null&&m.includes(u)?{}:{marginTop:0,[`& > .${he.item}`]:{paddingTop:0}}})}return o}function Jt({theme:n,ownerState:r}){const{container:a,columnSpacing:e}=r;let o={};if(a&&e!==0){const l=ve({values:e,breakpoints:n.breakpoints.values});let p;typeof l=="object"&&(p=nt({breakpoints:n.breakpoints.values,values:l})),o=Ne({theme:n},l,(c,u)=>{var m;const i=n.spacing(c);return i!=="0px"?{width:`calc(100% + ${ce(i)})`,marginLeft:`-${ce(i)}`,[`& > .${he.item}`]:{paddingLeft:ce(i)}}:(m=p)!=null&&m.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${he.item}`]:{paddingLeft:0}}})}return o}function en(n,r,a={}){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[a[`spacing-xs-${String(n)}`]];const e=[];return r.forEach(o=>{const l=n[o];Number(l)>0&&e.push(a[`spacing-${o}-${String(l)}`])}),e}const tn=Pt("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:a}=n,{container:e,direction:o,item:l,spacing:p,wrap:c,zeroMinWidth:u,breakpoints:m}=a;let i=[];e&&(i=en(p,m,r));const h=[];return m.forEach(v=>{const y=a[v];y&&h.push(r[`grid-${v}-${String(y)}`])}),[r.root,e&&r.container,l&&r.item,u&&r.zeroMinWidth,...i,o!=="row"&&r[`direction-xs-${String(o)}`],c!=="wrap"&&r[`wrap-xs-${String(c)}`],...h]}})(({ownerState:n})=>se({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},n.wrap!=="wrap"&&{flexWrap:n.wrap}),qt,Qt,Jt,Xt);function nn(n,r){if(!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[`spacing-xs-${String(n)}`];const a=[];return r.forEach(e=>{const o=n[e];if(Number(o)>0){const l=`spacing-${e}-${String(o)}`;a.push(l)}}),a}const on=n=>{const{classes:r,container:a,direction:e,item:o,spacing:l,wrap:p,zeroMinWidth:c,breakpoints:u}=n;let m=[];a&&(m=nn(l,u));const i=[];u.forEach(v=>{const y=n[v];y&&i.push(`grid-${v}-${String(y)}`)});const h={root:["root",a&&"container",o&&"item",c&&"zeroMinWidth",...m,e!=="row"&&`direction-xs-${String(e)}`,p!=="wrap"&&`wrap-xs-${String(p)}`,...i]};return St(h,Ht,r)},rn=C.forwardRef(function(r,a){const e=jt({props:r,name:"MuiGrid"}),{breakpoints:o}=Tt(),l=Mt(e),{className:p,columns:c,columnSpacing:u,component:m="div",container:i=!1,direction:h="row",item:v=!1,rowSpacing:y,spacing:M=0,wrap:L="wrap",zeroMinWidth:N=!1}=l,O=yt(l,Zt),j=y||M,R=u||M,S=C.useContext(Ke),x=i?c||12:S,g={},I=se({},O);o.keys.forEach(b=>{O[b]!=null&&(g[b]=O[b],delete I[b])});const T=se({},l,{columns:x,container:i,direction:h,item:v,rowSpacing:j,columnSpacing:R,wrap:L,zeroMinWidth:N,spacing:M},g,{breakpoints:o.keys}),A=on(T);return P.jsx(Ke.Provider,{value:x,children:P.jsx(tn,se({ownerState:T,className:Ot(A.root,p),as:m,ref:a},I))})}),Oe=rn;var me=(n=>(n.Architect="an Architect",n.StructuralEngineer="a Structural Engineer",n.SoftwareEngineer="a Software Engineer",n.WebDeveloper="a Web Developer",n.Artist="an Artist",n))(me||{});function we(n,r,a,e){return new(a||(a=Promise))(function(o,l){function p(m){try{u(e.next(m))}catch(i){l(i)}}function c(m){try{u(e.throw(m))}catch(i){l(i)}}function u(m){var i;m.done?o(m.value):(i=m.value,i instanceof a?i:new a(function(h){h(i)})).then(p,c)}u((e=e.apply(n,r||[])).next())})}function ee(n,r){var a,e,o,l,p={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(u){return function(m){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;p;)try{if(a=1,e&&(o=2&i[0]?e.return:i[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,i[1])).done)return o;switch(e=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return p.label++,{value:i[1],done:!1};case 5:p.label++,e=i[1],i=[0];continue;case 7:i=p.ops.pop(),p.trys.pop();continue;default:if(o=p.trys,!((o=o.length>0&&o[o.length-1])||i[0]!==6&&i[0]!==2)){p=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){p.label=i[1];break}if(i[0]===6&&p.label<o[1]){p.label=o[1],o=i;break}if(o&&p.label<o[2]){p.label=o[2],p.ops.push(i);break}o[2]&&p.ops.pop(),p.trys.pop();continue}i=r.call(n,p)}catch(h){i=[6,h],e=0}finally{a=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([u,m])}}}function Ce(n){var r=typeof Symbol=="function"&&Symbol.iterator,a=r&&n[r],e=0;if(a)return a.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function Y(n,r){var a=typeof Symbol=="function"&&n[Symbol.iterator];if(!a)return n;var e,o,l=a.call(n),p=[];try{for(;(r===void 0||r-- >0)&&!(e=l.next()).done;)p.push(e.value)}catch(c){o={error:c}}finally{try{e&&!e.done&&(a=l.return)&&a.call(l)}finally{if(o)throw o.error}}return p}function F(n,r,a){if(a||arguments.length===2)for(var e,o=0,l=r.length;o<l;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return n.concat(e||Array.prototype.slice.call(r))}function Ze(n,r,a,e,o){for(var l=[],p=5;p<arguments.length;p++)l[p-5]=arguments[p];return we(this,void 0,void 0,function(){var c,u,m,i,h,v;return ee(this,function(y){switch(y.label){case 0:y.trys.push([0,12,13,14]),c=Ce(l),u=c.next(),y.label=1;case 1:if(u.done)return[3,11];switch(m=u.value,typeof m){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,an(n,r,m,a,e,o)];case 3:return y.sent(),[3,10];case 4:return[4,ot(m)];case 5:return y.sent(),[3,10];case 6:return[4,m.apply(void 0,F([n,r,a,e,o],Y(l),!1))];case 7:return y.sent(),[3,10];case 8:return[4,m];case 9:y.sent(),y.label=10;case 10:return u=c.next(),[3,1];case 11:return[3,14];case 12:return i=y.sent(),h={error:i},[3,14];case 13:try{u&&!u.done&&(v=c.return)&&v.call(c)}finally{if(h)throw h.error}return[7];case 14:return[2]}})})}function an(n,r,a,e,o,l){return we(this,void 0,void 0,function(){var p,c;return ee(this,function(u){switch(u.label){case 0:return p=n.textContent||"",c=function(m,i){var h=Y(i).slice(0);return F(F([],Y(m),!1),[NaN],!1).findIndex(function(v,y){return h[y]!==v})}(p,a),[4,sn(n,F(F([],Y(ln(p,r,c)),!1),Y(cn(a,r,c)),!1),e,o,l)];case 1:return u.sent(),[2]}})})}function ot(n){return we(this,void 0,void 0,function(){return ee(this,function(r){switch(r.label){case 0:return[4,new Promise(function(a){return setTimeout(a,n)})];case 1:return r.sent(),[2]}})})}function sn(n,r,a,e,o){return we(this,void 0,void 0,function(){var l,p,c,u,m,i,h,v,y,M,L,N,O;return ee(this,function(j){switch(j.label){case 0:if(l=r,o){for(p=0,c=1;c<r.length;c++)if(u=Y([r[c-1],r[c]],2),m=u[0],(i=u[1]).length>m.length||i===""){p=c;break}l=r.slice(p,r.length)}j.label=1;case 1:j.trys.push([1,6,7,8]),h=Ce(function(R){var S,x,g,I,T,A,b;return ee(this,function(k){switch(k.label){case 0:S=function(H){return ee(this,function(B){switch(B.label){case 0:return[4,{op:function(U){return requestAnimationFrame(function(){return U.textContent=H})},opCode:function(U){var oe=U.textContent||"";return H===""||oe.length>H.length?"DELETE":"WRITING"}}];case 1:return B.sent(),[2]}})},k.label=1;case 1:k.trys.push([1,6,7,8]),x=Ce(R),g=x.next(),k.label=2;case 2:return g.done?[3,5]:(I=g.value,[5,S(I)]);case 3:k.sent(),k.label=4;case 4:return g=x.next(),[3,2];case 5:return[3,8];case 6:return T=k.sent(),A={error:T},[3,8];case 7:try{g&&!g.done&&(b=x.return)&&b.call(x)}finally{if(A)throw A.error}return[7];case 8:return[2]}})}(l)),v=h.next(),j.label=2;case 2:return v.done?[3,5]:(y=v.value,M=y.opCode(n)==="WRITING"?a+a*(Math.random()-.5):e+e*(Math.random()-.5),y.op(n),[4,ot(M)]);case 3:j.sent(),j.label=4;case 4:return v=h.next(),[3,2];case 5:return[3,8];case 6:return L=j.sent(),N={error:L},[3,8];case 7:try{v&&!v.done&&(O=h.return)&&O.call(h)}finally{if(N)throw N.error}return[7];case 8:return[2]}})})}function cn(n,r,a){var e,o;return a===void 0&&(a=0),ee(this,function(l){switch(l.label){case 0:e=r(n),o=e.length,l.label=1;case 1:return a<o?[4,e.slice(0,++a).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}function ln(n,r,a){var e,o;return a===void 0&&(a=0),ee(this,function(l){switch(l.label){case 0:e=r(n),o=e.length,l.label=1;case 1:return o>a?[4,e.slice(0,--o).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}var un="index-module_type__E-SaG";(function(n,r){r===void 0&&(r={});var a=r.insertAt;if(n&&typeof document<"u"){var e=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",a==="top"&&e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var pn=C.memo(C.forwardRef(function(n,r){var a=n.sequence,e=n.repeat,o=n.className,l=n.speed,p=l===void 0?40:l,c=n.deletionSpeed,u=n.omitDeletionAnimation,m=u!==void 0&&u,i=n.preRenderFirstString,h=i!==void 0&&i,v=n.wrapper,y=v===void 0?"span":v,M=n.splitter,L=M===void 0?function(w){return F([],Y(w),!1)}:M,N=n.cursor,O=N===void 0||N,j=n.style,R=function(w,_){var $={};for(var z in w)Object.prototype.hasOwnProperty.call(w,z)&&_.indexOf(z)<0&&($[z]=w[z]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function"){var q=0;for(z=Object.getOwnPropertySymbols(w);q<z.length;q++)_.indexOf(z[q])<0&&Object.prototype.propertyIsEnumerable.call(w,z[q])&&($[z[q]]=w[z[q]])}return $}(n,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),S=R["aria-label"],x=R["aria-hidden"],g=R.role;c||(c=p);var I=new Array(2).fill(40);[p,c].forEach(function(w,_){switch(typeof w){case"number":I[_]=Math.abs(w-100);break;case"object":var $=w.type,z=w.value;if(typeof z!="number")break;$==="keyStrokeDelayInMs"&&(I[_]=z)}});var T,A,b,k,H,B,U=I[0],oe=I[1],te=function(w,_){_===void 0&&(_=null);var $=C.useRef(_);return C.useEffect(function(){w&&(typeof w=="function"?w($.current):w.current=$.current)},[w]),$}(r),le=un;T=o?"".concat(O?le+" ":"").concat(o):O?le:"",A=C.useRef(function(){var w,_=a;e===1/0?w=Ze:typeof e=="number"&&(_=Array(1+e).fill(a).flat());var $=w?F(F([],Y(_),!1),[w],!1):F([],Y(_),!1);return Ze.apply(void 0,F([te.current,L,U,oe,m],Y($),!1)),function(){te.current}}),b=C.useRef(),k=C.useRef(!1),H=C.useRef(!1),B=Y(C.useState(0),2)[1],k.current&&(H.current=!0),C.useEffect(function(){return k.current||(b.current=A.current(),k.current=!0),B(function(w){return w+1}),function(){H.current&&b.current&&b.current()}},[]);var X=y,re=h?a.find(function(w){return typeof w=="string"})||"":null;return Se.createElement(X,{"aria-hidden":x,"aria-label":S,role:g,style:j,className:T,children:S?Se.createElement("span",{"aria-hidden":"true",ref:te,children:re}):re,ref:S?void 0:te})}),function(n,r){return!0});const dn=()=>{const[n]=xt();return P.jsx(P.Fragment,{children:P.jsx(Ae,{component:"div",sx:{backgroundColor:n===vt.DARK?ne.Dark5:ne.Light2,color:"#fff",fontFamily:"monospace",padding:"20px",borderRadius:"10px",minHeight:"200px",minWidth:"100px",maxWidth:"700px",overflowY:"auto",textAlign:"start",border:`2px solid ${ne.Blue8}`,position:"fixed"},children:P.jsxs(Ae,{component:"div",display:"flex",children:[P.jsx(At,{sx:{fontSize:"20px",fontWeight:400,color:ne.Blue8,mr:"5px"},children:"~/src> "}),P.jsx(pn,{sequence:[`Hello, Kelly here 👋🏾 . I'm ${me.Architect}, ${me.StructuralEngineer}, ${me.SoftwareEngineer}, ${me.Artist}, and most importantly, a Sci-Fi/Fantasy Nerd. Thanks for stopping by. Please enjoy the glimpse into my world. 
Appreciate you.`],wrapper:"span",speed:10,cursor:!1,style:{whiteSpace:"pre-wrap",fontSize:"20px",fontWeight:400,display:"inline-block",width:"700px",zIndex:0,position:void 0,color:ne.Blue8},className:"typing"})]})})})};var fn=Object.defineProperty,mn=(n,r,a)=>r in n?fn(n,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[r]=a,d=(n,r,a)=>(mn(n,typeof r!="symbol"?r+"":r,a),a);const xe=new Ct,Xe=new Nt,hn=Math.cos(70*(Math.PI/180)),qe=(n,r)=>(n%r+r)%r;let bn=class extends Dt{constructor(r,a){super(),d(this,"object"),d(this,"domElement"),d(this,"enabled",!0),d(this,"target",new W),d(this,"minDistance",0),d(this,"maxDistance",1/0),d(this,"minZoom",0),d(this,"maxZoom",1/0),d(this,"minPolarAngle",0),d(this,"maxPolarAngle",Math.PI),d(this,"minAzimuthAngle",-1/0),d(this,"maxAzimuthAngle",1/0),d(this,"enableDamping",!1),d(this,"dampingFactor",.05),d(this,"enableZoom",!0),d(this,"zoomSpeed",1),d(this,"enableRotate",!0),d(this,"rotateSpeed",1),d(this,"enablePan",!0),d(this,"panSpeed",1),d(this,"screenSpacePanning",!0),d(this,"keyPanSpeed",7),d(this,"zoomToCursor",!1),d(this,"autoRotate",!1),d(this,"autoRotateSpeed",2),d(this,"reverseOrbit",!1),d(this,"reverseHorizontalOrbit",!1),d(this,"reverseVerticalOrbit",!1),d(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),d(this,"mouseButtons",{LEFT:ie.ROTATE,MIDDLE:ie.DOLLY,RIGHT:ie.PAN}),d(this,"touches",{ONE:ae.ROTATE,TWO:ae.DOLLY_PAN}),d(this,"target0"),d(this,"position0"),d(this,"zoom0"),d(this,"_domElementKeyEvents",null),d(this,"getPolarAngle"),d(this,"getAzimuthalAngle"),d(this,"setPolarAngle"),d(this,"setAzimuthalAngle"),d(this,"getDistance"),d(this,"listenToKeyEvents"),d(this,"stopListenToKeyEvents"),d(this,"saveState"),d(this,"reset"),d(this,"update"),d(this,"connect"),d(this,"dispose"),this.object=r,this.domElement=a,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>i.phi,this.getAzimuthalAngle=()=>i.theta,this.setPolarAngle=t=>{let s=qe(t,2*Math.PI),f=i.phi;f<0&&(f+=2*Math.PI),s<0&&(s+=2*Math.PI);let E=Math.abs(s-f);2*Math.PI-E<E&&(s<f?s+=2*Math.PI:f+=2*Math.PI),h.phi=s-f,e.update()},this.setAzimuthalAngle=t=>{let s=qe(t,2*Math.PI),f=i.theta;f<0&&(f+=2*Math.PI),s<0&&(s+=2*Math.PI);let E=Math.abs(s-f);2*Math.PI-E<E&&(s<f?s+=2*Math.PI:f+=2*Math.PI),h.theta=s-f,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",Te),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(o),e.update(),u=c.NONE},this.update=(()=>{const t=new W,s=new W(0,1,0),f=new Ue().setFromUnitVectors(r.up,s),E=f.clone().invert(),D=new W,V=new Ue,Q=2*Math.PI;return function(){const He=e.object.position;f.setFromUnitVectors(r.up,s),E.copy(f).invert(),t.copy(He).sub(e.target),t.applyQuaternion(f),i.setFromVector3(t),e.autoRotate&&u===c.NONE&&U(H()),e.enableDamping?(i.theta+=h.theta*e.dampingFactor,i.phi+=h.phi*e.dampingFactor):(i.theta+=h.theta,i.phi+=h.phi);let K=e.minAzimuthAngle,Z=e.maxAzimuthAngle;isFinite(K)&&isFinite(Z)&&(K<-Math.PI?K+=Q:K>Math.PI&&(K-=Q),Z<-Math.PI?Z+=Q:Z>Math.PI&&(Z-=Q),K<=Z?i.theta=Math.max(K,Math.min(Z,i.theta)):i.theta=i.theta>(K+Z)/2?Math.max(K,i.theta):Math.min(Z,i.theta)),i.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,i.phi)),i.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(y,e.dampingFactor):e.target.add(y),e.zoomToCursor&&A||e.object.isOrthographicCamera?i.radius=$(i.radius):i.radius=$(i.radius*v),t.setFromSpherical(i),t.applyQuaternion(E),He.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(h.theta*=1-e.dampingFactor,h.phi*=1-e.dampingFactor,y.multiplyScalar(1-e.dampingFactor)):(h.set(0,0,0),y.set(0,0,0));let ue=!1;if(e.zoomToCursor&&A){let pe=null;if(e.object instanceof ge&&e.object.isPerspectiveCamera){const de=t.length();pe=$(de*v);const be=de-pe;e.object.position.addScaledVector(I,be),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const de=new W(T.x,T.y,0);de.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/v)),e.object.updateProjectionMatrix(),ue=!0;const be=new W(T.x,T.y,0);be.unproject(e.object),e.object.position.sub(be).add(de),e.object.updateMatrixWorld(),pe=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;pe!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(pe).add(e.object.position):(xe.origin.copy(e.object.position),xe.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(xe.direction))<hn?r.lookAt(e.target):(Xe.setFromNormalAndCoplanarPoint(e.object.up,e.target),xe.intersectPlane(Xe,e.target))))}else e.object instanceof ye&&e.object.isOrthographicCamera&&(ue=v!==1,ue&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/v)),e.object.updateProjectionMatrix()));return v=1,A=!1,ue||D.distanceToSquared(e.object.position)>m||8*(1-V.dot(e.object.quaternion))>m?(e.dispatchEvent(o),D.copy(e.object.position),V.copy(e.object.quaternion),ue=!1,!0):!1}})(),this.connect=t=>{t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Ye),e.domElement.addEventListener("pointerdown",$e),e.domElement.addEventListener("pointercancel",We),e.domElement.addEventListener("wheel",Ge)},this.dispose=()=>{var t,s,f,E,D,V;(t=e.domElement)==null||t.removeEventListener("contextmenu",Ye),(s=e.domElement)==null||s.removeEventListener("pointerdown",$e),(f=e.domElement)==null||f.removeEventListener("pointercancel",We),(E=e.domElement)==null||E.removeEventListener("wheel",Ge),(D=e.domElement)==null||D.ownerDocument.removeEventListener("pointermove",Pe),(V=e.domElement)==null||V.ownerDocument.removeEventListener("pointerup",je),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Te)};const e=this,o={type:"change"},l={type:"start"},p={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=c.NONE;const m=1e-6,i=new Ve,h=new Ve;let v=1;const y=new W,M=new G,L=new G,N=new G,O=new G,j=new G,R=new G,S=new G,x=new G,g=new G,I=new W,T=new G;let A=!1;const b=[],k={};function H(){return 2*Math.PI/60/60*e.autoRotateSpeed}function B(){return Math.pow(.95,e.zoomSpeed)}function U(t){e.reverseOrbit||e.reverseHorizontalOrbit?h.theta+=t:h.theta-=t}function oe(t){e.reverseOrbit||e.reverseVerticalOrbit?h.phi+=t:h.phi-=t}const te=(()=>{const t=new W;return function(f,E){t.setFromMatrixColumn(E,0),t.multiplyScalar(-f),y.add(t)}})(),le=(()=>{const t=new W;return function(f,E){e.screenSpacePanning===!0?t.setFromMatrixColumn(E,1):(t.setFromMatrixColumn(E,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(f),y.add(t)}})(),X=(()=>{const t=new W;return function(f,E){const D=e.domElement;if(D&&e.object instanceof ge&&e.object.isPerspectiveCamera){const V=e.object.position;t.copy(V).sub(e.target);let Q=t.length();Q*=Math.tan(e.object.fov/2*Math.PI/180),te(2*f*Q/D.clientHeight,e.object.matrix),le(2*E*Q/D.clientHeight,e.object.matrix)}else D&&e.object instanceof ye&&e.object.isOrthographicCamera?(te(f*(e.object.right-e.object.left)/e.object.zoom/D.clientWidth,e.object.matrix),le(E*(e.object.top-e.object.bottom)/e.object.zoom/D.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function re(t){e.object instanceof ge&&e.object.isPerspectiveCamera||e.object instanceof ye&&e.object.isOrthographicCamera?v/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function w(t){e.object instanceof ge&&e.object.isPerspectiveCamera||e.object instanceof ye&&e.object.isOrthographicCamera?v*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function _(t){if(!e.zoomToCursor||!e.domElement)return;A=!0;const s=e.domElement.getBoundingClientRect(),f=t.clientX-s.left,E=t.clientY-s.top,D=s.width,V=s.height;T.x=f/D*2-1,T.y=-(E/V)*2+1,I.set(T.x,T.y,1).unproject(e.object).sub(e.object.position).normalize()}function $(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function z(t){M.set(t.clientX,t.clientY)}function q(t){_(t),S.set(t.clientX,t.clientY)}function De(t){O.set(t.clientX,t.clientY)}function rt(t){L.set(t.clientX,t.clientY),N.subVectors(L,M).multiplyScalar(e.rotateSpeed);const s=e.domElement;s&&(U(2*Math.PI*N.x/s.clientHeight),oe(2*Math.PI*N.y/s.clientHeight)),M.copy(L),e.update()}function it(t){x.set(t.clientX,t.clientY),g.subVectors(x,S),g.y>0?re(B()):g.y<0&&w(B()),S.copy(x),e.update()}function at(t){j.set(t.clientX,t.clientY),R.subVectors(j,O).multiplyScalar(e.panSpeed),X(R.x,R.y),O.copy(j),e.update()}function st(t){_(t),t.deltaY<0?w(B()):t.deltaY>0&&re(B()),e.update()}function ct(t){let s=!1;switch(t.code){case e.keys.UP:X(0,e.keyPanSpeed),s=!0;break;case e.keys.BOTTOM:X(0,-e.keyPanSpeed),s=!0;break;case e.keys.LEFT:X(e.keyPanSpeed,0),s=!0;break;case e.keys.RIGHT:X(-e.keyPanSpeed,0),s=!0;break}s&&(t.preventDefault(),e.update())}function Re(){if(b.length==1)M.set(b[0].pageX,b[0].pageY);else{const t=.5*(b[0].pageX+b[1].pageX),s=.5*(b[0].pageY+b[1].pageY);M.set(t,s)}}function ke(){if(b.length==1)O.set(b[0].pageX,b[0].pageY);else{const t=.5*(b[0].pageX+b[1].pageX),s=.5*(b[0].pageY+b[1].pageY);O.set(t,s)}}function Le(){const t=b[0].pageX-b[1].pageX,s=b[0].pageY-b[1].pageY,f=Math.sqrt(t*t+s*s);S.set(0,f)}function lt(){e.enableZoom&&Le(),e.enablePan&&ke()}function ut(){e.enableZoom&&Le(),e.enableRotate&&Re()}function Ie(t){if(b.length==1)L.set(t.pageX,t.pageY);else{const f=Me(t),E=.5*(t.pageX+f.x),D=.5*(t.pageY+f.y);L.set(E,D)}N.subVectors(L,M).multiplyScalar(e.rotateSpeed);const s=e.domElement;s&&(U(2*Math.PI*N.x/s.clientHeight),oe(2*Math.PI*N.y/s.clientHeight)),M.copy(L)}function _e(t){if(b.length==1)j.set(t.pageX,t.pageY);else{const s=Me(t),f=.5*(t.pageX+s.x),E=.5*(t.pageY+s.y);j.set(f,E)}R.subVectors(j,O).multiplyScalar(e.panSpeed),X(R.x,R.y),O.copy(j)}function ze(t){const s=Me(t),f=t.pageX-s.x,E=t.pageY-s.y,D=Math.sqrt(f*f+E*E);x.set(0,D),g.set(0,Math.pow(x.y/S.y,e.zoomSpeed)),re(g.y),S.copy(x)}function pt(t){e.enableZoom&&ze(t),e.enablePan&&_e(t)}function dt(t){e.enableZoom&&ze(t),e.enableRotate&&Ie(t)}function $e(t){var s,f;e.enabled!==!1&&(b.length===0&&((s=e.domElement)==null||s.ownerDocument.addEventListener("pointermove",Pe),(f=e.domElement)==null||f.ownerDocument.addEventListener("pointerup",je)),gt(t),t.pointerType==="touch"?ht(t):ft(t))}function Pe(t){e.enabled!==!1&&(t.pointerType==="touch"?bt(t):mt(t))}function je(t){var s,f,E;Be(t),b.length===0&&((s=e.domElement)==null||s.releasePointerCapture(t.pointerId),(f=e.domElement)==null||f.ownerDocument.removeEventListener("pointermove",Pe),(E=e.domElement)==null||E.ownerDocument.removeEventListener("pointerup",je)),e.dispatchEvent(p),u=c.NONE}function We(t){Be(t)}function ft(t){let s;switch(t.button){case 0:s=e.mouseButtons.LEFT;break;case 1:s=e.mouseButtons.MIDDLE;break;case 2:s=e.mouseButtons.RIGHT;break;default:s=-1}switch(s){case ie.DOLLY:if(e.enableZoom===!1)return;q(t),u=c.DOLLY;break;case ie.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;De(t),u=c.PAN}else{if(e.enableRotate===!1)return;z(t),u=c.ROTATE}break;case ie.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;z(t),u=c.ROTATE}else{if(e.enablePan===!1)return;De(t),u=c.PAN}break;default:u=c.NONE}u!==c.NONE&&e.dispatchEvent(l)}function mt(t){if(e.enabled!==!1)switch(u){case c.ROTATE:if(e.enableRotate===!1)return;rt(t);break;case c.DOLLY:if(e.enableZoom===!1)return;it(t);break;case c.PAN:if(e.enablePan===!1)return;at(t);break}}function Ge(t){e.enabled===!1||e.enableZoom===!1||u!==c.NONE&&u!==c.ROTATE||(t.preventDefault(),e.dispatchEvent(l),st(t),e.dispatchEvent(p))}function Te(t){e.enabled===!1||e.enablePan===!1||ct(t)}function ht(t){switch(Fe(t),b.length){case 1:switch(e.touches.ONE){case ae.ROTATE:if(e.enableRotate===!1)return;Re(),u=c.TOUCH_ROTATE;break;case ae.PAN:if(e.enablePan===!1)return;ke(),u=c.TOUCH_PAN;break;default:u=c.NONE}break;case 2:switch(e.touches.TWO){case ae.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;lt(),u=c.TOUCH_DOLLY_PAN;break;case ae.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ut(),u=c.TOUCH_DOLLY_ROTATE;break;default:u=c.NONE}break;default:u=c.NONE}u!==c.NONE&&e.dispatchEvent(l)}function bt(t){switch(Fe(t),u){case c.TOUCH_ROTATE:if(e.enableRotate===!1)return;Ie(t),e.update();break;case c.TOUCH_PAN:if(e.enablePan===!1)return;_e(t),e.update();break;case c.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;pt(t),e.update();break;case c.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;dt(t),e.update();break;default:u=c.NONE}}function Ye(t){e.enabled!==!1&&t.preventDefault()}function gt(t){b.push(t)}function Be(t){delete k[t.pointerId];for(let s=0;s<b.length;s++)if(b[s].pointerId==t.pointerId){b.splice(s,1);return}}function Fe(t){let s=k[t.pointerId];s===void 0&&(s=new G,k[t.pointerId]=s),s.set(t.pageX,t.pageY)}function Me(t){const s=t.pointerId===b[0].pointerId?b[1]:b[0];return k[s.pointerId]}a!==void 0&&this.connect(a),this.update()}};const gn=C.forwardRef(({makeDefault:n,camera:r,regress:a,domElement:e,enableDamping:o=!0,keyEvents:l=!1,onChange:p,onStart:c,onEnd:u,...m},i)=>{const h=J(g=>g.invalidate),v=J(g=>g.camera),y=J(g=>g.gl),M=J(g=>g.events),L=J(g=>g.setEvents),N=J(g=>g.set),O=J(g=>g.get),j=J(g=>g.performance),R=r||v,S=e||M.connected||y.domElement,x=C.useMemo(()=>new bn(R),[R]);return Rt(()=>{x.enabled&&x.update()},-1),C.useEffect(()=>(l&&x.connect(l===!0?S:l),x.connect(S),()=>void x.dispose()),[l,S,a,x,h]),C.useEffect(()=>{const g=A=>{h(),a&&j.regress(),p&&p(A)},I=A=>{c&&c(A)},T=A=>{u&&u(A)};return x.addEventListener("change",g),x.addEventListener("start",I),x.addEventListener("end",T),()=>{x.removeEventListener("start",I),x.removeEventListener("end",T),x.removeEventListener("change",g)}},[p,c,u,x,h,L]),C.useEffect(()=>{if(n){const g=O().controls;return N({controls:x}),()=>N({controls:g})}},[n,x]),C.createElement("primitive",se({ref:i,object:x,enableDamping:o},m))}),Qe=({mesh:n})=>{const r=Se.useRef(),a=new kt(n.geometry),e=new Lt({color:"black",linewidth:1}),o=new It(a,e);return n.add(o),P.jsx("primitive",{object:n,ref:r,position:!0})},yn=new _t(.5,.4,.5),xn=new zt({color:new et(ne.Blue8),opacity:.5,transparent:!0}),vn=new tt(yn,xn),wn=new $t,En=new Wt({color:new et("white"),opacity:.75,transparent:!0}),Ee=new tt(wn,En);Ee.scale.set(3,3,3);Ee.rotation.set(-Math.PI*.5,0,0);Ee.position.set(0,0,-10);const Pn=()=>P.jsxs(P.Fragment,{children:[P.jsx("group",{position:[0,.5,1],children:P.jsx(Gt,{animation:"Typing"})}),P.jsx("group",{position:[-1,-.25,0],children:P.jsx(Qe,{mesh:vn})}),P.jsx("ambientLight",{intensity:.5}),P.jsx("group",{position:[-1,-.5,0],children:P.jsx(Qe,{mesh:Ee})})]}),Je={xs:12,sm:12,m:6,lg:6},jn=()=>P.jsx(P.Fragment,{children:P.jsx(Ae,{component:"div",sx:{flexGrow:1,display:"flex"},children:P.jsxs(Oe,{container:!0,wrap:"nowrap",children:[P.jsx(Oe,{item:!0,...Je,children:P.jsx(dn,{})}),P.jsx(Oe,{item:!0,...Je,children:P.jsxs(Yt,{camera:{position:[0,3,4],fov:40},style:{height:"700px",borderRadius:"10px",border:`2px solid ${ne.Blue8}`},children:[P.jsx(gn,{makedefault:!0}),P.jsx(Bt,{preset:"city"}),P.jsx(Pn,{})]})})]})})}),Nn=jn;export{Nn as default};
