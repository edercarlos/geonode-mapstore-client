(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1157],{99534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(61365),a=n(69334);const l=(0,r.Z)(a.h_)},39399:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n.n(r),l=n(57588);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}l.Dropdown.Item=l.MenuItem,l.Dropdown.Divider=function(e){return a().createElement(l.MenuItem,c({},e,{divider:!0}))};const s=l.Dropdown},36693:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(39399)},69582:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(67294),a=n.n(r),l=n(5346),c=n(97842),s=n(36693),o=n(93473),i=n(51605),u=n(77593),d=n(35721),m=n(89239);function g(e){var t=e.href,n=e.readOnly,r=e.children;return n?r:a().createElement("a",{href:t},r)}var p=(0,r.forwardRef)((function(e,t){var n,r=e.data,p=e.active,E=e.options,v=e.formatHref,f=e.getTypesInfo,y=e.layoutCardsStyle,h=e.buildHrefByTemplate,Z=e.readOnly,b=e.actions,w=e.onAction,N=e.className,O=e.loading,k=r,C=f(),I=(C[k.subtype]||C[k.resource_type]||{}).icon,_=k&&(C[k.subtype]||C[k.resource_type])||{},P=_.formatDetailUrl,R=void 0===P?function(e){return null==e?void 0:e.detail_url}:P,D=_.canPreviewed,j=(null==k?void 0:k.pk)&&R(k),T=(null==k?void 0:k.pk)&&D&&D(k),S=(null==k?void 0:k.pk)&&(0,d.J7)(k);return a().createElement("div",{ref:t,className:"gn-resource-card".concat(p?" active":"").concat(Z?" read-only":""," gn-card-type-").concat(y," ").concat("list"===y?"rounded-0":"").concat(N?" ".concat(N):"")},!Z&&a().createElement("a",{className:"gn-resource-card-link",href:v({pathname:"/detail/".concat(k.resource_type,"/").concat(k.pk)})}),a().createElement("div",{className:"card-resource-".concat(y)},a().createElement("img",{className:"".concat("list"===y?"card-img-left":"card-img-top"),src:k.thumbnail_url}),a().createElement("div",{className:"card-body"},a().createElement("div",{className:"card-title"},I&&!O&&a().createElement(a().Fragment,null,a().createElement(g,{readOnly:Z,href:v({query:{"filter{resource_type.in}":k.resource_type}})},a().createElement(c.Z,{name:I}))),O&&a().createElement(i.Z,null),a().createElement(g,{readOnly:Z,href:v({pathname:"/detail/".concat(k.resource_type,"/").concat(k.pk)})},k.title)),a().createElement(m.Z,{resource:k}),a().createElement("p",{className:"card-text gn-card-description"},k.raw_abstract?k.raw_abstract:"..."),a().createElement("p",{className:"card-text gn-card-user"},a().createElement(l.Z,{msgId:"gnhome.author"}),": ",a().createElement(g,{readOnly:Z,href:v({query:{"filter{owner.username.in}":null==k||null===(n=k.owner)||void 0===n?void 0:n.username}})},(0,u.vW)(k.owner)))),a().createElement("div",{className:"gn-card-actions"},!Z&&(j||S)&&a().createElement("div",{className:"".concat(E&&0===E.length?"gn-card-view-editor-right":"gn-card-view-editor")},a().createElement(o.Z,{variant:"default",href:T?j:S,rel:"noopener noreferrer"},a().createElement(c.Z,{name:"edit"}),a().createElement(l.Z,{msgId:"gnhome.view"}))),!Z&&E&&E.length>0&&a().createElement(s.Z,{className:"gn-card-options",pullRight:!0},a().createElement(s.Z.Toggle,{id:"gn-card-options-".concat(k.pk),variant:"default",size:"sm",noCaret:!0},a().createElement(c.Z,{name:"ellipsis-h"})),a().createElement(s.Z.Menu,{className:"gn-card-dropdown"},E.map((function(e){return"button"===e.type&&b[e.action]?a().createElement(s.Z.Item,{key:e.action,onClick:function(){return w(b[e.action],[k])}},a().createElement(c.Z,{name:e.icon})," ",a().createElement(l.Z,{msgId:e.labelId})):a().createElement(s.Z.Item,{key:e.href,href:h(k,e.href)},a().createElement(c.Z,{name:e.icon})," ",a().createElement(l.Z,{msgId:e.labelId}))})))))))}));p.defaultProps={links:[],theme:"light",getTypesInfo:d.NN,formatHref:function(){return"#"}};const E=p},57914:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(69582)},99469:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(67294),a=n.n(r),l=n(5346),c=n(45697),s=n.n(c),o=n(41609),i=n.n(o),u=n(35721),d=function(e){var t=e.resource,n=void 0===t?{}:t,r=(0,u.fu)(n),c=r.isApproved,s=r.isPublished,o=r.isProcessing,d=r.isCopying,m=r.isDeleting,g=r.isDeleted;return i()(n)?null:a().createElement("p",null,!o&&!c&&a().createElement("span",{className:"gn-resource-status gn-resource-status-warning"},a().createElement(l.Z,{msgId:"gnviewer.underApproval"})),!o&&!s&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(l.Z,{msgId:"gnviewer.unpublish"})),m&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(l.Z,{msgId:"gnviewer.deleting"})),g&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(l.Z,{msgId:"gnviewer.deleted"})),d&&a().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},a().createElement(l.Z,{msgId:"gnviewer.cloning"})))};d.propTypes={isApproved:s().bool,isPublished:s().bool},d.defaultProps={isApproved:!0,isPublished:!0};const m=d},89239:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(99469)},28261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(67294),a=n.n(r),l=n(45697),c=n.n(l),s=["id","className","style","children"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e){var t=e.id,n=e.className,r=e.style,l=e.children,c=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,s),i=n?" "+n:"";return a().createElement(a().Fragment,null,a().createElement("div",o({},c,{id:t,className:"gn-spinner".concat(i),style:r}),a().createElement("div",null)),l)}i.propTypes={id:c().string,className:c().string,style:c().object},i.defaultProps={};const u=i},51605:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(28261)},60466:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var r=n(67294),a=n.n(r),l=n(22843),c=n(33664),s=n(22222),o=n(5346),i=n(93473),u=n(94745),d=n(99534),m=n(82904),g=n(3828),p=n(43892),E=n(57914),v=n(12530),f=n(32425),y=(0,c.connect)((0,s.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[v.zj.DELETE_RESOURCE])||void 0===n?void 0:n.value},function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t[v.zj.DELETE_RESOURCE])||void 0===n?void 0:n.loading}],(function(e,t){return{resources:e,enabled:!!e,loading:t}})),{onClose:m.Xg.bind(null,v.zj.DELETE_RESOURCE,"value",void 0),onDelete:p.EU.bind(null,v.zj.DELETE_RESOURCE)})((function(e){var t=e.enabled,n=e.resources,r=void 0===n?[]:n,l=e.onClose,c=void 0===l?function(){}:l,s=e.onDelete,i=void 0===s?function(){}:s,m=e.redirectTo,g=void 0===m?"/":m,p=e.loading;return a().createElement(d.Z,null,a().createElement(u.Z,{title:a().createElement(o.Z,{msgId:"gnviewer.deleteResourceTitle",msgParams:{count:r.length}}),show:t,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:p?[]:[{text:a().createElement(o.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:r.length}}),onClick:function(){return c()}},{text:a().createElement(o.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:r.length}}),bsStyle:"danger",onClick:function(){return i(r,g)}}],onClose:p?null:function(){return c()}},a().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},r.map((function(e,t){return a().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+t},a().createElement(E.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),p&&a().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},a().createElement(f.Z,{size:70}))))})),h=(0,c.connect)((0,s.P1)([g.yK],(function(e){return{resource:e}})),{onClick:m.Xg.bind(null,v.zj.DELETE_RESOURCE,"value")})((function(e){var t=e.onClick,n=e.size,r=e.resource;return a().createElement(i.Z,{variant:"danger",size:n,onClick:function(){t([r])}},a().createElement(o.Z,{msgId:"gnhome.delete"}))}));const Z=(0,l.rx)("DeleteResource",{component:y,containers:{ActionNavbar:{name:"DeleteResource",Component:h}},epics:{},reducers:{}})}}]);