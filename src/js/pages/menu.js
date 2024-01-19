const menu = () => {
  // 取得所有的 li 元素
  const categories = document.querySelectorAll('main.menu .categoryList li');

  categories.forEach((item) => {
    item.addEventListener('click', () => {
      // 移除所有 li 的 'active' 類別
      categories.forEach((category) => {
        category.classList.remove('active');
      });

      // 將點擊的 li 加上 'active' 類別
      item.classList.add('active');
    });
  });
};

export default menu;
