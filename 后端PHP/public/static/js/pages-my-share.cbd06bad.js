(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-share"],{1504:function(t,n,e){var i=e("24fb"),a=e("1de5"),r=e("b1a7"),o=e("4ea5");n=i(!1);var s=a(r),c=a(o);n.push([t.i,"@font-face{font-family:SourceHanSansCN-Regular;font-weight:400;font-style:normal;src:url("+s+') format("truetype")}.share-wrap[data-v-01a8bd92]{height:%?1200?%}.share-box[data-v-01a8bd92]{background:url('+c+") no-repeat;background-size:100% 100%;width:%?600?%;height:%?800?%;color:#fff}.share-box uni-view[data-v-01a8bd92]{-webkit-flex:1;flex:1;font-size:%?22?%}.share-box .uni-title__box[data-v-01a8bd92]{margin-top:%?30?%}.share-box uni-view.share-text1[data-v-01a8bd92]{height:%?180?%;line-height:%?180?%;font-size:%?100?%;color:#7b62e9;font-family:SourceHanSansCN-Regular}.copy[data-v-01a8bd92]{width:%?160?%;height:%?60?%;line-height:%?60?%;font-size:%?28?%;color:#fff;border-radius:%?8?%;background:-moz-linear-gradient(left,#ae3deb 0,#7c4cf0 100%);background:-webkit-gradient(linear,top left,top right,color-stop(0,#ae3deb),color-stop(100%,#7c4cf0));background:-webkit-linear-gradient(left,#ae3deb,#7c4cf0);background:-o-linear-gradient(left,#ae3deb 0,#7c4cf0 100%);background:-ms-linear-gradient(left,#ae3deb 0,#7c4cf0 100%);background:linear-gradient(90deg,#ae3deb 0,#7c4cf0)}.share-box uni-view.share-text3[data-v-01a8bd92]{line-height:%?50?%}.ewm-box[data-v-01a8bd92]{margin:%?30?% auto %?10?% auto}.ewm-box uni-image[data-v-01a8bd92]{width:%?180?%;height:%?180?%}",""]),t.exports=n},"2f2a":function(t,n,e){"use strict";e.r(n);var i=e("8ce3"),a=e("cd25");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("959b");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6510ba0e",null,!1,i["a"],o);n["default"]=c.exports},"43dc":function(t,n,e){"use strict";e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted:function(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};n.default=i},"4ea5":function(t,n,e){t.exports=e.p+"static/img/share-bg.7b0f4b9e.png"},5082:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uniTitle:e("2f2a").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"share-wrap uni-flex uni-row center"},[e("v-uni-view",{staticClass:"share-box"},[e("uni-title",{attrs:{type:"h3",title:t.i18n.shareCode,align:"center",color:"#fff"}}),e("v-uni-view",{staticClass:"uni-center share-text1"},[e("v-uni-text",[t._v(t._s(t.inviteCode))])],1),e("v-uni-view",{staticClass:"uni-center share-text2"},[e("v-uni-button",{staticClass:"mini-btn copy",attrs:{type:"default",size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copy(t.shareUrl)}}},[t._v(t._s(t.i18n.cope))])],1),e("v-uni-view",{staticClass:"uni-center share-text3"},[e("v-uni-text",[t._v(t._s(t.i18n.shareMore))])],1),e("v-uni-view",{staticClass:"uni-center share-text3"}),e("v-uni-view",{staticClass:"uni-flex uni-row center ewm-box"},[e("v-uni-image",{attrs:{src:t.Qrcode,mode:"aspectFit"}})],1),e("v-uni-view",{staticClass:"uni-center share-text3"},[e("v-uni-text",[t._v(t._s(t.i18n.scanCodeL))])],1)],1)],1)},r=[]},"6c66":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .uni-title {\n\n} */.uni-title__box[data-v-6510ba0e]{\ndisplay:flex;\nflex-direction:column;align-items:flex-start;justify-content:center;padding:8px 0;flex:1}.uni-title__base[data-v-6510ba0e]{font-size:15px;color:#333;font-weight:500}.uni-h1[data-v-6510ba0e]{font-size:20px;color:#333;font-weight:700}.uni-h2[data-v-6510ba0e]{font-size:18px;color:#333;font-weight:700}.uni-h3[data-v-6510ba0e]{font-size:16px;color:#333;font-weight:700\n\t/* font-weight: 400; */}.uni-h4[data-v-6510ba0e]{font-size:14px;color:#333;font-weight:700\n\t/* font-weight: 300; */}.uni-h5[data-v-6510ba0e]{font-size:12px;color:#333;font-weight:700\n\t/* font-weight: 200; */}",""]),t.exports=n},7663:function(t,n,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("8d70")),r={data:function(){return{shareUrl:"",shareNum:10,inviteCode:"XS3S25",Qrcode:"../../static/share/ewm.png"}},computed:{i18n:function(){return this.$t("myShare")}},onLoad:function(){this._loadData()},methods:{_loadData:function(){var n=this;this.$util.setTitle(this.$i18n.messages[this.$i18n.locale],this.i18n.title),this.$fly.post("User/inviteInfo").then((function(t){if(200==t.code){var e=t.data;n.Qrcode=e.qrcode,n.shareUrl=e.copy_url,n.inviteCode=e.invite_code}})).catch((function(n){t("log",n," at pages/my/share.vue:71")}))},copy:function(t){(0,a.default)({content:t,success:function(t){uni.showToast({title:t,icon:"none"})},error:function(t){uni.showToast({title:t,icon:"none",duration:3e3})}})}}};n.default=r}).call(this,e("0de9")["log"])},"8b9c":function(t,n,e){"use strict";e.r(n);var i=e("7663"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},"8ce3":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-title__box",style:{"align-items":t.textAlign}},[e("v-uni-text",{staticClass:"uni-title__base",class:["uni-"+t.type],style:{color:t.color}},[t._v(t._s(t.title))])],1)},r=[]},"8d70":function(t,n,e){"use strict";function i(t){var n=t.content,e=t.success,i=t.error;if(!n)return i("复制的内容不能为空 !");n="string"===typeof n?n:n.toString(),document.queryCommandSupported("copy")||i("浏览器不支持");var a=document.createElement("textarea");a.value=n,a.readOnly="readOnly",document.body.appendChild(a),a.select(),a.setSelectionRange(0,n.length);var r=document.execCommand("copy");r?e("复制成功~"):i("复制失败，请检查h5中调用该方法的方式，是不是用户点击的方式调用的，如果不是请改为用户点击的方式触发该方法，因为h5中安全性，不能js直接调用！"),a.remove()}e("d3b7"),e("25f0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},"959b":function(t,n,e){"use strict";var i=e("cd62"),a=e.n(i);a.a},b1a7:function(t,n,e){t.exports=e.p+"static/fonts/SourceHanSansCN-Regular.1335002f.ttf"},cd25:function(t,n,e){"use strict";e.r(n);var i=e("43dc"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},cd62:function(t,n,e){var i=e("6c66");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("a3260f96",i,!0,{sourceMap:!1,shadowMode:!1})},dc7f:function(t,n,e){var i=e("1504");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("d2037a74",i,!0,{sourceMap:!1,shadowMode:!1})},f351:function(t,n,e){"use strict";var i=e("dc7f"),a=e.n(i);a.a},f995:function(t,n,e){"use strict";e.r(n);var i=e("5082"),a=e("8b9c");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("f351");var o,s=e("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"01a8bd92",null,!1,i["a"],o);n["default"]=c.exports}}]);