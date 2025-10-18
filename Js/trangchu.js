function hienNutThemSach() {
    var role = localStorage.getItem("role");
    var container = document.getElementById("themSachContainer");
    if (!container) return;
    container.style.display = "none";
    if (role === "admin") {
        container.style.display = "block";
    }
}
function moTrangThemSach() {
    window.location.href = "themsach.html";
}
window.onload = function() {
    hienNutThemSach();
};
function xemTatCaSach() {
    var username = localStorage.getItem("username");
    if (!username) {
        alert("Vui lòng đăng nhập để xem tất cả sách!");
    } 
    else {
        window.location.href = "danhsach.html";
    }
}

function xemChiTiet(ten, tacGia, anh, moTa) {
  // Lưu thông tin sách vào localStorage
  var sach = { ten: ten, tacGia: tacGia, anh: anh, moTa: moTa };
  localStorage.setItem("sachChiTiet", JSON.stringify(sach));

  // Chuyển sang trang chi tiết
  window.location.href = "chitietsach.html";
}
