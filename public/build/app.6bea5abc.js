"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[524],{5603:(e,t,o)=>{var n=o(1425),a=o(5899),r=o(3464),l=o.n(r);var s=o(5220);const i={components:{RouterView:s.Tp},data:function(){return{status:"App component is ready"}}};var c=o(6262);const m=(0,c.A)(i,[["render",function(e,t,o,a,r,l){var s=(0,n.resolveComponent)("RouterView");return(0,n.openBlock)(),(0,n.createBlock)(s)}]]);o(2010);var u={class:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},d={class:"container-fluid"},p={class:"collapse navbar-collapse",id:"navbarCollapse"},f={class:"navbar-nav me-auto mb-2 mb-md-0"},g={class:"nav-item"},v={class:"nav-item"},h={class:"d-flex btn-group"};o(4114);const N={components:{RouterLink:s.Wk},data:function(){return{token:""}},mounted:function(){this.getToken()},updated:function(){this.getToken()},methods:{getToken:function(){this.token=localStorage.getItem("token")},logout:function(){localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),this.$router.push({name:"signin"})}}},b=(0,c.A)(N,[["render",function(e,t,o,a,r,l){var s=(0,n.resolveComponent)("RouterLink");return(0,n.openBlock)(),(0,n.createElementBlock)("nav",u,[(0,n.createElementVNode)("div",d,[t[1]||(t[1]=(0,n.createElementVNode)("a",{class:"navbar-brand",href:"/"},"RatIt",-1)),t[2]||(t[2]=(0,n.createElementVNode)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n.createElementVNode)("span",{class:"navbar-toggler-icon"})],-1)),(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("ul",f,[(0,n.createElementVNode)("li",g,[r.token?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,class:"nav-link active","aria-current":"page",to:{name:"home"}},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("home")),1)]})),_:1})):(0,n.createCommentVNode)("v-if",!0)]),(0,n.createElementVNode)("li",v,[r.token?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,class:"nav-link",to:{name:"about"}},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("about")),1)]})),_:1})):(0,n.createCommentVNode)("v-if",!0)])]),(0,n.createElementVNode)("div",h,[r.token?((0,n.openBlock)(),(0,n.createElementBlock)("button",{key:0,class:"btn btn-outline-success",onClick:t[0]||(t[0]=function(){return l.logout&&l.logout.apply(l,arguments)}),type:"botton"},(0,n.toDisplayString)(e.$t("log.out")),1)):(0,n.createCommentVNode)("v-if",!0),r.token?(0,n.createCommentVNode)("v-if",!0):((0,n.openBlock)(),(0,n.createBlock)(s,{key:1,class:"btn btn-outline-success",to:{name:"signin"}},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("log.in")),1)]})),_:1})),r.token?(0,n.createCommentVNode)("v-if",!0):((0,n.openBlock)(),(0,n.createBlock)(s,{key:2,class:"btn btn-outline-success",to:{name:"signup"}},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.$t("log.up")),1)]})),_:1}))])])])])}]]),k={components:{NavBar:b},data:function(){return{status:"App component is ready"}}},V=(0,c.A)(k,[["render",function(e,t,o,a,r,l){var s=(0,n.resolveComponent)("NavBar");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(s),t[0]||(t[0]=(0,n.createElementVNode)("main",{class:"container"},[(0,n.createElementVNode)("div",{class:"bg-body-tertiary p-5 rounded"},[(0,n.createElementVNode)("h1",null,"Navbar example"),(0,n.createElementVNode)("p",{class:"lead"}," This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page. ")])],-1))],64)}]]);const E={components:{NavBar:b},data:function(){return{status:"App component is ready"}}},y=(0,c.A)(E,[["render",function(e,t,o,a,r,l){var s=(0,n.resolveComponent)("NavBar");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(s),t[0]||(t[0]=(0,n.createElementVNode)("main",null,[(0,n.createElementVNode)("h1",null,"This is Component name About")],-1))],64)}]]);var w={class:"form-signin w-100 m-auto"},B={class:"form-floating"},C={class:"form-floating"};var x=o(1083),S=x.A.create(),T=(0,r.useToast)();S.interceptors.request.use((function(e){return console.log("request"),localStorage.getItem("token")&&(e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e.headers.Accept="application/json"),e.headers["Accept-Language"]=localStorage.getItem("lang"),e}),(function(e){console.log("Front error requrest"),console.log(e),console.log("Front error requrest")})),S.interceptors.response.use({},(function(e){if(401===e.status&&401===e.response.data.code&&(localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),W.push({name:"login"})),422===e.status&&422===e.response.status){var t=e.response.data.details,o=e.response.data.message;for(var n in T.error(o,{position:"bottom-left",duration:1e4}),t)T.error(t[n].field+" - "+t[n].message,{position:"bottom-left",duration:1e4})}if(400===e.status&&400===e.response.data.code){var a=e.response.data.message;T.error(a,{position:"bottom-left",duration:1e4})}}));const A=S,P={components:{NavBar:b},data:function(){return{credentials:{email:"",password:""}}},methods:{signin:function(){var e=this;A.post("/api/v1/signin",this.credentials).then((function(t){200===t.status&&(localStorage.setItem("token",t.data.token),localStorage.setItem("refreshToken",t.data.refreshToken),e.$router.push({name:"home"}),e.$toast.success("Welcome to home",{position:"bottom-left",duration:1e4})),e.credentials.email="",e.credentials.password=""})).catch((function(e){}))}}},I=(0,c.A)(P,[["render",function(e,t,o,a,r,l){var s=(0,n.resolveComponent)("NavBar");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(s),(0,n.createElementVNode)("main",w,[(0,n.createElementVNode)("form",null,[(0,n.createCommentVNode)(' <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> '),t[5]||(t[5]=(0,n.createElementVNode)("h1",{class:"h3 mb-3 fw-normal"},"Please sign in",-1)),(0,n.createElementVNode)("div",B,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.credentials.email=e}),name:"email",class:"form-control",id:"email",placeholder:"name@example.com"},null,512),[[n.vModelText,r.credentials.email]]),t[3]||(t[3]=(0,n.createElementVNode)("label",{for:"email"},"Email address",-1))]),(0,n.createElementVNode)("div",C,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.credentials.password=e}),name:"password",class:"form-control",id:"yourPassword",placeholder:"Password"},null,512),[[n.vModelText,r.credentials.password]]),t[4]||(t[4]=(0,n.createElementVNode)("label",{for:"yourPassword"},"Password",-1))]),(0,n.createElementVNode)("button",{onClick:t[2]||(t[2]=function(){return l.signin&&l.signin.apply(l,arguments)}),class:"btn btn-primary w-100 py-2",type:"button"},"Sign in"),t[6]||(t[6]=(0,n.createElementVNode)("p",{class:"mt-5 mb-3 text-body-secondary"},"© 2017–2024",-1))])])],64)}]]);var D={class:"form-signin w-100 m-auto"},L={class:"form-floating"},_={class:"form-floating"},U={class:"form-floating"},$={class:"form-floating"};const M={components:{NavBar:b},data:function(){return{profile:{firstName:"",lastName:"",email:"",password:""}}},methods:{signup:function(){var e=this;x.A.post("/api/v1/signup",this.profile).then((function(t){201===t.status&&(e.$router.push({name:"signin"}),e.$toast.success("Please Confirm your Email",{position:"bottom-left",duration:5e3})),e.profile.email="",e.profile.password="",e.profile.firstName="",e.profile.lastName=""})).catch((function(e){}))}}},q=(0,c.A)(M,[["render",function(e,t,o,a,r,l){var s=(0,n.resolveComponent)("NavBar");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(s),(0,n.createElementVNode)("main",D,[(0,n.createElementVNode)("form",null,[(0,n.createCommentVNode)(' <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> '),t[9]||(t[9]=(0,n.createElementVNode)("h1",{class:"h3 mb-3 fw-normal"},"Please sign up",-1)),(0,n.createElementVNode)("div",L,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.profile.email=e}),name:"email",class:"form-control",id:"email",placeholder:"name@example.com"},null,512),[[n.vModelText,r.profile.email]]),t[5]||(t[5]=(0,n.createElementVNode)("label",{for:"email"},"Email address",-1))]),(0,n.createElementVNode)("div",_,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.profile.password=e}),name:"password",class:"form-control",id:"yourPassword",placeholder:"apple36"},null,512),[[n.vModelText,r.profile.password]]),t[6]||(t[6]=(0,n.createElementVNode)("label",{for:"yourPassword"},"Password",-1))]),(0,n.createElementVNode)("div",U,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.profile.firstName=e}),name:"firstName",class:"form-control",id:"firstName",placeholder:"Apple"},null,512),[[n.vModelText,r.profile.firstName]]),t[7]||(t[7]=(0,n.createElementVNode)("label",{for:"firstName"},"First Name",-1))]),(0,n.createElementVNode)("div",$,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.profile.lastName=e}),name:"lastName",class:"form-control",id:"lastName",placeholder:"Pear"},null,512),[[n.vModelText,r.profile.lastName]]),t[8]||(t[8]=(0,n.createElementVNode)("label",{for:"lastName"},"LastName",-1))]),(0,n.createElementVNode)("button",{onClick:t[4]||(t[4]=function(){return l.signup&&l.signup.apply(l,arguments)}),class:"btn btn-primary w-100 py-2",type:"button"},"Sign up"),t[10]||(t[10]=(0,n.createElementVNode)("p",{class:"mt-5 mb-3 text-body-secondary"},"© 2017–2024",-1))])])],64)}]]),F={__name:"SignupVerifyEmail",setup:function(e){var t=(0,s.lq)(),o=(0,s.rd)(),a=(0,r.useToast)(),l=t.query.token,i=t.query.email;return(0,n.onMounted)((function(){l&&i&&x.A.get("/api/v1/signup_verify_email/".concat(l)).then((function(e){a.success("You confirm you`r email!",{position:"bottom-left",duration:5e3}),o.push({name:"signin"})})).catch((function(e){console.log(e)}))})),console.log("Token:",l),console.log("Email:",i),function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("main",null,[(0,n.createElementVNode)("h1",null,"We chack "+(0,n.toDisplayString)((0,n.unref)(i))+" access",1)])}}},R=F;var O=(0,s.aE)({history:(0,s.LA)("/"),routes:[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:y},{path:"/signin",name:"signin",component:I},{path:"/signup",name:"signup",component:q},{path:"/signup_verify_email",name:"signup-verify-email",component:R},{path:"/:pathMatch(.*)*",name:"not-found",component:V},{path:"/:pathMatch(.*)",name:"bad-not-found",component:V}]});O.beforeEach((function(e,t,o){var n=localStorage.getItem("token");return n?"signin"===e.name||"signup"===e.name||"signup_verify_email"===e.name&&n?o({name:"home"}):void o():"signin"===e.name||"signup"===e.name||"signup-verify-email"===e.name?o():o({name:"signin"})}));const W=O;o(8736);var J=o(6459);const j=JSON.parse('{"login":"Please Login","register":"Please Registration","username":"Username","first.name":"First Name","last.name":"Last Name","email":"Email","password":"Password","remember.me":"Remember me","send":"Send","log.in":"LogIn","log.up":"LogUp","log.out":"LogOut","home":"Home","about":"About","profile":"Profile","price":"Price","user":"User","ua":"Ukranine 🇺🇦","en":"English 🇬🇧","login.invalid":"Login invalid"}'),z=JSON.parse('{"login":"Увійдіть","register":"Звреєструйтесь","username":"Юзернейм","first.name":"Ім\'я","last.name":"Прізвище","email":"Пошта","password":"Пароль","remember.me":"Запам\'ятати","send":"Відправити","log.in":"Логуватись","log.up":"Реєструватись","log.out":"Вихід","home":"Домашня","about":"Про нас","profile":"Профіль","price":"Ціна","user":"Користувач","ua":"Українська 🇺🇦","en":"Англійська 🇬🇧","login.invalid":"Нетой логін"}');const H=(0,J.hU)({locale:localStorage.getItem("lang"),fallbackLocale:"ua",legacy:!1,messages:{en:j,ua:z}});var Y=(0,n.createApp)(m);Y.use(l()),Y.use((0,a.Ey)()),Y.use(W),Y.use(H),Y.mount("#app")}},e=>{e.O(0,[774],(()=>{return t=5603,e(e.s=t);var t}));e.O()}]);