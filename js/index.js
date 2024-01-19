/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/***/ (() => {

const toggleNavBtn = document.querySelector('header button');
const navEl = document.querySelector('header ul');

// 點擊 button 切換 active 類別
toggleNavBtn.addEventListener('click', () => {
  navEl.classList.toggle('active');
  document.querySelector('header').classList.add('active');
});

// 取得所有的 li 元素
const navItems = document.querySelectorAll('header ul li');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navEl.classList.contains('active')) {
      navEl.classList.remove('active');
    }
    document.querySelector('header').classList.remove('active');
  });
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
});

/***/ }),

/***/ "./src/js/pages/auth.js?d146":
/*!******************************!*\
  !*** ./src/js/pages/auth.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const auth = () => {
  const formLogin = document.querySelector('#formLogin');
  const formSignup = document.querySelector('#formSignup');

  // 忘記密碼
  document.querySelector('#forgetPwd').addEventListener('click', e => {
    e.preventDefault();
    alert('已寄送重置密碼信件至註冊信箱');
  });
  // 前往註冊
  document.querySelector('#goSignup').addEventListener('click', e => {
    e.preventDefault();
    formLogin.classList.remove('active');
    formSignup.classList.add('active');
  });
  // 提交登入
  document.querySelector('#formLogin').addEventListener('submit', event => {
    const userEmail = document.querySelector('#userEmail');
    const userPwd = document.querySelector('#userPwd');
    // 在這裡進行欄位驗證
    if (!userEmail.value || !userPwd.value) {
      alert('請填寫所有必填欄位！');
      event.preventDefault(); // 阻止表單提交
    } else {
      alert('登錄完成');
      window.location.href = '#/home';
    }
  });
  // 已經有帳號了
  document.querySelector('#formSignup a').addEventListener('click', e => {
    e.preventDefault();
    formSignup.classList.remove('active');
    formLogin.classList.add('active');
  });
  // 提交註冊
  document.querySelector('#formSignup').addEventListener('submit', event => {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const checkPassword = document.querySelector('#checkPassword');
    // 在這裡進行欄位驗證
    if (!email.value || !password.value || !checkPassword.value) {
      alert('請填寫所有必填欄位！');
      event.preventDefault();
    } else if (password.value !== checkPassword.value) {
      alert('確認密碼輸入不一致');
      event.preventDefault();
    } else {
      alert('註冊完成');
      formSignup.classList.remove('active');
      formLogin.classList.add('active');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

/***/ "./src/js/pages/menu.js":
/*!******************************!*\
  !*** ./src/js/pages/menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = () => {
  // 取得所有的 li 元素
  const categories = document.querySelectorAll('main.menu .categoryList li');
  categories.forEach(item => {
    item.addEventListener('click', () => {
      // 移除所有 li 的 'active' 類別
      categories.forEach(category => {
        category.classList.remove('active');
      });

      // 將點擊的 li 加上 'active' 類別
      item.classList.add('active');
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRouter: () => (/* binding */ initRouter),
/* harmony export */   navigateTo: () => (/* binding */ navigateTo)
/* harmony export */ });
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js");
/* harmony import */ var _html_pages_Home_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/pages/Home.ejs */ "./src/html/pages/Home.ejs");
/* harmony import */ var _html_pages_Menu_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html/pages/Menu.ejs */ "./src/html/pages/Menu.ejs");
/* harmony import */ var _html_pages_Auth_ejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/pages/Auth.ejs */ "./src/html/pages/Auth.ejs");
/* harmony import */ var _html_pages_NotFound_ejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/pages/NotFound.ejs */ "./src/html/pages/NotFound.ejs");
/* harmony import */ var _pages_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/auth */ "./src/js/pages/auth.js?d146");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/menu */ "./src/js/pages/menu.js");
// router.js

// pages




// script



// 定义路由规则
const routes = [{
  path: '/',
  title: '首頁－六角西餐廳',
  component: 'Home'
}, {
  path: '/home',
  title: '首頁－六角西餐廳',
  component: 'Home'
}, {
  path: '/menu',
  title: '線上訂購美食－六角西餐廳',
  component: 'Menu'
}, {
  path: '/auth',
  title: '登入－六角西餐廳',
  component: 'Auth'
}];

// 更新Active連結樣式
function updateActiveLink(currentPath) {
  // console.log(currentPath);
  const linksArray = document.querySelectorAll('header nav a');
  linksArray.forEach(link => {
    const linkPath = `/${link.getAttribute('href').split('/')[1]}`;
    const correspondingLi = link.parentElement;
    // console.log(currentPath, linkPath);
    if (correspondingLi) {
      correspondingLi.classList.toggle('active', currentPath.split('/')[1] === linkPath.split('/')[1]);
    }
  });
}
function renderComponent(component) {
  // console.log(`渲染組件: ${component}`);
  const mainContainer = document.getElementById('root');
  // 清空容器
  if (mainContainer) {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
  } else {
    console.error('mainContainer is null or undefined');
  }
  // 示例组件渲染函数
  function render(container) {
    let inner = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    const wrap = document.createElement('div');
    wrap.innerHTML = inner;
    container.appendChild(wrap);
  }

  // 创建或加载对应组件
  switch (component) {
    case 'Home':
      render(mainContainer, _html_pages_Home_ejs__WEBPACK_IMPORTED_MODULE_0__["default"]);
      break;
    case 'Menu':
      render(mainContainer, _html_pages_Menu_ejs__WEBPACK_IMPORTED_MODULE_1__["default"]);
      (0,_pages_menu__WEBPACK_IMPORTED_MODULE_5__["default"])();
      break;
    case 'Auth':
      render(mainContainer, _html_pages_Auth_ejs__WEBPACK_IMPORTED_MODULE_2__["default"]);
      (0,_pages_auth__WEBPACK_IMPORTED_MODULE_4__["default"])();
      break;
    case 'NotFound':
      render(mainContainer, _html_pages_NotFound_ejs__WEBPACK_IMPORTED_MODULE_3__["default"]);
      break;
    default:
      console.error(`Unknown component: ${component}`);
  }
}

// 路由處理
function handleRouteChange() {
  const currentPath = window.location.hash.substring(1);
  const route = routes.find(item => (0,path_to_regexp__WEBPACK_IMPORTED_MODULE_6__.match)(item.path)(currentPath));
  if (route) {
    document.title = route.title || 'Default Title';
  } else if (route === undefined) {
    document.title = routes.find(() => (0,path_to_regexp__WEBPACK_IMPORTED_MODULE_6__.match)('/')).title;
  } else {
    document.title = '404 - Page Not Found';
  }
  if (currentPath === '') {
    renderComponent('Home');
    updateActiveLink('/home');
  } else if (route) {
    // console.log(route.component, currentPath);
    // 渲染对应组件
    renderComponent(route.component); // Courses
    // 标记当前页面为 active
    updateActiveLink(currentPath); // /courses
  } else {
    // 处理未匹配的路由，例如显示 404 页面
    renderComponent('NotFound');
  }
  // console.log('params', JSON.stringify(params));
  // console.log('currentPath', currentPath);
}

// 导航函数
function navigateTo(path) {
  window.location.hash = path;
  handleRouteChange();
}

// 初始化路由
function initRouter() {
  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange();
}


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@13.3.3_sass@1.70.0_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.33_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js!./src/stylesheet/all.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@13.3.3_sass@1.70.0_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.33_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js!./src/stylesheet/all.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header_mobile.png */ "./src/assets/images/header_mobile.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/header_desktop.png */ "./src/assets/images/header_desktop.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/main_chef_brown.png */ "./src/assets/images/main_chef_brown.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*!
 * Bootstrap Grid v4.5.2 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
html {
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
}

*,
::after,
::before {
  box-sizing: inherit;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*=col-] {
  padding-right: 0;
  padding-left: 0;
}

.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
}

.row-cols-1 > * {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2 > * {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3 > * {
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.row-cols-4 > * {
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5 > * {
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6 > * {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-auto {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  -ms-flex-order: -1;
  order: -1;
}

.order-last {
  -ms-flex-order: 13;
  order: 13;
}

.order-0 {
  -ms-flex-order: 0;
  order: 0;
}

.order-1 {
  -ms-flex-order: 1;
  order: 1;
}

.order-2 {
  -ms-flex-order: 2;
  order: 2;
}

.order-3 {
  -ms-flex-order: 3;
  order: 3;
}

.order-4 {
  -ms-flex-order: 4;
  order: 4;
}

.order-5 {
  -ms-flex-order: 5;
  order: 5;
}

.order-6 {
  -ms-flex-order: 6;
  order: 6;
}

.order-7 {
  -ms-flex-order: 7;
  order: 7;
}

.order-8 {
  -ms-flex-order: 8;
  order: 8;
}

.order-9 {
  -ms-flex-order: 9;
  order: 9;
}

.order-10 {
  -ms-flex-order: 10;
  order: 10;
}

.order-11 {
  -ms-flex-order: 11;
  order: 11;
}

.order-12 {
  -ms-flex-order: 12;
  order: 12;
}

.offset-1 {
  margin-left: 8.333333%;
}

.offset-2 {
  margin-left: 16.666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.333333%;
}

.offset-5 {
  margin-left: 41.666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.333333%;
}

.offset-8 {
  margin-left: 66.666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.333333%;
}

.offset-11 {
  margin-left: 91.666667%;
}

@media (min-width: 576px) {
  .col-sm {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-sm-1 > * {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-sm-2 > * {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-sm-3 > * {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .row-cols-sm-4 > * {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-sm-5 > * {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-sm-6 > * {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-sm-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-sm-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-sm-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-sm-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-sm-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-sm-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-sm-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-sm-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-sm-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-sm-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-sm-first {
    -ms-flex-order: -1;
    order: -1;
  }
  .order-sm-last {
    -ms-flex-order: 13;
    order: 13;
  }
  .order-sm-0 {
    -ms-flex-order: 0;
    order: 0;
  }
  .order-sm-1 {
    -ms-flex-order: 1;
    order: 1;
  }
  .order-sm-2 {
    -ms-flex-order: 2;
    order: 2;
  }
  .order-sm-3 {
    -ms-flex-order: 3;
    order: 3;
  }
  .order-sm-4 {
    -ms-flex-order: 4;
    order: 4;
  }
  .order-sm-5 {
    -ms-flex-order: 5;
    order: 5;
  }
  .order-sm-6 {
    -ms-flex-order: 6;
    order: 6;
  }
  .order-sm-7 {
    -ms-flex-order: 7;
    order: 7;
  }
  .order-sm-8 {
    -ms-flex-order: 8;
    order: 8;
  }
  .order-sm-9 {
    -ms-flex-order: 9;
    order: 9;
  }
  .order-sm-10 {
    -ms-flex-order: 10;
    order: 10;
  }
  .order-sm-11 {
    -ms-flex-order: 11;
    order: 11;
  }
  .order-sm-12 {
    -ms-flex-order: 12;
    order: 12;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.333333%;
  }
  .offset-sm-2 {
    margin-left: 16.666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.333333%;
  }
  .offset-sm-5 {
    margin-left: 41.666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.333333%;
  }
  .offset-sm-8 {
    margin-left: 66.666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.333333%;
  }
  .offset-sm-11 {
    margin-left: 91.666667%;
  }
}
@media (min-width: 768px) {
  .col-md {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-md-1 > * {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-md-2 > * {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-md-3 > * {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .row-cols-md-4 > * {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-md-5 > * {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-md-6 > * {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-md-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-md-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-md-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-md-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-md-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-md-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-md-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-md-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-md-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-md-first {
    -ms-flex-order: -1;
    order: -1;
  }
  .order-md-last {
    -ms-flex-order: 13;
    order: 13;
  }
  .order-md-0 {
    -ms-flex-order: 0;
    order: 0;
  }
  .order-md-1 {
    -ms-flex-order: 1;
    order: 1;
  }
  .order-md-2 {
    -ms-flex-order: 2;
    order: 2;
  }
  .order-md-3 {
    -ms-flex-order: 3;
    order: 3;
  }
  .order-md-4 {
    -ms-flex-order: 4;
    order: 4;
  }
  .order-md-5 {
    -ms-flex-order: 5;
    order: 5;
  }
  .order-md-6 {
    -ms-flex-order: 6;
    order: 6;
  }
  .order-md-7 {
    -ms-flex-order: 7;
    order: 7;
  }
  .order-md-8 {
    -ms-flex-order: 8;
    order: 8;
  }
  .order-md-9 {
    -ms-flex-order: 9;
    order: 9;
  }
  .order-md-10 {
    -ms-flex-order: 10;
    order: 10;
  }
  .order-md-11 {
    -ms-flex-order: 11;
    order: 11;
  }
  .order-md-12 {
    -ms-flex-order: 12;
    order: 12;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.333333%;
  }
  .offset-md-2 {
    margin-left: 16.666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.333333%;
  }
  .offset-md-5 {
    margin-left: 41.666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.333333%;
  }
  .offset-md-8 {
    margin-left: 66.666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.333333%;
  }
  .offset-md-11 {
    margin-left: 91.666667%;
  }
}
@media (min-width: 992px) {
  .col-lg {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-lg-1 > * {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-lg-2 > * {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-lg-3 > * {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .row-cols-lg-4 > * {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-lg-5 > * {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-lg-6 > * {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-lg-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-lg-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-lg-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-lg-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-lg-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-lg-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-lg-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-lg-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-lg-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-lg-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-lg-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-lg-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-lg-first {
    -ms-flex-order: -1;
    order: -1;
  }
  .order-lg-last {
    -ms-flex-order: 13;
    order: 13;
  }
  .order-lg-0 {
    -ms-flex-order: 0;
    order: 0;
  }
  .order-lg-1 {
    -ms-flex-order: 1;
    order: 1;
  }
  .order-lg-2 {
    -ms-flex-order: 2;
    order: 2;
  }
  .order-lg-3 {
    -ms-flex-order: 3;
    order: 3;
  }
  .order-lg-4 {
    -ms-flex-order: 4;
    order: 4;
  }
  .order-lg-5 {
    -ms-flex-order: 5;
    order: 5;
  }
  .order-lg-6 {
    -ms-flex-order: 6;
    order: 6;
  }
  .order-lg-7 {
    -ms-flex-order: 7;
    order: 7;
  }
  .order-lg-8 {
    -ms-flex-order: 8;
    order: 8;
  }
  .order-lg-9 {
    -ms-flex-order: 9;
    order: 9;
  }
  .order-lg-10 {
    -ms-flex-order: 10;
    order: 10;
  }
  .order-lg-11 {
    -ms-flex-order: 11;
    order: 11;
  }
  .order-lg-12 {
    -ms-flex-order: 12;
    order: 12;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.333333%;
  }
  .offset-lg-2 {
    margin-left: 16.666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.333333%;
  }
  .offset-lg-5 {
    margin-left: 41.666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.333333%;
  }
  .offset-lg-8 {
    margin-left: 66.666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.333333%;
  }
  .offset-lg-11 {
    margin-left: 91.666667%;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-xl-1 > * {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-xl-2 > * {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-xl-3 > * {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .row-cols-xl-4 > * {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-xl-5 > * {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-xl-6 > * {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-xl-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-xl-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-xl-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-xl-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xl-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-xl-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-xl-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xl-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-xl-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-xl-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xl-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-xl-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-xl-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-xl-first {
    -ms-flex-order: -1;
    order: -1;
  }
  .order-xl-last {
    -ms-flex-order: 13;
    order: 13;
  }
  .order-xl-0 {
    -ms-flex-order: 0;
    order: 0;
  }
  .order-xl-1 {
    -ms-flex-order: 1;
    order: 1;
  }
  .order-xl-2 {
    -ms-flex-order: 2;
    order: 2;
  }
  .order-xl-3 {
    -ms-flex-order: 3;
    order: 3;
  }
  .order-xl-4 {
    -ms-flex-order: 4;
    order: 4;
  }
  .order-xl-5 {
    -ms-flex-order: 5;
    order: 5;
  }
  .order-xl-6 {
    -ms-flex-order: 6;
    order: 6;
  }
  .order-xl-7 {
    -ms-flex-order: 7;
    order: 7;
  }
  .order-xl-8 {
    -ms-flex-order: 8;
    order: 8;
  }
  .order-xl-9 {
    -ms-flex-order: 9;
    order: 9;
  }
  .order-xl-10 {
    -ms-flex-order: 10;
    order: 10;
  }
  .order-xl-11 {
    -ms-flex-order: 11;
    order: 11;
  }
  .order-xl-12 {
    -ms-flex-order: 12;
    order: 12;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.333333%;
  }
  .offset-xl-2 {
    margin-left: 16.666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.333333%;
  }
  .offset-xl-5 {
    margin-left: 41.666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.333333%;
  }
  .offset-xl-8 {
    margin-left: 66.666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.333333%;
  }
  .offset-xl-11 {
    margin-left: 91.666667%;
  }
}
.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}

.d-inline-flex {
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}
@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-md-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}
@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}
@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-print-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}
.flex-row {
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}

.flex-column {
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

.flex-row-reverse {
  -ms-flex-direction: row-reverse !important;
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  -ms-flex-direction: column-reverse !important;
  flex-direction: column-reverse !important;
}

.flex-wrap {
  -ms-flex-wrap: wrap !important;
  flex-wrap: wrap !important;
}

.flex-nowrap {
  -ms-flex-wrap: nowrap !important;
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  -ms-flex-wrap: wrap-reverse !important;
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  -ms-flex-positive: 0 !important;
  flex-grow: 0 !important;
}

.flex-grow-1 {
  -ms-flex-positive: 1 !important;
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  -ms-flex-negative: 0 !important;
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  -ms-flex-negative: 1 !important;
  flex-shrink: 1 !important;
}

.justify-content-start {
  -ms-flex-pack: start !important;
  justify-content: flex-start !important;
}

.justify-content-end {
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}

.justify-content-center {
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.justify-content-between {
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
}

.justify-content-around {
  -ms-flex-pack: distribute !important;
  justify-content: space-around !important;
}

.align-items-start {
  -ms-flex-align: start !important;
  align-items: flex-start !important;
}

.align-items-end {
  -ms-flex-align: end !important;
  align-items: flex-end !important;
}

.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}

.align-items-baseline {
  -ms-flex-align: baseline !important;
  align-items: baseline !important;
}

.align-items-stretch {
  -ms-flex-align: stretch !important;
  align-items: stretch !important;
}

.align-content-start {
  -ms-flex-line-pack: start !important;
  align-content: flex-start !important;
}

.align-content-end {
  -ms-flex-line-pack: end !important;
  align-content: flex-end !important;
}

.align-content-center {
  -ms-flex-line-pack: center !important;
  align-content: center !important;
}

.align-content-between {
  -ms-flex-line-pack: justify !important;
  align-content: space-between !important;
}

.align-content-around {
  -ms-flex-line-pack: distribute !important;
  align-content: space-around !important;
}

.align-content-stretch {
  -ms-flex-line-pack: stretch !important;
  align-content: stretch !important;
}

.align-self-auto {
  -ms-flex-item-align: auto !important;
  align-self: auto !important;
}

.align-self-start {
  -ms-flex-item-align: start !important;
  align-self: flex-start !important;
}

.align-self-end {
  -ms-flex-item-align: end !important;
  align-self: flex-end !important;
}

.align-self-center {
  -ms-flex-item-align: center !important;
  align-self: center !important;
}

.align-self-baseline {
  -ms-flex-item-align: baseline !important;
  align-self: baseline !important;
}

.align-self-stretch {
  -ms-flex-item-align: stretch !important;
  align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-sm-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-sm-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-sm-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-sm-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-sm-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-sm-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-sm-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-sm-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-sm-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-sm-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-sm-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-sm-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-sm-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
}
@media (min-width: 768px) {
  .flex-md-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-md-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-md-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-md-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-md-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-md-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-md-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-md-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-md-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-md-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-md-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-md-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-md-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-md-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-md-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-md-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-md-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-md-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-md-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-md-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
}
@media (min-width: 992px) {
  .flex-lg-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-lg-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-lg-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-lg-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-lg-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-lg-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-lg-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-lg-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-lg-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-lg-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-lg-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-lg-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-lg-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
}
@media (min-width: 1200px) {
  .flex-xl-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .flex-xl-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
  .flex-xl-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
  .flex-xl-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }
  .justify-content-xl-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .justify-content-xl-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .align-items-xl-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .align-items-xl-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .align-content-xl-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }
  .align-content-xl-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }
  .align-content-xl-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }
  .align-self-xl-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  .align-self-xl-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }
}
.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.m-n1 {
  margin: -0.25rem !important;
}

.mt-n1,
.my-n1 {
  margin-top: -0.25rem !important;
}

.mr-n1,
.mx-n1 {
  margin-right: -0.25rem !important;
}

.mb-n1,
.my-n1 {
  margin-bottom: -0.25rem !important;
}

.ml-n1,
.mx-n1 {
  margin-left: -0.25rem !important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.mt-n2,
.my-n2 {
  margin-top: -0.5rem !important;
}

.mr-n2,
.mx-n2 {
  margin-right: -0.5rem !important;
}

.mb-n2,
.my-n2 {
  margin-bottom: -0.5rem !important;
}

.ml-n2,
.mx-n2 {
  margin-left: -0.5rem !important;
}

.m-n3 {
  margin: -1rem !important;
}

.mt-n3,
.my-n3 {
  margin-top: -1rem !important;
}

.mr-n3,
.mx-n3 {
  margin-right: -1rem !important;
}

.mb-n3,
.my-n3 {
  margin-bottom: -1rem !important;
}

.ml-n3,
.mx-n3 {
  margin-left: -1rem !important;
}

.m-n4 {
  margin: -1.5rem !important;
}

.mt-n4,
.my-n4 {
  margin-top: -1.5rem !important;
}

.mr-n4,
.mx-n4 {
  margin-right: -1.5rem !important;
}

.mb-n4,
.my-n4 {
  margin-bottom: -1.5rem !important;
}

.ml-n4,
.mx-n4 {
  margin-left: -1.5rem !important;
}

.m-n5 {
  margin: -3rem !important;
}

.mt-n5,
.my-n5 {
  margin-top: -3rem !important;
}

.mr-n5,
.mx-n5 {
  margin-right: -3rem !important;
}

.mb-n5,
.my-n5 {
  margin-bottom: -3rem !important;
}

.ml-n5,
.mx-n5 {
  margin-left: -3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto,
.my-auto {
  margin-top: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }
  .mt-sm-0,
  .my-sm-0 {
    margin-top: 0 !important;
  }
  .mr-sm-0,
  .mx-sm-0 {
    margin-right: 0 !important;
  }
  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 0 !important;
  }
  .ml-sm-0,
  .mx-sm-0 {
    margin-left: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .mt-sm-1,
  .my-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mr-sm-1,
  .mx-sm-1 {
    margin-right: 0.25rem !important;
  }
  .mb-sm-1,
  .my-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-sm-1,
  .mx-sm-1 {
    margin-left: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .mt-sm-2,
  .my-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mr-sm-2,
  .mx-sm-2 {
    margin-right: 0.5rem !important;
  }
  .mb-sm-2,
  .my-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-sm-2,
  .mx-sm-2 {
    margin-left: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .mt-sm-3,
  .my-sm-3 {
    margin-top: 1rem !important;
  }
  .mr-sm-3,
  .mx-sm-3 {
    margin-right: 1rem !important;
  }
  .mb-sm-3,
  .my-sm-3 {
    margin-bottom: 1rem !important;
  }
  .ml-sm-3,
  .mx-sm-3 {
    margin-left: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .mt-sm-4,
  .my-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }
  .mb-sm-4,
  .my-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-sm-4,
  .mx-sm-4 {
    margin-left: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .mt-sm-5,
  .my-sm-5 {
    margin-top: 3rem !important;
  }
  .mr-sm-5,
  .mx-sm-5 {
    margin-right: 3rem !important;
  }
  .mb-sm-5,
  .my-sm-5 {
    margin-bottom: 3rem !important;
  }
  .ml-sm-5,
  .mx-sm-5 {
    margin-left: 3rem !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .pt-sm-0,
  .py-sm-0 {
    padding-top: 0 !important;
  }
  .pr-sm-0,
  .px-sm-0 {
    padding-right: 0 !important;
  }
  .pb-sm-0,
  .py-sm-0 {
    padding-bottom: 0 !important;
  }
  .pl-sm-0,
  .px-sm-0 {
    padding-left: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .pt-sm-1,
  .py-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pr-sm-1,
  .px-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pb-sm-1,
  .py-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-sm-1,
  .px-sm-1 {
    padding-left: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .pt-sm-2,
  .py-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pr-sm-2,
  .px-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pb-sm-2,
  .py-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-sm-2,
  .px-sm-2 {
    padding-left: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .pt-sm-3,
  .py-sm-3 {
    padding-top: 1rem !important;
  }
  .pr-sm-3,
  .px-sm-3 {
    padding-right: 1rem !important;
  }
  .pb-sm-3,
  .py-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pl-sm-3,
  .px-sm-3 {
    padding-left: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .pt-sm-4,
  .py-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pr-sm-4,
  .px-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pb-sm-4,
  .py-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-sm-4,
  .px-sm-4 {
    padding-left: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .pt-sm-5,
  .py-sm-5 {
    padding-top: 3rem !important;
  }
  .pr-sm-5,
  .px-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-5,
  .py-sm-5 {
    padding-bottom: 3rem !important;
  }
  .pl-sm-5,
  .px-sm-5 {
    padding-left: 3rem !important;
  }
  .m-sm-n1 {
    margin: -0.25rem !important;
  }
  .mt-sm-n1,
  .my-sm-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-sm-n1,
  .mx-sm-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-sm-n1,
  .my-sm-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-sm-n1,
  .mx-sm-n1 {
    margin-left: -0.25rem !important;
  }
  .m-sm-n2 {
    margin: -0.5rem !important;
  }
  .mt-sm-n2,
  .my-sm-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-sm-n2,
  .mx-sm-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-sm-n2,
  .my-sm-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-sm-n2,
  .mx-sm-n2 {
    margin-left: -0.5rem !important;
  }
  .m-sm-n3 {
    margin: -1rem !important;
  }
  .mt-sm-n3,
  .my-sm-n3 {
    margin-top: -1rem !important;
  }
  .mr-sm-n3,
  .mx-sm-n3 {
    margin-right: -1rem !important;
  }
  .mb-sm-n3,
  .my-sm-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-sm-n3,
  .mx-sm-n3 {
    margin-left: -1rem !important;
  }
  .m-sm-n4 {
    margin: -1.5rem !important;
  }
  .mt-sm-n4,
  .my-sm-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-sm-n4,
  .mx-sm-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-sm-n4,
  .my-sm-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-sm-n4,
  .mx-sm-n4 {
    margin-left: -1.5rem !important;
  }
  .m-sm-n5 {
    margin: -3rem !important;
  }
  .mt-sm-n5,
  .my-sm-n5 {
    margin-top: -3rem !important;
  }
  .mr-sm-n5,
  .mx-sm-n5 {
    margin-right: -3rem !important;
  }
  .mb-sm-n5,
  .my-sm-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-sm-n5,
  .mx-sm-n5 {
    margin-left: -3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mt-sm-auto,
  .my-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-auto,
  .mx-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-auto,
  .my-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-auto,
  .mx-sm-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }
  .mt-md-0,
  .my-md-0 {
    margin-top: 0 !important;
  }
  .mr-md-0,
  .mx-md-0 {
    margin-right: 0 !important;
  }
  .mb-md-0,
  .my-md-0 {
    margin-bottom: 0 !important;
  }
  .ml-md-0,
  .mx-md-0 {
    margin-left: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .mt-md-1,
  .my-md-1 {
    margin-top: 0.25rem !important;
  }
  .mr-md-1,
  .mx-md-1 {
    margin-right: 0.25rem !important;
  }
  .mb-md-1,
  .my-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-md-1,
  .mx-md-1 {
    margin-left: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .mt-md-2,
  .my-md-2 {
    margin-top: 0.5rem !important;
  }
  .mr-md-2,
  .mx-md-2 {
    margin-right: 0.5rem !important;
  }
  .mb-md-2,
  .my-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-md-2,
  .mx-md-2 {
    margin-left: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .mt-md-3,
  .my-md-3 {
    margin-top: 1rem !important;
  }
  .mr-md-3,
  .mx-md-3 {
    margin-right: 1rem !important;
  }
  .mb-md-3,
  .my-md-3 {
    margin-bottom: 1rem !important;
  }
  .ml-md-3,
  .mx-md-3 {
    margin-left: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .mt-md-4,
  .my-md-4 {
    margin-top: 1.5rem !important;
  }
  .mr-md-4,
  .mx-md-4 {
    margin-right: 1.5rem !important;
  }
  .mb-md-4,
  .my-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-md-4,
  .mx-md-4 {
    margin-left: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .mt-md-5,
  .my-md-5 {
    margin-top: 3rem !important;
  }
  .mr-md-5,
  .mx-md-5 {
    margin-right: 3rem !important;
  }
  .mb-md-5,
  .my-md-5 {
    margin-bottom: 3rem !important;
  }
  .ml-md-5,
  .mx-md-5 {
    margin-left: 3rem !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .pt-md-0,
  .py-md-0 {
    padding-top: 0 !important;
  }
  .pr-md-0,
  .px-md-0 {
    padding-right: 0 !important;
  }
  .pb-md-0,
  .py-md-0 {
    padding-bottom: 0 !important;
  }
  .pl-md-0,
  .px-md-0 {
    padding-left: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .pt-md-1,
  .py-md-1 {
    padding-top: 0.25rem !important;
  }
  .pr-md-1,
  .px-md-1 {
    padding-right: 0.25rem !important;
  }
  .pb-md-1,
  .py-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-md-1,
  .px-md-1 {
    padding-left: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .pt-md-2,
  .py-md-2 {
    padding-top: 0.5rem !important;
  }
  .pr-md-2,
  .px-md-2 {
    padding-right: 0.5rem !important;
  }
  .pb-md-2,
  .py-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-md-2,
  .px-md-2 {
    padding-left: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .pt-md-3,
  .py-md-3 {
    padding-top: 1rem !important;
  }
  .pr-md-3,
  .px-md-3 {
    padding-right: 1rem !important;
  }
  .pb-md-3,
  .py-md-3 {
    padding-bottom: 1rem !important;
  }
  .pl-md-3,
  .px-md-3 {
    padding-left: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .pt-md-4,
  .py-md-4 {
    padding-top: 1.5rem !important;
  }
  .pr-md-4,
  .px-md-4 {
    padding-right: 1.5rem !important;
  }
  .pb-md-4,
  .py-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-md-4,
  .px-md-4 {
    padding-left: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .pt-md-5,
  .py-md-5 {
    padding-top: 3rem !important;
  }
  .pr-md-5,
  .px-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-5,
  .py-md-5 {
    padding-bottom: 3rem !important;
  }
  .pl-md-5,
  .px-md-5 {
    padding-left: 3rem !important;
  }
  .m-md-n1 {
    margin: -0.25rem !important;
  }
  .mt-md-n1,
  .my-md-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-md-n1,
  .mx-md-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-md-n1,
  .my-md-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-md-n1,
  .mx-md-n1 {
    margin-left: -0.25rem !important;
  }
  .m-md-n2 {
    margin: -0.5rem !important;
  }
  .mt-md-n2,
  .my-md-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-md-n2,
  .mx-md-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-md-n2,
  .my-md-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-md-n2,
  .mx-md-n2 {
    margin-left: -0.5rem !important;
  }
  .m-md-n3 {
    margin: -1rem !important;
  }
  .mt-md-n3,
  .my-md-n3 {
    margin-top: -1rem !important;
  }
  .mr-md-n3,
  .mx-md-n3 {
    margin-right: -1rem !important;
  }
  .mb-md-n3,
  .my-md-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-md-n3,
  .mx-md-n3 {
    margin-left: -1rem !important;
  }
  .m-md-n4 {
    margin: -1.5rem !important;
  }
  .mt-md-n4,
  .my-md-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-md-n4,
  .mx-md-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-md-n4,
  .my-md-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-md-n4,
  .mx-md-n4 {
    margin-left: -1.5rem !important;
  }
  .m-md-n5 {
    margin: -3rem !important;
  }
  .mt-md-n5,
  .my-md-n5 {
    margin-top: -3rem !important;
  }
  .mr-md-n5,
  .mx-md-n5 {
    margin-right: -3rem !important;
  }
  .mb-md-n5,
  .my-md-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-md-n5,
  .mx-md-n5 {
    margin-left: -3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mt-md-auto,
  .my-md-auto {
    margin-top: auto !important;
  }
  .mr-md-auto,
  .mx-md-auto {
    margin-right: auto !important;
  }
  .mb-md-auto,
  .my-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-auto,
  .mx-md-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }
  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important;
  }
  .mr-lg-0,
  .mx-lg-0 {
    margin-right: 0 !important;
  }
  .mb-lg-0,
  .my-lg-0 {
    margin-bottom: 0 !important;
  }
  .ml-lg-0,
  .mx-lg-0 {
    margin-left: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .mt-lg-1,
  .my-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mr-lg-1,
  .mx-lg-1 {
    margin-right: 0.25rem !important;
  }
  .mb-lg-1,
  .my-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-lg-1,
  .mx-lg-1 {
    margin-left: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .mt-lg-2,
  .my-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mr-lg-2,
  .mx-lg-2 {
    margin-right: 0.5rem !important;
  }
  .mb-lg-2,
  .my-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-lg-2,
  .mx-lg-2 {
    margin-left: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .mt-lg-3,
  .my-lg-3 {
    margin-top: 1rem !important;
  }
  .mr-lg-3,
  .mx-lg-3 {
    margin-right: 1rem !important;
  }
  .mb-lg-3,
  .my-lg-3 {
    margin-bottom: 1rem !important;
  }
  .ml-lg-3,
  .mx-lg-3 {
    margin-left: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .mt-lg-4,
  .my-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mr-lg-4,
  .mx-lg-4 {
    margin-right: 1.5rem !important;
  }
  .mb-lg-4,
  .my-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-lg-4,
  .mx-lg-4 {
    margin-left: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .mt-lg-5,
  .my-lg-5 {
    margin-top: 3rem !important;
  }
  .mr-lg-5,
  .mx-lg-5 {
    margin-right: 3rem !important;
  }
  .mb-lg-5,
  .my-lg-5 {
    margin-bottom: 3rem !important;
  }
  .ml-lg-5,
  .mx-lg-5 {
    margin-left: 3rem !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .pt-lg-0,
  .py-lg-0 {
    padding-top: 0 !important;
  }
  .pr-lg-0,
  .px-lg-0 {
    padding-right: 0 !important;
  }
  .pb-lg-0,
  .py-lg-0 {
    padding-bottom: 0 !important;
  }
  .pl-lg-0,
  .px-lg-0 {
    padding-left: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .pt-lg-1,
  .py-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pr-lg-1,
  .px-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pb-lg-1,
  .py-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-lg-1,
  .px-lg-1 {
    padding-left: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .pt-lg-2,
  .py-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pr-lg-2,
  .px-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pb-lg-2,
  .py-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-lg-2,
  .px-lg-2 {
    padding-left: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .pt-lg-3,
  .py-lg-3 {
    padding-top: 1rem !important;
  }
  .pr-lg-3,
  .px-lg-3 {
    padding-right: 1rem !important;
  }
  .pb-lg-3,
  .py-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pl-lg-3,
  .px-lg-3 {
    padding-left: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .pt-lg-4,
  .py-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pr-lg-4,
  .px-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pb-lg-4,
  .py-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-lg-4,
  .px-lg-4 {
    padding-left: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .pt-lg-5,
  .py-lg-5 {
    padding-top: 3rem !important;
  }
  .pr-lg-5,
  .px-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-5,
  .py-lg-5 {
    padding-bottom: 3rem !important;
  }
  .pl-lg-5,
  .px-lg-5 {
    padding-left: 3rem !important;
  }
  .m-lg-n1 {
    margin: -0.25rem !important;
  }
  .mt-lg-n1,
  .my-lg-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-lg-n1,
  .mx-lg-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-lg-n1,
  .my-lg-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-lg-n1,
  .mx-lg-n1 {
    margin-left: -0.25rem !important;
  }
  .m-lg-n2 {
    margin: -0.5rem !important;
  }
  .mt-lg-n2,
  .my-lg-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-lg-n2,
  .mx-lg-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-lg-n2,
  .my-lg-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-lg-n2,
  .mx-lg-n2 {
    margin-left: -0.5rem !important;
  }
  .m-lg-n3 {
    margin: -1rem !important;
  }
  .mt-lg-n3,
  .my-lg-n3 {
    margin-top: -1rem !important;
  }
  .mr-lg-n3,
  .mx-lg-n3 {
    margin-right: -1rem !important;
  }
  .mb-lg-n3,
  .my-lg-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-lg-n3,
  .mx-lg-n3 {
    margin-left: -1rem !important;
  }
  .m-lg-n4 {
    margin: -1.5rem !important;
  }
  .mt-lg-n4,
  .my-lg-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-lg-n4,
  .mx-lg-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-lg-n4,
  .my-lg-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-lg-n4,
  .mx-lg-n4 {
    margin-left: -1.5rem !important;
  }
  .m-lg-n5 {
    margin: -3rem !important;
  }
  .mt-lg-n5,
  .my-lg-n5 {
    margin-top: -3rem !important;
  }
  .mr-lg-n5,
  .mx-lg-n5 {
    margin-right: -3rem !important;
  }
  .mb-lg-n5,
  .my-lg-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-lg-n5,
  .mx-lg-n5 {
    margin-left: -3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mt-lg-auto,
  .my-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-auto,
  .mx-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-auto,
  .my-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-auto,
  .mx-lg-auto {
    margin-left: auto !important;
  }
}
@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }
  .mt-xl-0,
  .my-xl-0 {
    margin-top: 0 !important;
  }
  .mr-xl-0,
  .mx-xl-0 {
    margin-right: 0 !important;
  }
  .mb-xl-0,
  .my-xl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xl-0,
  .mx-xl-0 {
    margin-left: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .mt-xl-1,
  .my-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mr-xl-1,
  .mx-xl-1 {
    margin-right: 0.25rem !important;
  }
  .mb-xl-1,
  .my-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-xl-1,
  .mx-xl-1 {
    margin-left: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .mt-xl-2,
  .my-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xl-2,
  .mx-xl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xl-2,
  .my-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xl-2,
  .mx-xl-2 {
    margin-left: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .mt-xl-3,
  .my-xl-3 {
    margin-top: 1rem !important;
  }
  .mr-xl-3,
  .mx-xl-3 {
    margin-right: 1rem !important;
  }
  .mb-xl-3,
  .my-xl-3 {
    margin-bottom: 1rem !important;
  }
  .ml-xl-3,
  .mx-xl-3 {
    margin-left: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .mt-xl-4,
  .my-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xl-4,
  .mx-xl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xl-4,
  .my-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xl-4,
  .mx-xl-4 {
    margin-left: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .mt-xl-5,
  .my-xl-5 {
    margin-top: 3rem !important;
  }
  .mr-xl-5,
  .mx-xl-5 {
    margin-right: 3rem !important;
  }
  .mb-xl-5,
  .my-xl-5 {
    margin-bottom: 3rem !important;
  }
  .ml-xl-5,
  .mx-xl-5 {
    margin-left: 3rem !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .pt-xl-0,
  .py-xl-0 {
    padding-top: 0 !important;
  }
  .pr-xl-0,
  .px-xl-0 {
    padding-right: 0 !important;
  }
  .pb-xl-0,
  .py-xl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xl-0,
  .px-xl-0 {
    padding-left: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .pt-xl-1,
  .py-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pr-xl-1,
  .px-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pb-xl-1,
  .py-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-xl-1,
  .px-xl-1 {
    padding-left: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .pt-xl-2,
  .py-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xl-2,
  .px-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xl-2,
  .py-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xl-2,
  .px-xl-2 {
    padding-left: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .pt-xl-3,
  .py-xl-3 {
    padding-top: 1rem !important;
  }
  .pr-xl-3,
  .px-xl-3 {
    padding-right: 1rem !important;
  }
  .pb-xl-3,
  .py-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pl-xl-3,
  .px-xl-3 {
    padding-left: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .pt-xl-4,
  .py-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xl-4,
  .px-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xl-4,
  .py-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xl-4,
  .px-xl-4 {
    padding-left: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .pt-xl-5,
  .py-xl-5 {
    padding-top: 3rem !important;
  }
  .pr-xl-5,
  .px-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-5,
  .py-xl-5 {
    padding-bottom: 3rem !important;
  }
  .pl-xl-5,
  .px-xl-5 {
    padding-left: 3rem !important;
  }
  .m-xl-n1 {
    margin: -0.25rem !important;
  }
  .mt-xl-n1,
  .my-xl-n1 {
    margin-top: -0.25rem !important;
  }
  .mr-xl-n1,
  .mx-xl-n1 {
    margin-right: -0.25rem !important;
  }
  .mb-xl-n1,
  .my-xl-n1 {
    margin-bottom: -0.25rem !important;
  }
  .ml-xl-n1,
  .mx-xl-n1 {
    margin-left: -0.25rem !important;
  }
  .m-xl-n2 {
    margin: -0.5rem !important;
  }
  .mt-xl-n2,
  .my-xl-n2 {
    margin-top: -0.5rem !important;
  }
  .mr-xl-n2,
  .mx-xl-n2 {
    margin-right: -0.5rem !important;
  }
  .mb-xl-n2,
  .my-xl-n2 {
    margin-bottom: -0.5rem !important;
  }
  .ml-xl-n2,
  .mx-xl-n2 {
    margin-left: -0.5rem !important;
  }
  .m-xl-n3 {
    margin: -1rem !important;
  }
  .mt-xl-n3,
  .my-xl-n3 {
    margin-top: -1rem !important;
  }
  .mr-xl-n3,
  .mx-xl-n3 {
    margin-right: -1rem !important;
  }
  .mb-xl-n3,
  .my-xl-n3 {
    margin-bottom: -1rem !important;
  }
  .ml-xl-n3,
  .mx-xl-n3 {
    margin-left: -1rem !important;
  }
  .m-xl-n4 {
    margin: -1.5rem !important;
  }
  .mt-xl-n4,
  .my-xl-n4 {
    margin-top: -1.5rem !important;
  }
  .mr-xl-n4,
  .mx-xl-n4 {
    margin-right: -1.5rem !important;
  }
  .mb-xl-n4,
  .my-xl-n4 {
    margin-bottom: -1.5rem !important;
  }
  .ml-xl-n4,
  .mx-xl-n4 {
    margin-left: -1.5rem !important;
  }
  .m-xl-n5 {
    margin: -3rem !important;
  }
  .mt-xl-n5,
  .my-xl-n5 {
    margin-top: -3rem !important;
  }
  .mr-xl-n5,
  .mx-xl-n5 {
    margin-right: -3rem !important;
  }
  .mb-xl-n5,
  .my-xl-n5 {
    margin-bottom: -3rem !important;
  }
  .ml-xl-n5,
  .mx-xl-n5 {
    margin-left: -3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mt-xl-auto,
  .my-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-auto,
  .mx-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-auto,
  .my-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-auto,
  .mx-xl-auto {
    margin-left: auto !important;
  }
}

:root {
  --primary: #3d1101;
  --secondary: rgb(255, 94, 69);
  --accent: rgb(0, 204, 153);
  --link: rgb(255, 94, 69);
  --link-hover: rgba(255, 94, 69, 0.8);
  --bg-primary: rgb(239, 233, 231);
  --bg-secondary: rgb(61, 17, 1);
  --bg-transparent: rgba(0, 0, 0, 0.75);
}

body.hexRestaurant {
  --primary: #3d1101;
  --secondary: rgb(255, 94, 69);
  --accent: rgb(0, 204, 153);
  --link: rgb(255, 94, 69);
  --link-hover: rgba(255, 94, 69, 0.8);
  --bg-primary: rgb(239, 233, 231);
  --bg-secondary: rgb(61, 17, 1);
  --bg-transparent: rgba(0, 0, 0, 0.75);
}

body.lightMode {
  --primary: blAack;
  --secondary: black;
  --light: black;
  --dark: black;
  --link: rgba(250, 179, 97, 1);
  --link-hover: rgba(250, 179, 97, 0.8);
  --bg-primary: rgb(255, 255, 255);
  --bg-secondary: rgb(255, 255, 255);
  --transparent: rgb(255, 255, 255);
}

body.darkMode {
  --primary: rgb(255, 255, 255);
  --secondary: rgb(255, 255, 255);
  --light: rgb(255, 255, 255);
  --dark: rgb(165, 165, 165);
  --link: rgb(97, 202, 250);
  --link-hover: rgb(97, 202, 250);
  --bg-primary: black;
  --bg-secondary: black;
  --transparent: rgba(0, 0, 0, 0.5);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Noto Sans TC", "微軟正黑體", "Microsoft JhengHei", sans-serif;
  height: 100%;
  background-color: var(--bg-primary);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--primary);
}
body h1,
body h2,
body h3,
body h4,
body h5,
body h6 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
body a {
  color: var(--link);
  font-size: 1rem;
  text-decoration: none;
}
body a:hover {
  color: var(--link-hover);
}
body span {
  font-size: 0.875rem;
}
body img {
  width: 100%;
  max-width: 100%;
}

header {
  background: var(--bg-transparent);
  box-shadow: 2px 2px 2px 1px rgba(83, 83, 83, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}
header.active {
  background: #000;
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header nav .logo {
  padding: 16px 0;
}
header nav ul {
  position: absolute;
  left: 0;
  top: 61px;
  width: 100%;
  z-index: 1;
  opacity: 0;
  display: none;
  transition: all ease 1s;
}
header nav ul.active {
  display: block;
  opacity: 100%;
}
header nav ul li {
  text-align: center;
  background: var(--bg-transparent);
  width: 100%;
}
header nav ul li.active a {
  color: var(--secondary);
}
header nav ul li a {
  display: block;
  color: #fff;
  font-size: 1rem;
  padding: 1.25rem 0;
}
@media all and (min-width: 768px) {
  header nav ul {
    display: flex;
    position: relative;
    left: auto;
    top: auto;
    width: auto;
    opacity: 100%;
  }
  header nav ul li {
    text-wrap: nowrap;
    background: none;
  }
  header nav ul li a {
    padding: 0 1.25rem;
  }
}
header nav button {
  display: block;
  color: #fff;
  background: transparent;
  font-size: 1.5rem;
  border: 0;
  cursor: pointer;
}
header nav button:hover {
  transform: scale(0.9);
}
@media all and (min-width: 768px) {
  header nav button {
    display: none;
  }
}

.banner {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 15rem;
  min-height: 420px;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #100100;
}
.banner .container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100%;
}
@media all and (min-width: 768px) {
  .banner {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 15rem;
    background-size: cover;
    background-position: 50% 65%;
  }
  .banner .container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: 100%;
  }
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner .content {
  display: inline-block;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  width: 100%;
  margin: 0.75rem;
  text-align: center;
  padding: 20px 42px;
}
.banner .content h2 {
  font-size: 2.25rem;
  text-wrap: nowrap;
}
@media all and (min-width: 768px) {
  .banner .content {
    width: auto;
    margin: 0rem;
  }
  .banner .content h2 br {
    display: none;
  }
}

.topOffset {
  margin-top: 420px;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}
footer .about,
footer .contact {
  margin-bottom: 30px;
}
@media all and (min-width: 992px) {
  footer .about,
  footer .contact {
    margin-bottom: 0px;
  }
}

footer .contact ul {
  list-style-position: inside;
  list-style-type: disc;
}
footer .contact ul li a {
  color: var(--primary);
}

footer .share {
  display: flex;
  flex-direction: column;
  align-items: end;
}
footer .share .socialIcons {
  display: flex;
  justify-content: end;
}
footer .share .socialIcons a {
  display: block;
  font-size: 2rem;
  margin-right: 12px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: baseline;
}
form label {
  font-size: 0.875rem;
  display: inline-block;
  line-height: 1.5;
}
form input[type=text],
form input[type=tel],
form input[type=email],
form input[type=number],
form input[type=password] {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #cccccc;
  font-size: 0.9375rem;
  margin-bottom: 1rem;
}
form input[type=radio]:hover {
  cursor: pointer;
}

.btn {
  font-size: 0.9375rem;
  cursor: pointer;
  background-color: transparent;
  outline: 0;
  padding: 6px 20px;
  border-radius: 3px;
}
.btn:hover {
  opacity: 0.7;
}
.btn:active {
  transform: scale(0.9);
}

.btn-secondary {
  border: 0;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
}

.btn-primary {
  border: 0;
  background: var(--secondary);
  color: #fff;
}

section.feature {
  padding: 3.125rem 0;
  text-align: center;
}
section.feature h3 {
  margin-bottom: 1.875rem;
  line-height: 1.75;
  position: relative;
}
@media all and (min-width: 768px) {
  section.feature h3::before, section.feature h3::after {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    background-color: var(--primary);
    top: 50%;
    transform: translateY(-50%);
  }
  section.feature h3::before {
    width: 9rem;
    left: 8%;
  }
  section.feature h3::after {
    width: 9rem;
    right: 8%;
  }
}
@media all and (min-width: 992px) {
  section.feature h3::before {
    left: 23%;
  }
  section.feature h3::after {
    right: 23%;
  }
}
section.feature div {
  max-width: 100%;
  margin: 20px auto;
}
@media all and (min-width: 992px) {
  section.feature div {
    margin: 15px auto;
  }
}
section.feature div img {
  width: 200px;
  object-fit: cover;
}
section.feature div h5 {
  font-size: 1.125 rem;
  margin: 10px 0;
}
section.feature div p {
  display: block;
  text-align: left;
  margin: 0 auto;
}

section.chef {
  background-color: var(--bg-secondary);
  color: #fff;
}
section.chef * {
  padding: 0;
}
section.chef .container {
  min-height: 100%;
  margin: 0 auto;
  min-width: 100%;
}
section.chef .container .imgWrapper {
  padding: 0;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat;
  background-size: cover;
  height: 460px;
}
section.chef .container .content {
  padding: 3.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
section.chef .container .content h5 {
  line-height: 0.5;
}
@media all and (min-width: 768px) {
  section.chef {
    height: 460px;
  }
  section.chef .container {
    display: flex;
    justify-content: center;
    min-width: auto;
  }
  section.chef .container .content {
    padding: 1.5rem;
  }
}

section.recommand {
  padding: 3.125rem 0;
}
section.recommand h3 {
  margin-bottom: 1.875rem;
  line-height: 1.75;
  text-align: center;
}
section.recommand ul {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
section.recommand ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  align-items: start;
}
section.recommand .msg h6 {
  font-size: 1.2rem;
}
section.recommand .msg p {
  margin-bottom: 1rem;
}
section.recommand .msg p:last-child {
  text-align: right;
  opacity: 0.75;
}
section.recommand img {
  max-width: 67px;
  object-fit: cover;
}

section.map {
  padding: 3.125rem 0;
  background: rgba(250, 250, 250, 0.7);
}
section.map .row {
  margin: 0 auto;
  padding: 0;
}
section.map h3 {
  text-align: center;
  margin-bottom: 1.875rem;
}
section.map .container img {
  width: 100%;
  height: 100%;
}
section.map .container form input[type=radio] {
  margin-top: 0.5rem;
}
section.map .container form .radioGroup label {
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
section.map .container form .col-12 {
  padding: 0;
}
section.map .container form .col-12:last-child {
  display: flex;
  justify-content: end;
}
section.map .container form .col-12:last-child input[type=submit] {
  margin-left: 0.75rem;
}

main.menu {
  padding: 0.25rem 0;
}
main.menu .topOffset {
  margin: 2rem 0 0 0;
}
@media all and (min-width: 768px) {
  main.menu {
    padding: 1rem 0;
  }
}

main.menu h5 {
  font-size: 1.2rem;
}
main.menu h5 i {
  margin-right: 0.5rem;
  font-size: 2rem;
}
main.menu ul.categoryList li {
  text-indent: 0.5rem;
  border-bottom: 1px solid var(--primary);
  padding: 0.5rem 0;
}
main.menu ul.categoryList li a {
  width: 100%;
  display: block;
  color: var(--primary);
}
main.menu ul.categoryList li.active {
  background: var(--primary);
}
main.menu ul.categoryList li.active a {
  color: #fff;
}
main.menu ul.categoryList li:hover {
  background: rgba(61, 17, 1, 0.6);
}
main.menu ul.categoryList li:hover a {
  color: #fff;
}

main.menu .operation {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 0.75rem;
}
@media all and (min-width: 768px) {
  main.menu .operation {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
main.menu .operation .gocart {
  display: inline-flex;
  align-items: center;
  color: var(--primary);
  font-size: 0.875rem;
}
main.menu .operation .gocart:hover i {
  opacity: 0.8;
}
main.menu .operation .gocart:active i {
  transform: scale(0.9);
}
main.menu .operation .gocart p {
  padding-right: 0.5rem;
  border-right: 2px solid var(--primary);
}
main.menu .operation .gocart i {
  font-size: 1.75rem;
  margin-left: 0.5rem;
  position: relative;
}
main.menu .operation .gocart i span {
  font-size: 0.6rem;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  color: #fff;
  background: var(--secondary);
  padding: 0.25rem 0.4rem;
  border-radius: 50%;
}
main.menu .operation .searchbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  margin: 1.5rem 0;
  width: 100%;
}
main.menu .operation .searchbar input {
  width: 100%;
  margin: 0 0.25rem;
  outline: 0;
}
main.menu .operation .searchbar a {
  padding: 0.5rem 0.75rem;
}
main.menu .operation .searchbar a:active {
  transform: scale(0.9);
}
@media all and (min-width: 768px) {
  main.menu .operation .searchbar {
    max-width: 300px;
    margin: 0;
  }
}
@media all and (min-width: 992px) {
  main.menu .operation .searchbar {
    max-width: 460px;
  }
}

.productList li {
  margin-bottom: 20px;
}

.productList .productItem {
  box-shadow: 0px 1px 2px rgba(127, 127, 127, 0.6);
}
.productList .productItem .imgWrapper {
  position: relative;
  background: linear-gradient(135deg, #a8a9ad, #cbcccd, #d7d7d8, #b4b5b8, #c0c0c3, #e3e3e3, #a8a9ad);
  height: 120px;
}
.productList .productItem .imgWrapper img {
  height: 100%;
  object-fit: cover;
}
.productList .productItem .imgWrapper button {
  position: absolute;
  top: 0;
  left: 0;
  background: none;
  border: 0;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}
.productList .productItem .imgWrapper button:active {
  transform: scale(0.9);
}
.productList .productItem .contentWrapper {
  padding: 0.6rem;
  text-align: center;
}
.productList .productItem .contentWrapper h6 {
  margin-bottom: 0;
  font-size: 1.3rem;
}
.productList .productItem .contentWrapper p {
  font-size: 0.9375rem;
  line-height: 1;
  padding-bottom: 0.75rem;
  position: relative;
  display: block;
}
.productList .productItem .contentWrapper p::after {
  content: "";
  position: absolute;
  width: 80px;
  height: 1.5px;
  background: var(--primary);
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}
.productList .productItem .contentWrapper span {
  font-size: 1rem;
  padding: 0;
  display: inline-block;
  margin: 1rem 0 0.5rem 0;
}
.productList .productItem .contentWrapper button {
  display: block;
  border: 1px solid var(--secondary);
  border-radius: 3px;
  padding: 0.5rem 0;
  width: 100%;
  color: var(--secondary);
  background: none;
  cursor: pointer;
}
.productList .productItem .contentWrapper button:hover {
  background: var(--secondary);
}
.productList .productItem .contentWrapper button:hover i {
  color: #fff;
}
.productList .productItem .contentWrapper button:active {
  background: var(--secondary);
}
.productList .productItem .contentWrapper button:active i {
  transform: scale(0.85);
  color: #fff;
}

.productList .productItem.trend .ribbonposition {
  opacity: 100%;
}
.productList .productItem .ribbonposition {
  position: absolute;
  z-index: 5;
  right: 4px;
  top: -8px;
  opacity: 0;
}
.productList .productItem .ribbonposition .ribbonbox {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
}
.productList .productItem .ribbonposition .ribbonbox::after, .productList .productItem .ribbonposition .ribbonbox::before {
  content: "";
  position: absolute;
  display: block;
  border: #078f6d solid 5px;
  z-index: 2;
}
.productList .productItem .ribbonposition .ribbonbox::after {
  top: 34%;
  left: 95%;
  transform: translateY(-50%);
}
.productList .productItem .ribbonposition .ribbonbox::before {
  top: 0%;
  left: 65%;
  transform: translateX(-50%);
}
.productList .productItem .ribbonposition .ribbon {
  width: 100px;
  padding: 2px 0;
  font-size: 0.9375rem;
  background-color: #00cc99;
  text-align: center;
  color: #fff;
  transform: rotate(45deg);
  position: absolute;
  right: -20px;
  top: 15px;
  z-index: 3;
}

.slogan {
  margin-bottom: 35px;
}
.slogan.topOffset {
  padding-top: 50px;
}
.slogan img {
  width: 240px;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5rem;
}
.slogan p {
  text-align: center;
  font-size: 1.2rem;
}

form .wrap {
  margin: 0 auto;
  border-top: 3px solid var(--secondary);
  padding: 15px;
  box-shadow: 0px 1px 2px rgba(127, 127, 127, 0.6);
  margin-bottom: 50px;
}
form .wrap h3 {
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}

form.login {
  height: 0;
  opacity: 0;
}
form.login .btns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding: 0 15px;
  margin-top: 1.875rem;
}
form.login .btns .btn {
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 1;
}
form.login.active {
  height: auto;
  opacity: 100%;
}

form.signup {
  height: 0;
  opacity: 0;
  margin-bottom: 1.875rem;
}
form.signup .terms h6 {
  font-size: 1.5rem;
}
form.signup a {
  display: block;
}
form.signup button {
  width: 40%;
  display: block;
  margin: 20px auto;
}
@media all and (min-width: 992px) {
  form.signup button {
    float: right;
  }
}
form.signup.active {
  height: auto;
  opacity: 100%;
}

.input-icon-box {
  position: relative;
}
.input-icon-box i {
  position: absolute;
  top: 50%;
  translate: 50% -100%;
  opacity: 0.75;
}
.input-icon-box input {
  text-indent: 1rem;
}

.notFound {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3.125rem;
  border: 2px solid #cccccc;
  margin-bottom: 3.125rem;
}
.notFound h2 {
  font-size: 2.25rem;
  color: #dc3545;
}
.notFound p {
  font-size: 1.5rem;
  letter-spacing: 0.25rem;
  font-weight: bold;
}
.notFound.topOffset {
  margin-top: 100px;
}`, "",{"version":3,"sources":["webpack://./src/stylesheet/all.scss","webpack://./src/stylesheet/_reset.scss","webpack://./src/stylesheet/_bootstrap-grid-custom.min.scss","webpack://./src/stylesheet/_theme.scss","webpack://./src/stylesheet/_base.scss","webpack://./src/stylesheet/_variables.scss","webpack://./src/stylesheet/module/_navbar.scss","webpack://./src/stylesheet/_mixin.scss","webpack://./src/stylesheet/module/_banner.scss","webpack://./src/stylesheet/module/_footer.scss","webpack://./src/stylesheet/module/_form.scss","webpack://./src/stylesheet/module/_button.scss","webpack://./src/stylesheet/page/_home.scss","webpack://./src/stylesheet/page/_menu.scss","webpack://./src/stylesheet/page/_auth.scss","webpack://./src/stylesheet/page/_notFound.scss"],"names":[],"mappings":"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AA;AFiKF;;AE/JA;;EAEE,+BAAA;AFkKF;;AEhKA;EACE,yBAAA;AFmKF;;AEjKA;;EAEE,6BAAA;AFoKF;;AElKA;;EAEE,+BAAA;AFqKF;;AEnKA;;EAEE,gCAAA;AFsKF;;AEpKA;;EAEE,8BAAA;AFuKF;;AErKA;EACE,uBAAA;AFwKF;;AEtKA;;EAEE,2BAAA;AFyKF;;AEvKA;;EAEE,6BAAA;AF0KF;;AExKA;;EAEE,8BAAA;AF2KF;;AEzKA;;EAEE,4BAAA;AF4KF;;AE1KA;EACE,yBAAA;AF6KF;;AE3KA;;EAEE,6BAAA;AF8KF;;AE5KA;;EAEE,+BAAA;AF+KF;;AE7KA;;EAEE,gCAAA;AFgLF;;AE9KA;;EAEE,8BAAA;AFiLF;;AE/KA;EACE,uBAAA;AFkLF;;AEhLA;;EAEE,2BAAA;AFmLF;;AEjLA;;EAEE,6BAAA;AFoLF;;AElLA;;EAEE,8BAAA;AFqLF;;AEnLA;;EAEE,4BAAA;AFsLF;;AEpLA;EACE,qBAAA;AFuLF;;AErLA;;EAEE,yBAAA;AFwLF;;AEtLA;;EAEE,2BAAA;AFyLF;;AEvLA;;EAEE,4BAAA;AF0LF;;AExLA;;EAEE,0BAAA;AF2LF;;AEzLA;EACE,2BAAA;AF4LF;;AE1LA;;EAEE,+BAAA;AF6LF;;AE3LA;;EAEE,iCAAA;AF8LF;;AE5LA;;EAEE,kCAAA;AF+LF;;AE7LA;;EAEE,gCAAA;AFgMF;;AE9LA;EACE,0BAAA;AFiMF;;AE/LA;;EAEE,8BAAA;AFkMF;;AEhMA;;EAEE,gCAAA;AFmMF;;AEjMA;;EAEE,iCAAA;AFoMF;;AElMA;;EAEE,+BAAA;AFqMF;;AEnMA;EACE,wBAAA;AFsMF;;AEpMA;;EAEE,4BAAA;AFuMF;;AErMA;;EAEE,8BAAA;AFwMF;;AEtMA;;EAEE,+BAAA;AFyMF;;AEvMA;;EAEE,6BAAA;AF0MF;;AExMA;EACE,0BAAA;AF2MF;;AEzMA;;EAEE,8BAAA;AF4MF;;AE1MA;;EAEE,gCAAA;AF6MF;;AE3MA;;EAEE,iCAAA;AF8MF;;AE5MA;;EAEE,+BAAA;AF+MF;;AE7MA;EACE,wBAAA;AFgNF;;AE9MA;;EAEE,4BAAA;AFiNF;;AE/MA;;EAEE,8BAAA;AFkNF;;AEhNA;;EAEE,+BAAA;AFmNF;;AEjNA;;EAEE,6BAAA;AFoNF;;AElNA;EACE,2BAAA;AFqNF;;AEnNA;;EAEE,+BAAA;AFsNF;;AEpNA;;EAEE,iCAAA;AFuNF;;AErNA;;EAEE,kCAAA;AFwNF;;AEtNA;;EAEE,gCAAA;AFyNF;;AEvNA;EACE,0BAAA;AF0NF;;AExNA;;EAEE,8BAAA;AF2NF;;AEzNA;;EAEE,gCAAA;AF4NF;;AE1NA;;EAEE,iCAAA;AF6NF;;AE3NA;;EAEE,+BAAA;AF8NF;;AE5NA;EACE,wBAAA;AF+NF;;AE7NA;;EAEE,4BAAA;AFgOF;;AE9NA;;EAEE,8BAAA;AFiOF;;AE/NA;;EAEE,+BAAA;AFkOF;;AEhOA;;EAEE,6BAAA;AFmOF;;AEjOA;EACE,0BAAA;AFoOF;;AElOA;;EAEE,8BAAA;AFqOF;;AEnOA;;EAEE,gCAAA;AFsOF;;AEpOA;;EAEE,iCAAA;AFuOF;;AErOA;;EAEE,+BAAA;AFwOF;;AEtOA;EACE,wBAAA;AFyOF;;AEvOA;;EAEE,4BAAA;AF0OF;;AExOA;;EAEE,8BAAA;AF2OF;;AEzOA;;EAEE,+BAAA;AF4OF;;AE1OA;;EAEE,6BAAA;AF6OF;;AE3OA;EACE,uBAAA;AF8OF;;AE5OA;;EAEE,2BAAA;AF+OF;;AE7OA;;EAEE,6BAAA;AFgPF;;AE9OA;;EAEE,8BAAA;AFiPF;;AE/OA;;EAEE,4BAAA;AFkPF;;AEhPA;EACE;IACE,oBAAA;EFmPF;EEjPA;;IAEE,wBAAA;EFmPF;EEjPA;;IAEE,0BAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,yBAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,yBAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;IACE,uBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;IACE,yBAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;IACE,uBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;IACE,qBAAA;EFmPF;EEjPA;;IAEE,yBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,0BAAA;EFmPF;EEjPA;IACE,2BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,kCAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,2BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,kCAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,uBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;AACF;AEjPA;EACE;IACE,oBAAA;EFmPF;EEjPA;;IAEE,wBAAA;EFmPF;EEjPA;;IAEE,0BAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,yBAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,yBAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;IACE,uBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;IACE,yBAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;IACE,uBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;IACE,qBAAA;EFmPF;EEjPA;;IAEE,yBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,0BAAA;EFmPF;EEjPA;IACE,2BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,kCAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,2BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,kCAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,uBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;AACF;AEjPA;EACE;IACE,oBAAA;EFmPF;EEjPA;;IAEE,wBAAA;EFmPF;EEjPA;;IAEE,0BAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,yBAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,yBAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;IACE,uBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;IACE,yBAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;IACE,uBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;IACE,qBAAA;EFmPF;EEjPA;;IAEE,yBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,0BAAA;EFmPF;EEjPA;IACE,2BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,kCAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,2BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,kCAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,0BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,gCAAA;EFmPF;EEjPA;;IAEE,iCAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;IACE,wBAAA;EFmPF;EEjPA;;IAEE,4BAAA;EFmPF;EEjPA;;IAEE,8BAAA;EFmPF;EEjPA;;IAEE,+BAAA;EFmPF;EEjPA;;IAEE,6BAAA;EFmPF;EEjPA;IACE,uBAAA;EFmPF;EEjPA;;IAEE,2BAAA;EFmPF;EE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","sourcesContent":["@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n@import url(\"https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap\");\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*!\n * Bootstrap Grid v4.5.2 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\nhtml {\n  box-sizing: border-box;\n  -ms-overflow-style: scrollbar;\n}\n\n*,\n::after,\n::before {\n  box-sizing: inherit;\n}\n\n.container,\n.container-fluid,\n.container-lg,\n.container-md,\n.container-sm,\n.container-xl {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container,\n  .container-sm {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container,\n  .container-md,\n  .container-sm {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container,\n  .container-lg,\n  .container-md,\n  .container-sm {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container,\n  .container-lg,\n  .container-md,\n  .container-sm,\n  .container-xl {\n    max-width: 1140px;\n  }\n}\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col,\n.col-1,\n.col-10,\n.col-11,\n.col-12,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-auto,\n.col-lg,\n.col-lg-1,\n.col-lg-10,\n.col-lg-11,\n.col-lg-12,\n.col-lg-2,\n.col-lg-3,\n.col-lg-4,\n.col-lg-5,\n.col-lg-6,\n.col-lg-7,\n.col-lg-8,\n.col-lg-9,\n.col-lg-auto,\n.col-md,\n.col-md-1,\n.col-md-10,\n.col-md-11,\n.col-md-12,\n.col-md-2,\n.col-md-3,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-md-auto,\n.col-sm,\n.col-sm-1,\n.col-sm-10,\n.col-sm-11,\n.col-sm-12,\n.col-sm-2,\n.col-sm-3,\n.col-sm-4,\n.col-sm-5,\n.col-sm-6,\n.col-sm-7,\n.col-sm-8,\n.col-sm-9,\n.col-sm-auto,\n.col-xl,\n.col-xl-1,\n.col-xl-10,\n.col-xl-11,\n.col-xl-12,\n.col-xl-2,\n.col-xl-3,\n.col-xl-4,\n.col-xl-5,\n.col-xl-6,\n.col-xl-7,\n.col-xl-8,\n.col-xl-9,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.row-cols-1 > * {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.row-cols-2 > * {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.row-cols-3 > * {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.row-cols-4 > * {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.row-cols-5 > * {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.row-cols-6 > * {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-auto {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n\n.col-1 {\n  -ms-flex: 0 0 8.333333%;\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  -ms-flex: 0 0 41.666667%;\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  -ms-flex: 0 0 58.333333%;\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  -ms-flex: 0 0 66.666667%;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  -ms-flex: 0 0 83.333333%;\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  -ms-flex: 0 0 91.666667%;\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.order-last {\n  -ms-flex-order: 13;\n  order: 13;\n}\n\n.order-0 {\n  -ms-flex-order: 0;\n  order: 0;\n}\n\n.order-1 {\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n.order-2 {\n  -ms-flex-order: 2;\n  order: 2;\n}\n\n.order-3 {\n  -ms-flex-order: 3;\n  order: 3;\n}\n\n.order-4 {\n  -ms-flex-order: 4;\n  order: 4;\n}\n\n.order-5 {\n  -ms-flex-order: 5;\n  order: 5;\n}\n\n.order-6 {\n  -ms-flex-order: 6;\n  order: 6;\n}\n\n.order-7 {\n  -ms-flex-order: 7;\n  order: 7;\n}\n\n.order-8 {\n  -ms-flex-order: 8;\n  order: 8;\n}\n\n.order-9 {\n  -ms-flex-order: 9;\n  order: 9;\n}\n\n.order-10 {\n  -ms-flex-order: 10;\n  order: 10;\n}\n\n.order-11 {\n  -ms-flex-order: 11;\n  order: 11;\n}\n\n.order-12 {\n  -ms-flex-order: 12;\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.333333%;\n}\n\n.offset-2 {\n  margin-left: 16.666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.333333%;\n}\n\n.offset-5 {\n  margin-left: 41.666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.333333%;\n}\n\n.offset-8 {\n  margin-left: 66.666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.333333%;\n}\n\n.offset-11 {\n  margin-left: 91.666667%;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-sm-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-sm-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-sm-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-sm-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-sm-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-sm-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-sm-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-sm-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-sm-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-sm-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-sm-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-sm-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-sm-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-sm-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-sm-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-sm-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-sm-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-sm-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-sm-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-sm-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-sm-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-md-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-md-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-md-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-md-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-md-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-md-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-md-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-md-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-md-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-md-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-md-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-md-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-md-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-md-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-md-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-md-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-md-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-md-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-md-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-md-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-md-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-lg-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-lg-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-lg-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-lg-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-lg-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-lg-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-lg-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-lg-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-lg-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-lg-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-lg-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-lg-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-lg-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-lg-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-lg-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-lg-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-lg-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-lg-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-lg-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-lg-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-lg-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-xl-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-xl-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-xl-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-xl-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-xl-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-xl-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-xl-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xl-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xl-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xl-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xl-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xl-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xl-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xl-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-xl-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-xl-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-xl-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-xl-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-xl-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-xl-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-xl-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-xl-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-xl-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-xl-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-xl-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-xl-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-xl-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-xl-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.666667%;\n  }\n}\n.d-none {\n  display: none !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n.flex-row {\n  -ms-flex-direction: row !important;\n  flex-direction: row !important;\n}\n\n.flex-column {\n  -ms-flex-direction: column !important;\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  -ms-flex-direction: row-reverse !important;\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  -ms-flex-direction: column-reverse !important;\n  flex-direction: column-reverse !important;\n}\n\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n  flex-wrap: wrap-reverse !important;\n}\n\n.flex-fill {\n  -ms-flex: 1 1 auto !important;\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0 {\n  -ms-flex-positive: 0 !important;\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  -ms-flex-positive: 1 !important;\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  -ms-flex-negative: 0 !important;\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  -ms-flex-negative: 1 !important;\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start {\n  -ms-flex-pack: start !important;\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  -ms-flex-pack: end !important;\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  -ms-flex-pack: justify !important;\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n  justify-content: space-around !important;\n}\n\n.align-items-start {\n  -ms-flex-align: start !important;\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  -ms-flex-align: end !important;\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  -ms-flex-align: center !important;\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  -ms-flex-align: baseline !important;\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  -ms-flex-align: stretch !important;\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n  align-content: center !important;\n}\n\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n  align-self: auto !important;\n}\n\n.align-self-start {\n  -ms-flex-item-align: start !important;\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  -ms-flex-item-align: end !important;\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  -ms-flex-item-align: center !important;\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n  align-self: stretch !important;\n}\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-sm-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-sm-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-sm-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 768px) {\n  .flex-md-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-md-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-md-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-md-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-md-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-lg-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-lg-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-lg-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-xl-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-xl-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-xl-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n.m-n1 {\n  margin: -0.25rem !important;\n}\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n\n.m-n2 {\n  margin: -0.5rem !important;\n}\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n\n.m-n3 {\n  margin: -1rem !important;\n}\n\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n\n.m-n4 {\n  margin: -1.5rem !important;\n}\n\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n\n.m-n5 {\n  margin: -3rem !important;\n}\n\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .m-sm-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-sm-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-sm-n3 {\n    margin: -1rem !important;\n  }\n  .mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-sm-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-sm-n5 {\n    margin: -3rem !important;\n  }\n  .mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n  }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n  }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n  }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n  }\n  .m-md-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-md-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-md-n3 {\n    margin: -1rem !important;\n  }\n  .mt-md-n3,\n  .my-md-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-md-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-md-n4,\n  .my-md-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-md-n5 {\n    margin: -3rem !important;\n  }\n  .mt-md-n5,\n  .my-md-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n  }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n  }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .m-lg-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-lg-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-lg-n3 {\n    margin: -1rem !important;\n  }\n  .mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-lg-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-lg-n5 {\n    margin: -3rem !important;\n  }\n  .mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n  }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n  }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .m-xl-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-xl-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-xl-n3 {\n    margin: -1rem !important;\n  }\n  .mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-xl-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-xl-n5 {\n    margin: -3rem !important;\n  }\n  .mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n  }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n\n:root {\n  --primary: #3d1101;\n  --secondary: rgb(255, 94, 69);\n  --accent: rgb(0, 204, 153);\n  --link: rgb(255, 94, 69);\n  --link-hover: rgba(255, 94, 69, 0.8);\n  --bg-primary: rgb(239, 233, 231);\n  --bg-secondary: rgb(61, 17, 1);\n  --bg-transparent: rgba(0, 0, 0, 0.75);\n}\n\nbody.hexRestaurant {\n  --primary: #3d1101;\n  --secondary: rgb(255, 94, 69);\n  --accent: rgb(0, 204, 153);\n  --link: rgb(255, 94, 69);\n  --link-hover: rgba(255, 94, 69, 0.8);\n  --bg-primary: rgb(239, 233, 231);\n  --bg-secondary: rgb(61, 17, 1);\n  --bg-transparent: rgba(0, 0, 0, 0.75);\n}\n\nbody.lightMode {\n  --primary: blAack;\n  --secondary: black;\n  --light: black;\n  --dark: black;\n  --link: rgba(250, 179, 97, 1);\n  --link-hover: rgba(250, 179, 97, 0.8);\n  --bg-primary: rgb(255, 255, 255);\n  --bg-secondary: rgb(255, 255, 255);\n  --transparent: rgb(255, 255, 255);\n}\n\nbody.darkMode {\n  --primary: rgb(255, 255, 255);\n  --secondary: rgb(255, 255, 255);\n  --light: rgb(255, 255, 255);\n  --dark: rgb(165, 165, 165);\n  --link: rgb(97, 202, 250);\n  --link-hover: rgb(97, 202, 250);\n  --bg-primary: black;\n  --bg-secondary: black;\n  --transparent: rgba(0, 0, 0, 0.5);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: \"Noto Sans TC\", \"微軟正黑體\", \"Microsoft JhengHei\", sans-serif;\n  height: 100%;\n  background-color: var(--bg-primary);\n  font-size: 1rem;\n  line-height: 1.5;\n  color: var(--primary);\n}\nbody h1,\nbody h2,\nbody h3,\nbody h4,\nbody h5,\nbody h6 {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\nbody a {\n  color: var(--link);\n  font-size: 1rem;\n  text-decoration: none;\n}\nbody a:hover {\n  color: var(--link-hover);\n}\nbody span {\n  font-size: 0.875rem;\n}\nbody img {\n  width: 100%;\n  max-width: 100%;\n}\n\nheader {\n  background: var(--bg-transparent);\n  box-shadow: 2px 2px 2px 1px rgba(83, 83, 83, 0.1);\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 99;\n}\nheader.active {\n  background: #000;\n}\n\nheader nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader nav .logo {\n  padding: 16px 0;\n}\nheader nav ul {\n  position: absolute;\n  left: 0;\n  top: 61px;\n  width: 100%;\n  z-index: 1;\n  opacity: 0;\n  display: none;\n  transition: all ease 1s;\n}\nheader nav ul.active {\n  display: block;\n  opacity: 100%;\n}\nheader nav ul li {\n  text-align: center;\n  background: var(--bg-transparent);\n  width: 100%;\n}\nheader nav ul li.active a {\n  color: var(--secondary);\n}\nheader nav ul li a {\n  display: block;\n  color: #fff;\n  font-size: 1rem;\n  padding: 1.25rem 0;\n}\n@media all and (min-width: 768px) {\n  header nav ul {\n    display: flex;\n    position: relative;\n    left: auto;\n    top: auto;\n    width: auto;\n    opacity: 100%;\n  }\n  header nav ul li {\n    text-wrap: nowrap;\n    background: none;\n  }\n  header nav ul li a {\n    padding: 0 1.25rem;\n  }\n}\nheader nav button {\n  display: block;\n  color: #fff;\n  background: transparent;\n  font-size: 1.5rem;\n  border: 0;\n  cursor: pointer;\n}\nheader nav button:hover {\n  transform: scale(0.9);\n}\n@media all and (min-width: 768px) {\n  header nav button {\n    display: none;\n  }\n}\n\n.banner {\n  background-image: url(\"../assets/images/header_mobile.png\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 15rem;\n  min-height: 420px;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: #100100;\n}\n.banner .container {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  height: 100%;\n}\n@media all and (min-width: 768px) {\n  .banner {\n    background-image: url(\"../assets/images/header_desktop.png\");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 15rem;\n    background-size: cover;\n    background-position: 50% 65%;\n  }\n  .banner .container {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    height: 100%;\n  }\n}\n\n.banner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.banner .content {\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  width: 100%;\n  margin: 0.75rem;\n  text-align: center;\n  padding: 20px 42px;\n}\n.banner .content h2 {\n  font-size: 2.25rem;\n  text-wrap: nowrap;\n}\n@media all and (min-width: 768px) {\n  .banner .content {\n    width: auto;\n    margin: 0rem;\n  }\n  .banner .content h2 br {\n    display: none;\n  }\n}\n\n.topOffset {\n  margin-top: 420px;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nfooter .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 0;\n}\nfooter .about,\nfooter .contact {\n  margin-bottom: 30px;\n}\n@media all and (min-width: 992px) {\n  footer .about,\n  footer .contact {\n    margin-bottom: 0px;\n  }\n}\n\nfooter .contact ul {\n  list-style-position: inside;\n  list-style-type: disc;\n}\nfooter .contact ul li a {\n  color: var(--primary);\n}\n\nfooter .share {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n}\nfooter .share .socialIcons {\n  display: flex;\n  justify-content: end;\n}\nfooter .share .socialIcons a {\n  display: block;\n  font-size: 2rem;\n  margin-right: 12px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: baseline;\n}\nform label {\n  font-size: 0.875rem;\n  display: inline-block;\n  line-height: 1.5;\n}\nform input[type=text],\nform input[type=tel],\nform input[type=email],\nform input[type=number],\nform input[type=password] {\n  width: 100%;\n  padding: 0.5rem 1rem;\n  border: 1px solid #cccccc;\n  font-size: 0.9375rem;\n  margin-bottom: 1rem;\n}\nform input[type=radio]:hover {\n  cursor: pointer;\n}\n\n.btn {\n  font-size: 0.9375rem;\n  cursor: pointer;\n  background-color: transparent;\n  outline: 0;\n  padding: 6px 20px;\n  border-radius: 3px;\n}\n.btn:hover {\n  opacity: 0.7;\n}\n.btn:active {\n  transform: scale(0.9);\n}\n\n.btn-secondary {\n  border: 0;\n  background: rgba(0, 0, 0, 0.3);\n  color: #fff;\n}\n\n.btn-primary {\n  border: 0;\n  background: var(--secondary);\n  color: #fff;\n}\n\nsection.feature {\n  padding: 3.125rem 0;\n  text-align: center;\n}\nsection.feature h3 {\n  margin-bottom: 1.875rem;\n  line-height: 1.75;\n  position: relative;\n}\n@media all and (min-width: 768px) {\n  section.feature h3::before, section.feature h3::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    height: 1px;\n    background-color: var(--primary);\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  section.feature h3::before {\n    width: 9rem;\n    left: 8%;\n  }\n  section.feature h3::after {\n    width: 9rem;\n    right: 8%;\n  }\n}\n@media all and (min-width: 992px) {\n  section.feature h3::before {\n    left: 23%;\n  }\n  section.feature h3::after {\n    right: 23%;\n  }\n}\nsection.feature div {\n  max-width: 100%;\n  margin: 20px auto;\n}\n@media all and (min-width: 992px) {\n  section.feature div {\n    margin: 15px auto;\n  }\n}\nsection.feature div img {\n  width: 200px;\n  object-fit: cover;\n}\nsection.feature div h5 {\n  font-size: 1.125 rem;\n  margin: 10px 0;\n}\nsection.feature div p {\n  display: block;\n  text-align: left;\n  margin: 0 auto;\n}\n\nsection.chef {\n  background-color: var(--bg-secondary);\n  color: #fff;\n}\nsection.chef * {\n  padding: 0;\n}\nsection.chef .container {\n  min-height: 100%;\n  margin: 0 auto;\n  min-width: 100%;\n}\nsection.chef .container .imgWrapper {\n  padding: 0;\n  background-image: url(\"../assets/images/main_chef_brown.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 460px;\n}\nsection.chef .container .content {\n  padding: 3.125rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nsection.chef .container .content h5 {\n  line-height: 0.5;\n}\n@media all and (min-width: 768px) {\n  section.chef {\n    height: 460px;\n  }\n  section.chef .container {\n    display: flex;\n    justify-content: center;\n    min-width: auto;\n  }\n  section.chef .container .content {\n    padding: 1.5rem;\n  }\n}\n\nsection.recommand {\n  padding: 3.125rem 0;\n}\nsection.recommand h3 {\n  margin-bottom: 1.875rem;\n  line-height: 1.75;\n  text-align: center;\n}\nsection.recommand ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n}\nsection.recommand ul li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n  align-items: start;\n}\nsection.recommand .msg h6 {\n  font-size: 1.2rem;\n}\nsection.recommand .msg p {\n  margin-bottom: 1rem;\n}\nsection.recommand .msg p:last-child {\n  text-align: right;\n  opacity: 0.75;\n}\nsection.recommand img {\n  max-width: 67px;\n  object-fit: cover;\n}\n\nsection.map {\n  padding: 3.125rem 0;\n  background: rgba(250, 250, 250, 0.7);\n}\nsection.map .row {\n  margin: 0 auto;\n  padding: 0;\n}\nsection.map h3 {\n  text-align: center;\n  margin-bottom: 1.875rem;\n}\nsection.map .container img {\n  width: 100%;\n  height: 100%;\n}\nsection.map .container form input[type=radio] {\n  margin-top: 0.5rem;\n}\nsection.map .container form .radioGroup label {\n  margin-right: 1.5rem;\n  margin-bottom: 1rem;\n  cursor: pointer;\n}\nsection.map .container form .col-12 {\n  padding: 0;\n}\nsection.map .container form .col-12:last-child {\n  display: flex;\n  justify-content: end;\n}\nsection.map .container form .col-12:last-child input[type=submit] {\n  margin-left: 0.75rem;\n}\n\nmain.menu {\n  padding: 0.25rem 0;\n}\nmain.menu .topOffset {\n  margin: 2rem 0 0 0;\n}\n@media all and (min-width: 768px) {\n  main.menu {\n    padding: 1rem 0;\n  }\n}\n\nmain.menu h5 {\n  font-size: 1.2rem;\n}\nmain.menu h5 i {\n  margin-right: 0.5rem;\n  font-size: 2rem;\n}\nmain.menu ul.categoryList li {\n  text-indent: 0.5rem;\n  border-bottom: 1px solid var(--primary);\n  padding: 0.5rem 0;\n}\nmain.menu ul.categoryList li a {\n  width: 100%;\n  display: block;\n  color: var(--primary);\n}\nmain.menu ul.categoryList li.active {\n  background: var(--primary);\n}\nmain.menu ul.categoryList li.active a {\n  color: #fff;\n}\nmain.menu ul.categoryList li:hover {\n  background: rgba(61, 17, 1, 0.6);\n}\nmain.menu ul.categoryList li:hover a {\n  color: #fff;\n}\n\nmain.menu .operation {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  margin-bottom: 0.75rem;\n}\n@media all and (min-width: 768px) {\n  main.menu .operation {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\nmain.menu .operation .gocart {\n  display: inline-flex;\n  align-items: center;\n  color: var(--primary);\n  font-size: 0.875rem;\n}\nmain.menu .operation .gocart:hover i {\n  opacity: 0.8;\n}\nmain.menu .operation .gocart:active i {\n  transform: scale(0.9);\n}\nmain.menu .operation .gocart p {\n  padding-right: 0.5rem;\n  border-right: 2px solid var(--primary);\n}\nmain.menu .operation .gocart i {\n  font-size: 1.75rem;\n  margin-left: 0.5rem;\n  position: relative;\n}\nmain.menu .operation .gocart i span {\n  font-size: 0.6rem;\n  position: absolute;\n  top: -0.5rem;\n  right: -0.5rem;\n  color: #fff;\n  background: var(--secondary);\n  padding: 0.25rem 0.4rem;\n  border-radius: 50%;\n}\nmain.menu .operation .searchbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--primary);\n  margin: 1.5rem 0;\n  width: 100%;\n}\nmain.menu .operation .searchbar input {\n  width: 100%;\n  margin: 0 0.25rem;\n  outline: 0;\n}\nmain.menu .operation .searchbar a {\n  padding: 0.5rem 0.75rem;\n}\nmain.menu .operation .searchbar a:active {\n  transform: scale(0.9);\n}\n@media all and (min-width: 768px) {\n  main.menu .operation .searchbar {\n    max-width: 300px;\n    margin: 0;\n  }\n}\n@media all and (min-width: 992px) {\n  main.menu .operation .searchbar {\n    max-width: 460px;\n  }\n}\n\n.productList li {\n  margin-bottom: 20px;\n}\n\n.productList .productItem {\n  box-shadow: 0px 1px 2px rgba(127, 127, 127, 0.6);\n}\n.productList .productItem .imgWrapper {\n  position: relative;\n  background: linear-gradient(135deg, #a8a9ad, #cbcccd, #d7d7d8, #b4b5b8, #c0c0c3, #e3e3e3, #a8a9ad);\n  height: 120px;\n}\n.productList .productItem .imgWrapper img {\n  height: 100%;\n  object-fit: cover;\n}\n.productList .productItem .imgWrapper button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: none;\n  border: 0;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  color: #fff;\n  cursor: pointer;\n}\n.productList .productItem .imgWrapper button:active {\n  transform: scale(0.9);\n}\n.productList .productItem .contentWrapper {\n  padding: 0.6rem;\n  text-align: center;\n}\n.productList .productItem .contentWrapper h6 {\n  margin-bottom: 0;\n  font-size: 1.3rem;\n}\n.productList .productItem .contentWrapper p {\n  font-size: 0.9375rem;\n  line-height: 1;\n  padding-bottom: 0.75rem;\n  position: relative;\n  display: block;\n}\n.productList .productItem .contentWrapper p::after {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  height: 1.5px;\n  background: var(--primary);\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.productList .productItem .contentWrapper span {\n  font-size: 1rem;\n  padding: 0;\n  display: inline-block;\n  margin: 1rem 0 0.5rem 0;\n}\n.productList .productItem .contentWrapper button {\n  display: block;\n  border: 1px solid var(--secondary);\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  width: 100%;\n  color: var(--secondary);\n  background: none;\n  cursor: pointer;\n}\n.productList .productItem .contentWrapper button:hover {\n  background: var(--secondary);\n}\n.productList .productItem .contentWrapper button:hover i {\n  color: #fff;\n}\n.productList .productItem .contentWrapper button:active {\n  background: var(--secondary);\n}\n.productList .productItem .contentWrapper button:active i {\n  transform: scale(0.85);\n  color: #fff;\n}\n\n.productList .productItem.trend .ribbonposition {\n  opacity: 100%;\n}\n.productList .productItem .ribbonposition {\n  position: absolute;\n  z-index: 5;\n  right: 4px;\n  top: -8px;\n  opacity: 0;\n}\n.productList .productItem .ribbonposition .ribbonbox {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n}\n.productList .productItem .ribbonposition .ribbonbox::after, .productList .productItem .ribbonposition .ribbonbox::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border: #078f6d solid 5px;\n  z-index: 2;\n}\n.productList .productItem .ribbonposition .ribbonbox::after {\n  top: 34%;\n  left: 95%;\n  transform: translateY(-50%);\n}\n.productList .productItem .ribbonposition .ribbonbox::before {\n  top: 0%;\n  left: 65%;\n  transform: translateX(-50%);\n}\n.productList .productItem .ribbonposition .ribbon {\n  width: 100px;\n  padding: 2px 0;\n  font-size: 0.9375rem;\n  background-color: #00cc99;\n  text-align: center;\n  color: #fff;\n  transform: rotate(45deg);\n  position: absolute;\n  right: -20px;\n  top: 15px;\n  z-index: 3;\n}\n\n.slogan {\n  margin-bottom: 35px;\n}\n.slogan.topOffset {\n  padding-top: 50px;\n}\n.slogan img {\n  width: 240px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0.5rem;\n}\n.slogan p {\n  text-align: center;\n  font-size: 1.2rem;\n}\n\nform .wrap {\n  margin: 0 auto;\n  border-top: 3px solid var(--secondary);\n  padding: 15px;\n  box-shadow: 0px 1px 2px rgba(127, 127, 127, 0.6);\n  margin-bottom: 50px;\n}\nform .wrap h3 {\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\nform.login {\n  height: 0;\n  opacity: 0;\n}\nform.login .btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0 15px;\n  margin-top: 1.875rem;\n}\nform.login .btns .btn {\n  padding-right: 1rem;\n  padding-left: 1rem;\n  flex: 1;\n}\nform.login.active {\n  height: auto;\n  opacity: 100%;\n}\n\nform.signup {\n  height: 0;\n  opacity: 0;\n  margin-bottom: 1.875rem;\n}\nform.signup .terms h6 {\n  font-size: 1.5rem;\n}\nform.signup a {\n  display: block;\n}\nform.signup button {\n  width: 40%;\n  display: block;\n  margin: 20px auto;\n}\n@media all and (min-width: 992px) {\n  form.signup button {\n    float: right;\n  }\n}\nform.signup.active {\n  height: auto;\n  opacity: 100%;\n}\n\n.input-icon-box {\n  position: relative;\n}\n.input-icon-box i {\n  position: absolute;\n  top: 50%;\n  translate: 50% -100%;\n  opacity: 0.75;\n}\n.input-icon-box input {\n  text-indent: 1rem;\n}\n\n.notFound {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 3.125rem;\n  border: 2px solid #cccccc;\n  margin-bottom: 3.125rem;\n}\n.notFound h2 {\n  font-size: 2.25rem;\n  color: #dc3545;\n}\n.notFound p {\n  font-size: 1.5rem;\n  letter-spacing: 0.25rem;\n  font-weight: bold;\n}\n.notFound.topOffset {\n  margin-top: 100px;\n}","/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","/*!\r\n * Bootstrap Grid v4.5.2 (https://getbootstrap.com/)\r\n * Copyright 2011-2020 The Bootstrap Authors\r\n * Copyright 2011-2020 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\r\n */\r\nhtml {\r\n  box-sizing: border-box;\r\n  -ms-overflow-style: scrollbar;\r\n}\r\n*,\r\n::after,\r\n::before {\r\n  box-sizing: inherit;\r\n}\r\n.container,\r\n.container-fluid,\r\n.container-lg,\r\n.container-md,\r\n.container-sm,\r\n.container-xl {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n@media (min-width: 576px) {\r\n  .container,\r\n  .container-sm {\r\n    max-width: 540px;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .container,\r\n  .container-md,\r\n  .container-sm {\r\n    max-width: 720px;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .container,\r\n  .container-lg,\r\n  .container-md,\r\n  .container-sm {\r\n    max-width: 960px;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .container,\r\n  .container-lg,\r\n  .container-md,\r\n  .container-sm,\r\n  .container-xl {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n.row {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n.no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n.no-gutters > .col,\r\n.no-gutters > [class*='col-'] {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n.col,\r\n.col-1,\r\n.col-10,\r\n.col-11,\r\n.col-12,\r\n.col-2,\r\n.col-3,\r\n.col-4,\r\n.col-5,\r\n.col-6,\r\n.col-7,\r\n.col-8,\r\n.col-9,\r\n.col-auto,\r\n.col-lg,\r\n.col-lg-1,\r\n.col-lg-10,\r\n.col-lg-11,\r\n.col-lg-12,\r\n.col-lg-2,\r\n.col-lg-3,\r\n.col-lg-4,\r\n.col-lg-5,\r\n.col-lg-6,\r\n.col-lg-7,\r\n.col-lg-8,\r\n.col-lg-9,\r\n.col-lg-auto,\r\n.col-md,\r\n.col-md-1,\r\n.col-md-10,\r\n.col-md-11,\r\n.col-md-12,\r\n.col-md-2,\r\n.col-md-3,\r\n.col-md-4,\r\n.col-md-5,\r\n.col-md-6,\r\n.col-md-7,\r\n.col-md-8,\r\n.col-md-9,\r\n.col-md-auto,\r\n.col-sm,\r\n.col-sm-1,\r\n.col-sm-10,\r\n.col-sm-11,\r\n.col-sm-12,\r\n.col-sm-2,\r\n.col-sm-3,\r\n.col-sm-4,\r\n.col-sm-5,\r\n.col-sm-6,\r\n.col-sm-7,\r\n.col-sm-8,\r\n.col-sm-9,\r\n.col-sm-auto,\r\n.col-xl,\r\n.col-xl-1,\r\n.col-xl-10,\r\n.col-xl-11,\r\n.col-xl-12,\r\n.col-xl-2,\r\n.col-xl-3,\r\n.col-xl-4,\r\n.col-xl-5,\r\n.col-xl-6,\r\n.col-xl-7,\r\n.col-xl-8,\r\n.col-xl-9,\r\n.col-xl-auto {\r\n  position: relative;\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n.col {\r\n  -ms-flex-preferred-size: 0;\r\n  flex-basis: 0;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n.row-cols-1 > * {\r\n  -ms-flex: 0 0 100%;\r\n  flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n.row-cols-2 > * {\r\n  -ms-flex: 0 0 50%;\r\n  flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n.row-cols-3 > * {\r\n  -ms-flex: 0 0 33.333333%;\r\n  flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n.row-cols-4 > * {\r\n  -ms-flex: 0 0 25%;\r\n  flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n.row-cols-5 > * {\r\n  -ms-flex: 0 0 20%;\r\n  flex: 0 0 20%;\r\n  max-width: 20%;\r\n}\r\n.row-cols-6 > * {\r\n  -ms-flex: 0 0 16.666667%;\r\n  flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n.col-auto {\r\n  -ms-flex: 0 0 auto;\r\n  flex: 0 0 auto;\r\n  width: auto;\r\n  max-width: 100%;\r\n}\r\n.col-1 {\r\n  -ms-flex: 0 0 8.333333%;\r\n  flex: 0 0 8.333333%;\r\n  max-width: 8.333333%;\r\n}\r\n.col-2 {\r\n  -ms-flex: 0 0 16.666667%;\r\n  flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n.col-3 {\r\n  -ms-flex: 0 0 25%;\r\n  flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n.col-4 {\r\n  -ms-flex: 0 0 33.333333%;\r\n  flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n.col-5 {\r\n  -ms-flex: 0 0 41.666667%;\r\n  flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n.col-6 {\r\n  -ms-flex: 0 0 50%;\r\n  flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n.col-7 {\r\n  -ms-flex: 0 0 58.333333%;\r\n  flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n.col-8 {\r\n  -ms-flex: 0 0 66.666667%;\r\n  flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n.col-9 {\r\n  -ms-flex: 0 0 75%;\r\n  flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n.col-10 {\r\n  -ms-flex: 0 0 83.333333%;\r\n  flex: 0 0 83.333333%;\r\n  max-width: 83.333333%;\r\n}\r\n.col-11 {\r\n  -ms-flex: 0 0 91.666667%;\r\n  flex: 0 0 91.666667%;\r\n  max-width: 91.666667%;\r\n}\r\n.col-12 {\r\n  -ms-flex: 0 0 100%;\r\n  flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n.order-first {\r\n  -ms-flex-order: -1;\r\n  order: -1;\r\n}\r\n.order-last {\r\n  -ms-flex-order: 13;\r\n  order: 13;\r\n}\r\n.order-0 {\r\n  -ms-flex-order: 0;\r\n  order: 0;\r\n}\r\n.order-1 {\r\n  -ms-flex-order: 1;\r\n  order: 1;\r\n}\r\n.order-2 {\r\n  -ms-flex-order: 2;\r\n  order: 2;\r\n}\r\n.order-3 {\r\n  -ms-flex-order: 3;\r\n  order: 3;\r\n}\r\n.order-4 {\r\n  -ms-flex-order: 4;\r\n  order: 4;\r\n}\r\n.order-5 {\r\n  -ms-flex-order: 5;\r\n  order: 5;\r\n}\r\n.order-6 {\r\n  -ms-flex-order: 6;\r\n  order: 6;\r\n}\r\n.order-7 {\r\n  -ms-flex-order: 7;\r\n  order: 7;\r\n}\r\n.order-8 {\r\n  -ms-flex-order: 8;\r\n  order: 8;\r\n}\r\n.order-9 {\r\n  -ms-flex-order: 9;\r\n  order: 9;\r\n}\r\n.order-10 {\r\n  -ms-flex-order: 10;\r\n  order: 10;\r\n}\r\n.order-11 {\r\n  -ms-flex-order: 11;\r\n  order: 11;\r\n}\r\n.order-12 {\r\n  -ms-flex-order: 12;\r\n  order: 12;\r\n}\r\n.offset-1 {\r\n  margin-left: 8.333333%;\r\n}\r\n.offset-2 {\r\n  margin-left: 16.666667%;\r\n}\r\n.offset-3 {\r\n  margin-left: 25%;\r\n}\r\n.offset-4 {\r\n  margin-left: 33.333333%;\r\n}\r\n.offset-5 {\r\n  margin-left: 41.666667%;\r\n}\r\n.offset-6 {\r\n  margin-left: 50%;\r\n}\r\n.offset-7 {\r\n  margin-left: 58.333333%;\r\n}\r\n.offset-8 {\r\n  margin-left: 66.666667%;\r\n}\r\n.offset-9 {\r\n  margin-left: 75%;\r\n}\r\n.offset-10 {\r\n  margin-left: 83.333333%;\r\n}\r\n.offset-11 {\r\n  margin-left: 91.666667%;\r\n}\r\n@media (min-width: 576px) {\r\n  .col-sm {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .row-cols-sm-1 > * {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .row-cols-sm-2 > * {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .row-cols-sm-3 > * {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .row-cols-sm-4 > * {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .row-cols-sm-5 > * {\r\n    -ms-flex: 0 0 20%;\r\n    flex: 0 0 20%;\r\n    max-width: 20%;\r\n  }\r\n  .row-cols-sm-6 > * {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-sm-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .col-sm-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-sm-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-sm-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-sm-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-sm-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-sm-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-sm-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-sm-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-sm-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-sm-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-sm-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-sm-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-sm-first {\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n  }\r\n  .order-sm-last {\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n  }\r\n  .order-sm-0 {\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n  }\r\n  .order-sm-1 {\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n  }\r\n  .order-sm-2 {\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n  }\r\n  .order-sm-3 {\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n  }\r\n  .order-sm-4 {\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n  }\r\n  .order-sm-5 {\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n  }\r\n  .order-sm-6 {\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n  }\r\n  .order-sm-7 {\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n  }\r\n  .order-sm-8 {\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n  }\r\n  .order-sm-9 {\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n  }\r\n  .order-sm-10 {\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n  }\r\n  .order-sm-11 {\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n  }\r\n  .order-sm-12 {\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n  }\r\n  .offset-sm-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-sm-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-sm-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-sm-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-sm-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-sm-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-sm-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-sm-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-sm-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .col-md {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .row-cols-md-1 > * {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .row-cols-md-2 > * {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .row-cols-md-3 > * {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .row-cols-md-4 > * {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .row-cols-md-5 > * {\r\n    -ms-flex: 0 0 20%;\r\n    flex: 0 0 20%;\r\n    max-width: 20%;\r\n  }\r\n  .row-cols-md-6 > * {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-md-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .col-md-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-md-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-md-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-md-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-md-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-md-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-md-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-md-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-md-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-md-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-md-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-md-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-md-first {\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n  }\r\n  .order-md-last {\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n  }\r\n  .order-md-0 {\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n  }\r\n  .order-md-1 {\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n  }\r\n  .order-md-2 {\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n  }\r\n  .order-md-3 {\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n  }\r\n  .order-md-4 {\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n  }\r\n  .order-md-5 {\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n  }\r\n  .order-md-6 {\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n  }\r\n  .order-md-7 {\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n  }\r\n  .order-md-8 {\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n  }\r\n  .order-md-9 {\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n  }\r\n  .order-md-10 {\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n  }\r\n  .order-md-11 {\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n  }\r\n  .order-md-12 {\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n  }\r\n  .offset-md-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-md-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-md-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-md-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-md-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-md-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-md-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-md-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-md-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-md-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-md-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-md-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .col-lg {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .row-cols-lg-1 > * {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .row-cols-lg-2 > * {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .row-cols-lg-3 > * {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .row-cols-lg-4 > * {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .row-cols-lg-5 > * {\r\n    -ms-flex: 0 0 20%;\r\n    flex: 0 0 20%;\r\n    max-width: 20%;\r\n  }\r\n  .row-cols-lg-6 > * {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-lg-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .col-lg-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-lg-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-lg-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-lg-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-lg-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-lg-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-lg-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-lg-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-lg-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-lg-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-lg-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-lg-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-lg-first {\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n  }\r\n  .order-lg-last {\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n  }\r\n  .order-lg-0 {\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n  }\r\n  .order-lg-1 {\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n  }\r\n  .order-lg-2 {\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n  }\r\n  .order-lg-3 {\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n  }\r\n  .order-lg-4 {\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n  }\r\n  .order-lg-5 {\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n  }\r\n  .order-lg-6 {\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n  }\r\n  .order-lg-7 {\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n  }\r\n  .order-lg-8 {\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n  }\r\n  .order-lg-9 {\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n  }\r\n  .order-lg-10 {\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n  }\r\n  .order-lg-11 {\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n  }\r\n  .order-lg-12 {\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n  }\r\n  .offset-lg-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-lg-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-lg-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-lg-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-lg-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-lg-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-lg-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-lg-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-lg-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-lg-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-lg-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-lg-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .col-xl {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .row-cols-xl-1 > * {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .row-cols-xl-2 > * {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .row-cols-xl-3 > * {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .row-cols-xl-4 > * {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .row-cols-xl-5 > * {\r\n    -ms-flex: 0 0 20%;\r\n    flex: 0 0 20%;\r\n    max-width: 20%;\r\n  }\r\n  .row-cols-xl-6 > * {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-xl-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  .col-xl-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-xl-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-xl-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-xl-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-xl-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-xl-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-xl-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-xl-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-xl-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-xl-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-xl-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-xl-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-xl-first {\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n  }\r\n  .order-xl-last {\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n  }\r\n  .order-xl-0 {\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n  }\r\n  .order-xl-1 {\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n  }\r\n  .order-xl-2 {\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n  }\r\n  .order-xl-3 {\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n  }\r\n  .order-xl-4 {\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n  }\r\n  .order-xl-5 {\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n  }\r\n  .order-xl-6 {\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n  }\r\n  .order-xl-7 {\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n  }\r\n  .order-xl-8 {\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n  }\r\n  .order-xl-9 {\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n  }\r\n  .order-xl-10 {\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n  }\r\n  .order-xl-11 {\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n  }\r\n  .order-xl-12 {\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n  }\r\n  .offset-xl-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-xl-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-xl-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-xl-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-xl-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-xl-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-xl-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-xl-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-xl-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-xl-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-xl-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-xl-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n.d-none {\r\n  display: none !important;\r\n}\r\n.d-inline {\r\n  display: inline !important;\r\n}\r\n.d-inline-block {\r\n  display: inline-block !important;\r\n}\r\n.d-block {\r\n  display: block !important;\r\n}\r\n.d-table {\r\n  display: table !important;\r\n}\r\n.d-table-row {\r\n  display: table-row !important;\r\n}\r\n.d-table-cell {\r\n  display: table-cell !important;\r\n}\r\n.d-flex {\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n}\r\n.d-inline-flex {\r\n  display: -ms-inline-flexbox !important;\r\n  display: inline-flex !important;\r\n}\r\n@media (min-width: 576px) {\r\n  .d-sm-none {\r\n    display: none !important;\r\n  }\r\n  .d-sm-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-sm-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-sm-block {\r\n    display: block !important;\r\n  }\r\n  .d-sm-table {\r\n    display: table !important;\r\n  }\r\n  .d-sm-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-sm-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-sm-flex {\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-sm-inline-flex {\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .d-md-none {\r\n    display: none !important;\r\n  }\r\n  .d-md-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-md-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-md-block {\r\n    display: block !important;\r\n  }\r\n  .d-md-table {\r\n    display: table !important;\r\n  }\r\n  .d-md-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-md-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-md-flex {\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-md-inline-flex {\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .d-lg-none {\r\n    display: none !important;\r\n  }\r\n  .d-lg-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-lg-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-lg-block {\r\n    display: block !important;\r\n  }\r\n  .d-lg-table {\r\n    display: table !important;\r\n  }\r\n  .d-lg-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-lg-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-lg-flex {\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-lg-inline-flex {\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .d-xl-none {\r\n    display: none !important;\r\n  }\r\n  .d-xl-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-xl-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-xl-block {\r\n    display: block !important;\r\n  }\r\n  .d-xl-table {\r\n    display: table !important;\r\n  }\r\n  .d-xl-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-xl-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-xl-flex {\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-xl-inline-flex {\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n@media print {\r\n  .d-print-none {\r\n    display: none !important;\r\n  }\r\n  .d-print-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-print-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-print-block {\r\n    display: block !important;\r\n  }\r\n  .d-print-table {\r\n    display: table !important;\r\n  }\r\n  .d-print-table-row {\r\n    display: table-row !important;\r\n  }\r\n  .d-print-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-print-flex {\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-print-inline-flex {\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n.flex-row {\r\n  -ms-flex-direction: row !important;\r\n  flex-direction: row !important;\r\n}\r\n.flex-column {\r\n  -ms-flex-direction: column !important;\r\n  flex-direction: column !important;\r\n}\r\n.flex-row-reverse {\r\n  -ms-flex-direction: row-reverse !important;\r\n  flex-direction: row-reverse !important;\r\n}\r\n.flex-column-reverse {\r\n  -ms-flex-direction: column-reverse !important;\r\n  flex-direction: column-reverse !important;\r\n}\r\n.flex-wrap {\r\n  -ms-flex-wrap: wrap !important;\r\n  flex-wrap: wrap !important;\r\n}\r\n.flex-nowrap {\r\n  -ms-flex-wrap: nowrap !important;\r\n  flex-wrap: nowrap !important;\r\n}\r\n.flex-wrap-reverse {\r\n  -ms-flex-wrap: wrap-reverse !important;\r\n  flex-wrap: wrap-reverse !important;\r\n}\r\n.flex-fill {\r\n  -ms-flex: 1 1 auto !important;\r\n  flex: 1 1 auto !important;\r\n}\r\n.flex-grow-0 {\r\n  -ms-flex-positive: 0 !important;\r\n  flex-grow: 0 !important;\r\n}\r\n.flex-grow-1 {\r\n  -ms-flex-positive: 1 !important;\r\n  flex-grow: 1 !important;\r\n}\r\n.flex-shrink-0 {\r\n  -ms-flex-negative: 0 !important;\r\n  flex-shrink: 0 !important;\r\n}\r\n.flex-shrink-1 {\r\n  -ms-flex-negative: 1 !important;\r\n  flex-shrink: 1 !important;\r\n}\r\n.justify-content-start {\r\n  -ms-flex-pack: start !important;\r\n  justify-content: flex-start !important;\r\n}\r\n.justify-content-end {\r\n  -ms-flex-pack: end !important;\r\n  justify-content: flex-end !important;\r\n}\r\n.justify-content-center {\r\n  -ms-flex-pack: center !important;\r\n  justify-content: center !important;\r\n}\r\n.justify-content-between {\r\n  -ms-flex-pack: justify !important;\r\n  justify-content: space-between !important;\r\n}\r\n.justify-content-around {\r\n  -ms-flex-pack: distribute !important;\r\n  justify-content: space-around !important;\r\n}\r\n.align-items-start {\r\n  -ms-flex-align: start !important;\r\n  align-items: flex-start !important;\r\n}\r\n.align-items-end {\r\n  -ms-flex-align: end !important;\r\n  align-items: flex-end !important;\r\n}\r\n.align-items-center {\r\n  -ms-flex-align: center !important;\r\n  align-items: center !important;\r\n}\r\n.align-items-baseline {\r\n  -ms-flex-align: baseline !important;\r\n  align-items: baseline !important;\r\n}\r\n.align-items-stretch {\r\n  -ms-flex-align: stretch !important;\r\n  align-items: stretch !important;\r\n}\r\n.align-content-start {\r\n  -ms-flex-line-pack: start !important;\r\n  align-content: flex-start !important;\r\n}\r\n.align-content-end {\r\n  -ms-flex-line-pack: end !important;\r\n  align-content: flex-end !important;\r\n}\r\n.align-content-center {\r\n  -ms-flex-line-pack: center !important;\r\n  align-content: center !important;\r\n}\r\n.align-content-between {\r\n  -ms-flex-line-pack: justify !important;\r\n  align-content: space-between !important;\r\n}\r\n.align-content-around {\r\n  -ms-flex-line-pack: distribute !important;\r\n  align-content: space-around !important;\r\n}\r\n.align-content-stretch {\r\n  -ms-flex-line-pack: stretch !important;\r\n  align-content: stretch !important;\r\n}\r\n.align-self-auto {\r\n  -ms-flex-item-align: auto !important;\r\n  align-self: auto !important;\r\n}\r\n.align-self-start {\r\n  -ms-flex-item-align: start !important;\r\n  align-self: flex-start !important;\r\n}\r\n.align-self-end {\r\n  -ms-flex-item-align: end !important;\r\n  align-self: flex-end !important;\r\n}\r\n.align-self-center {\r\n  -ms-flex-item-align: center !important;\r\n  align-self: center !important;\r\n}\r\n.align-self-baseline {\r\n  -ms-flex-item-align: baseline !important;\r\n  align-self: baseline !important;\r\n}\r\n.align-self-stretch {\r\n  -ms-flex-item-align: stretch !important;\r\n  align-self: stretch !important;\r\n}\r\n@media (min-width: 576px) {\r\n  .flex-sm-row {\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n  }\r\n  .flex-sm-column {\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n  }\r\n  .flex-sm-row-reverse {\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n  }\r\n  .flex-sm-column-reverse {\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n  }\r\n  .flex-sm-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n  }\r\n  .flex-sm-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n  }\r\n  .flex-sm-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n  }\r\n  .flex-sm-fill {\r\n    -ms-flex: 1 1 auto !important;\r\n    flex: 1 1 auto !important;\r\n  }\r\n  .flex-sm-grow-0 {\r\n    -ms-flex-positive: 0 !important;\r\n    flex-grow: 0 !important;\r\n  }\r\n  .flex-sm-grow-1 {\r\n    -ms-flex-positive: 1 !important;\r\n    flex-grow: 1 !important;\r\n  }\r\n  .flex-sm-shrink-0 {\r\n    -ms-flex-negative: 0 !important;\r\n    flex-shrink: 0 !important;\r\n  }\r\n  .flex-sm-shrink-1 {\r\n    -ms-flex-negative: 1 !important;\r\n    flex-shrink: 1 !important;\r\n  }\r\n  .justify-content-sm-start {\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n  }\r\n  .justify-content-sm-end {\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n  }\r\n  .justify-content-sm-center {\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n  }\r\n  .justify-content-sm-between {\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n  }\r\n  .justify-content-sm-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n  }\r\n  .align-items-sm-start {\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n  }\r\n  .align-items-sm-end {\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n  }\r\n  .align-items-sm-center {\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n  }\r\n  .align-items-sm-baseline {\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n  }\r\n  .align-items-sm-stretch {\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n  }\r\n  .align-content-sm-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n  }\r\n  .align-content-sm-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n  }\r\n  .align-content-sm-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n  }\r\n  .align-content-sm-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n  }\r\n  .align-content-sm-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n  }\r\n  .align-content-sm-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n  }\r\n  .align-self-sm-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n  }\r\n  .align-self-sm-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n  }\r\n  .align-self-sm-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n  }\r\n  .align-self-sm-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n  }\r\n  .align-self-sm-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n  }\r\n  .align-self-sm-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .flex-md-row {\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n  }\r\n  .flex-md-column {\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n  }\r\n  .flex-md-row-reverse {\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n  }\r\n  .flex-md-column-reverse {\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n  }\r\n  .flex-md-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n  }\r\n  .flex-md-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n  }\r\n  .flex-md-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n  }\r\n  .flex-md-fill {\r\n    -ms-flex: 1 1 auto !important;\r\n    flex: 1 1 auto !important;\r\n  }\r\n  .flex-md-grow-0 {\r\n    -ms-flex-positive: 0 !important;\r\n    flex-grow: 0 !important;\r\n  }\r\n  .flex-md-grow-1 {\r\n    -ms-flex-positive: 1 !important;\r\n    flex-grow: 1 !important;\r\n  }\r\n  .flex-md-shrink-0 {\r\n    -ms-flex-negative: 0 !important;\r\n    flex-shrink: 0 !important;\r\n  }\r\n  .flex-md-shrink-1 {\r\n    -ms-flex-negative: 1 !important;\r\n    flex-shrink: 1 !important;\r\n  }\r\n  .justify-content-md-start {\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n  }\r\n  .justify-content-md-end {\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n  }\r\n  .justify-content-md-center {\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n  }\r\n  .justify-content-md-between {\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n  }\r\n  .justify-content-md-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n  }\r\n  .align-items-md-start {\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n  }\r\n  .align-items-md-end {\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n  }\r\n  .align-items-md-center {\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n  }\r\n  .align-items-md-baseline {\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n  }\r\n  .align-items-md-stretch {\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n  }\r\n  .align-content-md-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n  }\r\n  .align-content-md-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n  }\r\n  .align-content-md-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n  }\r\n  .align-content-md-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n  }\r\n  .align-content-md-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n  }\r\n  .align-content-md-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n  }\r\n  .align-self-md-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n  }\r\n  .align-self-md-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n  }\r\n  .align-self-md-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n  }\r\n  .align-self-md-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n  }\r\n  .align-self-md-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n  }\r\n  .align-self-md-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .flex-lg-row {\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n  }\r\n  .flex-lg-column {\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n  }\r\n  .flex-lg-row-reverse {\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n  }\r\n  .flex-lg-column-reverse {\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n  }\r\n  .flex-lg-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n  }\r\n  .flex-lg-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n  }\r\n  .flex-lg-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n  }\r\n  .flex-lg-fill {\r\n    -ms-flex: 1 1 auto !important;\r\n    flex: 1 1 auto !important;\r\n  }\r\n  .flex-lg-grow-0 {\r\n    -ms-flex-positive: 0 !important;\r\n    flex-grow: 0 !important;\r\n  }\r\n  .flex-lg-grow-1 {\r\n    -ms-flex-positive: 1 !important;\r\n    flex-grow: 1 !important;\r\n  }\r\n  .flex-lg-shrink-0 {\r\n    -ms-flex-negative: 0 !important;\r\n    flex-shrink: 0 !important;\r\n  }\r\n  .flex-lg-shrink-1 {\r\n    -ms-flex-negative: 1 !important;\r\n    flex-shrink: 1 !important;\r\n  }\r\n  .justify-content-lg-start {\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n  }\r\n  .justify-content-lg-end {\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n  }\r\n  .justify-content-lg-center {\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n  }\r\n  .justify-content-lg-between {\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n  }\r\n  .justify-content-lg-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n  }\r\n  .align-items-lg-start {\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n  }\r\n  .align-items-lg-end {\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n  }\r\n  .align-items-lg-center {\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n  }\r\n  .align-items-lg-baseline {\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n  }\r\n  .align-items-lg-stretch {\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n  }\r\n  .align-content-lg-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n  }\r\n  .align-content-lg-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n  }\r\n  .align-content-lg-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n  }\r\n  .align-content-lg-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n  }\r\n  .align-content-lg-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n  }\r\n  .align-content-lg-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n  }\r\n  .align-self-lg-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n  }\r\n  .align-self-lg-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n  }\r\n  .align-self-lg-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n  }\r\n  .align-self-lg-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n  }\r\n  .align-self-lg-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n  }\r\n  .align-self-lg-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .flex-xl-row {\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n  }\r\n  .flex-xl-column {\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n  }\r\n  .flex-xl-row-reverse {\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n  }\r\n  .flex-xl-column-reverse {\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n  }\r\n  .flex-xl-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n  }\r\n  .flex-xl-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n  }\r\n  .flex-xl-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n  }\r\n  .flex-xl-fill {\r\n    -ms-flex: 1 1 auto !important;\r\n    flex: 1 1 auto !important;\r\n  }\r\n  .flex-xl-grow-0 {\r\n    -ms-flex-positive: 0 !important;\r\n    flex-grow: 0 !important;\r\n  }\r\n  .flex-xl-grow-1 {\r\n    -ms-flex-positive: 1 !important;\r\n    flex-grow: 1 !important;\r\n  }\r\n  .flex-xl-shrink-0 {\r\n    -ms-flex-negative: 0 !important;\r\n    flex-shrink: 0 !important;\r\n  }\r\n  .flex-xl-shrink-1 {\r\n    -ms-flex-negative: 1 !important;\r\n    flex-shrink: 1 !important;\r\n  }\r\n  .justify-content-xl-start {\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n  }\r\n  .justify-content-xl-end {\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n  }\r\n  .justify-content-xl-center {\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n  }\r\n  .justify-content-xl-between {\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n  }\r\n  .justify-content-xl-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n  }\r\n  .align-items-xl-start {\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n  }\r\n  .align-items-xl-end {\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n  }\r\n  .align-items-xl-center {\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n  }\r\n  .align-items-xl-baseline {\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n  }\r\n  .align-items-xl-stretch {\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n  }\r\n  .align-content-xl-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n  }\r\n  .align-content-xl-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n  }\r\n  .align-content-xl-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n  }\r\n  .align-content-xl-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n  }\r\n  .align-content-xl-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n  }\r\n  .align-content-xl-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n  }\r\n  .align-self-xl-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n  }\r\n  .align-self-xl-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n  }\r\n  .align-self-xl-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n  }\r\n  .align-self-xl-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n  }\r\n  .align-self-xl-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n  }\r\n  .align-self-xl-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n  }\r\n}\r\n.m-0 {\r\n  margin: 0 !important;\r\n}\r\n.mt-0,\r\n.my-0 {\r\n  margin-top: 0 !important;\r\n}\r\n.mr-0,\r\n.mx-0 {\r\n  margin-right: 0 !important;\r\n}\r\n.mb-0,\r\n.my-0 {\r\n  margin-bottom: 0 !important;\r\n}\r\n.ml-0,\r\n.mx-0 {\r\n  margin-left: 0 !important;\r\n}\r\n.m-1 {\r\n  margin: 0.25rem !important;\r\n}\r\n.mt-1,\r\n.my-1 {\r\n  margin-top: 0.25rem !important;\r\n}\r\n.mr-1,\r\n.mx-1 {\r\n  margin-right: 0.25rem !important;\r\n}\r\n.mb-1,\r\n.my-1 {\r\n  margin-bottom: 0.25rem !important;\r\n}\r\n.ml-1,\r\n.mx-1 {\r\n  margin-left: 0.25rem !important;\r\n}\r\n.m-2 {\r\n  margin: 0.5rem !important;\r\n}\r\n.mt-2,\r\n.my-2 {\r\n  margin-top: 0.5rem !important;\r\n}\r\n.mr-2,\r\n.mx-2 {\r\n  margin-right: 0.5rem !important;\r\n}\r\n.mb-2,\r\n.my-2 {\r\n  margin-bottom: 0.5rem !important;\r\n}\r\n.ml-2,\r\n.mx-2 {\r\n  margin-left: 0.5rem !important;\r\n}\r\n.m-3 {\r\n  margin: 1rem !important;\r\n}\r\n.mt-3,\r\n.my-3 {\r\n  margin-top: 1rem !important;\r\n}\r\n.mr-3,\r\n.mx-3 {\r\n  margin-right: 1rem !important;\r\n}\r\n.mb-3,\r\n.my-3 {\r\n  margin-bottom: 1rem !important;\r\n}\r\n.ml-3,\r\n.mx-3 {\r\n  margin-left: 1rem !important;\r\n}\r\n.m-4 {\r\n  margin: 1.5rem !important;\r\n}\r\n.mt-4,\r\n.my-4 {\r\n  margin-top: 1.5rem !important;\r\n}\r\n.mr-4,\r\n.mx-4 {\r\n  margin-right: 1.5rem !important;\r\n}\r\n.mb-4,\r\n.my-4 {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n.ml-4,\r\n.mx-4 {\r\n  margin-left: 1.5rem !important;\r\n}\r\n.m-5 {\r\n  margin: 3rem !important;\r\n}\r\n.mt-5,\r\n.my-5 {\r\n  margin-top: 3rem !important;\r\n}\r\n.mr-5,\r\n.mx-5 {\r\n  margin-right: 3rem !important;\r\n}\r\n.mb-5,\r\n.my-5 {\r\n  margin-bottom: 3rem !important;\r\n}\r\n.ml-5,\r\n.mx-5 {\r\n  margin-left: 3rem !important;\r\n}\r\n.p-0 {\r\n  padding: 0 !important;\r\n}\r\n.pt-0,\r\n.py-0 {\r\n  padding-top: 0 !important;\r\n}\r\n.pr-0,\r\n.px-0 {\r\n  padding-right: 0 !important;\r\n}\r\n.pb-0,\r\n.py-0 {\r\n  padding-bottom: 0 !important;\r\n}\r\n.pl-0,\r\n.px-0 {\r\n  padding-left: 0 !important;\r\n}\r\n.p-1 {\r\n  padding: 0.25rem !important;\r\n}\r\n.pt-1,\r\n.py-1 {\r\n  padding-top: 0.25rem !important;\r\n}\r\n.pr-1,\r\n.px-1 {\r\n  padding-right: 0.25rem !important;\r\n}\r\n.pb-1,\r\n.py-1 {\r\n  padding-bottom: 0.25rem !important;\r\n}\r\n.pl-1,\r\n.px-1 {\r\n  padding-left: 0.25rem !important;\r\n}\r\n.p-2 {\r\n  padding: 0.5rem !important;\r\n}\r\n.pt-2,\r\n.py-2 {\r\n  padding-top: 0.5rem !important;\r\n}\r\n.pr-2,\r\n.px-2 {\r\n  padding-right: 0.5rem !important;\r\n}\r\n.pb-2,\r\n.py-2 {\r\n  padding-bottom: 0.5rem !important;\r\n}\r\n.pl-2,\r\n.px-2 {\r\n  padding-left: 0.5rem !important;\r\n}\r\n.p-3 {\r\n  padding: 1rem !important;\r\n}\r\n.pt-3,\r\n.py-3 {\r\n  padding-top: 1rem !important;\r\n}\r\n.pr-3,\r\n.px-3 {\r\n  padding-right: 1rem !important;\r\n}\r\n.pb-3,\r\n.py-3 {\r\n  padding-bottom: 1rem !important;\r\n}\r\n.pl-3,\r\n.px-3 {\r\n  padding-left: 1rem !important;\r\n}\r\n.p-4 {\r\n  padding: 1.5rem !important;\r\n}\r\n.pt-4,\r\n.py-4 {\r\n  padding-top: 1.5rem !important;\r\n}\r\n.pr-4,\r\n.px-4 {\r\n  padding-right: 1.5rem !important;\r\n}\r\n.pb-4,\r\n.py-4 {\r\n  padding-bottom: 1.5rem !important;\r\n}\r\n.pl-4,\r\n.px-4 {\r\n  padding-left: 1.5rem !important;\r\n}\r\n.p-5 {\r\n  padding: 3rem !important;\r\n}\r\n.pt-5,\r\n.py-5 {\r\n  padding-top: 3rem !important;\r\n}\r\n.pr-5,\r\n.px-5 {\r\n  padding-right: 3rem !important;\r\n}\r\n.pb-5,\r\n.py-5 {\r\n  padding-bottom: 3rem !important;\r\n}\r\n.pl-5,\r\n.px-5 {\r\n  padding-left: 3rem !important;\r\n}\r\n.m-n1 {\r\n  margin: -0.25rem !important;\r\n}\r\n.mt-n1,\r\n.my-n1 {\r\n  margin-top: -0.25rem !important;\r\n}\r\n.mr-n1,\r\n.mx-n1 {\r\n  margin-right: -0.25rem !important;\r\n}\r\n.mb-n1,\r\n.my-n1 {\r\n  margin-bottom: -0.25rem !important;\r\n}\r\n.ml-n1,\r\n.mx-n1 {\r\n  margin-left: -0.25rem !important;\r\n}\r\n.m-n2 {\r\n  margin: -0.5rem !important;\r\n}\r\n.mt-n2,\r\n.my-n2 {\r\n  margin-top: -0.5rem !important;\r\n}\r\n.mr-n2,\r\n.mx-n2 {\r\n  margin-right: -0.5rem !important;\r\n}\r\n.mb-n2,\r\n.my-n2 {\r\n  margin-bottom: -0.5rem !important;\r\n}\r\n.ml-n2,\r\n.mx-n2 {\r\n  margin-left: -0.5rem !important;\r\n}\r\n.m-n3 {\r\n  margin: -1rem !important;\r\n}\r\n.mt-n3,\r\n.my-n3 {\r\n  margin-top: -1rem !important;\r\n}\r\n.mr-n3,\r\n.mx-n3 {\r\n  margin-right: -1rem !important;\r\n}\r\n.mb-n3,\r\n.my-n3 {\r\n  margin-bottom: -1rem !important;\r\n}\r\n.ml-n3,\r\n.mx-n3 {\r\n  margin-left: -1rem !important;\r\n}\r\n.m-n4 {\r\n  margin: -1.5rem !important;\r\n}\r\n.mt-n4,\r\n.my-n4 {\r\n  margin-top: -1.5rem !important;\r\n}\r\n.mr-n4,\r\n.mx-n4 {\r\n  margin-right: -1.5rem !important;\r\n}\r\n.mb-n4,\r\n.my-n4 {\r\n  margin-bottom: -1.5rem !important;\r\n}\r\n.ml-n4,\r\n.mx-n4 {\r\n  margin-left: -1.5rem !important;\r\n}\r\n.m-n5 {\r\n  margin: -3rem !important;\r\n}\r\n.mt-n5,\r\n.my-n5 {\r\n  margin-top: -3rem !important;\r\n}\r\n.mr-n5,\r\n.mx-n5 {\r\n  margin-right: -3rem !important;\r\n}\r\n.mb-n5,\r\n.my-n5 {\r\n  margin-bottom: -3rem !important;\r\n}\r\n.ml-n5,\r\n.mx-n5 {\r\n  margin-left: -3rem !important;\r\n}\r\n.m-auto {\r\n  margin: auto !important;\r\n}\r\n.mt-auto,\r\n.my-auto {\r\n  margin-top: auto !important;\r\n}\r\n.mr-auto,\r\n.mx-auto {\r\n  margin-right: auto !important;\r\n}\r\n.mb-auto,\r\n.my-auto {\r\n  margin-bottom: auto !important;\r\n}\r\n.ml-auto,\r\n.mx-auto {\r\n  margin-left: auto !important;\r\n}\r\n@media (min-width: 576px) {\r\n  .m-sm-0 {\r\n    margin: 0 !important;\r\n  }\r\n  .mt-sm-0,\r\n  .my-sm-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-sm-0,\r\n  .mx-sm-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-sm-0,\r\n  .my-sm-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-sm-0,\r\n  .mx-sm-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .m-sm-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n  .mt-sm-1,\r\n  .my-sm-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-sm-1,\r\n  .mx-sm-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-sm-1,\r\n  .my-sm-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-sm-1,\r\n  .mx-sm-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .m-sm-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n  .mt-sm-2,\r\n  .my-sm-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-sm-2,\r\n  .mx-sm-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-sm-2,\r\n  .my-sm-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-sm-2,\r\n  .mx-sm-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .m-sm-3 {\r\n    margin: 1rem !important;\r\n  }\r\n  .mt-sm-3,\r\n  .my-sm-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-sm-3,\r\n  .mx-sm-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-sm-3,\r\n  .my-sm-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-sm-3,\r\n  .mx-sm-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .m-sm-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n  .mt-sm-4,\r\n  .my-sm-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-sm-4,\r\n  .mx-sm-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-sm-4,\r\n  .my-sm-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-sm-4,\r\n  .mx-sm-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .m-sm-5 {\r\n    margin: 3rem !important;\r\n  }\r\n  .mt-sm-5,\r\n  .my-sm-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-sm-5,\r\n  .mx-sm-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-sm-5,\r\n  .my-sm-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-sm-5,\r\n  .mx-sm-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .p-sm-0 {\r\n    padding: 0 !important;\r\n  }\r\n  .pt-sm-0,\r\n  .py-sm-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-sm-0,\r\n  .px-sm-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-sm-0,\r\n  .py-sm-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-sm-0,\r\n  .px-sm-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .p-sm-1 {\r\n    padding: 0.25rem !important;\r\n  }\r\n  .pt-sm-1,\r\n  .py-sm-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-sm-1,\r\n  .px-sm-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-sm-1,\r\n  .py-sm-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-sm-1,\r\n  .px-sm-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .p-sm-2 {\r\n    padding: 0.5rem !important;\r\n  }\r\n  .pt-sm-2,\r\n  .py-sm-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-sm-2,\r\n  .px-sm-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-sm-2,\r\n  .py-sm-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-sm-2,\r\n  .px-sm-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .p-sm-3 {\r\n    padding: 1rem !important;\r\n  }\r\n  .pt-sm-3,\r\n  .py-sm-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-sm-3,\r\n  .px-sm-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-sm-3,\r\n  .py-sm-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-sm-3,\r\n  .px-sm-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .p-sm-4 {\r\n    padding: 1.5rem !important;\r\n  }\r\n  .pt-sm-4,\r\n  .py-sm-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-sm-4,\r\n  .px-sm-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-sm-4,\r\n  .py-sm-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-sm-4,\r\n  .px-sm-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .p-sm-5 {\r\n    padding: 3rem !important;\r\n  }\r\n  .pt-sm-5,\r\n  .py-sm-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-sm-5,\r\n  .px-sm-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-sm-5,\r\n  .py-sm-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-sm-5,\r\n  .px-sm-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .m-sm-n1 {\r\n    margin: -0.25rem !important;\r\n  }\r\n  .mt-sm-n1,\r\n  .my-sm-n1 {\r\n    margin-top: -0.25rem !important;\r\n  }\r\n  .mr-sm-n1,\r\n  .mx-sm-n1 {\r\n    margin-right: -0.25rem !important;\r\n  }\r\n  .mb-sm-n1,\r\n  .my-sm-n1 {\r\n    margin-bottom: -0.25rem !important;\r\n  }\r\n  .ml-sm-n1,\r\n  .mx-sm-n1 {\r\n    margin-left: -0.25rem !important;\r\n  }\r\n  .m-sm-n2 {\r\n    margin: -0.5rem !important;\r\n  }\r\n  .mt-sm-n2,\r\n  .my-sm-n2 {\r\n    margin-top: -0.5rem !important;\r\n  }\r\n  .mr-sm-n2,\r\n  .mx-sm-n2 {\r\n    margin-right: -0.5rem !important;\r\n  }\r\n  .mb-sm-n2,\r\n  .my-sm-n2 {\r\n    margin-bottom: -0.5rem !important;\r\n  }\r\n  .ml-sm-n2,\r\n  .mx-sm-n2 {\r\n    margin-left: -0.5rem !important;\r\n  }\r\n  .m-sm-n3 {\r\n    margin: -1rem !important;\r\n  }\r\n  .mt-sm-n3,\r\n  .my-sm-n3 {\r\n    margin-top: -1rem !important;\r\n  }\r\n  .mr-sm-n3,\r\n  .mx-sm-n3 {\r\n    margin-right: -1rem !important;\r\n  }\r\n  .mb-sm-n3,\r\n  .my-sm-n3 {\r\n    margin-bottom: -1rem !important;\r\n  }\r\n  .ml-sm-n3,\r\n  .mx-sm-n3 {\r\n    margin-left: -1rem !important;\r\n  }\r\n  .m-sm-n4 {\r\n    margin: -1.5rem !important;\r\n  }\r\n  .mt-sm-n4,\r\n  .my-sm-n4 {\r\n    margin-top: -1.5rem !important;\r\n  }\r\n  .mr-sm-n4,\r\n  .mx-sm-n4 {\r\n    margin-right: -1.5rem !important;\r\n  }\r\n  .mb-sm-n4,\r\n  .my-sm-n4 {\r\n    margin-bottom: -1.5rem !important;\r\n  }\r\n  .ml-sm-n4,\r\n  .mx-sm-n4 {\r\n    margin-left: -1.5rem !important;\r\n  }\r\n  .m-sm-n5 {\r\n    margin: -3rem !important;\r\n  }\r\n  .mt-sm-n5,\r\n  .my-sm-n5 {\r\n    margin-top: -3rem !important;\r\n  }\r\n  .mr-sm-n5,\r\n  .mx-sm-n5 {\r\n    margin-right: -3rem !important;\r\n  }\r\n  .mb-sm-n5,\r\n  .my-sm-n5 {\r\n    margin-bottom: -3rem !important;\r\n  }\r\n  .ml-sm-n5,\r\n  .mx-sm-n5 {\r\n    margin-left: -3rem !important;\r\n  }\r\n  .m-sm-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-sm-auto,\r\n  .my-sm-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-sm-auto,\r\n  .mx-sm-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-sm-auto,\r\n  .my-sm-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-sm-auto,\r\n  .mx-sm-auto {\r\n    margin-left: auto !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .m-md-0 {\r\n    margin: 0 !important;\r\n  }\r\n  .mt-md-0,\r\n  .my-md-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-md-0,\r\n  .mx-md-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-md-0,\r\n  .my-md-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-md-0,\r\n  .mx-md-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .m-md-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n  .mt-md-1,\r\n  .my-md-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-md-1,\r\n  .mx-md-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-md-1,\r\n  .my-md-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-md-1,\r\n  .mx-md-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .m-md-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n  .mt-md-2,\r\n  .my-md-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-md-2,\r\n  .mx-md-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-md-2,\r\n  .my-md-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-md-2,\r\n  .mx-md-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .m-md-3 {\r\n    margin: 1rem !important;\r\n  }\r\n  .mt-md-3,\r\n  .my-md-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-md-3,\r\n  .mx-md-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-md-3,\r\n  .my-md-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-md-3,\r\n  .mx-md-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .m-md-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n  .mt-md-4,\r\n  .my-md-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-md-4,\r\n  .mx-md-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-md-4,\r\n  .my-md-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-md-4,\r\n  .mx-md-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .m-md-5 {\r\n    margin: 3rem !important;\r\n  }\r\n  .mt-md-5,\r\n  .my-md-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-md-5,\r\n  .mx-md-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-md-5,\r\n  .my-md-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-md-5,\r\n  .mx-md-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .p-md-0 {\r\n    padding: 0 !important;\r\n  }\r\n  .pt-md-0,\r\n  .py-md-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-md-0,\r\n  .px-md-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-md-0,\r\n  .py-md-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-md-0,\r\n  .px-md-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .p-md-1 {\r\n    padding: 0.25rem !important;\r\n  }\r\n  .pt-md-1,\r\n  .py-md-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-md-1,\r\n  .px-md-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-md-1,\r\n  .py-md-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-md-1,\r\n  .px-md-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .p-md-2 {\r\n    padding: 0.5rem !important;\r\n  }\r\n  .pt-md-2,\r\n  .py-md-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-md-2,\r\n  .px-md-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-md-2,\r\n  .py-md-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-md-2,\r\n  .px-md-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .p-md-3 {\r\n    padding: 1rem !important;\r\n  }\r\n  .pt-md-3,\r\n  .py-md-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-md-3,\r\n  .px-md-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-md-3,\r\n  .py-md-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-md-3,\r\n  .px-md-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .p-md-4 {\r\n    padding: 1.5rem !important;\r\n  }\r\n  .pt-md-4,\r\n  .py-md-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-md-4,\r\n  .px-md-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-md-4,\r\n  .py-md-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-md-4,\r\n  .px-md-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .p-md-5 {\r\n    padding: 3rem !important;\r\n  }\r\n  .pt-md-5,\r\n  .py-md-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-md-5,\r\n  .px-md-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-md-5,\r\n  .py-md-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-md-5,\r\n  .px-md-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .m-md-n1 {\r\n    margin: -0.25rem !important;\r\n  }\r\n  .mt-md-n1,\r\n  .my-md-n1 {\r\n    margin-top: -0.25rem !important;\r\n  }\r\n  .mr-md-n1,\r\n  .mx-md-n1 {\r\n    margin-right: -0.25rem !important;\r\n  }\r\n  .mb-md-n1,\r\n  .my-md-n1 {\r\n    margin-bottom: -0.25rem !important;\r\n  }\r\n  .ml-md-n1,\r\n  .mx-md-n1 {\r\n    margin-left: -0.25rem !important;\r\n  }\r\n  .m-md-n2 {\r\n    margin: -0.5rem !important;\r\n  }\r\n  .mt-md-n2,\r\n  .my-md-n2 {\r\n    margin-top: -0.5rem !important;\r\n  }\r\n  .mr-md-n2,\r\n  .mx-md-n2 {\r\n    margin-right: -0.5rem !important;\r\n  }\r\n  .mb-md-n2,\r\n  .my-md-n2 {\r\n    margin-bottom: -0.5rem !important;\r\n  }\r\n  .ml-md-n2,\r\n  .mx-md-n2 {\r\n    margin-left: -0.5rem !important;\r\n  }\r\n  .m-md-n3 {\r\n    margin: -1rem !important;\r\n  }\r\n  .mt-md-n3,\r\n  .my-md-n3 {\r\n    margin-top: -1rem !important;\r\n  }\r\n  .mr-md-n3,\r\n  .mx-md-n3 {\r\n    margin-right: -1rem !important;\r\n  }\r\n  .mb-md-n3,\r\n  .my-md-n3 {\r\n    margin-bottom: -1rem !important;\r\n  }\r\n  .ml-md-n3,\r\n  .mx-md-n3 {\r\n    margin-left: -1rem !important;\r\n  }\r\n  .m-md-n4 {\r\n    margin: -1.5rem !important;\r\n  }\r\n  .mt-md-n4,\r\n  .my-md-n4 {\r\n    margin-top: -1.5rem !important;\r\n  }\r\n  .mr-md-n4,\r\n  .mx-md-n4 {\r\n    margin-right: -1.5rem !important;\r\n  }\r\n  .mb-md-n4,\r\n  .my-md-n4 {\r\n    margin-bottom: -1.5rem !important;\r\n  }\r\n  .ml-md-n4,\r\n  .mx-md-n4 {\r\n    margin-left: -1.5rem !important;\r\n  }\r\n  .m-md-n5 {\r\n    margin: -3rem !important;\r\n  }\r\n  .mt-md-n5,\r\n  .my-md-n5 {\r\n    margin-top: -3rem !important;\r\n  }\r\n  .mr-md-n5,\r\n  .mx-md-n5 {\r\n    margin-right: -3rem !important;\r\n  }\r\n  .mb-md-n5,\r\n  .my-md-n5 {\r\n    margin-bottom: -3rem !important;\r\n  }\r\n  .ml-md-n5,\r\n  .mx-md-n5 {\r\n    margin-left: -3rem !important;\r\n  }\r\n  .m-md-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-md-auto,\r\n  .my-md-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-md-auto,\r\n  .mx-md-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-md-auto,\r\n  .my-md-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-md-auto,\r\n  .mx-md-auto {\r\n    margin-left: auto !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .m-lg-0 {\r\n    margin: 0 !important;\r\n  }\r\n  .mt-lg-0,\r\n  .my-lg-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-lg-0,\r\n  .mx-lg-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-lg-0,\r\n  .my-lg-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-lg-0,\r\n  .mx-lg-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .m-lg-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n  .mt-lg-1,\r\n  .my-lg-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-lg-1,\r\n  .mx-lg-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-lg-1,\r\n  .my-lg-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-lg-1,\r\n  .mx-lg-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .m-lg-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n  .mt-lg-2,\r\n  .my-lg-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-lg-2,\r\n  .mx-lg-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-lg-2,\r\n  .my-lg-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-lg-2,\r\n  .mx-lg-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .m-lg-3 {\r\n    margin: 1rem !important;\r\n  }\r\n  .mt-lg-3,\r\n  .my-lg-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-lg-3,\r\n  .mx-lg-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-lg-3,\r\n  .my-lg-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-lg-3,\r\n  .mx-lg-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .m-lg-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n  .mt-lg-4,\r\n  .my-lg-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-lg-4,\r\n  .mx-lg-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-lg-4,\r\n  .my-lg-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-lg-4,\r\n  .mx-lg-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .m-lg-5 {\r\n    margin: 3rem !important;\r\n  }\r\n  .mt-lg-5,\r\n  .my-lg-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-lg-5,\r\n  .mx-lg-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-lg-5,\r\n  .my-lg-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-lg-5,\r\n  .mx-lg-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .p-lg-0 {\r\n    padding: 0 !important;\r\n  }\r\n  .pt-lg-0,\r\n  .py-lg-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-lg-0,\r\n  .px-lg-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-lg-0,\r\n  .py-lg-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-lg-0,\r\n  .px-lg-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .p-lg-1 {\r\n    padding: 0.25rem !important;\r\n  }\r\n  .pt-lg-1,\r\n  .py-lg-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-lg-1,\r\n  .px-lg-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-lg-1,\r\n  .py-lg-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-lg-1,\r\n  .px-lg-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .p-lg-2 {\r\n    padding: 0.5rem !important;\r\n  }\r\n  .pt-lg-2,\r\n  .py-lg-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-lg-2,\r\n  .px-lg-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-lg-2,\r\n  .py-lg-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-lg-2,\r\n  .px-lg-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .p-lg-3 {\r\n    padding: 1rem !important;\r\n  }\r\n  .pt-lg-3,\r\n  .py-lg-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-lg-3,\r\n  .px-lg-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-lg-3,\r\n  .py-lg-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-lg-3,\r\n  .px-lg-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .p-lg-4 {\r\n    padding: 1.5rem !important;\r\n  }\r\n  .pt-lg-4,\r\n  .py-lg-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-lg-4,\r\n  .px-lg-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-lg-4,\r\n  .py-lg-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-lg-4,\r\n  .px-lg-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .p-lg-5 {\r\n    padding: 3rem !important;\r\n  }\r\n  .pt-lg-5,\r\n  .py-lg-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-lg-5,\r\n  .px-lg-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-lg-5,\r\n  .py-lg-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-lg-5,\r\n  .px-lg-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .m-lg-n1 {\r\n    margin: -0.25rem !important;\r\n  }\r\n  .mt-lg-n1,\r\n  .my-lg-n1 {\r\n    margin-top: -0.25rem !important;\r\n  }\r\n  .mr-lg-n1,\r\n  .mx-lg-n1 {\r\n    margin-right: -0.25rem !important;\r\n  }\r\n  .mb-lg-n1,\r\n  .my-lg-n1 {\r\n    margin-bottom: -0.25rem !important;\r\n  }\r\n  .ml-lg-n1,\r\n  .mx-lg-n1 {\r\n    margin-left: -0.25rem !important;\r\n  }\r\n  .m-lg-n2 {\r\n    margin: -0.5rem !important;\r\n  }\r\n  .mt-lg-n2,\r\n  .my-lg-n2 {\r\n    margin-top: -0.5rem !important;\r\n  }\r\n  .mr-lg-n2,\r\n  .mx-lg-n2 {\r\n    margin-right: -0.5rem !important;\r\n  }\r\n  .mb-lg-n2,\r\n  .my-lg-n2 {\r\n    margin-bottom: -0.5rem !important;\r\n  }\r\n  .ml-lg-n2,\r\n  .mx-lg-n2 {\r\n    margin-left: -0.5rem !important;\r\n  }\r\n  .m-lg-n3 {\r\n    margin: -1rem !important;\r\n  }\r\n  .mt-lg-n3,\r\n  .my-lg-n3 {\r\n    margin-top: -1rem !important;\r\n  }\r\n  .mr-lg-n3,\r\n  .mx-lg-n3 {\r\n    margin-right: -1rem !important;\r\n  }\r\n  .mb-lg-n3,\r\n  .my-lg-n3 {\r\n    margin-bottom: -1rem !important;\r\n  }\r\n  .ml-lg-n3,\r\n  .mx-lg-n3 {\r\n    margin-left: -1rem !important;\r\n  }\r\n  .m-lg-n4 {\r\n    margin: -1.5rem !important;\r\n  }\r\n  .mt-lg-n4,\r\n  .my-lg-n4 {\r\n    margin-top: -1.5rem !important;\r\n  }\r\n  .mr-lg-n4,\r\n  .mx-lg-n4 {\r\n    margin-right: -1.5rem !important;\r\n  }\r\n  .mb-lg-n4,\r\n  .my-lg-n4 {\r\n    margin-bottom: -1.5rem !important;\r\n  }\r\n  .ml-lg-n4,\r\n  .mx-lg-n4 {\r\n    margin-left: -1.5rem !important;\r\n  }\r\n  .m-lg-n5 {\r\n    margin: -3rem !important;\r\n  }\r\n  .mt-lg-n5,\r\n  .my-lg-n5 {\r\n    margin-top: -3rem !important;\r\n  }\r\n  .mr-lg-n5,\r\n  .mx-lg-n5 {\r\n    margin-right: -3rem !important;\r\n  }\r\n  .mb-lg-n5,\r\n  .my-lg-n5 {\r\n    margin-bottom: -3rem !important;\r\n  }\r\n  .ml-lg-n5,\r\n  .mx-lg-n5 {\r\n    margin-left: -3rem !important;\r\n  }\r\n  .m-lg-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-lg-auto,\r\n  .my-lg-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-lg-auto,\r\n  .mx-lg-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-lg-auto,\r\n  .my-lg-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-lg-auto,\r\n  .mx-lg-auto {\r\n    margin-left: auto !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .m-xl-0 {\r\n    margin: 0 !important;\r\n  }\r\n  .mt-xl-0,\r\n  .my-xl-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-xl-0,\r\n  .mx-xl-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-xl-0,\r\n  .my-xl-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-xl-0,\r\n  .mx-xl-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .m-xl-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n  .mt-xl-1,\r\n  .my-xl-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-xl-1,\r\n  .mx-xl-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-xl-1,\r\n  .my-xl-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-xl-1,\r\n  .mx-xl-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .m-xl-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n  .mt-xl-2,\r\n  .my-xl-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-xl-2,\r\n  .mx-xl-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-xl-2,\r\n  .my-xl-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-xl-2,\r\n  .mx-xl-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .m-xl-3 {\r\n    margin: 1rem !important;\r\n  }\r\n  .mt-xl-3,\r\n  .my-xl-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-xl-3,\r\n  .mx-xl-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-xl-3,\r\n  .my-xl-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-xl-3,\r\n  .mx-xl-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .m-xl-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n  .mt-xl-4,\r\n  .my-xl-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-xl-4,\r\n  .mx-xl-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-xl-4,\r\n  .my-xl-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-xl-4,\r\n  .mx-xl-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .m-xl-5 {\r\n    margin: 3rem !important;\r\n  }\r\n  .mt-xl-5,\r\n  .my-xl-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-xl-5,\r\n  .mx-xl-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-xl-5,\r\n  .my-xl-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-xl-5,\r\n  .mx-xl-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .p-xl-0 {\r\n    padding: 0 !important;\r\n  }\r\n  .pt-xl-0,\r\n  .py-xl-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-xl-0,\r\n  .px-xl-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-xl-0,\r\n  .py-xl-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-xl-0,\r\n  .px-xl-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .p-xl-1 {\r\n    padding: 0.25rem !important;\r\n  }\r\n  .pt-xl-1,\r\n  .py-xl-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-xl-1,\r\n  .px-xl-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-xl-1,\r\n  .py-xl-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-xl-1,\r\n  .px-xl-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .p-xl-2 {\r\n    padding: 0.5rem !important;\r\n  }\r\n  .pt-xl-2,\r\n  .py-xl-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-xl-2,\r\n  .px-xl-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-xl-2,\r\n  .py-xl-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-xl-2,\r\n  .px-xl-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .p-xl-3 {\r\n    padding: 1rem !important;\r\n  }\r\n  .pt-xl-3,\r\n  .py-xl-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-xl-3,\r\n  .px-xl-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-xl-3,\r\n  .py-xl-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-xl-3,\r\n  .px-xl-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .p-xl-4 {\r\n    padding: 1.5rem !important;\r\n  }\r\n  .pt-xl-4,\r\n  .py-xl-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-xl-4,\r\n  .px-xl-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-xl-4,\r\n  .py-xl-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-xl-4,\r\n  .px-xl-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .p-xl-5 {\r\n    padding: 3rem !important;\r\n  }\r\n  .pt-xl-5,\r\n  .py-xl-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-xl-5,\r\n  .px-xl-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-xl-5,\r\n  .py-xl-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-xl-5,\r\n  .px-xl-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .m-xl-n1 {\r\n    margin: -0.25rem !important;\r\n  }\r\n  .mt-xl-n1,\r\n  .my-xl-n1 {\r\n    margin-top: -0.25rem !important;\r\n  }\r\n  .mr-xl-n1,\r\n  .mx-xl-n1 {\r\n    margin-right: -0.25rem !important;\r\n  }\r\n  .mb-xl-n1,\r\n  .my-xl-n1 {\r\n    margin-bottom: -0.25rem !important;\r\n  }\r\n  .ml-xl-n1,\r\n  .mx-xl-n1 {\r\n    margin-left: -0.25rem !important;\r\n  }\r\n  .m-xl-n2 {\r\n    margin: -0.5rem !important;\r\n  }\r\n  .mt-xl-n2,\r\n  .my-xl-n2 {\r\n    margin-top: -0.5rem !important;\r\n  }\r\n  .mr-xl-n2,\r\n  .mx-xl-n2 {\r\n    margin-right: -0.5rem !important;\r\n  }\r\n  .mb-xl-n2,\r\n  .my-xl-n2 {\r\n    margin-bottom: -0.5rem !important;\r\n  }\r\n  .ml-xl-n2,\r\n  .mx-xl-n2 {\r\n    margin-left: -0.5rem !important;\r\n  }\r\n  .m-xl-n3 {\r\n    margin: -1rem !important;\r\n  }\r\n  .mt-xl-n3,\r\n  .my-xl-n3 {\r\n    margin-top: -1rem !important;\r\n  }\r\n  .mr-xl-n3,\r\n  .mx-xl-n3 {\r\n    margin-right: -1rem !important;\r\n  }\r\n  .mb-xl-n3,\r\n  .my-xl-n3 {\r\n    margin-bottom: -1rem !important;\r\n  }\r\n  .ml-xl-n3,\r\n  .mx-xl-n3 {\r\n    margin-left: -1rem !important;\r\n  }\r\n  .m-xl-n4 {\r\n    margin: -1.5rem !important;\r\n  }\r\n  .mt-xl-n4,\r\n  .my-xl-n4 {\r\n    margin-top: -1.5rem !important;\r\n  }\r\n  .mr-xl-n4,\r\n  .mx-xl-n4 {\r\n    margin-right: -1.5rem !important;\r\n  }\r\n  .mb-xl-n4,\r\n  .my-xl-n4 {\r\n    margin-bottom: -1.5rem !important;\r\n  }\r\n  .ml-xl-n4,\r\n  .mx-xl-n4 {\r\n    margin-left: -1.5rem !important;\r\n  }\r\n  .m-xl-n5 {\r\n    margin: -3rem !important;\r\n  }\r\n  .mt-xl-n5,\r\n  .my-xl-n5 {\r\n    margin-top: -3rem !important;\r\n  }\r\n  .mr-xl-n5,\r\n  .mx-xl-n5 {\r\n    margin-right: -3rem !important;\r\n  }\r\n  .mb-xl-n5,\r\n  .my-xl-n5 {\r\n    margin-bottom: -3rem !important;\r\n  }\r\n  .ml-xl-n5,\r\n  .mx-xl-n5 {\r\n    margin-left: -3rem !important;\r\n  }\r\n  .m-xl-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-xl-auto,\r\n  .my-xl-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-xl-auto,\r\n  .mx-xl-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-xl-auto,\r\n  .my-xl-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-xl-auto,\r\n  .mx-xl-auto {\r\n    margin-left: auto !important;\r\n  }\r\n}\r\n/*# sourceMappingURL=bootstrap-grid.min.css.map */\r\n","// 通用的提示訊息\r\n$color-success: #28a745; // 绿色\r\n$color-info: #17a2b8; // 蓝色\r\n$color-warning: #ffc107; // 黄色\r\n$color-danger: #dc3545; // 红色\r\n$color-success-light: #d4edda; // 淡绿色\r\n$color-info-light: #d1ecf1; // 淡蓝色\r\n$color-warning-light: #fff3cd; // 淡黄色\r\n$color-danger-light: #f8d7da; // 淡红色\r\n\r\n//--------------------------------------------\r\n// 定義色彩列表\r\n$color-white: #fff;\r\n//--------------------------------------------\r\n:root {\r\n  --primary: #3d1101;\r\n  --secondary: rgb(255, 94, 69);\r\n  --accent: rgb(0, 204, 153);\r\n  --link: rgb(255, 94, 69);\r\n  --link-hover: rgba(255, 94, 69, 0.8);\r\n  --bg-primary: rgb(239, 233, 231);\r\n  --bg-secondary: rgb(61, 17, 1);\r\n  --bg-transparent: rgba(0, 0, 0, 0.75); //導覽列\r\n}\r\n\r\nbody.hexRestaurant {\r\n  --primary: #3d1101;\r\n  --secondary: rgb(255, 94, 69);\r\n  --accent: rgb(0, 204, 153);\r\n  --link: rgb(255, 94, 69);\r\n  --link-hover: rgba(255, 94, 69, 0.8);\r\n  --bg-primary: rgb(239, 233, 231);\r\n  --bg-secondary: rgb(61, 17, 1);\r\n  --bg-transparent: rgba(0, 0, 0, 0.75); //導覽列\r\n}\r\n\r\nbody.lightMode {\r\n  --primary: blAack;\r\n  --secondary: black;\r\n  --light: black;\r\n  --dark: black;\r\n  --link: rgba(250, 179, 97, 1);\r\n  --link-hover: rgba(250, 179, 97, 0.8);\r\n  --bg-primary: rgb(255, 255, 255);\r\n  --bg-secondary: rgb(255, 255, 255);\r\n  --transparent: rgb(255, 255, 255);\r\n}\r\nbody.darkMode {\r\n  --primary: rgb(255, 255, 255);\r\n  --secondary: rgb(255, 255, 255);\r\n  --light: rgb(255, 255, 255);\r\n  --dark: rgb(165, 165, 165);\r\n  --link: rgb(97, 202, 250);\r\n  --link-hover: rgb(97, 202, 250);\r\n  --bg-primary: black;\r\n  --bg-secondary: black;\r\n  --transparent: rgba(0, 0, 0, 0.5);\r\n}\r\n","// 使用media-query\r\n// @include media-query(sm) {\r\n//   color: rgb(210, 245, 10);\r\n// }\r\n// @include media-query(md) {\r\n//   color: rgb(0, 255, 149);\r\n// }\r\n// @include media-query(lg) {\r\n//   color: rgb(17, 0, 255);\r\n// }\r\n// @include media-query(xl) {\r\n//   color: rgb(17, 0, 255);\r\n// }\r\n//-------------------------------------------\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: $font-family;\r\n  height: 100%;\r\n  background-color: var(--bg-primary);\r\n  // 預設\r\n  font-size: $font-size-md;\r\n  line-height: 1.5;\r\n  color: var(--primary);\r\n  // 標題\r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    font-size: $font-size-lg;\r\n    // font-weight: bold;\r\n    margin-bottom: $gap-xs;\r\n  }\r\n  // 連結\r\n  a {\r\n    color: var(--link);\r\n    font-size: $font-size-md;\r\n    text-decoration: none;\r\n    &:hover {\r\n      color: var(--link-hover);\r\n    }\r\n  }\r\n  span {\r\n    font-size: $font-size-xs;\r\n  }\r\n  img {\r\n    width: 100%;\r\n    max-width: 100%;\r\n  }\r\n}\r\n","// 應用SCSS變數在CSS選取器上的方式\n// 1.直接使用變數\n// body {\n//   font-family: $font-family;\n// }\n// 2.從Sass Map選取對應值\n//   div{background-color:map-get($colors,'primary');}\n// 3.使用@each批次從Sass Map選取對應值\n//   div{\n//     @each $key,$value in $colors{\n//       .box--#{$key} {\n//       background-color:lighten($value,40%);\n//       }\n//     }\n//   }\n\n//--------------------------------------------\n// 字型\n@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');\n$font-family: 'Noto Sans TC', '微軟正黑體', 'Microsoft JhengHei', sans-serif;\n// 字體大小\n$font-size-xl: #{calc(36 / 16) * 1}rem; // Banner(font-size-xl): 24-28px\n$font-size-lg: #{calc(24 / 16) * 1}rem; // 標題(font-size-lg): 22-26px\n$font-size-md: #{calc(16 / 16) * 1}rem; // 內容(font-size-md): 16-18px\n$font-size-sm: #{calc(15 / 16) * 1}rem; // 導覽或按鈕(font-size-sm): 14-16px\n$font-size-xs: #{calc(14 / 16) * 1}rem; // 次要或註解(font-size-xs): 14-16px\n\n//--------------------------------------------\n// 高度margin-bottom: $gap-xs;\n$item-min-height-sm: 15rem;\n$item-min-height-md: 20rem;\n\n// 空間\n$gap-xs: #{calc(16 / 16) * 1}rem;\n$gap-sm: #{calc(20 / 16) * 1}rem;\n$gap-md: #{calc(24 / 16) * 1}rem;\n$gap-lg: #{calc(30 / 16) * 1}rem;\n$gap-xl: #{calc(50 / 16) * 1}rem;\n\n//--------------------------------------------\n// 斷點 (Breakpoints)\n$breakpoint-xxl: 1400px;\n$breakpoint-xl: 1200px; // 大桌機 1200px以上\n$breakpoint-lg: 992px; // 小桌機 992-1199px\n$breakpoint-md: 768px; // 平板 768-991px\n$breakpoint-sm: 576px; // 手機 小於等於 576px\n$breakpoint-xs: 0px;\n\n// 容器 (Containers)\n$container-max-width-xxl: 1320px;\n$container-max-width-xl: 1140px;\n$container-max-width-lg: 960px;\n$container-max-width-md: 720px;\n$container-max-width-sm: 540px;\n$container-max-width-xs: 100%;\n\n// 用mixin帶入斷點變數\n@mixin media-query($size) {\n  @if $size == 'xxl' {\n    @media all and (min-width: $breakpoint-xxl) {\n      @content;\n    }\n  } @else if $size == 'xl' {\n    @media all and (min-width: $breakpoint-xl) {\n      @content;\n    }\n  } @else if $size == 'lg' {\n    @media all and (min-width: $breakpoint-lg) {\n      @content;\n    }\n  } @else if $size == 'md' {\n    @media all and (min-width: $breakpoint-md) {\n      @content;\n    }\n  } @else if $size == 'sm' {\n    @media all and (min-width: $breakpoint-sm) {\n      @content;\n    }\n  } @else if $size == 'xs' {\n    @media all and (min-width: $breakpoint-xs) {\n      @content;\n    }\n  }\n}\n//--------------------------------------------\n","header {\r\n  background: var(--bg-transparent);\r\n  box-shadow: 2px 2px 2px 1px rgba(83, 83, 83, 0.1);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 99;\r\n  &.active {\r\n    background: #000;\r\n  }\r\n}\r\n\r\nheader nav {\r\n  @include flexBetween;\r\n  .logo {\r\n    padding: 16px 0;\r\n  }\r\n  ul {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 61px;\r\n    width: 100%;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    display: none;\r\n    transition: all ease 1s;\r\n    &.active {\r\n      display: block;\r\n      opacity: 100%;\r\n    }\r\n    li {\r\n      text-align: center;\r\n      background: var(--bg-transparent);\r\n      width: 100%;\r\n      &.active a {\r\n        color: var(--secondary);\r\n      }\r\n      a {\r\n        display: block;\r\n        color: $color-white;\r\n        font-size: $font-size-md;\r\n        padding: $gap-sm 0;\r\n      }\r\n    }\r\n    @include media-query('md') {\r\n      display: flex;\r\n      position: relative;\r\n      left: auto;\r\n      top: auto;\r\n      width: auto;\r\n      opacity: 100%;\r\n      li {\r\n        text-wrap: nowrap;\r\n        background: none;\r\n        a {\r\n          padding: 0 $gap-sm;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  button {\r\n    display: block;\r\n    color: $color-white;\r\n    background: transparent;\r\n    font-size: 1.5rem;\r\n    border: 0;\r\n    cursor: pointer;\r\n    &:hover {\r\n      transform: scale(0.9);\r\n    }\r\n    @include media-query('md') {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n","@mixin hide-text {\n  text-indent: 110%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n@mixin img-content-box {\n  //圖片盒子\n  height: $item-min-height-sm;\n  position: relative;\n  background: rgba($color: #000000, $alpha: 0.2);\n  .content {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n  }\n  img {\n    width: 100%;\n    height: 100%;\n    background-position: center center;\n    object-fit: cover;\n    background-repeat: 0;\n    position: absolute;\n    z-index: 0;\n  }\n}\n\n@mixin bgbox($url) {\n  //背景圖片設定\n  background-image: url($url);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: $item-min-height-sm;\n  .container {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    height: 100%;\n  }\n}\n\n@mixin flexCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@mixin flexBetween {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n//--------------------------------------------\n","//-----------------------Banner\r\n$bannerHeight: 420px;\r\n.banner {\r\n  @include bgbox('../assets/images/header_mobile.png');\r\n  min-height: $bannerHeight;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  background-color: #100100;\r\n  @include media-query('md') {\r\n    @include bgbox('../assets/images/header_desktop.png');\r\n    background-size: cover;\r\n    background-position: 50% 65%;\r\n  }\r\n}\r\n\r\n.banner {\r\n  @include flexCenter;\r\n  .content {\r\n    display: inline-block;\r\n    background: rgba($color: #000000, $alpha: 0.4);\r\n    color: $color-white;\r\n    width: 100%;\r\n    margin: 0.75rem;\r\n    text-align: center;\r\n    padding: 20px 42px;\r\n    h2 {\r\n      font-size: $font-size-xl;\r\n      text-wrap: nowrap;\r\n    }\r\n    @include media-query('md') {\r\n      width: auto;\r\n      margin: 0rem;\r\n      h2 br {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.topOffset {\r\n  margin-top: $bannerHeight;\r\n}\r\n","footer {\r\n  @include flexCenter;\r\n  .container {\r\n    @include flexBetween;\r\n    padding: $gap-md 0;\r\n  }\r\n  .about,\r\n  .contact {\r\n    margin-bottom: 30px;\r\n    @include media-query('lg') {\r\n      margin-bottom: 0px;\r\n    }\r\n  }\r\n}\r\n\r\nfooter .contact {\r\n  ul {\r\n    list-style-position: inside;\r\n    list-style-type: disc;\r\n    li {\r\n      a {\r\n        color: var(--primary);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfooter .share {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: end;\r\n  .socialIcons {\r\n    display: flex;\r\n    justify-content: end;\r\n    a {\r\n      display: block;\r\n      font-size: 2rem;\r\n      margin-right: 12px;\r\n    }\r\n  }\r\n}\r\n","form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: baseline;\r\n  label {\r\n    font-size: $font-size-xs;\r\n    display: inline-block;\r\n    line-height: 1.5;\r\n  }\r\n  input[type='text'],\r\n  input[type='tel'],\r\n  input[type='email'],\r\n  input[type='number'],\r\n  input[type='password'] {\r\n    width: 100%;\r\n    padding: 0.5rem 1rem;\r\n    border: 1px solid #cccccc;\r\n    font-size: $font-size-sm;\r\n    margin-bottom: 1rem;\r\n  }\r\n  input[type='radio'] {\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n",".btn {\r\n  font-size: $font-size-sm;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  outline: 0;\r\n  padding: 6px 20px;\r\n  border-radius: 3px;\r\n  &:hover {\r\n    opacity: 0.7;\r\n  }\r\n  &:active {\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n.btn-secondary {\r\n  border: 0;\r\n  background: rgba(0, 0, 0, 0.3);\r\n  color: $color-white;\r\n}\r\n.btn-primary {\r\n  border: 0;\r\n  background: var(--secondary);\r\n  color: $color-white;\r\n}\r\n","//-----------------------特色\r\nsection.feature {\r\n  padding: $gap-xl 0;\r\n  text-align: center;\r\n  h3 {\r\n    margin-bottom: $gap-lg;\r\n    line-height: 1.75;\r\n    position: relative;\r\n    @include media-query('md') {\r\n      &::before,\r\n      &::after {\r\n        content: '';\r\n        display: block;\r\n        position: absolute;\r\n        height: 1px;\r\n        background-color: var(--primary);\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n      }\r\n      &::before {\r\n        width: 9rem;\r\n        left: 8%;\r\n      }\r\n      &::after {\r\n        width: 9rem;\r\n        right: 8%;\r\n      }\r\n    }\r\n    @include media-query('lg') {\r\n      &::before {\r\n        left: 23%;\r\n      }\r\n      &::after {\r\n        right: 23%;\r\n      }\r\n    }\r\n  }\r\n  div {\r\n    max-width: 100%;\r\n    margin: 20px auto;\r\n    @include media-query('lg') {\r\n      margin: 15px auto;\r\n    }\r\n    img {\r\n      width: 200px;\r\n      object-fit: cover;\r\n    }\r\n    h5 {\r\n      font-size: #{calc(18 / 16)} rem;\r\n      margin: 10px 0;\r\n    }\r\n    p {\r\n      display: block;\r\n      text-align: left;\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n}\r\n\r\n//-----------------------主廚\r\nsection.chef {\r\n  background-color: var(--bg-secondary);\r\n  color: $color-white;\r\n  * {\r\n    padding: 0;\r\n  }\r\n  .container {\r\n    min-height: 100%;\r\n    margin: 0 auto;\r\n    min-width: 100%;\r\n    .imgWrapper {\r\n      padding: 0;\r\n      background-image: url('../assets/images/main_chef_brown.png');\r\n      background-repeat: no-repeat;\r\n      background-size: cover;\r\n      height: 460px;\r\n    }\r\n    .content {\r\n      padding: $gap-xl;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      h5 {\r\n        line-height: 0.5;\r\n      }\r\n    }\r\n  }\r\n  @include media-query('md') {\r\n    height: 460px;\r\n    .container {\r\n      display: flex;\r\n      justify-content: center;\r\n      min-width: auto;\r\n      .content {\r\n        padding: $gap-md;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n//-----------------------感想\r\nsection.recommand {\r\n  padding: $gap-xl 0;\r\n  h3 {\r\n    margin-bottom: $gap-lg;\r\n    line-height: 1.75;\r\n    text-align: center;\r\n  }\r\n  ul {\r\n    @include flexCenter;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    li {\r\n      @include flexCenter;\r\n      text-align: left;\r\n      align-items: start;\r\n    }\r\n  }\r\n  .msg {\r\n    h6 {\r\n      font-size: 1.2rem;\r\n    }\r\n    p {\r\n      margin-bottom: $gap-xs;\r\n    }\r\n    p:last-child {\r\n      text-align: right;\r\n      opacity: 0.75;\r\n    }\r\n  }\r\n  img {\r\n    max-width: 67px;\r\n    object-fit: cover;\r\n  }\r\n}\r\n//-----------------------地圖\r\nsection.map {\r\n  padding: $gap-xl 0;\r\n  background: rgba(250, 250, 250, 0.7);\r\n  .row {\r\n    margin: 0 auto;\r\n    padding: 0;\r\n  }\r\n  h3 {\r\n    text-align: center;\r\n    margin-bottom: $gap-lg;\r\n  }\r\n  .container {\r\n    // @include marker(3, 3);\r\n    img {\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n    form {\r\n      input[type='radio'] {\r\n        margin-top: 0.5rem;\r\n      }\r\n      .radioGroup {\r\n        label {\r\n          margin-right: 1.5rem;\r\n          margin-bottom: 1rem;\r\n          cursor: pointer;\r\n        }\r\n      }\r\n      .col-12 {\r\n        padding: 0;\r\n        &:last-child {\r\n          display: flex;\r\n          justify-content: end;\r\n          input[type='submit'] {\r\n            margin-left: 0.75rem;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","main.menu {\r\n  padding: 0.25rem 0;\r\n  .topOffset {\r\n    margin: 2rem 0 0 0;\r\n  }\r\n  @include media-query('md') {\r\n    padding: 1rem 0;\r\n  }\r\n}\r\n\r\n// 線上訂購美食\r\nmain.menu {\r\n  h5 {\r\n    font-size: 1.2rem;\r\n    i {\r\n      margin-right: 0.5rem;\r\n      font-size: 2rem;\r\n    }\r\n  }\r\n  ul.categoryList {\r\n    li {\r\n      text-indent: 0.5rem;\r\n      border-bottom: 1px solid var(--primary);\r\n      padding: 0.5rem 0;\r\n      a {\r\n        width: 100%;\r\n        display: block;\r\n        color: var(--primary);\r\n      }\r\n      &.active {\r\n        background: var(--primary);\r\n        a {\r\n          color: $color-white;\r\n        }\r\n      }\r\n      &:hover {\r\n        background: rgba(61, 17, 1, 0.6);\r\n        a {\r\n          color: $color-white;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// 搜尋框+結帳去\r\nmain.menu .operation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: end;\r\n  margin-bottom: 0.75rem;\r\n  @include media-query('md') {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  // 結帳去\r\n  .gocart {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    color: var(--primary);\r\n    font-size: $font-size-xs;\r\n    &:hover i {\r\n      opacity: 0.8;\r\n    }\r\n    &:active i {\r\n      transform: scale(0.9);\r\n    }\r\n    p {\r\n      padding-right: 0.5rem;\r\n      border-right: 2px solid var(--primary);\r\n    }\r\n    i {\r\n      font-size: 1.75rem;\r\n      margin-left: 0.5rem;\r\n      position: relative;\r\n      span {\r\n        font-size: 0.6rem;\r\n        position: absolute;\r\n        top: -0.5rem;\r\n        right: -0.5rem;\r\n        color: $color-white;\r\n        background: var(--secondary);\r\n        padding: 0.25rem 0.4rem;\r\n        border-radius: 50%;\r\n      }\r\n    }\r\n  }\r\n  // 搜尋框\r\n  .searchbar {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--primary);\r\n    margin: $gap-md 0;\r\n    width: 100%;\r\n    input {\r\n      width: 100%;\r\n      margin: 0 0.25rem;\r\n      outline: 0;\r\n    }\r\n    a {\r\n      padding: 0.5rem 0.75rem;\r\n      &:active {\r\n        transform: scale(0.9);\r\n      }\r\n    }\r\n\r\n    @include media-query('md') {\r\n      max-width: 300px;\r\n      margin: 0;\r\n    }\r\n    @include media-query('lg') {\r\n      max-width: 460px;\r\n    }\r\n  }\r\n}\r\n\r\n// 產品清單\r\n// 排版\r\n.productList {\r\n  // margin: 0 auto;  // 這一行不要加喔\r\n  li {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n// 產品卡片\r\n.productList .productItem {\r\n  box-shadow: 0px 1px 2px rgba(127, 127, 127, 0.6);\r\n  .imgWrapper {\r\n    position: relative;\r\n    background: linear-gradient(\r\n      135deg,\r\n      #a8a9ad,\r\n      #cbcccd,\r\n      #d7d7d8,\r\n      #b4b5b8,\r\n      #c0c0c3,\r\n      #e3e3e3,\r\n      #a8a9ad\r\n    );\r\n    height: 120px;\r\n    img {\r\n      height: 100%;\r\n      object-fit: cover;\r\n    }\r\n    button {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      background: none;\r\n      border: 0;\r\n      padding: 0.5rem;\r\n      font-size: 1.5rem;\r\n      color: $color-white;\r\n      cursor: pointer;\r\n      &:active {\r\n        transform: scale(0.9);\r\n      }\r\n    }\r\n  }\r\n  .contentWrapper {\r\n    padding: 0.6rem;\r\n    text-align: center;\r\n    h6 {\r\n      margin-bottom: 0;\r\n      font-size: 1.3rem;\r\n    }\r\n    p {\r\n      font-size: $font-size-sm;\r\n      line-height: 1;\r\n      padding-bottom: 0.75rem;\r\n      position: relative;\r\n      display: block;\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        width: 80px;\r\n        height: 1.5px;\r\n        background: var(--primary);\r\n        top: 100%;\r\n        left: 50%; // 將左邊的定位設為 50%\r\n        transform: translateX(-50%); // 將元素水平居中\r\n      }\r\n    }\r\n    span {\r\n      font-size: $font-size-md;\r\n      padding: 0;\r\n      display: inline-block;\r\n      margin: 1rem 0 0.5rem 0;\r\n    }\r\n    button {\r\n      display: block;\r\n      border: 1px solid var(--secondary);\r\n      border-radius: 3px;\r\n      padding: 0.5rem 0;\r\n      width: 100%;\r\n      color: var(--secondary);\r\n      background: none;\r\n      cursor: pointer;\r\n      &:hover {\r\n        background: var(--secondary);\r\n        i {\r\n          color: #fff;\r\n        }\r\n      }\r\n      &:active {\r\n        background: var(--secondary);\r\n        i {\r\n          transform: scale(0.85);\r\n          color: #fff;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// 產品卡片-緞帶效果\r\n.productList .productItem {\r\n  &.trend .ribbonposition {\r\n    opacity: 100%;\r\n  }\r\n  .ribbonposition {\r\n    position: absolute;\r\n    z-index: 5;\r\n    right: 4px;\r\n    top: -8px;\r\n    opacity: 0;\r\n    .ribbonbox {\r\n      position: relative;\r\n      width: 200px;\r\n      height: 200px;\r\n      overflow: hidden;\r\n      &::after,\r\n      &::before {\r\n        content: '';\r\n        position: absolute;\r\n        display: block;\r\n        border: #078f6d solid 5px;\r\n        z-index: 2;\r\n      }\r\n      &::after {\r\n        top: 34%;\r\n        left: 95%;\r\n        transform: translateY(-50%);\r\n      }\r\n      &::before {\r\n        top: 0%;\r\n        left: 65%;\r\n        transform: translateX(-50%);\r\n      }\r\n    }\r\n    .ribbon {\r\n      width: 100px;\r\n      padding: 2px 0;\r\n      font-size: $font-size-sm;\r\n      background-color: #00cc99;\r\n      text-align: center;\r\n      color: #fff;\r\n      transform: rotate(45deg);\r\n      position: absolute;\r\n      right: -20px;\r\n      top: 15px;\r\n      z-index: 3;\r\n    }\r\n  }\r\n}\r\n","//-----------------------slogan\r\n.slogan {\r\n  &.topOffset {\r\n    padding-top: 50px;\r\n  }\r\n  margin-bottom: 35px;\r\n\r\n  img {\r\n    width: 240px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  p {\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n\r\n//-----------------------Auth表單\r\n\r\nform .wrap {\r\n  margin: 0 auto;\r\n  border-top: 3px solid var(--secondary);\r\n  padding: 15px;\r\n  box-shadow: 0px 1px 2px rgba(127, 127, 127, 0.6);\r\n  margin-bottom: 50px;\r\n  h3 {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\nform.login {\r\n  height: 0;\r\n  opacity: 0;\r\n  .btns {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    padding: 0 15px;\r\n    margin-top: $gap-lg;\r\n    .btn {\r\n      padding-right: 1rem;\r\n      padding-left: 1rem;\r\n      flex: 1;\r\n    }\r\n  }\r\n  &.active {\r\n    height: auto;\r\n    opacity: 100%;\r\n  }\r\n}\r\nform.signup {\r\n  height: 0;\r\n  opacity: 0;\r\n  margin-bottom: $gap-lg;\r\n  .terms {\r\n    h6 {\r\n      font-size: $font-size-lg;\r\n    }\r\n  }\r\n  a {\r\n    display: block;\r\n  }\r\n  button {\r\n    width: 40%;\r\n    display: block;\r\n    margin: 20px auto;\r\n    @include media-query('lg') {\r\n      float: right;\r\n    }\r\n  }\r\n\r\n  &.active {\r\n    height: auto;\r\n    opacity: 100%;\r\n  }\r\n}\r\n.input-icon-box {\r\n  position: relative;\r\n  i {\r\n    position: absolute;\r\n    top: 50%;\r\n    translate: 50% -100%;\r\n    opacity: 0.75;\r\n  }\r\n  input {\r\n    text-indent: 1rem;\r\n  }\r\n}\r\n",".notFound {\r\n  @include flexCenter;\r\n  flex-direction: column;\r\n  padding: $gap-xl;\r\n  border: 2px solid #cccccc;\r\n  margin-bottom: $gap-xl;\r\n  h2 {\r\n    font-size: $font-size-xl;\r\n    color: $color-danger;\r\n  }\r\n  p {\r\n    font-size: $font-size-lg;\r\n    letter-spacing: 0.25rem;\r\n    font-weight: bold;\r\n  }\r\n  &.topOffset {\r\n    margin-top: 100px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/getUrl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/html/pages/Auth.ejs":
/*!*********************************!*\
  !*** ./src/html/pages/Auth.ejs ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../js/pages/auth.js */ "./src/js/pages/auth.js?96ba"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/logo_l.png */ "./src/assets/images/logo_l.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<div class=\"banner\">\r\n  <div class=\"content\">\r\n    <h2>咬一口<br>就無法忘懷的漢堡</h2>\r\n    <p>七夕絕對無法錯過的好滋味<br>\r\n      🍴六角大漢堡🍴</p>\r\n  </div>\r\n</div>\r\n\r\n  <" + "script async src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"><" + "/script>\r\n  <div class=\"slogan topOffset\">\r\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\r\n    <p class=\"boldtext\">享受美食好味道</p>\r\n  </div>\r\n\r\n  <main class=\"container auth\">\r\n    <!-- 登入 -->\r\n    <form class=\"row login active\" id=\"formLogin\">\r\n      <div class=\"col-11 col-md-10 col-lg-4 wrap\">\r\n        <h3>LOGIN</h3>\r\n        <label for=\"userEmail\" class=\"required\">\r\n          Email Address</label>\r\n        <div class=\"input-icon-box\">\r\n          <i class=\"fa-solid fa-envelope\"></i>\r\n          <input type=\"email\" id=\"userEmail\" placeholder=\"請輸入您的電子信箱\" required>\r\n        </div>\r\n        <label for=\"userPwd\" class=\"required\">\r\n          Password</label>\r\n        <div class=\"input-icon-box\">\r\n          <i class=\"fa-solid fa-lock\"></i>\r\n          <input type=\"password\" id=\"userPwd\" placeholder=\"請輸入您的密碼\" required>\r\n        </div>\r\n\r\n        <a href=\"#\" id='forgetPwd'>忘記密碼?</a>\r\n\r\n        <div class=\"row btns\">\r\n          <button class=\"btn btn-secondary\" id='goSignup'>\r\n            註冊 </button>\r\n          <button type='submit' id='loginBtn' class=\"btn btn-primary\">\r\n            登入\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </form>\r\n\r\n    <!-- 註冊 -->\r\n    <form class=\"row signup\" id=\"formSignup\">\r\n      <div class='col-11 col-md-10 col-lg-8  wrap'>\r\n        <h3>REGISTER</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-lg-6 terms\">\r\n            <h6>就是這樣條款：</h6>\r\n            <p>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit\r\n              elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed,\r\n              ultricies sapien...</p>\r\n          </div>\r\n          <div class=\"col-12 col-lg-6\">\r\n            <label for=\"email\" class=\"required\">\r\n              Email Address</label>\r\n            <div class=\"input-icon-box\">\r\n              <i class=\"fa-solid fa-envelope\"></i>\r\n              <input type=\"email\" name=\"email\" id=\"email\" class=\"email\" placeholder=\"請輸入您的電子信箱\" required>\r\n            </div>\r\n            <label for=\"password\" class=\"required\">\r\n              Password</label>\r\n            <div class=\"input-icon-box\">\r\n              <i class=\"fa-solid fa-lock\"></i>\r\n              <input type=\"password\" name=\"password\" id=\"password\" class=\"password\" placeholder=\"請輸入您的密碼\" required>\r\n            </div>\r\n            <div class=\"input-icon-box\">\r\n              <i class=\"fa-solid fa-lock\"></i>\r\n              <input type=\"password\" name=\"password\" id=\"checkPassword\" class=\"password\" placeholder=\"再次確認密碼\" required>\r\n            </div>\r\n            <a href=\"#/auth\">已經有帳號了?</a>\r\n            <button value=\"註冊\" class=\"btn btn-primary\" id='goLogin'>\r\n              註冊 </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  </main>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/pages/Home.ejs":
/*!*********************************!*\
  !*** ./src/html/pages/Home.ejs ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/feature_1.png */ "./src/assets/images/feature_1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/feature_2.png */ "./src/assets/images/feature_2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/feature_3.png */ "./src/assets/images/feature_3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/avatar_1.png */ "./src/assets/images/avatar_1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/avatar_2.png */ "./src/assets/images/avatar_2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/avatar_3.png */ "./src/assets/images/avatar_3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/Map.png */ "./src/assets/images/Map.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var code = "<div class=\"banner\">\r\n  <div class=\"content\">\r\n    <h2>咬一口<br>就無法忘懷的漢堡</h2>\r\n    <p>七夕絕對無法錯過的好滋味<br>\r\n      🍴六角大漢堡🍴</p>\r\n  </div>\r\n</div>\r\n  <section class=\"container feature topOffset\">\r\n    <h3>客人總是在詢問<br> 這麼好吃的秘訣是什麼</h3>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-4\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"台灣本土蔬菜\">\r\n        <h5>台灣本土蔬菜</h5>\r\n        <p>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit\r\n          eget elit facilisis tristique. Nam vel iaculis mauris.</p>\r\n      </div>\r\n      <div class=\"col-12 col-md-4\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"專業米其林廚師\">\r\n        <h5>專業米其林廚師</h5>\r\n        <p>Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu\r\n          bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.</p>\r\n      </div>\r\n      <div class=\"col-12 col-md-4\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"對於專業不能退讓\">\r\n        <h5>對於專業不能退讓</h5>\r\n        <p>Fusce rhoncus porttitor velit, bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis,\r\n          facilisis accumsan turpis.</p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"chef\">\r\n    <div class=\"row container \">\r\n      <div class=\"col-12 col-md-6 imgWrapper\">\r\n      </div>\r\n      <div class='col-12 col-md-6 content '>\r\n        <h5>今日主廚：帕金森、梅在帕</h5>\r\n        <p>Tody Chef: Plum in Shock</p><br>\r\n        <p>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit\r\n          elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies\r\n          sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed\r\n          ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula\r\n          eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a\r\n          molestie bibendum.</p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"container recommand\">\r\n    <h3>聽聽別人的感想</h3>\r\n    <ul class='row'>\r\n      <li class='col-12 col-md-4'>\r\n        <div class=\"row\">\r\n          <div class=\"col \">\r\n            <img src=\" " + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-9 col-md-9 msg\">\r\n            <h6>高雄一口吃</h6>\r\n            <p>自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。</p>\r\n            <p>-- 產品經理</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class='col-12 col-md-4'>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <img src=\" " + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-9 col-md-9 msg\">\r\n            <h6>廟口小霸王</h6>\r\n            <p>自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。</p>\r\n            <p>-- 金身道士</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class='col-12 col-md-4'>\r\n        <div class=\"row \">\r\n          <div class=\"col \">\r\n            <img src=\" " + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-9 col-md-9 msg\">\r\n            <h6>春天也來了</h6>\r\n            <p \">自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。</p>\r\n          <p >-- 美麗萬分</p>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</section>\r\n\r\n<section class=\" map\">\r\n            <div class=\"row container\">\r\n              <div class=\"col-12\">\r\n                <h3>我們的位置不太夠坐<br>要不要先訂位呢？</h3>\r\n              </div>\r\n\r\n              <div class=\"col-12 col-md-6\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\r\n              </div>\r\n\r\n\r\n              <form class=\"col-12 col-md-6\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\"> <label for=\"name\">姓名</label></div>\r\n                  <div class=\"col-12\"> <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"六角講師吃尾牙\" required></div>\r\n\r\n                  <div class=\"col-12\"> <label for=\"tel\">電話</label></div>\r\n                  <div class=\"col-12\"> <input type=\"tel\" name=\"tel\" id=\"tel\" placeholder=\"02-1234567\" required></div>\r\n\r\n                  <div class=\"col-12\"> <label for=\"email\">信箱</label></div>\r\n                  <div class=\"col-12\"> <input type=\"email\" name=\"email\" id=\"email\" class=\"email\"\r\n                      placeholder=\"example@mail.com\" required></div>\r\n\r\n                  <div class=\"col-12\"> <label for=\"people\">人數</label></div>\r\n                  <div class=\"col-12\"> <input type=\"number\" name=\"people\" id=\"people\" class=\"number\" placeholder=\"\"\r\n                      required></div>\r\n\r\n                  <div class=\"col-12\"> <label for=\"vergan\">是否需要素食</label></div>\r\n                  <div class=\"col-12 radioGroup\">\r\n                    <label>是\r\n                      <input type=\"radio\" name=\"vergan\" value=\"yes\" required>\r\n                    </label>\r\n                    <label>否\r\n                      <input type=\"radio\" name=\"vergan\" value=\"no\" required>\r\n                    </label>\r\n                  </div>\r\n\r\n                  <div class=\"col-12\">\r\n                    <input type=\"reset\" value=\"清空\" id=\"cancel\" class=\"btn btn-secondary\">\r\n                    <input type=\"submit\" value=\"送出\" id=\"submit\" class=\"btn btn-primary \">\r\n                  </div>\r\n\r\n                </div>\r\n              </form>\r\n\r\n            </div>\r\n  </section>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/pages/Menu.ejs":
/*!*********************************!*\
  !*** ./src/html/pages/Menu.ejs ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/product_1.png */ "./src/assets/images/product_1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/product_2.png */ "./src/assets/images/product_2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/product_3.png */ "./src/assets/images/product_3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/product_4.png */ "./src/assets/images/product_4.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_89_0_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<div class=\"banner\">\r\n  <div class=\"content\">\r\n    <h2>咬一口<br>就無法忘懷的漢堡</h2>\r\n    <p>七夕絕對無法錯過的好滋味<br>\r\n      🍴六角大漢堡🍴</p>\r\n  </div>\r\n</div>\r\n  <main class=\"topOffset menu container \">\r\n    <div class=\"row topOffset\">\r\n      <div class=\"col-12 col-md-4 col-lg-3\">\r\n        <h5><i class=\"fa-solid fa-leaf\" style=\"color: #3D1101;\">\r\n          </i>線上訂購美食</h5>\r\n        <ul class='categoryList'>\r\n          <li class='active'><a href=\"#/menu\">全部 (23)</a></li>\r\n          <li><a href=\"#/menu\">只愛吃薯條 (18)</a></li>\r\n          <li><a href=\"#/menu\">加熱就可食 (1)</a></li>\r\n          <li><a href=\"#/menu\">不敗漢堡系列 (4)</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-12 col-md-8 col-lg-9\">\r\n        <div class=\"operation\">\r\n          <form class=\"searchbar\">\r\n            <input type=\"text\" placeholder=\"今天我想來點...\">\r\n            <a href=\"#/menu\"><i class=\"fa-solid fa-magnifying-glass\" style=\"color: #ffffff;\"></i>\r\n          </form>\r\n          <a href=\"#/menu\" class=\"gocart\">\r\n            <p>結帳去</p>\r\n            <i class=\"fa-solid fa-cart-shopping\">\r\n              <span>8</span>\r\n            </i>\r\n          </a>\r\n        </div>\r\n        <ul class=\"productList row \">\r\n\r\n          <li class='col-12 col-md-6 col-lg-4'>\r\n            <div class=\"productItem trend\">\r\n              <div class=\"imgWrapper\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\">\r\n                <button>\r\n                  <i class=\"fa-regular fa-heart\"></i>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"contentWrapper\">\r\n                <h6>經典漢堡套餐</h6>\r\n                <p>Classic Hamburger Package</p>\r\n                <span>$120</span>\r\n                <button><i class=\"fa-solid fa-cart-shopping\"> 加入購物車</i></button>\r\n              </div>\r\n              <div class=\"ribbonposition\">\r\n                <div class=\"ribbonbox\">\r\n                  <div class=\"ribbon\">熱銷美食</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class='col-12 col-md-6 col-lg-4'>\r\n            <div class=\"productItem trend\">\r\n              <div class=\"imgWrapper\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\r\n                <button>\r\n                  <i class=\"fa-regular fa-heart\"></i>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"contentWrapper\">\r\n                <h6>英俊香腸</h6>\r\n                <p>Handsome Sausage</p>\r\n                <span>$1,024</span>\r\n                <button><i class=\"fa-solid fa-cart-shopping\"> 加入購物車</i></button>\r\n              </div>\r\n              <div class=\"ribbonposition\">\r\n                <div class=\"ribbonbox\">\r\n                  <div class=\"ribbon\">熱銷美食</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class='col-12 col-md-6 col-lg-4'>\r\n            <div class=\"productItem trend\">\r\n              <div class=\"imgWrapper\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\r\n                <button>\r\n                  <i class=\"fa-regular fa-heart\"></i>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"contentWrapper\">\r\n                <h6>漢堡兄弟</h6>\r\n                <p>Hamburg Brothers</p>\r\n                <span>$792</span>\r\n                <button><i class=\"fa-solid fa-cart-shopping\"> 加入購物車</i></button>\r\n              </div>\r\n              <div class=\"ribbonposition\">\r\n                <div class=\"ribbonbox\">\r\n                  <div class=\"ribbon\">熱銷美食</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class='col-12 col-md-6 col-lg-4'>\r\n            <div class=\"productItem trend\">\r\n              <div class=\"imgWrapper\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\r\n                <button>\r\n                  <i class=\"fa-regular fa-heart\"></i>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"contentWrapper\">\r\n                <h6>完美願望</h6>\r\n                <p>Dragon Ball Package</p>\r\n                <span>$999,999</span>\r\n                <button><i class=\"fa-solid fa-cart-shopping\"> 加入購物車</i></button>\r\n              </div>\r\n              <div class=\"ribbonposition\">\r\n                <div class=\"ribbonbox\">\r\n                  <div class=\"ribbon\">熱銷美食</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </main>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/pages/NotFound.ejs":
/*!*************************************!*\
  !*** ./src/html/pages/NotFound.ejs ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<main class='container'>\r\n  <div class=\"title notFound topOffset\">\r\n    <h2>\r\n      <i class=\"fa-solid fa-triangle-exclamation\"></i>\r\n      查無此頁\r\n    </h2>\r\n    <p>Not Found</p>\r\n  </div>\r\n</main>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/.pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader/dist/runtime/getUrl.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   pathToRegexp: () => (/* binding */ pathToRegexp),
/* harmony export */   regexpToFunction: () => (/* binding */ regexpToFunction),
/* harmony export */   tokensToFunction: () => (/* binding */ tokensToFunction),
/* harmony export */   tokensToRegexp: () => (/* binding */ tokensToRegexp)
/* harmony export */ });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: "",
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    }
                    else {
                        route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                    }
                }
                else {
                    if (token.modifier === "+" || token.modifier === "*") {
                        route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                    }
                    else {
                        route += "(".concat(token.pattern, ")").concat(token.modifier);
                    }
                }
            }
            else {
                route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
        }
    }
    if (end) {
        if (!strict)
            route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1
            : endToken === undefined;
        if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/stylesheet/all.scss":
/*!*********************************!*\
  !*** ./src/stylesheet/all.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_70_0_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_33_webpack_5_89_0_node_modules_postcss_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.70.0_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!../../node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.33_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js!./all.scss */ "./node_modules/.pnpm/css-loader@6.9.0_webpack@5.89.0/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/sass-loader@13.3.3_sass@1.70.0_webpack@5.89.0/node_modules/sass-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.4_postcss@8.4.33_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js!./src/stylesheet/all.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_3_3_4_webpack_5_89_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_70_0_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_33_webpack_5_89_0_node_modules_postcss_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_70_0_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_33_webpack_5_89_0_node_modules_postcss_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_70_0_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_33_webpack_5_89_0_node_modules_postcss_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_9_0_webpack_5_89_0_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_sass_loader_13_3_3_sass_1_70_0_webpack_5_89_0_node_modules_sass_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_4_postcss_8_4_33_webpack_5_89_0_node_modules_postcss_loader_dist_cjs_js_all_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/pages/auth.js?96ba":
/*!******************************!*\
  !*** ./src/js/pages/auth.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/auth.js";

/***/ }),

/***/ "./src/assets/images/Map.png":
/*!***********************************!*\
  !*** ./src/assets/images/Map.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Map.png";

/***/ }),

/***/ "./src/assets/images/avatar_1.png":
/*!****************************************!*\
  !*** ./src/assets/images/avatar_1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/avatar_1.png";

/***/ }),

/***/ "./src/assets/images/avatar_2.png":
/*!****************************************!*\
  !*** ./src/assets/images/avatar_2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/avatar_2.png";

/***/ }),

/***/ "./src/assets/images/avatar_3.png":
/*!****************************************!*\
  !*** ./src/assets/images/avatar_3.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/avatar_3.png";

/***/ }),

/***/ "./src/assets/images/feature_1.png":
/*!*****************************************!*\
  !*** ./src/assets/images/feature_1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/feature_1.png";

/***/ }),

/***/ "./src/assets/images/feature_2.png":
/*!*****************************************!*\
  !*** ./src/assets/images/feature_2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/feature_2.png";

/***/ }),

/***/ "./src/assets/images/feature_3.png":
/*!*****************************************!*\
  !*** ./src/assets/images/feature_3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/feature_3.png";

/***/ }),

/***/ "./src/assets/images/header_desktop.png":
/*!**********************************************!*\
  !*** ./src/assets/images/header_desktop.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/header_desktop.png";

/***/ }),

/***/ "./src/assets/images/header_mobile.png":
/*!*********************************************!*\
  !*** ./src/assets/images/header_mobile.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/header_mobile.png";

/***/ }),

/***/ "./src/assets/images/logo_l.png":
/*!**************************************!*\
  !*** ./src/assets/images/logo_l.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/logo_l.png";

/***/ }),

/***/ "./src/assets/images/main_chef_brown.png":
/*!***********************************************!*\
  !*** ./src/assets/images/main_chef_brown.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/main_chef_brown.png";

/***/ }),

/***/ "./src/assets/images/product_1.png":
/*!*****************************************!*\
  !*** ./src/assets/images/product_1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_1.png";

/***/ }),

/***/ "./src/assets/images/product_2.png":
/*!*****************************************!*\
  !*** ./src/assets/images/product_2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_2.png";

/***/ }),

/***/ "./src/assets/images/product_3.png":
/*!*****************************************!*\
  !*** ./src/assets/images/product_3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_3.png";

/***/ }),

/***/ "./src/assets/images/product_4.png":
/*!*****************************************!*\
  !*** ./src/assets/images/product_4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/product_4.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheet_all_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stylesheet/all.scss */ "./src/stylesheet/all.scss");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/js/router.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ "./src/js/components/navbar.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_navbar__WEBPACK_IMPORTED_MODULE_2__);



// 初始化路由
(0,_router__WEBPACK_IMPORTED_MODULE_1__.initRouter)();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map