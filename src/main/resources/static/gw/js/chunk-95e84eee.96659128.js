(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95e84eee","chunk-48518824"],{3547:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"login",staticClass:"page-login",on:{keyup:e.submit1}},[o("div",{staticClass:"page-login--layer"},[o("div",{staticClass:"title"},[e._v(e._s(e.VUE_APP_TITLE))]),o("div",{staticClass:"page-login-big-box"},[e.flag?o("div",{staticClass:"page-login-box"},[o("el-form",{ref:"loginForm",staticClass:"page-login--content",attrs:{"label-position":"top",rules:e.rules,model:e.formLogin,size:"default"}},[o("div",{staticClass:"login-icon"},[o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{class:e.bgWhiteUs?"bgColor2":"bgColor1",style:e.bgWhiteUs?e.bgColor2:e.bgColor1,attrs:{type:"text",placeholder:"用户名"},model:{value:e.formLogin.username,callback:function(t){e.$set(e.formLogin,"username",t)},expression:"formLogin.username"}})],1),o("i",{class:e.bgWhiteUs?"img-icon fa fa-user":"img-icon fa fa-user img-icon-bg"})],1),o("div",{staticClass:"login-icon"},[o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{class:e.bgWhitePw?"bgColor2":"bgColor1",style:e.bgWhitePw?e.bgColor2:e.bgColor1,attrs:{type:"password",placeholder:"密码"},model:{value:e.formLogin.password,callback:function(t){e.$set(e.formLogin,"password",t)},expression:"formLogin.password"}})],1),o("i",{class:e.bgWhitePw?"img-icon fa fa-unlock-alt":"img-icon fa fa-unlock img-icon-bg"}),o("d2-icon",{staticStyle:{position:"absolute",display:"none"},attrs:{icon:"fa fa-unlock-alt"}})],1),o("el-button",{staticClass:"button-login",attrs:{loading:e.loginLoading},on:{click:e.submit}},[o("span",{staticClass:"loginText"},[e._v("登")]),e._v("录")])],1)],1):o("div",{staticClass:"update"},[o("div",{staticClass:"update-top"},[e._v("\n          你的浏览器版本太低不能很好地兼容本系统，建议选择安装如下浏览器：\n        ")]),o("div",{staticClass:"update-bottom"},[o("span",{on:{click:function(t){return e.handleSelectTheme("64")}}},[e._v("Chorme 64位")]),o("span",{on:{click:function(t){return e.handleSelectTheme("32")}}},[e._v("Chorme 32位")])])])])])])},i=[],r=o("2f62"),s=o("f0b0");function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var u={data:function(){return{VUE_APP_TITLE:VUE_APP_TITLE,flag:!0,bgWhiteUs:!1,bgWhitePw:!1,bgColor1:{color:"#000"},bgColor2:{color:"#006E6B !important"},lineColor1:{background:"rgba(0,110,107,1)"},lineColor2:{background:"#006E6B"},formLogin:{username:"",password:""},loginLoading:!1,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:s["a"],trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:s["a"],trigger:"blur"}]}}},computed:{un:function(){return this.formLogin.username},pw:function(){return this.formLogin.password}},watch:{un:function(e,t){this.bgWhiteUs=!!e},pw:function(e,t){this.bgWhitePw=!!e}},beforeDestroy:function(){},created:function(){if(this.getChromeVersion()){var e=this.getChromeVersion();this.flag=!(e<50)}else this.dialogVisible=!0,this.flag=!1},methods:l(l({},Object(r["b"])("d2admin/account",["login"])),{},{getChromeVersion:function(){for(var e=navigator.userAgent.split(" "),t="",o=0;o<e.length;o++)/chrome/i.test(e[o])&&(t=e[o]);return!!t&&Number(t.split("/")[1].split(".")[0])},handleSelectTheme:function(e){if("64"===e){var t=SERVER_ADDR+"/64.exe",o=document.createElement("a");o.style.display="none",o.href=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(t)}else{var n=SERVER_ADDR+"/32.exe",i=document.createElement("a");i.style.display="none",i.href=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(n)}},handleUserBtnClick:function(e){this.formLogin.username=e.username,this.formLogin.password=e.password,this.submit()},submit1:function(e){e=window.event||e,"/login"!==this.$route.path||"Enter"!==e.code&&"NumpadEnter"!==e.code||this.submit()},submit:function(){var e=this;this.$refs.loginForm.validate((function(t){t?(e.loginLoading=!0,e.login({username:e.formLogin.username,wlwMm:e.$md5(e.formLogin.username+e.formLogin.password)}).then((function(e){console.log("then")})).finally((function(){console.log(111111),e.loginLoading=!1}))):e.loginLoading=!1}))}})},g=u,f=(o("60d0"),o("2877")),d=Object(f["a"])(g,n,i,!1,null,null,null);t["default"]=d.exports},3769:function(e,t,o){},"60d0":function(e,t,o){"use strict";o("3769")},"99c7":function(e,t,o){"use strict";o.r(t);var n=o("3547");t["default"]=n["default"]},f0b0:function(e,t,o){"use strict";function n(e,t,o){var n=/^[^\s]*$/;if(!n.test(t))return o(new Error("不能有空格"));o()}o.d(t,"a",(function(){return n}))}}]);