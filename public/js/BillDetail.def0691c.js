(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BillDetail"],{"0f35":function(t,i,e){"use strict";e("20a2");var s=e("113c"),a=e("16bc"),n=e("eba3"),l=e("42a5"),o=e("3098"),r=e("e791"),d=e("c53f"),h=e("f708"),c=e("b893"),m=e("5d2d");i["a"]={mounted:function(){var t=this;this.setApp(),this.waitInit(function(){t.setWx()})},data:function(){var t={},i=m["a"].load("USER_INFO"),e=i.id;if(r["a"].indexOf(this.$path)>=0){var s=this.$route.query.friend_id;t={title:"这一年，我在叮咚买菜的那些柴米油盐",desc:"2018悄悄过去，关于你的小秘密都在这里，最后有惊喜！",friends_title:"这一年，我在叮咚买菜的那些柴米油盐",img_url:a["j"],link:Object(c["g"])("/bill",{friend_id:e||s})}}else t={title:"叮咚买菜，29分钟生鲜到家~",desc:"0配送费0起送价的买菜神器，新人注册还有38元红包哦~",friends_title:"叮咚买菜，29分钟生鲜到家~",img_url:a["c"],link:Object(c["g"])(this.$route.fullPath)};return{common_share_info:t}},computed:{$path:function(){return this.$route.path}},methods:{setWx:function(){if(h["a"].isWeixin){var t=this.common_share_info;d["a"].setShareOption(t)}},setApp:function(){var t=this;if(h["a"].isApp&&!(r["f"].indexOf(this.$path)>=0)){o["a"].APP_E3=l["a"].subscribe(o["a"].APP_E3,function(){r["a"].indexOf(t.$path)>=0&&t.log({cid:"mybill",aid:"share"}),t.appShare()});var i={image:a["b"]};n["a"].setRightTopButton(i)}},appShare:function(){h["a"].isApp&&n["a"].share(Object(s["a"])({},this.common_share_info))},updateShare:function(t){this.common_share_info=Object.assign(this.common_share_info,t||{}),this.setWx()}}}},"16bc":function(t,i,e){"use strict";e.d(i,"b",function(){return a}),e.d(i,"c",function(){return n}),e.d(i,"g",function(){return l}),e.d(i,"h",function(){return o}),e.d(i,"e",function(){return r}),e.d(i,"f",function(){return d}),e.d(i,"d",function(){return h}),e.d(i,"i",function(){return c}),e.d(i,"j",function(){return m}),e.d(i,"l",function(){return p}),e.d(i,"m",function(){return u}),e.d(i,"n",function(){return v}),e.d(i,"o",function(){return g}),e.d(i,"p",function(){return _}),e.d(i,"q",function(){return b}),e.d(i,"r",function(){return f}),e.d(i,"s",function(){return y}),e.d(i,"t",function(){return x}),e.d(i,"u",function(){return w}),e.d(i,"a",function(){return T}),e.d(i,"v",function(){return I}),e.d(i,"k",function(){return C}),e.d(i,"w",function(){return S}),e.d(i,"x",function(){return k});var s=function(t){return"https://img.ddimg.mobi/assets/h5/".concat(t)},a=s("4602b1a87656d1501819113290.png"),n=s("9c3a30349e68a1498706936110.png"),l=s("activity-bill-first-head-log.png"),o=s("activity-bill-first-middle.png"),r=s("activity-bill-first-right-font2.png"),d=s("activity-bill-first-right-font1.png"),h=s("activity-bill-first-bottom.png"),c=s("activity-bill-pack-foot-logo.png"),m=s("activity-bill-share-small-img.png"),p=s("newtask/icon-buy.png"),u=s("newtask/icon-day.png"),v=s("newtask/icon-evaluate.png"),g=s("newtask/icon-fish.png"),_=s("newtask/icon-info.png"),b=s("newtask/icon-invite.png"),f=s("newtask/icon-meat.png"),y=s("newtask/icon-sign.png"),x=s("newtask/icon-vip.png"),w=s("newtask/logo-bottom.png"),T=s("44b2872a591fe1503888813415.png"),I=s("receive-cart-tip.png?v=1"),C=s("give-cart-title.png?v=1"),S=s("vip/member-0.png"),k=s("vip/member-1.png")},"38bc":function(t,i,e){"use strict";var s=e("9a0d"),a=e("eaea");t.exports=function(t,i,e){i in t?s.f(t,i,a(0,e)):t[i]=e}},4732:function(t,i,e){"use strict";var s=e("03a4"),a=e("0c1c"),n=e("5896");t.exports=function(t){var i=s(this),e=n(i.length),l=arguments.length,o=a(l>1?arguments[1]:void 0,e),r=l>2?arguments[2]:void 0,d=void 0===r?e:a(r,e);while(d>o)i[o++]=t;return i}},"4e26":function(t,i,e){var s=e("8718");s(s.P,"Array",{fill:e("4732")}),e("ccb3")("fill")},"5cba":function(t,i,e){var s=e("88a9"),a=e("5b8a");t.exports=function(t){return function(i,e){var n,l,o=String(a(i)),r=s(e),d=o.length;return r<0||r>=d?t?"":void 0:(n=o.charCodeAt(r),n<55296||n>56319||r+1===d||(l=o.charCodeAt(r+1))<56320||l>57343?t?o.charAt(r):n:t?o.slice(r,r+2):l-56320+(n-55296<<10)+65536)}}},"74eb":function(t,i,e){"use strict";var s=e("c2ed"),a=e.n(s);a.a},"8f7c":function(t,i,e){},a2d0:function(t,i,e){(function(){function i(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function e(t,i){return t.x*i.x+t.y*i.y}function s(t,s){var a=i(t)*i(s);if(0===a)return 0;var n=e(t,s)/a;return n>1&&(n=1),Math.acos(n)}function a(t,i){return t.x*i.y-i.x*t.y}function n(t,i){var e=s(t,i);return a(t,i)>0&&(e*=-1),180*e/Math.PI}var l=function(t){this.handlers=[],this.el=t};function o(t,i){var e=new l(t);return e.add(i),e}l.prototype.add=function(t){this.handlers.push(t)},l.prototype.del=function(t){t||(this.handlers=[]);for(var i=this.handlers.length;i>=0;i--)this.handlers[i]===t&&this.handlers.splice(i,1)},l.prototype.dispatch=function(){for(var t=0,i=this.handlers.length;t<i;t++){var e=this.handlers[t];"function"===typeof e&&e.apply(this.el,arguments)}};var r=function(t,i){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var e=function(){};this.rotate=o(this.element,i.rotate||e),this.touchStart=o(this.element,i.touchStart||e),this.multipointStart=o(this.element,i.multipointStart||e),this.multipointEnd=o(this.element,i.multipointEnd||e),this.pinch=o(this.element,i.pinch||e),this.swipe=o(this.element,i.swipe||e),this.tap=o(this.element,i.tap||e),this.doubleTap=o(this.element,i.doubleTap||e),this.longTap=o(this.element,i.longTap||e),this.singleTap=o(this.element,i.singleTap||e),this.pressMove=o(this.element,i.pressMove||e),this.twoFingerPressMove=o(this.element,i.twoFingerPressMove||e),this.touchMove=o(this.element,i.touchMove||e),this.touchEnd=o(this.element,i.touchEnd||e),this.touchCancel=o(this.element,i.touchCancel||e),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};r.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV,s=t.touches.length;if(s>1){this._cancelLongTap(),this._cancelSingleTap();var a={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=a.x,e.y=a.y,this.pinchStartLen=i(e),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var e=this.preV,s=t.touches.length,a=t.touches[0].pageX,l=t.touches[0].pageY;if(this.isDoubleTap=!1,s>1){var o=t.touches[1].pageX,r=t.touches[1].pageY,d={x:t.touches[1].pageX-a,y:t.touches[1].pageY-l};null!==e.x&&(this.pinchStartLen>0&&(t.zoom=i(d)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=n(d,e),this.rotate.dispatch(t,this.element)),e.x=d.x,e.y=d.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(a-this.x2+o-this.sx2)/2,t.deltaY=(l-this.y2+r-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=o,this.sy2=r}else{if(null!==this.x2){t.deltaX=a-this.x2,t.deltaY=l-this.y2;var h=Math.abs(this.x1-this.x2),c=Math.abs(this.y1-this.y2);(h>10||c>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=a,this.y2=l,s>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var i=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){i.swipe.dispatch(t,i.element)},0)):(this.tapTimeout=setTimeout(function(){i._preventTap||i.tap.dispatch(t,i.element),i.isDoubleTap&&(i.doubleTap.dispatch(t,i.element),i.isDoubleTap=!1)},0),i.isDoubleTap||(i.singleTapTimeout=setTimeout(function(){i.singleTap.dispatch(t,i.element)},250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,i,e,s){return Math.abs(t-i)>=Math.abs(e-s)?t-i>0?"Left":"Right":e-s>0?"Up":"Down"},on:function(t,i){this[t]&&this[t].add(i)},off:function(t,i){this[t]&&this[t].del(i)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}},t.exports=r})()},bd2d:function(t,i,e){"use strict";var s=e("5cba")(!0);e("61b5")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,e=this._i;return e>=i.length?{value:void 0,done:!0}:(t=s(i,e),this._i+=t.length,{value:t,done:!1})})},c2ed:function(t,i,e){},f063:function(t,i,e){"use strict";var s=e("fffe"),a=e("8718"),n=e("03a4"),l=e("d001"),o=e("1295"),r=e("5896"),d=e("38bc"),h=e("96ec");a(a.S+a.F*!e("c2e9")(function(t){Array.from(t)}),"Array",{from:function(t){var i,e,a,c,m=n(t),p="function"==typeof this?this:Array,u=arguments.length,v=u>1?arguments[1]:void 0,g=void 0!==v,_=0,b=h(m);if(g&&(v=s(v,u>2?arguments[2]:void 0,2)),void 0==b||p==Array&&o(b))for(i=r(m.length),e=new p(i);i>_;_++)d(e,_,g?v(m[_],_):m[_]);else for(c=b.call(m),e=new p;!(a=c.next()).done;_++)d(e,_,g?l(c,v,[a.value,_],!0):a.value);return e.length=_,e}})},f921:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.mydata?e("div",{staticClass:"bill-wrapper"},[e("PageSwipe",{attrs:{bill:t.mydata},on:{onChange:t.onSwiper,onEnd:function(i){t.goLink("/bill/pack")}}},[e("div",{staticClass:"bill-item bill-page1"},[e("div",[e("transition",{attrs:{name:"bill-page1-step1"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.pageIndex,expression:"pageIndex===0"}],staticClass:"bill-page1-step1"})]),t._l(3,function(i,s){return[e("transition",{key:s,attrs:{name:"bill-page1-step"+(s+2)}},[e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.pageIndex,expression:"pageIndex===0"}],class:"bill-page1-step"+(s+2)},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-pic1-"+(s+2)+".png"}})])])]}),e("transition",{attrs:{name:"bill-page1-step5"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.pageIndex,expression:"pageIndex===0"}],staticClass:"bill-page1-step5"})]),e("transition",{attrs:{name:"bill-item-text"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.mydata&&0===t.pageIndex,expression:"mydata&&pageIndex===0"}],staticClass:"bill-item-text"},[e("div",[e("span",[t._v(t._s(t.mydata.register_time))])]),e("div",[t._v("是个特别的日子")]),e("div",[t._v("那是我们第一次见面")]),e("p"),e("div",[t._v("转眼已相伴走过"),e("span",[t._v(t._s(t.mydata.days))]),t._v("天")]),e("div",[t._v(t._s(t.mydata.is_friend?"Ta":"你")+"就是传说中的")]),e("div",[e("span",[t._v(t._s(t.mydata.register_level))]),t._v("叮咚菜友")])])]),e("div",{staticClass:"bill-item-action"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-page.png"}})]),e("transition",{attrs:{name:"bill-item-code"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"bill-item-code"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/my-bill-code.png"}})])])],2)]),e("div",{staticClass:"bill-item bill-page2"},[t.pageIndex>0?e("div",[t._l(7,function(i,s){return[e("transition",{key:s,attrs:{name:"bill-page2-step"+(s+1)}},[e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.pageIndex,expression:"pageIndex===1"}],class:"bill-page2-step"+(s+1)},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-pic2-"+(s+1)+".png"}})])])]}),e("transition",{attrs:{name:"bill-item-text"}},[t.mydata&&1===t.pageIndex?e("div",{staticClass:"bill-item-text"},[e("div",[t._v("听说")]),e("div",[t._v("一个人每年用4806分钟")]),e("div",[t._v("来思索下顿饭吃什么")]),e("p"),e("div",[t._v("今年打开了"),e("span",[t._v(t._s(t.mydata.open_app_cnt)+"次")]),t._v("APP的"+t._s(t.mydata.is_friend?"Ta":"你"))]),e("div",[t._v("是不是也在思考这个问题呢？")])]):t._e()]),e("div",{staticClass:"bill-item-action"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-page.png"}})]),e("div",{staticClass:"bill-item-code"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/my-bill-code.png"}})])],2):t._e()]),e("div",{staticClass:"bill-item bill-page3"},[t.pageIndex>1?e("div",[t._l(5,function(i,s){return[e("transition",{key:s,attrs:{name:"bill-page3-step"+(s+1)}},[e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.pageIndex,expression:"pageIndex===2"}],class:"bill-page3-step"+(s+1)},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-pic3-"+(s+1)+".png"}})])])]}),e("transition",{attrs:{name:"bill-page3-step6"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.pageIndex,expression:"pageIndex===2"}],staticClass:"bill-page3-step6"})]),e("transition",{attrs:{name:"bill-item-text"}},[t.mydata&&2===t.pageIndex?e("div",{staticClass:"bill-item-text"},[e("div",[t._v("今年")]),e("div",[t._v(t._s(t.mydata.is_friend?"Ta":"你")+"一共用叮咚买菜"),e("span",[t._v(t._s(t.mydata.total_order_cnt)+"次")])]),e("div",[t._v("节省了"),e("span",[t._v(t._s(t.minute)+"分钟")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.day>0,expression:"day > 0"}]},[t._v("相当于多放了"),e("span",[t._v(t._s(t.day)+"天")]),t._v("假")]),e("p"),e("div",[t._v("早餐，午餐，晚餐 ")]),e("div",[t._v("我都想陪"+t._s(t.mydata.is_friend?"Ta":"你")+"一起吃")])]):t._e()]),e("div",{staticClass:"bill-item-action"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-page.png"}})]),e("div",{staticClass:"bill-item-code"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/my-bill-code.png"}})])],2):t._e()]),e("div",{staticClass:"bill-item bill-page4"},[t.pageIndex>2?e("div",[e("div",{staticClass:"bill-page4-step1"}),t._l(3,function(i,s){return[e("transition",{key:s,attrs:{name:"bill-page4-step"+(s+2)}},[e("div",{directives:[{name:"show",rawName:"v-show",value:3===t.pageIndex,expression:"pageIndex===3"}],class:"bill-page4-step"+(s+2)},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-pic4-"+(s+2)+".png"}})])])]}),e("transition",{attrs:{name:"bill-item-text"}},[t.mydata&&3===t.pageIndex?e("div",{staticClass:"bill-item-text"},[e("div",[t._v("摩羯、山竹...")]),e("div",[t._v("这些台风你还记得吗？")]),e("div",[t._v("这一年")]),e("div",[t._v("有"),e("span",[t._v(t._s(t.mydata.rain_days))]),t._v("个糟糕的天气")]),e("div",[t._v("小哥都在风雨兼程送菜到家")]),e("p"),e("div",[t._v("再糟心的日子")]),e("div",[t._v("也有我陪"+t._s(t.mydata.is_friend?"Ta":"你")+"一起度过")])]):t._e()]),e("div",{staticClass:"bill-item-action"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-page.png"}})]),e("div",{staticClass:"bill-item-code"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/my-bill-code.png"}})])],2):t._e()]),e("div",{staticClass:"bill-item bill-page5"},[t.pageIndex>3?e("div",[t._l(3,function(i,s){return[e("transition",{key:s,attrs:{name:"bill-page5-step"+(s+1)}},[e("div",{directives:[{name:"show",rawName:"v-show",value:4===t.pageIndex,expression:"pageIndex===4"}],class:"bill-page5-step"+(s+1)},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-pic5-"+(s+1)+".png"}})])])]}),e("transition",{attrs:{name:"bill-item-text"}},[t.mydata&&4===t.pageIndex?e("div",{staticClass:"bill-item-text"},[e("div",[t._v("还记得为"+t._s(t.mydata.is_friend?"Ta":"你")+"送菜最多的"),e("span",[t._v(t._s(t.mydata.deliveryman_name))]),t._v("吗？")]),e("div",[t._v("那个微笑中略带羞涩的TA ")]),e("div",[t._v(t._s(t.mydata.is_friend?"Ta":"你")+"们已经遇见了"),e("span",[t._v(t._s(t.mydata.delivery_cnt)+"次")])]),e("p"),e("div",{directives:[{name:"show",rawName:"v-show",value:t.mydata.total_weights>0,expression:"mydata.total_weights > 0"}]},[t._v("365天，小哥们为"+t._s(t.mydata.is_friend?"Ta":"你")+"配送的商品重量超过"),e("span",[t._v(t._s(t.mydata.total_weights)+"kg")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.mydata.total_weights>0,expression:"mydata.total_weights > 0"}]},[t._v("相当于"),e("span",[t._v(t._s(t.mydata.total_rate))]),t._v("头牛")])]):t._e()]),e("div",{staticClass:"bill-item-action"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-page.png"}})]),e("div",{staticClass:"bill-item-code"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/my-bill-code.png"}})])],2):t._e()]),e("div",{staticClass:"bill-item bill-page6"},[t.pageIndex>4?e("div",[t._l(4,function(i,s){return[e("transition",{key:s,attrs:{name:"bill-page6-step"+(s+1)}},[e("div",{directives:[{name:"show",rawName:"v-show",value:5===t.pageIndex,expression:"pageIndex===5"}],class:"bill-page6-step"+(s+1)},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-pic6-"+(s+1)+".png"}})])])]}),e("transition",{attrs:{name:"bill-item-text"}},[t.mydata&&5===t.pageIndex?e("div",{staticClass:"bill-item-text"},[e("div",[t._v("这一年")]),e("div",[t._v(t._s(t.mydata.is_friend?"Ta":"你")+"最爱买的是"),e("span",[t._v(t._s(t.mydata.product_name_by_max_buy))])]),e("div",[t._v("一共买了"),e("span",[t._v(t._s(t.mydata.buy_cnt_by_max_product)+"次")])]),e("p"),e("div",[t._v("打败了"),e("span",[t._v(t._s(t.mydata.buy_product_rate)+"%")]),t._v("的菜友")]),e("div",[t._v("成为"),e("span",[t._v(t._s(t.mydata.max_product_area)+" 第"+t._s(t.mydata.rank_by_max_product)+" "+t._s(t.mydata.product_name_by_max_buy_base_name))]),t._v("王")])]):t._e()]),e("div",{staticClass:"bill-item-action"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-page.png"}})]),e("div",{staticClass:"bill-item-code"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/my-bill-code.png"}})])],2):t._e()]),e("div",{staticClass:"bill-item bill-page7"},[t.pageIndex>5?e("div",[t._l(4,function(i,s){return[e("transition",{key:s,attrs:{name:"bill-page7-step"+(s+1)}},[e("div",{directives:[{name:"show",rawName:"v-show",value:6===t.pageIndex,expression:"pageIndex===6"}],class:"bill-page7-step"+(s+1)},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-pic7-"+(s+1)+".png"}})])])]}),e("transition",{attrs:{name:"bill-item-text"}},[t.mydata&&6===t.pageIndex?e("div",{staticClass:"bill-item-text"},[e("div",[e("span",[t._v(t._s(t.mydata.date_by_max_pay_money))])]),e("div",[t._v(t._s(t.mydata.is_friend?"Ta":"你")+"花了"),e("span",[t._v(t._s(t.mydata.max_pay_money)+"元")])]),e("div",[t._v("做了今年最贵的一顿饭")]),e("p"),e("div",[t._v("那天饭桌上的酣畅淋漓")]),e("div",[t._v("一定比任何时候的都过瘾")])]):t._e()]),e("div",{staticClass:"bill-item-action"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-page.png"}})]),e("div",{staticClass:"bill-item-code"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/my-bill-code.png"}})])],2):t._e()]),e("div",{staticClass:"bill-item bill-page8"},[t.pageIndex>6?e("div",[t._l(2,function(i,s){return[e("transition",{key:s,attrs:{name:"bill-page8-step"+(s+1)}},[e("div",{directives:[{name:"show",rawName:"v-show",value:7===t.pageIndex,expression:"pageIndex===7"}],class:"bill-page8-step"+(s+1)},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-pic8-"+(s+1)+".png"}})])])]}),e("transition",{attrs:{name:"bill-item-text"}},[t.mydata&&7===t.pageIndex?e("div",{staticClass:"bill-item-text"},[e("div",[e("span",[t._v("2018年")])]),e("div",[t._v(t._s(t.mydata.is_friend?"Ta":"你")+"在叮咚一共消费了"),e("span",[t._v(t._s(t.mydata.total_pay_money)+"元")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.mydata.total_discounts_money>0,expression:"mydata.total_discounts_money > 0"}]},[t._v("享受优惠"),e("span",[t._v(t._s(t.mydata.total_discounts_money)+"元")])]),e("p"),e("div",{directives:[{name:"show",rawName:"v-show",value:2<=t.mydata.total_discounts_money,expression:"2 <= mydata.total_discounts_money"}]},[t._v("小咚为"+t._s(t.mydata.is_friend?"Ta":"你")+"省下的钱")]),e("div",{directives:[{name:"show",rawName:"v-show",value:2<=t.mydata.total_discounts_money,expression:"2 <= mydata.total_discounts_money"}]},[t.mydata.total_discounts_money<50?e("div",[t._v("可以拿来买"),e("span",[t._v(t._s((t.mydata.total_discounts_money/2).toFixed())+"张彩票")])]):t.mydata.total_discounts_money<1e3?e("div",[t._v("可以拿来去电影院看"),e("span",[t._v(t._s((t.mydata.total_discounts_money/50).toFixed())+"场IMAX电影")])]):e("div",[t._v("可以拿来去迪士尼嗨"),e("span",[t._v(t._s((t.mydata.total_discounts_money/500).toFixed())+"次")])])])]):t._e()]),e("div",{staticClass:"bill-item-action"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-page.png"}})]),e("div",{staticClass:"bill-item-code"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/my-bill-code.png"}})])],2):t._e()]),e("div",{staticClass:"bill-item bill-page9"},[e("transition",{attrs:{name:"bill-item-text"}},[t.mydata&&8===t.pageIndex?e("div",{staticClass:"bill-page9-step"},[e("div",[t._v(t._s(t.mydata.is_friend?"Ta":"你")+"喜欢的味道")]),e("div",[t._v(t._s(t.mydata.is_friend?"Ta":"你")+"爱买的食材")]),e("div",[t._v("组成了独一无二的"+t._s(t.mydata.is_friend?"Ta":"你"))])]):t._e()]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.mydata.is_friend,expression:"!mydata.is_friend"}],staticClass:"bill-item-action"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/bill-page.png"}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.mydata.is_friend,expression:"mydata.is_friend"}],staticClass:"bill-page9-btn",on:{click:t.openBill}},[t._v("开启我的年度账单")]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.mydata.is_friend,expression:"!mydata.is_friend"}],staticClass:"bill-page9-text"},[t._v("上滑拆新年开运红包")]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.mydata.is_friend,expression:"!mydata.is_friend"}],staticClass:"bill-item-code"},[e("img",{attrs:{src:"https://img.ddimg.mobi/assets/h5/bill/my-bill-code.png"}})]),t.pageIndex>7?e("div",{staticClass:"mts-canvas"},[e("RadarCanvas",{attrs:{list:t.mydata.rate}})],1):t._e()],1),t.mydata.is_friend?t._e():e("div",{staticClass:"bill-item bill-page10"})])],1):t._e()},a=[],n=e("059d"),l=e.n(n),o=(e("5a09"),e("bc72"),e("5475"),e("4aee")),r=e("0f35"),d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"pageSwipe",staticClass:"pageSwipe"},[t._t("default")],2)},h=[],c=(e("bd2d"),e("f063"),e("25d7"),e("a2d0")),m=e.n(c),p={data:function(){return{currentIndex:0,childNum:1,duration:"0.2s",timing:"cubic-bezier(0.42, 0, 0.58, 1)",timer:null}},props:{bill:Object},methods:{_addStyle:function(){var t=this,i=this.$refs.pageSwipe,e=i.children,s=0;this.childNum=e.length,Array.from(e).forEach(function(i){s+=i.offsetHeight,i.style.transition?i.style.transition="transform ".concat(t.duration," ").concat(t.timing,";"):i.style.WebkitTransition="-webkit-transform ".concat(t.duration," ").concat(t.timing,";")}),i.style.height=s+"px"},_initSwipe:function(){var t=this.$refs.pageSwipe,i=this;this.swipe=new m.a(t,{swipe:function(t){var e=0;"0.00"===i.bill.max_pay_money&&(e=1),"Up"==t.direction&&(i.currentIndex=Math.min(i.childNum-1,++i.currentIndex),6===i.currentIndex&&(i.currentIndex+=e)),"Down"==t.direction&&(i.currentIndex=Math.max(0,--i.currentIndex),6===i.currentIndex&&(i.currentIndex-=e)),i.$emit("onChange",i.currentIndex),i.timer=setTimeout(function(){i.goToSection(i.currentIndex),clearTimeout(i.timer)},500)}})},goToSection:function(t){if(t>8)this.$emit("onEnd");else try{var i=this.$refs.pageSwipe.children;Array.from(i).forEach(function(i){i.style.transform?i.style.transform="translateY(-".concat(100*t,"%)"):i.style.WebkitTransform="translateY(-".concat(100*t,"%)")})}catch(e){return}},_preventDefault:function(t){t.preventDefault()}},mounted:function(){document.body.addEventListener("touchmove",this._preventDefault,{passive:!1}),this._addStyle(),this._initSwipe()},destroyed:function(){document.body.removeEventListener("touchmove",this._preventDefault)}},u=p,v=(e("74eb"),e("17cc")),g=Object(v["a"])(u,d,h,!1,null,"6a5d06fb",null),_=g.exports,b=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("canvas",{ref:"canvas",staticStyle:{width:"320px",height:"320px"}})},f=[],y=(e("4e26"),{data:function(){return{canvas:{center:160,radius:85,angle:Math.PI/3,count:6,ratio:1,axis:3,fixRadius:-Math.PI/2},timer:null}},props:{list:Array},methods:{_initRadar:function(){var t=this,i=this.$refs.canvas,e=i.getContext("2d"),s=this.getPixelRatio(e);i.height=320*s,i.width=320*s,this.canvas.radius=85*s,this.canvas.center=160*s,this.canvas.ratio=s,this.drawPolygon(e),this.drawLines(e),this.drawText(e);var a=.1;this.timer=setInterval(function(){a+=.1,t.drawRegion(e,a),a>1&&clearInterval(t.timer)},100)},drawPolygon:function(t){var i=this.canvas,e=i.ratio,s=i.count,a=i.radius,n=i.center,l=i.angle,o=i.axis,r=i.fixRadius;t.save(),t.strokeStyle="#EAEAEA",t.lineWidth=2*e;var d,h,c,m,p,u,v=a/o;for(m=0;m<o;m++){for(t.beginPath(),d=v*(m+1),p=0;p<s;p++)u=l*p,h=n+d*Math.cos(u+r),c=n+d*Math.sin(u+r),t.lineTo(h,c);t.closePath(),t.stroke()}t.restore()},drawLines:function(t){var i,e,s,a,n=this.canvas,l=n.ratio,o=n.count,r=n.radius,d=n.center,h=n.angle,c=n.fixRadius;for(t.save(),t.lineWidth=2*l,t.beginPath(),t.strokeStyle="#EAEAEA",s=0;s<o;s++)a=h*s,i=d+r*Math.cos(a+c),e=d+r*Math.sin(a+c),t.moveTo(d,d),t.lineTo(i,e);t.stroke(),t.restore()},drawText:function(t){var i=this.canvas,e=i.count,s=i.radius,a=i.center,n=i.angle,l=i.fixRadius;t.save();var o,r,d,h,c,m,p=a/12;for(t.font=p+"px Microsoft Yahei",t.fillStyle="#40453F",c=0;c<e;c++)m=n*c+l,o=a+s*Math.cos(m),r=a+s*Math.sin(m),d=this.list[c][0],h=t.measureText(d).width,m>=-Math.PI/2&&m<-Math.PI/5?t.fillText(d,o-h/2,r-p):m>-Math.PI/5&&m<Math.PI/2?t.fillText(d,o+p,r+p/2):m>=Math.PI/2&&m<2*Math.PI/3?t.fillText(d,o-h/2,r+2*p):t.fillText(d,o-h-p,r+p/2);t.restore()},drawRegion:function(t,i){var e,s,a,n,l,o=this.canvas,r=o.count,d=o.radius,h=o.center,c=o.angle,m=o.ratio,p=o.fixRadius;for(t.save(),t.beginPath(),n=0;n<r;n++)e=this.list[n][1]+10,l=c*n+p,s=h+i*d*Math.cos(l)*e/70,a=h+i*d*Math.sin(l)*e/70,t.lineTo(s,a);t.closePath(),i>1?(t.fillStyle="rgba(196,234,208,0.6)",t.strokeStyle="#2FB157"):(t.fillStyle="rgba(196,234,208,0.1)",t.strokeStyle="rgba(196,234,208,0.1)"),t.lineWidth=2*m,t.fill(),t.stroke(),t.restore()},getPixelRatio:function(t){var i=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/i}},mounted:function(){this._initRadar()},destroyed:function(){clearInterval(this.timer)}}),x=y,w=Object(v["a"])(x,b,f,!1,null,null,null),T=w.exports,I=e("b12f"),C={name:"bill",components:{PageSwipe:_,RadarCanvas:T},mixins:[r["a"]],data:function(){return{pageIndex:-1,mydata:null,minute:0,day:0,showCode:!1}},created:function(){var t=Object(o["a"])(l.a.mark(function t(){var i,e,s=this;return l.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:i=this.$route.query.friend_id,e=void 0===i?"":i,this.$http.get(I["a"].userBill("detailInfo"),{friend_id:e},!0,!1).then(function(t){if(t.error)s.goLink("/bill");else{s.mydata=t.data;var i=s.mydata,e=i.is_new_user,a=i.total_order_cnt;if(e)s.goLink("/bill/pack");else{var n=(a%20+40)*a,l=n/480,o=n%480;s.minute=n,o&&l.toString().split(".")[1].length&&(l=l.toFixed(1)),"0.0"===l&&(l=0),s.day=l}}}),this.pageIndex=0,this.showCode=!0;case 4:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),methods:{onSwiper:function(t){t>this.pageIndex&&this.log({cid:"mybill",aid:"next"}),this.$set(this.$data,"pageIndex",t)},goLink:function(t){this.$router.push({path:t})},openBill:function(){this.log({cid:"mybill",aid:"open"}),this.goLink("/bill")}}},S=C,k=(e("ffbc"),Object(v["a"])(S,s,a,!1,null,"c43ef8e4",null));i["default"]=k.exports},ffbc:function(t,i,e){"use strict";var s=e("8f7c"),a=e.n(s);a.a}}]);
//# sourceMappingURL=BillDetail.def0691c.js.map