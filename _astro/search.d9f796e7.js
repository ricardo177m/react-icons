import{j as t}from"./jsx-runtime.51014c9d.js";import{R as m}from"./index.6460afdd.js";import{g as C,I as y,a as x}from"./icondetailmodal.153971d5.js";import{u as v}from"./usesearch.245380cd.js";import"./index.7bb0213e.js";import"./router.6fe030b8.js";var p=function(){return p=Object.assign||function(o){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o},p.apply(this,arguments)};function E(e,o){o===void 0&&(o={});var n=o.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var S='.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}',M={skeleton:"styles_skeleton__tyzRD","skeleton-progress":"styles_skeleton-progress__aezri"};E(S);function b(e){var o=e.width,n=o===void 0?"100%":o,i=e.height,s=i===void 0?"1em":i,r=e.background,l=r===void 0?"#E9ECEF":r,c=e.radius,a=c===void 0?"4px":c,h=e.circle,I=h===void 0?!1:h,d=e.block,U=d===void 0?!0:d,g=e.style,f=g===void 0?{}:g,u=e.as,j=u===void 0?"div":u;return m.createElement(j,{className:M.skeleton,style:p({width:n,height:s,background:l,borderRadius:I?"50%":a,display:U?"block":"inline-block"},f)},"‌")}function T(){return t.jsxs("div",{className:"item",children:[t.jsx(b,{height:"60px"}),t.jsx("div",{className:"name",children:t.jsx(b,{height:"15px"})})]})}function L({icon:e,query:o,highlightPattern:n,onSelect:i}){const[s,r]=m.useState();m.useEffect(()=>{C(e.id).then(c=>r(c))},[]);const l=s&&Object.keys(s).filter(c=>c.toLowerCase().includes(o));return t.jsx(t.Fragment,{children:l?l.map(c=>{const a=s[c];return a?t.jsx(y,{component:a,iconSet:e.id,iconName:c,highlightPattern:n,onSelect:h=>i?.(e.id,h,a)},c):null}):t.jsx(T,{})})}var w=[{id:"ci",name:"Circum Icons",projectUrl:"https://circumicons.com/",license:"MPL-2.0 license",licenseUrl:"https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"},{id:"fa",name:"Font Awesome 5",projectUrl:"https://fontawesome.com/",license:"CC BY 4.0 License",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"fa6",name:"Font Awesome 6",projectUrl:"https://fontawesome.com/",license:"CC BY 4.0 License",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"io",name:"Ionicons 4",projectUrl:"https://ionicons.com/",license:"MIT",licenseUrl:"https://github.com/ionic-team/ionicons/blob/master/LICENSE"},{id:"io5",name:"Ionicons 5",projectUrl:"https://ionicons.com/",license:"MIT",licenseUrl:"https://github.com/ionic-team/ionicons/blob/master/LICENSE"},{id:"md",name:"Material Design icons",projectUrl:"http://google.github.io/material-design-icons/",license:"Apache License Version 2.0",licenseUrl:"https://github.com/google/material-design-icons/blob/master/LICENSE"},{id:"ti",name:"Typicons",projectUrl:"http://s-ings.com/typicons/",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"},{id:"go",name:"Github Octicons icons",projectUrl:"https://octicons.github.com/",license:"MIT",licenseUrl:"https://github.com/primer/octicons/blob/master/LICENSE"},{id:"fi",name:"Feather",projectUrl:"https://feathericons.com/",license:"MIT",licenseUrl:"https://github.com/feathericons/feather/blob/master/LICENSE"},{id:"lu",name:"Lucide",projectUrl:"https://lucide.dev/",license:"ISC",licenseUrl:"https://github.com/lucide-icons/lucide/blob/main/LICENSE"},{id:"gi",name:"Game Icons",projectUrl:"https://game-icons.net/",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/"},{id:"wi",name:"Weather Icons",projectUrl:"https://erikflowers.github.io/weather-icons/",license:"SIL OFL 1.1",licenseUrl:"http://scripts.sil.org/OFL"},{id:"di",name:"Devicons",projectUrl:"https://vorillaz.github.io/devicons/",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"ai",name:"Ant Design Icons",projectUrl:"https://github.com/ant-design/ant-design-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"bs",name:"Bootstrap Icons",projectUrl:"https://github.com/twbs/icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"ri",name:"Remix Icon",projectUrl:"https://github.com/Remix-Design/RemixIcon",license:"Apache License Version 2.0",licenseUrl:"http://www.apache.org/licenses/"},{id:"fc",name:"Flat Color Icons",projectUrl:"https://github.com/icons8/flat-color-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"gr",name:"Grommet-Icons",projectUrl:"https://github.com/grommet/grommet-icons",license:"Apache License Version 2.0",licenseUrl:"http://www.apache.org/licenses/"},{id:"hi",name:"Heroicons",projectUrl:"https://github.com/tailwindlabs/heroicons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"hi2",name:"Heroicons 2",projectUrl:"https://github.com/tailwindlabs/heroicons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"si",name:"Simple Icons",projectUrl:"https://simpleicons.org/",license:"CC0 1.0 Universal",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/"},{id:"sl",name:"Simple Line Icons",projectUrl:"https://thesabbir.github.io/simple-line-icons/",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"im",name:"IcoMoon Free",projectUrl:"https://github.com/Keyamoon/IcoMoon-Free",license:"CC BY 4.0 License",licenseUrl:"https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"},{id:"bi",name:"BoxIcons",projectUrl:"https://github.com/atisawd/boxicons",license:"CC BY 4.0 License",licenseUrl:"https://github.com/atisawd/boxicons/blob/master/LICENSE"},{id:"cg",name:"css.gg",projectUrl:"https://github.com/astrit/css.gg",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"vsc",name:"VS Code Icons",projectUrl:"https://github.com/microsoft/vscode-codicons",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"tb",name:"Tabler Icons",projectUrl:"https://github.com/tabler/tabler-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"tfi",name:"Themify Icons",projectUrl:"https://github.com/lykmapipo/themify-icons",license:"MIT",licenseUrl:"https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"},{id:"rx",name:"Radix Icons",projectUrl:"https://icons.radix-ui.com",license:"MIT",licenseUrl:"https://github.com/radix-ui/icons/blob/master/LICENSE"},{id:"pi",name:"Phosphor Icons",projectUrl:"https://github.com/phosphor-icons/core",license:"MIT",licenseUrl:"https://github.com/phosphor-icons/core/blob/main/LICENSE"},{id:"lia",name:"Icons8 Line Awesome",projectUrl:"https://icons8.com/line-awesome",license:"MIT",licenseUrl:"https://github.com/icons8/line-awesome/blob/master/LICENSE.md"}];function B(){const{query:e}=v(),[o,n]=m.useState(null),[i,s]=m.useState(!0);if(m.useEffect(()=>{s(!1)},[]),!i&&e?.length>2){const r=new RegExp(`(${e})`,"i");return t.jsxs(t.Fragment,{children:[t.jsx(x,{iconSet:o?.[0],iconName:o?.[1]??null,component:o?.[2],onClose:()=>n(null)}),t.jsxs("h2",{children:["Results for: ",t.jsx("i",{children:e})]}),t.jsx("div",{className:"icons",children:w.map(l=>t.jsx(L,{icon:l,query:e,highlightPattern:r,onSelect:(c,a,h)=>{n([c,a,h])}},l.id))}),t.jsx("h3",{className:"no-results"})]})}return t.jsx("h2",{children:"Please enter at least 3 characters to search..."})}export{B as SearchPageComponent};
