(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd06ef2","chunk-5857745e"],{"589e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[e._v("当前位置")]),n("el-breadcrumb-item",[e._v("智能巡检")]),n("el-breadcrumb-item",{attrs:{to:{path:"/refresh"}}},[e._v("单点识别"+e._s(e.labelName?"-"+e.labelName:""))])],1)],1),n("el-row",{attrs:{gutter:10}},[n("el-col",{staticStyle:{"padding-right":"20px"},attrs:{span:24,md:4}},[n("dev-tree",{attrs:{type:2}})],1),n("el-col",{attrs:{span:24,md:20}},[n("video-content")],1)],1)],2)},a=[],o=n("2f62"),i=n("6294"),c=n("915f");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={components:{DevTree:i["default"],VideoContent:c["default"]},data:function(){return{}},computed:d(d({},Object(o["c"])("d2admin",{treeNode:"tree/treeNode"})),{},{labelName:function(){var e=this.treeNode.name;return e}}),beforeDestroy:function(){this.$store.dispatch("d2admin/tree/setDevTreeNode",{})}},h=u,p=n("2877"),f=Object(p["a"])(h,r,a,!1,null,"75ffa405",null);t["default"]=f.exports},6294:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-card",{staticClass:"box-card dev-tree",staticStyle:{height:"100%"},on:{cardRefresh:e.cardRefresh}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"fa fa-tree"}),n("span",[e._v("设备列表")])]),n("div",{staticStyle:{height:"calc(100vh - 263px)"}},[n("el-tree",e._b({directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],key:e.devId,ref:"tree",attrs:{load:e.loadNode,props:e.defaultProps,lazy:"","node-key":"id","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","default-expand-all":!1,"expand-on-click-node":!1,"render-content":e.renderContent,"highlight-current":!0},on:{"node-click":e.handleNodeClick}},"el-tree",e.$attrs,!1))],1)])},a=[],o=n("2f62"),i=n("e1e5");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={name:"config-tree",components:{},computed:s(s({},Object(o["c"])("d2admin",{treeNode:"tree/treeNode"})),{},{devId:function(){return console.log(this.treeNode.id,"8899"),this.treeNode.id},treeType:function(){return this.$route.meta.treeType}}),data:function(){return{activeName:"1",loading:!1,defaultProps:{children:"children",label:"name",id:"id",isLeaf:"leaf"},MouseEvent:null,Node:{},Nodes:null,node:null,resolve:null,obj:{},treeData:[],pathArr:[],pathArrLength:0,setInterval10:null,options:[],value:"",list:[],loadingSearch:!1,treeName:"站点列表"}},watch:{},methods:{handleNodeClick:function(e,t,n){if(e.hasChild||e.icon){if(!this.Node)return t.isCurrent=!1,!1;var r=this.Node.id;this.$refs.tree.setCurrentKey(r);var a=this.$refs.tree.getCurrentNode();this.Node=a}else this.Node=e,this.Nodes=t,this.MouseEvent=n.$el.childNodes[0].childNodes[0],e.treetype=this.treeType||"12",this.$store.dispatch("d2admin/tree/setDevTreeNode",e)},renderContent:function(e,t){var n=t.node,r=t.data;t.store;return e("span",{class:"custom-tree-node",attrs:{id:"node"+r.id}},[e("span",[e("i",{class:r.icon?"treeIcon "+r.icon:""}),n.label])])},treeClick:function(e){var t=this,n="100000,"+e.regionPath+","+e.stationId;this.pathArr=n.split(","),this.pathArrLength=this.pathArr.length,this.pathArrActiveNum=0,this.setInterval10=setInterval((function(){t.$nextTick((function(){t.pathArrLength>0&&t.treeClickSetTime()}))}),100)},treeClickSetTime:function(){if(this.pathArrActiveNum>this.pathArrLength-1)return clearInterval(this.setInterval10),!1;var e=document.getElementById("node"+this.pathArr[this.pathArrActiveNum]);if(e){if(this.pathArrActiveNum>this.pathArrLength-2)return e.click(),clearInterval(this.setInterval10),!1;e.parentNode.getElementsByClassName("expanded").length||e.parentNode.getElementsByClassName("el-tree-node__expand-icon")[0].click(),this.pathArrActiveNum=this.pathArrActiveNum+1}},loadNode:function(e,t,n){var r=this;0===e.level?(this.node=e,this.node.childNodes=[],this.loading=!0,this.devId&&i["a"].nodeGetById(this.devId).then((function(n){var a=r.hasChild([n.data]);return e=r.node.childNodes=[],t(a)})).then((function(){})).finally((function(){r.loading=!1}))):this.$nextTick((function(){i["a"].getCameraPoint({id:e.data.id}).then((function(n){var a=n.data.spaceDgtVos||[],o=n.data.spaceAnalogVos||[],i=n.data.spaceVoList||[],c=a.concat(o).concat(i),s=r.hasChild(c);return e.childNodes=null,e.data.children=null,t(s)})).finally((function(){r.loading=!1}))}))},hasChild:function(e){return e&&0!==e.length?(e.forEach((function(t,n){e[n].leaf=!e[n].hasChild})),e):[]},cardRefresh:function(){}},mounted:function(){},beforeDestroy:function(){clearInterval(this.setInterval10),this.$store.dispatch("d2admin/tree/setDevTreeNode",{})}},u=l,h=(n("dce4"),n("2877")),p=Object(h["a"])(u,r,a,!1,null,null,null);t["default"]=p.exports},"7d7e":function(e,t,n){},dce4:function(e,t,n){"use strict";n("7d7e")},e1e5:function(e,t,n){"use strict";var r=n("9bd2"),a=VUE_APP_API,o=VUE_APP_API_STATION;t["a"]={nodeGetById:function(e){return Object(r["a"])({url:"".concat(a,"/device/space/getById/").concat(e),method:"get"})},deleteInspectTaskById:function(e){return Object(r["a"])({url:"".concat(o,"/inspection/task/deleteInspectTaskById/").concat(e),method:"delete"})},saveInspectTask:function(e){return Object(r["a"])({url:"".concat(o,"/inspection/task/saveInspectTask"),method:"post",data:e})},updateInspectTask:function(e){return Object(r["a"])({url:"".concat(o,"/inspection/task/updateInspectTask"),method:"put",data:e})},getPageInspectTask:function(e){return Object(r["a"])({url:"".concat(o,"/inspection/task/getPageInspectTask"),method:"post",data:e})},getInspectTaskById:function(e){return Object(r["a"])({url:"".concat(o,"/inspection/task/getInspectTaskById"),method:"post",data:e})},startTask:function(e){return Object(r["a"])({url:"".concat(o,"/inspection/record/startTask"),method:"post",data:e})},getCameraPoint:function(e){return Object(r["a"])({url:"".concat(a,"/device/space/getInspectionPointById"),method:"post",params:e})},getCameraPointType:function(e){return Object(r["a"])({url:"".concat(a,"/device/space/getInspectionPointById?id=").concat(e.id,"&nodeTypeList=").concat(e.nodeTypeList[0],"&nodeTypeList=").concat(e.nodeTypeList[1]),method:"post"})},getCalendar:function(e){return Object(r["a"])({url:"".concat(o,"/inspection/task/getCalendar"),method:"post",data:e})},getYear:function(e){return Object(r["a"])({url:"".concat(o,"/inspection/task/getYear"),method:"post",data:e})}}}}]);