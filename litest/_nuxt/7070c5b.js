(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8],{428:function(t,e,r){var content=r(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("0c07341e",content,!0,{sourceMap:!1})},431:function(t,e,r){"use strict";r(428)},432:function(t,e,r){var n=r(37)(!1);n.push([t.i,'.global-article>*[data-v-2cb08e95] :not(pre){max-width:760px}.global-article h1[data-v-2cb08e95]{margin-bottom:3rem;font-size:2rem;font-weight:400;line-height:1}.global-article h2[data-v-2cb08e95]{margin:2.5rem 0 1rem;font-size:1.5rem;font-weight:500;line-height:1}.global-article h3[data-v-2cb08e95]{margin:2rem 0 .5rem;font-size:1.2rem;font-weight:500;line-height:1}.global-article h4[data-v-2cb08e95]{margin:1rem 0 .5rem;font-size:1rem;font-weight:500;line-height:1}.global-article ul[data-v-2cb08e95]{list-style:none}.global-article>ul[data-v-2cb08e95]{padding-left:0}.global-article li[data-v-2cb08e95]{position:relative;padding-left:2rem;margin-bottom:.5rem;font-size:.9rem;line-height:1.2rem}.global-article li[data-v-2cb08e95]:after{position:absolute;top:calc(.7rem - 1px);left:0;display:block;width:1rem;height:1px;content:"";background-color:#000}.global-article code[data-v-2cb08e95]{margin:1rem 0}.global-article pre[data-v-2cb08e95]{-moz-tab-size:2;-o-tab-size:2;tab-size:2}.intro[data-v-2cb08e95]{font-size:1rem;font-style:italic;font-weight:300;max-width:360px;margin-bottom:4rem;color:#191e27}.global-wrapper[data-v-2cb08e95]{display:flex;flex-direction:column;align-items:center;width:100%;padding-top:1rem;background-color:#fff}.global-wrapper__content[data-v-2cb08e95]{width:960px}.breadcrumbs[data-v-2cb08e95]{margin-bottom:3rem;font-size:.7rem;text-transform:uppercase}.breadcrumbs__item[data-v-2cb08e95]{font-weight:600;color:#191e27;transition:color .3s}.breadcrumbs__item[data-v-2cb08e95]:hover{color:#65696d}.breadcrumbs__divider[data-v-2cb08e95]{margin:0 8px}.breadcrumbs__divider svg[data-v-2cb08e95]{width:34px}.breadcrumbs__last[data-v-2cb08e95]{font-weight:400}.mask svg[data-v-2cb08e95]{width:80px;stroke:#191e27}a.nav__link.nuxt-link-active[data-v-2cb08e95]:before{background:linear-gradient(90deg,#191e27,#191e27)}.nav[data-v-2cb08e95]{display:flex;align-items:center;margin-bottom:3rem}.nav__link[data-v-2cb08e95]{font-size:.8rem;font-weight:400;position:relative;margin-left:2rem;color:#191e27;text-transform:uppercase}.nav__link[data-v-2cb08e95],.nav__link[data-v-2cb08e95]:active,.nav__link[data-v-2cb08e95]:hover,.nav__link[data-v-2cb08e95]:visited{text-decoration:none;outline:none}.nav__link[data-v-2cb08e95]:before{position:absolute;bottom:0;width:100%;height:1px;content:"";background:linear-gradient(90deg,#191e27 20%,transparent 0,transparent)}.nav__link[data-v-2cb08e95]:hover{opacity:.8}.nav__link--logo[data-v-2cb08e95]{margin-right:auto;margin-left:0;border-bottom:none!important}.footer[data-v-2cb08e95]{width:960px;height:200px;margin-top:8rem;border-top:4px double #191e27}.footer-navigation__item[data-v-2cb08e95]{display:block}',""]),t.exports=n},433:function(t,e,r){"use strict";r.r(e);r(424);var n=r(112),o=r(113),l=r(426),c=r(427),d=r(425),f=r(20),v=(r(50),r(51),r(165),r(114),r(166),r(40),r(1)),h=r(423);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},y=function(t){Object(l.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).breadcrumbsDictionary={theory:"Теория",code:"Код",art:"Арт"},t}return Object(o.a)(r,[{key:"breadcrumbs",get:function(){var t=this;return"/"===this.$route.path?null:this.$route.path.split("/").map((function(path,e,r){return{link:path?r[e-1]+"/"+path:"/",title:path?t.breadcrumbsDictionary[path]||path:"Главная",isLast:e===r.length-1}}))}}]),r}(v.default),x=y=_([Object(h.default)({head:function(){return{title:"LITEST",titleTemplate:(path=this.$route.path,t=path.split("/"),"/"===path?"%s":t.splice(1).join("/")+" | %s"),meta:[{hid:"description",name:"description",content:"Home page description"}]};var path,t},components:{}})],y),w=(r(431),r(39)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"global-wrapper"},[r("div",{staticClass:"global-wrapper__content"},[r("nav",{staticClass:"nav"},[r("NuxtLink",{staticClass:"nav__link nav__link--logo",attrs:{to:"/"}},[r("div",{staticClass:"mask"},[r("svg",{attrs:{width:"83",height:"102",viewBox:"0 0 83 102",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M55.0316 22.7083L42.0404 22.7626L29.0495 22.8169L36.9043 30.2873L44.7595 37.7578L57.7507 37.7035L70.7416 37.6488L62.8867 30.1787L55.0316 22.7083Z"}}),t._v(" "),r("path",{attrs:{d:"M65.4714 38.314L82 56.3037L70.2796 59.0291L65.4714 38.314Z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M61.8755 75.9503V82.0158V88.0813H70.1055H78.3356V82.0158V75.9503H70.1055H61.8755Z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M69.2998 70.5351V73.1092V75.6837H72.5416H75.7831V73.1092V70.5351H72.5416H69.2998Z"}}),t._v(" "),r("path",{attrs:{d:"M49.0824 16.4312L69.4808 16.4416L59.7788 25.7594L49.0824 16.4312Z"}}),t._v(" "),r("path",{attrs:{d:"M5.45298 31.4542L54.8317 1L55.0708 12.1494L5.45298 31.4542Z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M61.8833 68.1371V71.9104V75.6837H65.4584H69.0338V71.9104V68.1371H65.4584H61.8833Z"}}),t._v(" "),r("path",{attrs:{d:"M66.5813 67.2918L77.7365 63.5036L77.7316 67.2973L66.5813 67.2918Z"}}),t._v(" "),r("path",{attrs:{d:"M66.5813 67.3025L78.1594 71.091L78.1539 67.2973L66.5813 67.3025Z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M73.6771 58.4613L70.3865 58.4805L67.0957 58.4997L69.0855 61.1441L71.0752 63.7885L74.3658 63.7693L77.6566 63.7501L75.6668 61.1057L73.6771 58.4613Z"}}),t._v(" "),r("path",{attrs:{d:"M55.4948 45.3764L62.0924 40.9125L62.0895 45.3826L55.4948 45.3764Z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M52.4135 38.169V38.9269V39.6851H58.3812H64.3492V38.9269V38.169H58.3812H52.4135Z"}}),t._v(" "),r("path",{attrs:{d:"M41.3741 44.1591L72.8044 48.8356L63.1843 61.2887L41.3741 44.1591Z"}}),t._v(" "),r("path",{attrs:{d:"M29.6523 61.9228L26.0035 24.0069L32.6349 27.0892L29.6523 61.9228V61.9228Z"}}),t._v(" "),r("path",{attrs:{d:"M35.4528 92.1897L12.6198 31.8376L22.3706 32.6839L35.4528 92.1897V92.1897Z"}}),t._v(" "),r("path",{attrs:{d:"M36.6063 100.76L3.99997 45.0857L13.7546 44.2862L36.6063 100.76V100.76Z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M61.4092 60.8996L61.3309 72.4482L61.2526 83.9969L50.5136 77.0138L39.7744 70.0311L39.8527 58.4825L39.9309 46.9338L50.6699 53.9165L61.4092 60.8996Z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M67.0005 38.169V38.9269V39.6851H69.1098H71.2191V38.9269V38.169H69.1098H67.0005Z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M39.7059 57.4609L34.8977 57.4414L30.0897 57.4222L32.4853 65.828L34.8811 74.2342L37.2935 65.8475L39.7059 57.4609Z"}})])])]),r("NuxtLink",{staticClass:"nav__link",attrs:{to:"/theory"}},[t._v("теория")]),r("NuxtLink",{staticClass:"nav__link",attrs:{to:"/code"}},[t._v("код")]),r("NuxtLink",{staticClass:"nav__link",attrs:{to:"/art"}},[t._v("арт")])],1),r("div",{staticClass:"breadcrumbs"},[t._l(t.breadcrumbs,(function(e){return t.breadcrumbs?[e.isLast?[r("span",{staticClass:"breadcrumbs__last"},[t._v(t._s(e.title))])]:[r("NuxtLink",{staticClass:"breadcrumbs__item",attrs:{to:e.link}},[t._v(t._s(e.title))]),r("span",{staticClass:"breadcrumbs__divider"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 62 13"}},[r("path",{attrs:{d:"M.12,5.77H59.45L55.27,0H57l4.86,6.47L57,13H55.27l4.18-5.75H.12Z"}})])])]]:t._e()}))],2),r("div",{staticClass:"content"},[t._t("default")],2),r("footer",{staticClass:"footer"},[r("div",{staticClass:"footer-navigation"},[r("NuxtLink",{staticClass:"footer-navigation__item",attrs:{to:"/theory"}},[t._v("теория")]),r("NuxtLink",{staticClass:"footer-navigation__item",attrs:{to:"/code"}},[t._v("код")]),r("NuxtLink",{staticClass:"footer-navigation__item",attrs:{to:"/art"}},[t._v("арт")])],1)])])])}),[],!1,null,"2cb08e95",null);e.default=component.exports},434:function(t,e,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("086a4ece",content,!0,{sourceMap:!1})},435:function(t,e,r){"use strict";r(434)},436:function(t,e,r){var n=r(37)(!1);n.push([t.i,".expand-enter-active,.expand-leave-active{overflow:hidden;transition:height .3s ease-in-out}.expand-enter,.expand-leave-to{height:0}",""]),t.exports=n},437:function(t,e,r){var content=r(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("cfb58874",content,!0,{sourceMap:!1})},438:function(t,e,r){"use strict";r.r(e);r(424);var n=r(112),o=r(113),l=r(426),c=r(427),d=r(425),f=r(20),v=(r(50),r(1)),h=r(423);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},y=function(t){Object(l.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"onEnter",value:function(element){var t=getComputedStyle(element).width;element.style.width=t,element.style.position="absolute",element.style.visibility="hidden",element.style.height="auto";var e=getComputedStyle(element).height;element.style.position=null,element.style.visibility=null,element.style.width=null,element.style.height=0,window.requestAnimationFrame((function(){element.style.height=e}))}},{key:"onLeave",value:function(element){var t=getComputedStyle(element).height;element.style.height=t,window.requestAnimationFrame((function(){element.style.height=0}))}}]),r}(v.default),x=y=_([Object(h.default)({})],y),w=(r(435),r(39)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:"expand"},on:{enter:t.onEnter,leave:t.onLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},440:function(t,e,r){"use strict";r(437)},441:function(t,e,r){var n=r(37)(!1);n.push([t.i,'.global-article>*[data-v-ee71e478] :not(pre){max-width:760px}.global-article h1[data-v-ee71e478]{margin-bottom:3rem;font-size:2rem;font-weight:400;line-height:1}.global-article h2[data-v-ee71e478]{margin:2.5rem 0 1rem;font-size:1.5rem;font-weight:500;line-height:1}.global-article h3[data-v-ee71e478]{margin:2rem 0 .5rem;font-size:1.2rem;font-weight:500;line-height:1}.global-article h4[data-v-ee71e478]{margin:1rem 0 .5rem;font-size:1rem;font-weight:500;line-height:1}.global-article ul[data-v-ee71e478]{list-style:none}.global-article>ul[data-v-ee71e478]{padding-left:0}.global-article li[data-v-ee71e478]{position:relative;padding-left:2rem;margin-bottom:.5rem;font-size:.9rem;line-height:1.2rem}.global-article li[data-v-ee71e478]:after{position:absolute;top:calc(.7rem - 1px);left:0;display:block;width:1rem;height:1px;content:"";background-color:#000}.global-article code[data-v-ee71e478]{margin:1rem 0}.global-article pre[data-v-ee71e478]{-moz-tab-size:2;-o-tab-size:2;tab-size:2}.intro[data-v-ee71e478]{font-size:1rem;font-style:italic;font-weight:300;max-width:360px;margin-bottom:4rem;color:#191e27}.toc[data-v-ee71e478]{padding:.5rem 0;margin:.5rem 0 3rem;border-top:2px solid #191e27}.toc__header[data-v-ee71e478]{display:flex;align-items:center;padding:.5rem 0}.toc__head[data-v-ee71e478]{font-size:1.5rem;font-weight:400;cursor:pointer}.toc__expand-icon[data-v-ee71e478]{position:relative;width:2rem;height:2rem;margin-left:auto;cursor:pointer}.toc__expand-icon[data-v-ee71e478]:after,.toc__expand-icon[data-v-ee71e478]:before{position:absolute;top:calc(50% - 1px);right:0;display:block;width:75%;height:3px;content:"";background-color:#191e27;transition:transform .3s}.toc__expand-icon[data-v-ee71e478]:after{transform:rotate(90deg)}.toc__expand-icon--expanded[data-v-ee71e478]:before{transform:rotate(45deg)}.toc__expand-icon--expanded[data-v-ee71e478]:after{transform:rotate(135deg)}.toc__content[data-v-ee71e478]{display:flex;flex-direction:column;font-size:1rem;font-weight:400;color:#191e27;list-style:none;background-color:#f8f8f8;border-radius:4px}.toc__item[data-v-ee71e478]{position:relative;padding-top:.25rem;padding-bottom:.25rem;padding-left:2rem;margin:0 .5rem}.toc__item[data-v-ee71e478]:first-child{margin-top:.5rem}.toc__item[data-v-ee71e478]:last-child{margin-bottom:.5rem}.toc__item[data-v-ee71e478]:after{position:absolute;top:50%;left:0;display:block;width:1rem;height:1px;content:"";background-color:#191e27}.toc__link[data-v-ee71e478]{font-size:1rem;font-weight:300;color:#191e27}.toc__link[data-v-ee71e478]:hover{color:#65696d}',""]),t.exports=n},444:function(t,e,r){"use strict";r.r(e);r(424);var n=r(112),o=r(426),l=r(427),c=r(425),d=r(20),f=(r(50),r(1)),v=r(423),h=r(439),m=r(438);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){Object(o.a)(r,t);var e=_(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).isShown=!1,t}return r}(f.default);y([Object(h.Prop)({type:String,required:!0})],x.prototype,"header",void 0),y([Object(h.Prop)({type:Array,required:!0})],x.prototype,"links",void 0);var w=x=y([Object(v.default)({components:{Expander:m.default}})],x),L=(r(440),r(39)),component=Object(L.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toc"},[r("div",{staticClass:"toc__header"},[r("div",{staticClass:"toc__head",on:{click:function(e){t.isShown=!t.isShown}}},[t._v(" "+t._s(t.header))]),r("div",{staticClass:"toc__expand-icon",class:{"toc__expand-icon--expanded":t.isShown},on:{click:function(e){t.isShown=!t.isShown}}})]),r("Expander",[r("ul",{directives:[{name:"show",rawName:"v-show",value:t.isShown,expression:"isShown"}],staticClass:"toc__content"},t._l(t.links,(function(link){return r("li",{staticClass:"toc__item"},[r("NuxtLink",{key:link.href,staticClass:"toc__link",attrs:{to:link.href}},[t._v(t._s(link.text))])],1)})),0)])],1)}),[],!1,null,"ee71e478",null);e.default=component.exports},451:function(t,e,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("7d287a86",content,!0,{sourceMap:!1})},472:function(t,e,r){"use strict";r(451)},473:function(t,e,r){var n=r(37)(!1);n.push([t.i,'.global-article>*[data-v-47cda980] :not(pre){max-width:760px}.global-article h1[data-v-47cda980]{margin-bottom:3rem;font-size:2rem;font-weight:400;line-height:1}.global-article h2[data-v-47cda980]{margin:2.5rem 0 1rem;font-size:1.5rem;font-weight:500;line-height:1}.global-article h3[data-v-47cda980]{margin:2rem 0 .5rem;font-size:1.2rem;font-weight:500;line-height:1}.global-article h4[data-v-47cda980]{margin:1rem 0 .5rem;font-size:1rem;font-weight:500;line-height:1}.global-article ul[data-v-47cda980]{list-style:none}.global-article>ul[data-v-47cda980]{padding-left:0}.global-article li[data-v-47cda980]{position:relative;padding-left:2rem;margin-bottom:.5rem;font-size:.9rem;line-height:1.2rem}.global-article li[data-v-47cda980]:after{position:absolute;top:calc(.7rem - 1px);left:0;display:block;width:1rem;height:1px;content:"";background-color:#000}.global-article code[data-v-47cda980]{margin:1rem 0}.global-article pre[data-v-47cda980]{-moz-tab-size:2;-o-tab-size:2;tab-size:2}.intro[data-v-47cda980]{font-size:1rem;font-style:italic;font-weight:300;max-width:360px;margin-bottom:4rem;color:#191e27}',""]),t.exports=n},507:function(t,e,r){"use strict";r.r(e);r(424);var n=r(112),o=r(426),l=r(427),c=r(425),d=r(20),f=(r(50),r(1)),v=r(423),h=r(433),m=r(444);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){Object(o.a)(r,t);var e=_(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).tocData=[{header:"Анимация",links:[{href:"/code/animation-experience",text:"Анимация: опыт"}]},{header:"Алгоритмы",links:[{href:"/code/algorithm-tree",text:"Дерево"}]}],t}return r}(f.default),w=x=y([Object(v.default)({components:{LitestWarpper:h.default,Toc:m.default}})],x),L=(r(472),r(39)),component=Object(L.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("LitestWarpper",[r("div",{staticClass:"intro"},[t._v("Анимация и алгоритмы")]),t._l(t.tocData,(function(t){return r("Toc",{key:t.header,attrs:{header:t.header,links:t.links}})}))],2)}),[],!1,null,"47cda980",null);e.default=component.exports}}]);