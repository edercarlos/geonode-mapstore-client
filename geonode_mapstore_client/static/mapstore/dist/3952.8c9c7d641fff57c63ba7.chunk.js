(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3952],{43120:(e,t,n)=>{var r={"./cesium.js":[61133,8152,8129,1736,6882,1868,2531,6177,5794,9437],"./leaflet.js":[48507,130,6259,5030,8152,522,4558,8129,1736,7708,4226,6882,1868,3991,6177,5358,5701,6266,7161],"./openlayers.js":[34637,130,6259,5030,3201,8158,6932,4297,8152,1108,4534,8129,2352,1736,7708,4226,6882,844,1868,407,3498,4907,6177,5516,6266,6037],"./sink.js":[60620,5442]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=43120,e.exports=o},49243:(e,t,n)=>{"use strict";n.d(t,{y:()=>d});var r=n(96486),o=n(89255),i=n(7412),a=n(75875),c=n.n(a),s=n(90183);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},p=a.attachJSON,l=a.itemId,y=void 0===l?null:l,d=function(t){return o.Observable.defer((function(){return c().get(e,{params:t})}))},m=function(t){return(0,i.pf)(n,e,t)},b=(0,i.pf)(n,e,t)?m:d;return p&&"application/json"!==t.info_format&&"application/json"!==t.outputFormat?o.Observable.forkJoin(b(t),b(f(f({},t),{},{info_format:"application/json"})).map((function(e){return e.data})).catch((function(){return o.Observable.of({})}))).map((function(e){var t=u(e,2),n=t[0],o=t[1];return f(f({},n),{},{features:o&&o.features&&o.features.filter((function(e){return!!(0,r.isNil)(y)||e.id===y})),featuresCrs:o&&o.crs&&(0,s.parseURN)(o.crs)})})):b(t).map((function(e){return e.data})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{data:(0,r.isString)(e)?e:f(f({},e),{},{features:e.features&&e.features.filter((function(e){return!y||e.id===y}))}),features:e.features&&e.features.filter((function(e){return!y||e.id===y})),featuresCrs:e&&e.crs&&(0,s.parseURN)(e.crs)}}))}},63721:(e,t,n)=>{"use strict";n.d(t,{yM:()=>_,dY:()=>k});var r=n(67294),o=n.n(r),i=n(18093),a=n(89255),c=n(96486),s=n(23570),u=n.n(s),p=n(73014),l=n(11196),f=n(42872),y=n(79870),d=(0,i.compose)((0,i.withStateHandlers)({index:0},{setIndex:function(){return function(e){return{index:e}}}}),(0,i.defaultProps)({index:0,responses:[]}));const m=(0,i.compose)((0,i.defaultProps)({responses:[],container:function(e){var t=e.index,n=e.children;return o().createElement(o().Fragment,null,(0,c.isArray)(n)&&n[t]||n)},header:y.Z}),d,l.Yy,l.mI,(0,p.Z)((function(e){return 0===e.responses.length})))(f.Z);var b=n(49243),h=n(7412),v=n(24262);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function(){return-1!==(0,h.lY)().indexOf("application/json")?"application/json":(0,h.wR)()},C=(0,i.mapPropsStream)((function(e){var t=(0,i.createEventHandler)(),n=t.stream,r=t.handler;return n.withLatestFrom(e.map((function(e){return{map:e.map,layers:e.layers,options:e.options}})).distinctUntilChanged((function(e,t){return(0,c.isEqual)(e,t)}))).switchMap((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0].point,i=r[1],c=i.map,s=i.layers,p=void 0===s?[]:s,l=i.options,f=(l=void 0===l?{}:l).mapOptions,y=(f=void 0===f?{}:f).mapInfoFormat,d=void 0===y?E():y,m=p.filter((function(e){return(0,v.isInsideResolutionsLimits)(e,c.resolution)&&(0,h.y_)(e)})),g=["SLD_BODY"],O=["buffer","cql_filter","filter","propertyName"];return 0===m.length?a.Observable.of({requests:[{}],responses:[{response:{features:[]}}],validResponses:[]}):a.Observable.from(m).mergeMap((function(e){var t=(0,h.Fm)(e,{format:d,map:c,point:o,currentLocale:"en-US"}),n=t.url,r=t.request,i=t.metadata,a=n,s=r,p=w(w({},(0,h.K7)(e,O,g)),s),l=u()();return(0,b.y)(a,p,e).map((function(e){return e.data.exceptions?{reqId:l,exceptions:e.data.exceptions,queryParams:s,layerMetadata:i}:{data:e.data,reqId:l,queryParams:s,layerMetadata:w(w({},i),{},{features:e.features,featuresCrs:e.featuresCrs})}})).catch((function(e){return{error:e.data||e.statusText||e.status,reqId:l,queryParams:s,layerMetadata:i}})).startWith({start:!0,reqId:l,request:p})})).scan((function(e,t){var n=e.requests,r=e.responses,o=e.validResponses;if(t.start){var i=t.reqId,a=t.request;return{requests:n.concat({reqId:i,request:a}),responses:r,validResponses:o}}var c=t.data,s=t.queryParams,u=t.layerMetadata,p=(0,h.Te)(d),l=r.concat({response:c,queryParams:s,layerMetadata:u});return{requests:n,validResponses:p.getValidResponses(l),responses:l}}),{requests:[],responses:[],validResponses:[]})})).startWith({requests:[],responses:[]}).combineLatest(e,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return w(w({},t),{},{mapInfo:e,getFeatureInfoHandler:r})}))})),k=(0,i.branch)((function(e){var t=e.map,n=(t=void 0===t?{}:t).mapInfoControl;return void 0!==n&&n}),(0,i.compose)(C,(0,i.withStateHandlers)({popups:[]},{onClick:function(e,t){var n=t.getFeatureInfoHandler,r=void 0===n?function(){}:n;return function(e,t){var n=e.rawPos,o=void 0===n?[]:n,i=O(e,["rawPos"]);return r({point:i,layerInfo:t}),{popups:[{position:{coordinates:o},id:u()()}]}}},onPopupClose:function(){return function(){return{popups:[]}}}}),(0,i.withPropsOnChange)(["mapInfo","popups"],(function(e){var t=e.mapInfo,n=e.popups,r=e.options,i=(r=void 0===r?{}:r).mapOptions,a=(i=void 0===i?{}:i).mapInfoFormat,c=void 0===a?E():a,s=t.responses,u=t.requests,p=t.validResponses,l=function(){return o().createElement(m,{renderEmpty:!0,responses:s,requests:u,validResponses:p,format:c,showEmptyMessageGFI:!0,missingResponses:(u||[]).length-(s||[]).length})};return{popups:n.map((function(e){return w(w({},e),{},{component:l})}))}})),(0,i.withPropsOnChange)(["plugins","onPopupClose","popups"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.plugins,n=e.popups,r=e.onPopupClose,i=t.PopupSupport,a=t.tools,c=void 0===a?{}:a,s=O(t,["PopupSupport","tools"]);if(!i)return{};var u=function(e){return o().createElement(i,g({},e,{popups:n,onPopupClose:r}))};return{plugins:w(w({},s),{},{tools:w(w({},c),{},{popup:u})})}})))),_=(0,i.withPropsOnChange)(["onClick","eventHandlers"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,n=void 0===t?function(){}:t,r=e.eventHandlers,o=void 0===r?{}:r;return{eventHandlers:w(w({},o),{},{onClick:n})}}))},61928:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(67294),o=n.n(r),i=n(45697),a=n.n(i),c=n(96486);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(s,e);var t,n,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(i){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function s(){var e;y(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(h(e=a.call.apply(a,[this].concat(n))),"getTool",(function(t){var n=e.props.plugins;return(0,c.isString)(t)?{name:t,impl:n.tools[t]}:f({name:t.name,impl:n.tools[t.name]},t)})),g(h(e),"renderLayers",(function(){var t=e.props.map&&e.props.map.projection||"EPSG:3857",n=e.props.plugins.Layer;return e.props.layers.map((function(r,i){return o().createElement(n,{type:r.type,srs:t,position:i,key:r.id||r.name,options:r,env:r.localizedLayerStyles?e.props.env:[]},e.renderLayerContent(r,t))}))})),g(h(e),"renderLayerContent",(function(t,n){if(t.features&&"vector"===t.type){var r=e.props.plugins.Feature;return t.features.map((function(e){return o().createElement(r,{key:e.id,msId:e.id,type:e.type,crs:n,geometry:e.geometry,features:e.features,featuresCrs:t.featuresCrs||"EPSG:4326",layerStyle:t.style,style:e.style||t.style||null,properties:e.properties})}))}return null})),g(h(e),"renderTools",(function(){return e.props.tools.map((function(t){var n=e.getTool(t),r=n.impl,i=n.name,a=p(n,["impl","name"]);return o().createElement(r,u({key:i},a))}))})),e}return t=s,(n=[{key:"render",value:function(){var e=this.props.plugins.Map,t=this.props.map&&this.props.map.projection||"EPSG:3857";return this.props.map&&e?o().createElement(e,u({projectionDefs:this.props.projectionDefs,style:this.props.styleMap,id:this.props.id,zoomControl:!1,center:{x:0,y:0},zoom:1,hookRegister:this.props.hookRegister,mapStateSource:this.props.mapStateSource||this.props.id},this.props.options,this.props.map,{projection:t},this.props.eventHandlers),this.renderLayers(),this.renderTools(),this.props.children):null}}])&&d(t.prototype,n),s}(o().Component);g(O,"propTypes",{id:a().string,options:a().object,map:a().object,mapStateSource:a().string,eventHandlers:a().object,styleMap:a().object,layers:a().array,hookRegister:a().object,projectionDefs:a().array,plugins:a().any,tools:a().array,getLayerProps:a().func,env:a().array}),g(O,"defaultProps",{id:"__base_map__",options:{},map:{},styleMap:{},tools:[],projectionDefs:[],eventHandlers:{onMapViewChanges:function(){},onClick:function(){},onMouseMove:function(){},onLayerLoading:function(){},onLayerError:function(){}},env:[]});const j=O},7848:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(33664),o=n(22222),i=n(93152);const a=(0,r.connect)((0,o.P1)(i.$v,(function(e){return{mapType:e}})))},91812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(18093),o=n(38482);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,r.compose)((0,r.withStateHandlers)((function(){return{resize:0}}),{onResize:function(e){var t=e.resize,n=void 0===t?0:t;return function(){return{resize:n+1}}}}),(0,o.Z)({debounceTime:e}),(0,r.withProps)((function(e){var t=e.options,n=e.resize;return{options:a(a({},t),{},{resize:n})}})))}},37981:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(18093),o=n(37275),i=n(96486);const a=(0,r.withProps)((function(e){var t=e.projectionDefs;return{projectionDefs:(0,i.isArray)(t)&&t.length?t:o.ZP.getConfigProp("projectionDefs")||[]}}))},57068:(e,t,n)=>{"use strict";n.d(t,{e:()=>p});var r=n(18093),o=n(82030),i=n(5346),a=n(67294),c=n.n(a),s=n(37275),u=(0,r.withProps)((function(e){var t=e.map;return{projection:e.projection||(t.data&&t.data.map?t.data.map.projection:t&&t.projection)}})),p=(0,r.compose)(u,(0,o.Z)((function(e){var t=e.projectionDefs,n=void 0===t?s.ZP.getConfigProp("projectionDefs")||[]:t,r=e.projection;return r&&0===n.concat([{code:"EPSG:4326"},{code:"EPSG:3857"},{code:"EPSG:900913"}]).filter((function(e){return e.code===r})).length}),(function(e){var t=e.projection;return{glyph:"1-map",style:{width:"100%",height:"100%",display:"flex"},title:c().createElement(i.Z,{msgId:"map.errors.loading.title"}),mainViewStyle:{margin:"auto"},imageStyle:{height:120,width:120,margin:"auto"},description:c().createElement(i.Z,{msgId:"map.errors.loading.projectionError",msgParams:{projection:t}})}})))},19180:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(67294),o=n.n(r),i=n(45697),a=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const b=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(h,t);var r,i,a,c,b=(a=h,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(c){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function h(){var e;u(this,h);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(y(e=b.call.apply(b,[this].concat(n))),"state",{plugins:{}}),e}return r=h,(i=[{key:"componentDidMount",value:function(){this.setPlugins(this.props),this._isMounted=!0}},{key:"componentWillUpdate",value:function(e){e.mapType!==this.props.mapType&&this.setPlugins(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=this.state.plugins;return o().createElement(e,s({},this.props,{plugins:t}))}},{key:"setPlugins",value:function(e){var t=this;e.mapType&&n(43120)("./"+e.mapType+".js").then((function(e){t._isMounted&&(t.setState({plugins:e.default()}),t.props.onMapTypeLoaded())}))}}])&&p(r.prototype,i),h}(o().Component);return m(t,"propTypes",{mapType:a().string,onMapTypeLoaded:a().func}),m(t,"defaultProps",{onMapTypeLoaded:function(){}}),t.displayName="".concat(e.displayName,"WithMapType"),t}},69705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(18093);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=(0,r.compose)((0,r.withHandlers)({onMapViewChanges:function(e){var t=e.map,n=void 0===t?{}:t,r=e.onMapViewChanges,o=void 0===r?function(){}:r;return function(e,t,r,a,c,s,u,p){o(i(i({},n),{},{center:e,bbox:i(i({},n.bbox),r),zoom:t,size:a,mapStateSource:c,projection:s,resolution:p}))}}}),(0,r.withPropsOnChange)(["onMapViewChanges","eventHandlers"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onMapViewChanges,n=void 0===t?function(){}:t,r=e.eventHandlers,o=void 0===r?{}:r;return{eventHandlers:i(i({},o),{},{onMapViewChanges:n})}})))},1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(27418),o=n.n(r),i=n(45697),a=n.n(i),c=n(67294),s=n.n(c),u=n(73935),p=n.n(u),l=n(30294),f=n(38560),y=n(5346),d=n(7472);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,e);var t,n,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(i){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function c(){var e;b(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return w(O(e=a.call.apply(a,[this].concat(n))),"setConfirmRef",(function(t){return e.confirm=t,e.confirm})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&p().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return s().createElement(d.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:o()({},this.props.style,{display:this.props.show?"block":"none"})},s().createElement("span",{role:"header"},s().createElement("span",{className:"user-panel-title"},this.props.title),s().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?s().createElement(l.Glyphicon,{glyph:this.props.closeGlyph}):s().createElement("span",null,"×"))),s().createElement("div",{role:"body"},this.props.children),s().createElement("div",{role:"footer"},s().createElement(l.ButtonGroup,null,s().createElement(f.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),s().createElement(f.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&h(t.prototype,n),c}(s().Component);w(P,"propTypes",{show:a().bool,draggable:a().bool,onClose:a().func,onConfirm:a().func,onSave:a().func,modal:a().bool,closeGlyph:a().string,style:a().object,buttonSize:a().string,inputStyle:a().object,title:a().node,confirmButtonContent:a().node,confirmButtonDisabled:a().bool,closeText:a().node,confirmButtonBSStyle:a().string,focusConfirm:a().bool}),w(P,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:s().createElement(y.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:s().createElement(y.Z,{msgId:"confirm"})||"Confirm",closeText:s().createElement(y.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const S=P},35400:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(67294),o=n.n(r),i=n(14471);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{}:t,r=e.mainViewStyle,a=void 0===r?{}:r,s=e.contentStyle,u=void 0===s?{}:s,p=e.imageStyle,l=void 0===p?{}:p,f=e.glyph,y=void 0===f?"info-sign":f,d=e.iconFit,m=e.title,b=e.tooltip,h=e.tooltipId,v=e.description,g=e.content;return o().createElement("div",{className:"empty-state-container",style:c({height:d?"100%":void 0},n)},o().createElement("div",{key:"main-view",className:"empty-state-main-view",style:c({height:d?"100%":void 0},a)},y?o().createElement("div",{key:"glyph",className:"empty-state-image",style:c({height:d?"100%":void 0},l)},o().createElement(i.Z,{iconFit:d,tooltip:b,tooltipId:h,glyph:y})):null,m?o().createElement("h1",{key:"title"},m):null,v?o().createElement("p",{key:"description",className:"empty-state-description"},v):null),o().createElement("div",{key:"content",className:"empty-state-content",style:u},g))}},14471:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),o=n.n(r),i=n(30294),a=n(96259),c=(0,n(15135).Z)(i.Glyphicon);const s=function(e){var t=e.glyph,n=void 0===t?"info-sign":t,r=e.tooltip,i=e.tooltipId,s=e.iconFit,u=e.padding,p=void 0===u?0:u,l=e.margin,f=void 0===l?0:l;return o().createElement(a.Z,null,(function(e){var t=e.width,a=e.height;return o().createElement(c,{glyph:n,tooltip:r,tooltipId:i,style:{display:"inline-block",padding:p+"px",margin:f+"px",textAlign:"center",fontSize:s?Math.min(t,a)-2*p-2*f:t-2*p-2*f}})}))}},99534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(61365),o=n(56936);const i=(0,r.Z)(o.h_)},82030:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),o=n.n(r),i=n(96486),a=n(18093),c=n(35400);const s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.Z;return(0,a.branch)(e,(function(){return function(e){return o().createElement(n,t&&(0,i.isFunction)(t)?t(e):t)}}))}},38482:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(67294),o=n.n(r),i=n(96486),a=n(45697),c=n.n(a),s=n(73935),u=n.n(s),p=n(91033);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),e}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debounceTime,n=e.querySelector,r=e.closest,a=void 0!==r&&r;return function(e){var r,s;return s=r=function(r){m(s,r);var c=h(s);function s(e){var r;return f(this,s),j(g(r=c.call(this,e)),"findDomNode",(function(){if(!r.isMounded)return null;var e=u().findDOMNode(g(r));return e&&a&&n?e.closest(n||"*"):e&&(n?e.querySelector(n):e)})),r.width=void 0,r.height=void 0,r.skipOnMount=e.skipOnMount,r.div=null,r.onResize=(0,i.debounce)((function(){var e;return(e=r.props).onResize.apply(e,arguments)}),void 0!==t?t:e.debounceTime||1e3),r.ro=new p.Z((function(e){e.forEach((function(e){var t=e.contentRect,n=t.width,o=t.height,i=r.props.handleWidth&&r.width!==n,a=r.props.handleHeight&&r.height!==o;r.skipOnMount||!i&&!a||r.onResize({width:n,height:o}),r.width=n,r.height=o,r.skipOnMount=!1}))})),r}return d(s,[{key:"componentDidMount",value:function(){this.isMounded=!0,this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentDidUpdate",value:function(){this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentWillUnmount",value:function(){var e=this.findDomNode();e&&this.ro&&this.ro.unobserve&&this.ro.unobserve(e)}},{key:"render",value:function(){return o().createElement(e,this.props)}}]),s}(o().Component),j(r,"propTypes",{handleWidth:c().bool,handleHeight:c().bool,onResize:c().func}),j(r,"defaultProps",{onResize:function(){},handleWidth:!0,handleHeight:!0}),s}}}}]);