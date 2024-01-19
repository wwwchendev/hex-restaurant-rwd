// router.js
import { match } from 'path-to-regexp';
// pages
import Home from '../html/pages/Home.ejs';
import Menu from '../html/pages/Menu.ejs';
import Auth from '../html/pages/Auth.ejs';
import NotFound from '../html/pages/NotFound.ejs';
// script
import auth from './pages/auth';

// 定义路由规则
const routes = [
  { path: '/', title: '首頁－六角西餐廳', component: 'Home' },
  { path: '/home', title: '首頁－六角西餐廳', component: 'Home' },
  { path: '/menu', title: '線上訂購美食－六角西餐廳', component: 'Menu' },
  {
    path: '/auth',
    title: '登入－六角西餐廳',
    component: 'Auth',
  },
];

// 更新Active連結樣式
function updateActiveLink(currentPath) {
  // console.log(currentPath);
  const linksArray = document.querySelectorAll('header nav a');

  linksArray.forEach((link) => {
    const linkPath = `/${link.getAttribute('href').split('/')[1]}`;
    const correspondingLi = link.parentElement;
    // console.log(currentPath, linkPath);
    if (correspondingLi) {
      correspondingLi.classList.toggle(
        'active',
        currentPath.split('/')[1] === linkPath.split('/')[1],
      );
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
  function render(container, inner = '') {
    const wrap = document.createElement('div');
    wrap.innerHTML = inner;
    container.appendChild(wrap);
  }

  // 创建或加载对应组件
  switch (component) {
    case 'Home':
      render(mainContainer, Home);
      break;
    case 'Menu':
      render(mainContainer, Menu);
      break;
    case 'Auth':
      render(mainContainer, Auth);
      auth();
      break;
    case 'NotFound':
      render(mainContainer, NotFound);
      break;
    default:
      console.error(`Unknown component: ${component}`);
  }
}

// 路由處理
function handleRouteChange() {
  const currentPath = window.location.hash.substring(1);
  const route = routes.find((item) => match(item.path)(currentPath));
  if (route) {
    document.title = route.title || 'Default Title';
  } else if (route === undefined) {
    document.title = routes.find(() => match('/')).title;
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

export { navigateTo, initRouter };
