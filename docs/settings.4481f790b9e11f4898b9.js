!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="bd5530b150283a4b1bad")}({"124e5333d240f9e9ac9d":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i});var r={BOARD:"board",CARD:"card",MEMBER:"member",ORGANIZATION:"organization"},o={SHARED:"shared",PRIVATE:"private"},i={BLUE:"blue",GREEN:"green",ORANGE:"orange",RED:"red",YELLOW:"yellow",PURPLE:"purple",PINK:"pink",SKY:"sky",LIME:"lime",LIGHTGRAY:"light-gray"}},"3454881a11013d365bc6":function(e,t,n){"use strict";var r=n("124e5333d240f9e9ac9d"),o=n("a659833de475285b18b3");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,c(t).call(this,r.b.BOARD,r.c.SHARED))}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["a"]),n=t,(i=[{key:"getDiscussionStatus",value:function(e){return this.read(e,t.DISCUSSION_STATUS)}},{key:"getDiscussionCardId",value:function(e){return this.read(e,t.DISCUSSION_CARD_ID)}},{key:"getDiscussionStartedAt",value:function(e){return this.read(e,t.DISCUSSION_STARTED_AT)}},{key:"getDiscussionPreviousElapsed",value:function(e){return this.read(e,t.DISCUSSION_PREVIOUS_ELAPSED)}},{key:"getDiscussionIntervalId",value:function(e){return this.read(e,t.DISCUSSION_INTERVAL_ID)}}])&&u(n.prototype,i),l&&u(n,l),t}();l(f,"DISCUSSION_STATUS","leancoffeeDiscussionStatus"),l(f,"DISCUSSION_CARD_ID","leancoffeeDiscussionCardId"),l(f,"DISCUSSION_STARTED_AT","leancoffeeDiscussionStartedAt"),l(f,"DISCUSSION_PREVIOUS_ELAPSED","leancoffeeDiscussionPreviousElapsed"),l(f,"DISCUSSION_INTERVAL_ID","leancoffeeDiscussionIntervalId"),t.a=f},"913e7ad1aff3f4c0d6e7":function(e,t,n){"use strict";var r=n("124e5333d240f9e9ac9d"),o=n("a659833de475285b18b3");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,c(t).call(this,r.b.CARD,r.c.SHARED))}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["a"]),n=t,(i=[{key:"getDiscussionStatus",value:function(e){return this.read(e,t.DISCUSSION_STATUS)}},{key:"getDiscussionElapsed",value:function(e){return this.read(e,t.DISCUSSION_ELAPSED)}},{key:"getDiscussionThumbs",value:function(e){return this.read(e,t.DISCUSSION_THUMBS)}},{key:"saveDiscussionStatus",value:function(e,n){return this.write(e,t.DISCUSSION_STATUS,n)}},{key:"saveDiscussionElapsed",value:function(e,n){return this.write(e,t.DISCUSSION_ELAPSED,n)}},{key:"saveDiscussionThumbs",value:function(e,n){return this.write(e,t.DISCUSSION_THUMBS,n)}},{key:"saveVotes",value:function(e,n){return this.write(e,t.VOTES,n)}},{key:"deleteDiscussionThumbs",value:function(e){return this.delete(e,t.DISCUSSION_THUMBS)}}])&&u(n.prototype,i),l&&u(n,l),t}();l(f,"DISCUSSION_STATUS","leancoffeeDiscussionStatus"),l(f,"DISCUSSION_ELAPSED","leancoffeeDiscussionElapsed"),l(f,"DISCUSSION_THUMBS","leancoffeeDiscussionThumbs"),l(f,"VOTES","leancoffeeVotes"),t.a=f},a659833de475285b18b3:function(e,t,n){"use strict";var r=n("124e5333d240f9e9ac9d");function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.b.MEMBER,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.c.PRIVATE;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{scope:t,visibility:n})}var t,n,i;return t=e,(n=[{key:"readById",value:function(e,t,n){return e.get(n,this.visibility,t)}},{key:"read",value:function(e,t){return e.get(this.scope,this.visibility,t)}},{key:"write",value:function(e,t,n){return e.set(this.scope,this.visibility,t,n)}},{key:"writeMultiple",value:function(e,t){return e.set(this.scope,this.visibility,t)}},{key:"delete",value:function(e,t){return e.remove(this.scope,this.visibility,t)}},{key:"deleteMultiple",value:function(e,t){return e.remove(this.scope,this.visibility,t)}},{key:"deleteMultipleById",value:function(e,t,n){return e.remove(n,this.visibility,t)}}])&&o(t.prototype,n),i&&o(t,i),e}();t.a=i},bd5530b150283a4b1bad:function(e,t,n){"use strict";n.r(t);var r=n("3454881a11013d365bc6"),o=n("913e7ad1aff3f4c0d6e7"),i=n("124e5333d240f9e9ac9d");function u(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,c,"next",e)}function c(e){u(i,r,o,a,c,"throw",e)}a(void 0)})}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,u;return t=e,n=null,u=[{key:"showData",value:function(){var e=a(function*(e,t){var n=yield e.getAll(),r=yield e.cards("all");console.groupCollapsed("Current context"),console.log(JSON.stringify(e.getContext(),null,2)),console.groupEnd(),console.groupCollapsed("Board data"),console.log(JSON.stringify(n,null,2)),console.groupEnd(),t.map(r,function(t){return e.get(t.id,i.c.SHARED)}).then(function(e){return e.forEach(function(e){console.groupCollapsed("Card data"),console.log(JSON.stringify(e,null,2)),console.groupEnd()})})});return function(t,n){return e.apply(this,arguments)}}()},{key:"wipeData",value:function(){var e=a(function*(e,t,n,i){i.deleteMultiple(e,[r.a.DISCUSSION_STATUS,r.a.DISCUSSION_CARD_ID,r.a.DISCUSSION_STARTED_AT,r.a.DISCUSSION_PREVIOUS_ELAPSED,r.a.DISCUSSION_INTERVAL_ID]);var u=yield e.cards("all");t.all(u.map(function(){var t=a(function*(t){yield n.deleteMultipleById(e,[o.a.DISCUSSION_STATUS,o.a.DISCUSSION_ELAPSED,o.a.DISCUSSION_THUMBS,o.a.VOTES],t.id)});return function(e){return t.apply(this,arguments)}}())).then(function(){console.log("Data wipe finished")})});return function(t,n,r,o){return e.apply(this,arguments)}}()}],n&&c(t.prototype,n),u&&c(t,u),e}();function l(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function u(e){l(i,r,o,u,a,"next",e)}function a(e){l(i,r,o,u,a,"throw",e)}u(void 0)})}}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"showData",f(function*(){i.isProduction||s.showData(i.t,i.Promise)})),d(this,"wipeData",f(function*(){i.isProduction||s.wipeData(i.t,i.Promise,i.cardStorage,i.boardStorage)})),this.w=t,this.t=t.TrelloPowerUp.iframe(),this.Promise=t.TrelloPowerUp.Promise,this.isProduction="production"===n,this.boardStorage=new r.a,this.cardStorage=new o.a}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.isProduction||(this.w.document.querySelector(".dev-only").style.display="block"),this.t.sizeTo("#leanCoffeeSettingsForm")}}])&&S(t.prototype,n),i&&S(t,i),e}();window.settingsInstance=new p(window,"production"),window.settingsInstance.init()}});
//# sourceMappingURL=settings.4481f790b9e11f4898b9.js.map