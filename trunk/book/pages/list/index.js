!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=334)}({11:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(85),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},30:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(o,i){try{var a=e[o](i),c=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}var o=n(11),i=getApp(),a={run:function(t){t.onLoad=function(t){this.init(t).then().catch(function(t){console.log(t),"string"==typeof t?i.alert(t):i.alert(JSON.stringify(t))})},t.inputChange=function(t){var e=t.target.id,n=t.detail.value,r={};r[e]=n,this.setData(r)},Page(t)},ajax:function(t){return new Promise(function(e,n){wx.request({url:t.url,dataType:"json",data:JSON.stringify(t.data),method:"post",success:function(t){t=t.data,e(t.html)},error:function(t){n(t)}})})},getUrlHtml:function(t){var e=this;return r(o.mark(function n(){return o.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.ajax({url:"https://bensxu.duapp.com/book/api/getHtml",data:{url:t}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n,e)}))()},alert:function(t,e){return t="string"==typeof t?t:JSON.stringify(t),new Promise(function(n){e=e||"系统提示",wx.showModal({title:e,content:t,showCancel:!1,confirmText:"确定",success:function(){n()}})})},info:{show:function(t){"string"!=typeof t&&(t=JSON.stringify(t)),wx.showToast({title:t,icon:"none",duration:2e3})},hide:function(){wx.hideToast()}},loading:{show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"极速加载中";wx.showLoading({title:t,mask:!0})},hide:function(){wx.hideLoading()}},setTitle:function(t){wx.setNavigationBarTitle({title:t})},setNavigationBarColor:function(t,e){wx.setNavigationBarColor({frontColor:t,backgroundColor:e,animation:{duration:0,timingFunc:"easeIn"}})},openUrl:function(t){wx.navigateTo({url:t})},goBack:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;wx.navigateBack({delta:t})},tel:function(t){wx.makePhoneCall({phoneNumber:t})},setLocalData:function(t,e){return new Promise(function(n,r){wx.setStorage({key:t,data:e,success:function(){n()},error:function(t){r(t)}})})},getLocalData:function(t){return new Promise(function(e){wx.getStorage({key:t,complete:function(t){t=t||{},t=t.data||"",e(t)}})})},delLocalData:function(t){return new Promise(function(e){wx.removeStorage({key:t,success:function(t){e()}})})},clearLocalData:function(){wx.clearStorageSync()},scrollTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;wx.pageScrollTo({scrollTop:t,duration:e})},getDomParam:function(t){return new Promise(function(e){var n=wx.createSelectorQuery();n.select(t).boundingClientRect(),n.exec(function(t){t[0]&&e(t[0])})})}};Object.assign(i,a),t.exports=i},334:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(o,i){try{var a=e[o](i),c=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}var o=n(11),i=n(30),a={data:{pageIsRun:!1,bookList:[],bookId:"",search:"none",bookName:""},init:function(t){var e=this;return r(o.mark(function n(){var r,a,c;return o.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,a=i.globalData[r],c=t.search||0,c=1==c,c&&e.checkIsShowAddBtn(r),e.setData({bookId:r}),e.setData({pageIsRun:!0}),e.setData({bookName:a.bookInfo.bookName}),i.setTitle(a.bookInfo.bookName),n.next=9,e.handlerReadedList(a,r);case 9:case"end":return n.stop()}},n,e)}))()},checkIsShowAddBtn:function(t){var e=this;return r(o.mark(function n(){var r,a,c;return o.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,i.getLocalData("bookList");case 3:if(n.t0=n.sent,n.t0){n.next=6;break}n.t0=[];case 6:r=n.t0,a=!1,r.map(function(e){console.log(e.id,t,e.id==t),e.id==t&&(a=!0)}),c=a?"none":"block",e.setData({search:c});case 11:case"end":return n.stop()}},n,e)}))()},showInfo:function(t){var e=t.currentTarget.dataset.url,n=this.data.bookId;i.openUrl("../info/index?bookId="+n+"&url="+e)},onShow:function(){if(this.data.pageIsRun){var t=this.data.bookId,e=i.globalData[t];this.handlerReadedList(e,t).then().catch()}},handlerReadedList:function(t,e){var n=this;return r(o.mark(function r(){var a,c,u,s,f,l;return o.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.getLocalData("readList");case 2:if(r.t0=r.sent,r.t0){r.next=5;break}r.t0={};case 5:return a=r.t0,c=a[e]||"",u=!1,s=0,t.bookList.map(function(t,e){u?t.color="#333":t.url==c?(u=!0,s=e,t.color="#ccc"):t.color="#ccc"}),n.setData({bookList:t.bookList}),r.next=12,i.getDomParam(".list");case 12:f=r.sent,l=f.height,i.scrollTo((s-2)*l,0);case 15:case"end":return r.stop()}},r,n)}))()},addBook:function(){var t=this;this.addBook_().then(function(e){t.setData({search:"none"}),i.info.show("数据添加成功")}).catch(function(t){console.log(t),i.info.show(t)})},addBook_:function(){var t=this;return r(o.mark(function e(){var n;return o.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getLocalData("bookList");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=[];case 5:return n=e.t0,n.push({id:t.data.bookId,bookList:t.data.bookList,name:t.data.bookName}),e.next=9,i.setLocalData("bookList",n);case 9:case"end":return e.stop()}},e,t)}))()}};i.run(a)},85:function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new d(r||[]);return a._invoke=s(t,n,c),a}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(n,o,i,a){var c=r(t[n],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},a)}a(c.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function s(t,e,n){var o=E;return function(i,a){if(o===O)throw new Error("Generator is already running");if(o===S){if("throw"===i)throw a;return g()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=f(c,n);if(u){if(u===D)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===E)throw o=S,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=O;var s=r(t,e,n);if("normal"===s.type){if(o=n.done?S:N,s.arg===D)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=S,n.method="throw",n.arg=s.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,f(t,e),"throw"===e.method))return D;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return D}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,D;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,D):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,D)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return r.next=r}}return{next:g}}function g(){return{value:v,done:!0}}var v,y=Object.prototype,m=y.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",b=w.asyncIterator||"@@asyncIterator",k=w.toStringTag||"@@toStringTag",L="object"==typeof t,P=e.regeneratorRuntime;if(P)return void(L&&(t.exports=P));P=e.regeneratorRuntime=L?t.exports:{},P.wrap=n;var E="suspendedStart",N="suspendedYield",O="executing",S="completed",D={},_={};_[x]=function(){return this};var j=Object.getPrototypeOf,I=j&&j(j(p([])));I&&I!==y&&m.call(I,x)&&(_=I);var T=a.prototype=o.prototype=Object.create(_);i.prototype=T.constructor=a,a.constructor=i,a[k]=i.displayName="GeneratorFunction",P.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},P.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,k in t||(t[k]="GeneratorFunction")),t.prototype=Object.create(T),t},P.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[b]=function(){return this},P.AsyncIterator=u,P.async=function(t,e,r,o){var i=new u(n(t,e,r,o));return P.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(T),T[k]="Generator",T[x]=function(){return this},T.toString=function(){return"[object Generator]"},P.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},P.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,D):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),D},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),h(n),D}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;h(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=v),D}}}(function(){return this}()||Function("return this")())}});