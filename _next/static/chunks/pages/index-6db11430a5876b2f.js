(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2730:function(e,t,n){"use strict";var i=n(7294);function a(e){return Array.prototype.slice.call(e)}function r(e,t){var n=Math.floor(e);return n===t||n+1===t?e:t}function s(){return Date.now()}function c(e,t,n){if(t="data-keen-slider-"+t,null===n)return e.removeAttribute(t);e.setAttribute(t,n||"")}function o(e,t){return t=t||document,"function"==typeof e&&(e=e(t)),Array.isArray(e)?e:"string"==typeof e?a(t.querySelectorAll(e)):e instanceof HTMLElement?[e]:e instanceof NodeList?a(e):[]}function l(e){e.raw&&(e=e.raw),e.cancelable&&!e.defaultPrevented&&e.preventDefault()}function d(e){e.raw&&(e=e.raw),e.stopPropagation&&e.stopPropagation()}function u(){var e=[];return{add:function(t,n,i,a){t.addListener?t.addListener(i):t.addEventListener(n,i,a),e.push([t,n,i,a])},input:function(e,t,n,i){this.add(e,t,function(e){e.nativeEvent&&(e=e.nativeEvent);var t=e.changedTouches||[],i=e.targetTouches||[],a=e.detail&&e.detail.x?e.detail:null;return n({id:a?a.identifier?a.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:a?a.identifier?a.identifier:"i":t[0]?t[0]?t[0].identifier:"e":"d",raw:e,x:a&&a.x?a.x:i[0]?i[0].screenX:a?a.x:e.pageX,y:a&&a.y?a.y:i[0]?i[0].screenY:a?a.y:e.pageY})},i)},purge:function(){e.forEach(function(e){e[0].removeListener?e[0].removeListener(e[2]):e[0].removeEventListener(e[1],e[2],e[3])}),e=[]}}}function _(e,t,n){return Math.min(Math.max(e,t),n)}function h(e){return(e>0?1:0)-(e<0?1:0)||+e}function m(e){var t=e.getBoundingClientRect();return{height:r(t.height,e.offsetHeight),width:r(t.width,e.offsetWidth)}}function v(e,t,n,i){var a=e&&e[t];return null==a?n:i&&"function"==typeof a?a():a}function f(e){return Math.round(1e6*e)/1e6}var p=function(){return(p=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function x(e,t,n){if(n||2==arguments.length)for(var i,a=0,r=t.length;a<r;a++)!i&&a in t||(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))}function g(e){var t,n,i,a,r,s,c,o;function l(e){return 1-Math.pow(1-e,3)}function d(){return i?e.track.velocity():0}function u(e,t){void 0===t&&(t=1e3);var n=147e-9+(e=Math.abs(e))/t;return{dist:Math.pow(e,2)/n,dur:e/n}}function m(){var t=e.track.details;t&&(r=t.min,s=t.max,c=t.minIdx,o=t.maxIdx)}function v(){e.animator.stop()}e.on("updated",m),e.on("optionsChanged",m),e.on("created",m),e.on("dragStarted",function(){i=!1,v(),t=n=e.track.details.abs}),e.on("dragChecked",function(){i=!0}),e.on("dragEnded",function(){var i,m,f,p,x,g,A=e.options.mode;"snap"===A&&(i=e.track,f=(m=e.track.details).position,p=h(d()),(f>s||f<r)&&(p=0),x=t+p,0===m.slides[i.absToRel(x)].portion&&(x-=p),t!==n&&(x=n),h(i.idxToDist(x,!0))!==p&&(x+=p),x=_(x,c,o),g=i.idxToDist(x,!0),e.animator.start([{distance:g,duration:500,easing:function(e){return 1+--e*e*e*e*e}}])),"free"!==A&&"free-snap"!==A||function(){v();var t="free-snap"===e.options.mode,n=e.track,i=d();a=h(i);var m=e.track.details,f=[];if(i||!t){var p=u(i),x=p.dist,g=p.dur;if(g*=2,x*=a,t){var A=n.idxToDist(n.distToIdx(x),!0);A&&(x=A)}f.push({distance:x,duration:g,easing:l});var b=m.position,j=b+x;if(j<r||j>s){var N=j<r?r-b:s-b,w=0,y=i;if(h(N)===a){var k=Math.min(Math.abs(N)/Math.abs(x),1),C=(1-Math.pow(1-k,1/3))*g;f[0].earlyExit=C,y=i*(1-k)}else f[0].earlyExit=0,w+=N;var E=u(y,100),M=E.dist*a;e.options.rubberband&&(f.push({distance:M,duration:2*E.dur,easing:l}),f.push({distance:-M+w,duration:500,easing:l}))}e.animator.start(f)}else e.moveToIdx(_(m.abs,c,o),!0,{duration:500,easing:function(e){return 1+--e*e*e*e*e}})}()}),e.on("dragged",function(){n=e.track.details.abs})}function A(e){var t,n,i,a,r,s,c,m,v,f,p,x,g,A,b,j,N,w,y=u();function k(t){if(s&&m===t.id){var o=T(t);if(v){if(!M(t))return E(t);f=o,v=!1,e.emit("dragChecked")}if(j)return f=o;l(t);var u=function(t){if(N===-1/0&&w===1/0)return t;var i=e.track.details,s=i.length,c=i.position,o=_(t,N-c,w-c);if(0===s)return 0;if(!e.options.rubberband)return o;if(c<=w&&c>=N||c<N&&n>0||c>w&&n<0)return t;var l=Math.max(0,1-Math.abs((c<N?c-N:c-w)/s*(a*s))/r*2);return l*l*t}(c(f-o)/a*i);n=h(u);var g=e.track.details.position;(g>N&&g<w||g===N&&n>0||g===w&&n<0)&&d(t),p+=u,!x&&Math.abs(p*a)>5&&(x=!0),e.track.add(u),f=o,e.emit("dragged")}}function C(t){!s&&e.track.details&&e.track.details.length&&(p=0,s=!0,x=!1,v=!0,m=t.id,M(t),f=T(t),e.emit("dragStarted"))}function E(t){s&&m===t.idChanged&&(s=!1,e.emit("dragEnded"))}function M(e){var t=I(),n=t?e.y:e.x,i=t?e.x:e.y,a=void 0!==g&&void 0!==A&&Math.abs(A-i)<=Math.abs(g-n);return g=n,A=i,a}function T(e){return I()?e.y:e.x}function I(){return e.options.vertical}function R(){a=e.size,r=I()?window.innerHeight:window.innerWidth;var t=e.track.details;t&&(N=t.min,w=t.max)}function D(e){x&&(d(e),l(e))}function O(){if(y.purge(),e.options.drag&&!e.options.disabled){c="function"==typeof(a=e.options.dragSpeed||1)?a:function(e){return e*a},i=e.options.rtl?-1:1,R(),t=e.container,n="data-keen-slider-clickable",o("[".concat(n,"]:not([").concat(n,"=false])"),t).map(function(e){y.add(e,"dragstart",d),y.add(e,"mousedown",d),y.add(e,"touchstart",d)}),y.add(t,"dragstart",function(e){l(e)}),y.add(t,"click",D,{capture:!0}),y.input(t,"ksDragStart",C),y.input(t,"ksDrag",k),y.input(t,"ksDragEnd",E),y.input(t,"mousedown",C),y.input(t,"mousemove",k),y.input(t,"mouseleave",E),y.input(t,"mouseup",E),y.input(t,"touchstart",C,{passive:!0}),y.input(t,"touchmove",k,{passive:!1}),y.input(t,"touchend",E),y.input(t,"touchcancel",E),y.add(window,"wheel",function(e){s&&l(e)});var n,a,r="data-keen-slider-scrollable";o("[".concat(r,"]:not([").concat(r,"=false])"),e.container).map(function(e){var t;y.input(e,"touchstart",function(e){t=T(e),j=!0,b=!0},{passive:!0}),y.input(e,"touchmove",function(n){var i=I(),a=i?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,r=t-T(n),s=i?e.scrollTop:e.scrollLeft,c=i&&"scroll"===e.style.overflowY||!i&&"scroll"===e.style.overflowX;if(t=T(n),(r<0&&s>0||r>0&&s<a)&&b&&c)return j=!0;b=!1,l(n),j=!1}),y.input(e,"touchend",function(){j=!1})})}}e.on("updated",R),e.on("optionsChanged",O),e.on("created",O),e.on("destroyed",y.purge)}function b(e){var t,n,i=null;function a(t,n,i){e.animator.active?s(t,n,i):requestAnimationFrame(function(){return s(t,n,i)})}function r(){a(!1,!1,n)}function s(n,a,r){var s=0,c=e.size,d=e.track.details;if(d&&t){var u=d.slides;t.forEach(function(e,t){if(n)!i&&a&&o(e,null,r),l(e,null,r);else{if(!u[t])return;var d=u[t].size*c;!i&&a&&o(e,d,r),l(e,u[t].distance*c-s,r),s+=d}})}}function c(t){return"performance"===e.options.renderMode?Math.round(t):t}function o(e,t,n){var i=n?"height":"width";null!==t&&(t=c(t)+"px"),e.style["min-"+i]=t,e.style["max-"+i]=t}function l(e,t,n){if(null!==t){t=c(t);var i=n?t:0;t="translate3d(".concat(n?0:t,"px, ").concat(i,"px, 0)")}e.style.transform=t,e.style["-webkit-transform"]=t}function d(){t&&(s(!0,!0,n),t=null),e.on("detailsChanged",r,!0)}function u(){a(!1,!0,n)}function _(){d(),n=e.options.vertical,e.options.disabled||"custom"===e.options.renderMode||(i="auto"===v(e.options.slides,"perView",null),e.on("detailsChanged",r),(t=e.slides).length&&u())}e.on("created",_),e.on("optionsChanged",_),e.on("beforeOptionsChanged",function(){d()}),e.on("updated",u),e.on("destroyed",d)}var j=function(e,t,n){try{var i,a,r,l;return a=x([(i={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(t){var n,a,r,s,l,d,_=u();function h(e){var n;c(t.container,"reverse","rtl"!==(n=t.container,window.getComputedStyle(n,null).getPropertyValue("direction"))||e?null:""),c(t.container,"v",t.options.vertical&&!e?"":null),c(t.container,"disabled",t.options.disabled&&!e?"":null)}function f(){x()&&j()}function x(){var e=null;if(s.forEach(function(t){t.matches&&(e=t.__media)}),e===n)return!1;n||t.emit("beforeOptionsChanged"),n=e;var i=e?r.breakpoints[e]:r;return t.options=p(p({},r),i),h(),C(),E(),w(),!0}function g(){return t.options.trackConfig.length}function A(e){for(var c in n=!1,r=p(p({},i),e),_.purge(),a=t.size,s=[],r.breakpoints||[]){var o=window.matchMedia(c);o.__media=c,s.push(o),_.add(o,"change",f)}_.add(window,"orientationchange",k),_.add(window,"resize",y),x()}function b(e){t.animator.stop();var n=t.track.details;t.track.init(null!=e?e:n?n.abs:0)}function j(e){b(e),t.emit("optionsChanged")}function N(e,n){if(e)return A(e),void j(n);C(),E();var i=g();w(),g()!==i?j(n):b(n),t.emit("updated")}function w(){var e=t.options.slides;if("function"==typeof e)return t.options.trackConfig=e(t.size,t.slides);for(var n=t.slides,i=n.length,a="number"==typeof e?e:v(e,"number",i,!0),r=[],s=v(e,"perView",1,!0),c=v(e,"spacing",0,!0)/t.size||0,o="auto"===s?c:c/s,l=v(e,"origin","auto"),d=0,u=0;u<a;u++){var _="auto"===s?function(e){var n=m(e);return(t.options.vertical?n.height:n.width)/t.size||1}(n[u]):1/s-c+o,h="center"===l?.5-_/2:"auto"===l?0:l;r.push({origin:h,size:_,spacing:c}),d+=_}if(d+=c*(a-1),"auto"===l&&!t.options.loop&&1!==s){var f=0;r.map(function(e){var t=d-f;return f+=e.size+c,t>=1||(e.origin=1-t-(d>1?0:1-d)),e})}t.options.trackConfig=r}function y(){C();var e=t.size;t.options.disabled||e===a||(a=e,N())}function k(){y(),setTimeout(y,500),setTimeout(y,2e3)}function C(){var e=m(t.container);t.size=(t.options.vertical?e.height:e.width)||1}function E(){t.slides=o(t.options.selector,t.container)}t.container=(d=o(e,l||document)).length?d[0]:null,t.destroy=function(){_.purge(),t.emit("destroyed"),h(!0)},t.prev=function(){t.moveToIdx(t.track.details.abs-1,!0)},t.next=function(){t.moveToIdx(t.track.details.abs+1,!0)},t.update=N,A(t.options)}),b,A,g],n||[],!0),l={},r={emit:function(e){l[e]&&l[e].forEach(function(e){e(r)});var t=r.options&&r.options[e];t&&t(r)},moveToIdx:function(e,t,n){var i=r.track.idxToDist(e,t);if(i){var a=r.options.defaultAnimation;r.animator.start([{distance:i,duration:v(n||a,"duration",500),easing:v(n||a,"easing",function(e){return 1+--e*e*e*e*e})}])}},on:function(e,t,n){void 0===n&&(n=!1),l[e]||(l[e]=[]);var i=l[e].indexOf(t);i>-1?n&&delete l[e][i]:n||l[e].push(t)},options:t},function(){if(r.track=function(e){var t,n,i,a,r,c,o,l,d,u,m,p,g,A,b=1/0,j=[],N=null,w=0;function y(e){R(w+e)}function k(e){var t=C(w+e).abs;return T(t)===t?t:null}function C(e){var t=Math.floor(Math.abs(f(e/n))),i=f((e%n+n)%n);i===n&&(i=0);var a=h(e),r=o.indexOf(x([],o,!0).reduce(function(e,t){return Math.abs(t-i)<Math.abs(e-i)?t:e})),s=r;return a<0&&t++,r===c&&(s=0,t+=a>0?1:-1),{abs:s+t*c*a,origin:r,rel:s}}function E(e,t,n){if(t||!a.loop)return M(e,n);if(T(e)!==e)return null;var i,r=C(null!=n?n:w),s=r.abs,o=e-r.rel,l=s+o;i=M(l);var d=M(l-c*h(o));return(null!==d&&Math.abs(d)<Math.abs(i)||null===i)&&(i=d),f(i)}function M(e,t){if(null==t&&(t=f(w)),i=e,T(i)!==i||null===e)return null;e=Math.round(e);var i,a=C(t),r=a.abs,s=a.rel,l=a.origin,d=I(e),u=(t%n+n)%n,_=o[l],h=Math.floor((e-(r-s))/c)*n;return f(_-u-_+o[d]+h+(l===c?n:0))}function T(e){return _(e,d,u)}function I(e){return(e%c+c)%c}function R(t){n=t-w,j.push({distance:n,timestamp:s()}),j.length>6&&(j=j.slice(-6)),w=f(t);var n,i=D().abs;if(i!==N){var a=null!==N;N=i,a&&e.emit("slideChanged")}}function D(s){var o=s?null:function(){if(c){var e=a.loop,t=e?(w%n+n)%n:w,s=(e?w%n:w)-r[0][2],o=0-(s<0&&e?n-Math.abs(s):s),l=0,_=C(w),v=_.abs,f=_.rel,x=r[f][2],b=r.map(function(t,i){var r=o+l;(r<0-t[0]||r>1)&&(r+=(Math.abs(r)>n-1&&e?n:0)*h(-r));var s=i-f,d=h(s),u=s+v;e&&(-1===d&&r>x&&(u+=c),1===d&&r<x&&(u-=c),null!==m&&u<m&&(r+=n),null!==p&&u>p&&(r-=n));var _=r+t[0]+t[1],g=Math.max(r>=0&&_<=1?1:_<0||r>1?0:r<0?Math.min(1,(t[0]+r)/t[0]):(1-r)/t[0],0);return l+=t[0]+t[1],{abs:u,distance:a.rtl?-1*r+1-t[0]:r,portion:g,size:t[0]}});return f=I(v=T(v)),{abs:T(v),length:i,max:A,maxIdx:u,min:g,minIdx:d,position:w,progress:e?t/n:w/i,rel:f,slides:b,slidesLength:n}}}();return t.details=o,e.emit("detailsChanged"),o}return t={absToRel:I,add:y,details:null,distToIdx:k,idxToDist:E,init:function(t){var s,_,h,x;if(function(){if(c=(r=((a=e.options).trackConfig||[]).map(function(e){return[v(e,"size",1),v(e,"spacing",0),v(e,"origin",0)]})).length){n=f(r.reduce(function(e,t){return e+t[0]+t[1]},0));var t,s=c-1;i=f(n+r[0][2]-r[s][0]-r[s][2]-r[s][1]),o=r.reduce(function(e,n){if(!e)return[0];var i=r[e.length-1],a=e[e.length-1]+(i[0]+i[2])+i[1];return a-=n[2],e[e.length-1]>a&&(a=e[e.length-1]),a=f(a),e.push(a),(!t||t<a)&&(l=e.length-1),t=a,e},null),0===i&&(l=0),o.push(f(n))}}(),!c)return D(!0);s=e.options.range,m=d=(_=e.options.loop)?v(_,"min",-1/0):0,p=u=_?v(_,"max",b):l,h=v(s,"min",null),x=v(s,"max",null),h&&(d=h),x&&(u=x),g=d===-1/0?d:e.track.idxToDist(d||0,!0,0),A=u===b?u:E(u,!0,0),null===x&&(p=u),v(s,"align",!1)&&u!==b&&0===r[I(u)][2]&&(A-=1-r[I(u)][0],u=k(A-w)),g=f(g),A=f(A),Number(t)===t?y(M(T(t))):D()},to:R,velocity:function(){var e=s(),t=j.reduce(function(t,n){var i=n.distance,a=n.timestamp;return e-a>200||(h(i)!==h(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=i),t.lastTimestamp&&(t.time+=a-t.lastTimestamp),t.lastTimestamp=a),t},{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}(r),r.animator=function(e){var t,n,i,a,r,s;function c(e){t.active=e}function o(e){t.targetIdx=e}function l(){window.cancelAnimationFrame(r),c(!1),o(null),s&&e.emit("animationStopped"),s=null}return t={active:!1,start:function(t){if(l(),e.track.details){var d=0,u=e.track.details.position;n=0,i=0,a=t.map(function(e){var t,n=u,a=null!==(t=e.earlyExit)&&void 0!==t?t:e.duration,r=e.easing,s=e.distance*r(a/e.duration)||0;u+=s;var c=i;return i+=a,d+=s,[n,e.distance,c,i,e.duration,r]}),o(e.track.distToIdx(d)),function t(){var l;l=function r(l){s||(s=l),c(!0);var d=l-s;d>i&&(d=i);var u=a[n];if(u[3]<d)return n++,r(l);var _=u[2],h=u[4],m=u[0],v=u[1]*(0,u[5])(0===h?1:(d-_)/h);if(v&&e.track.to(m+v),d<i)return t();s=null,c(!1),o(null),e.emit("animationEnded")},r=window.requestAnimationFrame(l)}(),e.emit("animationStarted")}},stop:l,targetIdx:null}}(r),a)for(var e=0;e<a.length;e++)(0,a[e])(r);r.track.init(r.options.initial||0),r.emit("created")}(),r}catch(d){console.error(d)}};t.E=function(e,t){var n=i.useRef(null),a=i.useRef(!1),r=i.useRef(e),s=i.useCallback(function(i){i?(r.current=e,n.current=new j(i,e,t),a.current=!1):(n.current&&n.current.destroy&&n.current.destroy(),n.current=null)},[]);return i.useEffect(function(){(function e(t,n){if(t===n)return!0;var i=typeof t;if(i!==typeof n)return!1;if("object"!==i||null===t||null===n)return"function"===i&&t.toString()===n.toString();if(t.length!==n.length||Object.getOwnPropertyNames(t).length!==Object.getOwnPropertyNames(n).length)return!1;for(var a in t)if(!e(t[a],n[a]))return!1;return!0})(r.current,e)||(r.current=e,n.current&&n.current.update(r.current))},[e]),[s,n]}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9655)}])},7150:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i=n(5893),a=n(1664),r=n.n(a),s=n(1163),c=n(7294),o=n(7546),l=n.n(o);let d=()=>{let[e,t]=(0,c.useState)(!1),n=(0,s.useRouter)().pathname,a=()=>{t(e=>!e)},o=(e,t)=>e===n?(0,i.jsx)(r(),{href:e,onClick:a,className:"".concat(l().nav_link," ").concat(l().current_nav_link),children:t}):(0,i.jsx)(r(),{href:e,onClick:a,className:l().nav_link,children:t});return(0,i.jsx)("header",{className:l().header,children:(0,i.jsxs)("div",{className:l().header_content_wrapper,children:[(0,i.jsx)(r(),{href:"/",className:l().link,children:(0,i.jsxs)("h1",{className:l().title_wrapper,children:[(0,i.jsx)("span",{className:l().logo,children:"ロゴ"}),(0,i.jsx)("span",{className:l().title,children:"予備校"})]})}),(0,i.jsx)("div",{className:l().hamburger_menu,onClick:a,children:(0,i.jsx)("span",{className:e?l().clicked:""})}),(0,i.jsx)("nav",{className:e?l().nav_opened:l().nav_closed,children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:o("/about","ソメイ塾について")}),(0,i.jsx)("li",{children:o("/curriculum","授業案内")}),(0,i.jsx)("li",{children:o("/teacher","講師案内")})]})})]})})},u=()=>(0,i.jsx)("footer",{className:l().footer,children:"Copyright \xa9 somei All Rights Reserved."});var _=n(4339),h=n.n(_),m=n(6042),v=n.n(m);let f=e=>{let{link:t,content:n}=e,a=(0,s.useRouter)().pathname,c=(0,i.jsx)("div",{className:v().cv_tag_wrapper,children:(0,i.jsxs)(r(),{className:v().cv_tag_link,href:t,children:[(0,i.jsx)("div",{className:v().cv_tag_top_box,children:">"}),(0,i.jsx)("div",{className:v().cv_tag_text_wrapper,children:(0,i.jsx)("p",{className:v().cv_tag_text,children:n})})]})});return(0,i.jsx)(i.Fragment,{children:a===t?null:c})},p=e=>{let{children:t}=e;return(0,i.jsxs)("div",{className:h().wrapper,children:[(0,i.jsx)(d,{}),(0,i.jsx)("div",{className:h().cv_tag_wrapper,children:(0,i.jsx)(f,{link:"/about",content:"資料請求・体験授業のご予約受付中"})}),t,(0,i.jsx)(u,{})]})};var x=p},4933:function(e,t,n){"use strict";n.d(t,{T:function(){return s},o:function(){return c}});var i=n(5893),a=n(4408),r=n.n(a);let s=e=>{let{children:t}=e;return(0,i.jsxs)("div",{className:r().wrapper,children:[(0,i.jsx)("div",{className:r().icon,children:(0,i.jsx)("div",{className:r().svg_container,children:(0,i.jsxs)("svg",{viewBox:"0 0 59 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r().svg,children:[(0,i.jsx)("path",{d:"M46.559 9.3454L37.3012 10.362L39.5318 1.3278C39.5318 1.3278 24.9622 -2.23501 12.2994 8.83951C-0.363372 19.914 0.194355 36.5742 1.22643 41.9178C6.38357 43.6423 22.8488 46.4027 35.5116 35.3282C48.1743 24.2537 46.562 9.35492 46.562 9.35492L46.559 9.3454Z",fill:"#DE739A"}),(0,i.jsx)("path",{d:"M12.1168 26.524C26.1962 18.7611 37.0833 20.2572 52.1046 32.741C62.609 41.4781 57.2485 41.1765 53.7274 42.1211C50.2051 43.0798 49.9608 42.3575 51.9973 43.7904C54.0415 45.2169 57.3291 46.2871 55.7398 48.1384C54.157 49.9974 40.3165 54.08 30.3904 51.5375C23.1784 49.7122 17.9435 44.8843 10.1063 37.6758C2.26252 30.4595 2.75482 31.6918 12.1168 26.524Z",fill:"#E8A1BF"})]})})}),(0,i.jsx)("div",{className:r().text,children:t})]})},c=e=>{let{children:t}=e;return(0,i.jsxs)("div",{className:r().wrapper,children:[(0,i.jsx)("div",{className:r().single_line_icon,children:(0,i.jsx)("div",{className:r().svg_container,children:(0,i.jsxs)("svg",{viewBox:"-65 0 125 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r().svg,children:[(0,i.jsx)("path",{d:"M46.559 9.3454L37.3012 10.362L39.5318 1.3278C39.5318 1.3278 24.9622 -2.23501 12.2994 8.83951C-0.363372 19.914 0.194355 36.5742 1.22643 41.9178C6.38357 43.6423 22.8488 46.4027 35.5116 35.3282C48.1743 24.2537 46.562 9.35492 46.562 9.35492L46.559 9.3454Z",fill:"#DE739A"}),(0,i.jsx)("path",{d:"M12.1168 26.524C26.1962 18.7611 37.0833 20.2572 52.1046 32.741C62.609 41.4781 57.2485 41.1765 53.7274 42.1211C50.2051 43.0798 49.9608 42.3575 51.9973 43.7904C54.0415 45.2169 57.3291 46.2871 55.7398 48.1384C54.157 49.9974 40.3165 54.08 30.3904 51.5375C23.1784 49.7122 17.9435 44.8843 10.1063 37.6758C2.26252 30.4595 2.75482 31.6918 12.1168 26.524Z",fill:"#E8A1BF"})]})})}),(0,i.jsx)("div",{className:r().text,children:t})]})}},9655:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(5893),a=n(7150),r=n(2730),s=n(7294),c=n(7361),o=n.n(c);let l=e=>{let{children:t}=e,[n,a]=(0,s.useState)(0),[c,l]=(0,s.useState)(!1),[d,m]=(0,r.E)({selector:".".concat(o().item),loop:!0,slides:{perView:1},initial:0,slideChanged(e){a(e.track.details.rel)},created(){l(!0)}});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{ref:d,className:o().wrapper,children:[t,(0,i.jsx)(_,{instanceRef:m.current}),(0,i.jsx)(h,{instanceRef:m.current}),c&&m.current?(0,i.jsx)(u,{instanceRef:m.current,currentSlide:n}):null]})})},d=e=>{let{children:t}=e;return(0,i.jsx)("div",{className:o().item,children:t})},u=e=>{let{instanceRef:t,currentSlide:n}=e;return(0,i.jsx)("div",{className:o().dots,children:[...Array(t.track.details.slides.length)].map((e,t)=>t).map(e=>(0,i.jsx)("button",{onClick:()=>t.moveToIdx(e),className:o().dot+(n===e?" ".concat(o().active):"")},e))})},_=e=>{let{instanceRef:t}=e;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"".concat(o().arrow," ").concat(o().left),onClick:e=>e.stopPropagation()||t.prev(),children:(0,i.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})})},h=e=>{let{instanceRef:t}=e;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"".concat(o().arrow," ").concat(o().right),onClick:e=>e.stopPropagation()||t.next(),children:(0,i.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})})};var m=n(4933),v={src:"/_next/static/media/home1.f8b68a10.png",height:2e3,width:4750,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/AJiepSYAAOvs75aQkMK1sP////39/P39/QCHhYGwo5zV2uBwaWyYjY7r7vH3+Pv9/f0AubmxwcfJcn2HAAAcfIeZzdXi8vX6/v79WnQzPUIsndgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},f={src:"/_next/static/media/home_teacher.e67126a1.png",height:2500,width:2260,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAu0lEQVR42gGwAE//APb7/8PJzqeorObu9ebu9ujx+eXt9ADt8/rEwMDAo5itsrrQ2uPg5u3k7fQA4+vzqaCexKyjm5+mxMrS0sfFytLaAPP4/sPLzyYyO6Wttdfc48vFxNbh6gDy+Pze5+qVpatvd3uQnKC8wsjk7vgA8/n92+XoscHGhZGVaW5vtL7G1eHrAPX5/enx9KGxtpSip5GSlqu0vcbR3QDz9vv0+fynsbN7goSHiIqdpKy+ydXMaoFOtPIlHgAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},p=n(5494),x=n.n(p),g={src:"/_next/static/media/home_card_1.30a4b4da.png",height:1155,width:1478,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Adjg5P2KhYICzMO7AFNgZABZWlgAsK+pANzh6AArNCsAAdfe4f2BfXsCqKWkAJCRkQAhIyYAZ0xJAOgAAABLT1MAAc/W2f2Ef30CRUlMACcsLgDf08sA/djAANTn8gC10uQAAdXc4P3h5eYCBwwNAA0NDQD98OsA6r2gABUpOQD3BA0AAdDb4f3q7/AC9fj2AAcEBAAaFRQACfj0AAMHBwDw39MAAbfIz/3v8O8CDQsKAPz9/AAWEhAAFw8QAOzYygD6BAkAmw9Ty7WK9ywAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},A={src:"/_next/static/media/home_card_2.b10cf378.png",height:1155,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AFtSRFRYWUFPV0NLUD1KUjxMXiAmNScvPgCol3ubhmCdhnSEdG5tYWAxMDkAAAAAAAAAys7Q19fT6t7YtI+EmHZoMScie29tlYZ/AO7w8PL19vHt7Ne7tmZISbqfmtq6s9m8tQCPhn/Ewb3m5eXi5urZ3OHi2NvIuruqpKsAaE4nblQsi31zt7e4vsPFnKGkdnd6Vk5O8ItNeGMweDYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},b={src:"/_next/static/media/home_card_3.bc30fe6f.png",height:1155,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AMbK0gAAAI2GhaKfoAAAD+Dg4f////n5+QCLj5VYMQCggXBoWFWKal3s6Of////8+/sAm5yWrJ2PiXZuQzw/cFpboKCl5Onw4+jvALy8tLK1tHprZjIyPSBJbKKpttTd6+3x9gCuraK9v72glJATAACxs7nR2OXj5u/+/fwApJ+Vubayg4iKXFJIwaupwrfB1dDV3d/fXsdaZkrzhsQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},j=n(1664),N=n.n(j);let w=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{className:x().section_top,children:(0,i.jsxs)(l,{children:[(0,i.jsx)(d,{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("img",{src:v.src,className:x().slider_img,alt:""}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsxs)("div",{className:x().overlay,children:[(0,i.jsx)("div",{className:x().triangle_base,children:(0,i.jsx)("div",{className:x().triangle})}),(0,i.jsxs)("div",{className:x().overlay_text,children:["全科目の先生が一人の",(0,i.jsx)("br",{className:x().with_mobile}),"生徒状況、",(0,i.jsx)("br",{className:x().without_mobile}),"得意不得意、",(0,i.jsx)("br",{className:x().with_mobile}),"医師への資質などを",(0,i.jsx)("br",{className:x().with_mobile}),"情報共有していくスタイル"]})]})})]})}),(0,i.jsx)(d,{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("img",{src:v.src,className:x().slider_img,alt:""}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsxs)("div",{className:x().overlay,children:[(0,i.jsx)("div",{className:x().triangle_base,children:(0,i.jsx)("div",{className:x().triangle})}),(0,i.jsxs)("div",{className:x().overlay_text,children:["全科目の先生が一人の",(0,i.jsx)("br",{className:x().with_mobile}),"生徒状況、",(0,i.jsx)("br",{className:x().without_mobile}),"得意不得意、",(0,i.jsx)("br",{className:x().with_mobile}),"医師への資質などを",(0,i.jsx)("br",{className:x().with_mobile}),"情報共有していくスタイル"]})]})})]})}),(0,i.jsx)(d,{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("img",{src:v.src,className:x().slider_img,alt:""}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsxs)("div",{className:x().overlay,children:[(0,i.jsx)("div",{className:x().triangle_base,children:(0,i.jsx)("div",{className:x().triangle})}),(0,i.jsxs)("div",{className:x().overlay_text,children:["全科目の先生が一人の",(0,i.jsx)("br",{className:x().with_mobile}),"生徒状況、",(0,i.jsx)("br",{className:x().without_mobile}),"得意不得意、",(0,i.jsx)("br",{className:x().with_mobile}),"医師への資質などを",(0,i.jsx)("br",{className:x().with_mobile}),"情報共有していくスタイル"]})]})})]})}),(0,i.jsx)(d,{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("img",{src:v.src,className:x().slider_img,alt:""}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsxs)("div",{className:x().overlay,children:[(0,i.jsx)("div",{className:x().triangle_base,children:(0,i.jsx)("div",{className:x().triangle})}),(0,i.jsxs)("div",{className:x().overlay_text,children:["全科目の先生が一人の",(0,i.jsx)("br",{className:x().with_mobile}),"生徒状況、",(0,i.jsx)("br",{className:x().without_mobile}),"得意不得意、",(0,i.jsx)("br",{className:x().with_mobile}),"医師への資質などを",(0,i.jsx)("br",{className:x().with_mobile}),"情報共有していくスタイル"]})]})})]})}),(0,i.jsx)(d,{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("img",{src:v.src,className:x().slider_img,alt:""}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsxs)("div",{className:x().overlay,children:[(0,i.jsx)("div",{className:x().triangle_base,children:(0,i.jsx)("div",{className:x().triangle})}),(0,i.jsxs)("div",{className:x().overlay_text,children:["全科目の先生が一人の",(0,i.jsx)("br",{className:x().with_mobile}),"生徒状況、",(0,i.jsx)("br",{className:x().without_mobile}),"得意不得意、",(0,i.jsx)("br",{className:x().with_mobile}),"医師への資質などを",(0,i.jsx)("br",{className:x().with_mobile}),"情報共有していくスタイル"]})]})})]})})]})}),(0,i.jsx)("section",{className:x().section,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 col-md-6",children:(0,i.jsx)("img",{src:f.src,className:"img",alt:""})}),(0,i.jsx)("div",{className:"col-12 col-md-6",children:(0,i.jsxs)("div",{className:x().wrapper,children:[(0,i.jsx)(m.T,{children:(0,i.jsxs)("h2",{className:x().subtitle,children:["素質に体質に合わせた",(0,i.jsx)("br",{}),"授業展開、宿題の提供"]})}),(0,i.jsx)("div",{className:x().content,children:"この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。"}),(0,i.jsx)("div",{className:x().button,children:(0,i.jsx)(N(),{className:"btn-primary",href:"/about",children:(0,i.jsx)("div",{className:x().button_text,children:"詳しくみる"})})})]})})]})}),(0,i.jsx)("section",{className:"".concat(x().section," ").concat(x().section_bottom),children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 col-md-4",children:(0,i.jsx)("div",{className:"container p-3",children:(0,i.jsxs)("div",{className:x().overlay_card_wrapper,children:[(0,i.jsx)("img",{src:g.src,className:"img",alt:""}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsxs)("div",{className:x().overlay_card,children:[(0,i.jsx)("div",{className:x().overlay_card_title,children:"チーム教育"}),(0,i.jsx)("div",{className:x().overlay_card_content,children:"我が予備校はチーム医療全科目の先生が一人の生徒状況、得意不得意、医師への資質などを情報共有していくスタイル"}),(0,i.jsx)("div",{className:x().overlay_card_button,children:(0,i.jsx)(N(),{className:"btn-primary",href:"/curriculum",children:(0,i.jsx)("div",{className:x().button_text,children:"詳しくみる"})})})]})})]})})}),(0,i.jsx)("div",{className:"col-12 col-md-4",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:x().overlay_card_wrapper,children:[(0,i.jsx)("img",{src:A.src,className:"img",alt:""}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsxs)("div",{className:x().overlay_card,children:[(0,i.jsx)("div",{className:x().overlay_card_title,children:"オーダーメイド学習"}),(0,i.jsx)("div",{className:x().overlay_card_content,children:"オーダーメイドホームワーク一人一人の能力、素質に体質に合わせた授業展開、宿題の提供"}),(0,i.jsx)("div",{className:x().overlay_card_button,children:(0,i.jsx)(N(),{className:"btn-primary",href:"/curriculum",children:(0,i.jsx)("div",{className:x().button_text,children:"詳しくみる"})})})]})})]})})}),(0,i.jsx)("div",{className:"col-12 col-md-4",children:(0,i.jsx)("div",{className:"container p-3",children:(0,i.jsxs)("div",{className:x().overlay_card_wrapper,children:[(0,i.jsx)("img",{src:b.src,className:"img",alt:""}),(0,i.jsx)("div",{className:"overlay",children:(0,i.jsxs)("div",{className:x().overlay_card,children:[(0,i.jsx)("div",{className:x().overlay_card_title,children:"塾のコンセプト"}),(0,i.jsx)("div",{className:x().overlay_card_content,children:"大手予備校人気プロ講師のみ在籍を可能した最強プロ講師医学部専門予備校"}),(0,i.jsx)("div",{className:x().overlay_card_button,children:(0,i.jsx)(N(),{className:"btn-primary",href:"/curriculum",children:(0,i.jsx)("div",{className:x().button_text,children:"詳しくみる"})})})]})})]})})})]})}),(0,i.jsx)("section",{className:"".concat(x().section," ").concat(x().bg_gray),children:(0,i.jsxs)("div",{className:x().reserve,children:[(0,i.jsx)(m.T,{children:(0,i.jsxs)("h2",{className:x().reserve_title,children:["資料請求/体験授業の",(0,i.jsx)("br",{}),"ご予約受付中"]})}),(0,i.jsx)("div",{className:x().reserve_button,children:(0,i.jsx)(N(),{className:"btn-secondary",href:"/",children:(0,i.jsx)("div",{className:x().button_text,children:"応募する"})})}),(0,i.jsxs)("div",{className:x().reserve_contact,children:["お電話でも受付ています。お気軽にご連絡ください。",(0,i.jsx)("br",{}),"電話番号：03-0000-0000",(0,i.jsx)("br",{}),"受付時間：月〜金 11:00-17:00"]})]})}),(0,i.jsx)("section",{className:x().section,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 col-md-4",children:(0,i.jsx)("div",{className:x().info_title,children:(0,i.jsx)(m.T,{children:(0,i.jsx)("h2",{className:x().subtitle,children:"お知らせ"})})})}),(0,i.jsx)("div",{className:"col-12 col-md-8",children:(0,i.jsxs)("ul",{className:x().info_list,children:[(0,i.jsxs)("li",{className:x().info_list_item,children:[(0,i.jsx)("span",{className:x().info_list_date,children:"2022/01/01"}),(0,i.jsx)(N(),{className:x().info_content,href:"#",children:"トップページ内にて、TREEの紹介ムービーを公開しました。"})]}),(0,i.jsxs)("li",{className:x().info_list_item,children:[(0,i.jsx)("span",{className:x().info_list_date,children:"2022/01/01"}),(0,i.jsx)(N(),{className:x().info_content,href:"#",children:"移転情報：2022年1月11日より新教室がスタートします。"})]}),(0,i.jsxs)("li",{className:x().info_list_item,children:[(0,i.jsx)("span",{className:x().info_list_date,children:"2022/01/01"}),(0,i.jsx)(N(),{className:x().info_content,href:"#",children:"移転情報：2022年1月11日より新教室がスタートします。"})]}),(0,i.jsxs)("li",{className:x().info_list_item,children:[(0,i.jsx)("span",{className:x().info_list_date,children:"2022/01/01"}),(0,i.jsx)(N(),{className:x().info_content,href:"#",children:"新宿店オープン！！"})]}),(0,i.jsxs)("li",{className:x().info_list_item,children:[(0,i.jsx)("span",{className:x().info_list_date,children:"2022/01/01"}),(0,i.jsx)(N(),{className:x().info_content,href:"#",children:"トップページ内にて、TREEの紹介ムービーを公開しました。"})]})]})})]})})]});w.getLayout=e=>(0,i.jsx)(a.Z,{children:e});var y=w},6042:function(e){e.exports={cv_tag_wrapper:"cvTag_cv_tag_wrapper__rUJR7",cv_tag_link:"cvTag_cv_tag_link__fe8Tr",cv_tag_top_box:"cvTag_cv_tag_top_box__yQn_1",cv_tag_text_wrapper:"cvTag_cv_tag_text_wrapper__aYybF",cv_tag_text:"cvTag_cv_tag_text__2XiLr"}},4339:function(e){e.exports={wrapper:"layouts_wrapper__5c_yJ",cv_tag_wrapper:"layouts_cv_tag_wrapper__toFHT"}},7546:function(e){e.exports={header:"sections_header__SMQYN",header_content_wrapper:"sections_header_content_wrapper__uwfoS",nav_opened:"sections_nav_opened__a_HFv",nav_closed:"sections_nav_closed__tJIfL",link:"sections_link__OJjD4",nav_link:"sections_nav_link__3Kas2",current_nav_link:"sections_current_nav_link__RHPJg",title_wrapper:"sections_title_wrapper__pUsqu",logo:"sections_logo__Iu3u1",title:"sections_title__deYu_",footer:"sections_footer__r6Ijo",hamburger_menu:"sections_hamburger_menu__obr_W",clicked:"sections_clicked__yB38C"}},7361:function(e){e.exports={wrapper:"slider_wrapper__b_SIC",item:"slider_item__w4bxS",dots:"slider_dots__rpgUo",dot:"slider_dot__6Ln1k",active:"slider_active__u4C0Y",arrow:"slider_arrow___udA_",left:"slider_left__Efoww",right:"slider_right__hcz_x",disabled:"slider_disabled__9O__q"}},4408:function(e){e.exports={wrapper:"texts_wrapper__sA758",text:"texts_text__uwHQo",icon:"texts_icon__qtgNQ",single_line_icon:"texts_single_line_icon__BEfZB",svg_container:"texts_svg_container__Q5ATF",svg:"texts_svg__pYKXl"}},5494:function(e){e.exports={section_top:"home_section_top__WUuLC",section:"home_section__LWH0s",section_bottom:"home_section_bottom__laKFO",overlay:"home_overlay__2FktZ",triangle_base:"home_triangle_base__WOP1p",triangle:"home_triangle__3vdZj",overlay_text:"home_overlay_text__0UHoA",bg_gray:"home_bg_gray__wIuBg",wrapper:"home_wrapper__nvUvq",subtitle:"home_subtitle__eiQsH",smallsubtitle:"home_smallsubtitle__W5QbC",content_subtitle_top:"home_content_subtitle_top__PawXs",content_subtitle_middle:"home_content_subtitle_middle__STYoh",content_subtitle:"home_content_subtitle__WdK8U",content_headline:"home_content_headline__iTkvv",content:"home_content__VPgDA",content_img_wrapper:"home_content_img_wrapper__epoqG",button:"home_button__DWg9I",button_text:"home_button_text__LIDLx",overlay_card_wrapper:"home_overlay_card_wrapper__cGicU",overlay_card:"home_overlay_card__Ulqoh",overlay_card_title:"home_overlay_card_title__e3Osu",overlay_card_content:"home_overlay_card_content__1pQpu",overlay_card_button:"home_overlay_card_button__nYWEi",reserve:"home_reserve__3XIK0",reserve_title:"home_reserve_title__FRigh",reserve_button:"home_reserve_button__EMEZ5",reserve_contact:"home_reserve_contact__k5_wn",info_title:"home_info_title__NmqZi",info_list:"home_info_list__u4vRj",info_list_item:"home_info_list_item___CG6L",info_content:"home_info_content__Ddvh9",info_list_date:"home_info_list_date__Yezfw",slider_img:"home_slider_img__yhO5D",with_mobile:"home_with_mobile__aXHhy",without_mobile:"home_without_mobile__NObws",teacher_content_wrapper:"home_teacher_content_wrapper__n_Aka",teacher_row:"home_teacher_row__f9ITF",teacher_name_wrapper:"home_teacher_name_wrapper__LUTUx",teacher_name:"home_teacher_name__YYWjT",teacher_content:"home_teacher_content__x5I9r",about_row:"home_about_row__V42qy",curriculum_row:"home_curriculum_row__dcJbS"}}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);