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

  if (username) {
    btnDangNhap.style.display = "none";
    btnDangKy.style.display = "none";
    btnDangXuat.style.display = "block";

    userIcon.title = "Xin chào, " + username;
  } else {
    btnDangNhap.style.display = "block";
    btnDangKy.style.display = "block";
    btnDangXuat.style.display = "none";
    userIcon.title = "Tài khoản";
  }

    btnDangNhap.onclick = function() {
        window.location.href = "dangnhap.html";
    };

    btnDangKy.onclick = function() {
        window.location.href = "dangky.html";
    };

    btnDangXuat.onclick = function() {
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        alert("Đăng xuất thành công!");
        window.location.href = "trangchu.html";
    };
}
kiemTraDangNhap();
function chanDanhSachNeuChuaDangNhap() {
    var username = localStorage.getItem("username");
    var links = document.querySelectorAll('.menu a[href="danhsach.html"]');

    for (var i = 0; i < links.length; i++) {
      links[i].onclick = function(event) {
        if (!username) {
          event.preventDefault(); 
          alert("Vui lòng đăng nhập để xem danh sách sách!");
        }
      };
    }
}
  if (typeof kiemTraDangNhap === "function") kiemTraDangNhap();
  chanDanhSachNeuChuaDangNhap();
