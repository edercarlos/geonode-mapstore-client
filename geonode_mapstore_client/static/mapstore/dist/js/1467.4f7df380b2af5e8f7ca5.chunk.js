(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1467],{48384:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var n=o(67294),r=o.n(n),a=o(45697),i=o.n(a);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function u(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d,g,b,y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,o,n,a,i=(n=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(a){var o=f(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return u(this,e)});function l(){return c(this,l),i.apply(this,arguments)}return t=l,(o=[{key:"render",value:function(){var e=this.props.item;return e.pagination?r().createElement("span",null,e[this.props.textField]," ",e.pagination," "):r().createElement("span",null,e[this.props.textField])}}])&&p(t.prototype,o),l}(r().Component);d=y,g="propTypes",b={item:i().object,textField:i().string,valueField:i().string},g in d?Object.defineProperty(d,g,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[g]=b;const m=y},49902:(e,t,o)=>{"use strict";o.d(t,{Z:()=>w});var n=o(45697),r=o.n(n),a=o(67294),i=o.n(a),l=o(20),c=o(57588),p=o(86638),s=o(50966),u=o(48384);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d.apply(this,arguments)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function P(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,o,n,r,a=(n=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(r){var o=h(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return m(this,e)});function u(){var e;g(this,u);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return P(v(e=a.call.apply(a,[this].concat(o))),"renderWithTooltip",(function(t){if(e.props.tooltip.customizedTooltip){var o=e.props.tooltip.customizedTooltip;return i().createElement(o,null,t)}var n=i().createElement(c.Tooltip,{id:e.props.tooltip.id},e.props.tooltip.message);return i().createElement(s.Z,{key:e.props.tooltip.overlayTriggerKey,placement:e.props.tooltip.placement,overlay:n},t)})),P(v(e),"renderPagination",(function(){var t=e.props.pagination.firstPage,o=e.props.pagination.lastPage;return i().createElement("div",{className:"autocomplete-toolbar"},!t&&i().createElement(c.Glyphicon,{className:e.props.prevPageIcon,glyph:e.props.prevPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadPrevPage()}}),!o&&i().createElement(c.Glyphicon,{className:e.props.nextPageIcon,glyph:e.props.nextPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadNextPage()}}))})),P(v(e),"renderField",(function(){var t,o={emptyList:(0,p.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyList"),open:(0,p.S$)(e.context.messages,"queryform.attributefilter.autocomplete.open"),emptyFilter:(0,p.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyFilter")},n=[];e.props.data&&e.props.data.length>0&&(n=e.props.data.map((function(e){return e}))),e.props.pagination&&e.props.pagination.paginated&&n.length>0&&n.push((P(t={},e.props.textField,""),P(t,e.props.valueField,""),P(t,"disabled",!0),P(t,"pagination",e.renderPagination()),t));var r=e.props.loading?[]:n,a=e.props.itemComponent,c=i().createElement(l.Combobox,{placeholder:e.props.placeholder,dropUp:e.props.dropUp,busy:e.props.busy,data:r,disabled:e.props.disabled,itemComponent:function(t){return i().createElement(a,d({textField:e.props.textField,valueField:e.props.valueField},t))},messages:e.props.messages||o,open:e.props.open,filter:e.props.filter,onChange:function(t){return e.props.onChange(t)},onFocus:function(){return e.props.onFocus(e.props.data)},onSelect:function(t){return e.props.onSelect(t)},onToggle:function(t){return e.props.onToggle(t)},textField:e.props.textField,valueField:e.props.valueField,value:e.props.selectedValue});return e.props.tooltip&&e.props.tooltip.enabled?e.renderWithTooltip(c):c})),e}return t=u,(o=[{key:"render",value:function(){var e=this.props,t=e.selectedValue,o=e.disabled,n=e.onReset,r=e.label,a=e.clearable,l=r?i().createElement("label",null,r):i().createElement("span",null);return i().createElement("div",{className:"autocompleteField"},l,a?i().createElement("div",{className:"rw-combo-clearable ".concat(o?"disabled":"")},this.renderField(),i().createElement("span",{className:"rw-combo-clear ".concat(t?"":"hidden"),onClick:n},"x")):this.renderField())}}])&&b(t.prototype,o),u}(i().Component);P(T,"propTypes",{busy:r().bool,data:r().array,disabled:r().bool,dropUp:r().bool,itemComponent:r().oneOfType([r().object,r().func]),label:r().string,loading:r().bool,filter:r().oneOfType([r().string,r().bool]),messages:r().object,onChange:r().func,onFocus:r().func,onSelect:r().func,onToggle:r().func,open:r().bool,pagination:r().object,nextPageIcon:r().string,prevPageIcon:r().string,selectedValue:r().string,textField:r().string,tooltip:r().object,valueField:r().string,placeholder:r().string,stopPropagation:r().bool,clearable:r().bool,onReset:r().func}),P(T,"contextTypes",{messages:r().object}),P(T,"defaultProps",{stopPropagation:!1,dropUp:!1,itemComponent:u.Z,loading:!1,label:null,filter:"",pagination:{paginated:!0,firstPage:!1,lastPage:!1,loadPrevPage:function(){},loadNextPage:function(){}},nextPageIcon:"chevron-right",prevPageIcon:"chevron-left",onFocus:function(){},onToggle:function(){},onChange:function(){},onSelect:function(){},onReset:function(){},textField:"label",tooltip:{customizedTooltip:void 0,enabled:!1,id:"",message:void 0,overlayTriggerKey:"",placement:"top"},valueField:"value",clearable:!1});const w=T},43146:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var n=o(2479),r=o(47037),a=o.n(r),i=o(47960),l=o.n(i),c=o(30381),p=o.n(c),s=o(55237);function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dateTypeProp,o=void 0===t?"type":t,r=e.dateProp,i=void 0===r?"date":r,c=e.setDateProp,f=void 0===c?"onSetDate":c;return(0,n.compose)((0,n.withPropsOnChange)([i],(function(e){var t,n=e[i],r=e[o],c=e.useUTCOffset,f=void 0===c||c,d=n,g="1970-01-01",b="00:00:00";!l()(n)&&a()(n)&&("time"===r&&(d=new Date("".concat(g,"T").concat(n))),"date"===r&&(-1!==n.indexOf("Z")&&(d=n.substr(0,n.length-1)),d=new Date("".concat(d,"T").concat(b,"Z"))),"date-time"===r&&(d=new Date(n)));var y=d;if(d){switch(r){case"time":b=(0,s.kN)(d);break;case"date":g=(0,s.oD)(d);break;default:b=(0,s.kN)(d),g=(0,s.oD)(d)}(y=new Date("".concat(g,"T").concat(b,"Z"))).setUTCMilliseconds(d.getUTCMilliseconds());var m=f?(0,s.$4)(y):0;y=new Date(y.getTime()+m)}return u(t={},i,y),u(t,"defaultCurrentDate","date-time"===r?p()().startOf("day").toDate():void 0),t})),(0,n.withHandlers)(u({},f,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e[f],n=e[o],r=e.useUTCOffset,a=void 0===r||r;return function(e,o){if(e){var r=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())),i=a?(0,s.$4)(e):0,l=new Date(r.getTime()-i);switch(n){case"time":l="".concat((0,s.kN)(l),"Z");break;case"date":l="".concat((0,s.oD)(l),"Z")}t(l,o)}else t(null)}}))))}}}]);