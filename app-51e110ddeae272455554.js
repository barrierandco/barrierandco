webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,n,t){"use strict";function o(e,n,t){var o=s.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return s.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var s=[{plugin:t("./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),options:{plugins:[],trackingId:"UA-106737528-1"}}]},"./.cache/async-requires.js":function(e,n,t){"use strict";var o;n.components={"component---src-pages-404-js":t("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-index-js":t("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js")},n.json=(o={"layout-index.json":t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"404.json":t("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json")},o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),o["layout-index.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),o["404-html.json"]=t("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),o),n.layouts={"component---src-layouts-index-js":t("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=t("./node_modules/react/react.js"),c=o(u),l=t("./node_modules/prop-types/index.js"),d=o(l),p=t("./.cache/loader.js"),f=o(p),m=t("./.cache/emitter.js"),h=o(m),g=function(e){var n=e.children;return c.default.createElement("div",null,n())},j=function(e){function n(t){r(this,n);var o=s(this,e.call(this));return o.state={location:t.location,pageResources:f.default.getResourcesForPathname(t.location.pathname)},o}return a(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=f.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):f.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){n.page.path===f.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){return this.props.page?this.state.pageResources?(0,u.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,u.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);j.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},n.default=j,e.exports=n.default},"./.cache/emitter.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t("./node_modules/mitt/dist/mitt.js"),s=o(r),a=(0,s.default)();e.exports=a},"./.cache/find-page.js":function(e,n,t){"use strict";var o=t("./node_modules/react-router-dom/index.js"),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var s=decodeURIComponent(t),a=s.slice(n.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),r[a])return r[a];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(a,{path:e.path})||(0,o.matchPath)(a,{path:e.matchPath}))return i=e,r[a]=e,!0}else{if((0,o.matchPath)(a,{path:e.path,exact:!0}))return i=e,r[a]=e,!0;if((0,o.matchPath)(a,{path:e.path+"index.html"}))return i=e,r[a]=e,!0}return!1}),i}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-preset-stage-0/lib/index.js","/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t("./node_modules/react/react.js"),s=(o(r),t("./.cache/find-page.js")),a=o(s),i=t("./.cache/emitter.js"),u=o(i),c=void 0,l={},d={},p={},f={},m={},h=[],g=[],j={},y=[],b={},_=function(e){return e&&e.default||e},v=void 0,x=!0;v=t("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){R(e,function(){y=y.filter(function(n){return n!==e}),v.onResourcedFinished(e)})}}),u.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),u.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var w=function(e,n){return b[e]>b[n]?1:b[e]<b[n]?-1:0},E=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])n.nextTick(function(){t(null,f[e])});else{var o="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];o(function(n,o){f[e]=o,t(n,o)})}},P=function(e,t){m[e]?n.nextTick(function(){t(null,m[e])}):R(e,function(n,o){if(n)t(n);else{var r=_(o());m[e]=r,t(n,r)}})},N=1,O={empty:function(){g=[],j={},b={},y=[],h=[]},addPagesArray:function(e){h=e;var n="";n="",c=(0,a.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){d=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/N;N+=1,j[e]?j[e]+=1:j[e]=1,O.has(e)||g.unshift(e),g.sort(E);var t=c(e);return t.jsonName&&(b[t.jsonName]?b[t.jsonName]+=1+n:b[t.jsonName]=1+n,y.indexOf(t.jsonName)!==-1||f[t.jsonName]||y.unshift(t.jsonName)),t.componentChunkName&&(b[t.componentChunkName]?b[t.componentChunkName]+=1+n:b[t.componentChunkName]=1+n,y.indexOf(t.componentChunkName)!==-1||f[t.jsonName]||y.unshift(t.componentChunkName)),y.sort(w),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:b}},getPages:function(){return{pathArray:g,pathCount:j}},getPage:function(e){return c(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};x&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var s=r;s.unregister()}window.location.reload()})),x=!1;var o=c(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),u.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];u.default.emit("onPreLoadPageResources",{path:e});var r=void 0,s=void 0,a=void 0,i=function(){if(r&&s&&(!o.layoutComponentChunkName||a)){p[e]={component:r,json:s,layout:a};var n={component:r,json:s,layout:a};t(n),u.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return P(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),r=n,i()}),P(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),s=n,i()}),void(o.layoutComponentChunkName&&P(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),a=n,i()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=O}).call(n,t("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],s=function(){var e=n();e&&(r.push(e),t(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&s()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t("./.cache/api-runner-browser.js"),a=t("./node_modules/react/react.js"),i=o(a),u=t("./node_modules/react-dom/index.js"),c=o(u),l=t("./node_modules/react-router-dom/index.js"),d=t("./node_modules/gatsby-react-router-scroll/index.js"),p=t("./node_modules/history/createBrowserHistory.js"),f=o(p),m=t("./node_modules/domready/ready.js"),h=o(m),g=t("./.cache/emitter.js"),j=o(g),y=t("./.cache/pages.json"),b=o(y),_=t("./.cache/redirects.json"),v=o(_),x=t("./.cache/component-renderer.js"),w=o(x),E=t("./.cache/async-requires.js"),R=o(E),P=t("./.cache/loader.js"),N=o(P);t("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,N.default.addPagesArray(b.default),N.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=N.default,window.matchPath=l.matchPath;var O=(0,f.default)(),C=v.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),D=function(e){var n=C[e];return null!=n&&(O.replace(n.toPath),!0)};D(window.location.pathname),(0,s.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){D(e.pathname)||(0,s.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,s.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,s.apiRunner)("registerServiceWorker").length>0&&t("./.cache/register-service-worker.js");var o=function(e){function n(t){t.page.path===N.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=C[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){j.default.off("onPostLoadPageResources",n),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);N.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):j.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,s.apiRunner)("onRouteUpdate",{location:O.location,action:O.action});var u=(0,s.apiRunner)("replaceRouterComponent",{history:O})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:O},n)};N.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,a.createElement)(u?u:p,null,(0,a.createElement)(d.ScrollContext,{shouldUpdateScroll:n},(0,a.createElement)((0,l.withRouter)(w.default),{layout:!0,children:function(n){return(0,a.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return N.default.getPage(o.location.pathname)?(0,a.createElement)(w.default,r({page:!0},o)):(0,a.createElement)(w.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,s.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,h.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,s.apiRunner)("onInitialClientRender")})})})})},"./.cache/redirects.json":function(e,n){e.exports=[]},"./.cache/register-service-worker.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t("./.cache/emitter.js"),s=o(r),a="/";a="/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),s.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/create-react-class/factory.js":function(e,n,t){"use strict";function o(e){return e}function r(e,n,t){function r(e,n){var t=y.hasOwnProperty(n)?y[n]:null;x.hasOwnProperty(n)&&u("OVERRIDE_BASE"===t,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",n),e&&u("DEFINE_MANY"===t||"DEFINE_MANY_MERGED"===t,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n)}function s(e,t){if(t){u("function"!=typeof t,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!n(t),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,s=o.__reactAutoBindPairs;t.hasOwnProperty(c)&&b.mixins(e,t.mixins);for(var a in t)if(t.hasOwnProperty(a)&&a!==c){var i=t[a],l=o.hasOwnProperty(a);if(r(l,a),b.hasOwnProperty(a))b[a](e,i);else{var d=y.hasOwnProperty(a),m="function"==typeof i,h=m&&!d&&!l&&t.autobind!==!1;if(h)s.push(a,i),o[a]=i;else if(l){var g=y[a];u(d&&("DEFINE_MANY_MERGED"===g||"DEFINE_MANY"===g),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",g,a),"DEFINE_MANY_MERGED"===g?o[a]=p(o[a],i):"DEFINE_MANY"===g&&(o[a]=f(o[a],i))}else o[a]=i}}}else;}function l(e,n){if(n)for(var t in n){var o=n[t];if(n.hasOwnProperty(t)){var r=t in b;u(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',t);var s=t in e;u(!s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t),e[t]=o}}}function d(e,n){u(e&&n&&"object"==typeof e&&"object"==typeof n,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var t in n)n.hasOwnProperty(t)&&(u(void 0===e[t],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",t),e[t]=n[t]);return e}function p(e,n){return function(){var t=e.apply(this,arguments),o=n.apply(this,arguments);if(null==t)return o;if(null==o)return t;var r={};return d(r,t),d(r,o),r}}function f(e,n){return function(){e.apply(this,arguments),n.apply(this,arguments)}}function m(e,n){var t=n.bind(e);return t}function h(e){for(var n=e.__reactAutoBindPairs,t=0;t<n.length;t+=2){var o=n[t],r=n[t+1];e[o]=m(e,r)}}function g(e){var n=o(function(e,o,r){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=o,this.refs=i,this.updater=r||t,this.state=null;var s=this.getInitialState?this.getInitialState():null;u("object"==typeof s&&!Array.isArray(s),"%s.getInitialState(): must return an object or null",n.displayName||"ReactCompositeComponent"),this.state=s});n.prototype=new w,n.prototype.constructor=n,n.prototype.__reactAutoBindPairs=[],j.forEach(s.bind(null,n)),s(n,_),s(n,e),s(n,v),n.getDefaultProps&&(n.defaultProps=n.getDefaultProps()),u(n.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in y)n.prototype[r]||(n.prototype[r]=null);return n}var j=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(e,n){e.displayName=n},mixins:function(e,n){if(n)for(var t=0;t<n.length;t++)s(e,n[t])},childContextTypes:function(e,n){e.childContextTypes=a({},e.childContextTypes,n)},contextTypes:function(e,n){e.contextTypes=a({},e.contextTypes,n)},getDefaultProps:function(e,n){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,n):e.getDefaultProps=n},propTypes:function(e,n){e.propTypes=a({},e.propTypes,n)},statics:function(e,n){l(e,n)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},x={replaceState:function(e,n){this.updater.enqueueReplaceState(this,e,n)},isMounted:function(){return!!this.__isMounted}},w=function(){};return a(w.prototype,e.prototype,x),g}var s,a=t("./node_modules/object-assign/index.js"),i=t("./node_modules/fbjs/lib/emptyObject.js"),u=t("./node_modules/fbjs/lib/invariant.js"),c="mixins";s={},e.exports=r},"./node_modules/domready/ready.js":function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",s=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return s||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),s=1;e=n.shift();)e()}),function(e){s?setTimeout(e,0):n.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,s=t.s;t.e=function(o,a){var i=!1,u=!0,c=function(e){a&&(a(t,e),a=null)};return!s&&n&&n[o]?void c(!0):(r(o,function(){i||(i=!0,u?setTimeout(function(){c()}):c())}),void(i||(u=!1,e(function(){i||(i=!0,s?s[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},"./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js":function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;"function"==typeof ga&&(window.ga("set","page",(n||{}).pathname),window.ga("send","pageview"))}},"./node_modules/mitt/dist/mitt.js":function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},"./node_modules/object-assign/index.js":function(e,n){"use strict";function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;var o=Object.getOwnPropertyNames(n).map(function(e){return n[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,n){for(var o,i,u=t(e),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var l in o)s.call(o,l)&&(u[l]=o[l]);if(r){i=r(o);for(var d=0;d<i.length;d++)a.call(o,i[d])&&(u[i[d]]=o[i[d]])}}return u}},"./node_modules/process/browser.js":function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function s(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function a(){h&&f&&(h=!1,f.length?m=f.concat(m):g=-1,m.length&&i())}function i(){if(!h){var e=r(a);h=!0;for(var n=m.length;n;){for(f=m,m=[];++g<n;)f&&f[g].run();g=-1,n=m.length}f=null,h=!1,s(e)}}function u(e,n){this.fun=e,this.array=n}function c(){}var l,d,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var f,m=[],h=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new u(e,n)),1!==m.length||h||r(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-preset-stage-0/lib/index.js","/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,n,t){t("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-preset-stage-0/lib/index.js","/Users/johnwilson/Sites/Barrier/barrier-co/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}}});
//# sourceMappingURL=app-51e110ddeae272455554.js.map