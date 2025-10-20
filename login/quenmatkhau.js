const formForgot = document.getElementById("formForgot");
const emailForgot = document.getElementById("emailForgot");
const emailError = document.getElementById("emailError");
const resetSection = document.getElementById("resetSection");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");
const btnReset = document.getElementById("btnReset");

const userLocal = JSON.parse(localStorage.getItem("users")) || [];
var currentUserIndex = -1;


formForgot.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const findUser = userLocal.find((user)=>
        (user.email === emailForgot.value)
    );

  if (!findUser) {
    emailError.style.display = "block";
    resetSection.style.display = "none";
  } else {
    emailError.style.display = "none";
    resetSection.style.display = "block";
    currentUserIndex=userLocal.findIndex((user)=>user.email===emailForgot.value);
  }
});


btnReset.addEventListener("click", function () {
  if (newPassword.value !== confirmPassword.value) {
    passwordError.style.display = "block";
    return;
  }

  passwordError.style.display = "none";
  userLocal[currentUserIndex].password = newPassword.value;

  localStorage.setItem("users", JSON.stringify(userLocal));
  alert("✅ Đặt lại mật khẩu thành công!");
  window.location.href = "dangnhap.html";
});
