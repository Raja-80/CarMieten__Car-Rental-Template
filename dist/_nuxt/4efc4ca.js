(window.webpackJsonp=window.webpackJsonp||[]).push([[8,16],{465:function(t,e,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("96addb9c",content,!0,{sourceMap:!1})},468:function(t,e,n){"use strict";n(465)},469:function(t,e,n){var r=n(31)((function(i){return i[1]}));r.push([t.i,".bg{background-color:#f7f7f7}",""]),r.locals={},t.exports=r},470:function(t,e,n){"use strict";n.r(e);n(145),n(112);var r={props:{title:{type:String,default:""},list:{type:Array,default:[]},size:{type:Number,default:100},component:{type:String,default:null},itemClass:{type:String,default:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4"},defaultWidth:{type:Number,default:200},mobile_size:{type:Number,default:100,require:!1}},data:function(){return{loading:!0,items:this.list,width:this.defaultWidth,parentWidth:1e3}},watch:{parentWidth:function(t){t<640&&(this.width=this.mobile_size),t>=640&&t<768&&(this.width=50),t>=768&&t<1024&&(this.width=33.33),t>=1024&&(this.width=25)}},methods:{move:function(t){var e=this,n="pop",r="unshift",o=document.querySelector(".carousel-item")?document.querySelector(".carousel-item").offsetWidth:360;1==t&&(n="shift",r="push",o="-".concat(o)),document.querySelector(".carousel").style.transform="translateX(".concat(o,"px)"),document.querySelector(".carousel").style.transition="500ms",setTimeout((function(){document.querySelector(".carousel").style.transform="translateX(0px)",document.querySelector(".carousel").style.transition="none";var t=e.items[n]();e.items[r](t)}),500)}},mounted:function(){var t=this;this.$nextTick((function(){var element=document.querySelector(".carousel-container");element&&(t.parentWidth=element.clientWidth,window.onresize=function(){t.parentWidth=element.clientWidth})}))}},o=(n(468),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"overflow-hidden carousel-container",attrs:{dir:"ltr"}},[e("div",{staticClass:"flex carousel",style:"width: ".concat(t.items.length*t.width,"%")},t._l(t.items,(function(n,i){return e("div",{key:i,staticClass:"carousel-item p-2",class:t.itemClass},[e(t.component,{tag:"component",attrs:{item:n}})],1)})),0)]),t._v(" "),e("div",{staticClass:"m-5 flex justify-between items-center"},[e("button",{staticClass:"bg p-3 rounded-full mx-2 hover:bg-gray-200",attrs:{id:"prv",title:"Previous"},on:{click:function(e){return t.move(-1)}}},[e("svg",{staticClass:"w-5 h-5 translate",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[e("path",{attrs:{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}})])]),t._v(" "),e("button",{staticClass:"bg p-3 rounded-full mx-2 hover:bg-gray-200",attrs:{id:"next",title:"Next"},on:{click:function(e){return t.move(1)}}},[e("svg",{staticClass:"w-5 h-5 translate",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[e("path",{attrs:{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}})])])])])}),[],!1,null,null,null);e.default=component.exports},501:function(t,e,n){"use strict";n.r(e);n(19),n(44);var r=n(8),o=(n(50),n(33),n(146),{data:function(){return{news_info:this.$settings.sections.news,items:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$storeino.pages.search({type:"POST"});case 2:n=e.sent,data=n.data,t.items=data.results;case 5:case"end":return e.stop()}}),e)})))()}}),l=n(17),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.news_info.show_section?e("div",{staticClass:"container lg:pb-32 pt-32"},[e("div",{staticClass:"flex flex-col justify-center items-center pb-28 px-5"},[e("h1",{staticClass:"text-black font-semibold text-3xl text-center"},[t._v("\n\n            "+t._s(t.news_info.title)+"\n\n        ")]),t._v(" "),e("p",{staticClass:"text-gray-400 font-normal italic font-serif text-lg pb-8"},[t._v("\n\n            "+t._s(t.news_info.under_title)+"\n\n        ")]),t._v(" "),e("p",{staticClass:"text-black text-center text-sm font-light leading-loose lg:px-80 px-8"},[t._v("\n\n            "+t._s(t.news_info.description)+"\n\n        ")])]),t._v(" "),t.items.length>0?e("div",[e("si-carousel",{attrs:{component:"si-blog",list:t.items}})],1):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SiCarousel:n(470).default})}}]);