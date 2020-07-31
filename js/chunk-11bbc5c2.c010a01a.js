(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11bbc5c2"],{"159b":function(t,a,e){var i=e("da84"),o=e("fdbc"),n=e("17c2"),s=e("9112");for(var r in o){var c=i[r],d=c&&c.prototype;if(d&&d.forEach!==n)try{s(d,"forEach",n)}catch(l){d.forEach=n}}},"17c2":function(t,a,e){"use strict";var i=e("b727").forEach,o=e("a640"),n=e("ae40"),s=o("forEach"),r=n("forEach");t.exports=s&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1c94":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("h2",{staticClass:"mt-2 mb-5 font-weight-bold text-primary"},[t._v("房間列表")]),e("button",{staticClass:"shoppingTop btn btn-secondary btn-lg text-decoration-none d-flex p-2",attrs:{type:"button","data-toggle":"modal","data-target":"#shoppingModal"}},[e("span",{staticClass:"material-icons"},[t._v("shopping_cart")]),e("sup",{staticClass:"text-danger ml-n1"},[t._v(t._s(t.shopping.data.length))])]),e("ul",{staticClass:"list__products row list-unstyled"},t._l(t.hexAPI.data,(function(a){return e("li",{key:a.id,staticClass:"col-4"},[e("div",{staticClass:"card mb-3"},[e("img",{staticClass:"img-fluid rounded-top",attrs:{src:a.imageUrl[0]}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"font-weight-bold"},[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.content))]),e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"mb-0"},[t._v(" 原價 : "),e("del",[t._v(t._s(a.origin_price))])]),e("p",{staticClass:"mb-0"},[t._v("早鳥 : "+t._s(a.price))])])]),e("div",{staticClass:"card-footer d-flex justify-content-between"},[e("router-link",{staticClass:"btn btn-secondary",attrs:{to:"/product/"+a.id}},[t._v("預覽房型")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.addShopping(a.id)}}},[t._v("預定房間")])],1)])])})),0),e("div",{ref:"shoppingModal",staticClass:"modal fade",attrs:{id:"shoppingModal",tabindex:"-1",role:"dialog","aria-labelledby":"loginModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("table",{staticClass:"table table-borderless"},[t._m(1),e("tbody",t._l(t.shopping.data,(function(a,i){return e("tr",{key:i,staticClass:"border-top"},[e("td",{staticClass:"align-middle"},[t._v(t._s(a.product.title))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(a.product.price))]),e("td",{staticClass:"align-middle text-center"},[t._v(t._s(a.quantity))]),e("td",{staticClass:"align-middle text-center"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.deleteShopping(a.product.id)}}},[t._v("刪除")])])])})),0)]),e("h3",{staticClass:"text-right mr-4"},[t._v("總計金額 : NT."+t._s(t.shopping.moneyTotal))]),e("div",{staticClass:"modal-footer d-flex justify-content-around border-0"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.deleteAll}},[t._v("Clean")]),e("a",{staticClass:"btn btn-info",attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.pay(a)}}},[t._v("結帳")])])])])])]),e("div",{ref:"viewRoomModal",staticClass:"modal fade",attrs:{id:"viewRoomModal",tabindex:"-1",role:"dialog","aria-labelledby":"loginModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header bg-secondary"},[e("h5",{staticClass:"modal-title font-weight-bold"},[t._v(t._s(t.hexAPI.product.title))]),t._m(2)]),e("div",{staticClass:"modal-body"},[t._v(" "+t._s(t.hexAPI.product.content)+" ")])])])])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-secondary"},[e("h5",{staticClass:"modal-title font-weight-bold"},[t._v("購物車列表")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("房間名稱")]),e("th",{staticClass:"text-right"},[t._v("價格")]),e("th",{staticClass:"text-center"},[t._v("間數")]),e("th",{staticClass:"text-center"},[t._v("操作")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],n=(e("99af"),e("4160"),e("159b"),e("1157")),s=e.n(n),r={data:function(){return{hexAPI:{data:[],product:{}},temporary:{product:"",quantity:"1"},shopping:{data:[],moneyTotal:0},isLoading:!1}},methods:{getData:function(){var t=this;t.isLoading=!0,t.axios.get("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/ec/products")).then((function(a){t.hexAPI.data=a.data.data,t.isLoading=!1}))},addShopping:function(t){var a=this;a.isLoading=!0,a.temporary.product=t,a.axios.post("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/ec/shopping"),a.temporary).then((function(){a.getShopping()}))},getShopping:function(){var t=this;t.axios.get("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/ec/shopping")).then((function(a){t.shopping.data=a.data.data;var e=0;t.shopping.data.forEach((function(t){e+=t.product.price})),t.shopping.moneyTotal=e,t.isLoading=!1}))},deleteShopping:function(t){var a=this;a.isLoading=!0,a.shopping.data.forEach((function(e){t===e.product.id&&a.axios.delete("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/ec/shopping/").concat(t)).then((function(){a.getShopping()}))}))},deleteAll:function(){var t=this;t.isLoading=!0,t.axios.delete("".concat("https://course-ec-api.hexschool.io/api/").concat("85a8cd22-1b7d-43af-9b5a-5aa679129559","/ec/shopping/all/product")).then((function(){t.getShopping(),t.isLoading=!1,s()("#shoppingModal").modal("hide")}))},pay:function(){var t=this;0===t.shopping.data.length?(alert("您未挑選房間喔!~"),s()("#shoppingModal").modal("hide")):(t.$router.push("/payment"),s()("#shoppingModal").modal("hide"))}},created:function(){this.getData(),this.getShopping()}},c=r,d=e("2877"),l=Object(d["a"])(c,i,o,!1,null,null,null);a["default"]=l.exports},"1dde":function(t,a,e){var i=e("d039"),o=e("b622"),n=e("2d00"),s=o("species");t.exports=function(t){return n>=51||!i((function(){var a=[],e=a.constructor={};return e[s]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},4160:function(t,a,e){"use strict";var i=e("23e7"),o=e("17c2");i({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"65f0":function(t,a,e){var i=e("861d"),o=e("e8b5"),n=e("b622"),s=n("species");t.exports=function(t,a){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?i(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},8418:function(t,a,e){"use strict";var i=e("c04e"),o=e("9bf2"),n=e("5c6c");t.exports=function(t,a,e){var s=i(a);s in t?o.f(t,s,n(0,e)):t[s]=e}},"99af":function(t,a,e){"use strict";var i=e("23e7"),o=e("d039"),n=e("e8b5"),s=e("861d"),r=e("7b0b"),c=e("50c4"),d=e("8418"),l=e("65f0"),u=e("1dde"),p=e("b622"),f=e("2d00"),h=p("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",v=f>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=u("concat"),C=function(t){if(!s(t))return!1;var a=t[h];return void 0!==a?!!a:n(t)},y=!v||!m;i({target:"Array",proto:!0,forced:y},{concat:function(t){var a,e,i,o,n,s=r(this),u=l(s,0),p=0;for(a=-1,i=arguments.length;a<i;a++)if(n=-1===a?s:arguments[a],C(n)){if(o=c(n.length),p+o>g)throw TypeError(b);for(e=0;e<o;e++,p++)e in n&&d(u,p,n[e])}else{if(p>=g)throw TypeError(b);d(u,p++,n)}return u.length=p,u}})},a640:function(t,a,e){"use strict";var i=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&i((function(){e.call(null,a||function(){throw 1},1)}))}},ae40:function(t,a,e){var i=e("83ab"),o=e("d039"),n=e("5135"),s=Object.defineProperty,r={},c=function(t){throw t};t.exports=function(t,a){if(n(r,t))return r[t];a||(a={});var e=[][t],d=!!n(a,"ACCESSORS")&&a.ACCESSORS,l=n(a,0)?a[0]:c,u=n(a,1)?a[1]:void 0;return r[t]=!!e&&!o((function(){if(d&&!i)return!0;var t={length:-1};d?s(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,l,u)}))}},b727:function(t,a,e){var i=e("0366"),o=e("44ad"),n=e("7b0b"),s=e("50c4"),r=e("65f0"),c=[].push,d=function(t){var a=1==t,e=2==t,d=3==t,l=4==t,u=6==t,p=5==t||u;return function(f,h,g,b){for(var v,m,C=n(f),y=o(C),_=i(h,g,3),x=s(y.length),L=0,S=b||r,w=a?S(f,x):e?S(f,0):void 0;x>L;L++)if((p||L in y)&&(v=y[L],m=_(v,L,C),t))if(a)w[L]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return L;case 2:c.call(w,v)}else if(l)return!1;return u?-1:d||l?l:w}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},e8b5:function(t,a,e){var i=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-11bbc5c2.c010a01a.js.map