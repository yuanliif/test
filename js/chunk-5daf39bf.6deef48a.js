(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5daf39bf"],{"26da":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"input-group"},[r("span",{staticClass:"input-container"},[r("span",{staticClass:"prefix"},[t._v(t._s(t.prefix))]),r("input",{class:{invalid:!t.isValid},attrs:{type:t.inputType,minlength:t.minlength,maxlength:t.maxlength,name:t.name,required:t.required},domProps:{value:t.value},on:{input:function(e){e.stopPropagation(),e.preventDefault(),t.value=e.target.value},change:function(e){return e.stopPropagation(),e.preventDefault(),t.inputChange(e.target.value)}}}),r("div",{staticClass:"input-status-bar"})]),r("label",{staticClass:"input-label"},[t._v(t._s(t.label))]),r("div",{staticClass:"input-status-info"},[r("div",{staticClass:"text",attrs:{title:t.errorMessage}},[t._v(" "+t._s(t.errorMessage)+" ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showLimit&&t.maxlength>0,expression:"showLimit && (maxlength > 0)"}],staticClass:"limit"},[t._v(" "+t._s(t.limitText)+" ")])])])},n=[],s=(r("a9e3"),r("caad"),r("99af"),r("498a"),{props:{prefix:{type:String,required:!1,default:""},label:{type:String,required:!0,default:""},inputType:{type:String,required:!0,default:"text"},minlength:{type:Number,required:!1,default:-1},maxlength:{type:Number,required:!1,default:-1},name:{type:String,required:!0,default:""},required:{type:Boolean,required:!1,default:!1},initialValue:{type:[String,Number],required:!1,default:""},errorMessage:{type:String,required:!1,default:""},showLimit:{type:Boolean,required:!1,default:!1},doTrim:{type:Boolean,required:!1,default:!0}},data:function(){return{value:"",isValid:!0}},computed:{limitText:function(){var t=["text","password"];return t.includes(this.inputType)&&this.maxlength>0?"".concat(this.value.length,"/").concat(this.maxlength):""}},watch:{initialValue:function(t){this.value=t},errorMessage:function(t){this.isValid=""===t}},created:function(){this.value=this.initialValue},methods:{inputChange:function(t){"string"===typeof t&&!0===this.doTrim&&(this.value=t.trim()),this.$emit("input-change",this.value)}}}),i=s,u=(r("f061"),r("2877")),o=Object(u["a"])(i,a,n,!1,null,"675fcf95",null);e["a"]=o.exports},"498a":function(t,e,r){"use strict";var a=r("23e7"),n=r("58a8").trim,s=r("c8d2");a({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},5684:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARlSURBVHgB7VlbUhQxFD0ZeVTJzyyhXYG6AmEFwgqAUtA/YAXAChj+KNECVgCuAFyB4w7aHYyfKBDvvQkwj9w8eoYv5lRR03TSSU7uMzfAFFNM8SxgMEHYj1iknzdo4Z38WrRphrZrRI+ea3qqcYcf9Ns1X3GFCWFsInaNFjqHLVro9sOi81HTN1e4xr45FZKN0ZiIJ7BLj9uYBAxOxyHUiIjdIAkAew0kkEJNkt03x0SqEMVE7CYOEJMC2wLpP9nJL7KFLv2xbfTEXl6Q3QDvAfmNoWO+YAcFyCYiqjSLc/piMdxBDPcMC7gwHSGjj/UZFRE8R4zQLVbMN1wgE/lENnCpkOBd32nigUi6e/SzG2iqSSKvUICZnE5enRZHG3BI+hxUM9n1GyyTirWJ6FWIKC12j8ZmDJJpYQmFSEqEJLFGvU4GX4rOr4QWRypYkTdj4stDM7FX2iGvNKJ29hNJ2/qNimxODK1YoyzKjIi+JqN9q5B4QyQuMUzCLXBNbCwEg/WHsRdE3YoRJYJ5IVH1valZ7OZo1NcLiVkhUanjkY2JhIdfu/HOxPUqjkKcTQQqEZGG7ZuU1Uknwep0nhVXTNC4gZfYjsaPOZzEyOgSmR+a0NBuHSlRdy4hiUFUPicbHD7isr0Ul2ke1XZ0IrZvMjJU8jCdYLfNEfVL4wVWc7sO2emW1i9IxO9Y5f/lxG5fnQQNjNMGnIGGQTtth6TJCEuk1dfZRlRqXtH3NNqkLqk0ZdRO3dqC34WJGLz2T7VmgMFJypAk4m1vaOISiVgvShtWKUFzadwjSsRn2NVIw+MmDyBGpPeE0ogiYXtBF6ypFh9R9cxzVsmA88HZQUdtZWnrMamACOMG39W2Vr77DCLmQBh3+INCaKrVo13vBps4utoxJOKSwtNEn9g5JBg4NdWq1R2byfA2OrKSQklIrRLpbXhdGpEr6GhKxCWcidNjH86U979DL8NEbqTuFEarYcGBzy9HBRUSTb1MWOW1yF5Dn6CciMU62UW35BNVve7C2hIkwpOqKbMtrDs5EqdqM8UM+0HNvYbVq9ZqA6r7DR1JPfJ21h2HkyQkDWmplZlB9YrYbvyEGIDfkTrRjduXskhA0vRVdS5y148v9JSpmIj/agkhMk6n9+m09zZmE3SGWaY49RMZ6bkUIpgMn4kiziJdRSFb0dRMTm73aTVXFRPFuUS9uMZf2gBtrm1aR2TsNBE2xFu6AhizWu7LSvHTpKVdP36oqBQhq9JIYucrg15pcVkkMCNSYxvIC6Rcev1HTqJw4/JLpq6IxjVbNr6uUtfi+nAluZjxxeqmFXtX0DskQlleMqtkKrjGineVB7JoV+qsh3pVfhHj447GaudLpfxaYYPOEUavZkwEDcqm5XHEuUM2yBqThnPfOxOv/WoQo3ex5AyTAseKBbzS6mfJNWFM+EubPXrkm9wKJXA3vYcUQDsF6X0QkzDLB0h0dnkTVzoq8XKD19PuWu4JrqenmGKKZ4L/1ayJWixLovMAAAAASUVORK5CYII="},"73e7":function(t,e,r){},7696:function(t,e,r){"use strict";var a=r("5530"),n=r("2fa3");e["a"]={userSignUp:function(t){return n["b"].post("/users",Object(a["a"])({},t))},userSignIn:function(t){var e=t.account,r=t.password;return n["b"].post("/users/login",{account:e,password:r})},adminSignIn:function(t){var e=t.account,r=t.password;return n["b"].post("/admin/users/login",{account:e,password:r})}}},"7bd9":function(t,e,r){},"98b3":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"main",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"sign-in-heading"},[r("img",{staticClass:"logo-img",attrs:{src:t.LogoImg}}),r("h1",{staticClass:"sign-in-title"},[t._v(" 登入 Alphitter ")])]),r("div",{staticClass:"sign-in-content"},t._l(t.inputKeys,(function(e){return r("GeneralInput",t._b({key:e,attrs:{name:e,"initial-value":t.data[e],"error-message":t.error[e]},on:{"input-change":function(r){t.data[e]=r}}},"GeneralInput",t.inputConfig[e],!1))})),1),t._m(0),r("div",{staticClass:"other-option"},[r("router-link",{staticClass:"route-control",attrs:{to:"/signup"}},[t._v(" 註冊 Alphitter ")]),r("span",[t._v("·")]),r("router-link",{staticClass:"route-control",attrs:{to:"/admin"}},[t._v(" 後台登入 ")])],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-in-button"},[r("button",{staticClass:"sign-up"},[t._v(" 登入 ")])])}],s=r("1da1"),i=(r("96cf"),r("ac1f"),r("00b4"),r("5684")),u=r.n(i),o=r("7696"),c=r("2fa3"),l=r("26da"),p=r("2708"),d=["account","password"],m={account:{label:"帳號",inputType:"text",minlength:1,maxlength:20,required:!0},password:{label:"密碼",inputType:"password",minlength:5,maxlength:20,required:!0}},f={name:"UserSignIn",components:{GeneralInput:l["a"]},mixins:[p["c"]],data:function(){return{LogoImg:u.a,data:{account:"",password:""},error:{account:"",password:""},inputKeys:d,inputConfig:m}},methods:{handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a,n,s,i,u,l,p,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n=!0,t.error.account="",t.error.password="",s=t.checkAccount(t.data.account),r=s.status,a=s.message,!1===r&&(t.error.account=a,n=!1),i=t.checkPassword(t.data.password),r=i.status,a=i.message,!1===r&&(t.error.password=a,n=!1),!1!==n){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,o["a"].userSignIn({account:t.data.account,password:t.data.password});case 16:if(u=e.sent,l=u.data,"success"===l.status){e.next=27;break}if(!/帳號/.test(l.message)){e.next=22;break}return t.error.account=l.message,e.abrupt("return");case 22:if(!/密碼/.test(l.message)){e.next=25;break}return t.error.password=l.message,e.abrupt("return");case 25:return t.error.account=l.message,e.abrupt("return");case 27:localStorage.setItem("token",l.token),t.$store.commit("setCurrentUser",l.userData),t.$router.push("/home"),e.next=44;break;case 32:if(e.prev=32,e.t0=e["catch"](0),p=e.t0.response,!p){e.next=43;break}if(d=p.data,!/帳號/.test(d.message)){e.next=40;break}return t.error.account=d.message,e.abrupt("return");case 40:if(!/密碼/.test(d.message)){e.next=43;break}return t.error.password=d.message,e.abrupt("return");case 43:c["a"].fire({icon:"error",title:"目前無法登入，請稍後再試"});case 44:case"end":return e.stop()}}),e,null,[[0,32]])})))()}}},g=f,h=(r("e61d"),r("2877")),v=Object(h["a"])(g,a,n,!1,null,"7868d78c",null);e["default"]=v.exports},c8d2:function(t,e,r){var a=r("5e77").PROPER,n=r("d039"),s=r("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!s[t]()||i[t]()!==i||a&&s[t].name!==t}))}},e61d:function(t,e,r){"use strict";r("73e7")},f061:function(t,e,r){"use strict";r("7bd9")}}]);
//# sourceMappingURL=chunk-5daf39bf.6deef48a.js.map