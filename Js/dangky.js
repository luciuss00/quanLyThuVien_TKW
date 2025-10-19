const formDangky = document.getElementById("formDangky");
const userNameE = document.getElementById("userName");
const emailE = document.getElementById("email");
const passwordE = document.getElementById("password");
const re_passwordE = document.getElementById("re-password");

const userNameError = document.getElementById("userNameError");
const passwordError = document.getElementById("passwordError");
const re_passwordError = document.getElementById("re-passwordError");
const re_passwordNotsuit = document.getElementById("re-passwordNotsuit");
const emailError = document.getElementById("emailError");

const userLocal = JSON.parse(localStorage.getItem("users")) || [];

formDangky.addEventListener("submit", function(e) {
  e.preventDefault();
  let isValid = true;

  if (!userNameE.value.trim()) {
    userNameError.style.display = "block";
    isValid = false;
  } else {
    userNameError.style.display = "none";
  }

  if (!passwordE.value.trim()) {
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  if (!re_passwordE.value.trim()) {
    re_passwordError.style.display = "block";
    isValid = false;
  } else {
    re_passwordError.style.display = "none";
  }

  if (re_passwordE.value !== passwordE.value) {
    re_passwordNotsuit.style.display = "block";
    isValid = false;
  } else {
    re_passwordNotsuit.style.display = "none";
  }

  if (!emailE.value.trim()) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (isValid) {
    const user = {
      userId: Math.ceil(Math.random() * 100000000),
      userName: userNameE.value,
      email: emailE.value,
      password: passwordE.value
    };

    userLocal.push(user);
    localStorage.setItem("users", JSON.stringify(userLocal));

    alert("Đăng ký thành công!");
    window.location.href = "dangnhap.html";
  }
});
