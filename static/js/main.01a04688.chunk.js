(this.webpackJsonptomat=this.webpackJsonptomat||[]).push([[0],{23:function(t,e,a){t.exports={button:"timer_button__3MnBY",input:"timer_input__1vKNZ",result:"timer_result__2u0jg"}},30:function(t,e,a){t.exports=a.p+"static/media/tomato.a0296338.gif"},41:function(t,e,a){t.exports=a(55)},46:function(t,e,a){},47:function(t,e,a){},55:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),i=a(11),o=a.n(i),c=(a(46),a(47),a(28)),u=a(29),s=a(35),m=a(34),l=a(23),p=a.n(l),d=a(30),h=a.n(d),T=a(75),E=function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:p.a.input},n.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d\u0443\u0442:"),n.a.createElement("input",{type:"number",value:t.timerDuration,onChange:function(e){var a=e.target.value;t.updateDuration(a)},min:"0.1",max:"15"}),n.a.createElement("p",null," ")),t.isStarted?n.a.createElement(T.a,{color:"primary",variant:"contained",onClick:t.stop},"Stop"):n.a.createElement(T.a,{color:"primary",variant:"contained",onClick:t.startTimer},"Start"),n.a.createElement("div",{className:p.a.result},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: ",n.a.createElement("span",{id:"result"},t.timeLeft)),n.a.createElement("div",{className:p.a.tomato},t.showTomato?n.a.createElement("img",{src:h.a}):null))},f=a(13),v=a(8),g={isStarted:!1,timeLeft:0,timerDuration:1,timerId:null,showTomato:!1},_=function(t){return{type:"SET_TIME_LEFT",time:t}},b=function(t){return{type:"SET_TIMER_STATUS",isStarted:t}},O=function(t){return{type:"SET_SHOW_TOMATO",show:t}},S=function(t){return function(e){clearInterval(t),e(b(!1)),e(_(0)),console.log("Timer stopped.")}},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TIME_LEFT":return Object(v.a)(Object(v.a)({},t),{},{timeLeft:e.time});case"SET_TIMER_DURATION":return Object(v.a)(Object(v.a)({},t),{},{timerDuration:e.duration});case"SET_SHOW_TOMATO":return Object(v.a)(Object(v.a)({},t),{},{showTomato:e.show});case"SET_TIMER_STATUS":return Object(v.a)(Object(v.a)({},t),{},{isStarted:e.isStarted});case"SET_TIMER_ID":return Object(v.a)(Object(v.a)({},t),{},{timerId:e.id});default:return t}},w=function(t){Object(s.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).startTimer=function(){var e=t.props.timerDuration;t.props.startTimer(e)},t.stop=function(){t.props.stopTimer(t.props.timerId)},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.updateDuration(this.props.timerDuration)}},{key:"render",value:function(){var t=function(t){var e=parseInt(t/1e3%60),a=parseInt(t/6e4%60),r=parseInt(t/36e5%24);return(r=r<10?"0"+r:r)+":"+(a=a<10?"0"+a:a)+":"+(e=e<10?"0"+e:e)}(1e3*this.props.timeLeft);return n.a.createElement(E,{isStarted:this.props.isStarted,timeLeft:t,timerDuration:this.props.timerDuration,updateDuration:this.props.updateDuration,startTimer:this.startTimer,showTomato:this.props.showTomato,stop:this.stop})}}]),a}(n.a.Component),j=Object(f.b)((function(t){return{isStarted:t.timerPage.isStarted,timeLeft:t.timerPage.timeLeft,timerDuration:t.timerPage.timerDuration,timerId:t.timerPage.timerId,showTomato:t.timerPage.showTomato}}),{startTimer:function(t){return function(e){var a=60*t;e(O(!1)),e(b(!0)),e(_(a)),console.log("Timer started from "+a+" seconds");var r=setInterval((function(){(a-=1)<=0?(e(S(r)),e(O(!0))):e(_(a)),console.log(a)}),1e3);e({type:"SET_TIMER_ID",id:r}),console.log("TimerID: "+r)}},updateDuration:function(t){return function(e){e(function(t){return{type:"SET_TIMER_DURATION",duration:t}}(t)),e(_(60*t)),e(O(!1))}},stopTimer:S})(w),D=a(81),A=a(77),y=a(82),M=a(78),L=a(80),N=a(79),R=a(32),k=a.n(R),x=Object(A.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}})),P=function(t){var e=x();return n.a.createElement(y.a,{position:"static"},n.a.createElement(M.a,null,n.a.createElement(N.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},n.a.createElement(k.a,null)),n.a.createElement(L.a,{variant:"h6",className:e.title},"TomatoTimer"),t.isAuth?n.a.createElement(T.a,{color:"inherit"},"Logout"):n.a.createElement(T.a,{color:"inherit"},"Login")))},B=Object(f.b)((function(t){return{isAuth:t.auth.isAuth}}),{})((function(t){return n.a.createElement("div",null,n.a.createElement(P,{isAuth:t.isAuth}))}));var U=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,null),n.a.createElement("div",{className:"App"},n.a.createElement(B,null),n.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(15),F=a(33),W={isAuth:!1},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_IS_AUTH":return Object(v.a)(Object(v.a)({},t),{},{isAuth:e.isAuth});default:return t}},G=Object(C.c)({timerPage:I,auth:H}),J=Object(C.d)(G,Object(C.a)(F.a));window.stor=J;var K=J;o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f.a,{store:K},n.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.01a04688.chunk.js.map