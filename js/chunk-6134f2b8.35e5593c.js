(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6134f2b8"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("fb6a"),a("d3b7"),a("b0c0"),a("a630"),a("3ca3"),a("ac1f"),a("00b4");var r=a("6b75");function n(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r["a"])(t,e):void 0}}},"13a3":function(t,e,a){},"1d56":function(t,e,a){},"1e95":function(t,e,a){"use strict";a("1d56")},"223b":function(t,e,a){},2797:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("div",{staticClass:"modal show reply-modal",attrs:{tabindex:"-1",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.close.apply(null,arguments)}}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("icon",{staticClass:"icon-close cursor-pointer",attrs:{"icon-name":"cross"},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.close.apply(null,arguments)}}})],1),a("div",{staticClass:"modal-body"},[a("section",{staticClass:"tweet-container"},[a("section",{staticClass:"avatar-part"},[a("UserThumbnail",{attrs:{"initial-user":t.tweet.userData?t.tweet.userData:{}}}),a("div",{staticClass:"vertical-bar"})],1),a("section",{staticClass:"content-part"},[a("div",{staticClass:"title-part"},[a("div",{staticClass:"user-name",attrs:{title:t.tweet.userData?t.emptyName(t.tweet.userData.name,t.tweet.userData.account):""}},[t._v(" "+t._s(t.tweet.userData?t.emptyName(t.tweet.userData.name,t.tweet.userData.account):"")+" ")]),a("div",{staticClass:"account-and-time"},[t._v(" "+t._s(t._f("addPrefix")(t.tweet.userData?t.tweet.userData.account:""))+"・"+t._s(t._f("timeFormat")(t.tweet.createdAt))+" ")])]),a("div",{staticClass:"description"},[t._v(" "+t._s(t.tweet.description)+" ")]),a("div",{staticClass:"reply-to"},[a("span",{staticClass:"text"},[t._v("回覆")]),a("span",{staticClass:"account"},[t._v(t._s(t._f("addPrefix")(t.tweet.userData?t.tweet.userData.account:"")))])])])]),a("section",{staticClass:"reply-input-box"},[a("section",{staticClass:"avatar-part"},[a("UserThumbnail",{attrs:{"initial-user":t.currentUser}})],1),a("section",{staticClass:"input-part"},[a("textarea",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:t.comment,expression:"comment",modifiers:{trim:!0,lazy:!0}}],attrs:{placeholder:"推你的回覆",maxlength:"140"},domProps:{value:t.comment},on:{change:function(e){t.comment=e.target.value.trim()},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),a("div",{staticClass:"control-part"},[a("span",{staticClass:"error-message",attrs:{title:"error"}},[t._v(t._s(t.error))]),a("button",{staticClass:"btn-control btn-reply",attrs:{disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.reply.apply(null,arguments)}}},[t._v(" 回覆 ")])])])])])])])]),a("div",{staticClass:"modal-backdrop show"})])])},n=[],s=a("1da1"),i=a("5530"),o=(a("96cf"),a("d9e2"),a("b0c0"),a("d092")),c=a("2708"),u=a("6783"),l=a("2f62"),d=a("2fa3"),p={components:{UserThumbnail:o["a"]},mixins:[c["c"],c["b"],c["a"],c["d"],c["e"]],props:{show:{type:Boolean,required:!0,default:!1},tweet:{type:Object,required:!0,default:function(){}}},data:function(){return{comment:"",error:"",isProcessing:!1}},computed:Object(i["a"])({},Object(l["b"])(["currentUser"])),methods:{reply:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,n,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.checkTweet(t.comment),r=a.status,n=a.message,t.error="",!1!==r){e.next=6;break}return t.error=n,e.abrupt("return");case 6:return t.isProcessing=!0,e.next=9,u["a"].postReply({tweetId:t.tweet.id,comment:t.comment});case 9:if(s=e.sent,o=s.data,"success"===o.status){e.next=13;break}throw new Error(o.message);case 13:t.$emit("after-reply",t.tweet.id),console.log(t.tweet),t.handleNewReply({id:(new Date).valueOf(),comment:t.comment,replyerData:Object(i["a"])({},t.currentUser),tweetId:(new Date).valueOf(),tweetOwnerId:t.tweet.userData.id,tweetOwnerAccount:t.tweet.userData.account,createdAt:new Date}),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:"回覆失敗，請稍後再試"});case 21:return e.prev=21,t.isProcessing=!1,e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})))()},handleNewReply:function(t){var e=this.$route;"tweet"===e.name&&(this.$store.commit("produceReply",t),this.close()),this.close()},close:function(){this.comment="",this.error="",this.$emit("close")}}},f=p,m=(a("1e95"),a("2877")),w=Object(m["a"])(f,r,n,!1,null,"37f518cc",null);e["a"]=w.exports},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var r=a("6b75");function n(t){if(Array.isArray(t))return Object(r["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=a("06c5");a("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||s(t)||Object(i["a"])(t)||o()}},"4c78":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"tweet-list"},[a("portal",{attrs:{to:"modals"}},[a("ReplyModal",{attrs:{order:3,show:t.show,tweet:t.modalTweet},on:{"after-reply":function(e){return t.$emit("after-reply",e)},close:t.closeModal}})],1),t._l(t.tweets,(function(e){return a("Tweet",{key:e.id,attrs:{"initial-tweet":e},on:{"open-reply-modal":function(e){return t.openReplyModal(e)}}})})),a("h1",{directives:[{name:"show",rawName:"v-show",value:!1===t.isLoading&&0===t.tweets.length,expression:"isLoading === false && tweets.length === 0"}],staticClass:"default-text"},[t._v(" 尚無推文 ")])],2)},n=[],s=a("b17a"),i=a("2797"),o={components:{Tweet:s["a"],ReplyModal:i["a"]},props:{tweets:{type:Array,required:!0,default:function(){return[]}},isLoading:{type:Boolean,required:!0,default:!0}},data:function(){return{show:!1,modalTweet:{}}},watch:{tweets:{handler:function(t,e){},deep:!0}},methods:{openReplyModal:function(t){this.show=!0,this.modalTweet=t},closeModal:function(){this.show=!1}}},c=o,u=(a("5dd3"),a("2877")),l=Object(u["a"])(c,r,n,!1,null,"55f456f6",null);e["a"]=l.exports},"4df4":function(t,e,a){"use strict";var r=a("da84"),n=a("0366"),s=a("c65b"),i=a("7b0b"),o=a("9bdd"),c=a("e95a"),u=a("68ee"),l=a("07fa"),d=a("8418"),p=a("9a1f"),f=a("35a1"),m=r.Array;t.exports=function(t){var e=i(t),a=u(this),r=arguments.length,w=r>1?arguments[1]:void 0,v=void 0!==w;v&&(w=n(w,r>2?arguments[2]:void 0));var h,b,y,g,k,C,_=f(e),x=0;if(!_||this==m&&c(_))for(h=l(e),b=a?new this(h):m(h);h>x;x++)C=v?w(e[x],x):e[x],d(b,x,C);else for(g=p(e,_),k=g.next,b=a?new this:[];!(y=s(k,g)).done;x++)C=v?o(g,w,[y.value,x],!0):y.value,d(b,x,C);return b.length=x,b}},"5dd3":function(t,e,a){"use strict";a("13a3")},"6b75":function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}a.d(e,"a",(function(){return r}))},"9bdd":function(t,e,a){var r=a("825a"),n=a("2a62");t.exports=function(t,e,a,s){try{return s?e(r(a)[0],a[1]):e(a)}catch(i){n(t,"throw",i)}}},a630:function(t,e,a){var r=a("23e7"),n=a("4df4"),s=a("1c7e"),i=!s((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:n})},b17a:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"tweet-container cursor-pointer",attrs:{to:{name:"tweet",params:{id:t.tweet.id}},custom:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.navigate;return[a("div",{on:{click:r}},[a("section",{staticClass:"avatar-part"},[a("UserThumbnail",{attrs:{"initial-user":t.tweet.userData}})],1),a("section",{staticClass:"content-part"},[a("div",{staticClass:"title-part"},[a("div",{staticClass:"user-name",attrs:{title:t.emptyName(t.tweet.userData.name,t.tweet.userData.account)}},[t._v(" "+t._s(t.emptyName(t.tweet.userData.name,t.tweet.userData.account))+" ")]),a("div",{staticClass:"account-and-time"},[t._v(" "+t._s(t._f("addPrefix")(t.tweet.userData.account))+"・"+t._s(t._f("timeFormat")(t.tweet.createdAt))+" ")])]),a("div",{staticClass:"description"},[t._v(" "+t._s(t.tweet.description)+" ")]),a("div",{staticClass:"control-group"},[a("div",{staticClass:"control-container"},[a("span",{staticClass:"event-area"},[a("icon",{staticClass:"control-icon",attrs:{"icon-name":"reply"},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.openReplyModal.apply(null,arguments)}}}),a("span",{staticClass:"control-statistic"},[t._v(t._s(t._f("numberFormat")(t.tweet.replyAmount)))])],1)]),a("div",{staticClass:"control-container"},[!1===t.tweet.userLiked?a("icon",{staticClass:"control-icon cursor-pointer icon-like",attrs:{"icon-name":"like"},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.like(t.tweet.id)}}}):a("icon",{staticClass:"control-icon cursor-pointer icon-like-checked",attrs:{"icon-name":"like-checked"},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.unlike(t.tweet.id)}}}),a("span",{staticClass:"control-statistic"},[t._v(t._s(t._f("numberFormat")(t.tweet.likeAmount)))])],1)])])])]}}])})},n=[],s=a("1da1"),i=a("5530"),o=(a("96cf"),a("d9e2"),a("d092")),c=a("2708"),u=a("6783"),l=a("2fa3"),d={components:{UserThumbnail:o["a"]},mixins:[c["b"],c["a"],c["d"],c["e"]],props:{initialTweet:{type:Object,required:!0}},data:function(){return{tweet:{},isProcessing:!1}},watch:{initialTweet:{handler:function(t,e){this.tweet=Object(i["a"])(Object(i["a"])({},this.tweet),t)},deep:!0}},created:function(){this.tweet=Object(i["a"])(Object(i["a"])({},this.tweet),this.initialTweet)},methods:{like:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.isProcessing){a.next=3;break}return l["a"].fire({icon:"warning",title:"請稍後再試"}),a.abrupt("return");case 3:return e.isProcessing=!0,a.prev=4,a.next=7,u["a"].like({tweetId:t});case 7:if(r=a.sent,n=r.data,"success"===n.status){a.next=11;break}throw new Error(n.message);case 11:e.tweet.userLiked=!0,e.tweet.likeAmount+=1,a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](4),l["a"].fire({icon:"error",title:"無法like推文，請稍後再試"});case 18:return a.prev=18,e.isProcessing=!1,a.finish(18);case 21:case"end":return a.stop()}}),a,null,[[4,15,18,21]])})))()},unlike:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.isProcessing){a.next=3;break}return l["a"].fire({icon:"warning",title:"請稍後再試"}),a.abrupt("return");case 3:return e.isProcessing=!0,a.prev=4,a.next=7,u["a"].unlike({tweetId:t});case 7:if(r=a.sent,n=r.data,"success"===n.status){a.next=11;break}throw new Error(n.message);case 11:e.tweet.userLiked=!1,e.tweet.likeAmount-=1,a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](4),l["a"].fire({icon:"error",title:"無法unlike推文，請稍後再試"});case 18:return a.prev=18,e.isProcessing=!1,a.finish(18);case 21:case"end":return a.stop()}}),a,null,[[4,15,18,21]])})))()},openReplyModal:function(){this.$emit("open-reply-modal",this.tweet)}}},p=d,f=(a("fe66"),a("2877")),m=Object(f["a"])(p,r,n,!1,null,"c99ac40e",null);e["a"]=m.exports},fe66:function(t,e,a){"use strict";a("223b")}}]);
//# sourceMappingURL=chunk-6134f2b8.35e5593c.js.map