(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08a2d661"],{1946:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dialog-container",{staticClass:"insert-detail",attrs:{showFooter:!1,title:"图片详情",width:"1000px",visible:t.visible,appendBody:!0,top:"9vh"},on:{"update:visible":function(e){t.visible=e},closed:t.handleClosed}},[n("div",{staticClass:"height: 50vh;"},[n("div",{staticClass:"result-sty"},[n("span",{staticStyle:{"margin-right":"15px"}},[t._v("识别结果纠错: ")]),n("el-radio-group",{on:{change:t.handleResult},model:{value:t.distinguishResult,callback:function(e){t.distinguishResult=e},expression:"distinguishResult"}},[n("el-radio",{attrs:{label:1}},[t._v("正常")]),n("el-radio",{attrs:{label:0}},[t._v("异常")])],1)],1),t.visible?n("canvas-img",{attrs:{fontSize:"24",picUrl:t.item.resultPhoto||"",resultMark:t.item.remark?JSON.parse(t.item.remark):[]},on:{canvasClick:function(e){return t.viewBigpicture(t.item.resultPhoto)}}}):t._e()],1)])},a=[],s=n("d6a8"),o=n("3709"),c={components:{CanvasImg:s["a"]},data:function(){return{visible:!1,item:null,distinguishResult:null}},methods:{open:function(t){this.distinguishResult=Number(t.personCheck),this.item=t,this.visible=!0},handleResult:function(){var t=this;if(this.item&&this.item.id){var e={id:this.item.id,personCheck:this.distinguishResult};o["a"].confirmResult(e).then((function(e){!0===e.data&&t.$message({type:"success",message:"修正成功"}),t.$emit("emitLookHistoryInfo"),t.$emit("emitUpdateData")})).finally((function(){}))}else this.$message({type:"warning",message:"请等待识别结果"})},handleClosed:function(){this.item=null}}},r=c,u=(n("9260"),n("2877")),l=Object(u["a"])(r,i,a,!1,null,"a20d07a0",null);e["default"]=l.exports},3709:function(t,e,n){"use strict";var i=n("9bd2"),a=VUE_APP_API_STATION,s=VUE_APP_API;e["a"]={basicInfo:function(t){return Object(i["a"])({url:"".concat(a,"/dynamicMonControl/getRawBasicBySpaceId"),method:"post",params:t})},querySpaceIns:function(t){return Object(i["a"])({url:"".concat(s,"/device/space/queryRawIns"),method:"post",data:t})},basicInfoRow:function(t){return Object(i["a"])({url:"".concat(s,"/device/raw/getRawBasicAndRawGroup/").concat(t),method:"get"})},confirmResult:function(t){return Object(i["a"])({url:"".concat(a,"/dynamicMonControl/confirmResult"),method:"post",params:t})},inspectSingleHst:function(t){return Object(i["a"])({url:"".concat(a,"/dynamicMonControl/inspectSingleHst"),method:"post",data:t})},startIdentificate:function(t){return Object(i["a"])({url:"".concat(a,"/dynamicMonControl/startIdetity"),method:"post",params:t})},getIdentityStatus:function(t){return Object(i["a"])({url:"".concat(a,"/dynamicMonControl/getIdentityStatus"),method:"post",params:t})},initializeIdentityStatus:function(t){return Object(i["a"])({url:"".concat(a,"/dynamicMonControl/initializeIdentityStatus"),method:"post",params:t})},getLatestRecord:function(t){return Object(i["a"])({url:"".concat(a,"/dynamicMonControl/getLatestRecord/").concat(t),method:"post"})},defectAnalysis:function(t){return Object(i["a"])({url:"".concat(a,"/inspection/defect/defectAnalysis/").concat(t),method:"get"})}}},9260:function(t,e,n){"use strict";n("b4a0")},b4a0:function(t,e,n){}}]);