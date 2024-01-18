const toggleNavBtn = document.querySelector('header button');
const navEl = document.querySelector('header ul');

// 點擊 button 切換 active 類別
toggleNavBtn.addEventListener('click', () => {
  navEl.classList.toggle('active');
});

// 取得所有的 li 元素
const navItems = document.querySelectorAll('header ul li');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (navEl.classList.contains('active')) {
      navEl.classList.remove('active');
    }
  });
});
