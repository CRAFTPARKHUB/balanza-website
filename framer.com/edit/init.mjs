var fe=Object.defineProperty;var pe=(e,t,o)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var P=(e,t,o)=>pe(e,typeof t!="symbol"?t+"":t,o);var A="__framer_hide_editorbar_until",M="__framer_force_showing_editorbar_since",R="var(--max-z-index)",D="--infinity: infinity; --max-z-index: var(--infinity, 2147483647);";var X=new Date("2025-08-06T17:00:05.000Z");var k=12,G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApNJREFUSA2tlUtLlFEYgEe7mtFFQ8NLFBG1SJAwahtiLVy5ceVSEPQH1LZf0Lp9FO1bdYNyI7gyBFcS2kAzilYq3sfxeYZ55Zv6FGfohWfOd97vnPd23u9MXeZoaeb1Q7gPHXAFzsAS5GACxiEPqVKXqs1kmtAPQi+cAtedToz1PJ8ExxPwDl7CAlRImoN7rBiF86ABHTiGAzMIh8n3O+ifwWc4EL0n5TGTYQijvjNSxbUadozInUeGZ3nuh1WYgpIkM+hGMwYajAgdrfUn+AaLoLTCAxiAOxCZxL4RdB+gZMjxEjwHo4hS8Jh5DR9hz0mKaNizegoNEI7Wee6FXJTISG6AUgDr+QImoAiHie+mwZJow/PRps4uwnsnRj8Epqc4voVJJ8eULOtW4BFYYjPpgjc+3IWI2sh/wFeoVl6xYQ48dDGLfjOwc/ygQqz595hUMVouS9QHBm4l6k3HWpnBLqicgVrlCxujSbR1Swd+UDpQYRS/oVaZZ2MWwlZBB9Zdxf+QTYw8SRgq6sAvz7vH6JULEB9USVHFjzZskgPRQR4ayxoXXIdaHdg9HrB2rErByWxZERnYtrWUzD0esDbtTmXPhzXwHrKLxEUbYGbVyDkWWwkdadfqbPmwDXZSCyh2VAf8BM/nOOJH5Y0QopMt2I5U/KO4DZZJB47XwEX+ex0mGroMV8sLwp56gyuGwiyW4SZ4c8bt2cZzO7jBNeqtsRHbeZ1g9krsMbhfYPv/c5gecA+4yAVuitFszE5Hjva872OMdXagF19JIoOYWyozMTI3J0tmA6gLvXPfO1cc/XOqOLe/HbjwD8yCXRD3VNJROEgatiRZMJsKsbZHia3nAdphtq8fkiWyXJbBe8uM1aXKPouNnz2Bm1kwAAAAAElFTkSuQmCC",B="__framer-editorbar-container",I="__framer-editorbar-label",O="__framer-editorbar-button",F="__framer-editorbar-loading-spinner",U="__framer-editorbar-button-tooltip-visible",me=`
#${B} {
    align-items: center;
    bottom: 50%;
    display: flex;
    gap: 8px;
    position: fixed;
    right: 10px;
    transform: translateY(50%);
    ${D}
    z-index: calc(${R});
}

#${I} {
    background-color: #111;
    border-radius: 8px;
    font-family: "Inter", "Inter-Regular", system-ui, Arial, sans-serif;
    font-size: 12px;
    height: fit-content;
    opacity: 0;
    padding: 4px 8px;
    transition: opacity 0.4s ease-out;
    font-weight: 500;
}

#${O} {
    all: unset;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
}

#${I}.${U} {
    opacity: 1;
}

#${I}, #${O} {
    backdrop-filter: blur(10px);
    background-color: rgba(34, 34, 34, 0.8);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;
    color: #fff;
}

#${F} {
    width: ${k}px;
    height: ${k}px;
    -webkit-mask: url(${G});
    mask: url(${G});
    -webkit-mask-size: ${k}px;
    mask-size: ${k}px;
    background-color: #fff;


    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-name: __framer-loading-spin;
    animation-timing-function: linear;
}

@keyframes __framer-loading-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`,W=document.createElement("style");W.type="text/css";W.innerHTML=me;document.head.appendChild(W);var H;(n=>(n.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,n.isChrome=navigator.userAgent.toLowerCase().includes("chrome/"),n.isWebKit=navigator.userAgent.toLowerCase().includes("applewebkit/"),n.isSafari=n.isWebKit&&!n.isChrome,n.isSafariDesktop=n.isSafari&&!n.isTouch,n.isWindows=/Win/u.test(navigator.platform),n.isMacOS=/Mac/u.test(navigator.platform),n.isAndroidWebView=n.isChrome&&navigator.userAgent.toLowerCase().includes("; wv)"),n.isIosWebView=n.isWebKit&&!navigator.userAgent.toLowerCase().includes("safari/"),n.isWebView=n.isAndroidWebView||n.isIosWebView))(H||={});var S=class extends Promise{constructor(){let o,d;super((r,s)=>{o=r,d=s});P(this,"_state","initial");P(this,"resolve");P(this,"reject");this.resolve=r=>{this._state="fulfilled",o(r)},this.reject=r=>{this._state="rejected",d(r)}}get state(){return this._state}pending(){return this._state="pending",this}isResolved(){return this._state==="fulfilled"||this._state==="rejected"}};S.prototype.constructor=Promise;var $="framer_",g="editSite";function w(e){let t=window.__framer_editorBarDependencies;if(!t)throw new Error("Dependencies not found");if(t.__version<1||t.__version>2)throw new Error("Unsupported version");let o=t[e];if(!o)throw new Error("Dependency not found");return o}var{createElement:K,memo:J,useCallback:q,useEffect:m,useRef:C,useState:l}=w("react");var{createPortal:V}=w("react-dom");function f(e,t,o){let{children:d,...r}=t??{};return K(e,o?{...r,key:o}:r,d)}var z=f;function Q({isLoading:e,isEditorVisible:t,onClick:o}){let[d,r]=l(!1),[s,u]=l(t);return s!==t&&(u(t),t||r(!1)),z("div",{id:B,children:[f("span",{"aria-label":"Edit Framer Content",id:I,className:d?U:void 0,children:"Edit Content"}),f("button",{type:"button","aria-labelledby":I,id:O,onClick:o,onMouseMove:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:e?f(Ee,{}):f(ge,{})})]})}function ge(){return z("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"none",children:[f("path",{d:"M8.75 2.25a1.77 1.77 0 0 1 2.5 0h0c.69.69.69 1.81 0 2.5l-7 7h-2.5v-2.5Z",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),f("path",{d:"M8 11.75h3.75",fill:"transparent",strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round"})]})}function Ee(){return f("div",{id:F})}var T="data-original-href",ee="link[rel*='icon']",he=`${ee}:not([${T}])`,_e="https://framerusercontent.com/sites/icons/writing-hand-favicon.png";function te(){document.querySelectorAll(he).forEach(e=>{e instanceof HTMLLinkElement&&(e.setAttribute(T,e.href),e.setAttribute("href",_e))})}function ne(){document.querySelectorAll(ee).forEach(e=>{e instanceof HTMLLinkElement&&e.getAttribute(T)&&(e.setAttribute("href",e.getAttribute(T)??""),e.removeAttribute(T))})}function oe(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function re(e,t){let[o,d]=l(!1);return m(()=>{let r=s=>{if(s.origin!==e||!oe(s.data))return;let{apiVersion:u,type:a,component:i}=s.data;u===1&&a==="initializeComponent"&&i===t&&d(!0)};return window.addEventListener("message",r),()=>{window.removeEventListener("message",r)}},[e,t]),o}var{useCurrentRoute:ie,useLocaleInfo:se,useRouter:ae}=w("framer");function ue(){let e=ie(),t=se()?.activeLocale??void 0,{collectionUtils:o}=ae(),[d,r]=l(),s=e?.id,u=e?.collectionId,a=e?.pathVariables;return m(()=>{if(!s)return;let i=!1;return Ie(t,u,o,a).then(c=>{i||r({collectionItemNodeId:c,webPageNodeId:s})}).catch(()=>{i||r({collectionItemNodeId:void 0,webPageNodeId:s})}),()=>{i=!0}},[t,u,o,a,s]),d}async function Ie(e,t,o,d){if(!t)return;let r=Object.values(d??{}),[s]=r;if(r.length!==1||!s||typeof s!="string")return;let u=o?.[t];return(await u?.())?.getRecordIdBySlug(s,e)}function de(e,t){let o=ue(),d=re(t,"OnPageActiveRouteStore");m(()=>{d&&e.current?.contentWindow?.postMessage({apiVersion:1,type:"updateNodeIds",nodeIds:o},t)},[e,o,t,d])}var be=Date.now();function le(){let e=localStorage.getItem(A);if(!e)return null;let t=Number(e);return Number.isNaN(t)?(localStorage.removeItem(A),null):t}function xe(){let e=le();if(!e)return!1;let t=Date.now();return t>=e||t>=X.getTime()?(localStorage.removeItem(A),!1):!0}function ye(){return window.self!==window.top}var Ae=`
#__framer-editorbar {
    /* https://sergeyski.com/css-color-scheme-and-iframes-lessons-learned-from-disqus-background-bug */
    color-scheme: light dark;
    overflow: hidden;
    position: fixed;
    border: none;
    ${D}
    z-index: calc(${R});
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    touch-action: manipulation;
}

@supports (height: 100dvh) {
    #__framer-editorbar {
        height: 100dvh;
    }
}

#__framer-editorbar.old-entrypoint {
    width: calc(100% - 10px);
}

#__framer-editorbar.status_hidden {
    display: none;
}

#__framer-editorbar.status_visually_hidden {
    --padding-right: 0px;
    clip-path: circle(1px at calc(100% - 20px) calc(50% + 4px));
    z-index: calc(${R} - 1);
}

#__framer-editorbar.status_measuring {
    clip-path: unset;
}
`,Y=document.createElement("style");Y.type="text/css";Y.innerHTML=Ae;document.head.appendChild(Y);var b=new URL(import.meta.url).origin;function Re(){if(localStorage.getItem(M)!==null)return ce(),!0;let e=new URL(window.location.href),t=e.searchParams.has(g),o=e.searchParams.has(g.toLowerCase());if(!t&&!o)return!1;let d=t?g:g.toLowerCase(),r=e.searchParams.get(d);if(r!==""&&r!==null)return!1;for(let s of e.searchParams.keys())if(s!==g&&s!==g.toLowerCase()&&!s.startsWith($))return!1;return ce(),localStorage.setItem(M,new Date().toString()),!0}function ce(){let e=new URL(window.location.href);e.searchParams.has(g)&&(e.searchParams.delete(g),e.searchParams.delete(g.toLowerCase()),window.history.replaceState({},"",e.toString()))}var Se=Re();function j(){return null}function Te(){let e=document.getElementsByClassName("lenis-scrolling");for(let t of e)t.classList.remove("lenis-scrolling")}function _t(){if(xe())return console.log("[Framer Editor Bar] Unavailable because hidden until",new Date(le()??0)),j;if(ye())return console.log("[Framer Editor Bar] Unavailable because site is embedded in iframe"),j;if(H.isWebView)return console.log("[Framer Editor Bar] Unavailable because running in WebView"),j;function e(){let[u,a]=l(!1),i=q(()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{a(!0)}):setTimeout(()=>{a(!0)},300)},[]);return m(()=>{document.readyState==="complete"?i():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&i()},{once:!0})},[i]),u}function t(u){let[a,i]=l({className:"status_hidden"});return m(()=>{if(u)return;function c(n){n.origin===b&&typeof n.data=="object"&&n.data?.apiVersion===1&&(n.data.type==="beginSizeMeasuring"&&i({className:"status_measuring"}),n.data.type==="updateStyle"&&i({style:{clipPath:n.data.clipPath}}),n.data.type==="editorBarHidden"&&(i({className:"status_hidden"}),window.removeEventListener("message",c)),n.data.type==="enterFullscreen"&&i({className:"fullscreen"}))}return window.addEventListener("message",c),()=>{window.removeEventListener("message",c)}},[]),a}function o(u){let[a,i]=l(!1);return m(()=>{if(a||u)return;function c(n){if(n.origin===b&&typeof n.data=="object"&&n.data?.apiVersion===1&&n.data.type==="editorBarHidden"&&!a){let h=Date.now()+6048e5;localStorage.setItem(A,h.toString()),i(!0),window.removeEventListener("message",c)}}return window.addEventListener("message",c),()=>{window.removeEventListener("message",c)}},[]),a}function d(u,a){let[i,c]=l(!1),[n,E]=l(!0),[h,x]=l(!1),[N,y]=l("hidden"),_=C();return _.current??=new S,m(()=>{if(!a)return;function v(p){p.origin===b&&typeof p.data=="object"&&p.data?.apiVersion===1&&(p.data.type==="accessResult"&&p.data.data.status==="success"?c(!0):p.data.type==="exitFullscreen"?(document.body.style.overflow="auto",window.scrollTo({behavior:"instant",top:p.data.position?.top??0}),y("hidden")):p.data.type==="sandboxReadyState"&&p.data.data.status==="ready"&&(E(!1),setTimeout(()=>{_.current?.resolve()},50)))}return window.addEventListener("message",v),()=>{window.removeEventListener("message",v)}},[c,E,y]),{showEntrypointButton:i,entrypointButtonLoading:h?n:!1,iframeState:N,onEditContent:()=>{u.current?.contentWindow?.postMessage({apiVersion:1,type:"enterOnPageEditing"},b),y("fullscreen"),x(!0),_.current?.then(()=>{u.current?.contentWindow?.postMessage({apiVersion:1,type:"showCanvas",position:{top:window.scrollY}},b),setTimeout(()=>{document.body.style.overflow="hidden"},300),x(!1)}),Te()}}}function r({framerSiteId:u,features:a,iframeRef:i,measuringProps:c}){de(i,b);let n=new URL(import.meta.url),E=n.pathname.lastIndexOf("/");if(E<0)throw new Error("Invalid pathname");let h=a?.editorBarDisableFrameAncestorsSecurity?"fake-domain.example":window.location.hostname;return n.pathname=n.pathname.slice(0,E),n.searchParams.set("framerSiteId",u),n.searchParams.set("source",h),n.searchParams.set("features",JSON.stringify(a||{})),n.searchParams.set("loadStart",be.toString()),Se&&n.searchParams.set("forceShow","true"),f("iframe",{...c,id:"__framer-editorbar",ref:i,src:n.href,"aria-hidden":"true",tabIndex:-1})}function s({framerSiteId:u,features:a}){let i={...a,editorBarOnPageEditing:!0},c=i?.editorBarOnPageEditing||!1,n=C(null),E=C(document.title),h=e(),x=t(c);o(c);let{showEntrypointButton:N,entrypointButtonLoading:y,iframeState:_,onEditContent:v}=d(n,c),p=_==="fullscreen";if(m(()=>{p?(document.title="Editing Page...",te()):(document.title=E.current,ne())},[p]),!h)return null;let L;_==="fullscreen"?L="fullscreen":N?L="status_visually_hidden":L="status_hidden";let Z=f(r,{framerSiteId:u,features:i,iframeRef:n,measuringProps:c?{className:L}:{...x,className:`${x.className??""} old-entrypoint`}});return c?V([N?f(Q,{isLoading:y,onClick:v,isEditorVisible:_==="fullscreen"}):null,Z],document.body):V(Z,document.body)}return J(s)}export{_t as createEditorBar};
//# sourceMappingURL=init.mjs.map
