(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{503:function(t,e,n){"use strict";n.r(e);n(34),n(79),n(113),n(33),n(78),n(300),n(66),n(11),n(54),n(60),n(37),n(19),n(44),n(61),n(38);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={props:{item:Object},methods:{getTransmission:function(){var t,e=r(this.item.collections);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.name&&n.name.includes("TRANSMISSION"))return n.slug.replace(/-/g,"  ")}}catch(t){e.e(t)}finally{e.f()}},getEngine:function(){var t,e=r(this.item.collections);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.name&&n.name.includes("ENGINE VOLUME"))return this.cleanName(n.name,"ENGINE VOLUME")}}catch(t){e.e(t)}finally{e.f()}},getFuel:function(){var t,e=r(this.item.collections);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.name&&n.name.includes("FUEL TYPE"))return this.cleanName(n.name,"FUEL TYPE")}}catch(t){e.e(t)}finally{e.f()}},cleanName:function(t,e){return t.replace(/[^\w\s]/g,"").replace(e,"").trim()}}},c=n(17),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex justify-center items-center py-8"},[e("nuxt-link",{attrs:{to:"/auto-info/".concat(t.item.slug)}},[e("nuxt-img",{staticClass:"h-40",attrs:{src:t.item.images[0]?t.item.images[0].src:t.$store.state.defaults.logo,alt:"car_image"}})],1)],1),t._v(" "),e("div",{staticClass:"bg px-2 py-8"},[e("div",{staticClass:"flex flex-col justify-center items-center pb-12 px-3"},[e("div",{staticClass:"text-center font-semibold"},[t._v("\n                "+t._s(t.item.seo.title)+"\n            ")]),t._v(" "),e("div",{staticClass:"flex flex-row justify-around items-start w-full pt-8 pb-4"},[e("div",{staticClass:"flex flex-col justify-center items-center p-2 w-2/6"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"25",height:"30"}},[e("path",{attrs:{fill:"#000000",d:"M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z"}})]),t._v(" "),e("span",{staticClass:"text-xs font-light pt-2"},[t._v("\n                        "+t._s(t.getEngine())+"\n                    ")])]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center items-center p-2 w-2/6"},[e("svg",{staticClass:"lucide lucide-fuel",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("line",{attrs:{x1:"3",x2:"15",y1:"22",y2:"22"}}),t._v(" "),e("line",{attrs:{x1:"4",x2:"14",y1:"9",y2:"9"}}),t._v(" "),e("path",{attrs:{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}}),t._v(" "),e("path",{attrs:{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}})]),t._v(" "),e("span",{staticClass:"text-xs font-light pt-2"},[t._v("\n                        "+t._s(t.getFuel())+"\n                    ")])]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center items-center p-2 w-2/6"},[e("svg",{staticClass:"lucide lucide-life-buoy",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),t._v(" "),e("path",{attrs:{d:"m4.93 4.93 4.24 4.24"}}),t._v(" "),e("path",{attrs:{d:"m14.83 9.17 4.24-4.24"}}),t._v(" "),e("path",{attrs:{d:"m14.83 14.83 4.24 4.24"}}),t._v(" "),e("path",{attrs:{d:"m9.17 14.83-4.24 4.24"}}),t._v(" "),e("circle",{attrs:{cx:"12",cy:"12",r:"4"}})]),t._v(" "),e("span",{staticClass:"text-xs text-center font-light pt-2 text-black"},[t._v("\n                        Automatic Transmission\n                    ")])])])]),t._v(" "),e("div",{staticClass:"px-6 pb-10"},[e("div",{staticClass:"flex flex-wrap justify-start items-center"},t._l(t.item.bookingProps.extraInfo,(function(n){return t.item.bookingProps.extraInfo.length>0?e("div",{key:n,staticClass:"flex flex-row font-light py-1 w-2/4 text-xs"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"12",height:"12",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M5.268,10.732c-0.976-0.976-2.559-0.976-3.536,0s-0.976,2.559,0,3.536l4.645,4.645\tc1.449,1.449,3.797,1.449,5.246,0L12.536,18L5.268,10.732z",opacity:".35"}}),t._v(" "),e("path",{attrs:{d:"M22.268,4.732c-0.976-0.976-2.559-0.976-3.536,0L9,14.464L12.536,18l9.732-9.732C23.244,7.291,23.244,5.708,22.268,4.732z"}})]),t._v(" "),e("div",{staticClass:"pl-1 text-center"},[t._v("\n                        "+t._s(n.name)+"\n                    ")])]):t._e()})),0)]),t._v(" "),e("div",{staticClass:"flex flex-row justify-around items-center text-red-600 pb-2"},[t._v("\n            "+t._s(this.$store.state.currency.symbol)+" "+t._s(t.item.price.salePrice)+"/ "+t._s(t.item.bookingProps.priceBy)+"\n            "),e("div",[e("nuxt-link",{attrs:{to:"/auto-info/".concat(t.item.slug),title:t.item.name,"aria-label":t.item.name}},[e("button",{staticClass:"w-20 py-2 text-sm rounded text-black border-2 border-black focus:outline-none hover:bg-red-600 hover:border-opacity-0 hover:text-white",attrs:{type:"submit"}},[t._v("\n                        "+t._s(this.$settings.sections.product.rent_it)+"\n                    ")])])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);