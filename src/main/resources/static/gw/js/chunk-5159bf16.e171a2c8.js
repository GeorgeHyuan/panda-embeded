(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5159bf16","chunk-774bb494"],{"072e":function(t,e,a){"use strict";var n=a("9bd2"),i=VUE_APP_API_STATION;e["a"]={currentMonthStation:function(t){return Object(n["a"])({url:"".concat(i,"/homePage/currentMonthStation"),method:"POST",params:t})},getListByCondition:function(t){return Object(n["a"])({url:"".concat(i,"/homePage/getListByCondition"),method:"POST",data:t})},getSuanfenInTime:function(t){return Object(n["a"])({url:"".concat(i,"/homePage/getSuanfenInTime"),method:"POST",params:t})},getSuanfenByTime:function(t){return Object(n["a"])({url:"".concat(i,"/homePage/getSuanfenByTime"),method:"POST",data:t})},alarmCount:function(t){return Object(n["a"])({url:"".concat(i,"/homePage/alarmCount"),method:"POST",params:t})},showAlarmHistogram:function(t){return Object(n["a"])({url:"".concat(i,"/homePage/showAlarmHistogram"),method:"POST",params:t})},statisticsDeviceNums:function(t){return Object(n["a"])({url:"".concat(i,"/homePage/statisticsDeviceNums"),method:"POST",params:t})},showStationList:function(t){return Object(n["a"])({url:"".concat(i,"/homePage/showStationList"),method:"POST",data:t})},equipmentSize:function(t){var e={code:"0",msg:"result.system.success",time:"2020-04-10 15:24:36.837",data:[{id:"1243431338200186882",name:"实时监测",type:"station",url:"/real-time-monitoring",addr:"string"},{id:"1243431338200186882",name:"实时监测",type:"station",url:"/real-time-monitoring",addr:"string"},{id:"1243431715993731074",name:"视频监控",type:"station",url:"/video-monitor",addr:"string"},{id:"1243431829856501762",name:"智能锁具",type:"station",url:"/intelligent-locks",addr:"string"},{id:"1243431919438446594",name:"机器人巡检",type:"station",url:"/robot-inspection",addr:"string"},{id:"1243432114616188930",name:"工单管理",type:"station",url:"/order-manage",addr:"string"},{id:"1243432275367084034",name:"报表管理",type:"station",url:"/report-query",addr:"string"},{id:"1243432885093056514",name:"物联管理",type:"station",url:"/nowIot",addr:"string"}]};return Promise.resolve(e)},equipmentState:function(t){},equipmentStateDetail:function(t){},jobOrderDistribute:function(){},jobOrderStatusCount:function(){},deviceStatusOfTj:function(){},deviceTypeDistributionOfTj:function(){},evntTypeDistributionOfTj:function(){},evtAreaCountOfTj:function(){},getMediumVoltageSquipmentState:function(){}}},2130:function(t,e,a){},"52ea":function(t,e,a){"use strict";a("5f00")},"5f00":function(t,e,a){},"74f5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"实时研判",name:"1"}},[a("d2-crud",{ref:"d2CrudReal",attrs:{columns:t.realColumns,data:t.realData,loading:t.realLoading,options:t.options,pagination:t.realPagination,layout:t.realPagination.layout,"row-handle":t.rowHandle},on:{"cell-click":t.handle,immediately:t.immediately,"pagination-current-change":t.realPaginationCurrentChange}})],1),a("el-tab-pane",{attrs:{label:"历史研判",name:"2"}},[a("d2-crud",{ref:"d2CrudHistory",attrs:{columns:t.historyColumns,data:t.historyData,loading:t.historyLoading,options:t.options,pagination:t.historyPagination,layout:t.historyPagination.layout},on:{"pagination-current-change":t.historyPaginationCurrentChange}})],1)],1),a("examine-dialog",{ref:"examine"})],1)},i=[],s=a("fc82a"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dialog-container",{attrs:{title:t.title,width:"800px",visible:t.visible,showFooter:!1},on:{"update:visible":function(e){t.visible=e},closed:t.handleClosed,closeDialog:t.closeDialog}},[2===t.ing?a("div",{staticClass:"examine-ing h-350"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"score",style:{"background-image":t.switchBgc(t.score)}},[a("span",[t._v(t._s(t.score)),a("span",{staticClass:"f-20"},[t._v("分")])]),t.tianShow?a("span",{ref:"tianShow",staticClass:"tian-show",style:{transform:"rotate("+t.rotateDeg+"deg)"}}):t._e()])]),a("el-col",{attrs:{span:15}},[a("div",{staticClass:"text"},[t._v(t._s(t.text)+t._s(t.stationObj[t.stationObj.length-1]&&t.stationObj[t.stationObj.length-1].name))])]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"examine-stop-click"},[a("el-button",{attrs:{type:"primary"},on:{click:t.stopExamine}},[t._v("取消研判")])],1)])],1),a("el-row",{staticClass:"m-12"},[a("el-progress",{class:t.switchProBG,attrs:{percentage:t.progress}})],1),a("el-row",[a("div",{staticClass:"examine-detail"},[t._v("故障检测 - 共 "),a("span",{},[t._v(t._s(t.stationObj.length))]),t._v(" 项")])]),a("el-row",{staticClass:"examine-ing-station",attrs:{gutter:10}},t._l(t.stationObj,(function(e,n){return a("el-col",{key:n,attrs:{span:4}},[a("el-button",{attrs:{type:"primary"}},[t._v(t._s(e.name))])],1)})),1)],1):3===t.ing?a("div",{staticClass:"examine-end h-350"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"score",style:{"background-image":t.switchBgc(t.score)}},[t._v(t._s(t.score)),a("span",{staticClass:"f-20"},[t._v("分")])])]),a("el-col",{attrs:{span:15}},[a("div",{staticClass:"text"},[t._v(t._s(t.text))])]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"examine-stop-click"})])],1),a("el-row",[a("div",{staticClass:"examine-detail"},[t._v(t._s(t.examineDetail))])]),a("el-row",{staticClass:"examine-over-station",attrs:{gutter:10}},t._l(t.stationObj,(function(e,n){return a("el-col",{key:n,attrs:{span:6}},[a("el-checkbox-group",{model:{value:t.checkList[n],callback:function(e){t.$set(t.checkList,n,e)},expression:"checkList[index]"}},[a("el-checkbox",{attrs:{label:""}},[a("div",{class:0===e.status?"examine-abnormal-flag":"examine-abnormal-flag1"},[t._v(t._s(e.name))]),a("el-button",{attrs:{type:"primary",disabled:1===e.status},on:{click:function(a){return t.openDetail(e.name)}}},[t._v("详情")])],1)],1)],1)})),1)],1):t._e(),a("detail-dialog",{ref:"detail"})],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dialog-container",{attrs:{title:t.title+"详情",width:"800px",visible:t.visible,showFooter:!1,appendBody:!0},on:{"update:visible":function(e){t.visible=e},closed:t.handleClosed,closeDialog:t.closeDialog}},[a("d2-crud",{ref:"d2Crud",attrs:{columns:t.columns,data:t.data,loading:t.loading,options:t.options},on:{"pagination-current-change":t.paginationCurrentChange}})],1)},c=[],u={data:function(){var t=this;return{columns:[{title:"序号",key:"",width:60,formatter:function(e,a,n,i){return(t.pagination.currentPage-1)*t.pagination.pageSize+(i+1)},fixed:"left"},{title:"隐患类别",key:"name",width:150,fixed:"left"},{title:"隐患详情",key:"miaos"}],loading:!1,pagination:{currentPage:1,pageSize:20,total:0,layout:"prev, pager, next,jumper,->,total"},options:{stripe:!0,height:"calc(100vh - 462px)",border:!0}}}},m={mixins:[u],data:function(){return{title:"",visible:!1,data:[{name:"温度传感器",miaos:"1#主变电缆头"}]}},methods:{open:function(t,e,a){this.title=t,this.data=this.data.map((function(a){return a.name=t,a.miaos=e,a})),this.visible=!0},paginationCurrentChange:function(t){this.pagination.currentPage=t},handleClosed:function(){},closeDialog:function(){this.visible=!1}}},h=m,d=a("2877"),g=Object(d["a"])(h,l,c,!1,null,"42bc085c",null),p=g.exports,f=a("072e"),b={components:{detailDialog:p},data:function(){return{tianShow:!1,rotateDeg:0,title:"智能研判",progress:0,activePro:null,ing:1,visible:!1,score:100,examineDetail:"",text:"上次站房研判100分，请继续保持",stationObj:[],checkList:[],row:null,spaceId:null}},computed:{switchProBG:function(){var t=this.score,e="";return e=t>=70?"A":t<70&&t>50?"B":"C",e}},methods:{open:function(t,e,a){var n=this;this.row=t,this.progress=0,this.tianShow=!0,this.ing=2,this.score=100,this.text="智能研判中：",this.activePro1=setInterval((function(){n.rotateDeg+=15}),50);var i={spaceid:t.spaceId};f["a"].getSuanfenInTime(i).then((function(t){if(!t.data)return!1;n.activeExamine(t.data)})),this.visible=!0},activeExamine:function(t){var e=this,a="",n=0,i=0;t.hstSuanFenItems.map((function(t){100!==Number(t.value)&&(n+=1,a+=t.itemTypeName+"",i+=1)})),this.examineDetail="共检查了"+t.hstSuanFenItems.length+"项，以下有"+i+"项需要处理：",this.activePro=setInterval((function(){if(100===e.progress)return e.rotateDeg=0,clearInterval(e.activePro),clearInterval(e.activePro1),e.tianShow=!1,e.ing=3,void(e.text=n?a+"存在问题，建议立即处理":"暂无扣分项");switch(e.progress){case 10:t.hstSuanFenItems.length&&e.stationObj.push({status:100===Number(t.hstSuanFenItems[0].value)?1:0,name:t.hstSuanFenItems[0].itemTypeName});break;case 20:t.hstSuanFenItems.length>1&&e.stationObj.push({status:100===Number(t.hstSuanFenItems[1].value)?1:0,name:t.hstSuanFenItems[1].itemTypeName});break;case 30:t.hstSuanFenItems.length>2&&e.stationObj.push({status:100===Number(t.hstSuanFenItems[2].value)?1:0,name:t.hstSuanFenItems[2].itemTypeName});break;case 40:t.hstSuanFenItems.length>3&&e.stationObj.push({status:100===Number(t.hstSuanFenItems[3].value)?1:0,name:t.hstSuanFenItems[3].itemTypeName});break;case 50:t.hstSuanFenItems.length>4&&e.stationObj.push({status:100===Number(t.hstSuanFenItems[4].value)?1:0,name:t.hstSuanFenItems[4].itemTypeName});break;case 60:t.hstSuanFenItems.length>5&&e.stationObj.push({status:100===Number(t.hstSuanFenItems[5].value)?1:0,name:t.hstSuanFenItems[5].itemTypeName});break;case 70:t.hstSuanFenItems.length>6&&e.stationObj.push({status:100===Number(t.hstSuanFenItems[6].value)?1:0,name:t.hstSuanFenItems[6].itemTypeName});break;case 80:t.hstSuanFenItems.length>7&&t.hstSuanFenItems.map((function(t,a){a>6&&e.stationObj.push({status:100===t.value?1:0,name:t.itemTypeName})})),e.stationObj.map((function(t){e.checkList.push([])}));break}e.progress+=1,Number(t.value)!==e.score&&(e.score-=1)}),50)},stopExamine:function(){this.closeDialog()},createWorkOrder:function(){var t=this,e=0,a=[];if(this.checkList.map((function(n,i){n.length&&(e+=1,a.push(t.stationObj[i]))})),!e||e>1)return this.$message.info("请选择一项生成工单"),!1;this.$router.push({path:"order-manage-add",query:{content:this.row.maintain,type:"add"}})},openDetail:function(t){this.$refs.detail.open(t,this.row.maintain,this.row)},switchBgc:function(t){var e="";return e=t>=70?"linear-gradient(to top, #006e6b ,#05928E, #0EA6A2,#1ABCB8,#26D7D2)":t<70&&t>50?"linear-gradient(to top, #F7A32F , #F8B351,#F8B860,#F7C278, #F6C683)":"linear-gradient(to top, #F83713,#F85B3E,#F77F69,#F89482,#F7BCB1)",e},closeDialog:function(){this.handleClosed()},handleClosed:function(){this.rotateDeg=0,clearInterval(this.activePro),clearInterval(this.activePro1),this.stationObj=[],this.tianShow=!1,this.visible=!1,this.checkList.map((function(t){t.length>0&&t.splice(0)}))}},beforeDestroy:function(){clearInterval(this.activePro),clearInterval(this.activePro1)}},v=b,y=(a("e6db"),a("766f"),Object(d["a"])(v,o,r,!1,null,"2d64372b",null)),P=y.exports,O=a("2f62"),S=a("6c51");function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(Object(a),!0).forEach((function(e){D(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function D(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var I={name:"main",components:{examineDialog:P},mixins:[s["default"]],data:function(){return{activeName:"1",realData:[],historyData:[]}},computed:x(x({},Object(O["c"])("d2admin",{titleName:"tree/titleName",treeNode:"tree/treeNode"})),{},{treeId:function(){return this.treeNode.id}}),watch:{activeName:function(t){"1"===t?(this.realInit(),this.getRealData()):(this.historyInit(),this.getHistoryData())},treeId:function(t){"1"===this.activeName?(this.realInit(),this.getRealData()):(this.historyInit(),this.getHistoryData())}},mounted:function(){this.getRealData()},methods:{getRealData:function(){var t=this,e={size:1,num:this.realPagination.currentPage,spaceId:this.treeId};this.realLoading=!0,this.realData=[],f["a"].getListByCondition(e).then((function(e){t.realPagination.total=e.total,e&&e.data&&(t.realData=e.data.map((function(e,a){var n=(t.realPagination.currentPage-1)*t.realPagination.pageSize;return e.indexOf=a+1+n,e.maintain="",e.fen=Number(e.value),"100.0"!==e.value&&e.hstSuanFenItems.map((function(t){"100"!==t.value&&(e.maintain+=t.desc+" ")})),e})))})).finally((function(){t.realLoading=!1}))},getHistoryData:function(){var t=this,e={size:20,num:this.historyPagination.currentPage,spaceId:this.treeId,timeStart:Object(S["a"])(new Date(new Date((new Date).toLocaleDateString()).getTime()-5184e5))+".000",timeEnd:Object(S["a"])(new Date(new Date((new Date).toLocaleDateString()).getTime()+864e5-1))+".000"};this.historyLoading=!0,this.historyData=[],f["a"].getSuanfenByTime(e).then((function(e){t.historyPagination.total=e.total,e&&e.data&&(t.historyData=e.data.map((function(e,a){var n=(t.historyPagination.currentPage-1)*t.historyPagination.pageSize;return e.indexOf=a+1+n,e.maintain="","100.0"!==e.value&&e.hstSuanFenItems.map((function(t){"100"!==t.value&&(e.maintain+=t.desc+" ")})),e})))})).finally((function(){t.historyLoading=!1}))},immediately:function(t){var e=t.row;this.$refs.examine.open(e,"智能研判",1)},handle:function(t,e,a,n){"维护建议"===e.label&&this.activeName},realPaginationCurrentChange:function(t){this.realPagination.currentPage=t},historyPaginationCurrentChange:function(t){this.historyPagination.currentPage=t},realInit:function(){this.realPagination.currentPage=1,this.realPagination.total=0},historyInit:function(){this.historyPagination.currentPage=1,this.historyPagination.total=0}}},j=I,C=(a("52ea"),Object(d["a"])(j,n,i,!1,null,"4fb769ac",null));e["default"]=C.exports},"766f":function(t,e,a){"use strict";a("2130")},9731:function(t,e,a){},e6db:function(t,e,a){"use strict";a("9731")},fc82a:function(t,e,a){"use strict";a.r(e),e["default"]={data:function(){return{realColumns:[{title:"序号",key:"indexOf",width:60,fixed:"left"},{title:"站点名称",key:"name",width:200,fixed:"left",align:"left"},{title:"维护建议",key:"maintain",align:"left"}],historyColumns:[{title:"序号",key:"indexOf",width:60,fixed:"left"},{title:"时间",key:"time",width:190,align:"left",fixed:"left"},{title:"站点名称",key:"name",width:200,align:"left",fixed:"left"},{title:"维护建议",align:"left",key:"maintain"}],rowHandle:{fixed:"right",width:150,custom:[{emit:"immediately",text:"立即研判",size:"mini",type:"primary"}]},realLoading:!1,historyLoading:!1,realPagination:{currentPage:1,pageSize:20,total:0,layout:"prev, pager, next,jumper,->,total"},historyPagination:{currentPage:1,pageSize:20,total:0,layout:"prev, pager, next,jumper,->,total"},options:{stripe:!0,height:"calc(100vh - 287px)",border:!0}}}}}}]);