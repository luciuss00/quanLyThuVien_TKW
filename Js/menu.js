function kiemTraDangNhap() {
    var userIcon = document.getElementById("userIcon");
    var dropdown = document.getElementById("userDropdown");
    var btnDangNhap = document.getElementById("btnDangNhap");
    var btnDangKy = document.getElementById("btnDangKy");
    var btnDangXuat = document.getElementById("btnDangXuat");
    
    userIcon.onclick = function() {
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } 
        else {
            dropdown.style.display = "block";
        }
    };

    var username = localStorage.getItem("username");
    var role = localStorage.getItem("role");
    var docGiaMenu = document.querySelector('.menu a[href="/reader/docgia.html"]');
    if (docGiaMenu) {
        if (role !== "admin") {
            docGiaMenu.parentElement.style.display = "none";
        }
        else {
            docGiaMenu.parentElement.style.display = "inline-block";
        }
    }

    if (username) {
        btnDangNhap.style.display = "none";
        btnDangKy.style.display = "none";
        btnDangXuat.style.display = "block";
        userIcon.title = "Xin chào, " + username;
        const greet = document.getElementById("userGreeting");
        if (greet) {
            greet.textContent = "Xin chào, " + username + " !";
        }
    }
    else {
        btnDangNhap.style.display = "block";
        btnDangKy.style.display = "block";
        btnDangXuat.style.display = "none";
        userIcon.title = "Tài khoản";
        const greet = document.getElementById("userGreeting");
        if (greet) {
            greet.textContent = "";
        }
    }
    btnDangNhap.onclick = function() {
        window.location.href = "/login/dangnhap.html";
    };
    btnDangKy.onclick = function() {
        window.location.href = "/login/dangky.html";
    };
    btnDangXuat.onclick = function() {
        if(confirm("Bạn có chắc muốn đăng xuất không!")  === true) {
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            alert("Đăng xuất thành công!");
            window.location.href = "/Html/trangchu.html";
        }
    };
}
kiemTraDangNhap();

