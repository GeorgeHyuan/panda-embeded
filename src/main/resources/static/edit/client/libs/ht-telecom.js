!function(F,E){"use strict";var Y=ht.AlarmSeverity=function(o,K,u,B,p){this.value=o,this.name=K,this.nickName=u,this.color=B,this.displayName=p};ht.Default.def("ht.AlarmSeverity",E,{toString:function(){return this.displayName||this.name}}),function(){Y.severities=new ht.List,Y._vm={},Y._nm={},Y._cp=function(l,o){if(l&&o){var B=l.value-o.value;return B>0?1:0>B?-1:0}return l&&!o?1:!l&&o?-1:0},Y.each=function(U,W){Y.severities.each(U,W)},Y.getSortFunction=function(){return Y._cp},Y.setSortFunction=function(P){Y._cp=P,Y.severities.sort(P)},Y.add=function(C,G,U,Z,E){var d=new Y(C,G,U,Z,E);return Y._vm[C]=d,Y._nm[G]=d,Y.severities.add(d),Y.severities.sort(Y._cp),d},Y.remove=function(r){var u=Y._nm[r];return u&&(delete Y._nm[r],delete Y._vm[u.value],Y.severities.remove(u)),u},Y.CRITICAL=Y.add(500,"Critical","C","#FF0000"),Y.MAJOR=Y.add(400,"Major","M","#FFA000"),Y.MINOR=Y.add(300,"Minor","m","#FFFF00"),Y.WARNING=Y.add(200,"Warning","W","#00FFFF"),Y.INDETERMINATE=Y.add(100,"Indeterminate","N","#C800FF"),Y.CLEARED=Y.add(0,"Cleared","R","#00FF00"),Y.isClearedAlarmSeverity=function(_){return _?0===_.value:!1},Y.getByName=function(h){return Y._nm[h]},Y.getByValue=function(D){return Y._vm[D]},Y.clear=function(){Y.severities.clear(),Y._vm={},Y._nm={}},Y.compare=function(k,E){return Y._cp(k,E)}}();var I=ht.AlarmState=function(U){this._d=U,this._nm={},this._am={},this._ps=null,this._haa=null,this._hna=null,this._hoa=null,this._hta=null,this._hls=!1,this._aac=0,this._nac=0};ht.Default.def("ht.AlarmState",E,{_ep:!0,_f:function(){this._c1(),this._c2(),this._c3(),this._c4(),this._c5(),this._c6(),this._c7(),this._d.fp("alarmState",null,this)},getHighestAcknowledgedAlarmSeverity:function(){return this._haa},getHighestNewAlarmSeverity:function(){return this._hna},getHighestOverallAlarmSeverity:function(){return this._hoa},getHighestNativeAlarmSeverity:function(){return this._hta},hasLessSevereNewAlarms:function(){return this._hls},_c1:function(){var W=null;for(var N in this._am)N=Y.getByName(N),Y.isClearedAlarmSeverity(N)||0!==this.getAcknowledgedAlarmCount(N)&&(W=W?Y.compare(W,N)>0?W:N:N);this._haa=W},_c2:function(){var m=null;for(var A in this._nm)A=Y.getByName(A),Y.isClearedAlarmSeverity(A)||0!==this.getNewAlarmCount(A)&&(m=m?Y.compare(m,A)>0?m:A:A);this._hna=m},_c3:function(){if(!this._hna)return this._hls=!1,void 0;for(var L in this._nm)if(L=Y.getByName(L),!Y.isClearedAlarmSeverity(L)&&0!==this.getNewAlarmCount(L)&&Y.compare(this._hna,L)>0)return this._hls=!0,void 0;this._hls=!1},_c4:function(){var t=this._haa,f=this._hna,j=this._ps;this._hoa=t,Y.compare(f,this._hoa)>0&&(this._hoa=f),Y.compare(j,this._hoa)>0&&(this._hoa=j)},_c5:function(){var I=this._haa,h=this._hna;this._hta=I,Y.compare(h,this._hta)>0&&(this._hta=h)},increaseAcknowledgedAlarm:function(B,o){if(0!==o){o=o||1;var A=this._am[B.name]||0;A+=o,this._am[B.name]=A,this._f()}},increaseNewAlarm:function(F,T){if(0!==T){T=T||1;var q=this._nm[F.name]||0;q+=T,this._nm[F.name]=q,this._f()}},decreaseAcknowledgedAlarm:function(K,h){if(0!==h){h||(h=1);var T=this._am[K.name]||0;if(T-=h,0>T)throw"Alarm count can not be negative";this._am[K.name]=T,this._f()}},decreaseNewAlarm:function(o,k){if(0!==k){k||(k=1);var E=this._nm[o.name]||0;if(E-=k,0>E)throw"Alarm count can not be negative";this._nm[o.name]=E,this._f()}},acknowledgeAlarm:function(Q){this.decreaseNewAlarm(Q,1),this.increaseAcknowledgedAlarm(Q,1)},acknowledgeAllAlarms:function(U){if(U){var H=this.getNewAlarmCount(U);this.decreaseNewAlarm(U,H),this.increaseAcknowledgedAlarm(U,H)}else for(var v in this._nm)this.acknowledgeAllAlarms(Y.getByName(v))},_c6:function(){this._aac=0;for(var b in this._am)b=Y.getByName(b),this._aac+=this.getAcknowledgedAlarmCount(b)},getAcknowledgedAlarmCount:function(h){return h?this._am[h.name]||0:this._aac},getAlarmCount:function(c){return this.getAcknowledgedAlarmCount(c)+this.getNewAlarmCount(c)},_c7:function(){this._nac=0;for(var V in this._nm)this._nac+=this.getNewAlarmCount(Y.getByName(V))},getNewAlarmCount:function(P){return P?this._nm[P.name]||0:this._nac},setNewAlarmCount:function(T,H){this._nm[T.name]=H,this._f()},removeAllNewAlarms:function(G){G?delete this._nm[G]:this._nm={},this._f()},setAcknowledgedAlarmCount:function(K,i){this._am[K.name]=i,this._f()},removeAllAcknowledgedAlarms:function(W){W?delete this._am[W.name]:this._am={},this._f()},isEmpty:function(){return!this._hoa},clear:function(){this._am={},this._nm={},this._f()},getPropagateSeverity:function(){return this._ps},setPropagateSeverity:function(O){if(this._ep||(O=null),this._ps!==O){var q=this._ps;this._ps=O,this._f(),this._d.fp("propagateSeverity",q,O)}},isEnablePropagation:function(){return this._ep},setEnablePropagation:function(F){var l=this._ep;this._ep=F,this._d.fp("enablePropagation",l,F)&&(F||this.setPropagateSeverity(null))}});var v=ht.AlarmStatePropagator=function(Q){this._dataModel=Q,this._enable=!1,this._isPropagating=!1};ht.Default.def("ht.AlarmStatePropagator",E,{getDataModel:function(){return this._dataModel},isEnable:function(){return this._enable},setEnable:function(M){this._enable!==M&&(this._enable=M,this._enable?(this._dataModel.mm(this.handleDataModelChange,this),this._dataModel.md(this.handleDataPropertyChange,this),this._dataModel.each(function(Y){this.propagate(Y)},this)):(this._dataModel.umm(this.handleDataModelChange,this),this._dataModel.umd(this.handleDataPropertyChange,this)))},handleDataModelChange:function(S){S.data&&this.propagate(S.data)},handleDataPropertyChange:function(L){if("alarmState"===L.property||"enablePropagation"===L.property)this.propagate(L.data);else if("parent"===L.property){var i=L.oldValue;i&&this.propagate(i),this.propagate(L.data)}},propagate:function(d){d&&!this._isPropagating&&(this._isPropagating=!0,this.propagateToTop(d),this._isPropagating=!1)},propagateToTop:function(h){for(this.propagateToParent(null,h);h&&h.getParent();)this.propagateToParent(h,h.getParent()),h=h.getParent()},propagateToParent:function(c,L){var D=null;L.getChildren().each(function(w){var Q=w.getAlarmState().getHighestOverallAlarmSeverity();Y.compare(Q,D)>0&&(D=Q)}),L.getAlarmState().setPropagateSeverity(D)}}),ht.AlarmStateStatistics=function(X){this.sumNew=0,this.sumAcked=0,this.sumTotal=0,this.severtiyMap={},this.dataMap={},this.setDataModel(X)},ht.Default.def("ht.AlarmStateStatistics",E,{ms_fire:1,getDataModel:function(){return this._dataModel},setDataModel:function(D){var S=this._dataModel;S!==D&&(S&&(S.umd(this.handleDataPropertyChange,this),S.umm(this.handleDataModelChange,this),this.severtiyMap={},this.dataMap={}),this._dataModel=D,this.reset(),D.md(this.handleDataPropertyChange,this),D.mm(this.handleDataModelChange,this),this.fp("dataModel",S,D))},dispose:function(){this._dataModel.umd(this.handleDataPropertyChange,this),this._dataModel.umm(this.handleDataModelChange,this),delete this._dataModel},handleDataPropertyChange:function(q){"alarmState"===q.property&&(this.increase(q.data),this.fireAlarmStateChange())},handleDataModelChange:function(i){"add"===i.kind?(this.increase(i.data),this.fireAlarmStateChange()):"remove"===i.kind?(this.decrease(i.data),this.fireAlarmStateChange()):"clear"===i.kind&&(this.severtiyMap={},this.dataMap={},this.fireAlarmStateChange())},fireAlarmStateChange:function(){this.sumAcked=0,this.sumNew=0,this.sumTotal=0,Y.each(function(f){var Q=this.getSumInfo(f);this.sumAcked+=Q.ackedCount,this.sumNew+=Q.newCount,this.sumTotal+=Q.totalCount},this),this.fp("alarmState",!1,!0)},getNewAlarmCount:function(L){if(!L)return this.sumNew;var H=this.getSumInfo(L);return H.newCount},getAcknowledgedAlarmCount:function(Z){if(!Z)return this.sumAcked;var Y=this.getSumInfo(Z);return Y.ackedCount},getTotalAlarmCount:function(K){if(!K)return this.sumTotal;var V=this.getSumInfo(K);return V.totalCount},getSumInfo:function(g){var T=this.severtiyMap[g.name];return T||(T={},T.newCount=0,T.ackedCount=0,T.totalCount=0,this.severtiyMap[g.name]=T),T},decrease:function(M){var y=this.dataMap[M.getId()];y&&(delete this.dataMap[M.getId()],Y.each(function(s){var u=y[s.name],j=this.getSumInfo(s);j.newCount=j.newCount-u.newCount,j.ackedCount=j.ackedCount-u.ackedCount,j.totalCount=j.totalCount-u.totalCount},this))},increase:function(U){if(this.decrease(U),!this._filterFunc||this._filterFunc(U)){var V={},s=U.getAlarmState();this.dataMap[U.getId()]=V,Y.each(function(W){var _={};_.newCount=s.getNewAlarmCount(W),_.ackedCount=s.getAcknowledgedAlarmCount(W),_.totalCount=s.getAlarmCount(W),V[W.name]=_;var t=this.getSumInfo(W);t.newCount=t.newCount+_.newCount,t.ackedCount=t.ackedCount+_.ackedCount,t.totalCount=t.totalCount+_.totalCount},this)}},reset:function(){this.severtiyMap={},this.dataMap={},this._dataModel.each(this.increase,this),this.fireAlarmStateChange()},setFilterFunc:function(C){var y=this._filterFunc;this._filterFunc=C,this.reset(),this.fp("filterFunc",y,C)},getFilterFunc:function(){return this._filterFunc}});var e=ht.Data.prototype;e.getAlarmState=function(){return this._alarmState||(this._alarmState=new I(this))},e=ht.DataModel.prototype,e.isEnableAlarmStatePropagator=function(){return!!this._alarmStatePropagator&&this._alarmStatePropagator.isEnable()},e.setEnableAlarmStatePropagator=function(N){N!=this.isEnableAlarmStatePropagator()&&(N?(this._alarmStatePropagator=new v(this)).setEnable(!0):this._alarmStatePropagator.setEnable(!1))},e=ht.graph.GraphView.prototype,e.getNote2=function(u){var o=u.getAlarmState().getHighestNewAlarmSeverity();if(o){var V=u.getAlarmState().getNewAlarmCount(o)+o.nickName;return u.getAlarmState().hasLessSevereNewAlarms()&&(V+="+"),V}return u.s("note2")},e.getNote2Background=function(E){var m=E.getAlarmState().getHighestNewAlarmSeverity();return m?m.color:E.s("note2.background")},e.getBodyColor=function(f){var Y=f.getAlarmState().getHighestNativeAlarmSeverity();return Y?Y.color:f.s("body.color")},e.getBorderColor=function(A){var O=A.getAlarmState().getPropagateSeverity();return O?O.color:A.s("border.color")},e=ht.widget.TreeView.prototype,e.getBorderColor=function(i){var v=i.getAlarmState().getPropagateSeverity();return v?v.color:i.s("border.color")},e.getIcon=function(E){return E.getIcon()?"__alarmIcon__":null},e=ht.widget.TreeTableView.prototype,e.getBorderColor=function(c){var h=c.getAlarmState().getPropagateSeverity();return h?h.color:c.s("border.color")},e.getIcon=function(m){return m.getIcon()?"__alarmIcon__":null},ht.Default.setImage("__alarmIcon__",{width:16,height:16,comps:[{type:"image",name:{func:function(Y){return Y.getIcon()}},color:{func:function(T){var S=T.getAlarmState().getHighestNativeAlarmSeverity();return S?S.color:T.s("body.color")}},rect:[0,0,16,16]}]});var k=ht.Style;k["note2.expanded"]=!0,k["note2.color"]="#000"}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);