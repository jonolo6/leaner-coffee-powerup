!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="7d0f45dbb48403d2a9a6")}({"124e5333d240f9e9ac9d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VisibilityConditions={IS_ADMIN:"admin",CAN_EDIT:"edit",READ_ONLY:"readOnly",SIGNED_IN:"signedIn",SIGNED_OUT:"signedOut",ALWAYS:"always"},t.StorageScope={BOARD:"board",CARD:"card",MEMBER:"member",ORGANIZATION:"organization"},t.StorageVisibility={SHARED:"shared",PRIVATE:"private"},t.BadgeColors={BLUE:"blue",GREEN:"green",ORANGE:"orange",RED:"red",YELLOW:"yellow",PURPLE:"purple",PINK:"pink",SKY:"sky",LIME:"lime",LIGHTGRAY:"light-gray"}},"1b6695f247aa876d8126":function(e,t,n){"use strict";e.exports=function(e){if("number"!=typeof e)throw new TypeError("Expected a number");var t=e>0?Math.floor:Math.ceil;return{days:t(e/864e5),hours:t(e/36e5)%24,minutes:t(e/6e4)%60,seconds:t(e/1e3)%60,milliseconds:t(e)%1e3}}},"3454881a11013d365bc6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n("124e5333d240f9e9ac9d"),s=function(e){return e&&e.__esModule?e:{default:e}}(n("a659833de475285b18b3")),a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r.StorageScope.BOARD,r.StorageVisibility.SHARED))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),i(t,[{key:"getDiscussionStatus",value:function(e){return this.read(e,t.DISCUSSION_STATUS)}},{key:"getDiscussionCardId",value:function(e){return this.read(e,t.DISCUSSION_CARD_ID)}},{key:"getDiscussionStartedAt",value:function(e){return this.read(e,t.DISCUSSION_STARTED_AT)}},{key:"getDiscussionPreviousElapsed",value:function(e){return this.read(e,t.DISCUSSION_PREVIOUS_ELAPSED)}},{key:"getDiscussionIntervalId",value:function(e){return this.read(e,t.DISCUSSION_INTERVAL_ID)}}]),t}();a.DISCUSSION_STATUS="leancoffeeDiscussionStatus",a.DISCUSSION_CARD_ID="leancoffeeDiscussionCardId",a.DISCUSSION_STARTED_AT="leancoffeeDiscussionStartedAt",a.DISCUSSION_PREVIOUS_ELAPSED="leancoffeeDiscussionPreviousElapsed",a.DISCUSSION_INTERVAL_ID="leancoffeeDiscussionIntervalId",t.default=a},"44d52eca4306d26d5eb8":function(e,t,n){const i=n("1b6695f247aa876d8126"),r=n("e3096d48ecabaf9e4101");e.exports=(e=>{const t=e<0?-e:e,n=e<=-1e3?"-":"";let{days:s,hours:a,minutes:o,seconds:u}=i(t);return u=r(u),s?`${n}${s}:${r(a)}:${r(o)}:${u}`:a?`${n}${a}:${r(o)}:${u}`:`${n}${o}:${u}`})},"7d0f45dbb48403d2a9a6":function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(n("dc31185cfa5321837a2c"));window.discussionUIInstance=new i.default(window),window.discussionUIInstance.init()},"913e7ad1aff3f4c0d6e7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n("124e5333d240f9e9ac9d"),s=function(e){return e&&e.__esModule?e:{default:e}}(n("a659833de475285b18b3")),a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r.StorageScope.CARD,r.StorageVisibility.SHARED))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),i(t,[{key:"getDiscussionStatus",value:function(e){return this.read(e,t.DISCUSSION_STATUS)}},{key:"getDiscussionElapsed",value:function(e){return this.read(e,t.DISCUSSION_ELAPSED)}},{key:"getDiscussionThumbs",value:function(e){return this.read(e,t.DISCUSSION_THUMBS)}},{key:"saveDiscussionStatus",value:function(e,n){return this.write(e,t.DISCUSSION_STATUS,n)}},{key:"saveDiscussionElapsed",value:function(e,n){return this.write(e,t.DISCUSSION_ELAPSED,n)}},{key:"saveDiscussionThumbs",value:function(e,n){return this.write(e,t.DISCUSSION_THUMBS,n)}},{key:"saveVotes",value:function(e,n){return this.write(e,t.VOTES,n)}},{key:"deleteDiscussionThumbs",value:function(e){return this.delete(e,t.DISCUSSION_THUMBS)}}]),t}();a.DISCUSSION_STATUS="leancoffeeDiscussionStatus",a.DISCUSSION_ELAPSED="leancoffeeDiscussionElapsed",a.DISCUSSION_THUMBS="leancoffeeDiscussionThumbs",a.VOTES="leancoffeeVotes",t.default=a},a659833de475285b18b3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n("124e5333d240f9e9ac9d"),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.StorageScope.MEMBER,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.StorageVisibility.PRIVATE;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{scope:t,visibility:n})}return i(e,[{key:"readById",value:function(e,t,n){return e.get(n,this.visibility,t)}},{key:"read",value:function(e,t){return e.get(this.scope,this.visibility,t)}},{key:"write",value:function(e,t,n){return e.set(this.scope,this.visibility,t,n)}},{key:"writeMultiple",value:function(e,t){return e.set(this.scope,this.visibility,t)}},{key:"delete",value:function(e,t){return e.remove(this.scope,this.visibility,t)}},{key:"deleteMultiple",value:function(e,t){return e.remove(this.scope,this.visibility,t)}},{key:"deleteMultipleById",value:function(e,t,n){return e.remove(n,this.visibility,t)}}]),e}();t.default=s},bb7e453c13d4f6baee8c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.Types={ELAPSED:{audio:"assets/looking_down.mp3",text:"The timer has elapsed"}},this.w=t,this.baseUrl=n,this.audioContext=new(this.w.AudioContext||this.w.webkitAudioContext)}return i(e,[{key:"load",value:function(e){var t=this;return fetch(e).then(function(e){return e.arrayBuffer()}).then(function(e){return t.audioContext.decodeAudioData(e)}).then(function(e){var n=t.audioContext.createBufferSource();return n.buffer=e,n.connect(t.audioContext.destination),n})}},{key:"play",value:function(){var e=function(){var e=function*(e){(yield this.load(this.baseUrl+"/"+e.audio)).start()}.apply(this,arguments);return new Promise(function(t,n){return function i(r,s){try{var a=e[r](s),o=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(o).then(function(e){i("next",e)},function(e){i("throw",e)});t(o)}("next")})};return function(t){return e.apply(this,arguments)}}()},{key:"open",value:function(e,t){new this.w.Notification(t,{body:e.text,icon:this.baseUrl+"/assets/timer.png"})}},{key:"show",value:function(e,t){var n=this;"Notification"in this.w&&"denied"!==this.w.Notification.permission&&("granted"===this.w.Notification.permission?this.open(e,t):this.w.Notification.requestPermission(function(i){"granted"===i&&n.open(e,t)}))}}]),e}();t.default=r},dc31185cfa5321837a2c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=u(n("44d52eca4306d26d5eb8")),s=u(n("3454881a11013d365bc6")),a=u(n("913e7ad1aff3f4c0d6e7")),o=n("e33b6889d58ae4e02528");function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function i(r,s){try{var a=t[r](s),o=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(o).then(function(e){i("next",e)},function(e){i("throw",e)});e(o)}("next")})}}var l={NONE:"This card is not being discussed at the moment.",ENDED:"The discussion on this card has ended."},d=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.monitorDiscussion=c(function*(){var e=yield n.cardStorage.getDiscussionStatus(n.t),t=[o.Statuses.ONGOING,o.Statuses.PAUSED].includes(e);if(!e||n.previousStatus!==e||t){switch(e){case o.Statuses.ENDED:n.toggleBadges(!1),n.updateMessage(l.ENDED);break;case o.Statuses.ONGOING:n.previousStatus!==e&&(n.toggleVoting(!1),n.toggleBadges(!0),n.updateMessage(""),n.updateStatusHeader(o.Statuses.ONGOING)),n.updateElapsed(o.Statuses.ONGOING);break;case o.Statuses.PAUSED:n.previousStatus!==e&&(n.updateMessage(""),n.toggleVoting(!0),n.toggleBadges(!0),n.updateStatusHeader(o.Statuses.PAUSED),n.updateElapsed(o.Statuses.PAUSED)),n.updateThumbs();break;default:n.toggleBadges(!1),n.toggleVoting(!1),n.updateMessage(l.NONE)}n.previousStatus=e}}),this.updateElapsed=function(){var e=c(function*(e){if(e===o.Statuses.ONGOING){var t=yield n.boardStorage.getDiscussionStartedAt(n.t),i=(yield n.boardStorage.getDiscussionPreviousElapsed(n.t))||0,s=t?Date.now()-t:0;n.badgeElapsed.classList.add(e.toLowerCase()),n.badgeElapsed.classList.remove(o.Statuses.PAUSED.toLowerCase()),n.badgeElapsed.textContent="Ongoing → "+(0,r.default)(s+i)}else{var a=yield n.cardStorage.getDiscussionElapsed(n.t);n.badgeElapsed.classList.add(e.toLowerCase()),n.badgeElapsed.classList.remove(o.Statuses.ONGOING.toLowerCase()),n.badgeElapsed.textContent="Elapsed → "+(0,r.default)(a)}});return function(t){return e.apply(this,arguments)}}(),this.updateStatusHeader=function(e){e===o.Statuses.PAUSED?n.badgeHeaderElapsed.innerText="Should we keep discussing?":n.badgeHeaderElapsed.innerText="Status"},this.updateThumbs=c(function*(){var e=(yield n.cardStorage.getDiscussionThumbs(n.t))||{},t=n.t.getContext().member,i=e[t];Object.keys(o.Thumbs).forEach(function(t){var r=Object.keys(e).filter(function(n){return e[n]===o.Thumbs[t]}).length,s=n.w.document.querySelector(".voting-"+t.toLowerCase());s.innerText=r,t===i?s.classList.add("own"):s.classList.remove("own")})}),this.handleThumbs=function(){var e=c(function*(e){var t=(yield n.cardStorage.getDiscussionThumbs(n.t))||{},i=n.t.getContext().member;t[i]===e?delete t[i]:t[i]=e,n.cardStorage.saveDiscussionThumbs(n.t,t)});return function(t){return e.apply(this,arguments)}}(),this.toggleBadges=function(e){n.badges.style.display=e?"grid":"none"},this.toggleVoting=function(e){n.voting.forEach(function(t){t.style.visibility=e?"visible":"hidden"})},this.updateMessage=function(e){n.message.innerText=e,n.message.style.display="block"},this.w=t,this.t=t.TrelloPowerUp.iframe(),this.Promise=t.TrelloPowerUp.Promise,this.boardStorage=new s.default,this.cardStorage=new a.default,this.badges=this.w.document.querySelector(".badges"),this.badgeElapsed=this.w.document.querySelector(".badge-elapsed"),this.badgeHeaderElapsed=this.w.document.querySelector(".badge-header-elapsed"),this.message=this.w.document.querySelector(".message"),this.voting=this.w.document.querySelectorAll(".voting")}return i(e,[{key:"init",value:function(){var e=c(function*(){this.monitorDiscussion(),this.intervalId=setInterval(this.monitorDiscussion,1e3)});return function(){return e.apply(this,arguments)}}()}]),e}();t.default=d},e3096d48ecabaf9e4101:function(e,t,n){var i;!function(t){"use strict";function r(e,t){t=t||2;var n,i=Number(e)<0,r=e.toString();return i&&(r=r.slice(1)),n=t-r.length+1,r=new Array(n).join("0").concat(r),(i?"-":"")+r}void 0===(i=function(){return r}.call(t,n,t,e))||(e.exports=i)}(this)},e33b6889d58ae4e02528:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Thumbs=t.Statuses=void 0;var i=a(n("3454881a11013d365bc6")),r=a(n("913e7ad1aff3f4c0d6e7")),s=a(n("bb7e453c13d4f6baee8c"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function i(r,s){try{var a=t[r](s),o=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(o).then(function(e){i("next",e)},function(e){i("throw",e)});e(o)}("next")})}}var c=t.Statuses={ONGOING:"ONGOING",PAUSED:"PAUSED",ENDED:"ENDED"};t.Thumbs={UP:"UP",DOWN:"DOWN",MIDDLE:"MIDDLE"},t.default=function e(t,n,a){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isOngoingOrPausedForAnotherCard=function(){var e=u(function*(e){var t=yield l.boardStorage.getDiscussionStatus(e),n=yield l.boardStorage.getDiscussionCardId(e);return[c.ONGOING,c.PAUSED].includes(t)&&n!==e.getContext().card});return function(t){return e.apply(this,arguments)}}(),this.isOngoingFor=function(){var e=u(function*(e){var t=yield l.cardStorage.getDiscussionStatus(e);return c.ONGOING===t});return function(t){return e.apply(this,arguments)}}(),this.isPausedFor=function(){var e=u(function*(e){var t=yield l.cardStorage.getDiscussionStatus(e);return c.PAUSED===t});return function(t){return e.apply(this,arguments)}}(),this.getElapsed=function(e){return l.cardStorage.getDiscussionElapsed(e)},this.updateElapsed=function(){var e=u(function*(e){var t=yield l.boardStorage.getDiscussionStartedAt(e);Date.now()-t>l.maxDiscussionDuration?l.pause(e):l.saveElapsed(e)});return function(t){return e.apply(this,arguments)}}(),this.saveElapsed=function(){var e=u(function*(e){var t=yield l.boardStorage.getDiscussionStartedAt(e),n=(yield l.boardStorage.getDiscussionPreviousElapsed(e))||0,i=t?Date.now()-t:0;l.cardStorage.saveDiscussionElapsed(e,i+n)});return function(t){return e.apply(this,arguments)}}(),this.start=function(){var e=u(function*(e){var t;l.boardStorage.writeMultiple(e,(o(t={},i.default.DISCUSSION_STATUS,c.ONGOING),o(t,i.default.DISCUSSION_CARD_ID,e.getContext().card),o(t,i.default.DISCUSSION_STARTED_AT,Date.now()),o(t,i.default.DISCUSSION_PREVIOUS_ELAPSED,yield l.getElapsed(e)),o(t,i.default.DISCUSSION_INTERVAL_ID,setInterval(l.updateElapsed,5e3,e)),t)),yield l.cardStorage.saveDiscussionStatus(e,c.ONGOING),yield l.cardStorage.deleteDiscussionThumbs(e)});return function(t){return e.apply(this,arguments)}}(),this.pause=function(){var e=u(function*(e){var t,n=yield l.boardStorage.getDiscussionIntervalId(e),r=yield l.boardStorage.getDiscussionCardId(e),s=(yield e.cards("id","name")).find(function(e){return e.id===r}).name;clearInterval(n),l.cardStorage.saveDiscussionStatus(e,c.PAUSED),l.saveElapsed(e),l.boardStorage.writeMultiple(e,(o(t={},i.default.DISCUSSION_STATUS,c.PAUSED),o(t,i.default.DISCUSSION_STARTED_AT,null),o(t,i.default.DISCUSSION_PREVIOUS_ELAPSED,yield l.getElapsed(e)),o(t,i.default.DISCUSSION_INTERVAL_ID,null),t)),l.notifications.play(l.notifications.Types.ELAPSED),l.notifications.show(l.notifications.Types.ELAPSED,s)});return function(t){return e.apply(this,arguments)}}(),this.end=function(){var e=u(function*(e){var t=yield l.boardStorage.getDiscussionIntervalId(e);clearInterval(t);try{yield l.cardStorage.saveDiscussionStatus(e,c.ENDED),yield l.saveElapsed(e),yield l.cardStorage.deleteMultiple(e,[r.default.DISCUSSION_THUMBS]),yield l.boardStorage.deleteMultiple(e,[i.default.DISCUSSION_STATUS,i.default.DISCUSSION_CARD_ID,i.default.DISCUSSION_STARTED_AT,i.default.DISCUSSION_PREVIOUS_ELAPSED,i.default.DISCUSSION_INTERVAL_ID])}catch(e){throw new Error(e)}});return function(t){return e.apply(this,arguments)}}(),this.w=t,this.baseUrl=n,this.notifications=new s.default(this.w,this.baseUrl),this.maxDiscussionDuration=a,this.boardStorage=new i.default,this.cardStorage=new r.default}}});
//# sourceMappingURL=discussion_ui.2f715bdeb68ff633a264.js.map