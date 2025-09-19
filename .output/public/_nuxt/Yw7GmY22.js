import{J as i}from"#entry";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase()),C=t=>{const e=g(t);return e.charAt(0).toUpperCase()+e.slice(1)},p=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim(),w=t=>t==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=({name:t,iconNode:e,absoluteStrokeWidth:o,"absolute-stroke-width":r,strokeWidth:c,"stroke-width":a,size:n=s.width,color:d=s.stroke,...h},{slots:l})=>i("svg",{...s,...h,width:n,height:n,stroke:d,"stroke-width":w(o)||w(r)||o===!0||r===!0?Number(c||a||s["stroke-width"])*24/Number(n):c||a||s["stroke-width"],class:p("lucide",h.class,...t?[`lucide-${u(C(t))}-icon`,`lucide-${u(t)}`]:["lucide-icon"])},[...e.map(m=>i(...m)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(t,e)=>(o,{slots:r,attrs:c})=>i(k,{...c,...o,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=f("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);export{x as C,f as c};
