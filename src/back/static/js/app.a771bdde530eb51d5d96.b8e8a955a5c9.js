webpackJsonp([1],{"/39c":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("/39c")},null,null).exports,o=a("/ocq"),r=a("/IwO"),l=a.n(r),c=a("mtWM"),u=a.n(c),m=new r.AMapManager;s.default.use(l.a),l.a.initAMapApiLoader({key:"d8488789f28d0ea005ec92e21fbf2c23",plugin:["AMap.Autocomplete","AMap.Geocoder","AMap.Geolocation","AMap.CircleEditor"],v:"1.4.4"});var p={data:function(){var t=this;return{url:"http://10.6.2.61:8866/statistics/get/bad/points?date=",amapManager:m,zoom:17,center:[121.562236,29.8000444],date:"",badPoints:[],events:{click:function(e){var a="Position : ["+e.lnglat.lat+e.lnglat.lng+"]";t.$alert(a,"Message",{confirmButtonText:"OK"})}}}},watch:{date:function(t,e){this.requestData(t)}},created:function(){this.onload()},methods:{onload:function(){var t=this.getNowFormatDate();this.requestData(t)},requestData:function(t){var e=this;u.a.get(this.url+t).then(function(t){var a=t.data;a.length<=0&&e.$message({type:"info",message:"NO DATA"}),e.changeFormat(a)}).catch(function(t){this.$message({type:"warning",message:"操作失败，请稍后再试"}),console.log(t)})},changeFormat:function(t){for(var e=[],a=[],s={},i=0;i<t.length;i++)a.push(t[i].point_longitude),a.push(t[i].point_latitude),s={center:a,radius:t[i].point_radius,status:t[i].valid_status},console.log(s),e.push(s),a=[];this.badPoints=e},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,s=t.getDate();return a>=1&&a<=9&&(a="0"+a),s>=0&&s<=9&&(s="0"+s),e+"-"+a+"-"+s},showCenter:function(){console.log("aaa"),console.log(this.$refs.circle.$$getCenter())}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"fh5co-page"}},[a("aside",{staticClass:"border js-fullheight",attrs:{id:"fh5co-aside",role:"complementary"}},[a("h1",{attrs:{id:"fh5co-logo"}},[t._v("Monitoring System")]),t._v(" "),a("nav",{attrs:{id:"fh5co-main-menu",role:"navigation"}},[a("ul",[a("li",[a("router-link",{attrs:{to:"Login"}},[t._v("Home")])],1),t._v(" "),a("li",{staticClass:"fh5co-active"},[a("router-link",{attrs:{to:"Map"}},[t._v("Map")])],1)])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{attrs:{id:"fh5co-main"}},[a("el-date-picker",{staticClass:"date-picker",attrs:{type:"date",placeholder:"select date","value-format":"yyyy-MM-dd"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),a("div",{staticClass:"amap-page-container"},[a("el-amap",{ref:"map",attrs:{vid:"amapDemo","amap-manager":t.amapManager,center:t.center,zoom:t.zoom}},t._l(t.badPoints,function(e,s){return a("el-amap-circle",{key:s,ref:"circle",refInFor:!0,attrs:{center:e.center,radius:e.radius,events:t.events,strokeColor:e.status?"#7B68EE":"#ee2200",strokeOpacity:"1",strokeWeight:"1",fillColor:e.status?"#6A5ACD":"#ee2200",fillOpacity:"0.5"}})}),1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fh5co-footer"},[e("p",[e("small",[e("span",[this._v("© GRP Team 17. All Rights Reserved.")]),this._v(" "),e("span",[this._v("Made by Shihui QUE ")]),this._v(" "),e("span",[this._v("Demo Images: Pixabay")])])])])}]};var d=a("VU/8")(p,f,!1,function(t){a("rmOQ")},"data-v-6e818626",null).exports,h=a("mvHQ"),v=a.n(h),g=a("olAn"),_={components:{VueRecaptcha:g.a},data:function(){return{url:"http://10.6.2.61:8866/statistics/web/user/",form:{username:"",password:"",robot:!1},title:"LOGIN"}},methods:{login:function(){var t=this;if(""!=this.form.username&&""!=this.form.password)if(this.form.robot){var e="";e="LOGIN"==this.title?"login":"register";var a=this.url+e;console.log(a);var s={username:this.form.username,password:this.form.password};u()({method:"post",url:a,data:v()(s),header:{"Content-Type":"application/json"}}).then(function(e){var a=e.data;if(console.log(a),a.result){if("REGISTER"==t.title)return t.$message({message:"Registered succeccfully, please login",type:"success"}),void t.$router.go(0);sessionStorage.setItem("requireAuth",!1),sessionStorage.setItem("permission",t.form.name),t.$router.push("Map")}else t.$message({message:"ERROR! "+a.message,type:"warning"})}).catch(function(t){alert(t),console.log(t)})}else this.$message({message:"Please check the verification box",type:"warning"});else this.$message({message:"Username and password can not be empty",type:"warning"})},changeView:function(){"LOGIN"==this.title?this.title="REGISTER":this.title="LOGIN"},onVerify:function(t){t&&(this.form.robot=!0)}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"fh5co-page"}},[a("aside",{staticClass:"border js-fullheight",attrs:{id:"fh5co-aside",role:"complementary"}},[a("h1",{attrs:{id:"fh5co-logo"}},[t._v("Monitoring System")]),t._v(" "),a("nav",{attrs:{id:"fh5co-main-menu",role:"navigation"}},[a("ul",[a("li",{staticClass:"fh5co-active"},[a("router-link",{attrs:{to:"Login"}},[t._v("Home")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"Map"}},[t._v("Map")])],1)])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{attrs:{id:"fh5co-main"}},[a("aside",{attrs:{id:"fh5co-hero"}},[a("div",{staticClass:"flexslider js-fullheight"},[a("ul",[a("li",{staticStyle:{"background-image":"url(../assets/img_bg_1.jpg)"}},[a("div",{staticClass:"overlay"}),t._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"slider-text-inner"},[a("h1",{staticStyle:{color:"white","letter-spacing":"3px","font-size":"50px"}},[t._v("\n                    "+t._s(t.title)+"\n                  ")]),t._v(" "),a("el-form",{ref:"form",staticClass:"login-form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"Username"}},[a("el-input",{model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Password"}},[a("el-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Verify"}},[a("vue-recaptcha",{ref:"recaptcha",attrs:{sitekey:"6LdXOosaAAAAAOL854r3D_YqfpDxBXHR49q9lIKe"},on:{verify:t.onVerify}})],1),t._v(" "),a("el-button",{staticClass:"login-button",on:{click:t.login}},[t._v(t._s(t.title))]),t._v(" "),"LOGIN"==t.title?a("div",{staticClass:"register"},[a("span",[t._v("No account yet ? Go to")]),t._v(" "),a("button",{on:{click:function(e){return t.changeView()}}},[t._v("Register")])]):t._e(),t._v(" "),"REGISTER"==t.title?a("div",{staticClass:"register"},[a("span",[t._v("Already have an account? Go to")]),t._v(" "),a("button",{on:{click:function(e){return t.changeView()}}},[t._v("Login")])]):t._e()],1)],1)])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fh5co-footer"},[e("p",[e("small",[e("span",[this._v("© GRP Team 17. All Rights Reserved.")]),this._v(" "),e("span",[this._v("Made by Shihui QUE ")]),this._v(" "),e("span",[this._v("Demo Images: Pixabay")])])])])}]};var w=a("VU/8")(_,y,!1,function(t){a("wrtc")},null,null).exports;s.default.use(o.a);var b=new o.a({routes:[{path:"/",name:"",component:w},{path:"/Login",name:"Login",component:w},{path:"/Map",name:"Map",component:d,meta:{requireAuth:!0}}]}),A=a("zL8q"),M=a.n(A);a("tvR6");s.default.use(M.a,u.a,o.a,g.a),s.default.config.productionTip=!1,s.default.prototype.$http=u.a,new s.default({el:"#app",router:b,components:{App:n},template:"<App/>",render:function(t){return t(n)}}),b.beforeEach(function(t,e,a){return"/Login"===t.path||sessionStorage.getItem("requireAuth")?a():a("/Login")})},rmOQ:function(t,e){},tvR6:function(t,e){},wrtc:function(t,e){}},["NHnr"]);