const formLogin = document.getElementById("formLogin");
const emailortel = document.getElementById("email/sdt");
const passwordE = document.getElementById("password");
const emailortelError = document.getElementById("emailortelEror");
const passwordError = document.getElementById("passwordError");
const LoginError = document.getElementById("LoginError");

formLogin.onsubmit = function(e) {
  e.preventDefault();
  let hasError = false;

  if (!emailortel.value.trim()) {
    emailortelError.style.display = "block";
    hasError = true;
  } else emailortelError.style.display = "none";

  if (!passwordE.value.trim()) {
    passwordError.style.display = "block";
    hasError = true;
  } else passwordError.style.display = "none";

  if (hasError) return;


  const localUsers = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = localUsers.find(u =>
    (u.email === emailortel.value || u.userName === emailortel.value) &&
    u.password === passwordE.value
  );

  if (foundUser) {
    localStorage.setItem("username", foundUser.userName);
    localStorage.setItem("role", "user"); 
    alert("Đăng nhập thành công!");
    window.location.href = "/Html/trangchu.html";
    return;
  }

  fetch("/admin.json")
    .then(res => res.json())
    .then(data => {
      const adminUser = data.find(acc =>
        (acc.username === emailortel.value || acc.email === emailortel.value || acc.tel === emailortel.value)
        && acc.password === passwordE.value
      );

      if (!adminUser) {
        LoginError.style.display = "block";
        return;
      }

      localStorage.setItem("username", adminUser.username);
      localStorage.setItem("role", adminUser.role);
      alert("Đăng nhập thành công với tư cách là Admin!");
      window.location.href = "/Html/trangchu.html";
    });
};
