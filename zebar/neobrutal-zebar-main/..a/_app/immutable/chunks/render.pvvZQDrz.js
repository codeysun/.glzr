import{i as C,j as A,k as D,l as M,o as Y,q as I,r as b,v as j,H as q,w as B,x as T,y as g,z as O,A as P,c as v,B as $,C as z,D as F,F as G,G as J,I as K,J as W,a as Q,p as U,h as E,e as X,K as Z}from"./runtime.Czs0QvMq.js";import{b as x}from"./disclose-version.MXekDU1f.js";const k=new Set,S=new Set;function sr(r){for(var e=0;e<r.length;e++)k.add(r[e]);for(var n of S)n(r)}function m(r){var R;var e=this,n=e.ownerDocument,_=r.type,i=((R=r.composedPath)==null?void 0:R.call(r))||[],a=i[0]||r.target,d=0,h=r.__root;if(h){var u=i.indexOf(h);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var l=i.indexOf(e);if(l===-1)return;u<=l&&(d=u)}if(a=i[d]||r.target,a!==e){C(r,"currentTarget",{configurable:!0,get(){return a||n}});var w=Y,o=I;A(null),D(null);try{for(var t,s=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var c=a["__"+_];if(c!==void 0&&!a.disabled)if(M(c)){var[L,...V]=c;L.apply(a,[r,...V])}else c.call(a,r)}catch(y){t?s.push(y):t=y}if(r.cancelBubble||f===e||f===null)break;a=f}if(t){for(let y of s)queueMicrotask(()=>{throw y});throw t}}finally{r.__root=e,delete r.currentTarget,A(w),D(o)}}}const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}function or(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function ar(r,e){return H(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const n=e.target,_=E,i=v;try{for(var a=j(n);a&&(a.nodeType!==8||a.data!==q);)a=B(a);if(!a)throw T;g(!0),O(a),P();const d=H(r,{...e,anchor:a});if(v===null||v.nodeType!==8||v.data!==$)throw z(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&F(),b(),G(n),g(!1),ar(r,e);throw d}finally{g(_),O(i)}}const p=new Map;function H(r,{target:e,anchor:n,props:_={},events:i,context:a,intro:d=!0}){b();var h=new Set,u=o=>{for(var t=0;t<o.length;t++){var s=o[t];if(!h.has(s)){h.add(s);var f=er(s);e.addEventListener(s,m,{passive:f});var c=p.get(s);c===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,c+1)}}};u(J(k)),S.add(u);var l=void 0,w=K(()=>{var o=n??e.appendChild(W());return Q(()=>{if(a){U({});var t=Z;t.c=a}i&&(_.$$events=i),E&&x(o,null),l=r(o,_)||{},E&&(I.nodes_end=v),a&&X()}),()=>{var f;for(var t of h){e.removeEventListener(t,m);var s=p.get(t);--s===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,s)}S.delete(u),N.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(l,w),l}let N=new WeakMap;function fr(r){const e=N.get(r);e&&e()}export{sr as d,ir as h,ar as m,or as s,fr as u};
