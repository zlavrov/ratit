"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toast-notification */ "./node_modules/vue-toast-notification/dist/index.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./assets/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./assets/router/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ "./node_modules/bootstrap-icons/font/bootstrap-icons.css");
/* harmony import */ var vue_toast_notification_dist_theme_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-toast-notification/dist/theme-bootstrap.css */ "./node_modules/vue-toast-notification/dist/theme-bootstrap.css");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./i18n */ "./assets/i18n/index.js");
// import { registerVueControllerComponents } from '@symfony/ux-vue';
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)











var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.use((vue_toast_notification__WEBPACK_IMPORTED_MODULE_1___default()));
app.use((0,pinia__WEBPACK_IMPORTED_MODULE_10__.createPinia)());
app.use(_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.use(_i18n__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.mount('#app');
// registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/));

/***/ }),

/***/ "./assets/helper/api.js":
/*!******************************!*\
  !*** ./assets/helper/api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./assets/router/index.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toast-notification */ "./node_modules/vue-toast-notification/dist/index.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toast-notification/dist/theme-sugar.css */ "./node_modules/vue-toast-notification/dist/theme-sugar.css");






var api = axios__WEBPACK_IMPORTED_MODULE_4__["default"].create();
var $toast = (0,vue_toast_notification__WEBPACK_IMPORTED_MODULE_2__.useToast)();
api.interceptors.request.use(function (config) {
  console.log('request');
  if (localStorage.getItem('token')) {
    config.headers.Authorization = "Bearer ".concat(localStorage.getItem('token')), config.headers.Accept = 'application/json';
  }
  config.headers['Accept-Language'] = localStorage.getItem('lang');
  return config;
}, function (error) {
  console.log('Front error requrest');
  console.log(error);
  console.log('Front error requrest');
});

// config => {

//     console.log('response');
//     // if (localStorage.getItem('token')) {

//     //     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`,
//     //     config.headers.Accept = 'application/json'
//     // }

//     // return config;
// }
api.interceptors.response.use({}, function (error) {
  if (error.status === 401) {
    if (error.response.data.code === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push({
        name: 'login'
      });
    }
  }
  if (error.status === 422) {
    if (error.response.status === 422) {
      var det = error.response.data.details;
      var mes = error.response.data.message;
      $toast.error(mes, {
        position: 'bottom-left',
        duration: 10000
      });
      for (var row in det) {
        $toast.error(det[row].field + ' - ' + det[row].message, {
          position: 'bottom-left',
          duration: 10000
        });
      }

      // localStorage.removeItem('token');
      // localStorage.removeItem('refreshToken');
      // router.push({name: 'login'});
    }
  }
  if (error.status === 400) {
    if (error.response.data.code === 400) {
      var _mes = error.response.data.message;
      $toast.error(_mes, {
        position: 'bottom-left',
        duration: 10000
      });

      // $toast.error(mes, {
      //     position: 'bottom-left',
      //     duration: 10000
      // });

      // for(let row in det) {
      //     $toast.error(det[row].field + ' - ' + det[row].message, {
      //         position: 'bottom-left',
      //         duration: 10000
      //     });
      // }

      // localStorage.removeItem('token');
      // localStorage.removeItem('refreshToken');
      // router.push({name: 'login'});
    }
  }

  // if (error.response.data.message == 'Expired JWT Token') {
  //     return axios.post(`${import.meta.env.VITE_BACK_API_URL}/api/token/refresh`, {
  //         refreshToken: localStorage.getItem('refreshToken')
  //     }).then(
  //         res => {

  //             localStorage.setItem('token', res.data.token);
  //             localStorage.setItem('refreshToken', res.data.refreshToken);

  //             error.config.headers.Authorization = `Bearer ${res.data.token}`;
  //             error.config.headers.Accept = 'application/json';

  //             return api.request(error.config);
  //         }
  //     )
  // }
  // console.log(error.response.data.message);
  // if (error.response.status == 401) {

  //     router.push({name: 'login'});
  // }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ "./assets/i18n/index.js":
/*!******************************!*\
  !*** ./assets/i18n/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.mjs");
/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locales/en.json */ "./assets/i18n/locales/en.json");
/* harmony import */ var _locales_ua_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales/ua.json */ "./assets/i18n/locales/ua.json");



var i18n = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_2__.createI18n)({
  locale: localStorage.getItem('lang'),
  fallbackLocale: 'ua',
  legacy: false,
  messages: {
    en: _locales_en_json__WEBPACK_IMPORTED_MODULE_0__,
    ua: _locales_ua_json__WEBPACK_IMPORTED_MODULE_1__
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18n);

/***/ }),

/***/ "./assets/router/index.js":
/*!********************************!*\
  !*** ./assets/router/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/HomeView.vue */ "./assets/views/HomeView.vue");
/* harmony import */ var _views_AboutView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/AboutView.vue */ "./assets/views/AboutView.vue");
/* harmony import */ var _views_SignInView_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/SignInView.vue */ "./assets/views/SignInView.vue");
/* harmony import */ var _views_SignUpView_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/SignUpView.vue */ "./assets/views/SignUpView.vue");






var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createRouter)({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createWebHistory)('/'),
  routes: [{
    path: '/',
    name: 'home',
    component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, {
    path: '/about',
    name: 'about',
    component: _views_AboutView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: '/signin',
    name: 'signin',
    component: _views_SignInView_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    path: '/signup',
    name: 'signup',
    component: _views_SignUpView_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, {
    path: '/:pathMatch(.*)',
    name: 'bad-not-found',
    component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }]
});
router.beforeEach(function (to, from, next) {
  // to: route, from: route, next: NavigationGuardNext

  var token = localStorage.getItem('token');
  if (!token) {
    if (to.name === 'signin' || to.name === 'signup') {
      return next();
    } else {
      return next({
        name: 'signin'
      });
    }
  }

  // if (to.name !== 'login' || to.name !== 'registration') {
  //     if (!token) {
  //         return next({name: 'login'});
  //     }
  // }

  if (to.name === 'signin' || to.name === 'signup' && token) {
    // if (!token) {
    return next({
      name: 'home'
    });
    // }
  }
  next();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    RouterView: vue_router__WEBPACK_IMPORTED_MODULE_0__.RouterView,
    RouterLink: vue_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink
  },
  data: function data() {
    return {
      status: 'App component is ready'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/HomeView.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/HomeView.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      status: 'App component is ready'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignInView.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignInView.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/api */ "./assets/helper/api.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    signin: function signin() {
      var _this = this;
      _helper_api__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/v1/signin', this.credentials).then(function (response) {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          _this.$router.push({
            name: 'home'
          });
          _this.$toast.success('Welcome to home', {
            position: 'bottom-left',
            duration: 10000
          });
        }
        _this.credentials.email = '';
        _this.credentials.password = '';
      })["catch"](function (error) {
        // console.log(error);
      });
      // console.log(this.profile.sex);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignUpView.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignUpView.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _helper_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/api */ "./assets/helper/api.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      profile: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    signup: function signup() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/api/v1/signup', this.profile).then(function (response) {
        if (response.status === 201) {
          _this.$router.push({
            name: 'signin'
          });
          _this.$toast.success('Please Sign In', {
            position: 'bottom-left',
            duration: 3000
          });
        }
        _this.profile.email = '';
        _this.profile.password = '';
        _this.profile.firstName = '';
        _this.profile.lastName = '';
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex align-items-center py-4 bg-body-tertiary"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterLink");
  var _component_RouterView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterView");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {
    to: {
      name: 'home'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home")]);
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {
    to: {
      name: 'about'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("About")]);
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {
    to: {
      name: 'signin'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("SignIn")]);
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {
    to: {
      name: 'signup'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("SignUp")]);
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterView)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/AboutView.vue?vue&type=template&id=79f1f15a":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/AboutView.vue?vue&type=template&id=79f1f15a ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", null, _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "This is Component name About", -1 /* HOISTED */)]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/HomeView.vue?vue&type=template&id=75fd1c9a":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/HomeView.vue?vue&type=template&id=75fd1c9a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", null, _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Home Page", -1 /* HOISTED */)]));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignInView.vue?vue&type=template&id=d3461854":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignInView.vue?vue&type=template&id=d3461854 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "form-signin w-100 m-auto"
};
var _hoisted_2 = {
  "class": "form-floating"
};
var _hoisted_3 = {
  "class": "form-floating"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img class=\"mb-4\" src=\"/docs/5.3/assets/brand/bootstrap-logo.svg\" alt=\"\" width=\"72\" height=\"57\"> "), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "h3 mb-3 fw-normal"
  }, "Please sign in", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.credentials.email = $event;
    }),
    name: "email",
    "class": "form-control",
    id: "email",
    placeholder: "name@example.com"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.credentials.email]]), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "email"
  }, "Email address", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.credentials.password = $event;
    }),
    name: "password",
    "class": "form-control",
    id: "yourPassword",
    placeholder: "Password"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.credentials.password]]), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "yourPassword"
  }, "Password", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.signin && $options.signin.apply($options, arguments);
    }),
    "class": "btn btn-primary w-100 py-2",
    type: "button"
  }, "Sign in"), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "mt-5 mb-3 text-body-secondary"
  }, "© 2017–2024", -1 /* HOISTED */))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignUpView.vue?vue&type=template&id=32571f4c":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignUpView.vue?vue&type=template&id=32571f4c ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "form-signin w-100 m-auto"
};
var _hoisted_2 = {
  "class": "form-floating"
};
var _hoisted_3 = {
  "class": "form-floating"
};
var _hoisted_4 = {
  "class": "form-floating"
};
var _hoisted_5 = {
  "class": "form-floating"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img class=\"mb-4\" src=\"/docs/5.3/assets/brand/bootstrap-logo.svg\" alt=\"\" width=\"72\" height=\"57\"> "), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "h3 mb-3 fw-normal"
  }, "Please sign up", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.profile.email = $event;
    }),
    name: "email",
    "class": "form-control",
    id: "email",
    placeholder: "name@example.com"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.profile.email]]), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "email"
  }, "Email address", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.profile.password = $event;
    }),
    name: "password",
    "class": "form-control",
    id: "yourPassword",
    placeholder: "apple36"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.profile.password]]), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "yourPassword"
  }, "Password", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.profile.firstName = $event;
    }),
    name: "firstName",
    "class": "form-control",
    id: "firstName",
    placeholder: "Apple"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.profile.firstName]]), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "firstName"
  }, "First Name", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.profile.lastName = $event;
    }),
    name: "lastName",
    "class": "form-control",
    id: "lastName",
    placeholder: "Pear"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.profile.lastName]]), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "lastName"
  }, "LastName", -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.signup && $options.signup.apply($options, arguments);
    }),
    "class": "btn btn-primary w-100 py-2",
    type: "button"
  }, "Sign up"), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "mt-5 mb-3 text-body-secondary"
  }, "© 2017–2024", -1 /* HOISTED */))])]);
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/App.vue":
/*!************************!*\
  !*** ./assets/App.vue ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5bcdaf03 */ "./assets/App.vue?vue&type=template&id=5bcdaf03");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./assets/App.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/views/AboutView.vue":
/*!************************************!*\
  !*** ./assets/views/AboutView.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AboutView_vue_vue_type_template_id_79f1f15a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutView.vue?vue&type=template&id=79f1f15a */ "./assets/views/AboutView.vue?vue&type=template&id=79f1f15a");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_AboutView_vue_vue_type_template_id_79f1f15a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/views/AboutView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/views/HomeView.vue":
/*!***********************************!*\
  !*** ./assets/views/HomeView.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeView_vue_vue_type_template_id_75fd1c9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeView.vue?vue&type=template&id=75fd1c9a */ "./assets/views/HomeView.vue?vue&type=template&id=75fd1c9a");
/* harmony import */ var _HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeView.vue?vue&type=script&lang=js */ "./assets/views/HomeView.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HomeView_vue_vue_type_template_id_75fd1c9a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/views/HomeView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/views/SignInView.vue":
/*!*************************************!*\
  !*** ./assets/views/SignInView.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignInView_vue_vue_type_template_id_d3461854__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignInView.vue?vue&type=template&id=d3461854 */ "./assets/views/SignInView.vue?vue&type=template&id=d3461854");
/* harmony import */ var _SignInView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInView.vue?vue&type=script&lang=js */ "./assets/views/SignInView.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SignInView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SignInView_vue_vue_type_template_id_d3461854__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/views/SignInView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/views/SignUpView.vue":
/*!*************************************!*\
  !*** ./assets/views/SignUpView.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignUpView_vue_vue_type_template_id_32571f4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpView.vue?vue&type=template&id=32571f4c */ "./assets/views/SignUpView.vue?vue&type=template&id=32571f4c");
/* harmony import */ var _SignUpView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpView.vue?vue&type=script&lang=js */ "./assets/views/SignUpView.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SignUpView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SignUpView_vue_vue_type_template_id_32571f4c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/views/SignUpView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/App.vue?vue&type=script&lang=js":
/*!************************************************!*\
  !*** ./assets/App.vue?vue&type=script&lang=js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/views/HomeView.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./assets/views/HomeView.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/HomeView.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/views/SignInView.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./assets/views/SignInView.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignInView.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/views/SignUpView.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./assets/views/SignUpView.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignUpView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignUpView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignUpView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignUpView.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/App.vue?vue&type=template&id=5bcdaf03":
/*!******************************************************!*\
  !*** ./assets/App.vue?vue&type=template&id=5bcdaf03 ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_5bcdaf03__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=5bcdaf03 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/App.vue?vue&type=template&id=5bcdaf03");


/***/ }),

/***/ "./assets/views/AboutView.vue?vue&type=template&id=79f1f15a":
/*!******************************************************************!*\
  !*** ./assets/views/AboutView.vue?vue&type=template&id=79f1f15a ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutView_vue_vue_type_template_id_79f1f15a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AboutView_vue_vue_type_template_id_79f1f15a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AboutView.vue?vue&type=template&id=79f1f15a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/AboutView.vue?vue&type=template&id=79f1f15a");


/***/ }),

/***/ "./assets/views/HomeView.vue?vue&type=template&id=75fd1c9a":
/*!*****************************************************************!*\
  !*** ./assets/views/HomeView.vue?vue&type=template&id=75fd1c9a ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_template_id_75fd1c9a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_template_id_75fd1c9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeView.vue?vue&type=template&id=75fd1c9a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/HomeView.vue?vue&type=template&id=75fd1c9a");


/***/ }),

/***/ "./assets/views/SignInView.vue?vue&type=template&id=d3461854":
/*!*******************************************************************!*\
  !*** ./assets/views/SignInView.vue?vue&type=template&id=d3461854 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInView_vue_vue_type_template_id_d3461854__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignInView_vue_vue_type_template_id_d3461854__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignInView.vue?vue&type=template&id=d3461854 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignInView.vue?vue&type=template&id=d3461854");


/***/ }),

/***/ "./assets/views/SignUpView.vue?vue&type=template&id=32571f4c":
/*!*******************************************************************!*\
  !*** ./assets/views/SignUpView.vue?vue&type=template&id=32571f4c ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignUpView_vue_vue_type_template_id_32571f4c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignUpView_vue_vue_type_template_id_32571f4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignUpView.vue?vue&type=template&id=32571f4c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/views/SignUpView.vue?vue&type=template&id=32571f4c");


/***/ }),

/***/ "./assets/i18n/locales/en.json":
/*!*************************************!*\
  !*** ./assets/i18n/locales/en.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"login":"Please Login","register":"Please Registration","username":"Username","first.name":"First Name","last.name":"Last Name","email":"Email","password":"Password","remember.me":"Remember me","send":"Send","log.in":"LogIn","log.up":"LogUp","log.out":"LogOut","home":"Home","about":"About","profile":"Profile","price":"Price","user":"User","ua":"Ukranine 🇺🇦","en":"English 🇬🇧","login.invalid":"Login invalid"}');

/***/ }),

/***/ "./assets/i18n/locales/ua.json":
/*!*************************************!*\
  !*** ./assets/i18n/locales/ua.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"login":"Увійдіть","register":"Звреєструйтесь","username":"Юзернейм","first.name":"Ім\'я","last.name":"Прізвище","email":"Пошта","password":"Пароль","remember.me":"Запам\'ятати","send":"Відправити","log.in":"Логуватись","log.up":"Реєструватись","log.out":"Вихід","home":"Домашня","about":"Про нас","profile":"Профіль","price":"Ціна","user":"Користувач","ua":"Українська 🇺🇦","en":"Англійська 🇬🇧","login.invalid":"Нетой логін"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_bootstrap-icons_f-fd3456"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSwwRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ1RDtBQUN0RTs7QUFFQSxDQUFnRjtBQUNoRixpQ0FBaUMseUZBQWUsb0JBQW9CLGdGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJzRDtBQUNWO0FBQ0w7O0FBRXRELENBQWdGO0FBQ2hGLGlDQUFpQyx5RkFBZSxDQUFDLDZFQUFNLGFBQWEsK0VBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QndEO0FBQ1Y7QUFDTDs7QUFFeEQsQ0FBZ0Y7QUFDaEYsaUNBQWlDLHlGQUFlLENBQUMsK0VBQU0sYUFBYSxpRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCd0Q7QUFDVjtBQUNMOztBQUV4RCxDQUFnRjtBQUNoRixpQ0FBaUMseUZBQWUsQ0FBQywrRUFBTSxhQUFhLGlGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3RCNks7Ozs7Ozs7Ozs7Ozs7OztBQ0FXOzs7Ozs7Ozs7Ozs7Ozs7QUNBRTs7Ozs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9oZWxwZXIvYXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pMThuL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0hvbWVWaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvU2lnbkluVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL1NpZ25VcFZpZXcudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9BYm91dFZpZXcudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz85ZDcxIiwid2VicGFjazovLy8uL2Fzc2V0cy9BcHAudnVlPzg5ZGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL0Fib3V0Vmlldy52dWU/OGYyZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvSG9tZVZpZXcudnVlP2IzODciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL1NpZ25JblZpZXcudnVlPzkyMGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL1NpZ25VcFZpZXcudnVlPzI3MzAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/N2UwMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvSG9tZVZpZXcudnVlP2E4MzciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL1NpZ25JblZpZXcudnVlPzQ4MWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZpZXdzL1NpZ25VcFZpZXcudnVlP2FlMzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0FwcC52dWU/ZWQ3YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvQWJvdXRWaWV3LnZ1ZT80NzE2Iiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cy9Ib21lVmlldy52dWU/YmQwNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvU2lnbkluVmlldy52dWU/YzgyNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmlld3MvU2lnblVwVmlldy52dWU/ZDBjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyByZWdpc3RlclZ1ZUNvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtdnVlJztcbi8vIGltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IGNyZWF0ZVBpbmlhIH0gZnJvbSAncGluaWEnO1xuaW1wb3J0IFRvYXN0UGx1Z2luIGZyb20gJ3Z1ZS10b2FzdC1ub3RpZmljYXRpb24nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1pY29ucy9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MnO1xuaW1wb3J0ICd2dWUtdG9hc3Qtbm90aWZpY2F0aW9uL2Rpc3QvdGhlbWUtYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKTtcblxuYXBwLnVzZShUb2FzdFBsdWdpbik7XG5hcHAudXNlKGNyZWF0ZVBpbmlhKCkpO1xuYXBwLnVzZShyb3V0ZXIpO1xuYXBwLnVzZShpMThuKTtcblxuYXBwLm1vdW50KCcjYXBwJyk7XG4vLyByZWdpc3RlclZ1ZUNvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi92dWUvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwudnVlJC8pKTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCIuLi9yb3V0ZXJcIjtcbmltcG9ydCB7dXNlVG9hc3R9IGZyb20gJ3Z1ZS10b2FzdC1ub3RpZmljYXRpb24nO1xuaW1wb3J0ICd2dWUtdG9hc3Qtbm90aWZpY2F0aW9uL2Rpc3QvdGhlbWUtc3VnYXIuY3NzJztcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICd2dWUtaTE4bic7XG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSgpO1xuY29uc3QgJHRvYXN0ID0gdXNlVG9hc3QoKTtcblxuYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcblxuICAgIGNvbmZpZyA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QnKTtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHtcbiAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcbiAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzLkFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLmhlYWRlcnNbJ0FjY2VwdC1MYW5ndWFnZSddID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKTtcblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH0sXG4gICAgZXJyb3IgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdGcm9udCBlcnJvciByZXF1cmVzdCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGcm9udCBlcnJvciByZXF1cmVzdCcpO1xuICAgIH1cbilcblxuLy8gY29uZmlnID0+IHtcblxuLy8gICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScpO1xuLy8gICAgIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkge1xuXG4vLyAgICAgLy8gICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcbi8vICAgICAvLyAgICAgY29uZmlnLmhlYWRlcnMuQWNjZXB0ID0gJ2FwcGxpY2F0aW9uL2pzb24nXG4vLyAgICAgLy8gfVxuXG4vLyAgICAgLy8gcmV0dXJuIGNvbmZpZztcbi8vIH1cbmFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgIHt9LFxuICAgIGVycm9yID0+IHtcblxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcblxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuY29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JlZnJlc2hUb2tlbicpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtuYW1lOiAnbG9naW4nfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MjIpIHtcblxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZXQgPSBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbHM7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgJHRvYXN0LmVycm9yKG1lcywge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbS1sZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAwXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IHJvdyBpbiBkZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRvYXN0LmVycm9yKGRldFtyb3ddLmZpZWxkICsgJyAtICcgKyBkZXRbcm93XS5tZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbS1sZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmcmVzaFRva2VuJyk7XG4gICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCkge1xuXG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5jb2RlID09PSA0MDApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcyA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZTtcblxuICAgICAgICAgICAgICAgICR0b2FzdC5lcnJvcihtZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20tbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAvLyAkdG9hc3QuZXJyb3IobWVzLCB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLFxuICAgICAgICAgICAgICAgIC8vICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGZvcihsZXQgcm93IGluIGRldCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAkdG9hc3QuZXJyb3IoZGV0W3Jvd10uZmllbGQgKyAnIC0gJyArIGRldFtyb3ddLm1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZHVyYXRpb246IDEwMDAwXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyZWZyZXNoVG9rZW4nKTtcbiAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCh7bmFtZTogJ2xvZ2luJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA9PSAnRXhwaXJlZCBKV1QgVG9rZW4nKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gYXhpb3MucG9zdChgJHtpbXBvcnQubWV0YS5lbnYuVklURV9CQUNLX0FQSV9VUkx9L2FwaS90b2tlbi9yZWZyZXNoYCwge1xuICAgICAgICAvLyAgICAgICAgIHJlZnJlc2hUb2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hUb2tlbicpXG4gICAgICAgIC8vICAgICB9KS50aGVuKFxuICAgICAgICAvLyAgICAgICAgIHJlcyA9PiB7XG5cbiAgICAgICAgLy8gICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pO1xuICAgICAgICAvLyAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVmcmVzaFRva2VuJywgcmVzLmRhdGEucmVmcmVzaFRva2VuKTtcblxuICAgICAgICAvLyAgICAgICAgICAgICBlcnJvci5jb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Jlcy5kYXRhLnRva2VufWA7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVycm9yLmNvbmZpZy5oZWFkZXJzLkFjY2VwdCA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gYXBpLnJlcXVlc3QoZXJyb3IuY29uZmlnKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICApXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgLy8gaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcblxuICAgICAgICAvLyAgICAgcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTsiLCJpbXBvcnQgeyBjcmVhdGVJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xuaW1wb3J0IGVudCBmcm9tICcuL2xvY2FsZXMvZW4uanNvbic7XG5pbXBvcnQgdWF0IGZyb20gJy4vbG9jYWxlcy91YS5qc29uJztcblxuY29uc3QgaTE4biA9IGNyZWF0ZUkxOG4oe1xuICAgIGxvY2FsZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKSxcbiAgICBmYWxsYmFja0xvY2FsZTogJ3VhJyxcbiAgICBsZWdhY3k6IGZhbHNlLFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIGVuOiBlbnQsXG4gICAgICAgIHVhOiB1YXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaTE4blxuIiwiaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBjcmVhdGVXZWJIaXN0b3J5IH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgSG9tZVZpZXcgZnJvbSAnLi4vdmlld3MvSG9tZVZpZXcudnVlJztcbmltcG9ydCBBYm91dFZpZXcgZnJvbSAnLi4vdmlld3MvQWJvdXRWaWV3LnZ1ZSc7XG5pbXBvcnQgU2lnbkluVmlldyBmcm9tICcuLi92aWV3cy9TaWduSW5WaWV3LnZ1ZSdcbmltcG9ydCBTaWduVXBWaWV3IGZyb20gJy4uL3ZpZXdzL1NpZ25VcFZpZXcudnVlJ1xuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIC8vIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoaW1wb3J0Lm1ldGEuZW52LkJBU0VfVVJMKSxcbiAgICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCcvJyksXG4gICAgcm91dGVzOiBbXG4gICAgICAgIHsgcGF0aDogJy8nLCBuYW1lOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZVZpZXcgfSxcbiAgICAgICAgeyBwYXRoOiAnL2Fib3V0JywgbmFtZTogJ2Fib3V0JywgY29tcG9uZW50OiBBYm91dFZpZXcgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy9zaWduaW4nLFxuICAgICAgICAgICAgbmFtZTogJ3NpZ25pbicsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFNpZ25JblZpZXdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy9zaWdudXAnLFxuICAgICAgICAgICAgbmFtZTogJ3NpZ251cCcsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFNpZ25VcFZpZXdcbiAgICAgICAgfSxcblxuXG4gICAgICAgIHsgcGF0aDogJy86cGF0aE1hdGNoKC4qKSonLCBuYW1lOiAnbm90LWZvdW5kJywgY29tcG9uZW50OiBIb21lVmlldyB9LFxuICAgICAgICB7IHBhdGg6ICcvOnBhdGhNYXRjaCguKiknLCBuYW1lOiAnYmFkLW5vdC1mb3VuZCcsIGNvbXBvbmVudDogSG9tZVZpZXcgfSxcbiAgICBdXG59KTtcblxuXG5cblxucm91dGVyLmJlZm9yZUVhY2goZnVuY3Rpb24gKHRvLCBmcm9tLCBuZXh0KSB7IC8vIHRvOiByb3V0ZSwgZnJvbTogcm91dGUsIG5leHQ6IE5hdmlnYXRpb25HdWFyZE5leHRcblxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgaWYgKHRvLm5hbWUgPT09ICdzaWduaW4nIHx8IHRvLm5hbWUgPT09ICdzaWdudXAnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoe25hbWU6ICdzaWduaW4nfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLy8gaWYgKHRvLm5hbWUgIT09ICdsb2dpbicgfHwgdG8ubmFtZSAhPT0gJ3JlZ2lzdHJhdGlvbicpIHtcbiAgICAvLyAgICAgaWYgKCF0b2tlbikge1xuICAgIC8vICAgICAgICAgcmV0dXJuIG5leHQoe25hbWU6ICdsb2dpbid9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGlmICh0by5uYW1lID09PSAnc2lnbmluJyB8fCB0by5uYW1lID09PSAnc2lnbnVwJyAmJiB0b2tlbikge1xuICAgICAgICAvLyBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dCh7bmFtZTogJ2hvbWUnfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBuZXh0KCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHB5LTQgYmctYm9keS10ZXJ0aWFyeVwiPlxuICAgICAgICA8Um91dGVyTGluayA6dG89XCJ7bmFtZTogJ2hvbWUnfVwiPkhvbWU8L1JvdXRlckxpbms+XG4gICAgICAgIDxSb3V0ZXJMaW5rIDp0bz1cIntuYW1lOiAnYWJvdXQnfVwiPkFib3V0PC9Sb3V0ZXJMaW5rPlxuICAgICAgICA8Um91dGVyTGluayA6dG89XCJ7bmFtZTogJ3NpZ25pbid9XCI+U2lnbkluPC9Sb3V0ZXJMaW5rPlxuICAgICAgICA8Um91dGVyTGluayA6dG89XCJ7bmFtZTogJ3NpZ251cCd9XCI+U2lnblVwPC9Sb3V0ZXJMaW5rPlxuICAgIDwvZGl2PlxuICAgIDxSb3V0ZXJWaWV3IC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IFJvdXRlclZpZXcsIFJvdXRlckxpbmsgfSBmcm9tICd2dWUtcm91dGVyJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgUm91dGVyVmlldywgUm91dGVyTGlua1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdBcHAgY29tcG9uZW50IGlzIHJlYWR5JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxtYWluPlxuICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICA8L21haW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQXBwIGNvbXBvbmVudCBpcyByZWFkeScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPG1haW4gY2xhc3M9XCJmb3JtLXNpZ25pbiB3LTEwMCBtLWF1dG9cIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XCJtYi00XCIgc3JjPVwiL2RvY3MvNS4zL2Fzc2V0cy9icmFuZC9ib290c3RyYXAtbG9nby5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjcyXCIgaGVpZ2h0PVwiNTdcIj4gLS0+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJoMyBtYi0zIGZ3LW5vcm1hbFwiPlBsZWFzZSBzaWduIGluPC9oMT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmdcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdi1tb2RlbD1cImNyZWRlbnRpYWxzLmVtYWlsXCIgbmFtZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJuYW1lQGV4YW1wbGUuY29tXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZsb2F0aW5nXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJjcmVkZW50aWFscy5wYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ5b3VyUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInlvdXJQYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNpZ25pblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwIHB5LTJcIiB0eXBlPVwiYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC01IG1iLTMgdGV4dC1ib2R5LXNlY29uZGFyeVwiPsKpIDIwMTfigJMyMDI0PC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9tYWluPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2hlbHBlci9hcGknO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzaWduaW4oKSB7XG4gICAgICAgICAgICBhcGkucG9zdChcbiAgICAgICAgICAgICAgICAnL2FwaS92MS9zaWduaW4nLFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHNcbiAgICAgICAgICAgICkudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzcG9uc2UuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVmcmVzaFRva2VuJywgcmVzcG9uc2UuZGF0YS5yZWZyZXNoVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdob21lJ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3Quc3VjY2VzcygnV2VsY29tZSB0byBob21lJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzLmVtYWlsID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgIH0pLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGUuc2V4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8bWFpbiBjbGFzcz1cImZvcm0tc2lnbmluIHctMTAwIG0tYXV0b1wiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDwhLS0gPGltZyBjbGFzcz1cIm1iLTRcIiBzcmM9XCIvZG9jcy81LjMvYXNzZXRzL2JyYW5kL2Jvb3RzdHJhcC1sb2dvLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPVwiNzJcIiBoZWlnaHQ9XCI1N1wiPiAtLT5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImgzIG1iLTMgZnctbm9ybWFsXCI+UGxlYXNlIHNpZ24gdXA8L2gxPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2LW1vZGVsPVwicHJvZmlsZS5lbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwibmFtZUBleGFtcGxlLmNvbVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicHJvZmlsZS5wYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ5b3VyUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cImFwcGxlMzZcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwieW91clBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZsb2F0aW5nXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInByb2ZpbGUuZmlyc3ROYW1lXCIgbmFtZT1cImZpcnN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmaXJzdE5hbWVcIiBwbGFjZWhvbGRlcj1cIkFwcGxlXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJwcm9maWxlLmxhc3ROYW1lXCIgbmFtZT1cImxhc3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImxhc3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJQZWFyXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3ROYW1lXCI+TGFzdE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2lnbnVwXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDAgcHktMlwiIHR5cGU9XCJidXR0b25cIj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm10LTUgbWItMyB0ZXh0LWJvZHktc2Vjb25kYXJ5XCI+wqkgMjAxN+KAkzIwMjQ8L3A+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L21haW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vaGVscGVyL2FwaSc7XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzaWdudXAoKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3YxL3NpZ251cCcsIHRoaXMucHJvZmlsZSkudGhlbiggcmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ3NpZ25pbid9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0LnN1Y2Nlc3MoJ1BsZWFzZSBTaWduIEluJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZS5lbWFpbCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGUucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlLmZpcnN0TmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGUubGFzdE5hbWUgPSAnJztcblxuICAgICAgICAgICAgfSkuY2F0Y2goIGVycm9yID0+IHtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPG1haW4+XG4gICAgICAgIDxoMT5UaGlzIGlzIENvbXBvbmVudCBuYW1lIEFib3V0PC9oMT5cbiAgICA8L21haW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwM1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvQXBwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1YmNkYWYwM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzViY2RhZjAzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWJjZGFmMDMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJjZGFmMDNcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNWJjZGFmMDMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Fib3V0Vmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzlmMWYxNWFcIlxuY29uc3Qgc2NyaXB0ID0ge31cblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy92aWV3cy9BYm91dFZpZXcudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjc5ZjFmMTVhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNzlmMWYxNWEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc3OWYxZjE1YScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWJvdXRWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OWYxZjE1YVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc3OWYxZjE1YScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vSG9tZVZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1ZmQxYzlhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZVZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWVWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvdmlld3MvSG9tZVZpZXcudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjc1ZmQxYzlhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNzVmZDFjOWEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc3NWZkMWM5YScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZVZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1ZmQxYzlhXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzc1ZmQxYzlhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TaWduSW5WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMzQ2MTg1NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NpZ25JblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NpZ25JblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy92aWV3cy9TaWduSW5WaWV3LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJkMzQ2MTg1NFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2QzNDYxODU0JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnZDM0NjE4NTQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NpZ25JblZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQzNDYxODU0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2QzNDYxODU0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TaWduVXBWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMjU3MWY0Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NpZ25VcFZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NpZ25VcFZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy92aWV3cy9TaWduVXBWaWV3LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzMjU3MWY0Y1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzMyNTcxZjRjJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMzI1NzFmNGMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NpZ25VcFZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyNTcxZjRjXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzMyNTcxZjRjJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vSG9tZVZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vSG9tZVZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TaWduSW5WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1NpZ25JblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TaWduVXBWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1NpZ25VcFZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YmNkYWYwM1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0Fib3V0Vmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzlmMWYxNWFcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ib21lVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzVmZDFjOWFcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TaWduSW5WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMzQ2MTg1NFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1NpZ25VcFZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyNTcxZjRjXCIiXSwibmFtZXMiOlsiY3JlYXRlQXBwIiwiY3JlYXRlUGluaWEiLCJUb2FzdFBsdWdpbiIsIkFwcCIsInJvdXRlciIsImkxOG4iLCJhcHAiLCJ1c2UiLCJtb3VudCIsImF4aW9zIiwidXNlVG9hc3QiLCJ1c2VJMThuIiwiYXBpIiwiY3JlYXRlIiwiJHRvYXN0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsImNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25jYXQiLCJBY2NlcHQiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsImNvZGUiLCJyZW1vdmVJdGVtIiwicHVzaCIsIm5hbWUiLCJkZXQiLCJkZXRhaWxzIiwibWVzIiwibWVzc2FnZSIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJyb3ciLCJmaWVsZCIsImNyZWF0ZUkxOG4iLCJlbnQiLCJ1YXQiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsImxlZ2FjeSIsIm1lc3NhZ2VzIiwiZW4iLCJ1YSIsImNyZWF0ZVJvdXRlciIsImNyZWF0ZVdlYkhpc3RvcnkiLCJIb21lVmlldyIsIkFib3V0VmlldyIsIlNpZ25JblZpZXciLCJTaWduVXBWaWV3IiwiaGlzdG9yeSIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJiZWZvcmVFYWNoIiwidG8iLCJmcm9tIiwibmV4dCIsInRva2VuIiwiUm91dGVyVmlldyIsIlJvdXRlckxpbmsiLCJjb21wb25lbnRzIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwibWV0aG9kcyIsInNpZ25pbiIsIl90aGlzIiwicG9zdCIsInRoZW4iLCJzZXRJdGVtIiwicmVmcmVzaFRva2VuIiwiJHJvdXRlciIsInN1Y2Nlc3MiLCJwcm9maWxlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzaWdudXAiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX0ZyYWdtZW50IiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzEiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X1JvdXRlckxpbmsiLCJfd2l0aEN0eCIsIl9jYWNoZSIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfIiwiX2NvbXBvbmVudF9Sb3V0ZXJWaWV3IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9ob2lzdGVkXzIiLCJ0eXBlIiwiJGV2ZW50IiwiJGRhdGEiLCJpZCIsInBsYWNlaG9sZGVyIiwiX2hvaXN0ZWRfMyIsIm9uQ2xpY2siLCIkb3B0aW9ucyIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiXSwic291cmNlUm9vdCI6IiJ9