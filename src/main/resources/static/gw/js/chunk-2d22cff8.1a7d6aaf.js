(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cff8"],{f62d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dialog-container",{staticClass:"insert-detail",attrs:{showFooter:!1,title:t.title,width:"1200px",visible:t.visible,appendBody:!0,topHeight:"10vh"},on:{"update:visible":function(e){t.visible=e},closed:t.handleClosed}},[a("d2-crud",{ref:"d2Crud",attrs:{columns:t.columns,data:t.data,loading:t.loading,options:t.options,pagination:t.pagination},on:{"pagination-current-change":t.paginationCurrentChange}})],1)},n=[],o=a("ecc6"),r=a("6c51");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={data:function(){var t=this;return{title:"",visible:!1,parData:{},columns:[{title:"序号",key:"",width:60,formatter:function(e,a,i,n){return(t.pagination.currentPage-1)*t.pagination.pageSize+(n+1)}},{title:"告警时间",key:"timestamp",showOverflowTooltip:!0},{title:"告警设备",key:"varName",showOverflowTooltip:!0},{title:"告警级别",key:"evtLevel",formatter:function(t,e,a,i){return 1===a?"一般":2===a?"严重":3===a?"危急":""},showOverflowTooltip:!0},{title:"事件类型",key:"evtClass",showOverflowTooltip:!0},{title:"事件状态",key:"evtStatus",formatter:function(t,e,a,i){return"0"===a?"未处理":"1"===a?"已处理":""},showOverflowTooltip:!0},{title:"告警描述",key:"evtDesc",formatter:function(t,e,a,i){return a||t.deviceName+":"+t.evtType},showOverflowTooltip:!0}],row:{},data:[],loading:!1,pagination:{currentPage:1,pageSize:10,total:0},options:{stripe:!0,height:"529px",border:!0}}},methods:{open:function(t){var e=this,a=t.data.item.type;this.visible=!0,this.row=t.data,this.pagination.currentPage=1,this.title=t.name+"详情",this.$nextTick((function(){"1"===a?e.parData={alarmLevel:t.data.key}:"2"===a?e.parData={evtClass:t.name}:"3"===a&&(e.parData={evtType:t.name}),e.getData()}))},getData:function(){var t=this;this.loading=!0,this.data=[];var e=Object(r["a"])(new Date),a=l({pageNum:this.pagination.currentPage,pageSize:this.pagination.pageSize,startTime:e.slice(0,7)+"-01 00:00:00.000",endTime:e+".000",timestampDsc:!0},this.parData);o["a"].getHstEvtList(a).then((function(e){e.data&&(t.pagination.total=e.total,t.data=e.data)})).finally((function(){t.loading=!1}))},paginationCurrentChange:function(t){this.pagination.currentPage=t,this.getData()},handleClosed:function(){this.loading=!1}}},u=p,f=a("2877"),g=Object(f["a"])(u,i,n,!1,null,"2b836610",null);e["default"]=g.exports}}]);