(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47b4110b","chunk-5e415814","chunk-2d0c229d"],{"48ad":function(e,t,l){"use strict";l.r(t),t["default"]={data:function(){this.$createElement;return{data:[],columns:[{title:"序号",key:"",width:60,formatter:function(e,t,l,a){return a+1}},{title:"子任务名称",key:"name",showOverflowTooltip:!0},{title:"摄像头",key:"rawName",showOverflowTooltip:!0},{title:"开始时间",key:"startTime",width:160,showOverflowTooltip:!0},{title:"结束时间",key:"endTime",width:160,showOverflowTooltip:!0},{title:"审核状态",key:"tag",width:80,showOverflowTooltip:!0,component:{render:function(e,t){return"1"===t.tag?e("el-tag",{attrs:{type:"success"}},["正常"]):"0"===t.tag?e("el-tag",{attrs:{type:"danger"}},["异常"]):void 0}}},{title:"分析结果",key:"resultValue",width:"90",showOverflowTooltip:!0,component:{render:function(e,t){var l="";return t.resultMark&&JSON.parse(t.resultMark).map((function(e){l=e.tagName||"",e.properties&&e.properties.map((function(e,t){var a=e.sceneName+e.sceneValueName;l+="\n"+a}))})),"1"===t.resultValue&&"3"===t.desc?e("el-tag",{attrs:{type:"success"}},["正常"]):"0"===t.resultValue?e("el-tag",{attrs:{type:"danger"}},[l||"异常"]):void 0}}}],loading:!1,rowHandle:{width:80,custom:[{emit:"imgOpenFun",text:"查看图片",size:"mini",type:"primary",icon:"el-icon-picture-outline-round",circle:!0,disabled:function(e,t){return!t.resultPic}}]},options:{stripe:!0,height:"310px",border:!0}}}}},5586:function(e,t,l){},"948a":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("dialog-container",{attrs:{title:"任务详情",width:"1200px",height:"400px",visible:e.visible,submitLoading:e.submitLoading,confirmText:"确认","show-footer":!1},on:{"update:visible":function(t){e.visible=t},closed:e.handleClosed,closeDialog:e.close,comfirmDialog:e.comfirmDialog}},[l("div",{staticClass:"dialog-box"},[l("d2-card",{staticClass:"box-card",attrs:{showRightRefreshBtn:!1,showRightMaxBtn:!1}},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("基础信息")])]),l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,disabled:""}},[l("el-form-item",{attrs:{label:"任务名称"}},[l("el-input",{model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),l("el-form-item",{staticClass:"timeTypeSelect2",attrs:{label:"任务类型",prop:"type"}},[l("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.type,callback:function(t){e.$set(e.formInline,"type",t)},expression:"formInline.type"}},e._l(e.taskTypeOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-form-item",{staticClass:"timeTypeSelect",attrs:{label:"执行方式",prop:"execType"}},[l("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.execType,callback:function(t){e.$set(e.formInline,"execType",t)},expression:"formInline.execType"}},e._l(e.implementOptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),1===e.formInline.execType?l("el-form-item",{staticClass:"timeTypeSelect",attrs:{label:"开始时间","label-width":"95px"}},[l("el-input",{model:{value:e.formInline.startTime,callback:function(t){e.$set(e.formInline,"startTime",t)},expression:"formInline.startTime"}})],1):e._e(),2===e.formInline.execType?l("el-form-item",{staticClass:"timeTypeSelect",attrs:{label:"开始时间","label-width":"95px"}},[l("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.execTimeObj.timeType,callback:function(t){e.$set(e.formInline.execTimeObj,"timeType",t)},expression:"formInline.execTimeObj.timeType"}},e._l(e.timeOptions,(function(e){return l("el-option",{key:e.value+"timeOptions",attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),2===e.formInline.timeType?l("el-form-item",{staticClass:"timeSelect"},[l("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.execTimeObj.time,callback:function(t){e.$set(e.formInline.execTimeObj,"time",t)},expression:"formInline.execTimeObj.time"}},e._l(e.weekOptions,(function(e){return l("el-option",{key:e.value+"weekOptions",attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),3===e.formInline.timeType?l("el-form-item",{staticClass:"timeSelect"},[l("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.execTimeObj.time,callback:function(t){e.$set(e.formInline.execTimeObj,"time",t)},expression:"formInline.execTimeObj.time"}},e._l(e.monthOptions,(function(e){return l("el-option",{key:e.value+"monthOptions",attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),2===e.formInline.execType?l("el-form-item",{staticClass:"htimeSelect"},[l("el-time-select",{attrs:{"picker-options":{start:"01:00",step:"00:15",end:"23:45"},placeholder:"选择时间"},model:{value:e.formInline.execTimeObj.htime,callback:function(t){e.$set(e.formInline.execTimeObj,"htime",t)},expression:"formInline.execTimeObj.htime"}})],1):e._e()],1),l("div",{staticClass:"tongji"},[l("span",[e._v("总测点："+e._s(e.formInline.inspectPointTotal||0))]),l("span",[e._v("已巡视："+e._s(e.formInline.inspectPointChecked||0))]),l("span",[e._v("正常："+e._s((e.formInline.inspectPointChecked||0)-(e.formInline.inspectPointAbnormal||0)))]),l("span",[e._v("异常："+e._s(e.formInline.inspectPointAbnormal||0))])])],1),l("d2-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("子任务列表")])]),l("d2-crud",{ref:"d2Crud",attrs:{columns:e.columns,data:e.data,loading:e.loading,options:e.options,"row-handle":e.rowHandle},on:{imgOpenFun:e.imgOpenFun}},[l("div",{attrs:{slot:"header"},slot:"header"},[l("el-form",{staticClass:"d2-form",attrs:{"label-position":"right",inline:!0,"label-width":"90px"},nativeOn:{submit:function(e){e.preventDefault()}}},[l("el-row",[l("el-col",{attrs:{span:20}},[l("el-row",{attrs:{gutter:10}},[l("el-form-item",{attrs:{label:"子任务名称:"}},[l("el-input",{attrs:{clearable:"",placeholder:"请输入子任务名称"},model:{value:e.appname,callback:function(t){e.appname=t},expression:"appname"}})],1),l("el-form-item",{attrs:{"label-width":"0px"}},[l("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.puery}},[e._v("查询")])],1)],1)],1),l("el-col",{attrs:{span:4}},[l("div",{staticClass:"d2-form-fr"},[l("el-form-item",[l("el-button",{attrs:{type:"warning",icon:"fa fa-download"},on:{click:e.addOpen}},[e._v("导出列表")])],1)],1)])],1)],1)],1)])],1),l("imgOpen",{ref:"imgOpen"})],1)])},n=[],i=l("48ad"),o=l("fa20"),r=l("9951"),s=l("2f62"),c=l("cbe7");function u(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function m(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?u(Object(l),!0).forEach((function(t){p(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var d={components:{imgOpen:o["default"]},mixins:[r["a"],i["default"]],data:function(){return{visible:!1,submitLoading:!1,formInline:{name:"",taskType:null,implement:null,timeType:null,time:"",htime:"",execTimeObj:{}},loading:!1,appname:"",taskType:"",taskState:"",time:""}},computed:m(m({},Object(s["c"])("d2admin",{treeNode:"tree/treeNode"})),{},{deviceId:function(){var e=this.treeNode.id;return e}}),mounted:function(){},methods:{open:function(e){this.formInline=m({},e),this.init()},close:function(){this.visible=!1},handleClosed:function(){},init:function(){this.getappList(),this.visible=!0},getTimeOptions:function(e){return 2===e?this.weekOptions:this.monthOptions},puery:function(){this.getappList()},getappList:function(){var e=this;this.data=[],this.loading=!0;var t={recordsId:this.formInline.id,name:this.appname};c["a"].getRecordItemList(t).then((function(t){e.data=t.data})).catch((function(e){console.log(e)})).finally((function(){e.loading=!1}))},imgOpenFun:function(e){e.row;var t=e.index;this.$refs.imgOpen.open(this.data,t)},addOpen:function(){},comfirmDialog:function(){}}},f=d,b=(l("cdcb"),l("2877")),v=Object(b["a"])(f,a,n,!1,null,"3dccf04c",null);t["default"]=v.exports},9951:function(e,t,l){"use strict";t["a"]={data:function(){return{implementOptions:[{value:1,label:"立即"},{value:2,label:"定时"},{value:3,label:"周期"}],taskStateOptions:[{value:6,label:"手动停止"},{value:5,label:"等待执行"},{value:4,label:"正在执行"},{value:3,label:"任务暂停"},{value:2,label:"异常终止"},{value:1,label:"已完成"}],taskTypeOptions:[{value:"1",label:"例行巡视"},{value:"2",label:"特殊巡视"},{value:"3",label:"专项巡视"},{value:"4",label:"自定义巡视"}],timeOptions:[{value:"1",label:"每天"},{value:"2",label:"每周"},{value:"3",label:"每月"}],monthOptions:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"23",label:"23"},{value:"24",label:"24"},{value:"25",label:"25"},{value:"26",label:"26"},{value:"27",label:"27"},{value:"28",label:"28"},{value:"29",label:"29"},{value:"30",label:"30"},{value:"31",label:"31"}],weekOptions:[{value:"1",label:"周一"},{value:"2",label:"周二"},{value:"3",label:"周三"},{value:"4",label:"周四"},{value:"5",label:"周五"},{value:"6",label:"周六"},{value:"7",label:"周日"}],warningOptions:[{value:1,label:"是"},{value:0,label:"否"}],addrFormat:{"power-infra-gloves-detection":"未带手套","helmet-classify":"未带安全帽"}}}}},"9b22":function(e,t,l){},cbe7:function(e,t,l){"use strict";var a=l("9bd2"),n=VUE_APP_API_STATION;t["a"]={getRecordList:function(e){return Object(a["a"])({url:"".concat(n,"/inspection/record/getRecordList"),method:"post",data:e})},getRecordItemPage:function(e){return Object(a["a"])({url:"".concat(n,"/evt/list/").concat(e.current,"/").concat(e.size),method:"get"})},getRecordItemList:function(e){return Object(a["a"])({url:"".concat(n,"/inspection/recordItem/getRecordItemList"),method:"post",data:e})},getRecordExecutorPage:function(e){return Object(a["a"])({url:"".concat(n,"/inspection/recordExecutor/getRecordExecutorPage"),method:"post",data:e})},getRecordById:function(e){return Object(a["a"])({url:"".concat(n,"/inspection/record/getRecordById/").concat(e),method:"post"})},getModelCount:function(e){return Object(a["a"])({url:"".concat(n,"/getModelCount"),method:"get"})},getEvtCount:function(e){return Object(a["a"])({url:"".concat(n,"/evt/getEvtCount"),method:"get"})},getRealHumTmp:function(){return Object(a["a"])({url:"".concat(n,"/real/getRealHumTmp"),method:"get"})}}},cdcb:function(e,t,l){"use strict";l("5586")},fa20:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("dialog-container",{attrs:{title:"任务详情",width:"1200px",height:"400px",visible:e.visible,appendBody:!0,confirmText:"确认","show-footer":!1},on:{"update:visible":function(t){e.visible=t},closed:e.handleClosed,closeDialog:e.close,comfirmDialog:e.comfirmDialog}},[l("div",{staticClass:"dialog-box"},[l("div",{staticStyle:{width:"1140px",height:"600px"}},[l("el-carousel",{ref:"carousel",attrs:{trigger:"click",height:"600px",interval:1e5,"indicator-position":"none","initial-index":e.imgIndex}},e._l(e.imgData,(function(t,a){return l("el-carousel-item",{key:a},[l("el-row",{staticClass:"d2-mb",attrs:{gutter:10}},[l("ul",[l("el-col",{attrs:{span:6}},[l("li",[l("span",[e._v("任务名称")]),e._v(" :\n                  "),l("span",[e._v(e._s(t.name))])])]),l("el-col",{attrs:{span:6}},[l("li",[l("span",[e._v("摄像头")]),e._v(" :\n                  "),l("span",[e._v(e._s(t.rawName))])])]),l("el-col",{attrs:{span:6}},[l("li",[l("span",[e._v("开始时间")]),e._v(" :\n                  "),l("span",[e._v(e._s(t.startTime))])])]),l("el-col",{attrs:{span:6}},[l("li",[l("span",[e._v("结束时间")]),e._v(" :\n                  "),l("span",[e._v(e._s(t.endTime))])])]),l("el-col",{attrs:{span:6}},[l("li",[l("span",[e._v("算法名称")]),e._v(" :\n                  "),l("span",[e._v(e._s(t.algoServiceName))])])]),l("el-col",{attrs:{span:18}},[l("li",[l("span",[e._v("巡检结果")]),e._v(" :\n                  "),"合格"===e.formatValue(t)?l("span",[e._v(e._s(e.formatValue(t)))]):l("div",{staticClass:"result"},e._l(e.formatValue(t),(function(t,a){return l("ul",{key:a},e._l(t.properties,(function(a,n){return l("li",{key:a.id},[l("span",[e._v(e._s(a.sceneName))]),l("span",[e._v(e._s("("+a.sceneValueName+")")+e._s(n+1===t.properties.length?"":"，"))])])})),0)})),0)])])],1)]),e.visible?l("canvasImg",{attrs:{picUrl:t.resultPic||"",resultMark:t.resultMark?JSON.parse(t.resultMark):[]}}):e._e()],1)})),1)],1)])])},n=[],i=l("d6a8"),o={components:{canvasImg:i["a"]},data:function(){return{visible:!1,imgData:[],imgIndex:0}},computed:{},mounted:function(){},methods:{open:function(e,t){var l=this;this.imgData=e,this.$nextTick((function(){setTimeout((function(){l.$refs.carousel.setActiveItem(t)}),0)})),this.visible=!0},close:function(){this.visible=!1},formatValue:function(e){return e.resultMark?(console.log(JSON.parse(e.resultMark),8888888),JSON.parse(e.resultMark)):"合格"},handleClosed:function(){},init:function(){},comfirmDialog:function(){}}},r=o,s=(l("fdaf"),l("2877")),c=Object(s["a"])(r,a,n,!1,null,"2eccdf92",null);t["default"]=c.exports},fdaf:function(e,t,l){"use strict";l("9b22")}}]);