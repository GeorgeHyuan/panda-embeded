(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e57e34c"],{"23a9":function(e,t,i){},"58e8":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("dialog-container",{staticClass:"scoped-dialog dianwei-fenbu",attrs:{visible:e.visible,width:"92%",topHeight:e.topHeight,title:e.pageType+"查看",showFooter:!1},on:{"update:visible":function(t){e.visible=t},closeDialog:e.close,closed:e.handleClosed}},[i("page",{ref:"page",attrs:{pageType:e.pageType,pageId:e.spaceId}})],1)},n=[],a=i("9192"),o={components:{page:a["default"]},data:function(){return{visible:!1,spaceId:"",pageType:"",topHeight:""}},methods:{open:function(e,t){var i=this;this.visible=!0,this.pageType=t,this.spaceId=e,this.$nextTick((function(){i.topHeight="5vh"}))},close:function(){this.handleClosed()},handleClosed:function(){this.visible=!1,this.pageType="",this.spaceId=""}}},c=o,p=(i("c951"),i("2877")),l=Object(p["a"])(c,s,n,!1,null,null,null);t["default"]=l.exports},c951:function(e,t,i){"use strict";i("23a9")}}]);