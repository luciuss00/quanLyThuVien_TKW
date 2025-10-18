const formLogin = document.getElementById("formLogin");
const emailortel = document.getElementById("email/sdt");
const passwordE = document.getElementById("password");
const emailortelError = document.getElementById("emailortelEror");
const passwordError = document.getElementById("passwordError");
const LoginError = document.getElementById("LoginError");
formLogin.onsubmit = function(e) {
    e.preventDefault();
    let hasError = false;
    if(!emailortel.value.trim()) {
        emailortelError.style.display = "block";
        hasError = true;
    } 
    else emailortelError.style.display = "none";
    if(!passwordE.value.trim()) {
        passwordError.style.display = "block";
        hasError = true;
    } 
    else passwordError.style.display = "none";
    if (hasError) return;
    fetch("/admin.json")
        .then(res => res.json())
        .then(data => {
            const user = data.find(acc =>
                (acc.username === emailortel.value || acc.email === emailortel.value || acc.tel === emailortel.value)
                && acc.password === passwordE.value
            );
            if (!user) {
                LoginError.style.display = "block";
                return;
            }
            localStorage.setItem("username", user.username);
            localStorage.setItem("role", user.role);
            alert("Đăng nhập thành công!");
            window.location.href = "trangchu.html";
        })
        .catch(err => {
            console.error("Lỗi đọc accounts.json:", err);
            alert("Không thể đọc dữ liệu tài khoản (hãy chạy trên server).");
        });
    var username = localStorage.getItem("username");
    var role = localStorage.getItem("role");
    if (!username) { 
        window.location.href = "dangnhap.html";
    }
};
