(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b91053f8","chunk-2d2109d1"],{"8e4f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dialog-container",{staticClass:"insert-detail",attrs:{showFooter:!1,title:t.title,width:"1200px",visible:t.visible,appendBody:!0,topHeight:"10vh"},on:{"update:visible":function(e){t.visible=e},closed:t.handleClosed}},[a("d2-crud",{ref:"d2Crud",attrs:{columns:t.columns,data:t.data,loading:t.loading,options:t.options,pagination:t.pagination},on:{"pagination-current-change":t.paginationCurrentChange}})],1)},r=[],i=a("932d"),o=a("b948"),c={data:function(){var t=this;return{title:"",visible:!1,row:{},treeId:null,columns:[{title:"序号",key:"",width:60,formatter:function(e,a,n,r){return(t.pagination.currentPage-1)*t.pagination.pageSize+(r+1)}},{title:"任务名称",key:"name",showOverflowTooltip:!0},{title:"任务类型",key:"type",showOverflowTooltip:!0,formatter:function(t,e,a,n){var r=null;switch(a){case"1":r="例行巡视";break;case"2":r="特殊巡视";break;case"3":r="专项巡视";break;case"4":r="自定义巡视";break;default:r=null}return r}},{title:"状态",key:"status",formatter:function(t,e,a,n){return Object(o["statusName"])(a)},showOverflowTooltip:!0},{title:"开始时间",key:"createTime",showOverflowTooltip:!0},{title:"结束时间",key:"updateTime",showOverflowTooltip:!0},{title:"巡检点数",key:"inspectPointTotal",showOverflowTooltip:!0}],data:[],loading:!1,pagination:{currentPage:1,pageSize:10,total:0},options:{stripe:!0,height:"529px",border:!0}}},methods:{open:function(t,e){this.visible=!0,this.treeId=e,console.log(t),this.title=t.name+"详情",this.row=t,this.queryData()},queryData:function(){var t=this;this.loading=!0;var e={current:this.pagination.currentPage,size:10,type:this.row.data.type,stationId:this.treeId};i["a"].taskOverviewOfFrame(e).then((function(e){if(!e.data)return!1;t.pagination.total=e.data.total,t.data=e.data.records})).finally((function(){t.loading=!1}))},paginationCurrentChange:function(t){this.pagination.currentPage=t,this.queryData()},handleClosed:function(){this.treeId=null,this.row={},this.pagination.currentPage=1}}},s=c,u=a("2877"),l=Object(u["a"])(s,n,r,!1,null,"630a6c55",null);e["default"]=l.exports},"932d":function(t,e,a){"use strict";var n=a("9bd2"),r=VUE_APP_API_STATION;e["a"]={stationBasic:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/stationBasic"),method:"post",params:t})},runStatics:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/runStatics"),method:"post",params:t})},accessStatics:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/accessStatics"),method:"post",params:t})},accessStaticsFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/accessStaticsFrame"),method:"post",params:t})},realDetail:function(t){return Object(n["a"])({url:"".concat(r,"/homePage/realDetail"),method:"post",data:t})},taskOverview:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/taskOverview"),method:"post",params:t})},taskOverviewOfFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/taskOverviewOfFrame"),method:"post",data:t})},onOffLine:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/onOffLine"),method:"post",data:{}})},algorithmStatistics:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/algorithmStatistics"),method:"post",data:t})},algorithmStatisticsOfFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/algorithmStatisticsOfFrame"),method:"post",params:t})},resourceOccupation:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/resourceOccupation"),method:"post",params:t})},resourceOccupationGpu:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/resourceOccupationGpu"),method:"post",params:{}})},getCamaraBasicBymainStationId:function(t){return Object(n["a"])({url:"".concat(r,"/dynamicMonControl/getCamaraBasicBymainStationId"),method:"post",params:t})},defectStatics:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/defectStatics"),method:"post",data:{}})},defectStaticsByMethodType:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/defectStaticsByMethodType"),method:"post",data:{}})},defectStaticsFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/defectStaticsFrame"),method:"post",data:t})},alarmLevel:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/alarmLevel"),method:"post",data:{}})},alarmType:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/alarmType"),method:"post",data:{}})},alarmLevelGroupByLevelFrame:function(t){return Object(n["a"])({url:"".concat(r,"/inspectOverview/alarmLevelGroupByLevelFrame"),method:"post",data:t})},alarmTrend:function(){return Object(n["a"])({url:"".concat(r,"/inspectOverview/alarmTrend"),method:"post",params:{}})},getCamaraBasicBymainSt1ationId:function(t){return Object(n["a"])({url:"".concat(r,"/dynamicMonControl/getCamaraBasicBymainStationId"),method:"post",params:t})},alarmCommon:function(t){return Object(n["a"])({url:"".concat(r,"/homePage/alarmCommon"),method:"post",data:t})}}},b948:function(t,e,a){"use strict";a.r(e),a.d(e,"statusName",(function(){return n}));var n=function(t){var e=Number(t),a="";switch(e){case 1:a="已完成";break;case 2:a="异常终止";break;case 3:a="任务暂停";break;case 4:a="正在执行";break;case 5:a="等待执行";break;case 6:a="手动停止";break;default:break}return a}}}]);