!function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e={};r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=6)}([function(t,r,e){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e(2),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,r,e){"use strict";function n(t){return function(){var r=t.apply(this,arguments);return new Promise(function(t,e){function n(o,i){try{var a=r[o](i),u=a.value}catch(t){return void e(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}var o=e(0),i=getApp(),a={run:function(t){t.onLoad=function(){this.init().then().catch(function(t){i.alert(JSON.stringify(t))})},Page(t)},ajax:function(t){return new Promise(function(r,e){wx.request({url:t.url,dataType:"json",data:JSON.stringify(t.data),method:"post",success:function(t){t=t.data,r(t.html)},error:function(t){e(t)}})})},getUrlHtml:function(t){var r=this;return n(o.mark(function e(){return o.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.ajax({url:"https://bensxu.duapp.com/book/api/getHtml",data:{url:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,r)}))()},alert:function(t,r){return new Promise(function(e){r=r||"系统提示",wx.showModal({title:r,content:t,showCancel:!1,confirmText:"确定",success:function(){e()}})})},info:{show:function(t){wx.showToast({title:t,icon:"none",duration:2e3})},hide:function(){wx.hideToast()}},loading:{show:function(t){wx.showLoading({title:t,mask:!0})},hide:function(){wx.hideLoading()}},setTitle:function(t){wx.setNavigationBarTitle({title:t})},setNavigationBarColor:function(t,r){wx.setNavigationBarColor({frontColor:t,backgroundColor:r,animation:{duration:0,timingFunc:"easeIn"}})},openUrl:function(t){wx.navigateTo({url:t})},goBack:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;wx.navigateBack({delta:t})},tel:function(t){wx.makePhoneCall({phoneNumber:t})},setLocalData:function(t,r){return new Promise(function(e,n){wx.setStorage({key:t,data:r,success:function(){e()},error:function(t){n(t)}})})},getLocalData:function(t){return new Promise(function(r){wx.getStorage({key:t,complete:function(t){t=t||{},t=t.data||"",r(t)}})})},delLocalData:function(t){return new Promise(function(r){wx.removeStorage({key:t,success:function(t){r()}})})},clearLocalData:function(){wx.clearStorageSync()},scrollTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;wx.pageScrollTo({scrollTop:t,duration:r})}};Object.assign(i,a),t.exports=i},function(t,r){!function(r){"use strict";function e(t,r,e,n){var i=r&&r.prototype instanceof o?r:o,a=Object.create(i.prototype),u=new p(n||[]);return a._invoke=s(t,e,u),a}function n(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function u(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function c(t){function r(e,o,i,a){var u=n(t[e],t,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},a)}a(u.arg)}function e(t,e){function n(){return new Promise(function(n,o){r(t,e,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=e}function s(t,r,e){var o=O;return function(i,a){if(o===j)throw new Error("Generator is already running");if(o===_){if("throw"===i)throw a;return v()}for(e.method=i,e.arg=a;;){var u=e.delegate;if(u){var c=f(u,e);if(c){if(c===N)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===O)throw o=_,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=j;var s=n(t,r,e);if("normal"===s.type){if(o=e.done?_:k,s.arg===N)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=_,e.method="throw",e.arg=s.arg)}}}function f(t,r){var e=t.iterator[r.method];if(e===g){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=g,f(t,r),"throw"===r.method))return N;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return N}var o=n(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,N;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=g),r.delegate=null,N):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,N)}function l(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function h(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function d(t){if(t){var r=t[x];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(m.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=g,r.done=!0,r};return n.next=n}}return{next:v}}function v(){return{value:g,done:!0}}var g,y=Object.prototype,m=y.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},x=w.iterator||"@@iterator",L=w.asyncIterator||"@@asyncIterator",b=w.toStringTag||"@@toStringTag",E="object"==typeof t,P=r.regeneratorRuntime;if(P)return void(E&&(t.exports=P));P=r.regeneratorRuntime=E?t.exports:{},P.wrap=e;var O="suspendedStart",k="suspendedYield",j="executing",_="completed",N={},T={};T[x]=function(){return this};var S=Object.getPrototypeOf,R=S&&S(S(d([])));R&&R!==y&&m.call(R,x)&&(T=R);var F=a.prototype=o.prototype=Object.create(T);i.prototype=F.constructor=a,a.constructor=i,a[b]=i.displayName="GeneratorFunction",P.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===i||"GeneratorFunction"===(r.displayName||r.name))},P.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(F),t},P.awrap=function(t){return{__await:t}},u(c.prototype),c.prototype[L]=function(){return this},P.AsyncIterator=c,P.async=function(t,r,n,o){var i=new c(e(t,r,n,o));return P.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(F),F[b]="Generator",F[x]=function(){return this},F.toString=function(){return"[object Generator]"},P.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},P.values=d,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(h),!t)for(var r in this)"t"===r.charAt(0)&&m.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=g),!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),u=m.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,N):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),N},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),h(e),N}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;h(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:d(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=g),N}}}(function(){return this}()||Function("return this")())},,,,function(t,r,e){"use strict";function n(t){return function(){var r=t.apply(this,arguments);return new Promise(function(t,e){function n(o,i){try{var a=r[o](i),u=a.value}catch(t){return void e(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}var o=e(0),i=e(1),a={init:function(){var t=this;return n(o.mark(function r(){return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},r,t)}))()}};i.run(a)}]);