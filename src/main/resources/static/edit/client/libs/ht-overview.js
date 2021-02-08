!function(l,A){"use strict";var J="ht",U=J+".graph.",I=l[J],B=I.graph,G=I.Default,b=I.Color,d=null,W="px",y=G.getInternal(),o=y.getPinchDist,x=G.preventDefault,H=G.getTouchCount,_=G.startDragging;y.addMethod(G,{overviewBackground:b.widgetBackground,overviewMaskBackground:b.transparent,overviewContentBorderColor:b.widgetBorder,overviewContentBackground:b.background},!0),B.Overview=function(f){var X=this,b=X._view=y.createView(1,X);X._canvas=y.createCanvas(b),b.style.background=G.overviewBackground,b.appendChild(X._mask=y.createDiv()),X.setGraphView(f),X.addListeners()},G.def(U+"Overview",A,{ms_v:1,ms_fire:1,ms_listener:1,ms_ac:["maskBackground","contentBorderColor","contentBackground","autoUpdate","fixToRect"],_autoUpdate:!0,_fixToRect:!1,_rate:1,_scrollRect:{x:0,y:0,width:0,height:0},_maskBackground:G.overviewMaskBackground,_contentBorderColor:G.overviewContentBorderColor,_contentBackground:G.overviewContentBackground,getGraphView:function(){return this.gv},setGraphView:function(J){var E=this;if(E.gv!==J){var Z=E.gv;E.gv=J,Z&&(Z.removeViewListener(E.handleGraphViewChanged,E),Z.ump(E.handleGraphViewPropertyChanged,E)),J&&(J.addViewListener(E.handleGraphViewChanged,E),J.mp(E.handleGraphViewPropertyChanged,E)),E.fp("graphView",Z,J),E.redraw()}},getCanvas:function(){return this._canvas},getMask:function(){return this._mask},dispose:function(){this.setGraphView(null)},onPropertyChanged:function(){this.redraw()},handleGraphViewChanged:function(S){this._autoUpdate&&"validate"===S.kind&&this.redraw()},handleGraphViewPropertyChanged:function(f){("canvasBackground"===f.property||this.getFixToRect()&&("zoom"===f.property||"translateX"===f.property||"translateY"===f.property))&&this.redraw()},redraw:function(){var x=this;x._redraw||(x._redraw=1,x.iv(50))},validateImpl:function(){var F=this,v=F.gv,w=F._canvas,q=F.getWidth(),Y=F.getHeight(),k=F._redraw;if(v){var I=F._mask,L=I.style,D=v.getViewRect(),V=this.getFixToRect(),c=V?"boolean"==typeof V?v.getContentRect():V:v.getScrollRect(),m=c.x,x=c.y,T=c.width,r=c.height,K=F._rate=Math.max(T/q,r/Y),h=F._x=(q-T/K)/2,n=F._y=(Y-r/K)/2;if(0!==D.width&&0!==D.height||F.hasRetry||(G.callLater(F.iv,F,d),F.hasRetry=!0),(q!==w.clientWidth||Y!==w.clientHeight)&&(y.setCanvas(w,q,Y),k=1),y.isSameRect(c,F._scrollRect)||(F._scrollRect=c,k=1),k){var U=y.initContext(w),o=v.getDataModel(),p=o.getBackground()||F._contentBackground,M=F._contentBorderColor,z=G.devicePixelRatio;U.clearRect(0,0,q*z,Y*z);var $=o.getBackground()&&o.a("width")>0&&o.a("height")>0;p&&!$&&y.fillRect(U,h*z,n*z,T/K*z,r/K*z,p),y.translateAndScale(U,-m/K+h,-x/K+n,1/K),v._42(U),U.restore(),M&&y.drawBorder(U,M,h*z,n*z,T/K*z,r/K*z)}L.background=F._maskBackground,L.left=h+(D.x-m)/K+W,L.top=n+(D.y-x)/K+W,L.width=D.width/K+W,L.height=D.height/K+W,F._redraw=null}else if(k){var U=y.initContext(w);U.clearRect(0,0,q,Y),U.restore(),F._redraw=null}},center:function(M){var z=this,R=z.gv;if(R){var Q=R._zoom,K=R._29I,S=z._rate,b=z._scrollRect,l=G.getLogicalPoint(M,z._canvas),T=b.x+(l.x-z._x)*S,g=b.y+(l.y-z._y)*S;R.setTranslate((K.width/2-T)*Q,(K.height/2-g)*Q)}},handle_mousedown:function(o){this.handle_touchstart(o)},handleWindowMouseUp:function(Q){this.handleWindowTouchEnd(Q)},handleWindowMouseMove:function(c){this.handleWindowTouchMove(c)},handle_mousewheel:function(y){this.handleScroll(y,y.wheelDelta)},handle_DOMMouseScroll:function(t){2===t.axis&&this.handleScroll(t,-t.detail)},handleScroll:function(u,F){if(x(u),this.gv){var s=this.gv;F>0?s.scrollZoomIn():0>F&&s.scrollZoomOut()}},handle_touchstart:function(W){if(x(W),this.gv&&G.isLeftButton(W)){var S=this,J=S.gv,B=H(W);1===B?G.isDoubleClick(W)&&J.isResettable()?J.reset():(S.center(W),_(S,W)):2===B&&(S._dist=o(W),_(S,W))}},handleWindowTouchEnd:function(){delete this._dist},handleWindowTouchMove:function(k){if(this.gv){var T=this,s=T._dist,z=H(k);1===z?T.center(k):2===z&&s!=d&&T.gv.handlePinch(d,o(k),s)}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);