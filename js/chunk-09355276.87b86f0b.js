(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09355276"],{"01c8":function(e,t,a){"use strict";a("868e")},"08b7":function(e,t,a){},"1eb8":function(e,t,a){},"209d":function(e,t,a){},2441:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"site-nav"},[a("div",{staticClass:"main-part"},[a("router-link",{staticClass:"logo",attrs:{to:{name:"homepage"}}},[a("icon",{attrs:{"icon-name":"logo"}})],1),a("section",{staticClass:"nav-container"},[a("router-link",{staticClass:"nav-link link-group",class:{active:["homepage","tweet"].includes(e.$route.name)},attrs:{to:{name:"homepage"}}},[a("icon",{attrs:{"icon-name":"home","icon-class":"mr-20"}}),a("div",{staticClass:"link-text"},[e._v(" 首頁 ")])],1),a("router-link",{staticClass:"nav-link link-group",class:{active:["user-tweets","user-replies","user-likes"].includes(e.$route.name)}&&e.$route.params.id===e.currentUser.id,attrs:{to:{name:"user-main",params:{id:e.currentUser.id}}}},[a("icon",{attrs:{"icon-name":"user","icon-class":"mr-20"}}),a("div",{staticClass:"link-text"},[e._v(" 個人資料 ")])],1),a("router-link",{staticClass:"nav-link link-group",attrs:{to:{name:"user-setting"}}},[a("icon",{attrs:{"icon-name":"setting","icon-class":"mr-20"}}),a("div",{staticClass:"link-text"},[e._v(" 設定 ")])],1)],1),a("button",{staticClass:"btn-control btn-tweet",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.openModal.apply(null,arguments)}}},[e._v(" 推文 ")])],1),a("div",{staticClass:"link-group logout-part"},[a("icon",{attrs:{"icon-name":"logout","icon-class":"mr-20"}}),a("div",{staticClass:"link-text",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.logout.apply(null,arguments)}}},[e._v(" 登出 ")])],1),a("portal",{attrs:{to:"modals"}},[a("TweetModal",{attrs:{order:1,show:e.show},on:{close:e.closeModal}})],1)],1)},s=[],n=a("5530"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[a("div",{staticClass:"modal show tweet-modal",attrs:{tabindex:"-1",role:"dialog"},on:{click:function(t){return t.target!==t.currentTarget?null:e.close.apply(null,arguments)}}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("icon",{staticClass:"icon-close cursor-pointer",attrs:{"icon-name":"cross"},nativeOn:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.close.apply(null,arguments)}}})],1),a("div",{staticClass:"modal-body"},[a("TweetBox",{attrs:{"error-message":e.errorMessage},on:{"after-tweet":function(t){return e.handleNewTweet(t)},"update-error":function(t){e.errorMessage=t}}})],1)])])]),a("div",{staticClass:"modal-backdrop show"})])])},o=[],c=(a("b0c0"),a("a9e3"),a("769e")),u={components:{TweetBox:c["a"]},props:{show:{type:Boolean,required:!0,default:!1}},data:function(){return{errorMessage:""}},watch:{show:function(e,t){!1===e&&(this.errorMessage="")}},methods:{close:function(){this.$emit("close")},handleNewTweet:function(e){var t=this.$route;"homepage"===t.name||"user-tweets"===t.name&&e.userData.id===Number(t.params.id)?(this.$store.commit("produceTweet",e),this.close()):(this.close(),this.$router.push({name:"homepage"}))}}},l=u,d=(a("59f9"),a("2877")),p=Object(d["a"])(l,i,o,!1,null,"c8c3e3aa",null),m=p.exports,f=a("2f62"),h={components:{TweetModal:m},data:function(){return{show:!1}},computed:Object(n["a"])({},Object(f["b"])(["currentUser"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push({name:"user-sign-in"})},openModal:function(){this.show=!0},closeModal:function(){this.show=!1}}},g=h,v=(a("d9e1"),Object(d["a"])(g,r,s,!1,null,"07c38a44",null));t["a"]=v.exports},"26da":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"input-group"},[a("span",{staticClass:"input-container"},[a("span",{staticClass:"prefix"},[e._v(e._s(e.prefix))]),a("input",{class:{invalid:!e.isValid},attrs:{type:e.inputType,minlength:e.minlength,maxlength:e.maxlength,name:e.name,required:e.required},domProps:{value:e.value},on:{input:function(t){t.stopPropagation(),t.preventDefault(),e.value=t.target.value},change:function(t){return t.stopPropagation(),t.preventDefault(),e.inputChange(t.target.value)}}}),a("div",{staticClass:"input-status-bar"})]),a("label",{staticClass:"input-label"},[e._v(e._s(e.label))]),a("div",{staticClass:"input-status-info"},[a("div",{staticClass:"text",attrs:{title:e.errorMessage}},[e._v(" "+e._s(e.errorMessage)+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showLimit&&e.maxlength>0,expression:"showLimit && (maxlength > 0)"}],staticClass:"limit"},[e._v(" "+e._s(e.limitText)+" ")])])])},s=[],n=(a("a9e3"),a("caad"),a("99af"),a("498a"),{props:{prefix:{type:String,required:!1,default:""},label:{type:String,required:!0,default:""},inputType:{type:String,required:!0,default:"text"},minlength:{type:Number,required:!1,default:-1},maxlength:{type:Number,required:!1,default:-1},name:{type:String,required:!0,default:""},required:{type:Boolean,required:!1,default:!1},initialValue:{type:[String,Number],required:!1,default:""},errorMessage:{type:String,required:!1,default:""},showLimit:{type:Boolean,required:!1,default:!1},doTrim:{type:Boolean,required:!1,default:!0}},data:function(){return{value:"",isValid:!0}},computed:{limitText:function(){var e=["text","password"];return e.includes(this.inputType)&&this.maxlength>0?"".concat(this.value.length,"/").concat(this.maxlength):""}},watch:{initialValue:function(e){this.value=e},errorMessage:function(e){this.isValid=""===e}},created:function(){this.value=this.initialValue},methods:{inputChange:function(e){"string"===typeof e&&!0===this.doTrim&&(this.value=e.trim()),this.$emit("input-change",this.value)}}}),i=n,o=(a("f061"),a("2877")),c=Object(o["a"])(i,r,s,!1,null,"675fcf95",null);t["a"]=c.exports},3880:function(e,t,a){"use strict";a("1eb8")},"498a":function(e,t,a){"use strict";var r=a("23e7"),s=a("58a8").trim,n=a("c8d2");r({target:"String",proto:!0,forced:n("trim")},{trim:function(){return s(this)}})},"59f9":function(e,t,a){"use strict";a("8402")},6783:function(e,t,a){"use strict";a("a4d3"),a("e01a");var r=a("2fa3");t["a"]={get:function(e){var t=e.tweetId;return r["b"].get("/tweets/".concat(t))},getAll:function(){return r["b"].get("/tweets")},getReplies:function(e){var t=e.tweetId;return r["b"].get("/tweets/".concat(t,"/replies"))},post:function(e){var t=e.description;return r["b"].post("/tweets",{description:t})},postReply:function(e){var t=e.tweetId,a=e.comment;return r["b"].post("/tweets/".concat(t,"/replies"),{comment:a})},like:function(e){var t=e.tweetId;return r["b"].post("/tweets/".concat(t,"/like"))},unlike:function(e){var t=e.tweetId;return r["b"].post("/tweets/".concat(t,"/unlike"))}}},"769e":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"tweet-input-box"},[a("section",{staticClass:"avatar-part"},[a("UserThumbnail",{attrs:{"initial-user":e.currentUser}})],1),a("section",{staticClass:"input-part"},[a("textarea",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.description,expression:"description",modifiers:{trim:!0,lazy:!0}}],attrs:{placeholder:"有什麼新鮮事？",maxlength:"140"},domProps:{value:e.description},on:{change:function(t){e.description=t.target.value.trim()},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),a("div",{staticClass:"control-part"},[a("span",{staticClass:"error-message",attrs:{title:"error"}},[e._v(e._s(e.error))]),a("button",{staticClass:"btn-control btn-tweet",attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.tweet.apply(null,arguments)}}},[e._v(" 推文 ")])])])])},s=[],n=a("1da1"),i=a("5530"),o=(a("96cf"),a("a4d3"),a("e01a"),a("d9e2"),a("d092")),c=a("2708"),u=a("6783"),l=a("2f62"),d=a("2fa3"),p={components:{UserThumbnail:o["a"]},mixins:[c["c"]],props:{errorMessage:{type:String,required:!1,default:""}},data:function(){return{description:"",error:"",isProcessing:!1}},computed:Object(i["a"])({},Object(l["b"])(["currentUser"])),watch:{errorMessage:function(e){console.log(e),this.error=e}},methods:{tweet:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a=e.checkTweet(e.description),r=a.status,s=a.message,e.error="",!1!==r){t.next=7;break}return e.error=s,e.$emit("update-error",e.error),t.abrupt("return");case 7:return e.$emit("update-error",e.error),e.isProcessing=!0,t.next=11,u["a"].post({description:e.description});case 11:if(n=t.sent,i=n.data,"success"===i.status){t.next=15;break}throw new Error(i.status);case 15:o=i.tweetData,e.$emit("after-tweet",{id:o.id,userData:e.currentUser,description:e.description,replyAmount:0,likeAmount:0,userLiked:!1,createdAt:new Date}),e.description="",t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](0),console.log(t.t0),d["a"].fire({icon:"error",title:"發推失敗，請稍後再試"});case 24:return t.prev=24,e.isProcessing=!1,t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[0,20,24,27]])})))()}}},m=p,f=(a("a88e"),a("2877")),h=Object(f["a"])(m,r,s,!1,null,"f15bbad6",null);t["a"]=h.exports},"7bd9":function(e,t,a){},8402:function(e,t,a){},"868e":function(e,t,a){},a88e:function(e,t,a){"use strict";a("08b7")},c8d2:function(e,t,a){var r=a("5e77").PROPER,s=a("d039"),n=a("5899"),i="​᠎";e.exports=function(e){return s((function(){return!!n[e]()||i[e]()!==i||r&&n[e].name!==e}))}},ce99:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("SiteNav"),a("section",{staticClass:"setting-container"},[a("div",{staticClass:"page-header"},[e._v(" 帳戶設定 ")]),a("form",{staticClass:"setting-form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._l(e.inputKeys,(function(t){return a("GeneralInput",e._b({key:t,attrs:{"initial-value":e.data[t],name:t,"error-message":e.error[t]},on:{"input-change":function(a){e.data[t]=a}}},"GeneralInput",e.config[t],!1))})),a("button",{staticClass:"btn-submit btn-control",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" 儲存 ")])],2)])],1)},s=[],n=a("1da1"),i=a("5530"),o=(a("96cf"),a("b0c0"),a("ac1f"),a("00b4"),a("2441")),c=a("26da"),u=a("4cce"),l=a("2708"),d=a("2fa3"),p=a("2f62"),m=["account","name","email","password","passwordCheck"],f={account:{label:"帳號",inputType:"text",minlength:1,maxlength:20,required:!0,prefix:"@"},name:{label:"名稱",inputType:"text",maxlength:50},email:{label:"Email",inputType:"email",required:!0},password:{label:"密碼",inputType:"password",minlength:5,maxlength:20,required:!0},passwordCheck:{label:"密碼確認",inputType:"password",minlength:5,maxlength:20,required:!0}},h={components:{SiteNav:o["a"],GeneralInput:c["a"]},mixins:[l["c"]],data:function(){return{data:{account:"",name:"",email:"",password:"",passwordCheck:""},error:{account:"",name:"",email:"",password:"",passwordCheck:""},inputKeys:m,config:f,isProcessing:!1}},computed:Object(i["a"])({},Object(p["b"])(["currentUser"])),watch:{"$store.state.currentUser":{handler:function(e,t){var a=e.account,r=e.name,s=e.email;this.data=Object(i["a"])(Object(i["a"])({},this.data),{},{account:a,name:r,email:s})},deep:!0,immediate:!0}},methods:{handleSubmit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,s,n,o,c,l,p,m,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,s=!0,t.error=Object(i["a"])(Object(i["a"])({},t.error),{},{account:"",name:"",email:"",password:"",passwordCheck:""}),n=t.checkAccount(t.data.account),a=n.status,r=n.message,!1===a&&(t.error.account=r,s=!1),o=t.checkName(t.data.name),a=o.status,r=o.message,!1===a&&(t.error.name=r,s=!1),c=t.checkEmail(t.data.email),a=c.status,r=c.message,!1===a&&(t.error.email=r,s=!1),l=t.checkPassword(t.data.password),a=l.status,r=l.message,!1===a&&(t.error.password=r,s=!1),p=t.checkPassword(t.data.passwordCheck),a=p.status,r=p.message,!1===a?(t.error.passwordCheck=r,s=!1):t.data.password!==t.data.passwordCheck&&(t.error.passwordCheck="密碼不一致",s=!1),!1!==s){e.next=25;break}return e.abrupt("return");case 25:return t.isProcessing=!0,e.next=28,u["a"].updateUserSetting({userId:t.currentUser.id,account:t.data.account,name:t.data.name,email:t.data.email,password:t.data.password});case 28:if(m=e.sent,f=m.data,"success"===f.status){e.next=39;break}if(!/帳號/.test(f.message)){e.next=34;break}return t.error.account=f.message,e.abrupt("return");case 34:if(!/信箱/.test(f.message)){e.next=37;break}return t.error.email=f.message,e.abrupt("return");case 37:return t.error.account=f.message,e.abrupt("return");case 39:d["a"].fire({icon:"success",title:"成功修改使用者設定"}),t.$store.commit("setCurrentUser",{account:t.data.account,name:t.data.name,email:t.data.email}),t.data.password="",t.data.passwordCheck="",e.next=48;break;case 45:e.prev=45,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:"無法修改使用者設定，請稍後再試"});case 48:return e.prev=48,t.isProcessing=!1,e.finish(48);case 51:case"end":return e.stop()}}),e,null,[[0,45,48,51]])})))()}}},g=h,v=(a("3880"),a("2877")),w=Object(v["a"])(g,r,s,!1,null,"afa14792",null);t["default"]=w.exports},d092:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{staticClass:"photo-container",attrs:{to:{name:"user-main",params:{id:e.user.id}}}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.user.avatar,expression:"user.avatar"}],attrs:{src:e.user.avatar},on:{error:function(t){e.user.avatar=""}}})])},s=[],n=a("5530"),i={props:{initialUser:{type:Object,required:!0}},data:function(){return{user:{id:-1,avatar:""}}},watch:{initialUser:function(e){this.user=Object(n["a"])(Object(n["a"])({},this.user),e)}},created:function(){this.user=Object(n["a"])(Object(n["a"])({},this.user),this.initialUser)}},o=i,c=(a("01c8"),a("2877")),u=Object(c["a"])(o,r,s,!1,null,"34e062da",null);t["a"]=u.exports},d9e1:function(e,t,a){"use strict";a("209d")},f061:function(e,t,a){"use strict";a("7bd9")}}]);
//# sourceMappingURL=chunk-09355276.87b86f0b.js.map