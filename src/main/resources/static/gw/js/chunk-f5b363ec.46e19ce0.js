(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5b363ec","chunk-2d22cff8"],{"932d":function(t,e,a){"use strict";var n=a("9bd2"),r=VUE_APP_API_STATION;e["a"]={stationBasic:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/stationBasic"),method:"post",params:t})},runStatics:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/runStatics"),method:"post",params:t})},accessStatics:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/accessStatics"),method:"post",params:t})},accessStaticsFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/accessStaticsFrame"),method:"post",params:t})},realDetail:function(t){return Object(n["a"])({url:"".concat(r,"/homePage/realDetail"),method:"post",data:t})},taskOverview:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/taskOverview"),method:"post",params:t})},taskOverviewOfFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/taskOverviewOfFrame"),method:"post",data:t})},onOffLine:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/onOffLine"),method:"post",data:{}})},algorithmStatistics:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/algorithmStatistics"),method:"post",data:t})},algorithmStatisticsOfFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/algorithmStatisticsOfFrame"),method:"post",params:t})},resourceOccupation:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/resourceOccupation"),method:"post",params:t})},resourceOccupationGpu:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/resourceOccupationGpu"),method:"post",params:{}})},getCamaraBasicBymainStationId:function(t){return Object(n["a"])({url:"".concat(r,"/dynamicMonControl/getCamaraBasicBymainStationId"),method:"post",params:t})},defectStatics:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/defectStatics"),method:"post",data:{}})},defectStaticsByMethodType:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/defectStaticsByMethodType"),method:"post",data:{}})},defectStaticsFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/defectStaticsFrame"),method:"post",data:t})},alarmLevel:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/alarmLevel"),method:"post",data:{}})},alarmType:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/alarmType"),method:"post",data:{}})},alarmLevelGroupByLevelFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/alarmLevelGroupByLevelFrame"),method:"post",data:t})},alarmTrend:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/alarmTrend"),method:"post",params:{}})},getCamaraBasicBymainSt1ationId:function(t){return Object(n["a"])({url:"".concat(r,"/dynamicMonControl/getCamaraBasicBymainStationId"),method:"post",params:t})},alarmCommon:function(t){return Object(n["a"])({url:"".concat(r,"/homePage/alarmCommon"),method:"post",data:t})}}},bd60:function(t,e,a){"use strict";a("e01c")},dee2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-card",{staticClass:"box-card",attrs:{xiaojiaoShow:!1},on:{cardRefresh:t.cardRefresh}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-pie-chart"}),a("span",[t._v("当月缺陷统计")])]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%",height:"calc(50vh - 268px)"},attrs:{"element-loading-text":"数据加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"#080D21"}},[a("div",{staticClass:"total-sty"},[a("div",{staticClass:"desc-sty"},[a("span",[t._v("累积缺陷:")]),a("span",[t._v(t._s(t.count))])]),a("div",{staticClass:"desc-sty"},[a("span",[t._v("处理缺陷:")]),a("span",[t._v(t._s(t.total))])])]),t.chartTypeName.length>0?a("chart",{staticStyle:{width:"100%",height:"90%"},attrs:{options:t.optionData,"auto-resize":!0},on:{click:t.checkDetail}}):a("div",{staticClass:"no-data"},[t._v("暂无数据")])],1),a("alarm-list",{ref:"alarmList"})],1)},r=[],i=a("2f62"),o=a("f62d"),c=a("932d"),s=a("6c51");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={components:{AlarmList:o["default"]},data:function(){return{cardShowMax:!1,noData:!0,loading:!0,legend:{cumulativeDefects:0,dealDefects:0},count:0,totle:0,chartOption:[],chartTypeName:[{name:"通信状态",key:"7",value:0},{name:"运行状态",key:"8",value:0},{name:"外观检测",key:"9",value:0}]}},computed:u(u({},Object(i["c"])("d2admin",{themeActiveSetting:"theme/activeSetting"})),{},{optionData:function(){var t=[];this.chartOption.forEach((function(e){t.push({name:e.evtType,value:e.total})}));var e={tooltip:{trigger:"item",formatter:function(t){var e=t.marker+""+t.data.name+"</br>数量："+t.data.value+"</br>占比："+t.percent+"%";return e},position:function(t,e,a,n,r){var i=0,o=0,c=t[0],s=t[1],l=r.contentSize[0],u=r.contentSize[1];return i=l>c?5:c-l,o=u>s?5:s-u,[i-5,o-10]}},series:[{type:"pie",minAngle:[10],radius:["0","70%"],center:["50%","60%"],color:["#4677fd","#61acf8","#b4e3f1","#b4f1b6","#f19149","#13b5b1","#f1bc94","#f19ec2","#bb47f2","#642fac","#920783","#eb6877"],data:this.chartTypeName,avoidLabelOverlap:!0,hoverAnimation:!1,legendHoverLink:!1,label:{normal:{show:!1,formatter:["{b|{b}}","{c|{c}个}"].join("\n"),rich:{b:{fontSize:12,lineHeight:30},c:{fontSize:12,fontWeight:"normal",lineHeight:0}}}}}]};return e}}),created:function(){this.getPieData()},methods:{getPieData:function(){var t=this;this.count=0,this.total=0;var e={typeList:["3"],timeList:[Object(s["f"])(new Date)]};c["a"].alarmCommon(e).then((function(e){e&&e.data.length&&e.data.forEach((function(e){t.count+=Number(e.remark),t.total+=e.tag?Number(e.tag):0,t.chartTypeName.map((function(t,a){t.key===e.addr&&(t.value=Number(e.remark),t.item=e)}))}))})).finally((function(){t.loading=!1}))},cardRefresh:function(){this.query()},checkDetail:function(t){this.$refs.alarmList.open(t,"3")}}},f=d,m=(a("bd60"),a("2877")),v=Object(m["a"])(f,n,r,!1,null,"a33c6340",null);e["default"]=v.exports},e01c:function(t,e,a){},f62d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dialog-container",{staticClass:"insert-detail",attrs:{showFooter:!1,title:t.title,width:"1200px",visible:t.visible,appendBody:!0,topHeight:"10vh"},on:{"update:visible":function(e){t.visible=e},closed:t.handleClosed}},[a("d2-crud",{ref:"d2Crud",attrs:{columns:t.columns,data:t.data,loading:t.loading,options:t.options,pagination:t.pagination},on:{"pagination-current-change":t.paginationCurrentChange}})],1)},r=[],i=a("ecc6"),o=a("6c51");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={data:function(){var t=this;return{title:"",visible:!1,parData:{},columns:[{title:"序号",key:"",width:60,formatter:function(e,a,n,r){return(t.pagination.currentPage-1)*t.pagination.pageSize+(r+1)}},{title:"告警时间",key:"timestamp",showOverflowTooltip:!0},{title:"告警设备",key:"varName",showOverflowTooltip:!0},{title:"告警级别",key:"evtLevel",formatter:function(t,e,a,n){return 1===a?"一般":2===a?"严重":3===a?"危急":""},showOverflowTooltip:!0},{title:"事件类型",key:"evtClass",showOverflowTooltip:!0},{title:"事件状态",key:"evtStatus",formatter:function(t,e,a,n){return"0"===a?"未处理":"1"===a?"已处理":""},showOverflowTooltip:!0},{title:"告警描述",key:"evtDesc",formatter:function(t,e,a,n){return a||t.deviceName+":"+t.evtType},showOverflowTooltip:!0}],row:{},data:[],loading:!1,pagination:{currentPage:1,pageSize:10,total:0},options:{stripe:!0,height:"529px",border:!0}}},methods:{open:function(t){var e=this,a=t.data.item.type;this.visible=!0,this.row=t.data,this.pagination.currentPage=1,this.title=t.name+"详情",this.$nextTick((function(){"1"===a?e.parData={alarmLevel:t.data.key}:"2"===a?e.parData={evtClass:t.name}:"3"===a&&(e.parData={evtType:t.name}),e.getData()}))},getData:function(){var t=this;this.loading=!0,this.data=[];var e=Object(o["a"])(new Date),a=s({pageNum:this.pagination.currentPage,pageSize:this.pagination.pageSize,startTime:e.slice(0,7)+"-01 00:00:00.000",endTime:e+".000",timestampDsc:!0},this.parData);i["a"].getHstEvtList(a).then((function(e){e.data&&(t.pagination.total=e.total,t.data=e.data)})).finally((function(){t.loading=!1}))},paginationCurrentChange:function(t){this.pagination.currentPage=t,this.getData()},handleClosed:function(){this.loading=!1}}},p=u,d=a("2877"),f=Object(d["a"])(p,n,r,!1,null,"2b836610",null);e["default"]=f.exports}}]);