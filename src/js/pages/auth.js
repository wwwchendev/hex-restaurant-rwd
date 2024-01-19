const auth = () => {
  const formLogin = document.querySelector('#formLogin');
  const formSignup = document.querySelector('#formSignup');

  // 忘記密碼
  document.querySelector('#forgetPwd').addEventListener('click', (e) => {
    e.preventDefault();
    alert('已寄送重置密碼信件至註冊信箱');
  });
  // 前往註冊
  document.querySelector('#goSignup').addEventListener('click', (e) => {
    e.preventDefault();
    formLogin.classList.remove('active');
    formSignup.classList.add('active');
  });
  // 提交登入
  document.querySelector('#formLogin').addEventListener('submit', (event) => {
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
  document.querySelector('#formSignup a').addEventListener('click', (e) => {
    e.preventDefault();
    formSignup.classList.remove('active');
    formLogin.classList.add('active');
  });
  // 提交註冊
  document.querySelector('#formSignup').addEventListener('submit', (event) => {
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

export default auth;
