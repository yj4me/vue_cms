webpackJsonp([6],{242:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(276),a=e.n(s),i=e(277),r=!1,l=function(n){r||e(274)},u=e(5)(a.a,i.a,!1,l,null,null);u.options.__file="src/components/news/newsList.vue",u.esModule&&Object.keys(u.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=u.exports},274:function(n,t,e){var s=e(275);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(4)("3e5cba86",s,!1)},275:function(n,t,e){(n.exports=e(2)(void 0)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},276:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{datas:[]}},created:function(){var n=this;this.$ajax.get("getnewslist").then(function(t){console.log(t.data.message),n.datas=t.data.message})}}},277:function(n,t,e){"use strict";var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"temp"},[e("nav-bar",{attrs:{title:"新闻列表"}}),n._v(" "),e("ul",{staticClass:"mui-table-view"},n._l(n.datas,function(t){return e("li",{key:t.id,staticClass:"mui-table-view-cell mui-media"},[e("router-link",{attrs:{to:{name:"news.detail",query:{id:t.id}}}},[e("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:t.img_url}}),n._v(" "),e("div",{staticClass:"mui-media-body"},[e("span",{domProps:{textContent:n._s(t.title)}}),n._v(" "),e("p",[e("span",[n._v("点击数："+n._s(t.click))]),n._v(" "),e("span",{staticClass:"mui-pull-right"},[n._v(n._s(t.add_time))])])])])],1)}))],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};t.a=a}});