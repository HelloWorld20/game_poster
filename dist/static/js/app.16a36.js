webpackJsonp([1],{"+D6p":function(t,n,i){t.exports=i.p+"static/img/bg-linshao.9f8fb.png"},"+U5t":function(t,n,i){t.exports=i.p+"static/img/text-1-discover.72dbb.png"},"/VVs":function(t,n){throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @charset \"UTF-8\";\n| h1, h2, h3, h4, h5, h6 {\n|   margin: 0;")},"19/2":function(t,n,i){"use strict";var e=i("mvHQ"),a=i.n(e),s=i("d2gY"),o=i("mtWM"),c=i.n(o),g={wxSignPackage:null,getWxSignPackage:function(t){c.a.get("http://api.24.friendia.net/wechat/sdkConfig",{params:{url:location.href.split("#")[0]}}).then(function(n){window.res=n,console.log("sdk.getWxSignPackage成功"),console.log(a()(n)),g.wxSignPackage=n.data.payload,t&&t()},function(t){console.warn("sdk.getWxSignPackage错误"),console.log(a()(t))})},configWx:function(){return console.log("configWx",g.wxSignPackage),!!(g.wxSignPackage.appId&&g.wxSignPackage.timestamp&&g.wxSignPackage.nonceStr&&g.wxSignPackage.signature)&&(wx.config({debug:!0,appId:g.wxSignPackage.appId,timestamp:g.wxSignPackage.timestamp,nonceStr:g.wxSignPackage.nonceStr,signature:g.wxSignPackage.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","hideMenuItems","startRecord","stopRecord","onVoiceRecordEnd","playVoice","onVoicePlayEnd","pauseVoice","stopVoice","uploadVoice","downloadVoice"]}),this)},getUserOpenid:function(t){},setWxShare:function(t,n){s.a.share;wx.ready(function(){console.log("wx.ready"),wx.onMenuShareTimeline({title:"opts.title || shareInfo.title",link:window.location.href,imgUrl:"",success:function(){console.log("分享朋友圈成功"),n&&n()},cancel:function(){}}),wx.onMenuShareAppMessage({title:"opts.title || shareInfo.title",desc:"opts.desc || shareInfo.desc",link:window.location.href,imgUrl:"",type:"link",dataUrl:"",success:function(){console.log("分享朋友成功"),n&&n()},cancel:function(){}})})},requestShare:function(){}};n.a=g},"1ise":function(t,n,i){"use strict";var e=i("EuEE");n.a={data:function(){return{names:"",blinkShown:!1}},methods:{nextStep:function(){this.names?this.$router.replace("Edit"):this.$refs.input.focus()}},watch:{names:function(t){e.a.name=t}}}},"24eF":function(t,n){},"2YXW":function(t,n,i){t.exports=i.p+"static/img/text-0-needguid.d1d1f.png"},"40tl":function(t,n,i){"use strict";function e(t){i("aIFF")}var a=i("1ise"),s=i("hv5J"),o=i("VU/8"),c=e,g=o(a.a,s.a,!1,c,"data-v-6c868981",null);n.a=g.exports},"4aKs":function(t,n){},"5PRt":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],s={render:e,staticRenderFns:a};n.a=s},"6XZ4":function(t,n,i){t.exports=i.p+"static/img/text-2.1.a0e82.png"},"7QTI":function(t,n,i){"use strict";function e(t){i("24eF")}var a=i("cTcK"),s=i("ma7m"),o=i("VU/8"),c=e,g=o(a.a,s.a,!1,c,"data-v-eb22fe66",null);n.a=g.exports},"7rwl":function(t,n){},"8taH":function(t,n,i){"use strict";var e=(i("EuEE"),i("IXKe")),a=i("d2gY");n.a={data:function(){return{progress:90}},created:function(){var t=this;new e.a(a.a,this.percentage,this.loaded);setTimeout(function(){t.loaded()},3e3)},methods:{percentage:function(t){},loaded:function(){this.$router.replace("Home")}}}},"94p3":function(t,n,i){t.exports=i.p+"static/img/text-change.ad1dd.png"},AJqI:function(t,n,i){"use strict";function e(t){i("DgWB")}var a=i("wQ0S"),s=i("sisB"),o=i("VU/8"),c=e,g=o(a.a,s.a,!1,c,"data-v-358b242e",null);n.a=g.exports},AZKz:function(t,n,i){t.exports=i.p+"static/img/btn-up.6d18a.png"},Almw:function(t,n,i){t.exports=i.p+"static/img/text-2-landscape.81b58.png"},BOXA:function(t,n,i){t.exports=i.p+"static/img/bg-yuminhong.fed6d.png"},BYJe:function(t,n){},BzPB:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"scroll",style:{"background-image":"url("+i("fy4H")+")"}},[e("div",{ref:"big",staticClass:"scroll__moving",style:{"background-image":"url("+i("oFSP")+")"}}),t._v(" "),e("div",{staticClass:"scroll__logo",style:{"background-image":"url("+i("EEMZ")+")"}}),t._v(" "),e("div",{staticClass:"scroll__text"},[e("div",{ref:"text1",staticClass:"scroll__text--1",style:{"background-image":"url("+i("dJD0")+")"}}),t._v(" "),e("div",{ref:"text2",staticClass:"scroll__text--2",style:{"background-image":"url("+i("6XZ4")+")"}}),t._v(" "),e("div",{ref:"text3",staticClass:"scroll__text--3",style:{"background-image":"url("+i("uTvD")+")"}}),t._v(" "),e("div",{ref:"text4",staticClass:"scroll__text--4",style:{"background-image":"url("+i("vXgO")+")"}}),t._v(" "),e("div",{ref:"text5",staticClass:"scroll__text--5",style:{"background-image":"url("+i("fs6t")+")"}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.animating,expression:"!animating"}],staticClass:"scroll__arrow animated faster",style:{"background-image":"url("+i("k9Ou")+")"}})])},a=[],s={render:e,staticRenderFns:a};n.a=s},DgWB:function(t,n){},Ds4s:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"loading",style:{"background-image":"url("+i("fy4H")+")"}},[e("div",{staticClass:"placeholder"}),t._v(" "),e("div",{staticClass:"loading__progress"},[e("div",{staticClass:"loading__progress-gray",style:{"background-image":"url("+i("i07y")+")"}}),t._v(" "),e("div",{staticClass:"loading__progress-white",style:{"background-image":"url("+i("Oa0F")+")",width:t.progress+"%"}})]),t._v(" "),e("div",{staticClass:"loading__text"},[t._v(t._s(t.progress)+" % ")])])},a=[],s={render:e,staticRenderFns:a};n.a=s},EEMZ:function(t,n,i){t.exports=i.p+"static/img/bg-logo-gold.0cbb0.png"},Eov3:function(t,n){},EuEE:function(t,n,i){"use strict";i.d(n,"c",function(){return a}),i.d(n,"a",function(){return s}),i.d(n,"b",function(){return o});var e=i("7+uW"),a=function(){return/micromessenger/i.test(navigator.userAgent)},s=new e.a({data:function(){return{musicList:{}}}}),o=function(t){return parseInt(getComputedStyle(document.getElementsByTagName("body")[0]).fontSize,10)}},Fs8J:function(t,n,i){"use strict";var e=i("+Uzz"),a=i("rxKx"),s=i.n(a);n.a={data:function(){return{ready:!1}},mounted:function(){this.initGusture(),this.animate()},methods:{initGusture:function(){var t=this,n=new s.a(this.$el);n.get("swipe").set({direction:s.a.DIRECTION_VERTICAL}),n.on("swipeup",function(n){t.ready&&t.$router.replace("Scroll"),console.log("gustrue: ",n.type)})},animate:function(){new e.a({onComplete:this.onComplete}).fromTo(this.$refs.logo,3,{scale:4,opacity:.5},{scale:1,opacity:1}).to(this.$refs.newworld,.5,{opacity:1}).to(this.$refs.many,.5,{opacity:1}).to(this.$refs.noname,.5,{opacity:1}).to(this.$refs.mention,.5,{opacity:1}).to(this.$refs.guid,.5,{opacity:1}).addLabel("sloganEnd","+=0.5").to(this.$refs.change,1,{opacity:1}).to(this.$refs.small,.5,{opacity:1},"sloganEnd").to(this.$refs.arrow,.5,{opacity:1})},onComplete:function(){this.ready=!0}}}},H868:function(t,n,i){"use strict";function e(t){i("4aKs")}var a=i("nT0L"),s=i("BzPB"),o=i("VU/8"),c=e,g=o(a.a,s.a,!1,c,"data-v-12ec9659",null);n.a=g.exports},IGTA:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"main",style:{"background-image":"url("+i("fy4H")+")"}},[e("div",{staticClass:"main__slogan"},[e("div",{ref:"guid",staticClass:"main__slogan-guid",style:{"background-image":"url("+i("2YXW")+")"}}),t._v(" "),e("div",{ref:"mention",staticClass:"main__slogan-mention",style:{"background-image":"url("+i("tW1p")+")"}}),t._v(" "),e("div",{ref:"noname",staticClass:"main__slogan-noname",style:{"background-image":"url("+i("dKIy")+")"}}),t._v(" "),e("div",{ref:"many",staticClass:"main__slogan-many",style:{"background-image":"url("+i("JLMU")+")"}}),t._v(" "),e("div",{ref:"newworld",staticClass:"main__slogan-newworld",style:{"background-image":"url("+i("zKLD")+")"}})]),t._v(" "),e("div",{ref:"logo",staticClass:"main__logo",style:{"background-image":"url("+i("XNvM")+")"}}),t._v(" "),e("div",{staticClass:"main__center"},[e("div",{ref:"change",staticClass:"main__center-change",style:{"background-image":"url("+i("94p3")+")"}}),t._v(" "),e("div",{ref:"small",staticClass:"main__center-small",style:{"background-image":"url("+i("EEMZ")+")"}})]),t._v(" "),e("div",{ref:"arrow",staticClass:"main__arrow",style:{"background-image":"url("+i("k9Ou")+")"}})])},a=[],s={render:e,staticRenderFns:a};n.a=s},IXKe:function(t,n,i){"use strict";var e=0,a="",s=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Function,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Function;this.config=t,this.percentageCB=n,this.loadedCB=i};s.prototype.init=function(){this.preloadImg()},s.prototype.preloadImg=function(){var t=this;window.imagesCache=[],a=this.config.imgs.length;var n=0;this.config.imgs.forEach(function(s,o){var c=new Image;c.onerror=c.onload=function(){e++,n=e/a,t.percentageCB(n),e>=a&&t.loadedCB(n)},c.src=i("PvXa")("./"+s),window.imagesCache[o]=c})},n.a=s},JLMU:function(t,n,i){t.exports=i.p+"static/img/text-0-many.f9454.png"},KfBn:function(t,n,i){t.exports=i.p+"static/img/bg-papi.fdc90.png"},M93x:function(t,n,i){"use strict";function e(t){i("Eov3")}var a=i("xJD8"),s=i("5PRt"),o=i("VU/8"),c=e,g=o(a.a,s.a,!1,c,null,null);n.a=g.exports},NHnr:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("7+uW"),a=i("EK5g"),s=(i.n(a),i("M93x")),o=i("YaEn"),c=i("19/2"),g=i("EuEE");i("kw8N"),e.a.config.productionTip=!1,Object(g.c)()&&(c.a.getWxSignPackage(c.a.configWx),c.a.setWxShare()),new e.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},NxGh:function(t,n,i){"use strict";function e(t){i("qhs3")}var a=i("8taH"),s=i("Ds4s"),o=i("VU/8"),c=e,g=o(a.a,s.a,!1,c,"data-v-48404ee0",null);n.a=g.exports},Nzl9:function(t,n,i){t.exports=i.p+"static/img/bg-libeika.dc87c.png"},Oa0F:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAAfCAYAAAAWTCMvAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAA+BJREFUeJzt3U9II1ccB/A3M05iYyYh4Jo/DkYpgRplSZpGN1CrFRLQ0OQQnTQWJJMmgWVLDz32UqGXsrSnloVCt8geZEHcdluhh7Z066ZIXS8pHqJY47+DtlT3sGoqI9lLs0j/6Gbz5430+7nlzcvvfU8/hvcmE2ZiYoIAwMUSCoU+29nZyS4sLHxMY/0GGosCwLPr7e192+12v0kIIVar1T07O3v15OTkz3pmYOu5GABUxm63vxIIBD4sfXa5XHI8Hr8nCIKtnjnQOAAuCIPBII6Ojk6zLMufHhdF8UoqlXogiuKVemVB4wC4ADiO00iSNNPU1NTyb9cFQbDF4/F7brc7UY88aBwAF0AwGLzR2trac9YcjuO0oVDo5vDw8Cd/vyupNjQOAJXzeDzp0mbo0/B6vdfGx8e/1el0l2qVCY0DQMVEUfQNDQ2VfeRqt9v70+n0A4vF4q5FLjQOAJXS6/UWSZKmOY7TPMv3jUajPZFIZLq7u1+vdjZuYGCg2jUBoEIcx2nGxsZmW1pauiuswzudzgjHcZp8Pv9DtfLhjgNAhQKBwEdtbW0vV6kc09fX964kSdM8zzdVoyAaB4DKuFyueE9Pz1vVrtvZ2RmRZXnOYDCIldZC4wBQEavV6gkGgzdqWP/FZDL583lHu+dB4wBQCZ1Odykajd5paGh4rpbrlB4Wq2TTFJujACrAMAwXi8XuWiwWVz3WY1mWdzqdEYZhmPX19R/L/n4tQgFAefx+//WOjo7BOi/L9Pf3vzcyMnK73LscNA4Ayrq6uqI+n+8diutLsizPlfMLWzQOAIrMZvPlcDj8Oe0cNpvtpVQqtfC0T5qicQBQ0tjYaIpGo3d4ntfRzkIIIYIgtMqyPOdwOILnzUXjAKCAYRguEolMmUym52lnOU2j0ehjsdhdr9d77ax5OFUBoGBwcPD9er07o1wMw7AOh2NYq9Ua1tbWviOEFP8xZ2Nj4369XzsG8H9nMpk6CCEM7RznyeVyX8zMzLyhKMrR6XFmcXHxU4/Hk6YVDADUbXt7e35qauq1o6OjP0pj7PLy8lc0QwGAuomi6EskEhmj0WgvjbH5fP774+PjRzSDAYC6NTc3v5BMJufNZvNlQghhFUUp/LUBAgDwn/R6vVWW5fvt7e2vsoQQksvlvqQdCgDUT6vVGsLh8E2WEEJWV1e/KRaLJ7RDAYD6ZbPZWywhhBwcHPy2tbU1TzsQAKjb7u7uL5lM5oMnT47idAUAzlDMZrO3JicnBxRFKTz50+mVlZWv/X7/dZrJAEAdCoXCw8PDw9/39vZWNzc3f1paWrq9v7//a+n6Y6Fx8oB8htZsAAAAAElFTkSuQmCC"},PvXa:function(t,n,i){function e(t){return i(a(t))}function a(t){var n=s[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var s={"./animate.css":"kw8N","./imgs/bg-logo-50.png":"njor","./imgs/bg-logo-gold.png":"EEMZ","./imgs/bg-logo-large.png":"oFSP","./imgs/bg-logo.png":"XNvM","./imgs/bg-main.png":"fy4H","./imgs/bg-progress-gray.png":"i07y","./imgs/bg-progress-white.png":"Oa0F","./imgs/btn-up.png":"AZKz","./imgs/icon-up.png":"k9Ou","./imgs/name/bg-fandeng.png":"fG8C","./imgs/name/bg-gudian.png":"efPp","./imgs/name/bg-liangzhanhua.png":"dZMQ","./imgs/name/bg-libeika.png":"Nzl9","./imgs/name/bg-linan.png":"apeY","./imgs/name/bg-linshao.png":"+D6p","./imgs/name/bg-me.png":"WVVD","./imgs/name/bg-panyao.png":"eH+a","./imgs/name/bg-papi.png":"KfBn","./imgs/name/bg-qinshuo.png":"foaX","./imgs/name/bg-songchao.png":"uCAj","./imgs/name/bg-tanjing.png":"yS5H","./imgs/name/bg-xuzhibin.png":"mMF3","./imgs/name/bg-yangdazhi.png":"ibJ0","./imgs/name/bg-yuminhong.png":"BOXA","./imgs/name/bg-zhangmofan.png":"QnsA","./imgs/share.png":"c+G4","./imgs/text-0-many.png":"JLMU","./imgs/text-0-mention.png":"tW1p","./imgs/text-0-needguid.png":"2YXW","./imgs/text-0-newworld.png":"zKLD","./imgs/text-0-noname.png":"dKIy","./imgs/text-1-change.png":"mqui","./imgs/text-1-discover.png":"+U5t","./imgs/text-1-value.png":"nrQf","./imgs/text-1.1.png":"dJD0","./imgs/text-2-fearless.png":"oTKk","./imgs/text-2-landscape.png":"Almw","./imgs/text-2-longway.png":"pmuU","./imgs/text-2-sun.png":"Xjuh","./imgs/text-2.1.png":"6XZ4","./imgs/text-2.2.png":"uTvD","./imgs/text-3.1.png":"vXgO","./imgs/text-4.1.png":"fs6t","./imgs/text-change.png":"94p3","./scss/extend.scss":"bus+","./scss/extend.wxss":"/VVs"};e.keys=function(){return Object.keys(s)},e.resolve=a,t.exports=e,e.id="PvXa"},QnsA:function(t,n,i){t.exports=i.p+"static/img/bg-zhangmofan.03888.png"},UAgs:function(t,n,i){"use strict";!function(){var t=window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight,n=t/3.75;document.documentElement.style.fontSize=n+"px"}()},WVVD:function(t,n){t.exports="data:image/png;base64,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"},XNvM:function(t,n,i){t.exports=i.p+"static/img/bg-logo.7401f.png"},Xjuh:function(t,n,i){t.exports=i.p+"static/img/text-2-sun.d5d7d.png"},YaEn:function(t,n,i){"use strict";var e=i("7+uW"),a=i("/ocq"),s=i("NxGh"),o=i("lO7g"),c=i("H868"),g=i("z4Uu"),r=i("40tl"),u=i("AJqI"),l=i("7QTI");e.a.use(a.a),n.a=new a.a({routes:[{path:"/",component:s.a},{path:"/Home",component:o.a},{path:"/Scroll",component:c.a},{path:"/Slogan",component:g.a},{path:"/Names",component:r.a},{path:"/Edit",component:u.a},{path:"/Poster",component:l.a},{path:"*",component:s.a}]})},aIFF:function(t,n){},apeY:function(t,n,i){t.exports=i.p+"static/img/bg-linan.33878.png"},"bus+":function(t,n){},"c+G4":function(t,n,i){t.exports=i.p+"static/img/share.65b39.png"},cTcK:function(t,n,i){"use strict";n.a={}},d2gY:function(t,n,i){"use strict";n.a={share:{title:"分享标题",desc:"分享描述",link:window.location.href,imgUrl:""},imgs:[],audios:[]}},dJD0:function(t,n,i){t.exports=i.p+"static/img/text-1.1.daef8.png"},dKIy:function(t,n,i){t.exports=i.p+"static/img/text-0-noname.7d8d6.png"},dZMQ:function(t,n,i){t.exports=i.p+"static/img/bg-liangzhanhua.df69b.png"},"eH+a":function(t,n,i){t.exports=i.p+"static/img/bg-panyao.cf4c1.png"},efPp:function(t,n,i){t.exports=i.p+"static/img/bg-gudian.9a93b.png"},f52H:function(t,n,i){"use strict";var e=i("+Uzz"),a=i("rxKx"),s=i.n(a),o=0,c=!1;n.a={data:function(){return{animating:!1}},mounted:function(){this.initGusture(),this.animating||(o++,this.runAnimate())},methods:{initGusture:function(){var t=this,n=new s.a(this.$el);n.get("swipe").set({direction:s.a.DIRECTION_VERTICAL}),n.on("swipeup",function(n){console.log("gustrue: ",n.type),t.animating||(o++,t.runAnimate())})},runAnimate:function(){switch(o){case 1:this.animationOne();break;case 2:this.animationTwo();break;default:this.nextStep()}},animationOne:function(){var t=this;if(!this.animating){this.animating=!0;new e.a({onComplete:function(){t.animating=!1}}).to(this.$refs.slogan3,1,{opacity:1}).to(this.$refs.slogan2,1,{opacity:1}).to(this.$refs.slogan1,1,{opacity:1})}},animationTwo:function(){var t=this;if(!this.animating){this.animating=!0;new e.a({onComplete:function(){t.animating=!1,c=!0}}).to([this.$refs.slogan1,this.$refs.slogan2,this.$refs.slogan3],.5,{opacity:0}).to(this.$refs.slogan4,1,{opacity:1}).to(this.$refs.slogan5,1,{opacity:1}).to(this.$refs.slogan6,1,{opacity:1}).to(this.$refs.slogan7,1,{opacity:1})}},nextStep:function(){c&&this.$router.replace("Names")}}}},fG8C:function(t,n,i){t.exports=i.p+"static/img/bg-fandeng.9c4b6.png"},foaX:function(t,n,i){t.exports=i.p+"static/img/bg-qinshuo.f85e3.png"},fs6t:function(t,n,i){t.exports=i.p+"static/img/text-4.1.74996.png"},fy4H:function(t,n,i){t.exports=i.p+"static/img/bg-main.7c238.png"},hv5J:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"names",style:{"background-image":"url("+i("fy4H")+")"}},[e("div",{staticClass:"names__one"},[e("div",{staticClass:"names__one--1",style:{"background-image":"url("+i("BOXA")+")"}}),t._v(" "),e("div",{staticClass:"names__one--2",style:{"background-image":"url("+i("KfBn")+")"}}),t._v(" "),e("div",{staticClass:"names__one--3",style:{"background-image":"url("+i("QnsA")+")"}}),t._v(" "),e("div",{staticClass:"names__one--4",style:{"background-image":"url("+i("eH+a")+")"}}),t._v(" "),e("div",{staticClass:"names__one--5",style:{"background-image":"url("+i("fG8C")+")"}}),t._v(" "),e("div",{staticClass:"names__one--6",style:{"background-image":"url("+i("Nzl9")+")"}}),t._v(" "),e("div",{staticClass:"names__one--7",style:{"background-image":"url("+i("dZMQ")+")"}}),t._v(" "),e("div",{staticClass:"names__one--8",style:{"background-image":"url("+i("foaX")+")"}})]),t._v(" "),e("div",{staticClass:"names__input"},[e("div",{staticClass:"names__input-me",style:{"background-image":"url("+i("WVVD")+")"}}),t._v(" "),e("div",{staticClass:"names__input-box"},[e("div",{staticClass:"names__input-box-text"},[e("span",[t._v("\n                    "+t._s(t.names)+"\n                    "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.blinkShown,expression:"blinkShown"}]})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.names,expression:"names"}],ref:"input",staticClass:"names__input-box-input",attrs:{type:"text",autofocus:""},domProps:{value:t.names},on:{focus:function(n){t.blinkShown=!0},blur:function(n){t.blinkShown=!1},input:function(n){n.target.composing||(t.names=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"names__two"},[e("div",{staticClass:"names__two--1",style:{"background-image":"url("+i("+D6p")+")"}}),t._v(" "),e("div",{staticClass:"names__two--2",style:{"background-image":"url("+i("apeY")+")"}}),t._v(" "),e("div",{staticClass:"names__two--3",style:{"background-image":"url("+i("mMF3")+")"}}),t._v(" "),e("div",{staticClass:"names__two--4",style:{"background-image":"url("+i("uCAj")+")"}}),t._v(" "),e("div",{staticClass:"names__two--5",style:{"background-image":"url("+i("ibJ0")+")"}}),t._v(" "),e("div",{staticClass:"names__two--6",style:{"background-image":"url("+i("efPp")+")"}}),t._v(" "),e("div",{staticClass:"names__two--7",style:{"background-image":"url("+i("yS5H")+")"}})]),t._v(" "),e("div",{staticClass:"names__btn",style:{"background-image":"url("+i("AZKz")+")"},on:{click:t.nextStep}})])},a=[],s={render:e,staticRenderFns:a};n.a=s},i07y:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAAfCAYAAAAWTCMvAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAnpJREFUeJzt3buLE1EYhvEnFyO7imCxorviIjZWwqqIC+KtEsRCBBVsvIAgisWWNsZiQcStFCvXYgsRRPFSWKggXhC10sJK/wFFsBBcC9HiZDCsZBOTyZwZeX5Nkplkzle9TL5zTlKq1+tIKpyrwFvgUozBqzEGldST08CxxvMx4ATwI8sCylkOJqlnW4GLTa+PAE+A4SyLMDik4lgJ3AQWzDm+GXjTeMyEwSEVQw24BSxrcX6YcOdxNItiDA6pGK4Am9q8ZyEwDVzm77uSVBkcUv4d508ztBMngYfAUH/KMTikvBunuynXbYS+x1i65QQGh5RfywnN0FqXnx8FngMHU6uoweCQ8qlGCI2RHq8zCFwHJoFSr0UlDA4pn6aALSldqwScIQTRojQuaHBI+XMYONWH6+4DnhLWg/TE4JDyZQNh6rVf1gOvaD+1Oy+DQ8qPIeA2MNDncZLFYl03TQ0OKR8qwA1gVUbjDRCapnW6aJoaHFI+XAB2ZjxmCThLCKx/ussxOKT4DgATEcffT2iadrzD1uCQ4loHXItdBLAReE2HK00NDimepYRm6GDsQhpGCHceu9u90eCQ4qgQmpNrYhcyx2LgLmGjXEsGhxTHOWBX7CJaqBC25k/RIiOqwDMy/tkxSayOXUAHJgh1HgK+N5+oAu9Jb028pP/LXuAxsAf4khwsA/diVSSpEMYJ2/NHkwNlQpp8i1WRpEJYC7wkTB9TBmaBRzErklQIKwg90R1Jx/ROxGIkFccSYDoJjgfAz4jFSCqOmSQ4PhG+v0jSfN4B55sXdzi7IqmVX8AMsB2Ybf7T6fuErb2S9BX4DHwAXhC23n9MTv4G235KM/cOqooAAAAASUVORK5CYII="},ibJ0:function(t,n,i){t.exports=i.p+"static/img/bg-yangdazhi.b753a.png"},k9Ou:function(t,n){t.exports="data:image/png;base64,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"},kw8N:function(t,n){},lO7g:function(t,n,i){"use strict";function e(t){i("7rwl")}var a=i("Fs8J"),s=i("IGTA"),o=i("VU/8"),c=e,g=o(a.a,s.a,!1,c,"data-v-331db6ce",null);n.a=g.exports},mMF3:function(t,n,i){t.exports=i.p+"static/img/bg-xuzhibin.3d824.png"},ma7m:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div")},a=[],s={render:e,staticRenderFns:a};n.a=s},mqui:function(t,n,i){t.exports=i.p+"static/img/text-1-change.9c2fd.png"},nT0L:function(t,n,i){"use strict";var e=i("+Uzz"),a=i("EuEE"),s=i("rxKx"),o=i.n(s),c=function(){return Object(a.b)()/100};n.a={data:function(){return{currentStep:0,animating:!1,ready:!1}},mounted:function(){this.initGusture();Object(a.b)()},methods:{initGusture:function(){var t=this,n=new o.a(this.$el);n.get("swipe").set({direction:o.a.DIRECTION_VERTICAL}),n.on("swipeup",function(n){console.log("gustrue: ",n.type),t.animating||(t.currentStep++,t.runAnimate())})},runAnimate:function(){switch(this.currentStep){case 1:this.animationOne();break;case 2:this.animationTwo();break;case 3:this.animationThree();break;case 4:this.animationFour();break;default:this.nextStep()}},animationOne:function(){var t=this;if(!this.animating){this.animating=!0;new e.a({onComplete:function(){t.animating=!1}}).to(this.$refs.text1,1,{opacity:1})}},animationTwo:function(){var t=this;if(!this.animating){this.animating=!0;var n=new e.a,i=new e.a({onComplete:function(){t.animating=!1}}),a=-1368*c();console.log(a),n.to(this.$refs.big,3,{x:a}),i.to(this.$refs.text1,1,{opacity:0,delay:1}).to([this.$refs.text2,this.$refs.text3],1,{opacity:1})}},animationThree:function(){var t=this;if(!this.animating){this.animating=!0;var n=new e.a({onComplete:function(){t.animating=!1}}),i=new e.a,a=-486.72*c(),s=-977.68*c();n.to(this.$refs.big,3,{x:a,y:s}),i.to([this.$refs.text2,this.$refs.text3],1,{opacity:0,delay:1}).to(this.$refs.text4,1,{opacity:1})}},animationFour:function(){var t=this;if(!this.animating){this.animating=!0;var n=new e.a({onComplete:function(){t.animating=!1}}),i=new e.a,a=1521*-.71*c(),s=-1422.08*c();n.to(this.$refs.big,3,{x:a,y:s}),i.to(this.$refs.text4,1,{opacity:0,delay:1}).to(this.$refs.text5,1,{opacity:1})}},nextStep:function(){this.$router.replace("Slogan")}}}},njor:function(t,n,i){t.exports=i.p+"static/img/bg-logo-50.4fcdd.png"},nrQf:function(t,n,i){t.exports=i.p+"static/img/text-1-value.db8d0.png"},oFSP:function(t,n,i){t.exports=i.p+"static/img/bg-logo-large.fcb3c.png"},oTKk:function(t,n,i){t.exports=i.p+"static/img/text-2-fearless.5e1c5.png"},pmuU:function(t,n,i){t.exports=i.p+"static/img/text-2-longway.051fc.png"},qhs3:function(t,n){},sisB:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("section",{ref:"posterBody",staticClass:"edit"},[t._v("\n    "+t._s(t.name)+"\n")])},a=[],s={render:e,staticRenderFns:a};n.a=s},tW1p:function(t,n,i){t.exports=i.p+"static/img/text-0-mention.00327.png"},uCAj:function(t,n,i){t.exports=i.p+"static/img/bg-songchao.c491d.png"},uTvD:function(t,n,i){t.exports=i.p+"static/img/text-2.2.76370.png"},vXgO:function(t,n,i){t.exports=i.p+"static/img/text-3.1.2daef.png"},"w/Zz":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"slogan",style:{"background-image":"url("+i("fy4H")+")"}},[e("div",{staticClass:"slogan__one"},[e("div",{ref:"slogan1",staticClass:"slogan__one--1",style:{"background-image":"url("+i("nrQf")+")"}}),t._v(" "),e("div",{ref:"slogan2",staticClass:"slogan__one--2",style:{"background-image":"url("+i("+U5t")+")"}}),t._v(" "),e("div",{ref:"slogan3",staticClass:"slogan__one--3",style:{"background-image":"url("+i("mqui")+")"}})]),t._v(" "),e("div",{staticClass:"slogan__two"},[e("div",{ref:"slogan4",staticClass:"slogan__two--1",style:{"background-image":"url("+i("pmuU")+")"}}),t._v(" "),e("div",{ref:"slogan5",staticClass:"slogan__two--2",style:{"background-image":"url("+i("Almw")+")"}}),t._v(" "),e("div",{ref:"slogan6",staticClass:"slogan__two--3",style:{"background-image":"url("+i("oTKk")+")"}}),t._v(" "),e("div",{ref:"slogan7",staticClass:"slogan__two--4",style:{"background-image":"url("+i("Xjuh")+")"}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.animating,expression:"!animating"}],staticClass:"slogan__arrow",style:{"background-image":"url("+i("k9Ou")+")"}})])},a=[],s={render:e,staticRenderFns:a};n.a=s},wQ0S:function(t,n,i){"use strict";var e=i("2Pnh"),a=i.n(e),s=i("EuEE");n.a={data:function(){return{name:""}},mounted:function(){this.name=s.a.name},methods:{capture:function(){a()(document.querySelector(".edit")).then(function(t){var n=t.toDataURL();s.a.posterUrl=n})}}}},xJD8:function(t,n,i){"use strict";i("UAgs");n.a={}},yS5H:function(t,n,i){t.exports=i.p+"static/img/bg-tanjing.677ff.png"},z4Uu:function(t,n,i){"use strict";function e(t){i("BYJe")}var a=i("f52H"),s=i("w/Zz"),o=i("VU/8"),c=e,g=o(a.a,s.a,!1,c,"data-v-6fdf832a",null);n.a=g.exports},zKLD:function(t,n,i){t.exports=i.p+"static/img/text-0-newworld.eefd8.png"}},["NHnr"]);
//# sourceMappingURL=app.16a36.js.map