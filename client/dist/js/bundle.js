!function(e){function t(o){if(n[o])return n[o].exports
var r=n[o]={exports:{},id:o,loaded:!1}
return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={}
return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict"
n(1),n(13)},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(2),i=n(3),u=o(i),c=n(4),a=o(c),f=n(5),l=o(f)
document.addEventListener("DOMContentLoaded",function(){var e=u["default"].getSection("SilverStripe\\SiteConfig\\SiteConfigLeftAndMain")
a["default"].add({path:e.url,component:l["default"],indexRoute:{onEnter:function t(n,o){var r=[e.url,"show",0].join("/")
o(r)}},childRoutes:[{path:"show/:folderId",component:l["default"]}]})})},function(e,t){e.exports=Redux},function(e,t){e.exports=Config},function(e,t){e.exports=ReactRouteRegister},function(e,t,n){"use strict"


function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")


return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=e.config.sections["SilverStripe\\SiteConfig\\SiteConfigLeftAndMain"]


return{sectionConfig:t,securityId:e.config.SecurityID}}function a(){return{}}Object.defineProperty(t,"__esModule",{value:!0})
var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(6),s=o(l),p=n(7),d=n(2),m=n(8),b=n(9),y=o(b),v=n(10),h=o(v),x=n(11),g=o(x),_=n(12),R=o(_),S=function(e){
function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"render",value:function n(){var e={schemaUrl:this.props.sectionConfig.form.EditForm.schemaUrl
},t=[{text:"SiteConfig",href:"#"}]
return s["default"].createElement("div",{className:"cms-content__inner no-preview"},s["default"].createElement("div",{className:"cms-content__left collapse in"},s["default"].createElement(g["default"],null,s["default"].createElement(R["default"],{
multiline:!0,crumbs:t})),s["default"].createElement("div",{className:"panel panel--padded panel--scrollable panel--single-toolbar"},s["default"].createElement(h["default"],e))))}}]),t}(y["default"])
S.propTypes={sectionConfig:s["default"].PropTypes.object.isRequired,securityId:s["default"].PropTypes.string.isRequired},t["default"]=(0,m.withRouter)((0,p.connect)(c,a)(S))},function(e,t){e.exports=React

},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=ReactRouter},function(e,t){e.exports=SilverStripeComponent},function(e,t){e.exports=FormBuilder},function(e,t){e.exports=Toolbar},function(e,t){
e.exports=Breadcrumb},function(e,t){}])

//# sourceMappingURL=bundle.js.map