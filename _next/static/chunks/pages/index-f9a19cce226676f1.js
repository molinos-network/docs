(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1878)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,u=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),l=n(387),c=n(7190);var f={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),a=u.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var g=(t=u.default.Children.only(v))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),E=w[0],x=w[1],_=u.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);u.default.useEffect((function(){var e=x&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(r,d,p,{locale:t})}),[p,d,x,b,n,r]);var j={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:u}))}(e,r,d,p,y,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&s(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof b?b:r&&r.locale,A=r&&r.isLocaleDomain&&i.getDomainLocale(p,M,r&&r.locales,r&&r.domainLocales);j.href=A||i.addBasePath(i.addLocale(p,M,r&&r.defaultLocale))}return u.default.cloneElement(t,j)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,c=a.useRef(),f=o(a.useState(!1),2),s=f[0],d=f[1],p=o(a.useState(t?t.current:null),2),v=p[0],y=p[1],h=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:n}))}),[r,v,n,s]);return a.useEffect((function(){if(!i&&!s){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[s]),a.useEffect((function(){t&&y(t.current)}),[t]),[h,s]};var a=n(7294),u=n(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},1878:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),o=n(1664),a=n(1163),u=n(7294);function i(){var e="/inicio",t=(0,a.useRouter)();return(0,u.useEffect)((function(){t.push(e)}),[t]),(0,r.jsxs)("div",{className:"mx-auto max-w-md",children:[(0,r.jsx)("div",{className:"text-center mt-32 text-3xl font-bold",children:"\xa1Bienvenido a la documentaci\xf3n de molinos.network!"}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsxs)("p",{children:["Redirigiendo a la "," ",(0,r.jsx)(o.default,{href:e,children:(0,r.jsx)("a",{className:"underline",children:"documentaci\xf3n"})})]})})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);